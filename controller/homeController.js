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
var manufacturer = [];
var storage = [];
var os = [];
var camera = [];

// when user clicks on checkbox, change selected list
$scope.toggle = function (item, list) {
  console.log("item  ",item);

  var idx = list.indexOf(item);
    if (idx > -1)
    {
      list.splice(idx, 1);
    }
    // console.log("dsfhfgdh  ",list);
  else
  {
    list.push(item);
  }
  console.log("list  ",list);
};

// is item exists in list
$scope.exists = function (item, list) {
  return list.indexOf(item) > -1;
};

// process user data and prepare whole places
// angular.forEach($scope.jsonData, function(user, key) {
//    if($scope.specs.manufacturer.indexOf(user.specs.manufacturer) == -1) {
//        $scope.specs.manufacturer.push(user.specs.manufacturer);
//    }
//    else if($scope.specs.storage.indexOf(user.specs.storage) == -1) {
//        $scope.specs.storage.push(user.specs.storage);
//    }
//    else if($scope.specs.os.indexOf(user.specs.os) == -1) {
//        $scope.specs.os.push(user.specs.os);
//    }
//    else if($scope.specs.os.indexOf(user.specs.os) == -1) {
//        $scope.specs.os.push(user.specs.os);
//    }
//    else if($scope.specs.camera.indexOf(user.specs.camera) == -1) {
//        $scope.specs.camera.push(user.specs.camera);
//    }
// });
});
