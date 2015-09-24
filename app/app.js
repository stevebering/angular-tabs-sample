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

            .state('tabs', {
                url: '/tabs',
                templateUrl: 'app/tabs.html',
                controller: function($scope, $state, dataService, ModalService, $modal) {
                    this.state = 'Tabs Route';

                    this.go = function(route) {
                        $state.go(route);
                    };

                    this.item = dataService.currentItem;
                    this.data = dataService.data;

                    activate();

                    /////

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

                        modalInstance.result.then(function(result) {
                            // called when we return successfully
                        }, function() {
                            // called when we dismiss instead of saying 'OK'
                        });
                    }

                    function activate() {
                        dataService.load().then(function() {
                            var promise = dataService.select(1);
                            showBootstrapModal(promise, 1);
                        }).catch(function(e) {

                        });
                    }
                },
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
                    "bottom@tabs.tab2": {
                        templateUrl: 'app/tab2/bottom.html',
                        controller: function($scope, dataService) {
                            this.state = 'Nested Tab2 Bottom';
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
                    "top@tabs.tab3": {
                        templateUrl: 'app/tab3/top.html',
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
                    "bottom@tabs.tab3": {
                        templateUrl: 'app/tab3/bottom.html',
                        controller: function($scope, dataService) {
                            this.state = 'Nested Tab3 Bottom';
                            this.item = dataService.currentItem;
                        },
                        controllerAs: 'vm'
                    }
                }
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
                        message: result
                    });

                });
            }
        });

    angular.module('app')
        .factory('dataService', ['$http', '$q', '$timeout', function($http, $q, $timeout) {
            var currentItem = {
                    id: 6,
                    firstName: 'Bob',
                    lastName: 'Smith',
                    address: {
                        street: '789 Main Street',
                        city: 'Anytown',
                        state: 'WA',
                        zip: '98100'
                    },
                    dob: '1/2/1943',
                    gender: 'M',
                    occupation: 'Retired',
                    hobbies: [
                        'fishing',
                        'drinking coffee'
                    ]
                },
                items = [],
                isLoading = false,
                data = { item: currentItem, items: items };

            var select = function(id) {
                var self = this;
                self.isLoading = true;

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
                        self.data.item = item;
                        deferred.resolve(item);
                        self.isLoading = false;
                    } else {
                        deferred.reject('Unable to locate item with id ' + id);
                    }
                }, 15000);

                return deferred.promise;
            };

            function buildUp(self) {
                self.items = [
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
                self.data.items = self.items;
            }

            var load = function() {
                var self = this;
                self.isLoading = true;
                var deferred = $q.defer();

                $timeout(function() {
                    if (self.items.length === 0) {
                        buildUp(self);
                    }

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