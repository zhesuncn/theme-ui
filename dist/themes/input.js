"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.input = void 0;
var input = {
  styles: "\n  border: 0;\n  border-bottom: 3px solid gray_border_light;\n  width:'100%';\n  font-size:14px;\n  text-align: left;\n  padding: 12px 0;\n  border-radius:0;\n  outline: none;\n  &:focus {\n    border-bottom: 3px solid  gray_border_active;\n  }\n  &::placeholder {\n    font-size: 14px;\n    font-weight: 300;\n    color: text_light;\n    opacity: 0.5;\n  }\n  &.error {\n    border-bottom: 3px solid error;\n  }\n  &.validate {\n    border-bottom: 3px solid secondary;\n  }\n"
};
exports.input = input;