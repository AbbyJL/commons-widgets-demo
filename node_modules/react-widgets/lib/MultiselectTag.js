'use strict';

exports.__esModule = true;

var _class, _temp2;

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MultiselectTag = (_temp2 = _class = function (_React$Component) {
  _inherits(MultiselectTag, _React$Component);

  function MultiselectTag() {
    var _temp, _this, _ret;

    _classCallCheck(this, MultiselectTag);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.onClick = function (event) {
      var _this$props = _this.props,
          value = _this$props.value,
          disabled = _this$props.disabled,
          onClick = _this$props.onClick;

      if (!disabled) onClick(value, event);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  MultiselectTag.prototype.renderDelete = function renderDelete() {
    var _props = this.props,
        label = _props.label,
        disabled = _props.disabled,
        readOnly = _props.readOnly;


    return _react2.default.createElement(
      _Button2.default,
      {
        variant: 'select',
        onClick: this.onClick,
        className: 'rw-multiselect-tag-btn',
        disabled: disabled || readOnly,
        'aria-label': label || 'Remove item'
      },
      _react2.default.createElement(
        'span',
        { 'aria-hidden': 'true' },
        '\xD7'
      )
    );
  };

  MultiselectTag.prototype.render = function render() {
    var _props2 = this.props,
        id = _props2.id,
        children = _props2.children,
        focused = _props2.focused,
        disabled = _props2.disabled;

    var tabIndex = disabled ? undefined : '-1';

    return _react2.default.createElement(
      'li',
      {
        id: id,
        role: 'option',
        tabIndex: tabIndex,
        className: (0, _classnames2.default)('rw-multiselect-tag', disabled && 'rw-state-disabled', focused && !disabled && 'rw-state-focus')
      },
      children,
      _react2.default.createElement(
        'div',
        null,
        this.renderDelete()
      )
    );
  };

  return MultiselectTag;
}(_react2.default.Component), _class.propTypes = {
  id: _propTypes2.default.string,
  onClick: _propTypes2.default.func.isRequired,
  focused: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  readOnly: _propTypes2.default.bool,
  label: _propTypes2.default.string,
  value: _propTypes2.default.any
}, _temp2);
exports.default = MultiselectTag;
module.exports = exports['default'];