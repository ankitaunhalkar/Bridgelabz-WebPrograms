app.controller('cartController', function($scope, $state, jsonRead) {
    //console.log(jsonRead.buyedItems);
  var sum = 0;
  $scope.arrayData = jsonRead.buyedItems;
    console.log("array",$scope.arrayData);

  // $scope.cartSum = function(){
  //        var sum =0;
  //        $scope.arrayData.forEach(function(item){
  //            sum += item.quantity * item.price;
  //        });
  //
  //        return sum;
  //    }
});
