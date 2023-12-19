const Product = require("../models/product");
const Cart = require("../models/cart");

exports.getCart = ((req, res, next) => {
    res.render('shop/cart', {pageTitle: 'Shopping Cart', path:'/cart'});
});

exports.postCart = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findById(prodId, (product) => {
        Cart.addProduct(prodId, product.price);
    });
    res.redirect('/cart');
}