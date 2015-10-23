/* jslint node: true */
/* global angular: false, require: false, module: false */

'use strict';

function tabFourthLeftDirective() {
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
	};
}

function Controller($log) {
	var vm = this;

	function init() {
		$log.debug(new Date() + ': Starting tab4-left directive with data:', vm.data);
	}

	init();
}

Controller.$inject = ['$log'];

module.exports = tabFourthLeftDirective;
