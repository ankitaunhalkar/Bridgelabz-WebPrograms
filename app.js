var app=angular.module('routerApp',['ui.router','ngMaterial','angular.filter']);
app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('login',{
           url: '/login',
           templateUrl: 'templates/login.html',
           controller: 'loginController'
  })

  .state('home',{
           url: '/home',
           templateUrl: 'templates/home.html',
           controller: 'homeController'
  })

  .state('home.dashboard',{
          url:'/dashboard',
          templateUrl: 'templates/dashboard.html'
  });
  
 $urlRouterProvider.otherwise("/login");
});
