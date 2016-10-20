(function() {
  'use strict';

  angular
    .module('tea', [])
    .service('teaService', TeaService)

  TeaService.$inject = ['$rootScope'];

  function TeaService($rootScope) {
    //console.log($rootScope.teas);
    console.log('Tea!!');

    this.addCart = function(teaID, quantity, price) {
        console.log(parseInt(quantity.number));
        var quan = parseInt(quantity.number);
        $rootScope.total = $rootScope.total + quan * price;
        $rootScope.cart.push({id: teaID, quantity: quan});
        return price;
      };

    this.viewCart = function() {
        var allTea = $rootScope.teas;
        var cart = $rootScope.cart;
        var cartView = [];

        for (var i = 0; i < allTea.length; i++) {

          var obj = allTea[i];
          var id = allTea[i]._id;

          for (var y = 0; y < cart.length; y++) {

            if (id == cart[y].id) {
              cartView.push(
              {
                  _id: obj._id,
                  name: obj.name,
                  ingredients: obj.ingredients,
                  caffeineScale: obj.caffeineScale,
                  price: obj.price,
                  inStock: obj.inStock,
                  rating: obj.rating,
                  imageUrl: obj.imageUrl,
                  __v: obj.__v,
                  categories: obj.categories,
                  quantity: cart[y].quantity
              });
            }
          }
        }
        console.log(cartView);
        return cartView;
      };

      this.updateFilterView = function(searchCategory) {
        var allTea = $rootScope.teas;
        var filterArr = [];

        for (var i = 0; i < allTea.length; i++) {

          var obj = allTea[i];
          var categoriesArray = allTea[i].categories;
          var id = allTea[i]._id;

          for (var y = 0; y < categoriesArray.length; y++) {

            if (searchCategory == categoriesArray[y]) {
              filterArr.push(
              {
                  _id: obj._id,
                  name: obj.name,
                  ingredients: obj.ingredients,
                  caffeineScale: obj.caffeineScale,
                  price: obj.price,
                  inStock: obj.inStock,
                  rating: obj.rating,
                  imageUrl: obj.imageUrl,
                  __v: obj.__v,
                  categories: obj.categories
              });
            }
          }
        }
          console.log(searchCategory);
          console.log(filterArr);
          return filterArr;
        };

  };

}());
