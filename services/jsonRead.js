app.service('jsonRead',function($http) {
    this.getJson = function(){
       return $http.get("products.json").then(function(response){
         // console.log(response.data);
         return response.data;
    });
}
        this.buyedItems = JSON.parse(localStorage.getItem('buyedItems'))
        if(this.buyedItems == undefined){
          this.buyedItems = []
        }

});
