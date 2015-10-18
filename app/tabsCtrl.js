(function() {
  'use strict';

  var dependencies = ['$scope', '$state', '$modal', 'dataService', 'ModalService'];

  function TabsController($scope, $state, $modal, dataService, ModalService) {
      var vm = this;
      this.state = 'Tabs Route';

      this.go = function(route) {
          $state.go(route);
      };

      vm.tabs = [
        { id: 'tabs.tab1', title: 'Routed Tab', active: true, disabled: false, select: "vm.go('tabs.tab1')" },
        { id: 'tabs.tab2', title: 'Routed Tab w/ Layouts', active: false, disabled: false, select: "vm.go('tabs.tab2')" },
        { id: 'tabs.tab3', title: 'Toggled Tab', active: false, disabled: true, select: "vm.go('tabs.tab3')" },
        { id: 'tabs.tab4', title: 'Nested Directive', active: false, disabled: false, select: "vm.go('tabs.tab4')" },
        { id: 'tabs.tab5', title: 'Routed Directive', active: false, disabled: false, select: "vm.go('tabs.tab5')" },
      ];

      this.shouldShowNext = shouldShowNext;
      this.showNext = showNext;
      this.shouldShowPrev = shouldShowPrev;
      this.showPrev = showPrev;

      this.data = dataService.data;
      this.privateData = 'secret';

      activate();

      /////

      function getTabById(id) {
          for(var i=0; i<vm.tabs.length; i++) {
            if (vm.tabs[i].id === id) {
              return vm.tabs[i];
            }
          }
      }

      function setActiveTab(id) {
          for(var i=0; i<vm.tabs.length; i++) {
            vm.tabs[i].active = vm.tabs[i].id === id;
          }
      }

      function getNextId(array, currentId) {
          if (!array) { return; }
          var index = array.indexOf(currentId);
          if (index >= 0 && index < array.length - 1) {
              return array[index+1];
          }
      }

      function getPreviousId(array, currentId) {
          if (!array) { return; }
          var index = array.indexOf(currentId);
          if (index > 0) {
              return array[index-1];
          }
      }

      function hasCurrentItem(self) {
          return self.data.item && self.data.item.id && self.data.keys && self.data.keys.length;
      }

      function shouldShowNext() {
          if (hasCurrentItem(this)) {
              var nextId = getNextId(this.data.keys, this.data.item.id);
              return typeof nextId !== 'undefined';
          }
          return false;
      }

      function shouldShowPrev() {
          if (hasCurrentItem(this)) {
              var prevId = getPreviousId(this.data.keys, this.data.item.id);
              return typeof prevId !== 'undefined';
          }
          return false;
      }

      function showNext() {
          var nextId = getNextId(this.data.keys, this.data.item.id);
          var promise = dataService.select(nextId);
          showBootstrapModal(promise, nextId)
              .then(function(result) {
                  setupTabs(nextId, result)
              });
      }

      function showPrev() {
          var prevId = getPreviousId(this.data.keys, this.data.item.id);
          var promise = dataService.select(prevId);
          showBootstrapModal(promise, prevId)
              .then(function(result) {
                  setupTabs(prevId, result)
              });
      }

      function setupTabs(id, result) {
          result.promise.then(function(data) {
              getTabById('tabs.tab3').disabled = data.id && data.id !== 2;
              vm.go('tabs.tab1');
          });
      }

      function showBootstrapModal(promise, itemId) {
          var modalInstance = $modal.open({
              // create modal entity and resolve controller
              templateUrl: 'app/templates/promiseWaiter.html',
              controller: 'promiseWaiter',
              controllerAs: 'vm',
              backdrop: 'static',
              keyboard: false,
              size: 'sm',
              resolve: {
                  data: function() {
                      return {
                          promise: promise,
                          title: 'Loading item ' + itemId + '...'
                      }
                  }
              }
          });

          return modalInstance.result.then(function(result) {
              // called when we return successfully
              return {
                  result: result,
                  promise: promise
              };
          }, function() {
              // called when we dismiss instead of saying 'OK'
              return {
                  result: 'Cancel',
                  promise: promise
              };
          });
      }

      function activate() {
          // within this page, if we change state successfully, we need to update our active tab
          $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
              setActiveTab(toState.name);
          });

          dataService.load().then(function() {
              var promise = dataService.select(1);
              showBootstrapModal(promise, 1)
                  .then(function(result) {
                      setupTabs(1, result)
                  });
          }).catch(function(e) {

          });
      }
  }

  TabsController.$inject = dependencies;

  angular.module('app')
    .controller('TabsController', TabsController);

})();
