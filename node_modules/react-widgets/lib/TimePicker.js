'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _DateTimePicker = require('./DateTimePicker');

var _DateTimePicker2 = _interopRequireDefault(_DateTimePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  open: _propTypes2.default.bool,
  defaultOpen: _propTypes2.default.bool,
  onToggle: _propTypes2.default.func
};

var TimePicker = function (_React$Component) {
  _inherits(TimePicker, _React$Component);

  function TimePicker(props, context) {
    _classCallCheck(this, TimePicker);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.handleToggle = function (open) {
      _this.toggleState = !!open;

      if (_this.props.onToggle) _this.props.onToggle(_this.toggleState);else _this.forceUpdate();
    };

    _this.toggleState = props.defaultOpen;
    return _this;
  }

  TimePicker.prototype.render = function render() {
    var open = this.props.open;

    open = open === undefined ? this.toggleState : open;

    return _react2.default.createElement(_DateTimePicker2.default, _extends({}, this.props, {
      date: false,
      open: open ? 'time' : open,
      onToggle: this.handleToggle
    }));
  };

  return TimePicker;
}(_react2.default.Component);

TimePicker.propTypes = propTypes;

exports.default = TimePicker;
module.exports = exports['default'];