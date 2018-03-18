'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _inDOM = require('dom-helpers/util/inDOM');

var _inDOM2 = _interopRequireDefault(_inDOM);

var _activeElement = require('dom-helpers/activeElement');

var _activeElement2 = _interopRequireDefault(_activeElement);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

var _Props = require('./util/Props');

var Props = _interopRequireWildcard(_Props);

var _PropTypes = require('./util/PropTypes');

var CustomPropTypes = _interopRequireWildcard(_PropTypes);

var _localizers = require('./util/localizers');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getFormat = function getFormat(props) {
  return _localizers.number.getFormat('default', props.format);
};

var isSign = function isSign(val) {
  return (val || '').trim() === '-';
};

function isPaddedZeros(str, culture) {
  var localeChar = _localizers.number.decimalChar(null, culture);

  var _str$split = str.split(localeChar),
      _ = _str$split[0],
      decimals = _str$split[1];

  return !!(decimals && decimals.match(/0+$/));
}

function isAtDelimiter(num, str, culture) {
  var localeChar = _localizers.number.decimalChar(null, culture),
      lastIndex = str.length - 1,
      char = void 0;

  if (str.length < 1) return false;

  char = str[lastIndex];

  return !!(char === localeChar && str.indexOf(char) === lastIndex);
}

var NumberPickerInput = (_temp = _class = function (_React$Component) {
  _inherits(NumberPickerInput, _React$Component);

  function NumberPickerInput() {
    _classCallCheck(this, NumberPickerInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args)));

    _this.handleChange = function (event) {
      var _this$props = _this.props,
          value = _this$props.value,
          onChange = _this$props.onChange;


      var stringValue = event.target.value,
          numberValue = _this.parseNumber(stringValue);

      var isIntermediate = _this.isIntermediateValue(numberValue, stringValue);

      if (stringValue == null || stringValue.trim() === '') {
        _this.setStringValue('');
        onChange(null, event);

        return;
      }
      // order here matters a lot
      if (isIntermediate) {
        _this.setStringValue(stringValue);
      } else if (numberValue !== value) {
        onChange(numberValue, event);
      } else if (stringValue != _this.state.stringValue) {
        _this.setStringValue(stringValue);
      }
    };

    _this.handleBlur = function (event) {
      var str = _this.state.stringValue,
          number = _this.parseNumber(str);

      // if number is below the min
      // we need to flush low values and decimal stops, onBlur means i'm done inputing
      if (_this.isIntermediateValue(number, str)) {
        if (isNaN(number)) {
          number = null;
        }
        _this.props.onChange(number, event);
      }
    };

    _this.state = _this.getDefaultState();
    return _this;
  }

  NumberPickerInput.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (_inDOM2.default) {
      this.tabbedSelection = this.isSelectingAllText();
    }
    this.setState(this.getDefaultState(nextProps));
  };

  NumberPickerInput.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.tabbedSelection && !prevProps.editing && this.props.editing) {
      (0, _reactDom.findDOMNode)(this).select();
    }
  };

  NumberPickerInput.prototype.getDefaultState = function getDefaultState() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
    var value = props.value,
        culture = props.culture,
        editing = props.editing;


    var decimal = _localizers.number.decimalChar(null, culture),
        format = getFormat(props);

    if (value == null || isNaN(value)) value = '';else value = editing ? ('' + value).replace('.', decimal) : _localizers.number.format(value, format, culture);

    return {
      stringValue: '' + value
    };
  };

  NumberPickerInput.prototype.isSelectingAllText = function isSelectingAllText() {
    var node = (0, _reactDom.findDOMNode)(this);
    return (0, _activeElement2.default)() === node && node.selectionStart === 0 && node.selectionEnd === node.value.length;
  };

  NumberPickerInput.prototype.parseNumber = function parseNumber(strVal) {
    var _props = this.props,
        culture = _props.culture,
        userParse = _props.parse;


    var delimChar = _localizers.number.decimalChar(null, culture);

    if (userParse) return userParse(strVal, culture);

    strVal = strVal.replace(delimChar, '.');
    strVal = parseFloat(strVal);

    return strVal;
  };

  NumberPickerInput.prototype.isIntermediateValue = function isIntermediateValue(num, str) {
    var _props2 = this.props,
        culture = _props2.culture,
        min = _props2.min;


    return !!(num < min || isSign(str) || isAtDelimiter(num, str, culture) || isPaddedZeros(str, culture));
  };

  // this intermediate state is for when one runs into
  // the decimal or are typing the number


  NumberPickerInput.prototype.setStringValue = function setStringValue(stringValue) {
    this.setState({ stringValue: stringValue });
  };

  NumberPickerInput.prototype.render = function render() {
    var _props3 = this.props,
        disabled = _props3.disabled,
        readOnly = _props3.readOnly,
        placeholder = _props3.placeholder,
        min = _props3.min,
        max = _props3.max;


    var value = this.state.stringValue;
    var props = Props.omitOwn(this);

    return _react2.default.createElement(_Input2.default, _extends({}, props, {
      className: 'rw-widget-input',
      onChange: this.handleChange,
      onBlur: this.handleBlur,
      'aria-valuenow': value,
      'aria-valuemin': isFinite(min) ? min : null,
      'aria-valuemax': isFinite(max) ? max : null,
      disabled: disabled,
      readOnly: readOnly,
      placeholder: placeholder,
      value: value
    }));
  };

  return NumberPickerInput;
}(_react2.default.Component), _class.propTypes = {
  value: _propTypes2.default.number,
  editing: _propTypes2.default.bool,
  placeholder: _propTypes2.default.string,

  format: CustomPropTypes.numberFormat,

  parse: _propTypes2.default.func,
  culture: _propTypes2.default.string,

  min: _propTypes2.default.number,
  max: _propTypes2.default.number,

  disabled: CustomPropTypes.disabled,
  readOnly: CustomPropTypes.disabled,

  onChange: _propTypes2.default.func.isRequired
}, _class.defaultProps = {
  value: null,
  editing: false
}, _temp);
exports.default = NumberPickerInput;
module.exports = exports['default'];