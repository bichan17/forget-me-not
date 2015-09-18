console.log("lets do it!");
var config = require('./config.js');
var WunderlistSDK = require('wunderlist');
var wunderlistAPI = new WunderlistSDK({
  'accessToken': config.ACCESS_TOKEN,
  'clientID': config.CLIENT_ID
});

wunderlistAPI.http.lists.all()
  .done(function (lists) {
  	console.log(lists);
    /* do stuff */
  })
  .fail(function () {
    console.error('there was a problem');
  });