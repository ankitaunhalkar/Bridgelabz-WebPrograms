app.controller('dashboardController', function($scope, $state, $mdDialog, jsonRead) {
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
 $scope.buyedItems = jsonRead.buyedItems;
   $scope.addToCart = function(product) {
    // console.log(product);
     // $scope.buyedItems.push(product);
     // localStorage.setItem('buyedItems', JSON.stringify($scope.buyedItems));
     // console.log("data",localStorage.setItem('buyedItems', JSON.stringify($scope.buyedItems)));


     if ($scope.buyedItems.length === 0){
       product.count = 1;
       $scope.buyedItems.push(product);
       localStorage.setItem('buyedItems', JSON.stringify($scope.buyedItems));
     } else {
       var repeat = false;
       for(var i = 0; i< $scope.buyedItems.length; i++){
         if($scope.buyedItems[i].id === product.id){
           repeat = true;
           $scope.buyedItems[i].count +=1;
         }
       }
       if (!repeat) {
         product.count = 1;
         $scope.buyedItems.push(product);
         localStorage.setItem('buyedItems', JSON.stringify($scope.buyedItems));
       }
      $state.go('home.cart');
   }
 };
 function DialogController($scope, item) {
   $scope.item=item;
    $scope.cancel = function() {
      $mdDialog.cancel();
    };
  }
});
