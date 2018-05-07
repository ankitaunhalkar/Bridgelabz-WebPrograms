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
var arrayManufacturer = [];
var arrayOs = [];
var arrayStorage = [];
var arrayCamera = [];
  // selected

// $scope.selected = [];
$scope.manufacturer = arrayManufacturer;
$scope.os = arrayOs;
$scope.storage = arrayStorage;
$scope.camera = arrayCamera;

// when user clicks on checkbox, change selected list
$scope.toggle = function (item, list) {
  var idx = list.indexOf(item);
  if (idx > -1)
  {
    list.splice(idx, 1);
  }
  else
  {
    list.push(item);
  }
};

// is item exists in list
$scope.exists = function (item, list) {
  return list.indexOf(item) > -1;
};
});
