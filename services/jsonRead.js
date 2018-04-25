app.service('jsonRead',function($http) {
    this.getJson=function(){
       return $http.get("products.json").then(function(response){
         // console.log(response.data);
         return response.data;
         console.log(response.data);
    });
}});
