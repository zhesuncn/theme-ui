"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.notification = void 0;
var notification = {
  close_icon: 'close',
  styles: "\n    border: 1px solid primary;\n    border-radius: 5px;\n    padding: 5px 20px;\n    display: flex;\n    justify-content: space-between;\n    img {\n      cursor: pointer;\n      outline: none;\n      width: 12px;\n    }\n    svg {\n      cursor: pointer;\n      outline: none;\n      width: 12px;\n    }\n    &.info{\n      border-color: secondary;\n      color: secondary;\n    }\n    &.error{\n      border-color: error;\n      color: error;\n    }\n  "
};
exports.notification = notification;