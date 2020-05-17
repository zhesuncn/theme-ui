"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.editableInput = exports.editable = void 0;
var editable = {
  confirm_icon: 'check',
  cancel_icon: 'close',
  edit_icon: 'edit',
  delete_icon: 'trash',
  styles: "\n   .btns {\n      display: inline-flex;\n    }\n    .btns svg, .btns img{\n      margin-right: 10px;\n      width: 16px;\n    }\n  "
};
exports.editable = editable;
var editableInput = {
  confirm_icon: 'check',
  cancel_icon: 'close',
  edit_icon: 'edit',
  delete_icon: 'trash',
  styles: "\n    display: flex;\n    align-items: center;\n    .btns{\n      display: flex;\n      align-items: center;\n    }\n    svg, img{\n      margin-right: 10px;\n      width: 16px;\n      cursor: pointer;\n    }\n  ",
  edition_styles: "\n    display: flex;\n    align-items: center;\n  "
};
exports.editableInput = editableInput;