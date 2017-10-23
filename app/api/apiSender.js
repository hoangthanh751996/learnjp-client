'use strict';

const axios = require('axios');
const config = require('../config.json');
const Cookie = require('universal-cookie')
const BASE_URL = config.BASE_URL;

exports.get = (route) => {

    let url = `${BASE_URL}${route}`;
    return axios.get(url)
        .then(
          res => {
            return Promise.resolve(res.data);
          },
          err => {
            alert(err);
          }
        );



};

exports.post = (route, payload) => {

    let url = `${BASE_URL}${route}`;
    return axios.post(url, payload)
      .then(
        res => {
          return Promise.resolve(res.data);
        },
        err => {
          alert(err);
        }
      );

};


exports.getWithoutAuth = (route) => {
  let url = `${BASE_URL}${route}`;
  return axios.get(url);
};
