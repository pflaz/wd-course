function getMinutes(seconds) {
	return (Math.floor(seconds / 60) + " minutes " + Math.floor(seconds % 60) + " seconds");
}

function getHours(seconds) {
	var hours = Math.floor(seconds / 3600);
	var minutes = Math.floor((seconds % 3600) / 60);
	var secondsRest = Math.floor((seconds % 3600) % 60);

	return (hours + " hours " + minutes + " minutes " + secondsRest + " seconds");
}

exports.getMinutes = getMinutes;
exports.getHours = getHours;