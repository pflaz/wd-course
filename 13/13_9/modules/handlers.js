var fs = require('fs');
var formidable = require('formidable');

exports.upload = function(request, response) {
	console.log('Upload request');
	var form = new formidable.IncomingForm();
	form.parse(request, function(error, fields, files) {
		fs.copyFile(files.upload.path, files.upload.name, function(err) {
			if (err) throw err;
			console.log('file coppied');
			fs.readFile('templates/upload.html', function(err, html) {
				response.writeHead(200, {"Content-Type": "text/html"});
				response.write(html);
				response.end();				
			});
		});
	});
}

exports.welcome = function(request, response) {
	console.log('Welcome request');
	fs.readFile('templates/start.html', function(err, html) {
		response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
		response.write(html);
		response.end();
	});
}

exports.error = function(request, response) {
	console.log('I do not know what to do...');
	response.write('404');
	response.end();
}

exports.show = function(request, response) {
	fs.readFile("test.png", "binary", function(error, file) {
		response.writeHead(200, {"Content-Type": "image/png"});
		response.write(file, "binary");
		response.end();
	});
}

exports.style = function(request, response) {
	fs.readFile('templates/style.css', function(err, data) {
		response.writeHead(200, {"Content-Type": "text/css; charset=utf-8"});
		response.write(data);
		response.end();
	});
}