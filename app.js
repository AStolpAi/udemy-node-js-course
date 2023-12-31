const path = require('path');

//Third Party
const express = require('express');
const bodyParser = require('body-parser');


const app = express();

const adminRoutes =require('./routes/admin');
const shopRoutes = require('./routes/shop');


const errorController = require('./controllers/error-response');

const db = require('./util/database');

db.execute('SELECT * FROM products').then(result => {
    console.log(result[0], result[1]);
}).catch(err => {
    console.log(err, "error")
});

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(errorController.send404);

app.listen(3000);