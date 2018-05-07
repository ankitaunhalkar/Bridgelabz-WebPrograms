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
 // $scope.showAlert = function(ev) {
 //   $mdDialog.show(
 //     $mdDialog.alert()
 //       .parent(angular.element(document.querySelector('#popupContainer')))
 //       .clickOutsideToClose(true)
 //       .textContent('Thank You! Your order is successfully placed')
 //       .ok('Ok!')
 //       .targetEvent(ev)
 //     )
 //   };
 var buyedItems = [];
   $scope.buyNow = function(data) {
     buyedItems.push(data);
     $state.go('cart');
   };
 function DialogController($scope, item) {
   $scope.item=item;
    $scope.cancel = function() {
      $mdDialog.cancel();
    };
  }
});
