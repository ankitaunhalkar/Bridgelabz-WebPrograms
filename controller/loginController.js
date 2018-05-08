//var app=angular.module('routerApp');
app.controller('loginController', function($scope,$state) {

var emailPattern=/(^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$)/;

var passwordPattern=/^[a-z]+$/;
var email=document.getElementById("email");
var password=document.getElementById("password");
  $scope.home=function(){
    if(email.value.match(emailPattern) && password.value.match(passwordPattern))
    {
      console.log("email",email.value);
      console.log("password",password.value);
      $state.go('home');
    }
    else{
      document.getElementById("error").innerHTML="<span class='errorMessage'>*Enter Correct Username/Password</span>";
    }
  }

});
