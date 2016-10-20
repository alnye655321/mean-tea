(function() {

  'use strict';

  angular
    .module('myApp.components.cart', [])
    .controller('cartController', cartController);

  cartController.$inject = ['$scope', '$rootScope', '$location'];

  console.log('sanity check!');

  function cartController($scope, $rootScope, $location) {
    /*jshint validthis: true */

    // this.addKitten = function() {
    //   /*jshint validthis: true */
    //   $rootScope.kittens.push(
    //     {
    //       name: $scope.kittenName,
    //       bio: $scope.kittenBio,
    //       URL: $scope.kittenURL
    //     }
    //   );
    //   $location.path('/#/');
    //
    // };
    
  }

})();
