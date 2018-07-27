var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');

var app = express();
var stringifyFile;
app.use(bodyParser.json());

app.get('/getNote', function(req, res) {
    console.log('GET request - printing file\'s content');
    fs.readFile('./example.json', 'utf8', function(err, data) {
        if (err) throw err;
        stringifyFile = data;
        res.send(data);
    });
});

app.post('/updateNote/:note', function(req, res) {
    console.log('POST request got, adding note to the file...');
    stringifyFile += req.params.note;
    fs.writeFile('./example.json', stringifyFile, function(err) {
        if (err) throw err;
        console.log('File updated');
        res.send('file updated');
    });
});

app.listen(3000);

app.use(function (req, res, next) {
    res.status(404).send('404 error')
});