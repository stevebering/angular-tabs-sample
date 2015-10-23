/* jslint node: true */
/* global angular: false, require: false, module: false */

'use strict';

var tabsCtrl = require('./tabsCtrl');
var tabFourth = require('./tabFourthDirective');
var tabFourthLeft = require('./TabFourthLeftDirective');
var tabFourthMiddle = require('./tabFourthMiddleDirective');
var tabFourthRight = require('./tabFourthRightDirective');

angular.module('app')
  .controller('TabsController', tabsCtrl)
  .directive('tabFourth', tabFourth)
  .directive('tabFourthLeft', tabFourthLeft)
  .directive('tabFourthMiddle', tabFourthMiddle)
  .directive('tabFourthRight', tabFourthRight)
  ;
