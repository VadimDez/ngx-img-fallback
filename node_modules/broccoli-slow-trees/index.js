function ellipsize(string, desiredLength) {
  if (string.length > desiredLength) {
    return string.slice(0, desiredLength - 3) + '...';
  } else {
    return string;
  }
}

function printSlowNodes(nodeWrapper, factor) {
  try {
    var allSortResults = sortResults(nodeWrapper)
    var flatSortedNodes = allSortResults.flatSortedNodes
    var groupedSortedNodes = allSortResults.groupedSortedNodes

    var minimumTime = nodeWrapper.buildState.totalTime * (factor || 0.05)
    var logLines = [],
        cumulativeLogLines = [];

    var MAX_NAME_CELL_LENGTH = 45,
        MAX_VALUE_CELL_LENGTH = 20;

    for (var i = 0; i < flatSortedNodes.length; i++) {
      var nw = flatSortedNodes[i]

      if (nw.buildState.selfTime > minimumTime) {
        logLines.push(pad(ellipsize(nw.label, MAX_NAME_CELL_LENGTH), MAX_NAME_CELL_LENGTH) + ' | ' + pad(Math.floor(nw.buildState.selfTime) + 'ms', MAX_VALUE_CELL_LENGTH))
      }
    }

    if (logLines.length > 0) {
      logLines.unshift(pad('', MAX_NAME_CELL_LENGTH, '-') + '-+-' + pad('', MAX_VALUE_CELL_LENGTH, '-'))
      logLines.unshift(pad('Slowest Nodes', MAX_NAME_CELL_LENGTH) + ' | ' + pad('Total', MAX_VALUE_CELL_LENGTH))
    }

    for (var i = 0; i < groupedSortedNodes.length; i++) {
      var group = groupedSortedNodes[i],
          averageStr

      if (group.totalSelfTime > minimumTime) {
        if (group.nodeWrappers.length > 1) {
          averageStr = ' (' + Math.floor(group.averageSelfTime) + ' ms)';
        } else {
          averageStr = '';
        }

        var countStr = ' (' + group.nodeWrappers.length + ')'
        var nameStr = ellipsize(group.name, MAX_NAME_CELL_LENGTH - countStr.length)

        cumulativeLogLines.push(pad(nameStr + countStr, MAX_NAME_CELL_LENGTH) + ' | ' + pad(Math.floor(group.totalSelfTime) + 'ms' + averageStr, MAX_VALUE_CELL_LENGTH))
      }
    }

    if (cumulativeLogLines.length > 0) {
      cumulativeLogLines.unshift(pad('', MAX_NAME_CELL_LENGTH, '-') + '-+-' + pad('', MAX_VALUE_CELL_LENGTH, '-'))
      cumulativeLogLines.unshift(pad('Slowest Nodes (cumulative)', MAX_NAME_CELL_LENGTH) + ' | ' + pad('Total (avg)', MAX_VALUE_CELL_LENGTH))
      cumulativeLogLines.unshift('\n')
    }

    console.log('\n' + logLines.join('\n') + cumulativeLogLines.join('\n') + '\n')
  } catch (e) {
    console.error('Error when printing slow nodes:', e);
    console.error(e.stack)
  }
}

function sortResults(nodeWrapper) {
  var flattenedNodes = []
  var nodesGroupedByName = Object.create(null)
  var groupedNodes = [];

  function process(nw) {
    if (flattenedNodes.indexOf(nw) > -1) { return } // for de-duping

    flattenedNodes.push(nw)

    if (nodesGroupedByName[nw.label] == null) {
      nodesGroupedByName[nw.label] = {
        name: nw.label,
        nodeWrappers: [],
        totalSelfTime: undefined, // to calculate
        averageSelfTime: undefined // to calculate
      }
    }
    nodesGroupedByName[nw.label].nodeWrappers.push(nw)

    var length = nw.inputNodeWrappers.length
    for (var i = 0; i < length; i++) {
      process(nw.inputNodeWrappers[i])
    }
  }

  process(nodeWrapper) // kick off with the top item

  var flatSortedNodes = flattenedNodes.sort(function(a, b) {
    return b.buildState.selfTime - a.buildState.selfTime
  })

  var numNodesThatAreUsedMoreThanOnce = 0;


  for (var groupName in nodesGroupedByName) {
    var group = nodesGroupedByName[groupName];

    group.totalSelfTime = group.nodeWrappers.reduce(function(sum, nw) {
      return sum + nw.buildState.selfTime
    }, 0);

    group.averageSelfTime = group.totalSelfTime / group.nodeWrappers.length;

    groupedNodes.push(group);

    if (group.nodeWrappers.length > 1) {
      numNodesThatAreUsedMoreThanOnce += 1;
    }
  }

  var flatSortedNodes = flattenedNodes.sort(function(a, b) {
    return b.selfTime - a.selfTime
  })

  var groupedSortedNodes = [];

  // Only return/show the grouped/cumulative results if there are some nodes used
  // more than once.
  if (numNodesThatAreUsedMoreThanOnce > 0) {
    groupedSortedNodes = groupedNodes.sort(function(a, b) {
      return b.totalSelfTime - a.totalSelfTime
    })
  }

  return {
    flatSortedNodes: flattenedNodes,
    groupedSortedNodes: groupedSortedNodes
  }
}

function pad(str, len, char, dir) {
  if (!char) { char = ' '}

  if (len + 1 >= str.length)
    switch (dir){
      case 'left':
        str = Array(len + 1 - str.length).join(char) + str
        break

      case 'both':
        var padlen = len - str.length
        var right = Math.ceil(padlen / 2)
        var left = padlen - right
        str = Array(left + 1).join(char) + str + Array(right + 1).join(char)
        break

      default:
        str = str + Array(len + 1 - str.length).join(char)
    }

  return str
}

module.exports = printSlowNodes
