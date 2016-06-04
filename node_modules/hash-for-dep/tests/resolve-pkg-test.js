'use strict';
var path = require('path');
var assert = require('assert');
var resolvePkg = require('../lib/resolve-pkg');

var fixturesPath = path.join(__dirname, 'fixtures');

describe('resolvePkg', function() {
  it('Resolves to the absolute main entry point path of the provided package', function() {
    assert.equal(resolvePkg('./'), path.resolve('./'));
    assert.equal(resolvePkg('foo', fixturesPath), path.join(fixturesPath, 'node_modules/foo'));
    assert.equal(resolvePkg('/my-cool/path/', fixturesPath), '/my-cool/path/');
  });

  it('Resolves to the module directory if no main entry is defined', function() {
    assert.equal(resolvePkg('no-main/', fixturesPath), path.join(fixturesPath, 'node_modules/no-main/'));
  });
});
