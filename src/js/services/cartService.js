(function() {
  'use strict';

  angular
    .module('cart', [])
    .service('cartService', CartService)

  CartService.$inject = ['$rootScope'];

  function CartService($rootScope) {
    //console.log($rootScope.carts);
    console.log('Cart!!');

    this.addCart = function(newQuantity, oldQuantity, id, price) {
        $rootScope.total = ($rootScope.total - oldQuantity * price) + (newQuantity * price);

        for (var i = 0; i < $rootScope.CartView.length; i++) {
          if ($rootScope.CartView[i] == id) {
            $rootScope.CartView.quantity[i] = newQuantity;
            break;
          }
        }
        return $rootScope.CartView;
      };
  };

}());
