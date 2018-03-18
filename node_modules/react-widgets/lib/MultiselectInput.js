'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _activeElement = require('dom-helpers/activeElement');

var _activeElement2 = _interopRequireDefault(_activeElement);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _PropTypes = require('./util/PropTypes');

var CustomPropTypes = _interopRequireWildcard(_PropTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MultiselectInput = (_temp = _class = function (_React$Component) {
  _inherits(MultiselectInput, _React$Component);

  function MultiselectInput() {
    _classCallCheck(this, MultiselectInput);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  MultiselectInput.prototype.render = function render() {
    var _props = this.props,
        disabled = _props.disabled,
        readOnly = _props.readOnly,
        props = _objectWithoutProperties(_props, ['disabled', 'readOnly']);

    var size = Math.max((props.value || props.placeholder).length, 1) + 1;

    return _react2.default.createElement('input', _extends({}, props, {
      size: size,
      className: 'rw-input-reset',
      autoComplete: 'off',
      'aria-disabled': disabled,
      'aria-readonly': readOnly,
      disabled: disabled,
      readOnly: readOnly
    }));
  };

  MultiselectInput.prototype.select = function select() {
    (0, _reactDom.findDOMNode)(this).select();
  };

  MultiselectInput.prototype.focus = function focus() {
    var node = (0, _reactDom.findDOMNode)(this);

    if ((0, _activeElement2.default)() === node) return;
    node.focus();
  };

  return MultiselectInput;
}(_react2.default.Component), _class.propTypes = {
  value: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  maxLength: _propTypes2.default.number,
  onChange: _propTypes2.default.func.isRequired,

  disabled: CustomPropTypes.disabled,
  readOnly: CustomPropTypes.disabled
}, _temp);
exports.default = MultiselectInput;
module.exports = exports['default'];