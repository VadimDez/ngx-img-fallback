'use strict';

var expect = require('chai').expect;
var amd = require('./index');
var moduleResolve = amd.moduleResolve;
var resolveModules = amd.resolveModules;

describe('module resolver', function () {
  it('should resolve relative sibling', function() {
    expect(moduleResolve('./foo', 'example/bar')).to.eql('example/foo');
  });

  it('should resolve relative parent', function() {
    expect(moduleResolve('../foo', 'example/bar/baz')).to.eql('example/foo');
  });

  it('should be a pass through if absolute', function() {
    expect(moduleResolve('foo/bar', 'example/')).to.eql('foo/bar');
  });

  it('should throw parent module of root is accesed', function() {
    expect(function() {
      return moduleResolve('../../bizz', 'example')
    }).to.throw(/Cannot access parent module of root/);
  });
  
  it('should not throw if specified', function() {
    expect(function() {
      var r = resolveModules({ throwOnRootAccess: false });
      return r('../../bizz', 'example')
    }).to.not.throw(/Cannot access parent module of root/);
  });
});