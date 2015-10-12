(function() {
	'use strict';
	
	function Controller($log) {
		var vm = this;
		
		function init() {
			$log.debug(new Date() + ': Starting tab4-left directive with data:', vm.data);
		}
		
		init();
	}
	
	Controller.$inject = ['$log'];
	
	function Directive() {
		return {
			restrict: 'E',
			scope: {
				data: '=',
				state: '@'
			},
			templateUrl: 'app/tab1/left.html',
			controller: Controller,
			controllerAs: 'vm',
			bindToController: true			
		}
	}
	
	angular.module('app')
		.directive('tabFourthLeft', Directive);

})();

(function() {
	'use strict';
	
	function Controller($log) {
		var vm = this;
		
		function init() {
			$log.debug(new Date() + ': Starting tab4-middle directive with data:', vm.data);
		}
		
		init();
	}
	
	Controller.$inject = ['$log'];
	
	function Directive() {
		return {
			restrict: 'E',
			scope: {
				data: '=',
				state: '@'
			},
			templateUrl: 'app/tab1/middle.html',
			controller: Controller,
			controllerAs: 'vm',
			bindToController: true			
		}
	}
	
	angular.module('app')
		.directive('tabFourthMiddle', Directive);

})();

(function() {
	'use strict';
	
	function Controller($log) {
		var vm = this;
		
		function init() {
			$log.debug(new Date() + ': Starting tab4-right directive with data:', vm.data);
		}
		
		init();
	}
	
	Controller.$inject = ['$log'];
	
	function Directive() {
		return {
			restrict: 'E',
			scope: {
				data: '=',
				state: '@'
			},
			templateUrl: 'app/tab1/right.html',
			controller: Controller,
			controllerAs: 'vm',
			bindToController: true
		}
	}
	
	angular.module('app')
		.directive('tabFourthRight', Directive);

})();

(function() {
	'use strict';
	
	function Controller($log) {
		var vm = this;
		
		function init() {
			$log.debug(new Date() + ': Starting tab4 directive with data:', vm.data);
		}
		
		init();
	}
	
	Controller.$inject = ['$log'];
	
	function Directive() {
		return {
			restrict: 'E',
			scope: {
				data: '=',
				privateData: '='
			},
			templateUrl: 'app/tab1/tab1Directive.html',
			controller: Controller,
			controllerAs: 'vm',
			bindToController: true
		}
	}
	
	angular.module('app')
		.directive('tabFourth', Directive);

})();

(function() {
	'use strict';

	function Controller($log) {
		var vm = this;

		$log.debug('In draggableList controller....');

		vm.onListMove = onListMove;

		function onListMove(item, fromListId, toList) {
			$log.debug('Moving item ' + item.name + ' to list ' + toList.id);
			vm.onDrop()(item, fromListId, toList);	
		}
	}

	Controller.$inject = ['$log'];

	function Directive() {
		return {
			restrict: 'E',
			scope: {
				list: '=',
				onDrop: '&droppableDrop'
			},
			templateUrl: 'hospital-census-item.html',
			controller: Controller,
			controllerAs: 'vm',
			bindToController: true
		}
	}

	angular.module('app')
		.directive('draggableList', Directive);

})();

(function() {
	'use strict';

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

	function Directive() {
		return {
			restrict: 'E',
			scope: {
				lists: '='
			},
			templateUrl: 'hospital-census.html',
			controller: Controller,
			controllerAs: 'vm',
			bindToController: true,
			transclude: true
		}
	}

	angular.module('app')
		.directive('draggableListList', Directive);

})();