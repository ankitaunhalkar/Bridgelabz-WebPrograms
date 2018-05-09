
app.filter('selectedTags', function() {
  return function(data, arrayManufacturer, arrayStorage, arrayOs, arrayCamera) {

     var filteredArray = [];//filtered elements
     var tempArray = [];//stores data to perform next operations

     if (data != undefined) {

       //if(arrayManufacturer.length==0 && arrayOs.length==0 && arrayCamera.length==0 && arrayStorage.length==0)
       //{
         tempArray = data;
         
      // }
       if (arrayManufacturer.length > 0) {
         for (var j = 0; j < tempArray.length; j++) {
           var element = tempArray[j];

           for (var i = 0; i < arrayManufacturer.length; i++) {
             var selectedProduct= arrayManufacturer[i];
             if (element.specs.manufacturer == selectedProduct)
              {
               filteredArray.push(element);
              }
           }
         }

         if (filteredArray.length > 0) {
           tempArray = filteredArray;
           filteredArray = [];
         } else {
           tempArray = data;
         }
       }

         if (arrayStorage.length > 0) {
           for (var j = 0; j < tempArray.length; j++) {
             var element = tempArray[j];

             for (var i = 0; i < arrayStorage.length; i++) {
               var selectedProduct = arrayStorage[i];
               if (element.specs.storage == selectedProduct) {
                 filteredArray.push(element);
               }
             }
           }
           tempArray = filteredArray;
           filteredArray = [];
         }

         if (arrayOs.length > 0) {
           for (var j = 0; j < tempArray.length; j++) {
             var element = tempArray[j];

             for (var i = 0; i < arrayOs.length; i++) {
               var selectedProduct = arrayOs[i];
               if (element.specs.os == selectedProduct) {
                 filteredArray.push(element);
               }
             }
           }
           tempArray = filteredArray;
           filteredArray = [];
         }

         if (arrayCamera.length > 0) {
           for (var j = 0; j < tempArray.length; j++) {
             var element = tempArray[j];
             for (var i = 0; i < arrayCamera.length; i++) {
               var selectedProduct = arrayCamera[i];
               if (element.specs.camera == selectedProduct) {
                 filteredArray.push(element);
               }
             }
           }
           tempArray = filteredArray;
           filteredArray = [];
         }
     }
     return tempArray;
   };
});
// filter to check array of elements
// return function(users, tags)
// {
//   //Json data - users
//   // tags- selected data
//   // console.log("tags: ", tags);
//   var filteredArray = [];
//   var temparray = [];
//
//      if (users !== undefined) {
//       console.log("tags: ", tags);
//        return users.filter(function(product) {
//          var arrayManufacturer = product.specs.manufacturer;
//          var arrayStorage = product.specs.storage;
//          var arrayOs = product.specs.os;
//          var arrayCamera = product.specs.camera;
//
//          if ((tags.indexOf(arrayManufacturer) != -1) || (tags.indexOf(arrayStorage) != -1) ||
//                  (tags.indexOf(arrayOs) != -1) || (tags.indexOf(arrayCamera) != -1) ){
//                    // return true;
//                    for (var j = 0; j < x.length; j++) {
//                           var item = x[j];
//
//                           for (var i = 0; i < arrayManufacturer.length; i++) {
//                             var selectedItem = arrayManufacturer[i];
//                             if (item.specs.manufacturer == selectedItem)
//                              {
//                               filteredArray.push(item);
//                             }
//                           }
//                         }
//
//                         if (filteredArray.length > 0) {
//                           temparray = filteredArray;
//
//                           filteredArray = [];
//                         } else {
//                           temparray = x;
//                         }
//
//                         if (arrayStorage.length > 0) {
//                           for (var j = 0; j < temparray.length; j++) {
//                             var item = temparray[j];
//
//                             for (var i = 0; i < arrayStorage.length; i++) {
//                               var selectedItem = arrayStorage[i];
//                               if (item.specs.storage == selectedItem) {
//                                 filteredArray.push(item);
//                               }
//                             }
//                           }
//                           temparray = filteredArray;
//                           filteredArray = [];
//                         }
//
//                         if (arrayOs.length > 0) {
//                           for (var j = 0; j < temparray.length; j++) {
//                             var item = temparray[j];
//
//                             for (var i = 0; i < arrayOs.length; i++) {
//                               var selectedItem = arrayOs[i];
//                               if (item.specs.os == selectedItem) {
//                                 filteredArray.push(item);
//                               }
//                             }
//                           }
//                           temparray = filteredArray;
//                           filteredArray = [];
//                         }
//
//                         if (arrayCamera.length > 0) {
//                           for (var j = 0; j < temparray.length; j++) {
//                             var item = temparray[j];
//
//                             for (var i = 0; i < arrayCamera.length; i++) {
//                               var selectedItem = arrayCamera[i];
//                               if (item.specs.camera == selectedItem) {
//                                 filteredArray.push(item);
//                               }
//                             }
//                           }
//                           temparray = filteredArray;
//                           filteredArray = [];
//                         }
//                       } else {
//                         temparray = x;
//                       }
//           }
//          else if(tags.length == 0) {
//              return true;
//          }
//          return false;
//      });
//      }
// };
