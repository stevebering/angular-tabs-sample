/* jslint node: true */
/* global angular: false, require: false, module: false */

'use strict';

module.exports = function() {
    return function (array, index) {
        if (!index) {
            index = 'index';
        }

        for (var i=0; i < array.length; i++) {
            array[i][index] = i;
        }

        return array;
    };
};
