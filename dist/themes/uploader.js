"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploader = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    .input {\n      height: 50px;\n      background: ", ";\n      border-radius: 5px;\n      padding: 0 20px;\n      color: ", ";\n      font-size: 14px;\n      font-weight: 300;\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      outline: none;\n    }\n    .btn {\n      display: flex;\n      align-items: center;\n      font-weight: normal;\n      cursor: pointer;\n      outline: none;\n    }\n    .file_name img, .file_name svg {\n      cursor: pointer;\n    }\n    .btn img, .btn svg {\n      margin-right: 15px;\n    }\n    .file_name {\n      height: 40px;\n      background: ", ";\n      border-radius: 5px;\n      padding: 0 20px;\n      margin: 0 10px;\n      color: text_black;\n      font-size: 14px;\n      font-weight: normal;\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n    }\n\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var uploader = {
  validate_icon: 'check_circle',
  add_icon: 'plus_circle',
  loading_icon: 'loading',
  delete_icon: 'trash',
  container: _styledComponents.default.div(_templateObject(), function (props) {
    return props.palette.gray_background;
  }, function (props) {
    return props.palette.black_grey;
  }, function (props) {
    return props.palette.gray_background_light;
  })
};
exports.uploader = uploader;