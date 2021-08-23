'use strict';

var utils = require('../utils/writer.js');
var Commands = require('../service/CommandsService');

module.exports.heartBeat = function heartBeat (req, res, next) {
  Commands.heartBeat()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.notifyVorkasseGone = function notifyVorkasseGone (req, res, next) {
  Commands.notifyVorkasseGone()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};


