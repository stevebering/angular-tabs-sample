/* jslint node: true */
/* global require: false, module: false */

'use strict';

module.exports = PromiseWaiterController;

PromiseWaiterController.$inject = ['$scope', '$modalInstance', 'data'];

function PromiseWaiterController($scope, $modalInstance, data) {
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
}
