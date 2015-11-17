console.log("lets do it!");
'use strict';

var config = require('./config.js');
var SDK = require('wunderlist');
var API = new SDK({
  'accessToken': config.ACCESS_TOKEN,
  'clientID': config.CLIENT_ID
});


API.initialized.done(function () {
  // Where handleListData and handleError are functions 
  // 'http' here can be replaced with 'socket' to use a WebSocket connection for all requests 
  API.http.lists.all()
    .done(function (lists) {
      handleLists(lists);
      /* do stuff */
    })
    .fail(function () {
      console.error('there was a problem');
    });
});

function handleLists (lists) {
  console.log(lists);
}