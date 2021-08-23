'use strict';
var Configuration = {
  telegramtoken : process.env.BOT_TOKEN,
  groupid : process.env.CHAT_ID
};
exports.Configuration = Configuration;


/**
 * Retrieve the telegram bot configuration
 *
 * pin String PIN to retrieve sensitive information
 * returns Configuration
 **/
exports.getConfig = function(pin) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "telegramtoken" : Configuration.telegramtoken,
  "groupid" : Configuration.groupid
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update the telegram bot configuration
 *
 * body Configuration Bot configuration object
 * no response value expected for this operation
 **/
exports.setConfig = function(body) {
  return new Promise(function(resolve, reject) {
    Configuration.telegramtoken = body.telegramtoken;
    Configuration.groupid = body.groupid;
    resolve();
  });
}

