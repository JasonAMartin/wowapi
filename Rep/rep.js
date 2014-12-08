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

TODO: I'll create sections for each faction level and list by that instead of in the order the data is received.
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

$.ajax({
    url: 'http://us.battle.net/api/wow/character/uther/Gor?fields=pets,achievements,reputation',
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
            if (content.standing == 0) {
               targetElement = reputation.hated;
            } else if (content.standing == 1) {
              targetElement = reputation.hostile;
            }else if (content.standing == 2) {
              targetElement = reputation.unfriendly;
            }else if (content.standing == 3) {
              targetElement = reputation.neutral;
            }else if (content.standing == 4) {
              targetElement = reputation.friendly;
            }else if (content.standing == 5) {
              listingElement.className += " honored";
              targetElement = reputation.honored;
            }else if (content.standing == 6) {
                listingElement.className += " revered";
                targetElement = reputation.revered;
            } else if (content.standing == 7) {
                listingElement.className += " exalted";
                targetElement = reputation.exalted;
            }

            //create a text node with desired content, name in this case
            var listingElementContent = document.createTextNode(content.name);
            //append the desired content to the appropriate div
            listingElement.appendChild(listingElementContent);
            //insert into the rep status target div
            targetElement[0].appendChild(listingElement);
        }
    }
});
