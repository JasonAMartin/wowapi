/**
 * Created by jasonamartin on 12/8/2014.
 */

/**
 * Get the reputation data for the specified toon.
 *
 * @param  {String} toon
 * @param {String} server
 * @return {String}
 */

var fs = require('fs');

module.exports = {

	init: function(server,player){
		var opts = {
			'server': server,
			'player': player
		};

		var moduleOptions = JSON.stringify(opts);


		fs.writeFile('./config.json', moduleOptions, function (err) {
			if (err) {
				console.log('The config file was not saved.');
				console.log(err.message);
				return;
			}
			console.log('Config file updated.');
		});


	},

	loadConfig: function(){
		var configData = fs.readFileSync('./config.json'),
			myData;
		try {
			myData = JSON.parse(configData);
			console.dir(myData);
		}
		catch (err) {
			console.log('The JSON was not parsed properly.')
			console.log(err);
		}
	},
	wowRep: function(player,server) {
		//coming back soon
	},

	demo: function(){
		init("Gor","Uther");
		var data = loadConfig();
		console.log(data);
	}
};
