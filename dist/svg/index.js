"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSrc = exports.default = void 0;

var _check = require("./check.svg");

var _checkCircle = require("./check-circle.svg");

var _plusCircle = require("./plus-circle.svg");

var _trash = require("./trash.svg");

var _loading = require("./loading.svg");

var _loadingWhite = require("./loading-white.svg");

var _arrow = require("./arrow.svg");

var _close = require("./close.svg");

var _edit = require("./edit.svg");

var svgs = {
  check: _check.ReactComponent,
  plus_circle: _plusCircle.ReactComponent,
  trash: _trash.ReactComponent,
  loading: _loading.ReactComponent,
  loading_inverse: _loadingWhite.ReactComponent,
  check_circle: _checkCircle.ReactComponent,
  arrow: _arrow.ReactComponent,
  close: _close.ReactComponent,
  edit: _edit.ReactComponent
};

var getSrc = function getSrc(key) {
  return svgs[key] ? svgs[key] : key;
};

exports.getSrc = getSrc;
var _default = svgs;
exports.default = _default;