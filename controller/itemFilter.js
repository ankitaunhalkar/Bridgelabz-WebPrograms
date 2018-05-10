app.filter('selectedTags',function() {

  return function(data, arrayManufacturer, arrayStorage, arrayOs, arrayCamera) {

    genericMethod = function(tempArray, arrayCategory, category){
      var filteredArray =[];
      for (var j = 0; j < tempArray.length; j++) {
        var element = tempArray[j];
        for (var i = 0; i < arrayCategory.length; i++) {
          var selectedProduct= arrayCategory[i];
            if (element.specs[category] == selectedProduct)
            {
              filteredArray.push(element);
            }
          }
        }
      tempArray = filteredArray;
      filteredArray = [];
      return tempArray;
  }

     var tempArray = [];//stores data to perform operations
     if (data != undefined) {
         tempArray = data;
            //console.log("hghdfhs ",tempArray);
       if (arrayManufacturer.length > 0) {
        tempArray = genericMethod(tempArray,arrayManufacturer,"manufacturer");
       }
       if (arrayStorage.length > 0) {
         tempArray = genericMethod(tempArray,arrayStorage,"storage");
       }
       if (arrayOs.length > 0) {
         console.log(tempArray);
         tempArray = genericMethod(tempArray,arrayOs,"os");
       }
       if (arrayCamera.length > 0) {
         tempArray = genericMethod(tempArray,arrayCamera,"camera");
       }
       return tempArray;
}
}
});
