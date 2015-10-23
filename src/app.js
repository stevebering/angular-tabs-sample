'use strict';

/* global angular: false, require: false */

require('es5-shim');
require('es5-sham');

var router = require('./router'),
    bootstrapper = require('./bootstrapper'),
    promiseWaiter = require('./promiseWaiterCtrl'),
    dataService = require('./dataService'),
    tabsController = require('./tabs/tabsCtrl'),
    alertPanel = require('./alerts/alertPanelDirective')
    ;

//require('angular-ui-router');
//require('angular-ui-bootstrap');

var app = angular.module('app', ['ui.router', 'ui.bootstrap', 'angularModalService']);
app.run(bootstrapper);
app.config(router);
app.controller('promiseWaiter', ['$scope', '$modalInstance', 'data', promiseWaiter]);
app.factory('dataService', ['$http', '$q', '$timeout', dataService]);
app.directive('alertPanel', alertPanel);

require('./draggable/index');
require('./tabs/index');
