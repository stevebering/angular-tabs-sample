/* jslint node: true */
/* global angular: false, require: false, module: false */

'use strict';

var Contact = require('./contact');
var Data = require('./dataStore.json');

dataService.$inject = ['$http', '$q', '$timeout'];

function dataService($http, $q, $timeout) {
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
        var items = Data;
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
        data: data,
        isLoading: isLoading
    };
}

module.exports = dataService;
