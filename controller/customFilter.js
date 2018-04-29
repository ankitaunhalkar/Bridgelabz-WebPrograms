app.filter('selectedTags', function() {
// filter to check array of elements
return function(users, tags) {
   return users.filter(function(user) {
       if (tags.indexOf(user.specs.manufacturer) != -1) {
           return true;
       } else if(tags.length == 0) {
           return true;
       }
       return false;
   });
};
});
