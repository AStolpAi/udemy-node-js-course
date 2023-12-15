
exports.getAdminProduct = ((req, res, next) => {
    res.render('admin/products', {pageTitle: 'Admin Products', path: 'admin/products'})
})