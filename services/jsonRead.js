app.service('jsonRead',function($http) {
  $http.get("products.json").then(function (response) {

        return productsList = response.data;

    }
)});
