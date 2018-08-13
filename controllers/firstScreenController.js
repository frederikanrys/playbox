'use strict';

angular.module('playboxModule').controller('firstScreenController',
    ['$stateParams', function ($stateParams) {
        var ctrl = this;
        ctrl.param = $stateParams.param;

        /** init */

        ctrl.init = function () {
            console.log("firstScreenController init")
        };

        /** Controller functions */

        ctrl.setValue = function () {
            helperFunction();
        };


        /** private functions */

        function helperFunction() {

        }

    }]);

