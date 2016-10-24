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
//http://www.w3schools.com/angular/angular_filters.asp  for search as well
    this.newFilter = function() {
      $scope.filterVar = 'price';

    }

    this.clear = function() {
      $rootScope.teas = $rootScope.teasOriginal;
    }

  }

})();
