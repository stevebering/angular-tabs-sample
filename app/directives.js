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
			// don't override scope to allow pass through from parent
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