const request = require('request');

const forecast = (latitude, longitude, callback) => {
	const url = `https://api.darksky.net/forecast/6a4ff104399321633b67f86e38ba966c/${latitude},${longitude}`;

	request({ url, json: true }, (error, { body }) => {
		if (error) {
			callback('Unable to connect to weather server', undefined);
		} else if (body.error) {
			callback('Unable to find location', undefined);
		} else {
			const { temperature, precipProbability } = body.currently;
			const { summary } = body.daily.data[0];
			callback(
				undefined,
				`${summary} it is currently ${temperature} degrees out.  There is a ${precipProbability}% chance of rain.`
			);
		}
	});
};

module.exports = forecast;
