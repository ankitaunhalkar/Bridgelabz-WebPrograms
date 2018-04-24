//var app=angular.module('routerApp');
app.controller('loginController', function($scope,$state) {
   $scope.username="ankita";
   $scope.password="ankita";
  if($scope.username != "" && $scope.password != "")
  {
      $scope.home=function(){
      $state.go('home');
    }
  }
  else {
    alert("Enter username/password");
  }
});
