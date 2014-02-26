angular.module("insights").controller("InsightsController", ['$scope', '$location', function($scope, $location) {

  $scope.insights = [
    {name: "clothing",    tagline: "Clothing & Apparel"},
    {name: "jewelry",     tagline: "Jewelry/Accessories"},
    {name: "bags",        tagline: "Bags & Shoes"},
    {name: "health",      tagline: "Health & Beauty"},
    {name: "food",        tagline: "Food & Drink"},
    {name: "home",        tagline: "Home & Garden"},
    {name: "electronics", tagline: "Electronics"},
    {name: "random",      tagline: "Random"}
  ];

  $scope.selectedInsights = [];

  $scope.isSelected = function(name) {
    return _($scope.selectedInsights).contains(name);
  };

  $scope.toggleSelected = function(name) {
    if($scope.isSelected(name)) {
      $scope.selectedInsights = _($scope.selectedInsights).without(name);
    } else {
      $scope.selectedInsights.push(name);
    }
  };

  $scope.submitInsights = function(selectedInsights) {
    $location.path('/confirmation');
  };

  $scope.formattedSelectedInsights = function(selectedInsights) {
    return selectedInsights.join(", ");
  };

}]);
