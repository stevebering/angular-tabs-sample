/**
 * Created by stevebering on 10/9/15.
 */

(function() {
    'use strict';

    var draggable = function() {

        var start = function(event, ui) {
            ui.helper.addClass('ui-dragging');
        };

        var stop = function(event, ui) {
        };

        var link = function(scope, element, attrs) {
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
            link: link,
            scope: {
                itemString: '@item'
            }
        };
    };

    draggable.$inject = [];

    angular.module('app')
        .directive('draggable', draggable);

})();
