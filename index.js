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

module.exports = {
	wowRep: function(player,server) {

		/**
		 Reputation levels in WOW:
		 0: hated
		 1: hostile
		 2: unfriendly
		 3: neutral
		 4: friendly
		 5: honored
		 6: revered
		 7: exalted
		 **/

		//create a reputation object. Key is rep name and value is the target div
		var reputation = {
			"hated" : $("#hated"),
			"hostile" : $("#hostile"),
			"unfriendly" : $("#unfriendly"),
			"neutral" : $("#neutral"),
			"friendly" : $("#friendly"),
			"honored" : $("#honored"),
			"revered" : $("#revered"),
			"exalted" : $("#exalted")
		}

		var reputationIndex = ["hated","hostile","unfriendly","neutral","friendly","honored","revered","exalted"];

		return $.ajax({
			url: 'http://us.battle.net/api/wow/character/'+server+'/'+player+'?fields=reputation',
			dataType: 'JSONP',
			jsonpCallback: 'callback',
			type: 'GET',
			jsonp: 'jsonp',
			success: function (data) {
				var targetElement;
				console.log("Daylight's burning");
				//loop through reponse data
				for (var i = 0, len = data.reputation.length; i < len; i++) {
					//assisgn to content var for ease
					var content = data.reputation[i]; //node has id, name, standing, value and max
					//create div for this listing and give it a class name for styling
					var listingElement = document.createElement("div");
					listingElement.className = "rep-listing";
					//let's have fun and add a classes for special rep standings & set the target div while we're at it
					targetElement = reputation[reputationIndex[content.standing]];
					//create a text node with desired content, name in this case
					var listingElementContent = document.createTextNode(content.name);
					//append the desired content to the appropriate div
					listingElement.appendChild(listingElementContent);
					//insert into the rep status target div
					targetElement[0].appendChild(listingElement);
				}
			}
		});
	}
};
