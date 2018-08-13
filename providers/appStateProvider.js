'use strict';

angular.module('playboxModule').config(['$stateProvider','playboxConstants', function ($stateProvider, playboxConstants) {
    $stateProvider
        .state(playboxConstants.FIRST, createRouterObject('first-screen', 'firstScreen'))
        .state(playboxConstants.SECOND, createRouterObject('second-screen', 'secondScreen'));

    function createRouterObject(template, name) {
        return {
            params: {
                param: null,
            },
            templateUrl: '/pages/'+ template + '.html',
            controller: name + 'Controller',
            controllerAs: name + 'Ctrl',
            url: template
        };
    }
}]);