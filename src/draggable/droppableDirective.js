module.exports = function() {

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
