angular.module('letsbuy.services', [])
.factory('products', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var products = [{
    id: 0,
    name: 'Sleek Shades',
    price: '$50',
    image: 'img/sleek-shades-1.png',
    favourited: false,
    carted: true
  }, {
    id: 1,
    name: 'Blue Oceans',
    price: '$49.55',
    image: 'img/blue-oceans-1.png',
    favourited: true,
    carted: false
  }, {
    id: 2,
    name: 'Blue Oceans',
    price: '$60',
    image: 'img/blue-oceans-2.png',
    favourited: false,
    carted: false
  }, {
    id: 3,
    name: 'Silver Metals',
    price: '$50',
    image: 'img/silver-metals-1.png',
    favourited: false,
    carted: false
  }, {
    id: 4,
    name: 'Silver Metals',
    price: '$50',
    image: 'img/silver-metals-2.png',
    favourited: false,
    carted: false
  }];

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
    },
    updateCart: function(id) {
      for(i=0; i<products.length; i++)
        if(products[i].id == id)
          if(products[i].carted == true)
            products[i].carted = false;
          else
            products[i].carted = true;
    }
  };
});
