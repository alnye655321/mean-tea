// sample angular code

(function() {

  'use strict';

  angular
    .module('myApp', [
      'ngRoute',
      'myApp.config',
      'myApp.components.main',
      'tea',
      'cart',
      'myApp.components.cart'
    ]);

})();
