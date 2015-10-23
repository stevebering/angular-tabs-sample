function AlertPanelDirective() {
  return {
    restrict: 'E',
    scope: {
      alerts: '=',
      mode: '@'
    },
    templateUrl: function(tElement, tAttrs) {
        return getTemplateUrl(tAttrs.mode);
    },
    controller: Controller,
    controllerAs: 'vm',
    bindToController: true
  };
}

function Controller($log) {
  var vm = this;

  function init() {
    $log.debug(new Date() + ': Starting alertDirective in mode: ' + vm.mode + ' with data:', vm.alerts);
  }

  init();
}

function getTemplateUrl(mode) {
  console.log('getting template for mode: ', mode);
  if (mode === 'single') {
    return '/app/tab4/alertbar.html';
  }

  return '/app/tab4/alertlist.html';
}

Controller.$inject = ['$log'];

module.exports = AlertPanelDirective;