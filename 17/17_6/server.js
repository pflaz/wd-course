var express = require('express');
var app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.use('/store', function(req, res, next) {
    console.log("This is the middleware for /store");
    next();
});

app.get('/', function(req, res) {
    res.send('Hello World');
});

app.get('/store', function(req, res) {
    res.send('This is the store');
});

app.get('/first-template', function(req, res) {
    res.render('first-template');
});

app.listen(3000);

app.use(function(req, res, next) {
    res.status(404).send('404 error');
});