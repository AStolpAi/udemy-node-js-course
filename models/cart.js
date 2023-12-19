const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(require.main.filename), "data", "cart.json");
 console.log(p,"ppppp in cart");

module.exports = class Cart {
    static addProduct(id, productPrice) {
        //fetch the previous cart
        let cart = {products: [], totalPrice: 0};
        fs.readFile(p, (err, fileContent) => {
            if(!err) {
                cart = JSON.parse(fileContent)
            }
        });
        //analyize the cart => find the existing products
        const exisitingProductIndex = cart.products.findIndex(prod => prod.id === id);
        const exisitngProduct = cart.products[exisitingProductIndex];
        let updatedProduct;

        if(exisitngProduct) {
            updatedProduct = {...exisitngProduct};
            updatedProduct.qty = updatedProduct.qty + 1;
            cart.products = [...cart.products. updatedProduct];
        } else {
            updatedProduct = {id: id, qty: 1};
        }
        cart.totalPrice = cart.totalPrice + productPrice;
        fs.writeFile(p, JSON.stringify(cart), err => {
            console.log(err, "error");
        });
    }

}