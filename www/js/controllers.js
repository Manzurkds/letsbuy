angular.module('letsbuy.controllers', [])
.controller('tabCtrl', ['$scope', '$state','$rootScope', function($scope, $state, $rootScope){
  console.log("it works");

  $scope.redirect = function(state){
    $state.go(state);
  }

  $rootScope.hideTabs = false;
}])
.controller('homeCtrl', ['$scope','$rootScope','$state', 'products', function($scope, $rootScope, $state, products){
  console.log("inside home ctrl");
  $rootScope.activeTab = 'home';
  $rootScope.products = products.all();

  $scope.addToFavourites = function(id){
    console.log(id);
    products.updateFavourites(id);
  }
  $scope.addToCart = function(id){
    console.log(id);
    products.updateCart(id);
  }

  $scope.redirect = function(id, searchText){
    console.log($scope.searchText);
    $state.go('productDetail', { Id: id, Query: searchText});
  }

}])

.controller('productDetailCtrl', ['$scope', '$rootScope','$stateParams', function($scope, $rootScope, $stateParams){
    var id = $stateParams.Id;
    console.log(id);
    $scope.selectedProduct = $rootScope.products[id];
    console.log($scope.selectedProduct);
    if($stateParams.Query)
      $scope.title = $stateParams.Query;
    else
      $scope.title = 'Browse';
    console.log($scope.title);
}])

.controller('favouritesCtrl', ['$scope','$rootScope', function($scope, $rootScope){
$rootScope.activeTab = 'favourites';
}])

.controller('listCtrl', ['$scope','$rootScope', function($scope, $rootScope){
$rootScope.activeTab = 'list';
}])

.controller('cartCtrl', ['$scope','$rootScope', function($scope, $rootScope){
$rootScope.activeTab = 'cart';
}])

.controller('settingsCtrl', ['$scope','$rootScope', function($scope, $rootScope){
$rootScope.activeTab = 'settings';
}])
