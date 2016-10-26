(function() {

  'use strict';

  angular
    .module('myApp.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['$scope','$rootScope','teaService'];

  function mainController($scope, $rootScope, teaService) {
    $scope.filterVar = 'name';

    this.submitTea = function(teaID, quantity, teaPrice) {
      console.log('addCartFUnc!');
      var something = teaService.addCart(teaID, quantity, teaPrice);
      $rootScope.CartView = teaService.viewCart();
      //$location.path('/#/');
    }

    this.update = function() {
      console.log($scope.item.category);
      $rootScope.teas = teaService.updateFilterView($scope.item.category);
    }

    this.newFilter = function() {
      $scope.filterVar = 'price';
    }

    this.searchChange = function(searchTerm) {
      $scope.searchTerm = searchTerm;
    }

    this.clear = function() {
      $rootScope.teas = $rootScope.teasOriginal;
      $scope.searchTerm = '';
    }

  }

})();
