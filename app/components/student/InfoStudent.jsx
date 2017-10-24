'use strict';

const LABEL_STUDENT = require('../../define/label-student-info');
const BUTTON_NAME = require('../../define/button-name');
import React from 'react';
import FormShow from '../common/FormShow';
import generateAPI from '../../api/generateAPI';
import Cookie from 'universal-cookie';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
let InfoStudent = React.createClass({
  getInitialState: function() {
    return {
      numberWords: "",
      level: "easy",
      letter_check: "romaji",
      stringGenerate: ""
    }
  },
  changeNumberWords: function(e) {
    let numberWords = e.target.value.replace(/[\\A-Za-z!"£$%^&\,*+_={};:'@#~,.Š\/<>?|`¬\]\[]/g, '');
    this.setState({
      numberWords: numberWords,
    });
  },
  changeLevel: function(e) {
      let level = e.target.value;
      this.setState({level: level});
  },
  changeLetterCheck: function(e) {
      let letter_check = e.target.value;
      this.setState({letter_check: letter_check});
  },
  handleGenerate: function(e) {
    e.preventDefault();
    let formInfo = {
      number_word: this.state.numberWords,
      level: this.state.level,
      letter_check: this.state.letter_check
    }
    generateAPI.generateWords(formInfo)
      .then((data) => {
        if(data && data.code == 200) {
          this.setState({
            stringGenerate: data.data
          })
        }
        else {
          alert("Somthing went wrong");
        }
      })
  },
  render: function() {
    return (
      <div className="row student-info">
        <div className="col-md-8 student-profile">
          <fieldset>
            <form className="form-horizontal form-student-info">

              <legend>
                Ứng dụng sinh chữ Romaji
              </legend>

              <div className="form-group">
                <label className="col-md-3 control-label">{LABEL_STUDENT.numberword}</label>
                <div className="col-md-6  inputGroupContainer">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="glyphicon glyphicon-education"></i>
                    </span>
                    <input refs="email" placeholder={LABEL_STUDENT.numberword} className="form-control student-id" type="text" value={this.state.numberWords} onChange={this.changeNumberWords}/>
                    <button id="hide-buton-studentid"></button>
                  </div>

                </div>
                <div className="col-md-3">
                  <button className="btn btn-warning" onClick={this.handleGenerate}>{BUTTON_NAME.generate}
                    <span className="glyphicon glyphicon-send"></span>
                  </button>
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-3 control-label">Bảng chữ</label>
                <div className="col-md-6  inputGroupContainer">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="glyphicon glyphicon-education"></i>
                    </span>
                    <Input type="select" name="level" value={this.state.letter_check} onChange={this.changeLetterCheck}>
                      <option value="romaji">Romaji</option>
                      <option value="hiragana">Hiragana</option>
                    </Input>
                  </div>

                </div>
              </div>
              <div className="form-group">
                <label className="col-md-3 control-label">Mức độ</label>
                <div className="col-md-6  inputGroupContainer">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="glyphicon glyphicon-education"></i>
                    </span>
                    <Input type="select" name="level" value={this.state.level} onChange={this.changeLevel}>
                      <option value="easy">Easy</option>
                      <option value="hard">Hard</option>
                    </Input>
                  </div>

                </div>
              </div>
              <FormShow data={this.state.stringGenerate} glyphicon="glyphicon glyphicon-list" label={LABEL_STUDENT.result} idInfo="other-info" hideButton="true"></FormShow>

            </form>

          </fieldset>
        </div>
  </div>

    );
  }
});

module.exports = InfoStudent;
