/* jslint node: true */
/* global angular: false, require: false, module: false */

'use strict';

module.exports = function() {

  var start = function(event, ui) {
    ui.helper.addClass('ui-dragging');
  };

  var stop = function(event, ui) {

  };

  var linker = function(scope, element, attrs) {
    element.draggable({
        containment: 'document',
        helper: 'clone',
        cursor: 'move',
        revert: 'invalid',
        revertDuration: 500,
        start: start,
        stop: stop,
        stack: '.ui-draggable'
    });

    var parentId = element.parent()[0].id;
    element.data('list', parentId);
    element.addClass('ui-draggable');
  };

  return {
    restrict: 'A',
    link: linker,
    scope: {
      itemString: '@item'
    }
  };
};
