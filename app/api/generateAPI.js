'use strict';

const apiSender = require('./apiSender');

module.exports = {
  generateWords: function(formInfo) {
    let route = `/api/generate`;
    return apiSender.post(route, formInfo);
  }

}
