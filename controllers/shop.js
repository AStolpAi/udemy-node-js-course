const Product = require('../models/product');

exports.getProducts =  (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/product-list', {prods: products, pageTitle: 'Shop', path: "/"});
  })
}

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId, product => {
   res.render('shop/product-detail', {pageTitle: "product detail", product: product});
  });
}

exports.getIndex =  (req, res, next) => {
  Product.fetchAll().then(([rows, fieldData]) => {
    res.render('shop/index', {
      prods: rows,
      pageTitle: 'Shop',
      path: '/'
    })
  }).catch(err => {
    console.log(error);
  })
}

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {pageTitle: 'Your Orders', path: "/orders"})
}