"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.button = void 0;
var button = {
  loading_icon: 'loading',
  styles: "\n  display: inline-flex;\n  border: 1px solid secondary;\n  border-radius: 10px;\n  padding: 10px 20px;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: bold;\n  background: secondary;\n  color: inverse;\n  outline: none;\n  svg {\n    margin-left: 10px;\n    fill: inverse;\n  }\n  &:hover{\n   opacity: 0.8;\n  }\n  &.disabled, &:disabled{\n    opacity: 0.2;\n  }\n  &.clear {\n    height: auto;\n    padding: 10px 0;\n    width: auto;\n    border: none;\n    background-color: transparent;\n    border-radius: 0;\n    display: flex;\n    align-items: center;\n    color: secondary;\n  }\n  &.clear svg{\n    fill: secondary;\n  }\n"
};
exports.button = button;