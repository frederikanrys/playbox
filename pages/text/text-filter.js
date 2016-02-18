angular.module('playboxControllers').filter('num', function() {
  return function(input) {
    return input ? parseInt(input, 10) : 0;
  };
});