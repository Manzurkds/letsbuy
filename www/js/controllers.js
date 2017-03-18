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


.controller('cartCtrl', ['$scope','$rootScope','products','$ionicPopup', function($scope, $rootScope, products, $ionicPopup){
  $scope.cartedProducts = products.fetchCart();

  $scope.totalPrice = 0;

  for(i=0; i<$scope.cartedProducts.length; i++){
    if(!$scope.cartedProducts[i].quantity){
      $scope.cartedProducts[i].quantity = 1;
      $scope.totalPrice+=$scope.cartedProducts[i].price;
    } else {
      $scope.totalPrice = $scope.totalPrice + $scope.cartedProducts[i].price*$scope.cartedProducts[i].quantity;
    }
  }

  localStorage.setItem("cartedProducts", JSON.stringify($scope.cartedProducts));

  $scope.reduceQuantityTriggered = function(id){
    if($scope.cartedProducts[id].quantity<2) {
      removeItemAlert(id);
    } else {
      reduceQuantity(id)
    }
  }
  $scope.increaseQuantityTriggered = function(id){
    increaseQuantity(id);
  }

function reduceQuantity(id){
  $scope.cartedProducts[id].quantity-=1;
  $scope.totalPrice-=$scope.cartedProducts[id].price;
  localStorage.setItem("cartedProducts", JSON.stringify($scope.cartedProducts));
}

function increaseQuantity(id){
  $scope.cartedProducts[id].quantity+=1;
  $scope.totalPrice+=$scope.cartedProducts[id].price;
  localStorage.setItem("cartedProducts", JSON.stringify($scope.cartedProducts));
}

function removeItem(id) {
  $scope.cartedProducts[id].quantity-=1;
  $scope.totalPrice-=$scope.cartedProducts[id].price;
  $scope.cartedProducts.splice(id, 1);
  console.log($scope.cartedProducts);
  localStorage.setItem("cartedProducts", JSON.stringify($scope.cartedProducts));
}


  function removeItemAlert(id) {
    $ionicPopup.show({
   title: 'Are You Sure',
   subTitle: 'Do you want to remove this item?',
   buttons: [
     { text: 'Cancel' },
     {
       text: '<b>Remove</b>',
       type: 'button-assertive',
       onTap: function() {
         removeItem(id);
       }
     }
   ]
 });
  }

}])

.controller('settingsCtrl', ['$scope','$rootScope', function($scope, $rootScope){

}])
