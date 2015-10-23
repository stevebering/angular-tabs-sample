function DraggableListController($log) {
	var vm = this;

	$log.debug('In draggableList controller....');

	vm.onListMove = onListMove;

	function onListMove(item, fromListId, toList) {
		$log.debug('Moving item ' + item.name + ' to list ' + toList.id);
		vm.onDrop()(item, fromListId, toList);
	}
}

DraggableListController.$inject = ['$log'];

module.exports = function DraggableListDirective() {
	return {
		restrict: 'E',
		scope: {
			list: '=',
			onDrop: '&droppableDrop'
		},
		templateUrl: 'app/templates/hospital-census-item.html',
		controller: DraggableListController,
		controllerAs: 'vm',
		bindToController: true
	};
};
