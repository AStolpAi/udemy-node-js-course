const path = require('path');

const express = require('express');

const rootDirectory = require('../util/path');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDirectory, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
    res.redirect('/');
})

module.exports = router;