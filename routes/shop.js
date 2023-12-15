const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');
const cartController = require('../controllers/cart');
const checkoutController = require('../controllers/checkout');

const router = express.Router();

router.get('/', shopController.getIndex);
router.get('/products', shopController.getProducts);
router.get('/cart', cartController.getCart);
router.get('/checkout', checkoutController.getCheckout);

module.exports = router;