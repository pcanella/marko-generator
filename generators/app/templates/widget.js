/* globals document, window */

'use strict';
var renderer = require('./renderer');

module.exports = require('marko-widgets').defineWidget({

    /**
     * renderer is a shortcut for rendering your marko template.
     */

    renderer: renderer,

    /**
     * init method:
     * The init(widgetConfig) constructor method is called once in the browser when the
     * widget is first created and after the widget has been mounted in the DOM. The init
     * (widgetConfig) method is only called once for a given widget.
     */

    init: function () {

    },

    /**
     * onBeforeUpdate method:
     *The onBeforeUpdate() method is called when a widget's view is about to be updated due
     * to either new properties or a state change.
     */

    onBeforeUpdate: function () {

    },

    /**
     * onUpdate method:
     * The onUpdate() method is called when a widget's view has been updated due to either
     * new properties or a state change. The DOM nodes have been updated accordingly by time
     * this method has been called.
     */

    onUpdate: function () {

    },

    /**
     * onRender method:
     * Called when the widget has been rendered (or rerendered) and is mounted to the DOM.
     * The event argument will be an object. If the event is being fired for the first
     * render then the event argument will have the firstRender property set to true.
     */

    onRender: function (event) {

    },

    /**
     * onBeforeDestroy method:
     * The onBeforeDestroy() method is called when a widget is about to be
     * destroyed due to it being formed from the DOM.
     */

    onBeforeDestroy: function () {

    },
    /**
     * onDestroy method:
     * This is called after a widget has been destroyed and removed from the DOM.
     */

    onDestroy: function () {

    },

    /**
     * shouldUpdate method
     * The shouldUpdate(newProps, newState) method is called when a widget's view is
     * about to be updated. Returning false will prevent the widget's view from being
     * updated.
     */

    shouldUpdate: function (newProps, newState) {

    },

}
});
