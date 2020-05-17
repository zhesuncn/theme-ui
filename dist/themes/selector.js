"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selector = void 0;
var selector = {
  open_icon: 'arrow',
  styles: "\n    padding: 12px 25px 12px 0;\n    border: 0;\n    border-radius: 0;\n    border-bottom: 3px solid gray_border_light;\n    background-color: white;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    background-position: right 5px bottom 16px;\n    background-repeat: no-repeat;\n    font-size:14px;\n    color: text_black;\n    white-space: normal;\n    outline: none;\n    &.validate {\n      border-bottom: 3px solid secondary;\n    }\n    &.placeholder {\n      color: text_light;\n    }\n    &:focus {\n      border-bottom: 3px solid  gray_border_active}\n    }\n    &::-ms-expand {\n      display: none;\n    }\n  "
};
exports.selector = selector;