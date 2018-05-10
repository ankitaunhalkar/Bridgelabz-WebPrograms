app.controller('cartController', function($scope, $state, jsonRead) {
    //console.log(jsonRead.buyedItems);
  $scope.ranges = [1,2,3,4,5,6,7,8,9,10];

  $scope.cartData = jsonRead.buyedItems;
    //console.log("array",$scope.arrayData);
  $scope.quantity = $scope.ranges[0];


  $scope.cartSum = function(product,count){
    // console.log(product.price);
    // console.log(count);
    product.count = count;
    product.sum = product.price * product.count;
    $scope.total=0;
    for(i=0;i<$scope.cartData.length;i++){
      $scope.total+=product.sum;
      // console.log($scope.total);
    }
     }

     $scope.removeItem = function(index) {
        $scope.cartData.splice(index, 1);
        $scope.total=0;
        console.log($scope.cartData);
        for(i=0;i<$scope.cartData.length;i++){
          var product = $scope.cartData[i];
          $scope.total+=product.sum;
        localStorage.setItem('buyedItems', JSON.stringify($scope.cartData));
          // console.log($scope.total);
        }
        //
    }
});
