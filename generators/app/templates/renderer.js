'use strict';

var template = require('./template.marko');
/**
 * Sets initial state for marko widget
 * This optional method is used to determine the initial state for a newly rendered UI component.
 *
 * @param {Object} input
 */

function getInitialState(input) {
   return input;
}

/**
 * Determines what data to pass to widget template
 * This optional method is used to determine what data will be passed to the Marko template
 * that is used to render the UI component.
 *
 * @param {Object} state
 * @param {Object} input
 */
function getTemplateData(state, input) {
    return state;
}

/**
 * Exports refinepanel-footer marko component
 */

module.exports = require('marko-widgets').defineRenderer({
    template: template,
    getInitialState: getInitialState,
    getTemplateData: getTemplateData
});
