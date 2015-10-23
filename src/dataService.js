'use strict';

/* global angular: false, require: false, module: false */
var Contact = require('./contact');

module.exports = function($http, $q, $timeout) {
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
};
