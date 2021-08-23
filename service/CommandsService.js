'use strict';

const {Configuration} = require('./ConfigService');
var currentdate = new Date(); 

/**
 * Make bot send a heartbeat message
 *
 * no response value expected for this operation
 **/
exports.heartBeat = function() {
  
  return new Promise(function(resolve, reject) {
    const message = "Heartbeat <3 on " +
    currentdate.getHours() + ":"  
    + currentdate.getMinutes() + ":" 
    + currentdate.getSeconds();
    const https = require('https')
    const options = {
    hostname: 'api.telegram.org',
    path: '/bot'+Configuration.telegramtoken+'/sendMessage?chat_id='+Configuration.groupid+'&text='+encodeURI(message),
    method: 'GET'
    }
    https.request(options).end()
    console.log ("Sending heartbeat");
    resolve();
  });
  
}


/**
 * Make bot send a \"Vorkasse is gone\" message
 *
 * no response value expected for this operation
 **/
exports.notifyVorkasseGone = function() {
  return new Promise(function(resolve, reject) {
    const message = "Vorkasse is gone on "
    + currentdate.getHours() + ":"  
    + currentdate.getMinutes() + ":" 
    + currentdate.getSeconds();
    const https = require('https')
    const options = {
    hostname: 'api.telegram.org',
    path: '/bot'+Configuration.telegramtoken+'/sendMessage?chat_id='+Configuration.groupid+'&text='+encodeURI(message),
    method: 'GET'
    }
    https.request(options).end()
    resolve();
  });
}


/**
 * Make bot send a \"Telegram Bot Container Started\" message
 *
 * no response value expected for this operation
 **/
exports.initBotMessage = function  initBotMessage(){ 
  const message = "Telegram Bot Container Started";
  console.log(message);
  

}

