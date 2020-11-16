"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDelimiterREByDelimiter = getDelimiterREByDelimiter;
exports.stripDelimiters = stripDelimiters;
exports.getNextCursorPosition = getNextCursorPosition;
exports.setSelection = setSelection;
exports.getPostDelimiter = getPostDelimiter;
exports.PhoneFormatter = exports.DecimalFormatter = exports.NumberFormatter = exports.Formatter = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function getDelimiterREByDelimiter(delimiter) {
  return new RegExp(delimiter.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1'), 'g');
}

function stripDelimiters(value, delimiter, delimiters) {
  // single delimiter
  if (delimiters.length === 0) {
    var delimiterRE = delimiter ? getDelimiterREByDelimiter(delimiter) : '';
    return value.replace(delimiterRE, '');
  } // multiple delimiters


  delimiters.forEach(function (current) {
    current.split('').forEach(function (letter) {
      value = value.replace(getDelimiterREByDelimiter(letter), '');
    });
  });
  return value;
}

function getPositionOffset(prevPos, oldValue, newValue, delimiter, delimiters) {
  var oldRawValue, newRawValue, lengthOffset;
  oldRawValue = stripDelimiters(oldValue.slice(0, prevPos), delimiter, delimiters);
  newRawValue = stripDelimiters(newValue.slice(0, prevPos), delimiter, delimiters);
  lengthOffset = newRawValue.length - oldRawValue.length;
  return lengthOffset !== 0 ? lengthOffset / Math.abs(lengthOffset) : 0;
}

function getNextCursorPosition(prevPos, oldValue, newValue, delimiter, delimiters) {
  // If cursor was at the end of value, just place it back.
  // Because new value could contain additional chars.
  if (oldValue.length === prevPos) {
    return newValue.length;
  }

  return prevPos + getPositionOffset(prevPos, oldValue, newValue, delimiter, delimiters);
}

function setSelection(element, position) {
  if (!element || !element.current) {
    return;
  } // cursor is already in the end


  if (element.current.value && element.current.value.length <= position) {
    return;
  }

  if (element.current.createTextRange) {
    var range = element.current.createTextRange();
    range.move('character', position);
    range.select();
  } else {
    try {
      element.current.setSelectionRange(position, position);
    } catch (e) {
      // eslint-disable-next-line
      console.warn('The input element type does not support selection');
    }
  }
}

var Formatter = /*#__PURE__*/function () {
  function Formatter(maxLength) {
    _classCallCheck(this, Formatter);

    this.delimiter = '';
    this.prefix = '';
    this.delimiters = [];
    this.maxLength = maxLength;
  }

  _createClass(Formatter, [{
    key: "init",
    value: function init() {
      this.delimiterRE = this.delimiter ? new RegExp('\\' + this.delimiter, 'g') : '';
    }
  }, {
    key: "format",
    value: function format(raw) {
      return raw;
    }
  }, {
    key: "getRawValue",
    value: function getRawValue(value) {
      var rawValue = value;

      if (this.delimiter || this.delimiters.length > 0) {
        rawValue = stripDelimiters(rawValue, this.delimiter, this.delimiters);
      }

      if (this.maxLength) {
        rawValue = rawValue.substring(0, this.maxLength);
      }

      return rawValue;
    }
  }]);

  return Formatter;
}();

exports.Formatter = Formatter;

var NumberFormatter = /*#__PURE__*/function (_Formatter) {
  _inherits(NumberFormatter, _Formatter);

  var _super = _createSuper(NumberFormatter);

  function NumberFormatter(maxLength) {
    _classCallCheck(this, NumberFormatter);

    return _super.call(this, maxLength);
  }

  _createClass(NumberFormatter, [{
    key: "format",
    value: function format(raw) {
      raw = _get(_getPrototypeOf(NumberFormatter.prototype), "format", this).call(this, raw);
      raw = raw.replace(/[^\d]/g, '');
      return raw;
    }
  }, {
    key: "getRawValue",
    value: function getRawValue(value) {
      return typeof value === 'string' ? value.replace(/[^\d]/g, '') : '';
    }
  }]);

  return NumberFormatter;
}(Formatter);

exports.NumberFormatter = NumberFormatter;

var DecimalFormatter = /*#__PURE__*/function (_Formatter2) {
  _inherits(DecimalFormatter, _Formatter2);

  var _super2 = _createSuper(DecimalFormatter);

  function DecimalFormatter(decimalDelimiter, decimalLength) {
    var _this;

    _classCallCheck(this, DecimalFormatter);

    _this = _super2.call(this);
    _this.decimalDelimitter = decimalDelimiter || ',';
    _this.decimalLength = decimalLength;
    return _this;
  }

  _createClass(DecimalFormatter, [{
    key: "format",
    value: function format(raw) {
      raw = _get(_getPrototypeOf(DecimalFormatter.prototype), "format", this).call(this, raw);
      raw = raw.replace(/[^\d.]/g, '');
      raw = raw.replace(/[.]/, this.decimalDelimitter);
      raw = raw.replace(/[.]/g, '');
      return raw;
    }
  }, {
    key: "getRawValue",
    value: function getRawValue(value) {
      var raw = _get(_getPrototypeOf(DecimalFormatter.prototype), "getRawValue", this).call(this, value);

      if (raw[0] === this.decimalDelimitter) {
        raw = '0' + raw;
      }

      raw = raw.replace(new RegExp('\\' + this.decimalDelimitter), '.');
      raw = raw.replace(new RegExp('\\' + this.decimalDelimitter, 'g'), '');
      return raw;
    }
  }]);

  return DecimalFormatter;
}(Formatter);

exports.DecimalFormatter = DecimalFormatter;

var PhoneFormatter = /*#__PURE__*/function (_Formatter3) {
  _inherits(PhoneFormatter, _Formatter3);

  var _super3 = _createSuper(PhoneFormatter);

  function PhoneFormatter(maxLength) {
    var _this2;

    _classCallCheck(this, PhoneFormatter);

    _this2 = _super3.call(this, maxLength);
    _this2.delimiter = ' ';
    return _this2;
  }

  _createClass(PhoneFormatter, [{
    key: "format",
    value: function format(raw) {
      raw = _get(_getPrototypeOf(PhoneFormatter.prototype), "format", this).call(this, raw);
      raw = raw.replace(/[^\d]/g, '');
      raw = raw.substring(0, this.maxLength);
      var result = '',
          current = '';

      for (var i = 0, iMax = raw.length; i < iMax; i++) {
        current = raw.charAt(i);

        if (i % 2 === 0 && i !== 0) {
          result += this.delimiter;
        }

        result += current;
      }

      return result;
    }
  }]);

  return PhoneFormatter;
}(Formatter);

exports.PhoneFormatter = PhoneFormatter;

function getPostDelimiter(value, delimiter, delimiters) {
  // single delimiter
  if (delimiters.length === 0) {
    return value.slice(-delimiter.length) === delimiter ? delimiter : '';
  } // multiple delimiters


  var matchedDelimiter = '';
  delimiters.forEach(function (current) {
    if (value.slice(-current.length) === current) {
      matchedDelimiter = current;
    }
  });
  return matchedDelimiter;
}