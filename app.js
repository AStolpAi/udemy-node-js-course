const path = require('path');

//Third Party
const express = require('express');
const bodyParser = require('body-parser');


const app = express();

const adminData =require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, 'views', "404.html"));
    res.status(404).render('404', {pageTitle: '404', errorMessage: 'Sorry but this page does not exist.'})
});

app.listen(3000);