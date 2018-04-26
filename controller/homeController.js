app.controller('homeController', function($scope,jsonRead,$mdSidenav) {
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
  })
});
