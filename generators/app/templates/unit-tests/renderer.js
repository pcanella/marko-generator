'use strict';

var expect = require('chai').expect;
var renderer = require('../renderer');
var mockData = require('../mock-data');

var input = {
    model: mockData.input.full
};

describe('my-component tests', function () {
    var getInitialState = renderer.privates.getInitialState;

    it('basic sample test', function () {
        renderer.render(input, function (err, out) {
            // some sort of fancy test here.
        });
    });
});