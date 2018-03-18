'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _transitionClasses;

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _events = require('dom-helpers/events');

var _events2 = _interopRequireDefault(_events);

var _style = require('dom-helpers/style');

var _style2 = _interopRequireDefault(_style);

var _height = require('dom-helpers/query/height');

var _height2 = _interopRequireDefault(_height);

var _properties = require('dom-helpers/transition/properties');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Transition = require('react-transition-group/Transition');

var _Transition2 = _interopRequireDefault(_Transition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var transitionClasses = (_transitionClasses = {}, _transitionClasses[_Transition.ENTERING] = 'rw-popup-transition-entering', _transitionClasses[_Transition.EXITING] = 'rw-popup-transition-exiting', _transitionClasses[_Transition.EXITED] = 'rw-popup-transition-exited', _transitionClasses);

var propTypes = {
  in: _propTypes2.default.bool.isRequired,
  dropUp: _propTypes2.default.bool,
  onEntering: _propTypes2.default.func,
  onEntered: _propTypes2.default.func
};

function parseDuration(node) {
  var str = (0, _style2.default)(node, _properties.transitionDuration);
  var mult = str.indexOf('ms') === -1 ? 1000 : 1;
  return parseFloat(str) * mult;
}

var SlideDownTransition = function (_React$Component) {
  _inherits(SlideDownTransition, _React$Component);

  function SlideDownTransition() {
    var _temp, _this, _ret;

    _classCallCheck(this, SlideDownTransition);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleTransitionEnd = function (node, done) {
      var duration = parseDuration(node.lastChild) || 0;

      var handler = function handler() {
        _events2.default.off(node, _properties.transitionEnd, handler, false);
        done();
      };

      setTimeout(handler, duration * 1.5);
      _events2.default.on(node, _properties.transitionEnd, handler, false);
    }, _this.handleEntered = function (elem) {
      _this.clearContainerHeight(elem);

      if (_this.props.onEntered) _this.props.onEntered();
    }, _this.handleEntering = function () {
      if (_this.props.onEntering) _this.props.onEntering();
    }, _this.setContainerHeight = function (elem) {
      elem.style.height = _this.getHeight() + 'px';
    }, _this.clearContainerHeight = function (elem) {
      elem.style.height = '';
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  SlideDownTransition.prototype.getHeight = function getHeight() {
    var container = this.element;
    var content = container.firstChild;
    var margin = parseInt((0, _style2.default)(content, 'margin-top'), 10) + parseInt((0, _style2.default)(content, 'margin-bottom'), 10);

    var old = container.style.display;
    var height = void 0;

    container.style.display = 'block';
    height = ((0, _height2.default)(content) || 0) + (isNaN(margin) ? 0 : margin);
    container.style.display = old;
    return height;
  };

  SlideDownTransition.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        className = _props.className,
        dropUp = _props.dropUp;


    return _react2.default.createElement(
      _Transition2.default,
      {
        appear: true,
        'in': this.props.in,
        timeout: 5000,
        onEnter: this.setContainerHeight,
        onEntering: this.handleEntering,
        onEntered: this.handleEntered,
        onExit: this.setContainerHeight,
        onExited: this.clearContainerHeight,
        addEndListener: this.handleTransitionEnd
      },
      function (status, innerProps) {
        return _react2.default.createElement(
          'div',
          _extends({}, innerProps, {
            ref: function ref(r) {
              return _this2.element = r;
            },
            className: (0, _classnames2.default)(className, dropUp && 'rw-dropup', transitionClasses[status])
          }),
          _react2.default.createElement(
            'div',
            { className: 'rw-popup-transition' },
            children
          )
        );
      }
    );
  };

  return SlideDownTransition;
}(_react2.default.Component);

SlideDownTransition.propTypes = propTypes;

exports.default = SlideDownTransition;
module.exports = exports['default'];