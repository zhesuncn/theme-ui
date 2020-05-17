"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.switcher = void 0;
var switcher = {
  styles: "\n      .title {\n        margin-right: 10px;\n      }\n      label {\n        position: relative;\n        display: inline-block;\n        width: 52px;\n        height: 26px;\n        vertical-align: middle;\n        margin-right: 10px;\n      }\n\n      label .slider {\n          position: absolute;\n          cursor: pointer;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          background-color: #ccc;\n          -webkit-transition: 0.4s;\n          transition: 0.4s;\n      }\n  \n      label .slider:before {\n          position: absolute;\n          content: '';\n          height: 20px;\n          width: 20px;\n          left: 4px;\n          bottom: 3px;\n          background-color: white;\n          -webkit-transition: 0.4s;\n          transition: 0.4s;\n      }\n  \n      label[data-value='true'] .slider {\n          background-color: secondary;\n      }\n      \n      label[data-value='false'] .slider {\n          background-color: gray_border_active;\n      }\n  \n      label[data-value='true'] .slider:before {\n          -webkit-transform: translateX(25px);\n          -ms-transform: translateX(25px);\n          transform: translateX(25px);\n      }\n  \n      label .slider.round {\n          border-radius: 26px;\n      }\n  \n      label .slider.round:before {\n          border-radius: 50%;\n      }\n  "
};
exports.switcher = switcher;