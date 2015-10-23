/* jslint node: true */
/* global angular: false, require: false, module: false */

'use strict';

function tabFourthMiddleController($log) {
	var vm = this;

	function init() {
		$log.debug(new Date() + ': Starting tab4-middle directive with data:', vm.data);
	}

	init();
}

tabFourthMiddleController.$inject = ['$log'];

function tabFourthMiddleDirective() {
	return {
		restrict: 'E',
		scope: {
			data: '=',
			state: '@'
		},
		templateUrl: 'app/tab1/middle.html',
		controller: tabFourthMiddleController,
		controllerAs: 'vm',
		bindToController: true
	};
}

module.exports = tabFourthMiddleDirective;
