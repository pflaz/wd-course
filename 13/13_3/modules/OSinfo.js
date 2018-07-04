var os = require('os');
var timeFormatter = require('./timeFormatter');

function getOSinfo() {
	var type = os.type();
	var release = os.release();
	if (type === 'Darwin') {
		type = 'OSX';
	} else if (type === 'Windows_NT') {
		type = 'Windows';
	}
	var cpu = os.cpus()[0].model;
	var uptime = os.uptime();
	var userInfo = os.userInfo();
	console.log('System: ', type);
	console.log('Release: ', release);
	console.log('CPU model: ', cpu);
	console.log('Uptime (hours): ', timeFormatter.getHours(uptime));
	console.log('Uptime (minutes):', timeFormatter.getMinutes(uptime));
	console.log('User name: ', userInfo.username);
	console.log('Home dir: ', userInfo.homedir);
}

exports.print = getOSinfo;