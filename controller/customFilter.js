app.filter('selectedTags', function() {
// filter to check array of elements
return function(users, tags)
{
  //Json data - users
  // tags- selected data
     if (users !== undefined) {
       return users.filter(function(product) {
         if (tags.indexOf(product.specs.manufacturer) != -1) {
             return true;
         }
         else if (tags.indexOf(product.specs.storage) != -1) {
             return true;
         }
         else if (tags.indexOf(product.specs.os) != -1) {
             return true;
         }
         else if (tags.indexOf(product.specs.camera) != -1) {
             return true;
         }
         else if(tags.length == 0) {
             return true;
         }
         return false;
     });
     }
};
});


// app.filter('selectedTags', function() {
// // filter to check array of elements
// return function(jsonData, manufacturerList) {
//
//    var returnArray=[];
//    var completeArray=[];
//   if(jsonData !=undefined)
//   {
//     var product = jsonData[i];
//     if(manufacturerList != undefined)
//     {
//       for(var i=0;i<jsonData.length;i++)
//       {
//         for(var j=0;j<manufacturerList.length;j++)
//         {
//           if(product.specs.manufacturer==manufacturerList[j])
//           {
//               returnArray.push(product.specs.manufacturer);
//           }
//         }
//       }
//     }
//   }
// };
// });
