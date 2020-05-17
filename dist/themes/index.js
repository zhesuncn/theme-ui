"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultTheme = void 0;

var _button = require("./button");

var _input = require("./input");

var _uploader = require("./uploader");

var _switcher = require("./switcher");

var _selector = require("./selector");

var _notification = require("./notification");

var _editable = require("./editable");

var _text = require("./text");

var defaultTheme = {
  palette: {
    primary: '#003F90',
    secondary: '#27A893',
    inverse: '#FFFFFF',
    error: '#ff4646',
    gray_border_light: '#F3F3F3',
    gray_border_active: '#AFAFAF',
    gray_background: '#F0F0F0',
    gray_background_light: '#F6F6F6',
    text_light: '#212121',
    text_black: '#000000'
  },
  component: {
    button: _button.button,
    input: _input.input,
    uploader: _uploader.uploader,
    switcher: _switcher.switcher,
    selector: _selector.selector,
    notification: _notification.notification,
    editable: _editable.editable,
    editableInput: _editable.editableInput,
    label: _text.label,
    error: _text.error
  }
};
exports.defaultTheme = defaultTheme;