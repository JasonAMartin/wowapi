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
var nconf = require('nconf');


module.exports = {

	init: function(server,player){
		//using nconf to set data
		nconf.use('file', { file: './config.json' });
		nconf.load();
		if(server) { nconf.set('wow:server', server)};
		if(player) { nconf.set('wow:player', player) };
		//saving data
		nconf.save(function (err) {
			if (err) {
				console.error(err.message);
				return;
			}
			console.log('Configuration saved successfully.');
		});
	},

	loadConfig: function(){
		nconf.use('file', { file: './config.json' });
		nconf.load();
		return nconf.get('wow');
	},
	wowRep: function(player,server) {
		//coming back soon
	},

	demo: function(){
		//	this.init("Gor","Uther");
		var data = this.loadConfig();
		console.log(data);
	}
};
