'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp, _initialiseProps;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

var _localizers = require('./util/localizers');

var _PropTypes = require('./util/PropTypes');

var CustomPropTypes = _interopRequireWildcard(_PropTypes);

var _Props = require('./util/Props');

var Props = _interopRequireWildcard(_Props);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DateTimePickerInput = (_temp = _class = function (_React$Component) {
  _inherits(DateTimePickerInput, _React$Component);

  function DateTimePickerInput() {
    _classCallCheck(this, DateTimePickerInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args)));

    _initialiseProps.call(_this);

    var _this$props = _this.props,
        value = _this$props.value,
        editing = _this$props.editing,
        editFormat = _this$props.editFormat,
        format = _this$props.format,
        culture = _this$props.culture;


    _this.state = {
      textValue: formatDate(value, editing && editFormat ? editFormat : format, culture)
    };
    return _this;
  }

  DateTimePickerInput.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var value = nextProps.value,
        editing = nextProps.editing,
        editFormat = nextProps.editFormat,
        format = nextProps.format,
        culture = nextProps.culture;


    this.setState({
      textValue: formatDate(value, editing && editFormat ? editFormat : format, culture)
    });
  };

  DateTimePickerInput.prototype.render = function render() {
    var _props = this.props,
        disabled = _props.disabled,
        readOnly = _props.readOnly;
    var textValue = this.state.textValue;


    var props = Props.omitOwn(this);

    return _react2.default.createElement(_Input2.default, _extends({}, props, {
      type: 'text',
      className: 'rw-widget-input',
      value: textValue,
      disabled: disabled,
      readOnly: readOnly,
      onChange: this.handleChange,
      onBlur: this.handleBlur
    }));
  };

  DateTimePickerInput.prototype.focus = function focus() {
    (0, _reactDom.findDOMNode)(this).focus();
  };

  return DateTimePickerInput;
}(_react2.default.Component), _class.propTypes = {
  format: CustomPropTypes.dateFormat.isRequired,
  editing: _propTypes2.default.bool,
  editFormat: CustomPropTypes.dateFormat,
  parse: _propTypes2.default.func.isRequired,

  value: _propTypes2.default.instanceOf(Date),
  onChange: _propTypes2.default.func.isRequired,
  onBlur: _propTypes2.default.func,
  culture: _propTypes2.default.string,

  disabled: CustomPropTypes.disabled,
  readOnly: CustomPropTypes.disabled
}, _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.handleChange = function (_ref) {
    var value = _ref.target.value;

    _this2._needsFlush = true;
    _this2.setState({ textValue: value });
  };

  this.handleBlur = function (event) {
    var _props2 = _this2.props,
        format = _props2.format,
        culture = _props2.culture,
        parse = _props2.parse,
        onChange = _props2.onChange,
        onBlur = _props2.onBlur;


    onBlur && onBlur(event);

    if (_this2._needsFlush) {
      var date = parse(event.target.value);

      _this2._needsFlush = false;
      onChange(date, formatDate(date, format, culture));
    }
  };
}, _temp);
exports.default = DateTimePickerInput;


function isValid(d) {
  return !isNaN(d.getTime());
}

function formatDate(date, format, culture) {
  var val = '';

  if (date instanceof Date && isValid(date)) val = _localizers.date.format(date, format, culture);

  return val;
}
module.exports = exports['default'];