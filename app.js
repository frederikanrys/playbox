'use strict'

angular.module('playboxControllers', []);
angular.module('playboxServices', []);
angular.module('playboxDirectives', []);

angular.module('playboxApp', [
    'ngRoute',
    'playboxControllers',
    'playboxDirectives',
    'playboxServices'
]).config(['$routeProvider', function ($routeProvider) {

    // provider-injector
    // You can only inject Providers (not instances)
    // into config blocks.
    $routeProvider.when('/phone', {
        templateUrl: 'pages/phone-list/phone-list.html',
        controller: 'stockController'
    }).when('/text', {
        templateUrl: 'pages/text/text.html',
        controller: 'TextController'
    }).otherwise({
        redirectTo: '/text'
    });

}]).run(function () {

    // instance-injector
    // This is an example of a run block.
    // You can have as many of these as you want.
    // You can only inject instances (not Providers)
    // into run blocks
});




