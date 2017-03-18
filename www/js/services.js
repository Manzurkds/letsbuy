angular.module('letsbuy.services', [])
.factory('products', function() {
  // Some fake testing data
  var products = JSON.parse(localStorage.getItem("products"));
  // var products = [];

  if(products == null || products.length<1)
    products = [{
    id: 0,
    name: 'Sleek Shades',
    price: 50,
    image: 'img/sleek-shades-1.png',
    size: 'M',
    dimension: 'W22 H12',
    colors: ['black', 'green', 'blue', 'maroon'],
    warranty: '3 Years',
    desc1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    desc2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    favourited: false,
    carted: true,
    quantity: 1
  }, {
    id: 1,
    name: 'Blue Oceans',
    price: 49.55,
    image: 'img/blue-oceans-1.png',
    size: 'L',
    dimension: 'W12 H11',
    colors: ['black', 'teal', 'beige', 'maroon', 'pink', 'almond'],
    warranty: '3 Years',
    desc1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    desc2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    favourited: true,
    carted: false,
    quantity: 0
  }, {
    id: 2,
    name: 'Blue Oceans',
    price: 60,
    image: 'img/blue-oceans-2.png',
    size: 'M',
    dimension: 'W20 H15',
    colors: ['black', 'grey', 'red', 'pink'],
    warranty: '3 Years',
    desc1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    desc2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    favourited: false,
    carted: true,
    quantity: 1
  }, {
    id: 3,
    name: 'Silver Metals',
    price: 50,
    image: 'img/silver-metals-1.png',
    size: 'M',
    dimension: 'W22 H12',
    colors: ['black', 'olive', 'cyan', 'maroon'],
    warranty: '3 Years',
    desc1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    desc2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    favourited: false,
    carted: true,
    quantity: 1
  }, {
    id: 4,
    name: 'Silver Metals',
    price: 50,
    image: 'img/silver-metals-2.png',
    size: 'M',
    dimension: 'W22 H12',
    colors: ['black', 'irony', 'blue', 'grey'],
    warranty: '3 Years',
    desc1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    desc2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    favourited: false,
    carted: true,
    quantity: 1
  }];
localStorage.setItem("products", JSON.stringify(products));
  return {
    all: function() {
      return products;
    },
    updateFavourites: function(id) {
      for(i=0; i<products.length; i++)
        if(products[i].id == id)
          if(products[i].favourited == true)
            products[i].favourited = false;
          else
            products[i].favourited = true;
      localStorage.setItem("products", JSON.stringify(products));
      console.log(JSON.parse(localStorage.getItem("products")))
    },
    updateCart: function(id) {
      console.log(products);
      for(i=0; i<products.length; i++)
        if(products[i].id == id)
          if(products[i].carted == true){
            products[i].carted = false;
            localStorage.setItem("products", JSON.stringify(products));
            console.log(JSON.parse(localStorage.getItem("products")))
          }
          else
            {
              products[i].carted = true;
              localStorage.setItem("products", JSON.stringify(products));
              console.log(JSON.parse(localStorage.getItem("products")))
            }

    },
    fetchCart: function() {
      //Assuming this is the data we get from server for the products user has added to his cart
      var allProducts = JSON.parse(localStorage.getItem("products"));

      var cartedProducts = [];

      var cartedProducts = JSON.parse(localStorage.getItem("cartedProducts"));

      if(cartedProducts==null || cartedProducts.length < 1){
        for(i=0; i<products.length; i++)
          if(products[i].carted == true)
            cartedProducts.push(products[i]);
        localStorage.setItem("cartedProducts", JSON.stringify(cartedProducts));
          }

      return cartedProducts;
    }
  };
});
