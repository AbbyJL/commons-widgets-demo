'use strict';

exports.__esModule = true;

var _class, _temp;

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

var Header = (_temp = _class = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Header.prototype.render = function render() {
    var _props = this.props,
        messages = _props.messages,
        label = _props.label,
        labelId = _props.labelId,
        onMoveRight = _props.onMoveRight,
        onMoveLeft = _props.onMoveLeft,
        onViewChange = _props.onViewChange,
        prevDisabled = _props.prevDisabled,
        upDisabled = _props.upDisabled,
        nextDisabled = _props.nextDisabled;


    var rtl = this.context.isRtl;

    return _react2.default.createElement(
      'div',
      { className: 'rw-calendar-header' },
      _react2.default.createElement(_Button2.default, {
        className: 'rw-calendar-btn-left',
        onClick: onMoveLeft,
        disabled: prevDisabled,
        label: messages.moveBack(),
        icon: 'chevron-' + (rtl ? 'right' : 'left')
      }),
      _react2.default.createElement(
        _Button2.default,
        {
          id: labelId,
          onClick: onViewChange,
          className: 'rw-calendar-btn-view',
          disabled: upDisabled,
          'aria-live': 'polite',
          'aria-atomic': 'true'
        },
        label
      ),
      _react2.default.createElement(_Button2.default, {
        className: 'rw-calendar-btn-right',
        onClick: onMoveRight,
        disabled: nextDisabled,
        label: messages.moveForward(),
        icon: 'chevron-' + (rtl ? 'left' : 'right')
      })
    );
  };

  return Header;
}(_react2.default.Component), _class.propTypes = {
  label: _propTypes2.default.string.isRequired,
  labelId: _propTypes2.default.string,

  upDisabled: _propTypes2.default.bool.isRequired,
  prevDisabled: _propTypes2.default.bool.isRequired,
  nextDisabled: _propTypes2.default.bool.isRequired,
  onViewChange: _propTypes2.default.func.isRequired,
  onMoveLeft: _propTypes2.default.func.isRequired,
  onMoveRight: _propTypes2.default.func.isRequired,

  messages: _propTypes2.default.shape({
    moveBack: _propTypes2.default.func.isRequired,
    moveForward: _propTypes2.default.func.isRequired
  })
}, _class.contextTypes = {
  isRtl: _propTypes2.default.bool
}, _temp);
exports.default = Header;
module.exports = exports['default'];