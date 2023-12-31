const Product = require("../models/product");
const Cart = require("../models/cart");

exports.getCart = (req, res, next) => {
  Cart.getCart(cart => {
    Product.fetchAll(products => {
      const cartProducts = [];
      for (product of products) {
        const cartProductData = cart.products.find(
          prod => prod.id === product.id
        );
        if (cartProductData) {
          cartProducts.push({ productData: product, qty: cartProductData.qty });
        }
      }
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: cartProducts
      });
    });
  });
};

exports.postCart = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findById(prodId, product => {
        Cart.addProduct(prodId, product.price);
    });
    res.redirect('/cart');
} 

exports.postCartDeleteProduct = (req, res, next) => {
    const prodId = req.body.prodId;
    const price = req.body.price;
    console.log(price, "price");
    Product.findById(prodId, product => {
        Cart.deleteProduct(prodId);
        res.redirect("/cart");
    })
}

exports.deleteCart = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findById(prodId, product => {
        Cart.removeProduct();
    })
}