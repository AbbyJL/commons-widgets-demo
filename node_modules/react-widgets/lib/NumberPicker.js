'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _class3, _temp;

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _uncontrollable = require('uncontrollable');

var _uncontrollable2 = _interopRequireDefault(_uncontrollable);

var _Widget = require('./Widget');

var _Widget2 = _interopRequireDefault(_Widget);

var _WidgetPicker = require('./WidgetPicker');

var _WidgetPicker2 = _interopRequireDefault(_WidgetPicker);

var _Select = require('./Select');

var _Select2 = _interopRequireDefault(_Select);

var _NumberInput = require('./NumberInput');

var _NumberInput2 = _interopRequireDefault(_NumberInput);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _messages = require('./messages');

var _Props = require('./util/Props');

var Props = _interopRequireWildcard(_Props);

var _focusManager = require('./util/focusManager');

var _focusManager2 = _interopRequireDefault(_focusManager);

var _interaction = require('./util/interaction');

var _widgetHelpers = require('./util/widgetHelpers');

var _PropTypes = require('./util/PropTypes');

var CustomPropTypes = _interopRequireWildcard(_PropTypes);

var _constants = require('./util/constants');

var _withRightToLeft = require('./util/withRightToLeft');

var _withRightToLeft2 = _interopRequireDefault(_withRightToLeft);

var _localizers = require('./util/localizers');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var format = function format(props) {
  return _localizers.number.getFormat('default', props.format);
};

// my tests in ie11/chrome/FF indicate that keyDown repeats
// at about 35ms+/- 5ms after an initial 500ms delay. callback fires on the leading edge
function createInterval(callback) {
  var _fn = void 0;
  var id,
      cancel = function cancel() {
    return clearTimeout(id);
  };

  id = setTimeout(_fn = function fn() {
    id = setTimeout(_fn, 35);
    callback(); //fire after everything in case the user cancels on the first call
  }, 500);

  return cancel;
}

function clamp(value, min, max) {
  max = max == null ? Infinity : max;
  min = min == null ? -Infinity : min;

  if (value == null || value === '') return null;

  return Math.max(Math.min(value, max), min);
}

/**
 * ---
 * localized: true,
 * shortcuts:
 *   - { key: down arrow, label: decrement value }
 *   - { key: up arrow, label: increment value }
 *   - { key: home, label: set value to minimum value, if finite }
 *   - { key: end, label: set value to maximum value, if finite }
 * ---
 *
 * @public
 */

var NumberPicker = (0, _withRightToLeft2.default)(_class = (_class2 = (_temp = _class3 = function (_React$Component) {
  _inherits(NumberPicker, _React$Component);

  function NumberPicker() {
    _classCallCheck(this, NumberPicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args)));

    _initDefineProp(_this, 'handleMouseDown', _descriptor, _this);

    _initDefineProp(_this, 'handleMouseUp', _descriptor2, _this);

    _initDefineProp(_this, 'handleKeyDown', _descriptor3, _this);

    _this.handleChange = function (rawValue) {
      var originalEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          lastValue = _this$props.value,
          min = _this$props.min,
          max = _this$props.max;


      var nextValue = clamp(rawValue, min, max);

      if (lastValue !== nextValue) (0, _widgetHelpers.notify)(onChange, [nextValue, {
        rawValue: rawValue,
        lastValue: lastValue,
        originalEvent: originalEvent
      }]);
    };

    _this.messages = (0, _messages.getMessages)(_this.props.messages);
    _this.focusManager = (0, _focusManager2.default)(_this, {
      willHandle: function willHandle(focused) {
        if (focused) _this.focus();
      }
    });

    _this.state = {
      focused: false
    };
    return _this;
  }

  NumberPicker.prototype.componentWillReceiveProps = function componentWillReceiveProps(_ref) {
    var messages = _ref.messages;

    this.messages = (0, _messages.getMessages)(messages);
  };

  NumberPicker.prototype.renderInput = function renderInput(value) {
    var _props = this.props,
        placeholder = _props.placeholder,
        autoFocus = _props.autoFocus,
        tabIndex = _props.tabIndex,
        parse = _props.parse,
        name = _props.name,
        onKeyPress = _props.onKeyPress,
        onKeyUp = _props.onKeyUp,
        min = _props.min,
        max = _props.max,
        disabled = _props.disabled,
        readOnly = _props.readOnly,
        inputProps = _props.inputProps,
        format = _props.format,
        culture = _props.culture;


    return _react2.default.createElement(_NumberInput2.default, _extends({}, inputProps, {
      ref: 'input',
      role: 'spinbutton',
      tabIndex: tabIndex,
      value: value,
      placeholder: placeholder,
      autoFocus: autoFocus,
      editing: this.state.focused,
      format: format,
      culture: culture,
      parse: parse,
      name: name,
      min: min,
      max: max,
      disabled: disabled,
      readOnly: readOnly,
      onChange: this.handleChange,
      onKeyPress: onKeyPress,
      onKeyUp: onKeyUp
    }));
  };

  NumberPicker.prototype.render = function render() {
    var _this2 = this;

    var _props2 = this.props,
        className = _props2.className,
        disabled = _props2.disabled,
        readOnly = _props2.readOnly,
        value = _props2.value,
        min = _props2.min,
        max = _props2.max;
    var focused = this.state.focused;

    var elementProps = Props.pickElementProps(this);

    value = clamp(value, min, max);

    return _react2.default.createElement(
      _Widget2.default,
      _extends({}, elementProps, {
        focused: focused,
        disabled: disabled,
        readOnly: readOnly,
        onKeyDown: this.handleKeyDown,
        onBlur: this.focusManager.handleBlur,
        onFocus: this.focusManager.handleFocus,
        className: (0, _classnames2.default)(className, 'rw-number-picker')
      }),
      _react2.default.createElement(
        _WidgetPicker2.default,
        null,
        this.renderInput(value),
        _react2.default.createElement(
          _Select2.default,
          { bordered: true },
          _react2.default.createElement(_Button2.default, {
            icon: 'caret-up',
            onClick: this.handleFocus,
            disabled: value === max || disabled,
            label: this.messages.increment({ value: value, min: min, max: max }),
            onMouseUp: function onMouseUp(e) {
              return _this2.handleMouseUp(_constants.directions.UP, e);
            },
            onMouseDown: function onMouseDown(e) {
              return _this2.handleMouseDown(_constants.directions.UP, e);
            },
            onMouseLeave: function onMouseLeave(e) {
              return _this2.handleMouseUp(_constants.directions.UP, e);
            }
          }),
          _react2.default.createElement(_Button2.default, {
            icon: 'caret-down',
            onClick: this.handleFocus,
            disabled: value === min || disabled,
            label: this.messages.decrement({ value: value, min: min, max: max }),
            onMouseUp: function onMouseUp(e) {
              return _this2.handleMouseUp(_constants.directions.DOWN, e);
            },
            onMouseDown: function onMouseDown(e) {
              return _this2.handleMouseDown(_constants.directions.DOWN, e);
            },
            onMouseLeave: function onMouseLeave(e) {
              return _this2.handleMouseUp(_constants.directions.DOWN, e);
            }
          })
        )
      )
    );
  };

  NumberPicker.prototype.focus = function focus() {
    (0, _reactDom.findDOMNode)(this.refs.input).focus();
  };

  NumberPicker.prototype.increment = function increment(event) {
    return this.step(this.props.step, event);
  };

  NumberPicker.prototype.decrement = function decrement(event) {
    return this.step(-this.props.step, event);
  };

  NumberPicker.prototype.step = function step(amount, event) {
    var value = (this.props.value || 0) + amount;

    var decimals = this.props.precision != null ? this.props.precision : _localizers.number.precision(format(this.props));

    this.handleChange(decimals != null ? round(value, decimals) : value, event);

    return value;
  };

  return NumberPicker;
}(_react2.default.Component), _class3.propTypes = {

  value: _propTypes2.default.number,

  /**
   * @example ['onChangePicker', [ [1, null] ]]
   */
  onChange: _propTypes2.default.func,

  /**
   * The minimum number that the NumberPicker value.
   * @example ['prop', ['min', 0]]
   */
  min: _propTypes2.default.number,

  /**
   * The maximum number that the NumberPicker value.
   *
   * @example ['prop', ['max', 0]]
   */
  max: _propTypes2.default.number,

  /**
   * Amount to increase or decrease value when using the spinner buttons.
   *
   * @example ['prop', ['step', 5]]
   */
  step: _propTypes2.default.number,

  /**
   * Specify how precise the `value` should be when typing, incrementing, or decrementing the value.
   * When empty, precision is parsed from the current `format` and culture.
   */
  precision: _propTypes2.default.number,

  culture: _propTypes2.default.string,

  /**
   * A format string used to display the number value. Localizer dependent, read [localization](/i18n) for more info.
   *
   * @example ['prop', { max: 1, min: -1 , defaultValue: 0.2585, format: "{ style: 'percent' }" }]
   */
  format: CustomPropTypes.numberFormat,

  /**
   * Determines how the NumberPicker parses a number from the localized string representation.
   * You can also provide a parser `function` to pair with a custom `format`.
   */
  parse: _propTypes2.default.func,

  /** @ignore */
  tabIndex: _propTypes2.default.any,
  name: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  onKeyDown: _propTypes2.default.func,
  onKeyPress: _propTypes2.default.func,
  onKeyUp: _propTypes2.default.func,
  autoFocus: _propTypes2.default.bool,
  disabled: CustomPropTypes.disabled,
  readOnly: CustomPropTypes.disabled,

  inputProps: _propTypes2.default.object,
  messages: _propTypes2.default.shape({
    increment: _propTypes2.default.string,
    decrement: _propTypes2.default.string
  })
}, _class3.defaultProps = {
  value: null,
  open: false,

  min: -Infinity,
  max: Infinity,
  step: 1
}, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'handleMouseDown', [_interaction.widgetEditable], {
  enumerable: true,
  initializer: function initializer() {
    var _this3 = this;

    return function (direction, event) {
      var _props3 = _this3.props,
          min = _props3.min,
          max = _props3.max;


      event && event.persist();

      var method = direction === _constants.directions.UP ? _this3.increment : _this3.decrement;

      var value = method.call(_this3, event),
          atTop = direction === _constants.directions.UP && value === max,
          atBottom = direction === _constants.directions.DOWN && value === min;

      if (atTop || atBottom) _this3.handleMouseUp();else if (!_this3._cancelRepeater) {
        _this3._cancelRepeater = createInterval(function () {
          _this3.handleMouseDown(direction, event);
        });
      }
    };
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'handleMouseUp', [_interaction.widgetEditable], {
  enumerable: true,
  initializer: function initializer() {
    var _this4 = this;

    return function () {
      _this4._cancelRepeater && _this4._cancelRepeater();
      _this4._cancelRepeater = null;
    };
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'handleKeyDown', [_interaction.widgetEditable], {
  enumerable: true,
  initializer: function initializer() {
    var _this5 = this;

    return function (event) {
      var _props4 = _this5.props,
          min = _props4.min,
          max = _props4.max,
          onKeyDown = _props4.onKeyDown;

      var key = event.key;

      (0, _widgetHelpers.notify)(onKeyDown, [event]);

      if (event.defaultPrevented) return;

      if (key === 'End' && isFinite(max)) _this5.handleChange(max, event);else if (key === 'Home' && isFinite(min)) _this5.handleChange(min, event);else if (key === 'ArrowDown') {
        event.preventDefault();
        _this5.decrement(event);
      } else if (key === 'ArrowUp') {
        event.preventDefault();
        _this5.increment(event);
      }
    };
  }
})), _class2)) || _class;

exports.default = (0, _uncontrollable2.default)(NumberPicker, {
  value: 'onChange'
}, ['focus']);

// thank you kendo ui core
// https://github.com/telerik/kendo-ui-core/blob/master/src/kendo.core.js#L1036

function round(value, precision) {
  precision = precision || 0;

  value = ('' + value).split('e');
  value = Math.round(+(value[0] + 'e' + (value[1] ? +value[1] + precision : precision)));

  value = ('' + value).split('e');
  value = +(value[0] + 'e' + (value[1] ? +value[1] - precision : -precision));

  return value.toFixed(precision);
}
module.exports = exports['default'];