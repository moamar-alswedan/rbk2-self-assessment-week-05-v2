angular.module('app', ['ngRoute'])
.config(function($routeProvider) {
  $routeProvider
  .when('/fizzbuzz', {
    templateUrl: 'partials/fizzbuzz.html',
    controller: 'fizzbuzzCtrl'
  })
  .when('/fozzbazz', {
    templateUrl: 'partials/fozzbazz.html',
    controller: 'fozzbazzCtrl'
  })
  .otherwise({
    redirectTo: '/fizzbuzz'
  });
})
// DO NOT MODIFY CODE ABOVE THIS LINE

/*  HINT: Make sure your controllers, methods, and variables 
are named what $routeProvider and the partials are expecting  */

.factory('counter', function($scope){
  $scope.counter = 0;
  var increment = function () {
   $scope.counter ++;
 }
 return {increment:increment}
})

.controller('fizzbuzzCtrl', function(){
  if ($scope.coun/ter % 3 === 0) { 
    redirectTo: '/FIZZ' 
  } else if ($scope.counter % 5 === 0) { 
      redirectTo: '/BUZZ'
    }
    else if ($scope.counter % 15 === 0) { 
        redirectTo :'/FIZZBUZZ'
      }

    })
.controller('fozzbazzCtrl', function(){
 if ($scope.counter % 4 === 0) { 
  redirectTo: '/FOZZ' 
} else if ($scope.counter % 6 === 0) { 
    redirectTo: '/BAZZ'
  }
  else if ($scope.counter % 12 === 0) { 
      redirectTo: '/FOZZBAZZ'
    }
  });
/*## ngFizzBuzz
Play fizzbuzz (and fozzbazz!) with Angular
  * [ ] Implement a counter as a service or factory
  * [ ] Initialize your counter with a value of 0
  * [ ] Increment your counter by 1 every time it is clicked in either view
  * [ ] The counter's value should be the same in both views, though display slightly differently depending on which view is being rendered as per the following logic:

## In the Fizzbuzz controller:
  * [ ] If the counter is divisible by three, display FIZZ
  * [ ] If the counter is divisible by five, display BUZZ
  * [ ] If the counter is divisible by both, display FIZZBUZZ

## In the Fozzbazz controller:
  * [ ] If the counter is divisible by four, display FOZZ
  * [ ] If the counter is divisible by six, display BAZZ
  * [ ] If the counter is divisible by both, display FOZZBAZZ*/

