'use strict';

import React from 'react';
import Cookie from 'universal-cookie';
import {browserHistory} from 'react-router';

let Home = React.createClass({
  enterPages: function() {
      browserHistory.push('/info');
  },
  render: function() {
    return(
      <div className="container-fluid homepage page">
        <h1 className="page-title">Welcome to S20 Class Learn Japanese</h1>
        <p className="page-description">Ứng dụng sinh chữ ngẫu nhiên Romaji</p>
        <button className="button" onClick={this.enterPages}>Đến trang Romaji</button>
      </div>
    );
  }
});

module.exports = Home;
