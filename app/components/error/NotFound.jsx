'use strict';

import React from 'react';
import {browserHistory} from 'react-router';

let NotFound = React.createClass({
  handleClick: function(e) {
    e.preventDefault();
    browserHistory.push('/');
  },
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="error-template">
              <h1>
                Oops!</h1>
              <h2>
                404 Not Found</h2>
              <div className="error-details">
                Sorry, an error has occured, Requested page not found!
              </div>
              <div className="error-actions">
                <a href="" className="btn btn-primary btn-lg" onClick={this.handleClick}>
                  <span className="glyphicon glyphicon-home"></span>
                  Take Me Home
                </a>
                <a href="" className="btn btn-default btn-lg" onClick={this.handleClick}>
                  <span className="glyphicon glyphicon-envelope"></span>
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
});

module.exports = NotFound;
