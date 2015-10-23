/* jslint node: true */
/* global angular: false, require: false, module: false */

'use strict';

function tabFourthDirective() {
	return {
		restrict: 'E',
		scope: {
			data: '=',
			privateData: '='
		},
		templateUrl: 'app/tab4/tab4Directive.html',
		controller: Controller,
		controllerAs: 'vm',
		bindToController: true
	};
}

function Controller($log) {
	var vm = this;

	function init() {
		$log.debug(new Date() + ': Starting tab4 directive with data:', vm.data);
	}

	init();
}

Controller.$inject = ['$log'];

module.exports = tabFourthDirective;
