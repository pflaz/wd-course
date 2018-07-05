var fs = require('fs');

fs.readdir('.', function(err, files) {
	if (err) throw err;
	var fileList = '';
	for (var i = 0; i < files.length; i++) {
		fileList += (files[i] + "\r\n");
	}
	fs.writeFile('filesList.txt', fileList, function(err) {
		if (err) throw err;
		console.log('zapisano');
	});
});
