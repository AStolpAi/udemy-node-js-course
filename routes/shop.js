const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log("I am the next middleware function");
    res.send('<h1>I am the shop page!</h1>')
});

module.exports = router;