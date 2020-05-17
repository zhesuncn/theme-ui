"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploader = void 0;
var uploader = {
  validate_icon: 'check_circle',
  add_icon: 'plus_circle',
  loading_icon: 'loading',
  delete_icon: 'trash',
  styles: "\n    .input {\n      height: 50px;\n      background: gray_background;\n      border-radius: 5px;\n      padding: 0 20px;\n      color: text_black;\n      font-size: 14px;\n      font-weight: 300;\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      outline: none;\n    }\n    .btn {\n      display: flex;\n      align-items: center;\n      font-weight: normal;\n      cursor: pointer;\n      outline: none;\n    }\n    .file_name img, .file_name svg {\n      cursor: pointer;\n    }\n    .btn img, .btn svg {\n      margin-right: 15px;\n    }\n    .file_name {\n      height: 40px;\n      background: gray_background_light;\n      border-radius: 5px;\n      padding: 0 20px;\n      margin: 0 10px;\n      color: text_black;\n      font-size: 14px;\n      font-weight: normal;\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n    }\n\n  "
};
exports.uploader = uploader;