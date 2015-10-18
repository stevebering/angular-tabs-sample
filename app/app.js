/**
 * Created by stevebering on 9/19/15.
 */
(function() {
    'use strict';

    function runBlock ($log) {
        'ngInject';
        $log.debug('runBlock end');
    }

    function routerConfig ($stateProvider, $urlRouterProvider) {
        'ngInject';

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
    }

    angular.module('app', ['ui.router', 'ui.bootstrap', 'angularModalService'])
        .run(runBlock)
        .config(routerConfig);

    angular.module('app')
        .controller('promiseWaiter', function($scope, $modalInstance, data) {
            var vm = this;
            vm.messages = [];
            vm.showClose = false;
            vm.title = data.title;

            var closeModal = function(result) {
                $modalInstance.close(result);
            };

            vm.dismiss = function(result) {
                closeModal(result);
            };

            activate();

            ///////////////

            function activate() {
                vm.messages = [];
                vm.showClose = false;

                data.promise.then(function (result) {

                    // we resolved successfully
                    closeModal('OK');

                }, function(err) {

                    // we erred
                    vm.messages.push({
                        type: 'error',
                        message: err
                    });
                    vm.showClose = true;

                }, function(progress) {

                    // we were notified
                    vm.messages.push({
                        type: 'info',
                        message: progress
                    });

                });
            }
        });

    var Contact = (function() {
        'use strict';

        var c = function() {

        };

        c.prototype.isDirty = function() {
            return this._isDirty;
        };

        c.prototype.markDirty = function() {
            this._isDirty = true;
        };

        c.prototype.propertyChanged = function(propName) {
            this.markDirty();
        };

        c.prototype.getSetFirstName = function(newValue) {
            if ( arguments.length ) {
                // a value or null or undefined was pass, consider it a setter
                if (newValue !== this.firstName) {
                    // something is changing
                    // a value or null or undefined was pass, consider it a setter
                    this.firstName = newValue;
                    this._isDirty = true;
                }
            }

            return this.firstName;
        };

        c.prototype.getSetLastName = function(newValue) {
            if (arguments.length) {
                // a value or null or undefined was pass, consider it a setter
                if (newValue !== this.lastName) {
                    // something is changing
                    this.lastName = newValue;
                    this._isDirty = true;
                }
            }

            return this.lastName;
        };

        return c;
    })();

    angular.module('app')
        .factory('dataService', ['$http', '$q', '$timeout', function($http, $q, $timeout) {
            var currentItem = {},
                contact = new Contact(),
                items = [],
                isLoading = false,
                data = {};

            angular.extend(contact, currentItem);
            data.item = contact;
            data.items = items;

            var select = function(id) {
                var self = this;
                self.isLoading = true;
                self.data.item = {};

                var deferred = $q.defer();
                $timeout(function() {
                    var item;
                    for (var itemId = 0; itemId < self.items.length; itemId ++ ) {
                        if (self.items[itemId] && self.items[itemId].id === id) {
                            item = self.items[itemId];
                            break;
                        }
                    }

                    if (item) {
                        self.currentItem = item;
                        var contact = new Contact();
                        angular.extend(contact, item);
                        self.data.item = contact;
                        deferred.resolve(contact);
                        self.isLoading = false;
                    } else {
                        deferred.reject('Unable to locate item with id ' + id);
                    }
                }, 5000);

                return deferred.promise;
            };

            function buildUp(self) {
                var items = [
                    {
                        id: 1,
                        firstName: 'John',
                        lastName: 'Doe',
                        address: {
                            street: '123 Any Street',
                            city: 'Anytown',
                            state: 'WA',
                            zip: '98100'
                        },
                        dob: '1/2/1934',
                        gender: 'M',
                        occupation: 'Old Guy',
                        hobbies: [
                            'fishing',
                            'gabbing',
                            'drinking coffee'
                        ]
                    },
                    {
                        id: 2,
                        firstName: 'Missy',
                        lastName: 'Belle',
                        address: {
                            street: '234 Some Street',
                            city: 'Sometown',
                            state: 'WA',
                            zip: '98200'
                        },
                        dob: '6/7/1957',
                        gender: 'F',
                        occupation: 'Debutante',
                        hobbies: [
                            'shopping',
                            'gossipping'
                        ]
                    },
                    {
                        id: 3,
                        firstName: 'Devon',
                        lastName: 'Dude',
                        address: {
                            street: '456 10th Street',
                            city: 'Narrowtown',
                            state: 'WA',
                            zip: '98300'
                        },
                        dob: '8/9/1982',
                        gender: 'M',
                        occupation: 'Hacker',
                        hobbies: [
                            'coding',
                            'caffeine',
                            'making stuff'
                        ]
                    }
                ];

                self.items = items;
                self.data.keys = [];

                for ( var i = 0; i < items.length; i++ ) {
                    self.data.keys.push(items[i].id);
                }
                self.data.items = items;
            }

            var load = function() {
                var self = this;
                self.isLoading = true;
                var deferred = $q.defer();

                $timeout(function() {
                    if (self.items.length === 0) {
                        buildUp(self);
                    }

                    self.data.items = self.items;
                    deferred.resolve(self.items);
                    self.isLoading = false;
                }, 2000);

                return deferred.promise;
            };

            return {
                currentItem: currentItem,
                items: items,
                load: load,
                select: select,
                data: data
            };
        }]);
})();
