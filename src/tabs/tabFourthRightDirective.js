function Controller($log) {
	var vm = this;

	function init() {
		$log.debug(new Date() + ': Starting tab4-right directive with data:', vm.data);
	}

	init();
}

Controller.$inject = ['$log'];

function tabFourthRightDirective() {
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
	};
}

module.exports = tabFourthRightDirective;
