angular.module('letsbuy.controllers', [])
.controller('rootCtrl', ['$scope', '$state','$rootScope','products','$ionicHistory', function($scope, $state, $rootScope, products, $ionicHistory){
  //Just a controller to place all the global values and functions
$rootScope.products = products.all();


  $rootScope.redirectTo = function(state) {
    $state.go(state);
  }

  $rootScope.openProductDetail = function(id, title){
    console.log(id)
    $state.go('productDetail', { Id: id, Title: title});
  }


  $scope.addToFavourites = function(id){
    console.log(id);
    for(i=0; i<$rootScope.products.length; i++)
      if($rootScope.products[i].id == id)
        if($rootScope.products[i].favourited == true)
          $rootScope.products[i].favourited = false;
        else
          $rootScope.products[i].favourited = true;
      localStorage.setItem("products", JSON.stringify($rootScope.products));
  }


  $rootScope.addToCart = function(id){
    console.log(id);
    for(i=0; i<$rootScope.products.length; i++)
      if($rootScope.products[i].id == id)
        if($rootScope.products[i].carted == true){
          $rootScope.products[i].carted = false;
          $rootScope.products[i].quantity = 0;
        }
        else {
          $rootScope.products[i].carted = true;
          $rootScope.products[i].quantity = 1;
        }
      localStorage.setItem("products", JSON.stringify($rootScope.products));
  }

  $rootScope.myGoBack = function(){
    $ionicHistory.goBack();
  }

}])


.controller('homeCtrl', ['$scope','$rootScope','$state', 'products', function($scope, $rootScope, $state, products){
  console.log("inside home ctrl");



}])


.controller('productDetailCtrl', ['$scope', '$rootScope','$stateParams', function($scope, $rootScope, $stateParams){
    console.log("inside product detail controller");

    var id = $stateParams.Id;
    $scope.selectedProduct = $rootScope.products[id];

    if($stateParams.Title)
      $scope.title = $stateParams.Title;
    else
      $scope.title = 'Browse';

}])


.controller('favouritesCtrl', ['$scope','$rootScope', function($scope, $rootScope){

}])


.controller('listCtrl', ['$scope','$rootScope', function($scope, $rootScope){

}])


.controller('cartCtrl', ['$scope','$rootScope','products','$ionicPopup','$state', function($scope, $rootScope, products, $ionicPopup, $state){

  $scope.totalPrice = 0;

  for(i=0; i<$rootScope.products.length; i++){
      $scope.totalPrice = $scope.totalPrice + $rootScope.products[i].price*$rootScope.products[i].quantity;
    }

  console.log($rootScope.products);

  $scope.reduceQuantityTriggered = function(id){
    if($rootScope.products[id].quantity<2) {
      removeItemAlert(id);
    } else {
      reduceQuantity(id)
    }
  }
  $scope.increaseQuantityTriggered = function(id){
    increaseQuantity(id);
  }

function reduceQuantity(id){
  $rootScope.products[id].quantity-=1;
  $scope.totalPrice-=$rootScope.products[id].price;
  localStorage.setItem("cartedProducts", JSON.stringify($rootScope.products));
}

function increaseQuantity(id){
  $rootScope.products[id].quantity+=1;
  $scope.totalPrice+=$rootScope.products[id].price;
  localStorage.setItem("cartedProducts", JSON.stringify($rootScope.products));
}

function removeItem(id) {
  $rootScope.products[id].quantity = 0;
  $scope.totalPrice-=$rootScope.products[id].price;
  $rootScope.products[id].carted = false;
  console.log($rootScope.products);
  localStorage.setItem("products", JSON.stringify($rootScope.products));
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

  $scope.redirect = function(price){
    $state.go("purchase", {TotalPrice: price});
  }

}])

.controller('purchaseCtrl', ['$scope', '$rootScope','$stateParams','$ionicSlideBoxDelegate','$timeout','$ionicPopup', function($scope, $rootScope, $stateParams, $ionicSlideBoxDelegate, $timeout, $ionicPopup){
  $scope.totalPrice = $stateParams.TotalPrice;

  $scope.customerDetails = {
    firstName: '',
    lastName: '',
    addressMain: '',
    addressCode: '',
    addressCity: '',
    payment: {
      cardType: null,
      cardNumber: '',
      expiryDate: '',
      cvv: ''
    }
  }

  $timeout(function(){
    $ionicSlideBoxDelegate.enableSlide(0);
},0);

  $scope.nextSlide = function(){
    $ionicSlideBoxDelegate.next();
  }
  $scope.previousSlide = function(){
    $ionicSlideBoxDelegate.previous();
  }

var customerDetails = {};

  $scope.goToPayment = function(validation){
    if(!validation)
      $ionicSlideBoxDelegate.next();
    else
      $ionicSlideBoxDelegate.next();
    console.log($scope.customerDetails);
  }

  $scope.placeOrder = function(validation){
    if(!validation)
      // showPopup();
      $ionicSlideBoxDelegate.next();
    else
      $ionicSlideBoxDelegate.next();
  }

function showPopup(){
  $ionicPopup.show({
 title: 'Oops',
 subTitle: 'It seems that you have not field all the fields. Please fill all the fields and try again',
 buttons: [
   { text: 'Okay' }
 ]
});
}

}])

.controller('settingsCtrl', ['$scope','$rootScope', function($scope, $rootScope){

}])
