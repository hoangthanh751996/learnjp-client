'use strict';

import React from 'react';

let FormShow = React.createClass({

  handleClick: function(e) {
    e.preventDefault();
    if(this.props.editStudent) {
      this.props.editStudent();
    }
    else if(this.props.lockStudent){
      this.props.lockStudent();
    } else if(this.props.unLockStudent){
      this.props.unLockStudent();
    }
  },
  render: function() {
    let hide = "";
    if(this.props.hideButton=="true") {
      hide = " hide-button";
    }
    return (
      <div className="form-group">
        <label className="col-md-3 control-label">{this.props.label}</label>
        <div className="col-md-6  inputGroupContainer">
          <div className="input-group">
            <span className="input-group-addon">
              <i className={this.props.glyphicon}></i>
            </span>
            <p className="show-info" id={this.props.idInfo}>{this.props.data}</p>
          </div>
        </div>
        <div className={"col-md-3" + hide}>
          <button className="btn btn-warning" disabled={this.props.isDisable} onClick={this.handleClick}>{this.props.button}
            <span className="glyphicon glyphicon-send"></span>
          </button>
        </div>
      </div>

    );
  }
});

module.exports = FormShow;
