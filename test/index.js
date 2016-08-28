'use strict';

var path = require('path');
var fs = require('fs');
var yeoman = require('yeoman-generator');
var helpers = require('yeoman-test');
var assert = require('yeoman-assert');

describe('generator-angular-es6', function () {

    describe('default generator', function () {

        // it('should put all project files in current working directory', function (done) {
        //     mockPrompt({name: 'module', objectType: 'controller'});
        //     gulp.start('default').once('stop', function () {
        //         mockGulpDest.cwd().should.equal(__dirname);
        //         mockGulpDest.basePath().should.equal(__dirname);
        //         done();
        //     });
        // });

        it('should create a controller in the current working directory', function (done) {
            helpers.run(path.join(__dirname, '../app'))
                .withPrompts({name: 'module', objectType: 'controller'})
                .toPromise()
                .then(function () {
                    assert.file('controller.js');
                    done();
                });
        });

        it('should create a directive in the current working directory', function (done) {
            helpers.run(path.join(__dirname, '../app'))
                .withPrompts({name: 'module', objectType: 'directive'})
                .toPromise()
                .then(function () {
                    assert.file('directive.js');
                    done();
                });
        });

        it('should create a filter in the current working directory', function (done) {
            helpers.run(path.join(__dirname, '../app'))
                .withPrompts({name: 'module', objectType: 'filter'})
                .toPromise()
                .then(function () {
                    assert.file('filter.js');
                    done();
                });
        });

        it('should create a service in the current working directory', function(done) {
            helpers.run(path.join(__dirname, '../app'))
                .withPrompts({name: 'module', objectType: 'service'})
                .toPromise()
                .then(function () {
                    assert.file('service.js');
                    done();
                });
        });

    });
});