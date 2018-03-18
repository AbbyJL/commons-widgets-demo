'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Props = require('./util/Props');

var Props = _interopRequireWildcard(_Props);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListOption = (_temp2 = _class = function (_React$Component) {
  _inherits(ListOption, _React$Component);

  function ListOption() {
    var _temp, _this, _ret;

    _classCallCheck(this, ListOption);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleSelect = function (event) {
      var _this$props = _this.props,
          onSelect = _this$props.onSelect,
          disabled = _this$props.disabled,
          dataItem = _this$props.dataItem;

      if (onSelect && !disabled) onSelect(dataItem, event);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  ListOption.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        children = _props.children,
        focused = _props.focused,
        selected = _props.selected,
        disabled = _props.disabled,
        activeId = _props.activeId;


    var Tag = this.props.component || 'li';
    var props = Props.omitOwn(this);

    var classes = {
      'rw-state-focus': focused,
      'rw-state-selected': selected,
      'rw-state-disabled': disabled
    };

    var id = focused ? activeId : undefined;

    return _react2.default.createElement(
      Tag,
      _extends({
        id: id,
        role: 'option',
        tabIndex: !disabled ? '-1' : undefined,
        'aria-selected': !!selected,
        className: (0, _classnames2.default)('rw-list-option', className, classes),
        onClick: this.handleSelect
      }, props),
      children
    );
  };

  return ListOption;
}(_react2.default.Component), _class.propTypes = {
  activeId: _propTypes2.default.string,
  dataItem: _propTypes2.default.any,
  index: _propTypes2.default.number,
  focused: _propTypes2.default.bool,
  selected: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  onSelect: _propTypes2.default.func,
  component: _propTypes2.default.string
}, _temp2);
exports.default = ListOption;
module.exports = exports['default'];