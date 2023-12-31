const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');
const cartController = require('../controllers/cart');
const checkoutController = require('../controllers/checkout');

const router = express.Router();

router.get('/', shopController.getIndex);
router.get('/products', shopController.getProducts);
router.get('/products/:productId', shopController.getProduct);
router.get('/cart', cartController.getCart);
router.post('/cart', cartController.postCart);
router.post('/cart-delete-item', cartController.postCartDeleteProduct)
router.get('/checkout', checkoutController.getCheckout);
router.get('/orders', shopController.getOrders);

module.exports = router;