app.controller('homeController', function($scope,jsonRead) {
  $scope.getData = jsonRead.getJson();
  $scope.getData.then(function(response) {
    $scope.jsonData = response;
    console.log($scope.jsonData);
  })
});
