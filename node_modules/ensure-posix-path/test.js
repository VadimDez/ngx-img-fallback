var ensurePosix = require('./');
var path = require('path');
var expect = require('chai').expect;
var path32 = require('path-win32')
var pathPosix = require('path-posix')

describe('ensurePosixPath', function() {
  describe('in win32', function() {
    var old;

    before(function() {
      old = path.sep;
      path.sep = path32.sep;
    });

    after(function() {
      path.sep = old;
    });

    it('leaves posix paths untouched', function() {
      expect(ensurePosix('/foo/bar/baz')).to.eql('/foo/bar/baz');
    });

    it('converts win32  paths to posix', function() {
      expect(ensurePosix(path32.join('foo', 'bar', 'baz'))).to.eql('foo/bar/baz');
    });

    it('converts win32 & posix mixed paths to posix', function() {
      expect(ensurePosix(pathPosix.join(path32.join('foo', 'bar', 'baz'), 'apple', 'pie'))).to.eql('foo/bar/baz/apple/pie');
    });
  });

  describe('unknown sep', function() {
    var old;

    before(function() {
      old = path.sep;
      path.sep = '☃';
    });

    after(function() {
      path.sep = old;
    });

    it('leaves posix paths untouched', function() {
      expect(ensurePosix('/foo/bar/baz')).to.eql('/foo/bar/baz');
    });

    it('converts win32 paths to posix', function() {
      expect(ensurePosix("☃foo☃bar☃baz")).to.eql('/foo/bar/baz');
    });

    it('converts mixed win32 & posix paths to posix', function() {
      expect(ensurePosix('☃foo/bar☃baz')).to.eql('/foo/bar/baz');
    });
  })
});
