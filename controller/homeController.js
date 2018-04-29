app.controller('homeController', function($scope,jsonRead,$mdSidenav,$state) {
  $scope.toggleLeft = buildToggler('left');
   $scope.toggleRight = buildToggler('right');
 function buildToggler(componentId) {
  return function() {
    $mdSidenav(componentId).toggle();
  };
}
  $scope.getData = jsonRead.getJson();
  $scope.getData.then(function(response) {
  $scope.jsonData = response;
  //  console.log($scope.jsonData);
  $state.go('home.dashboard');
  })

$scope.login = function () {
    $state.go('login');
}
  // selected manufacturer
$scope.selected = [];
// whole manufacturer
$scope.manufacturer = [];

// when user clicks on checkbox, change selected list
$scope.toggle = function (item, list) {
  var idx = list.indexOf(item);
  if (idx > -1) list.splice(idx, 1);
  else list.push(item);
};

// is item exists in list
$scope.exists = function (item, list) {
  return list.indexOf(item) > -1;
};

// process user data and prepare whole places
angular.forEach($scope.jsonData, function(user, key) {
   if($scope.specs.manufacturer.indexOf(user.specs.manufacturer) == -1) {
       $scope.specs.manufacturer.push(user.specs.manufacturer);
   }
});

});
