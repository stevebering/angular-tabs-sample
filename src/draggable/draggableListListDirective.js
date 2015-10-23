function Controller($log) {
	var vm = this;

	$log.debug('In draggableListList controller....');

	vm.onListMove = onListMove;

	function onListMove(item, fromListId, toList) {
		$log.debug('Moving item ' + item.name + ' to list ' + toList.id);
		// get the list we are pulling the item from
		var fromList = getListById(fromListId);
		// find the index of the item in the originating list
		var itemIndex = item.index;
		// put the item into the destination list
		toList.items.push(fromList.items[itemIndex]);
		// remove the item from the source list
          fromList.items.splice(itemIndex, 1);
	}

	function getListById(id) {
		for (var index=0; index < vm.lists.length; index++) {
			if (vm.lists[index].id === id) {
				return vm.lists[index];
			}
		}
	}
}

Controller.$inject = ['$log'];

module.exports = function Directive() {
	return {
		restrict: 'E',
		scope: {
			lists: '='
		},
		templateUrl: 'app/templates/hospital-census.html',
		controller: Controller,
		controllerAs: 'vm',
		bindToController: true,
		transclude: true
	};
};
