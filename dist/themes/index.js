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

var _field = require("./field");

var _tabpanel = require("./tabpanel");

var defaultTheme = {
  palette: {
    blue: '#016db8',
    blue_dark: '#14489f',
    white: '#FFFFFF',
    grey_light: '#d0d0d0',
    green: '#009c67',
    red: '#ff4646',
    yellow: '#ffcd00',
    blue_grey: '#555d6c',
    green_jade: '#00b59b',
    black_grey: '#1f1f1f',
    black_grey_3: 'rgb(31,31,31,0.3)',
    secondary: '#27A893',
    inverse: '#FFFFFF',
    gray_border_light: '#F3F3F3',
    gray_border_active: '#AFAFAF',
    gray_background: '#F0F0F0',
    gray_background_light: '#F6F6F6'
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
    error: _text.error,
    h1: _text.h1,
    tag: _text.tag,
    field: _field.field,
    tabpanel: _tabpanel.tabpanel
  }
};
exports.defaultTheme = defaultTheme;