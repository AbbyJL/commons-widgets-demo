'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ListOption = require('./ListOption');

var _ListOption2 = _interopRequireDefault(_ListOption);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectListItem = (_temp2 = _class = function (_React$Component) {
  _inherits(SelectListItem, _React$Component);

  function SelectListItem() {
    var _temp, _this, _ret;

    _classCallCheck(this, SelectListItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleChange = function (e) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          disabled = _this$props.disabled,
          dataItem = _this$props.dataItem;


      if (!disabled) onChange(dataItem, e.target.checked);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  SelectListItem.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        disabled = _props.disabled,
        readOnly = _props.readOnly,
        name = _props.name,
        type = _props.type,
        checked = _props.checked,
        onMouseDown = _props.onMouseDown,
        props = _objectWithoutProperties(_props, ['children', 'disabled', 'readOnly', 'name', 'type', 'checked', 'onMouseDown']);

    delete props.onChange;

    return _react2.default.createElement(
      _ListOption2.default,
      _extends({}, props, {
        role: type,
        disabled: disabled,
        'aria-checked': !!checked
      }),
      _react2.default.createElement(
        'label',
        {
          onMouseDown: onMouseDown,
          className: 'rw-select-list-label'
        },
        _react2.default.createElement('input', {
          name: name,
          type: type,
          tabIndex: '-1',
          checked: checked,
          disabled: disabled || !!readOnly,
          role: 'presentation',
          className: 'rw-select-list-input',
          onChange: this.handleChange
        }),
        children
      )
    );
  };

  return SelectListItem;
}(_react2.default.Component), _class.propTypes = {
  type: _propTypes2.default.string.isRequired,
  name: _propTypes2.default.string.isRequired,
  disabled: _propTypes2.default.bool,
  readOnly: _propTypes2.default.bool,
  dataItem: _propTypes2.default.any,
  checked: _propTypes2.default.bool.isRequired,

  onChange: _propTypes2.default.func.isRequired,
  onMouseDown: _propTypes2.default.func.isRequired
}, _temp2);
exports.default = SelectListItem;
module.exports = exports['default'];