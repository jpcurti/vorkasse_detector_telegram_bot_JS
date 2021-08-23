'use strict';

var utils = require('../utils/writer.js');
var Config = require('../service/ConfigService');

module.exports.getConfig = function getConfig (req, res, next, pin) {
  Config.getConfig(pin)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.setConfig = function setConfig (req, res, next, body) {
  Config.setConfig(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
