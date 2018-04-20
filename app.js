var routerApp=angular.module('routerApp',['ui.router','ngMaterial']);
routerApp.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('LoginShop',{
           url: '/LoginShop',
           templateUrl: 'templates/LoginShop.html'
           controller: 'LoginController'
  });
  $urlRouterProvider.otherwise("/LoginShop");
});
