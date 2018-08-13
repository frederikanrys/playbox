'use strict';

angular.module('playboxModule').controller('appController',
    ['$scope', '$state', 'playboxConstants',
        function ($scope, $state, playboxConstants) {
            var ctrl = this;
            ctrl.value = "";

            ctrl.init = function () {

                console.log("appController init");

                $state.go(playboxConstants.SECOND);

            };

        }
    ])
;
