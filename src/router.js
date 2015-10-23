'use strict';

module.exports = function($stateProvider, $urlRouterProvider) {
  $stateProvider
      .state('home', {
          url: '/',
          templateUrl: 'app/app.html',
          controller: function($scope, $state) {
              this.state = "Home Route";

              this.go = function(route) {
                  $state.go(route);
              }
          },
          controllerAs: 'vm'
      })

      .state('dragDrop', {
          url: '/drag',
          templateUrl: 'app/dragDrop.html',
          controller: function() {
              var vm = this;

              vm.list1 = {
                  id: 'list1',
                  name: 'Software',
                  items: [
                      { name: 'JavaScript', reject: true },
                      { name: 'C#' },
                      { name: 'Sass' },
                      { name: 'SQL' },
                      { name: 'HTML' },
                      { name: 'Java' },
                      { name: 'NodeJS' },
                      { name: 'Ruby' },
                      { name: 'LESS' }
                  ]
              };

              vm.list2 = {
                  id: 'list2',
                  name: 'Beverages',
                  items: [
                      { name: 'Coffee' },
                      { name: 'Scotch' },
                      { name: 'Bourbon' }
                  ]
              };

              vm.list3 = {
                  id: 'list3',
                  name: 'Greek Gods',
                  items: [
                      { name: 'Zeus' },
                      { name: 'Athena' },
                      { name: 'Poseidon' }
                  ]
              }

              vm.list4 = {
                  id: 'list4',
                  name: 'Vegetables',
                  items: [
                      { name: 'Brussel Sprouts' },
                      { name: 'Cabbage' },
                      { name: 'Broccoli' }
                  ]
              }

              vm.list5 = {
                  id: 'list5',
                  name: 'Fruits',
                  items: [
                      { name: 'Bananas' },
                      { name: 'Oranges' },
                      { name: 'Apples' },
                      { name: 'Pears' }
                  ]
              }

              vm.lists = [
                  vm.list1,
                  vm.list2,
                  vm.list3,
                  vm.list4,
                  vm.list5
              ];

              vm.onListMove = function(list, item) {
                  console.log('Moving item ' + item.name + ' to list ' + list.id);
              }
          },
          controllerAs: 'vm'
      })

      .state('tabs', {
          url: '/tabs',
          templateUrl: 'app/tabs.html',
          controller: 'TabsController',
          controllerAs: 'vm'
      })

      .state('tabs.tab1', {
          url: '/tab1',
          views: {
              "": { templateUrl: 'app/tab1/tab1.html' },
              "left@tabs.tab1": {
                  templateUrl: 'app/tab1/left.html',
                  controller: function($scope, dataService) {
                      this.state = 'Nested Tab1 Left';
                      this.data = dataService.data;
                  },
                  controllerAs: 'vm'
              },
              "middle@tabs.tab1": {
                  templateUrl: 'app/tab1/middle.html',
                  controller: function($scope, dataService) {
                      this.state = 'Nested Tab1 Middle';
                      this.data = dataService.data;
                  },
                  controllerAs: 'vm'
              },
              "right@tabs.tab1": {
                  templateUrl: 'app/tab1/right.html',
                  controller: function($scope, dataService) {
                      this.state = 'Nested Tab1 Right';
                      this.data = dataService.data;
                  },
                  controllerAs: 'vm'
              }
          }
      })

      .state('tabs.tab2', {
          url: '/tab2',
          views: {
              "": { templateUrl: 'app/tab2/tab2.html' },
              "left@tabs.tab2": {
                  templateUrl: 'app/tab2/left.html',
                  controller: function($scope, dataService) {
                      this.state = 'Nested Tab2 Left';
                      this.item = dataService.data.item;
                  },
                  controllerAs: 'vm'
              },
              "middle@tabs.tab2": {
                  templateUrl: 'app/tab2/middle.html',
                  controller: function($scope, dataService) {
                      this.state = 'Nested Tab2 Middle';
                      this.item = dataService.data.item;
                  },
                  controllerAs: 'vm'
              },
              "right@tabs.tab2": {
                  templateUrl: 'app/tab2/right.html',
                  controller: function($scope, dataService) {
                      this.state = 'Nested Tab2 Right';
                      this.item = dataService.data.item;
                  },
                  controllerAs: 'vm'
              }
          }
      })

      .state('tabs.tab3', {
          url: '/tab3',
          views: {
              "": { templateUrl: 'app/tab3/tab3.html' },
              "left@tabs.tab3": {
                  templateUrl: 'app/tab3/left.html',
                  controller: function($scope, dataService) {
                      this.state = 'Nested Tab3 Top';
                      this.item = dataService.currentItem;
                  },
                  controllerAs: 'vm'
              },
              "middle@tabs.tab3": {
                  templateUrl: 'app/tab3/middle.html',
                  controller: function($scope, dataService) {
                      this.state = 'Nested Tab3 Middle';
                      this.item = dataService.currentItem;
                  },
                  controllerAs: 'vm'
              },
              "right@tabs.tab3": {
                  templateUrl: 'app/tab3/right.html',
                  controller: function($scope, dataService) {
                      this.state = 'Nested Tab3 Bottom';
                      this.item = dataService.currentItem;
                  },
                  controllerAs: 'vm'
              }
          }
      })

      .state('tabs.tab4', {
          url: '/tab4',
          templateUrl: 'app/tab4/tab4Directive.html',
          controller: function($scope, dataService) {
              this.state = 'Nested Tab 4'
              this.data = dataService.data;
          }
      })

      .state('tabs.tab5', {
          url: '/tab5',
          template: '<tab-fourth data="vm.data" private-data="vm.privateData"></tab-fourth>'
      })
  ;

  $urlRouterProvider.otherwise('/');
};
