var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res) {
    res.render('main');
});

app.post('/auth/google', function(req, res) {
    res.render('logged-on', {
        login: req.body.login
    });
});

app.listen(3000);