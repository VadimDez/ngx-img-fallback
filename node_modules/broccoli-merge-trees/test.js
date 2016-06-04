var MergeTrees = require('./')
var chai = require('chai'), expect = chai.expect
var chaiAsPromised = require('chai-as-promised'); chai.use(chaiAsPromised)
var Fixture = require('broccoli-fixture')

function mergeFixtures(inputFixtures, options) {
  return Fixture.build(new MergeTrees(inputFixtures.map(inputFixture), options))
}

function inputFixture(obj) {
  return new Fixture.Node(obj)
}

function mapBy(array, property) {
  return array.map(function (item) {
    return item[property];
  });
}

describe('MergeTrees', function() {
  describe('_mergeRelativePaths', function() {
    it('returns an array of file infos', function() {
      var mergeTrees = new MergeTrees([]);
      mergeTrees.inputPaths = [__dirname + '/tests/fixtures/a'];
      mergeTrees.outputPath = __dirname + '/tmp/output';

      var fileInfos = mergeTrees._mergeRelativePath('');
      var entries = mapBy(fileInfos, 'entry');

      expect(mapBy(entries, 'relativePath')).to.deep.equal([
        'bar.js',
        'foo.js',
      ]);
    });
  });

  it('merges files', function() {
    return expect(mergeFixtures([
      {
        foo: '1'
      }, {
        baz: '2'
      }
    ])).to.eventually.deep.equal({
      foo: '1',
      baz: '2'
    })
  })


  it('merges empty directories', function() {
    return expect(mergeFixtures([
      {
        foo: {},
        bar: {}
      }, {
        bar: {},
        baz: {}
      }
    ])).to.eventually.deep.equal({
      foo: {},
      bar: {},
      baz: {}
    })
  })

  it('refuses to overwrite files by default', function() {
    return expect(mergeFixtures([
      {
        foo: '1a',
        bar: '2a'
      }, {
        foo: '1b',
        bar: '2b'
      }
    ])).to.be.rejectedWith(/Merge error: file bar exists in .* and [^]* overwrite: true/)
  })

  it('overwrites files with { overwrite: true }', function() {
    return expect(mergeFixtures([
      {
        foo: '1a',
        bar: '2a',
      }, {
        bar: '2b',
        baz: '3b'
      }, {
        baz: '3c'
      }
    ], {
      overwrite: true
    })).to.eventually.deep.equal({
      foo: '1a',
      bar: '2b',
      baz: '3c'
    })
  })

  it('adds non-conflicting non-empty directories to the output', function() {
    return expect(mergeFixtures([
      {
        foo: {
          bar: '1a',
        }
      }, {
      }
    ])).to.eventually.deep.equal({
      foo: {
        bar: '1a',
      }
    })
  });

  it('adds nested non-conflicting non-empty directories to the output', function() {
    return expect(mergeFixtures([
      {
        foo: {
          bar: '1a',
          baz: {
            qux: {
              quux: '1b',
            }
          }
        }
      }, {
        bar: '2a',
      }
    ])).to.eventually.deep.equal({
      foo: {
        bar: '1a',
        baz: {
          qux: {
            quux: '1b',
          }
        }
      },
      bar: '2a',
    })
  });

  it('removes non-conflicting non-empty directories', function() {
    var source = inputFixture({
      foo: {
        bar: '1a',
      }
    });
    var fixture = new Fixture.Builder(new MergeTrees([source]));

    return expect(fixture.build().then(function () {
      source.fixture = {};
      return fixture.build();
    })).to.eventually.deep.equal({});
  });

  it('removes nested non-conflicting non-empty directories', function() {
    var source = inputFixture({
      foo: {
        bar: {
          baz: '1a',
        },
      },
    });
    var sibling = inputFixture({
      foo: {
        qux: '2a',
      }
    });
    var fixture = new Fixture.Builder(new MergeTrees([source, sibling]));

    return expect(fixture.build().then(function () {
      source.fixture = {};
      return fixture.build();
    })).to.eventually.deep.equal({
      foo: {
        qux: '2a',
      }
    });
  });

  it('refuses to honor conflicting capitalizations, with overwrite: false and true', function() {
    function expectItToRefuseConflictingCapitalizations(type, options) {
      var content = type === 'dir' ? {} : 'hello world'
      return expect(mergeFixtures([
        {
          FOO: content
        }, {
          Foo: content
        }
      ], options)).to.be.rejectedWith(/Merge error: conflicting capitalizations:\nFOO in .*\nFoo in .*\nRemove/)
    }

    return expectItToRefuseConflictingCapitalizations('file', { overwrite: false })
      .then(function() {
        return expectItToRefuseConflictingCapitalizations('dir', { overwrite: false })
      }).then(function() {
        return expectItToRefuseConflictingCapitalizations('file', { overwrite: true })
      }).then(function() {
        return expectItToRefuseConflictingCapitalizations('dir', { overwrite: true })
      })
  })

  it('merges directories', function() {
    return expect(mergeFixtures([
      {
        subdir: {
          foo: '1'
        }
      }, {
        subdir2: {}
      }, {
        subdir: {
          bar: '2'
        }
      }
    ])).to.eventually.deep.equal({
      subdir: {
        foo: '1',
        bar: '2'
      },
      subdir2: {}
    })
  })

  it('rejects directories colliding with files, with overwrite: false and true', function() {
    function expectItToRejectTypeCollisions(options) {
      return expect(mergeFixtures([
        {
          foo: {}
        }, {
          foo: 'hello'
        }
      ], options)).to.be.rejectedWith(/Merge error: conflicting file types: foo is a directory in .* but a file in .*/)
      .then(function() {
        return expect(mergeFixtures([
          {
            foo: 'hello'
          }, {
            foo: {}
          }
        ], options)).to.be.rejectedWith(/Merge error: conflicting file types: foo is a file in .* but a directory in .*/)
      })
    }

    return expectItToRejectTypeCollisions({ overwrite: false })
      .then(function() {
        return expectItToRejectTypeCollisions({ overwrite: true })
      })
  })
})


require('mocha-jshint')()
