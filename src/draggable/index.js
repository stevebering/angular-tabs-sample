/* global angular: false */

var indexFilter = require('./indexFilter');
var droppable = require('./droppableDirective');
var draggable = require('./draggableDirective');
var list = require('./draggableListDirective');
var listOfLists = require('./draggableListListDirective');

angular
  .module('app')
  .filter('index', indexFilter)
  .directive('droppable', droppable)
  .directive('draggable', draggable)
  .directive('draggableList', list)
  .directive('draggableListList', listOfLists)
  ;
