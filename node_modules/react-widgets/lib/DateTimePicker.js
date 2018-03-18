'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _NEXT_VIEW, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _class3, _temp;

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _activeElement = require('dom-helpers/activeElement');

var _activeElement2 = _interopRequireDefault(_activeElement);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _deprecated = require('react-prop-types/lib/deprecated');

var _deprecated2 = _interopRequireDefault(_deprecated);

var _uncontrollable = require('uncontrollable');

var _uncontrollable2 = _interopRequireDefault(_uncontrollable);

var _Widget = require('./Widget');

var _Widget2 = _interopRequireDefault(_Widget);

var _WidgetPicker = require('./WidgetPicker');

var _WidgetPicker2 = _interopRequireDefault(_WidgetPicker);

var _Popup = require('./Popup');

var _Popup2 = _interopRequireDefault(_Popup);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _Calendar = require('./Calendar');

var _Calendar2 = _interopRequireDefault(_Calendar);

var _DateTimePickerInput = require('./DateTimePickerInput');

var _DateTimePickerInput2 = _interopRequireDefault(_DateTimePickerInput);

var _Select = require('./Select');

var _Select2 = _interopRequireDefault(_Select);

var _TimeList = require('./TimeList');

var _TimeList2 = _interopRequireDefault(_TimeList);

var _messages = require('./messages');

var _Props = require('./util/Props');

var Props = _interopRequireWildcard(_Props);

var _PropTypes = require('./util/PropTypes');

var CustomPropTypes = _interopRequireWildcard(_PropTypes);

var _focusManager = require('./util/focusManager');

var _focusManager2 = _interopRequireDefault(_focusManager);

var _scrollManager = require('./util/scrollManager');

var _scrollManager2 = _interopRequireDefault(_scrollManager);

var _withRightToLeft = require('./util/withRightToLeft');

var _withRightToLeft2 = _interopRequireDefault(_withRightToLeft);

var _interaction = require('./util/interaction');

var _dates = require('./util/dates');

var _dates2 = _interopRequireDefault(_dates);

var _localizers = require('./util/localizers');

var _constants = require('./util/constants');

var _widgetHelpers = require('./util/widgetHelpers');

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

var NEXT_VIEW = (_NEXT_VIEW = {}, _NEXT_VIEW[_constants.datePopups.DATE] = _constants.datePopups.TIME, _NEXT_VIEW[_constants.datePopups.TIME] = _constants.datePopups.DATE, _NEXT_VIEW);

var isBothOrNeither = function isBothOrNeither(a, b) {
  return a && b || !a && !b;
};

var propTypes = _extends({}, _Calendar2.default.ControlledComponent.propTypes, {

  value: _propTypes2.default.instanceOf(Date),

  /**
   * @example ['onChangePicker', [ ['new Date()', null] ]]
   */
  onChange: _propTypes2.default.func,
  /**
   * @type (false | 'time' | 'date')
   */
  open: _propTypes2.default.oneOf([false, _constants.datePopups.TIME, _constants.datePopups.DATE]),
  onToggle: _propTypes2.default.func,

  /**
   * Default current date at which the calendar opens. If none is provided, opens at today's date or the `value` date (if any).
   */
  currentDate: _propTypes2.default.instanceOf(Date),

  /**
   * Change event Handler that is called when the currentDate is changed. The handler is called with the currentDate object.
   */
  onCurrentDateChange: _propTypes2.default.func,
  onSelect: _propTypes2.default.func,

  /**
   * The minimum Date that can be selected. Min only limits selection, it doesn't constrain the date values that
   * can be typed or pasted into the widget. If you need this behavior you can constrain values via
   * the `onChange` handler.
   *
   * @example ['prop', ['min', 'new Date()']]
   */
  min: _propTypes2.default.instanceOf(Date),

  /**
   * The maximum Date that can be selected. Max only limits selection, it doesn't constrain the date values that
   * can be typed or pasted into the widget. If you need this behavior you can constrain values via
   * the `onChange` handler.
   *
   * @example ['prop', ['max', 'new Date()']]
   */
  max: _propTypes2.default.instanceOf(Date),

  /**
   * The amount of minutes between each entry in the time list.
   *
   * @example ['prop', { step: 90 }]
   */
  step: _propTypes2.default.number,

  culture: _propTypes2.default.string,

  /**
   * A formatter used to display the date value. For more information about formats
   * visit the [Localization page](/i18n)
   *
   * @example ['dateFormat', ['format', "{ raw: 'MMM dd, yyyy' }", null, { defaultValue: 'new Date()', time: 'false' }]]
   */
  format: CustomPropTypes.dateFormat,

  /**
   * A formatter used by the time dropdown to render times. For more information about formats visit
   * the [Localization page](/i18n).
   *
   * @example ['dateFormat', ['timeFormat', "{ time: 'medium' }", null, { date: 'false', open: '"time"' }]]
   */
  timeFormat: CustomPropTypes.dateFormat,

  /**
   * A formatter to be used while the date input has focus. Useful for showing a simpler format for inputing.
   * For more information about formats visit the [Localization page](/i18n)
   *
   * @example ['dateFormat', ['editFormat', "{ date: 'short' }", null, { defaultValue: 'new Date()', format: "{ raw: 'MMM dd, yyyy' }", time: 'false' }]]
   */
  editFormat: CustomPropTypes.dateFormat,

  /**
   * Enable the calendar component of the picker.
   */
  date: _propTypes2.default.bool,

  /**
   * Enable the time list component of the picker.
   */
  time: _propTypes2.default.bool,

  /** @ignore */
  calendar: (0, _deprecated2.default)(_propTypes2.default.bool, 'Use `date` instead'),

  /**
   * A customize the rendering of times but providing a custom component.
   */
  timeComponent: CustomPropTypes.elementType,

  dropUp: _propTypes2.default.bool,
  popupTransition: CustomPropTypes.elementType,

  placeholder: _propTypes2.default.string,
  name: _propTypes2.default.string,
  autoFocus: _propTypes2.default.bool,
  disabled: CustomPropTypes.disabled,
  readOnly: CustomPropTypes.disabled,

  /**
   * Determines how the widget parses the typed date string into a Date object. You can provide an array of formats to try,
   * or provide a function that returns a date to handle parsing yourself. When `parse` is unspecified and
   * the `format` prop is a `string` parse will automatically use that format as its default.
   */
  parse: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.string), _propTypes2.default.string, _propTypes2.default.func]),

  /** @ignore */
  tabIndex: _propTypes2.default.any,
  /** @ignore */
  'aria-labelledby': _propTypes2.default.string,
  /** @ignore */
  'aria-describedby': _propTypes2.default.string,

  onKeyDown: _propTypes2.default.func,
  onKeyPress: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,

  inputProps: _propTypes2.default.object,
  messages: _propTypes2.default.shape({
    dateButton: _propTypes2.default.string,
    timeButton: _propTypes2.default.string
  })

  /**
   * ---
   * subtitle: DatePicker, TimePicker
   * localized: true
   * shortcuts:
   *   - { key: alt + down arrow, label:  open calendar or time }
   *   - { key: alt + up arrow, label: close calendar or time }
   *   - { key: down arrow, label: move focus to next item }
   *   - { key: up arrow, label: move focus to previous item }
   *   - { key: home, label: move focus to first item }
   *   - { key: end, label: move focus to last item }
   *   - { key: enter, label: select focused item }
   *   - { key: any key, label: search list for item starting with key }
   * ---
   *
   * @public
   * @extends Calendar
  */
});
var DateTimePicker = (0, _withRightToLeft2.default)(_class = (_class2 = (_temp = _class3 = function (_React$Component) {
  _inherits(DateTimePicker, _React$Component);

  function DateTimePicker() {
    _classCallCheck(this, DateTimePicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args)));

    _initDefineProp(_this, 'handleChange', _descriptor, _this);

    _initDefineProp(_this, 'handleKeyDown', _descriptor2, _this);

    _initDefineProp(_this, 'handleKeyPress', _descriptor3, _this);

    _initDefineProp(_this, 'handleDateSelect', _descriptor4, _this);

    _initDefineProp(_this, 'handleTimeSelect', _descriptor5, _this);

    _initDefineProp(_this, 'handleCalendarClick', _descriptor6, _this);

    _initDefineProp(_this, 'handleTimeClick', _descriptor7, _this);

    _this.parse = function (string) {
      var _this$props = _this.props,
          parse = _this$props.parse,
          culture = _this$props.culture,
          editFormat = _this$props.editFormat;

      var format = getFormat(_this.props, true);

      var parsers = [];

      if (format != null) parsers.push(format);
      if (editFormat != null) parsers.push(editFormat);

      !parsers.length ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'React Widgets: there are no specified `parse` formats provided and the `format` prop is a function. ' + 'the DateTimePicker is unable to parse `%s` into a dateTime, ' + 'please provide either a parse function or localizer compatible `format` prop', string) : (0, _invariant2.default)(false) : void 0;

      parsers.sort(sortFnsFirst);
      if (parse) parsers = [].concat(parse, parsers);

      var date = void 0;
      for (var i = 0; i < parsers.length; i++) {
        date = parseDate(string, parsers[i], culture);
        if (date) return date;
      }
      return null;
    };

    _this.messages = (0, _messages.getMessages)(_this.props.messages);

    _this.inputId = (0, _widgetHelpers.instanceId)(_this, '_input');
    _this.dateId = (0, _widgetHelpers.instanceId)(_this, '_date');
    _this.listId = (0, _widgetHelpers.instanceId)(_this, '_listbox');
    _this.activeCalendarId = (0, _widgetHelpers.instanceId)(_this, '_calendar_active_cell');
    _this.activeOptionId = (0, _widgetHelpers.instanceId)(_this, '_listbox_active_option');

    _this.handleScroll = (0, _scrollManager2.default)(_this);
    _this.focusManager = (0, _focusManager2.default)(_this, {
      didHandle: function didHandle(focused) {
        if (!focused) _this.close();
      }
    });

    _this.state = {
      focused: false
    };
    return _this;
  }

  DateTimePicker.prototype.componentWillReceiveProps = function componentWillReceiveProps(_ref) {
    var messages = _ref.messages;

    this.messages = (0, _messages.getMessages)(messages);
  };

  DateTimePicker.prototype.renderInput = function renderInput(owns) {
    var _props = this.props,
        open = _props.open,
        value = _props.value,
        editFormat = _props.editFormat,
        culture = _props.culture,
        placeholder = _props.placeholder,
        disabled = _props.disabled,
        readOnly = _props.readOnly,
        name = _props.name,
        tabIndex = _props.tabIndex,
        autoFocus = _props.autoFocus,
        inputProps = _props.inputProps,
        ariaLabelledby = _props['aria-labelledby'],
        ariaDescribedby = _props['aria-describedby'];
    var focused = this.state.focused;


    var activeId = null;
    if (open === _constants.datePopups.TIME) {
      activeId = this.activeOptionId;
    } else if (open === _constants.datePopups.DATE) {
      activeId = this.activeCalendarId;
    }

    return _react2.default.createElement(_DateTimePickerInput2.default, _extends({}, inputProps, {
      id: this.inputId,
      ref: 'valueInput',
      role: 'combobox',
      name: name,
      tabIndex: tabIndex,
      autoFocus: autoFocus,
      placeholder: placeholder,
      disabled: disabled,
      readOnly: readOnly,
      value: value,
      format: getFormat(this.props),
      editFormat: editFormat,
      editing: focused,
      culture: culture,
      parse: this.parse,
      onChange: this.handleChange,
      'aria-haspopup': true,
      'aria-activedescendant': activeId,
      'aria-labelledby': ariaLabelledby,
      'aria-describedby': ariaDescribedby,
      'aria-expanded': !!open,
      'aria-owns': owns
    }));
  };

  DateTimePicker.prototype.renderButtons = function renderButtons() {
    var _props2 = this.props,
        date = _props2.date,
        time = _props2.time,
        disabled = _props2.disabled,
        readOnly = _props2.readOnly;


    if (!date && !time) {
      return null;
    }
    var messages = this.messages;

    return _react2.default.createElement(
      _Select2.default,
      { bordered: true },
      date && _react2.default.createElement(_Button2.default, {
        icon: 'calendar',
        label: messages.dateButton(),
        disabled: disabled || readOnly,
        onClick: this.handleCalendarClick
      }),
      time && _react2.default.createElement(_Button2.default, {
        icon: 'clock-o',
        label: messages.timeButton(),
        disabled: disabled || readOnly,
        onClick: this.handleTimeClick
      })
    );
  };

  DateTimePicker.prototype.renderCalendar = function renderCalendar() {
    var _this2 = this;

    var activeCalendarId = this.activeCalendarId,
        inputId = this.inputId,
        dateId = this.dateId;
    var _props3 = this.props,
        open = _props3.open,
        value = _props3.value,
        popupTransition = _props3.popupTransition,
        dropUp = _props3.dropUp,
        onCurrentDateChange = _props3.onCurrentDateChange,
        currentDate = _props3.currentDate;


    var calendarProps = Props.pick(this.props, _Calendar2.default.ControlledComponent);

    return _react2.default.createElement(
      _Popup2.default,
      {
        dropUp: dropUp,
        open: open === _constants.datePopups.DATE,
        className: 'rw-calendar-popup',
        transition: popupTransition
      },
      _react2.default.createElement(_Calendar2.default, _extends({}, calendarProps, {
        ref: 'calPopup',
        id: dateId,
        activeId: activeCalendarId,
        tabIndex: '-1',
        value: value,
        autoFocus: false,
        onChange: this.handleDateSelect
        // #75: need to aggressively reclaim focus from the calendar otherwise
        // disabled header/footer buttons will drop focus completely from the widget
        , onNavigate: function onNavigate() {
          return _this2.focus();
        },
        currentDate: currentDate,
        onCurrentDateChange: onCurrentDateChange,
        'aria-hidden': !open,
        'aria-live': 'polite',
        'aria-labelledby': inputId
      }))
    );
  };

  DateTimePicker.prototype.renderTimeList = function renderTimeList() {
    var _this3 = this;

    var activeOptionId = this.activeOptionId,
        inputId = this.inputId,
        listId = this.listId;
    var _props4 = this.props,
        open = _props4.open,
        value = _props4.value,
        min = _props4.min,
        max = _props4.max,
        step = _props4.step,
        currentDate = _props4.currentDate,
        dropUp = _props4.dropUp,
        date = _props4.date,
        culture = _props4.culture,
        timeFormat = _props4.timeFormat,
        timeComponent = _props4.timeComponent,
        popupTransition = _props4.popupTransition;


    return _react2.default.createElement(
      _Popup2.default,
      {
        dropUp: dropUp,
        transition: popupTransition,
        open: open === _constants.datePopups.TIME,
        onEntering: function onEntering() {
          return _this3.refs.timePopup.forceUpdate();
        }
      },
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_TimeList2.default, {
          ref: 'timePopup',
          id: listId,
          min: min,
          max: max,
          step: step,
          currentDate: currentDate,
          activeId: activeOptionId,
          format: timeFormat,
          culture: culture,
          value: dateOrNull(value),
          onMove: this.handleScroll,
          onSelect: this.handleTimeSelect,
          preserveDate: !!date,
          itemComponent: timeComponent,
          'aria-labelledby': inputId,
          'aria-live': open && 'polite',
          'aria-hidden': !open,
          messages: this.messages
        })
      )
    );
  };

  DateTimePicker.prototype.render = function render() {
    var _props5 = this.props,
        className = _props5.className,
        date = _props5.date,
        time = _props5.time,
        open = _props5.open,
        disabled = _props5.disabled,
        readOnly = _props5.readOnly,
        dropUp = _props5.dropUp;
    var focused = this.state.focused;


    var elementProps = Props.pickElementProps(this, _Calendar2.default.ControlledComponent);

    var shouldRenderList = open || (0, _widgetHelpers.isFirstFocusedRender)(this);

    var owns = '';
    if (date) owns += this.dateId;
    if (time) owns += ' ' + this.listId;

    return _react2.default.createElement(
      _Widget2.default,
      _extends({}, elementProps, {
        open: !!open,
        dropUp: dropUp,
        focused: focused,
        disabled: disabled,
        readOnly: readOnly,
        onKeyDown: this.handleKeyDown,
        onKeyPress: this.handleKeyPress,
        onBlur: this.focusManager.handleBlur,
        onFocus: this.focusManager.handleFocus,
        className: (0, _classnames2.default)(className, 'rw-datetime-picker')
      }),
      _react2.default.createElement(
        _WidgetPicker2.default,
        null,
        this.renderInput(owns.trim()),
        this.renderButtons()
      ),
      !!(shouldRenderList && time) && this.renderTimeList(),
      !!(shouldRenderList && date) && this.renderCalendar()
    );
  };

  DateTimePicker.prototype.focus = function focus() {
    var valueInput = this.refs.valueInput;


    if (valueInput && (0, _activeElement2.default)() !== (0, _reactDom.findDOMNode)(valueInput)) valueInput.focus();
  };

  DateTimePicker.prototype.toggle = function toggle(view) {
    var open = this.props.open;


    if (!open || open !== view) this.open(view);else this.close();
  };

  DateTimePicker.prototype.open = function open(view) {
    var _props6 = this.props,
        open = _props6.open,
        date = _props6.date,
        time = _props6.time,
        onToggle = _props6.onToggle;


    if (!view) {
      if (time) view = _constants.datePopups.TIME;
      if (date) view = _constants.datePopups.DATE;
      if (isBothOrNeither(date, time)) view = NEXT_VIEW[open] || _constants.datePopups.DATE;
    }

    if (open !== view) (0, _widgetHelpers.notify)(onToggle, view);
  };

  DateTimePicker.prototype.close = function close() {
    if (this.props.open) (0, _widgetHelpers.notify)(this.props.onToggle, false);
  };

  DateTimePicker.prototype.inRangeValue = function inRangeValue(value) {
    if (value == null) return value;

    return _dates2.default.max(_dates2.default.min(value, this.props.max), this.props.min);
  };

  return DateTimePicker;
}(_react2.default.Component), _class3.displayName = 'DateTimePicker', _class3.propTypes = propTypes, _class3.defaultProps = _extends({}, _Calendar2.default.ControlledComponent.defaultProps, {
  value: null,
  min: new Date(1900, 0, 1),
  max: new Date(2099, 11, 31),
  date: true,
  time: true,
  open: false
}), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'handleChange', [_interaction.widgetEditable], {
  enumerable: true,
  initializer: function initializer() {
    var _this4 = this;

    return function (date, str, constrain) {
      var _props7 = _this4.props,
          onChange = _props7.onChange,
          value = _props7.value;


      if (constrain) date = _this4.inRangeValue(date);

      if (onChange) {
        if (date == null || value == null) {
          if (date != value //eslint-disable-line eqeqeq
          ) onChange(date, str);
        } else if (!_dates2.default.eq(date, value)) {
          onChange(date, str);
        }
      }
    };
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'handleKeyDown', [_interaction.widgetEditable], {
  enumerable: true,
  initializer: function initializer() {
    var _this5 = this;

    return function (e) {
      var _props8 = _this5.props,
          open = _props8.open,
          onKeyDown = _props8.onKeyDown;


      (0, _widgetHelpers.notify)(onKeyDown, [e]);

      if (e.defaultPrevented) return;

      if (e.key === 'Escape' && open) _this5.close();else if (e.altKey) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          _this5.open();
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          _this5.close();
        }
      } else if (open) {
        if (open === _constants.datePopups.DATE) _this5.refs.calPopup.refs.inner.handleKeyDown(e);
        if (open === _constants.datePopups.TIME) _this5.refs.timePopup.handleKeyDown(e);
      }
    };
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'handleKeyPress', [_interaction.widgetEditable], {
  enumerable: true,
  initializer: function initializer() {
    var _this6 = this;

    return function (e) {
      (0, _widgetHelpers.notify)(_this6.props.onKeyPress, [e]);

      if (e.defaultPrevented) return;

      if (_this6.props.open === _constants.datePopups.TIME) _this6.refs.timePopup.handleKeyPress(e);
    };
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'handleDateSelect', [_interaction.widgetEditable], {
  enumerable: true,
  initializer: function initializer() {
    var _this7 = this;

    return function (date) {
      var format = getFormat(_this7.props),
          dateTime = _dates2.default.merge(date, _this7.props.value, _this7.props.currentDate),
          dateStr = formatDate(date, format, _this7.props.culture);

      _this7.close();
      (0, _widgetHelpers.notify)(_this7.props.onSelect, [dateTime, dateStr]);
      _this7.handleChange(dateTime, dateStr, true);
      _this7.focus();
    };
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'handleTimeSelect', [_interaction.widgetEditable], {
  enumerable: true,
  initializer: function initializer() {
    var _this8 = this;

    return function (datum) {
      var format = getFormat(_this8.props),
          dateTime = _dates2.default.merge(_this8.props.value, datum.date, _this8.props.currentDate),
          dateStr = formatDate(datum.date, format, _this8.props.culture);

      _this8.close();
      (0, _widgetHelpers.notify)(_this8.props.onSelect, [dateTime, dateStr]);
      _this8.handleChange(dateTime, dateStr, true);
      _this8.focus();
    };
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'handleCalendarClick', [_interaction.widgetEditable], {
  enumerable: true,
  initializer: function initializer() {
    var _this9 = this;

    return function () {
      _this9.focus();
      _this9.toggle(_constants.datePopups.DATE);
    };
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'handleTimeClick', [_interaction.widgetEditable], {
  enumerable: true,
  initializer: function initializer() {
    var _this10 = this;

    return function () {
      _this10.focus();
      _this10.toggle(_constants.datePopups.TIME);
    };
  }
})), _class2)) || _class;

exports.default = (0, _uncontrollable2.default)(DateTimePicker, {
  open: 'onToggle',
  value: 'onChange',
  currentDate: 'onCurrentDateChange'
}, ['focus']);


function parseDate(string, parser, culture) {
  return typeof parser === 'function' ? parser(string, culture) : _localizers.date.parse(string, parser, culture);
}

function getFormat(props) {
  var isDate = props[_constants.datePopups.DATE] != null ? props[_constants.datePopups.DATE] : true,
      isTime = props[_constants.datePopups.TIME] != null ? props[_constants.datePopups.TIME] : true;

  return props.format ? props.format : isDate && isTime || !isDate && !isTime ? _localizers.date.getFormat('default') : _localizers.date.getFormat(isDate ? 'date' : 'time');
}

function formatDate(date, format, culture) {
  var val = '';

  if (date instanceof Date && !isNaN(date.getTime())) val = _localizers.date.format(date, format, culture);

  return val;
}

function sortFnsFirst(a, b) {
  var aFn = typeof a === 'function';
  var bFn = typeof b === 'function';

  if (aFn && !bFn) return -1;
  if (!aFn && bFn) return 1;
  if (aFn && bFn || !aFn && !bFn) return 0;
}

function dateOrNull(dt) {
  if (dt && !isNaN(dt.getTime())) return dt;
  return null;
}
module.exports = exports['default'];