WoWAPI
=========

This is a library created to help people access the online API for World of Warcraft. This is a personal project and is not associated with Blizzard.

## Installation

  npm install wowapi --save

## Usage

  var wowapi = require('wowapi')
      reputation = wowapi.wowRep(player,server);

  console.log('rep', reputation);

## Misc

If you're interested in accessing the WoW API on your own, here's a demo URL:
http://us.battle.net/api/wow/character/uther/Gor?fields=pets,achievements,reputation


## Release History

* 0.0.1 Alpha test release