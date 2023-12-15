exports.getCart = ((req, res, next) => {
    res.render('shop/cart', {pageTitle: 'Shopping Cart', path:'/cart'});
})