'use strict'
const products = [

    {

        id: 3,

        price: 200,

    },

    {

        id: 4,

        price: 900,

    },

    {

        id: 1,

        price: 1000,

    },

];
products.forEach(prod => {
    prod.price = prod.price - prod.price * 0.15;
});
console.log(products[0].price);
console.log(products[1].price);
console.log(products[2].price);