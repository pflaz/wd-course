var os = require('os');
var colors = require('colors');
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
	console.log('System: '.gray, type);
	console.log('Release: '.red, release);
	console.log('CPU model: '.magenta, cpu);
	console.log('Uptime (hours): '.green, timeFormatter.getHours(uptime));
	console.log('Uptime (minutes):'.green, timeFormatter.getMinutes(uptime));
	console.log('User name: '.yellow, userInfo.username);
	console.log('Home dir: ', userInfo.homedir);
}

exports.print = getOSinfo;