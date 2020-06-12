"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 5px;\n    color: ", ";\n    font-weight: bold;\n    > svg {\n      fill: ", ";\n      margin-right: 20px;\n    }\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      display: flex;\n      width: 100%;\n      margin: 5px 0;\n      background-color: ", ";\n      min-height: 39px;\n      > div:first-child {\n        padding-left: 20px;\n      }\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      display: flex;\n      height: 40px;\n      width: 100%;\n      color: ", ";\n      font-weight: bold;\n      > div:first-child {\n        padding-left: 20px;\n      }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    > .table {\n      height: calc(100% - 20px);\n      overflow-y: auto;\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var infinitetable = {
  container: _styledComponents.default.div(_templateObject()),
  header: {
    container: _styledComponents.default.div(_templateObject2(), function (props) {
      return props.palette.blue_dark;
    })
  },
  line: {
    container: _styledComponents.default.div(_templateObject3(), function (props) {
      return props.palette.white;
    })
  },
  loader: {
    container: _styledComponents.default.div(_templateObject4(), function (props) {
      return props.palette.blue_dark;
    }, function (props) {
      return props.palette.blue_dark;
    })
  }
};
var _default = infinitetable;
exports.default = _default;