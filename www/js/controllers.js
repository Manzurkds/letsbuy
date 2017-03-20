angular.module('letsbuy.controllers', [])
.controller('rootCtrl', ['$scope', '$state','$rootScope','products','$ionicHistory','$cordovaToast', function($scope, $state, $rootScope, products, $ionicHistory, $cordovaToast){
  //Just a controller to place all the global values and functions
$rootScope.products = products.all();


  $rootScope.redirectTo = function(state) {
    $state.go(state);
  }

  $rootScope.openProductDetail = function(id, title){
    console.log(id)
    $state.go('productDetail', { Id: id, Title: title});
  }


  $rootScope.addToFavourites = function(id){
    var message= '';

    for(i=0; i<$rootScope.products.length; i++)
      if($rootScope.products[i].id == id)
        if($rootScope.products[i].favourited == true){
          $rootScope.products[i].favourited = false;
          message = "Item removed from your wishlist";
        }
        else{
          $rootScope.products[i].favourited = true;
          message = "Item added to your wishlist";
        }
      localStorage.setItem("products", JSON.stringify($rootScope.products));

      $rootScope.showToast(message, "short", "top");
  }


  $rootScope.addToCart = function(id){
    var message = '';

    for(i=0; i<$rootScope.products.length; i++)
      if($rootScope.products[i].id == id)
        if($rootScope.products[i].carted == true){
          $rootScope.products[i].carted = false;
          $rootScope.products[i].quantity = 0;
          message = "Item removed from your cart";
        }
        else {
          $rootScope.products[i].carted = true;
          $rootScope.products[i].quantity = 1;
          message = "Item added to your cart";
        }
      localStorage.setItem("products", JSON.stringify($rootScope.products));

      $rootScope.showToast(message, "short", "top");
  }

$rootScope.showToast = function(message, duration, location){
  console.log(message);
  console.log(duration);
  console.log(location);
  $cordovaToast.show(message, duration, location).then(function(success) {
           console.log("The toast was shown");
       }, function (error) {
           console.log("The toast was not shown due to " + error);
       });
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
      $scope.title = 'Products';

}])


.controller('favouritesCtrl', ['$scope','$rootScope','$ionicPopup', function($scope, $rootScope, $ionicPopup){

  $scope.clearAll = function(){
    $ionicPopup.show({
    title: 'Are You Sure',
    subTitle: 'Do you really want to remove all the items from your wishlist?',
    buttons: [
     { text: 'Cancel' },
     {
       text: '<b>Remove</b>',
       type: 'button-assertive',
       onTap: function() {
         clearAllFavourites();
       }
     }
    ]
    });
  }


  $scope.remove = function(id){
    $ionicPopup.show({
    title: 'Are You Sure',
    subTitle: 'Do you really want to remove this item from your wishlist?',
    buttons: [
     { text: 'Cancel' },
     {
       text: '<b>Remove</b>',
       type: 'button-assertive',
       onTap: function() {
         $rootScope.addToFavourites(id);
       }
     }
    ]
    });
  }


function clearAllFavourites(){
  for(i=0; i<$rootScope.products.length; i++)
      if($rootScope.products[i].favourited == true)
        $rootScope.products[i].favourited = false;
    localStorage.setItem("products", JSON.stringify($rootScope.products));
    var message = "All items cleared from wishlist"
    $rootScope.showToast(message, "short", "top");
}

}])


.controller('listCtrl', ['$scope','$rootScope', function($scope, $rootScope){
    var title = "I have no idea what it contains!"

    $scope.dummyText = []

    for(i=0; i<50; i++)
      $scope.dummyText.push(title)

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

  //Basic customer detail for ordering
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
      showPopup();
    else
      $ionicSlideBoxDelegate.next();
    console.log($scope.customerDetails);
  }

  $scope.placeOrder = function(validation){
    if(!validation)
      showPopup();
    else {
      $ionicSlideBoxDelegate.next();
      //Remove items from cart after successful order
      clearCart();
    }
  }

function showPopup(){
  $ionicPopup.show({
 title: 'Oops',
 subTitle: 'It seems that you have not field all the fields. Please fill all the fields and try again',
 buttons: [
   { text: 'Okay',
     type: 'button-blue'}
 ]
});
}

clearCart = function(){
  for(i=0; i<$rootScope.products.length; i++)
      if($rootScope.products[i].carted == true) {
        $rootScope.products[i].carted = false;
        $rootScope.products[i].quantity = 0;
      }
    localStorage.setItem("products", JSON.stringify($rootScope.products));
}

}])

.controller('settingsCtrl', ['$scope','$rootScope','$ionicPopup', function($scope, $rootScope, $ionicPopup){
  $scope.exitApp = function(){
    $ionicPopup.show({
      title: 'Exit App?',
      subTitle: "Sorry to see you go, we'd love if you stay.",
      buttons: [
        { text: 'Cancel' },
        {
          text: '<b>Exit</b>',
          type: 'button-assertive',
          onTap: function() {
            ionic.Platform.exitApp();
          }
        }
      ]
    });
  }



}])

.controller('aboutCtrl', ['$scope', '$rootScope', function($scope, $rootScope){

}])
