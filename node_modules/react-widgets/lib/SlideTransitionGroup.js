'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _transitionStyle, _transitionClasses, _class, _temp2, _class2, _temp4;

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

var _TransitionGroup = require('react-transition-group/TransitionGroup');

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

var _Transition = require('react-transition-group/Transition');

var _Transition2 = _interopRequireDefault(_Transition);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _Props = require('./util/Props');

var Props = _interopRequireWildcard(_Props);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DirectionPropType = _propTypes2.default.oneOf(['left', 'right', 'top', 'bottom']);

var transitionStyle = (_transitionStyle = {}, _transitionStyle[_Transition.ENTERING] = { position: 'absolute' }, _transitionStyle[_Transition.EXITING] = { position: 'absolute' }, _transitionStyle);

var transitionClasses = (_transitionClasses = {}, _transitionClasses[_Transition.ENTERED] = 'rw-calendar-transition-entered', _transitionClasses[_Transition.ENTERING] = 'rw-calendar-transition-entering', _transitionClasses[_Transition.EXITING] = 'rw-calendar-transition-exiting', _transitionClasses[_Transition.EXITED] = 'rw-calendar-transition-exited', _transitionClasses);

function parseDuration(node) {
  var str = (0, _style2.default)(node, _properties.transitionDuration);
  var mult = str.indexOf('ms') === -1 ? 1000 : 1;
  return parseFloat(str) * mult;
}
var SlideTransition = (_temp2 = _class = function (_React$Component) {
  _inherits(SlideTransition, _React$Component);

  function SlideTransition() {
    var _temp, _this, _ret;

    _classCallCheck(this, SlideTransition);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleTransitionEnd = function (node, done) {
      var duration = parseDuration(node) || 300;

      var handler = function handler() {
        _events2.default.off(node, _properties.transitionEnd, handler, false);
        done();
      };

      setTimeout(handler, duration * 1.5);
      _events2.default.on(node, _properties.transitionEnd, handler, false);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  SlideTransition.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        props = _objectWithoutProperties(_props, ['children']);

    var direction = this.context.direction;

    var child = _react2.default.Children.only(children);

    return _react2.default.createElement(
      _Transition2.default,
      _extends({}, props, {
        timeout: 5000,
        addEndListener: this.handleTransitionEnd
      }),
      function (status, innerProps) {
        return _react2.default.cloneElement(child, _extends({}, innerProps, {
          style: transitionStyle[status],
          className: (0, _classnames2.default)(child.props.className, 'rw-calendar-transition', 'rw-calendar-transition-' + direction, transitionClasses[status])
        }));
      }
    );
  };

  return SlideTransition;
}(_react2.default.Component), _class.contextTypes = {
  direction: DirectionPropType
}, _temp2);
var SlideTransitionGroup = (_temp4 = _class2 = function (_React$Component2) {
  _inherits(SlideTransitionGroup, _React$Component2);

  function SlideTransitionGroup() {
    var _temp3, _this2, _ret2;

    _classCallCheck(this, SlideTransitionGroup);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp3 = (_this2 = _possibleConstructorReturn(this, _React$Component2.call.apply(_React$Component2, [this].concat(args))), _this2), _this2.handleEnter = function (child) {
      var node = (0, _reactDom.findDOMNode)(_this2);

      if (!child) return;
      var height = (0, _height2.default)(child) + 'px';

      (0, _style2.default)(node, {
        height: height,
        overflow: 'hidden'
      });
    }, _this2.handleExited = function () {
      var node = (0, _reactDom.findDOMNode)(_this2);
      (0, _style2.default)(node, { overflow: '', height: '' });
    }, _temp3), _possibleConstructorReturn(_this2, _ret2);
  }

  SlideTransitionGroup.prototype.getChildContext = function getChildContext() {
    return { direction: this.props.direction };
  };

  SlideTransitionGroup.prototype.render = function render() {
    var _props2 = this.props,
        children = _props2.children,
        direction = _props2.direction;


    return _react2.default.createElement(
      _TransitionGroup2.default,
      _extends({}, Props.omitOwn(this), {
        component: 'div',
        className: 'rw-calendar-transition-group'
      }),
      _react2.default.createElement(
        SlideTransition,
        {
          key: children.key,
          direction: direction,
          onEnter: this.handleEnter,
          onExited: this.handleExited
        },
        children
      )
    );
  };

  return SlideTransitionGroup;
}(_react2.default.Component), _class2.propTypes = {
  direction: DirectionPropType
}, _class2.defaultProps = {
  direction: 'left'
}, _class2.childContextTypes = {
  direction: DirectionPropType
}, _temp4);
exports.default = SlideTransitionGroup;
module.exports = exports['default'];