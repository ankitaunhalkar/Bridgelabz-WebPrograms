app.controller('cartController', function($scope, $state, jsonRead) {
    //console.log(jsonRead.buyedItems);
  $scope.ranges = [1,2,3,4,5,6,7,8,9,10];

  $scope.arrayData = jsonRead.buyedItems;
    //console.log("array",$scope.arrayData);
  $scope.quantity = $scope.ranges[0];
  $scope.total=0;

  $scope.cartSum = function(product,count){
    // console.log(product.price);
    // console.log(count);
    product.sum=product.price * count;
    $scope.total+=product.sum;

     }
});
