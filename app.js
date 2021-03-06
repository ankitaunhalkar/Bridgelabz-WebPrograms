var app=angular.module('routerApp',['ui.router','ngMaterial','angular.filter','smart-table']);
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
          templateUrl: 'templates/dashboard.html',
          controller: 'dashboardController'
  })
  .state('home.cart',{
          url:'/cart',
          templateUrl: 'templates/cart.html',
          controller: 'cartController'
  });
 $urlRouterProvider.otherwise("/login");
});
