(function() {

  'use strict';

  angular
    .module('myApp.components.cart', [])
    .controller('cartController', cartController);

  cartController.$inject = ['$scope', '$rootScope', '$location','cartService'];

  console.log('sanity check!');

  function cartController($scope, $rootScope, $location, cartService) {
    /*jshint validthis: true */

    this.updateQuan = function(newQuantity, oldQuantity, id, price) {
      /*jshint validthis: true */
      $rootScope.CartView = cartService.addCart(newQuantity, oldQuantity, id, price);
    };
  }
})();
