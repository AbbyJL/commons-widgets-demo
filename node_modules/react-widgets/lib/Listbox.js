'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _widgetHelpers = require('./util/widgetHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  className: _propTypes2.default.string,
  role: _propTypes2.default.string,
  nodeRef: _propTypes2.default.func,
  emptyListMessage: _propTypes2.default.node
};

var Listbox = function (_React$Component) {
  _inherits(Listbox, _React$Component);

  function Listbox() {
    _classCallCheck(this, Listbox);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Listbox.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        role = _props.role,
        children = _props.children,
        emptyListMessage = _props.emptyListMessage,
        nodeRef = _props.nodeRef,
        props = _objectWithoutProperties(_props, ['className', 'role', 'children', 'emptyListMessage', 'nodeRef']);

    var id = (0, _widgetHelpers.instanceId)(this);

    return _react2.default.createElement(
      'ul',
      _extends({
        id: id,
        tabIndex: '-1',
        ref: nodeRef,
        className: (0, _classnames2.default)(className, 'rw-list'),
        role: role === undefined ? 'listbox' : role
      }, props),
      _react2.default.Children.count(children) ? children : _react2.default.createElement(
        'li',
        { className: 'rw-list-empty' },
        emptyListMessage
      )
    );
  };

  return Listbox;
}(_react2.default.Component);

Listbox.propTypes = propTypes;

exports.default = Listbox;
module.exports = exports['default'];