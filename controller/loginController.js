//var app=angular.module('routerApp');
app.controller('loginController', function($scope) {
  var user=$scope.username;
  var pass=$scope.password;
  if(user=="ankita" && pass=="ankita")
  {
    alert("Success");
  }
});
