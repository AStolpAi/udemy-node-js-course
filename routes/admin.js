const path = require('path');

const express = require('express');

const rootDirectory = require('../util/path');

const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
    res.render('add-products', {docTitle: 'Add Products'})
});

router.post('/add-product', (req, res, next) => {
    products.push({title: req.body.title})
    res.redirect('/');
})

exports.routes = router;
exports.products = products;
