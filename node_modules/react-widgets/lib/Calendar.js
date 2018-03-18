'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _VIEW, _OPPOSITE_DIRECTION, _MULTIPLIER, _class, _desc, _value2, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _class3, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _uncontrollable = require('uncontrollable');

var _uncontrollable2 = _interopRequireDefault(_uncontrollable);

var _reactComponentManagers = require('react-component-managers');

var _Widget = require('./Widget');

var _Widget2 = _interopRequireDefault(_Widget);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _Month = require('./Month');

var _Month2 = _interopRequireDefault(_Month);

var _Year = require('./Year');

var _Year2 = _interopRequireDefault(_Year);

var _Decade = require('./Decade');

var _Decade2 = _interopRequireDefault(_Decade);

var _Century = require('./Century');

var _Century2 = _interopRequireDefault(_Century);

var _messages = require('./messages');

var _SlideTransitionGroup = require('./SlideTransitionGroup');

var _SlideTransitionGroup2 = _interopRequireDefault(_SlideTransitionGroup);

var _focusManager = require('./util/focusManager');

var _focusManager2 = _interopRequireDefault(_focusManager);

var _localizers = require('./util/localizers');

var _PropTypes = require('./util/PropTypes');

var CustomPropTypes = _interopRequireWildcard(_PropTypes);

var _constants = require('./util/constants');

var constants = _interopRequireWildcard(_constants);

var _Props = require('./util/Props');

var Props = _interopRequireWildcard(_Props);

var _dates = require('./util/dates');

var _dates2 = _interopRequireDefault(_dates);

var _withRightToLeft = require('./util/withRightToLeft');

var _withRightToLeft2 = _interopRequireDefault(_withRightToLeft);

var _widgetHelpers = require('./util/widgetHelpers');

var _interaction = require('./util/interaction');

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

var _constants$directions = constants.directions,
    DOWN = _constants$directions.DOWN,
    UP = _constants$directions.UP,
    LEFT = _constants$directions.LEFT,
    RIGHT = _constants$directions.RIGHT;


var last = function last(a) {
  return a[a.length - 1];
};

var views = constants.calendarViews;
var VIEW_OPTIONS = Object.keys(views).map(function (k) {
  return views[k];
});
var VIEW_UNIT = constants.calendarViewUnits;
var VIEW = (_VIEW = {}, _VIEW[views.MONTH] = _Month2.default, _VIEW[views.YEAR] = _Year2.default, _VIEW[views.DECADE] = _Decade2.default, _VIEW[views.CENTURY] = _Century2.default, _VIEW);

var ARROWS_TO_DIRECTION = {
  ArrowDown: DOWN,
  ArrowUp: UP,
  ArrowRight: RIGHT,
  ArrowLeft: LEFT
};

var OPPOSITE_DIRECTION = (_OPPOSITE_DIRECTION = {}, _OPPOSITE_DIRECTION[LEFT] = RIGHT, _OPPOSITE_DIRECTION[RIGHT] = LEFT, _OPPOSITE_DIRECTION);

var MULTIPLIER = (_MULTIPLIER = {}, _MULTIPLIER[views.YEAR] = 1, _MULTIPLIER[views.DECADE] = 10, _MULTIPLIER[views.CENTURY] = 100, _MULTIPLIER);

var propTypes = {
  /** @ignore */
  activeId: _propTypes2.default.string,
  disabled: CustomPropTypes.disabled,
  readOnly: CustomPropTypes.disabled,

  onChange: _propTypes2.default.func,
  value: _propTypes2.default.instanceOf(Date),

  /**
   * The minimum date that the Calendar can navigate from.
   *
   * @example ['prop', ['min', 'new Date()']]
   */
  min: _propTypes2.default.instanceOf(Date).isRequired,

  /**
   * The maximum date that the Calendar can navigate to.
   *
   * @example ['prop', ['max', 'new Date()']]
   */
  max: _propTypes2.default.instanceOf(Date).isRequired,

  /**
   * Default current date at which the calendar opens. If none is provided, opens at today's date or the `value` date (if any).
   */
  currentDate: _propTypes2.default.instanceOf(Date),

  /**
   * Change event Handler that is called when the currentDate is changed. The handler is called with the currentDate object.
   */
  onCurrentDateChange: _propTypes2.default.func,

  /**
   * Controls the currently displayed calendar view. Use `defaultView` to set a unique starting view.
   *
   * @type {("month"|"year"|"decade"|"century")}
   * @controllable onViewChange
   */
  view: function view(props) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return _propTypes2.default.oneOf(props.views || VIEW_OPTIONS).apply(undefined, [props].concat(args));
  },


  /**
   * Defines a list of views the Calendar can traverse through, starting with the
   * first in the list to the last.
   *
   * @type array<"month"|"year"|"decade"|"century">
   */
  views: _propTypes2.default.arrayOf(_propTypes2.default.oneOf(VIEW_OPTIONS)).isRequired,

  /**
   * A callback fired when the `view` changes.
   *
   * @controllable view
   */
  onViewChange: _propTypes2.default.func,

  /**
   * Callback fired when the Calendar navigates between views, or forward and backwards in time.
   *
   * @type function(date: ?Date, direction: string, view: string)
   */
  onNavigate: _propTypes2.default.func,
  culture: _propTypes2.default.string,
  autoFocus: _propTypes2.default.bool,

  /**
   * Show or hide the Calendar footer.
   *
   * @example ['prop', ['footer', true]]
   */
  footer: _propTypes2.default.bool,

  /**
   * Provide a custom component to render the days of the month. The Component is provided the following props
   *
   * - `date`: a `Date` object for the day of the month to render
   * - `label`: a formatted `string` of the date to render. To adjust the format of the `label` string use the `dateFormat` prop, listed below.
   */
  dayComponent: CustomPropTypes.elementType,

  /**
   * A formatter for the header button of the month view.
   *
   * @example ['dateFormat', ['headerFormat', "{ date: 'medium' }"]]
   */
  headerFormat: CustomPropTypes.dateFormat,

  /**
   * A formatter for the Calendar footer, formats today's Date as a string.
   *
   * @example ['dateFormat', ['footerFormat', "{ date: 'medium' }", "date => 'Today is: ' + formatter(date)"]]
   */
  footerFormat: CustomPropTypes.dateFormat,

  /**
   * A formatter calendar days of the week, the default formats each day as a Narrow name: "Mo", "Tu", etc.
   *
   * @example ['prop', { dayFormat: "day => \n['🎉', 'M', 'T','W','Th', 'F', '🎉'][day.getDay()]" }]
   */
  dayFormat: CustomPropTypes.dateFormat,

  /**
   * A formatter for day of the month
   *
   * @example ['prop', { dateFormat: "dt => String(dt.getDate())" }]
   */
  dateFormat: CustomPropTypes.dateFormat,

  /**
   * A formatter for month name.
   *
   * @example ['dateFormat', ['monthFormat', "{ raw: 'MMMM' }", null, { defaultView: '"year"' }]]
   */
  monthFormat: CustomPropTypes.dateFormat,

  /**
   * A formatter for month name.
   *
   * @example ['dateFormat', ['yearFormat', "{ raw: 'yy' }", null, { defaultView: '"decade"' }]]
   */
  yearFormat: CustomPropTypes.dateFormat,

  /**
   * A formatter for decade, the default formats the first and last year of the decade like: 2000 - 2009.
   */
  decadeFormat: CustomPropTypes.dateFormat,

  /**
   * A formatter for century, the default formats the first and last year of the century like: 1900 - 1999.
   */
  centuryFormat: CustomPropTypes.dateFormat,

  messages: _propTypes2.default.shape({
    moveBack: _propTypes2.default.string,
    moveForward: _propTypes2.default.string
  }),

  onKeyDown: _propTypes2.default.func,

  /** @ignore */
  tabIndex: _propTypes2.default.any

  /**
   * ---
   * localized: true
   * shortcuts:
   *   - { key: ctrl + down arrow, label: navigate to next view }
   *   - { key: ctrl + up arrow, label: navigate to previous view }
   *   - { key: ctrl + left arrow, label:  navigate to previous: month, year, decade, or century }
   *   - { key: ctrl + right arrow, label: navigate to next: month, year, decade, or century }
   *   - { key: left arrow, label:  move focus to previous date}
   *   - { key: right arrow, label: move focus to next date }
   *   - { key: up arrow, label: move focus up within view }
   *   - { key: down key, label: move focus down within view }
   * ---
   *
   * @public
  */
};
var Calendar = (0, _withRightToLeft2.default)(_class = (_class2 = (_temp = _class3 = function (_React$Component) {
  _inherits(Calendar, _React$Component);

  function Calendar() {
    _classCallCheck(this, Calendar);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var _this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args)));

    _this.handleFocusWillChange = function () {
      if (_this.props.tabIndex == -1) return false;
    };

    _initDefineProp(_this, 'handleViewChange', _descriptor, _this);

    _initDefineProp(_this, 'handleMoveBack', _descriptor2, _this);

    _initDefineProp(_this, 'handleMoveForward', _descriptor3, _this);

    _initDefineProp(_this, 'handleChange', _descriptor4, _this);

    _initDefineProp(_this, 'handleFooterClick', _descriptor5, _this);

    _initDefineProp(_this, 'handleKeyDown', _descriptor6, _this);

    _this.messages = (0, _messages.getMessages)(_this.props.messages);

    _this.viewId = (0, _widgetHelpers.instanceId)(_this, '_calendar');
    _this.labelId = (0, _widgetHelpers.instanceId)(_this, '_calendar_label');
    _this.activeId = _this.props.activeId || (0, _widgetHelpers.instanceId)(_this, '_calendar_active_cell');

    (0, _reactComponentManagers.autoFocus)(_this);

    _this.focusManager = (0, _focusManager2.default)(_this, {
      willHandle: _this.handleFocusWillChange
    });

    var _this$props = _this.props,
        view = _this$props.view,
        views = _this$props.views;

    _this.state = {
      selectedIndex: 0,
      view: view || views[0]
    };
    return _this;
  }

  Calendar.prototype.componentWillReceiveProps = function componentWillReceiveProps(_ref) {
    var messages = _ref.messages,
        view = _ref.view,
        views = _ref.views,
        value = _ref.value,
        currentDate = _ref.currentDate;

    var val = this.inRangeValue(value);

    this.messages = (0, _messages.getMessages)(messages);

    view = view || views[0];

    this.setState({
      view: view,
      slideDirection: this.getSlideDirection({ view: view, views: views, currentDate: currentDate })
    });

    //if the value changes reset views to the new one
    if (!_dates2.default.eq(val, dateOrNull(this.props.value), VIEW_UNIT[view])) {
      this.setCurrentDate(val, currentDate);
    }
  };

  Calendar.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        value = _props.value,
        footerFormat = _props.footerFormat,
        disabled = _props.disabled,
        readOnly = _props.readOnly,
        footer = _props.footer,
        views = _props.views,
        min = _props.min,
        max = _props.max,
        culture = _props.culture,
        tabIndex = _props.tabIndex;
    var _state = this.state,
        view = _state.view,
        slideDirection = _state.slideDirection,
        focused = _state.focused;

    var currentDate = this.getCurrentDate();

    var View = VIEW[view],
        todaysDate = new Date(),
        todayNotInRange = !_dates2.default.inRange(todaysDate, min, max, view);

    var key = view + '_' + _dates2.default[view](currentDate);

    var elementProps = Props.pickElementProps(this),
        viewProps = Props.pick(this.props, View);

    var isDisabled = disabled || readOnly;

    return _react2.default.createElement(
      _Widget2.default,
      _extends({}, elementProps, {
        role: 'group',
        focused: focused,
        disabled: disabled,
        readOnly: readOnly,
        tabIndex: tabIndex || 0,
        onKeyDown: this.handleKeyDown,
        onBlur: this.focusManager.handleBlur,
        onFocus: this.focusManager.handleFocus,
        className: (0, _classnames2.default)(className, 'rw-calendar rw-widget-container'),
        'aria-activedescendant': this.activeId
      }),
      _react2.default.createElement(_Header2.default, {
        label: this.getHeaderLabel(),
        labelId: this.labelId,
        messages: this.messages,
        upDisabled: isDisabled || view === last(views),
        prevDisabled: isDisabled || !_dates2.default.inRange(this.nextDate(LEFT), min, max, view),
        nextDisabled: isDisabled || !_dates2.default.inRange(this.nextDate(RIGHT), min, max, view),
        onViewChange: this.handleViewChange,
        onMoveLeft: this.handleMoveBack,
        onMoveRight: this.handleMoveForward
      }),
      _react2.default.createElement(
        Calendar.Transition,
        { direction: slideDirection },
        _react2.default.createElement(View, _extends({}, viewProps, {
          key: key,
          id: this.viewId,
          activeId: this.activeId,
          value: value,
          today: todaysDate,
          disabled: disabled,
          focused: currentDate,
          onChange: this.handleChange,
          onKeyDown: this.handleKeyDown,
          'aria-labelledby': this.labelId
        }))
      ),
      footer && _react2.default.createElement(_Footer2.default, {
        value: todaysDate,
        format: footerFormat,
        culture: culture,
        disabled: disabled || todayNotInRange,
        readOnly: readOnly,
        onClick: this.handleFooterClick
      })
    );
  };

  Calendar.prototype.navigate = function navigate(direction, date) {
    var _props2 = this.props,
        views = _props2.views,
        min = _props2.min,
        max = _props2.max,
        onNavigate = _props2.onNavigate,
        onViewChange = _props2.onViewChange;
    var view = this.state.view;


    var slideDir = direction === LEFT || direction === UP ? 'right' : 'left';

    if (direction === UP) view = views[views.indexOf(view) + 1] || view;

    if (direction === DOWN) view = views[views.indexOf(view) - 1] || view;

    if (!date) date = [LEFT, RIGHT].indexOf(direction) !== -1 ? this.nextDate(direction) : this.getCurrentDate();

    if (_dates2.default.inRange(date, min, max, view)) {
      (0, _widgetHelpers.notify)(onNavigate, [date, slideDir, view]);

      this.focus(true);
      this.setCurrentDate(date);
      (0, _widgetHelpers.notify)(onViewChange, [view]);
    }
  };

  Calendar.prototype.focus = function focus() {
    if (+this.props.tabIndex > -1) (0, _reactDom.findDOMNode)(this).focus();
  };

  Calendar.prototype.getCurrentDate = function getCurrentDate() {
    return this.props.currentDate || this.props.value || new Date();
  };

  Calendar.prototype.setCurrentDate = function setCurrentDate(date) {
    var currentDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.getCurrentDate();

    var inRangeDate = this.inRangeValue(date ? new Date(date) : currentDate);

    if (_dates2.default.eq(inRangeDate, dateOrNull(currentDate), VIEW_UNIT[this.state.view])) return;

    (0, _widgetHelpers.notify)(this.props.onCurrentDateChange, inRangeDate);
  };

  Calendar.prototype.nextDate = function nextDate(direction) {
    var method = direction === LEFT ? 'subtract' : 'add',
        view = this.state.view,
        unit = view === views.MONTH ? view : views.YEAR,
        multi = MULTIPLIER[view] || 1;

    return _dates2.default[method](this.getCurrentDate(), 1 * multi, unit);
  };

  Calendar.prototype.getHeaderLabel = function getHeaderLabel() {
    var _props3 = this.props,
        culture = _props3.culture,
        decadeFormat = _props3.decadeFormat,
        yearFormat = _props3.yearFormat,
        headerFormat = _props3.headerFormat,
        centuryFormat = _props3.centuryFormat,
        view = this.state.view,
        currentDate = this.getCurrentDate();


    switch (view) {
      case views.MONTH:
        headerFormat = _localizers.date.getFormat('header', headerFormat);
        return _localizers.date.format(currentDate, headerFormat, culture);

      case views.YEAR:
        yearFormat = _localizers.date.getFormat('year', yearFormat);
        return _localizers.date.format(currentDate, yearFormat, culture);

      case views.DECADE:
        decadeFormat = _localizers.date.getFormat('decade', decadeFormat);
        return _localizers.date.format(_dates2.default.startOf(currentDate, 'decade'), decadeFormat, culture);
      case views.CENTURY:
        centuryFormat = _localizers.date.getFormat('century', centuryFormat);
        return _localizers.date.format(_dates2.default.startOf(currentDate, 'century'), centuryFormat, culture);
    }
  };

  Calendar.prototype.inRangeValue = function inRangeValue(_value) {
    var value = dateOrNull(_value);

    if (value === null) return value;

    return _dates2.default.max(_dates2.default.min(value, this.props.max), this.props.min);
  };

  Calendar.prototype.isValidView = function isValidView(next) {
    var views = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props.views;

    return views.indexOf(next) !== -1;
  };

  Calendar.prototype.getSlideDirection = function getSlideDirection(_ref2) {
    var view = _ref2.view,
        currentDate = _ref2.currentDate,
        views = _ref2.views;
    var lastDate = this.props.currentDate;
    var _state2 = this.state,
        slideDirection = _state2.slideDirection,
        lastView = _state2.view;


    if (lastView !== view) {
      return views.indexOf(lastView) > views.indexOf(view) ? 'top' : 'bottom';
    }
    if (lastDate !== currentDate) {
      return _dates2.default.gt(currentDate, lastDate) ? 'left' : 'right';
    }

    return slideDirection;
  };

  return Calendar;
}(_react2.default.Component), _class3.displayName = 'Calendar', _class3.propTypes = propTypes, _class3.defaultProps = {
  value: null,
  min: new Date(1900, 0, 1),
  max: new Date(2099, 11, 31),
  views: VIEW_OPTIONS,
  tabIndex: '0',
  footer: true
}, _class3.Transition = _SlideTransitionGroup2.default, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'handleViewChange', [_interaction.widgetEditable], {
  enumerable: true,
  initializer: function initializer() {
    var _this2 = this;

    return function () {
      _this2.navigate(UP);
    };
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'handleMoveBack', [_interaction.widgetEditable], {
  enumerable: true,
  initializer: function initializer() {
    var _this3 = this;

    return function () {
      _this3.navigate(LEFT);
    };
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'handleMoveForward', [_interaction.widgetEditable], {
  enumerable: true,
  initializer: function initializer() {
    var _this4 = this;

    return function () {
      _this4.navigate(RIGHT);
    };
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'handleChange', [_interaction.widgetEditable], {
  enumerable: true,
  initializer: function initializer() {
    var _this5 = this;

    return function (date) {
      var _props4 = _this5.props,
          views = _props4.views,
          onChange = _props4.onChange;
      var view = _this5.state.view;


      if (views[0] === view) {
        _this5.setCurrentDate(date);

        (0, _widgetHelpers.notify)(onChange, date);

        _this5.focus();
        return;
      }

      _this5.navigate(DOWN, date);
    };
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'handleFooterClick', [_interaction.widgetEditable], {
  enumerable: true,
  initializer: function initializer() {
    var _this6 = this;

    return function (date) {
      var _props5 = _this6.props,
          views = _props5.views,
          min = _props5.min,
          max = _props5.max,
          onViewChange = _props5.onViewChange;


      var firstView = views[0];

      (0, _widgetHelpers.notify)(_this6.props.onChange, date);

      if (_dates2.default.inRange(date, min, max, firstView)) {
        _this6.focus();

        _this6.setCurrentDate(date);

        (0, _widgetHelpers.notify)(onViewChange, [firstView]);
      }
    };
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'handleKeyDown', [_interaction.widgetEditable], {
  enumerable: true,
  initializer: function initializer() {
    var _this7 = this;

    return function (e) {
      var ctrl = e.ctrlKey || e.metaKey,
          key = e.key,
          direction = ARROWS_TO_DIRECTION[key],
          currentDate = _this7.getCurrentDate(),
          view = _this7.state.view,
          unit = VIEW_UNIT[view];

      if (key === 'Enter') {
        e.preventDefault();
        return _this7.handleChange(currentDate);
      }

      if (direction) {
        if (ctrl) {
          e.preventDefault();
          _this7.navigate(direction);
        } else {
          if (_this7.isRtl() && OPPOSITE_DIRECTION[direction]) direction = OPPOSITE_DIRECTION[direction];

          var nextDate = _dates2.default.move(currentDate, _this7.props.min, _this7.props.max, view, direction);

          if (!_dates2.default.eq(currentDate, nextDate, unit)) {
            e.preventDefault();

            if (_dates2.default.gt(nextDate, currentDate, view)) _this7.navigate(RIGHT, nextDate);else if (_dates2.default.lt(nextDate, currentDate, view)) _this7.navigate(LEFT, nextDate);else _this7.setCurrentDate(nextDate);
          }
        }
      }

      (0, _widgetHelpers.notify)(_this7.props.onKeyDown, [e]);
    };
  }
})), _class2)) || _class;

function dateOrNull(dt) {
  if (dt && !isNaN(dt.getTime())) return dt;
  return null;
}

exports.default = (0, _uncontrollable2.default)(Calendar, {
  value: 'onChange',
  currentDate: 'onCurrentDateChange',
  view: 'onViewChange'
}, ['focus']);
module.exports = exports['default'];