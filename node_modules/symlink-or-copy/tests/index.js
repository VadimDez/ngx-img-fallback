var assert = require('assert');
var symLinkOrCopy = require('..');

describe('node-symlink-or-copy', function() {
  beforeEach(function() {
    symLinkOrCopy.setOptions({}); // make sure we don't mix options between tests
  });

  it('windows falls back to junction for dir', function() {
    var count = 0;
    var lstatSyncCount = 0;
    var isDirectoryCount = 0;
    symLinkOrCopy.setOptions({
      isWindows: true,
      copyDereferenceSync: function() {
        count++;
      },
      canSymLink: false,
      fs: {
       lstatSync: function() {
         lstatSyncCount++;
          return {
            isSymbolicLink: function() {
              return true;
            },
            isDirectory: function() {
              isDirectoryCount++;
              return true;
            }
          }
        },
        realpathSync: function() {count++},
        symlinkSync: function() {count++;}
      }
    });
    symLinkOrCopy.sync('foo', 'bar');
    assert.equal(count, 2);
    assert.equal(lstatSyncCount, 2);
    assert.equal(isDirectoryCount, 2);
  });


  it('windows falls back to copy for file', function() {
    var count = 0
    var lstatSyncCount = 0
    var isDirectoryCount = 0
    var readFileSyncCount = 0
    var writeFileSyncCount = 0
    var utimesSyncCount = 0
    symLinkOrCopy.setOptions({
      isWindows: true,
      copyDereferenceSync: function() {
        count++
      },
      canSymLink: false,
      fs: {
       lstatSync: function() {
         lstatSyncCount++
            return {
              isSymbolicLink: function() {
                return true
              },
              isDirectory: function() {
                isDirectoryCount++
                  return false
              }
            };
        },
        readFileSync: function() {
          readFileSyncCount++
            return 'foo';
        },
        writeFileSync: function() {
          writeFileSyncCount++
            return 'foo';
        },
        realpathSync: function() {count++},
        symlinkSync: function() {count++},
        utimesSync: function() {utimesSyncCount++}
      }
    });

    symLinkOrCopy.sync('foo', 'bar');
    assert.equal(count, 1);
    assert.equal(lstatSyncCount, 2);
    assert.equal(isDirectoryCount, 2);
    assert.equal(writeFileSyncCount, 1);
    assert.equal(readFileSyncCount, 1);
    assert.equal(utimesSyncCount, 1);
  });

  it('windows symlinks when has permission', function() {
    var count = 0;
    symLinkOrCopy.setOptions({
      fs: {
       lstatSync: function() {
          return {
            isSymbolicLink: function() {
              count++;
              return true;
            },
            isDirectory: function() {
              return true;
            }
          }
        },
        realpathSync: function() {count++},
        symlinkSync: function() {count++;}
      },
      canSymlink: true,
      isWindows: true
    });
    symLinkOrCopy.sync('foo', 'bar');
    assert.equal(count, 3);
  })
});

describe('testing mode', function() {
  it('allows fs to be mocked', function() {
    var count = 0;
    symLinkOrCopy.setOptions({
      canSymlink: true,
      fs: {
        lstatSync: function() {
          return {
            isSymbolicLink: function() {
              count++;
              return true;
            },
            isDirectory: function() {
              return true;
            }
          }
        },
        realpathSync: function() {count++},
        symlinkSync: function() {count++;}
      }
    });

    assert.equal(count, 0);
    symLinkOrCopy.sync();
    assert.equal(count, 3);
  });
});
