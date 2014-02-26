angular.module("insights").config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  // uncomment the below line for pushState sauce
  // $locationProvider.html5Mode(true);

  $routeProvider.when('/insights', {
    templateUrl: 'insights.html'
  });

  $routeProvider.when('/confirmation', {
    templateUrl: 'confirmation.html'
  });

  $routeProvider.otherwise({ redirectTo: '/insights' });

}]);
