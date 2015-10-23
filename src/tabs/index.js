/* global angular: false */

var tabsCtrl = require('./tabsCtrl');
var tabFourth = require('./tabFourthDirective');
var tabFourthLeft = require('./TabFourthLeftDirective');
var tabFourthMiddle = require('./tabFourthMiddleDirective');
var tabFourthRight = require('./tabFourthRightDirective');

angular.module('app')
  .controller('TabsController',
    ['$scope', '$state', '$modal', 'dataService', 'ModalService', tabsCtrl])
  .directive('tabFourth', tabFourth)
  .directive('tabFourthLeft', tabFourthLeft)
  .directive('tabFourthMiddle', tabFourthMiddle)
  .directive('tabFourthRight', tabFourthRight)
  ;
