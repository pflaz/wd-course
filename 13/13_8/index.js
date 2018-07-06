var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
	if (request.method === 'GET' && request.url === '/') {
		response.setHeader("Content-Type", "text/html; charset=utf-8");
		fs.readFile('index.html', 'utf-8', function(err, data) {
			if (err) throw err;
			response.write(data);
			response.end();
		});
	} else {
		response.setHeader("Content-Type", "image/jpeg");
		fs.readFile('cat.jpg', function(err, data) {
			if (err) throw err;
			response.write(data);
			response.end();
		});		
	}

});
server.listen(9000);