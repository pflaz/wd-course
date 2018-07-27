var express = require('express');
var app = express();

app.use('/store', function(req, res, next) {
    console.log("This is the middleware for /store");
    next();
});

app.get('/', function(req, res) {
    res.send('Hello World');
});

app.get('/store', function(req, res) {
    res.send('This is the store');
})

var server = app.listen(3000, 'localhost', function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Listening on http://' + host + ':' + port);
});

app.use(function(req, res, next) {
    res.status(404).send('404 error');
});