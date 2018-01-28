const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const ejs = require('ejs');
const app = express();

const routes = require('./routes/index');
const about = require('./routes/about');
const contact = require('./routes/contact');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

//index page
app.use('/', routes);
app.use('/about', about);
app.use('/contact', contact);
port = 3000;
app.listen(port, () => {
    console.log("Youre logged in on port:", port);
})