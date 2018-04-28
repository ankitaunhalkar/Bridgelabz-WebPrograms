app.controller('dashboardController', function($scope, $mdDialog) {
$scope.showAdvanced = function(ev,items) {
   $mdDialog.show({
     controller: DialogController,
     templateUrl: 'templates/dialog.html',
     parent: angular.element(document.body),
     targetEvent: ev,
     locals:{item:items},
     clickOutsideToClose:true
   })
 };
 function DialogController($scope, item) {
   $scope.item=item;
    $scope.cancel = function() {
      $mdDialog.cancel();
    };
  }
});
