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


(function() {
    'use strict';

    var droppable = function() {

        var drop = function(event, ui, scope) {
            var dragItem = angular.element(ui.draggable).data('item'),
                reject = angular.element(ui.draggable).data('reject'),
                dragFromListId = angular.element(ui.draggable).data('list');

            if (reject) {
                ui.draggable.draggable('option', 'revert', true);
                return;
            }

            var moveToList = scope.model.list;

            if (dragItem && dragFromListId && moveToList && scope.onDrop) {
                scope.onDrop()(dragItem, dragFromListId, moveToList);
            }

            console.log('moving items from list to list:', dragItem, dragFromListId, moveToList);
            scope.$apply();
        };

        var link = function(scope, element, attrs) {
            element.droppable({
                hoverClass: 'ui-droppable-hover',
                drop: function(event, ui) {
                    drop(event, ui, scope);
                }
            });
        };

        return {
            restrict: 'A',
            link: link,
            scope: {
                model: '=droppableModel',
                onDrop: '&droppableDrop'
            }
        };
    };

    droppable.$inject = [];

    angular.module('app')
        .directive('droppable', droppable);

    angular.module('app')
        .filter('index', function() {
            return function (array, index) {
                if (!index) {
                    index = 'index';
                }

                for (var i=0; i < array.length; i++) {
                    array[i][index] = i;
                }

                return array;
            }
        });
})();