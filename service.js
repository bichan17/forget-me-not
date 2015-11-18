//create single instance of SDK, return service requested

console.log("Get service!");
'use strict';

var sdk = require('wunderlist');
var config = require('./config.js');
 
sdk.prototype.setupLogging({
  'logLevel': 'error',
  'logPattern': '*'
});
 
function getService (service) {
 
  var options = {
    'accessToken': config.ACCESS_TOKEN,
    'clientID': config.CLIENT_ID,
    'maxHttpRequests': 1000,
    'checkHealth': false
  };
 
  return new sdk.services[service]({
    'config': options
  });
}
 
module.exports = {
  'get': getService
};