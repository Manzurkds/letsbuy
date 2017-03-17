angular.module('letsbuy.controllers', [])
.controller('rootCtrl', ['$scope', '$state','$rootScope','products', function($scope, $state, $rootScope, products){
  //Just a controller to place all the global values and functions

  $rootScope.redirectTo = function(state) {
    $state.go('cart');
  }

  $rootScope.openProductDetail = function(id, title){
    console.log(id)
    $state.go('productDetail', { Id: id, Title: title});
  }

  $rootScope.addToCart = function(id){
    console.log(id);
    products.updateCart(id);
  }

  $rootScope.products = products.all();

}])
.controller('homeCtrl', ['$scope','$rootScope','$state', 'products', function($scope, $rootScope, $state, products){
  console.log("inside home ctrl");

  $scope.addToFavourites = function(id){
    console.log(id);
    products.updateFavourites(id);
  }


}])

.controller('productDetailCtrl', ['$scope', '$rootScope','$stateParams','$ionicHistory', function($scope, $rootScope, $stateParams, $ionicHistory){
    console.log("inside product detail controller");

    var id = $stateParams.Id;
    $scope.selectedProduct = $rootScope.products[id];

    if($stateParams.Title)
      $scope.title = $stateParams.Title;
    else
      $scope.title = 'Browse';

    $scope.myGoBack = function(){
      $ionicHistory.goBack();
    }
}])

.controller('favouritesCtrl', ['$scope','$rootScope', function($scope, $rootScope){

}])

.controller('listCtrl', ['$scope','$rootScope', function($scope, $rootScope){

}])

.controller('cartCtrl', ['$scope','$rootScope', function($scope, $rootScope){

}])

.controller('settingsCtrl', ['$scope','$rootScope', function($scope, $rootScope){

}])
