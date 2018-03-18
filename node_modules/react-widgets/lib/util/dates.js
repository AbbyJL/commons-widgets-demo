'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dateArithmetic = require('date-arithmetic');

var _dateArithmetic2 = _interopRequireDefault(_dateArithmetic);

var _constants = require('./constants');

var _localizers = require('./localizers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dates = _extends({}, _dateArithmetic2.default, {
  monthsInYear: function monthsInYear(year) {
    var date = new Date(year, 0, 1);
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(function (i) {
      return dates.month(date, i);
    });
  },
  firstVisibleDay: function firstVisibleDay(date, culture) {
    var firstOfMonth = dates.startOf(date, 'month');
    return dates.startOf(firstOfMonth, 'week', _localizers.date.firstOfWeek(culture));
  },
  lastVisibleDay: function lastVisibleDay(date, culture) {
    var endOfMonth = dates.endOf(date, 'month');

    return dates.endOf(endOfMonth, 'week', _localizers.date.firstOfWeek(culture));
  },
  visibleDays: function visibleDays(date, culture) {
    var current = dates.firstVisibleDay(date, culture);
    var last = dates.lastVisibleDay(date, culture);
    var days = [];

    while (dates.lte(current, last, 'day')) {
      days.push(current);
      current = dates.add(current, 1, 'day');
    }

    return days;
  },
  move: function move(date, min, max, unit, direction) {
    var isMonth = unit === 'month';
    var isUpOrDown = direction === _constants.directions.UP || direction === _constants.directions.DOWN;
    var rangeUnit = _constants.calendarViewUnits[unit];
    var addUnit = isMonth && isUpOrDown ? 'week' : _constants.calendarViewUnits[unit];
    var amount = isMonth || !isUpOrDown ? 1 : 4;
    var newDate = void 0;

    if (direction === _constants.directions.UP || direction === _constants.directions.LEFT) amount *= -1;

    newDate = dates.add(date, amount, addUnit);

    return dates.inRange(newDate, min, max, rangeUnit) ? newDate : date;
  },
  merge: function merge(date, time, defaultDate) {
    if (time == null && date == null) return null;

    if (time == null) time = defaultDate || new Date();
    if (date == null) date = defaultDate || new Date();

    date = dates.startOf(date, 'day');
    date = dates.hours(date, dates.hours(time));
    date = dates.minutes(date, dates.minutes(time));
    date = dates.seconds(date, dates.seconds(time));
    return dates.milliseconds(date, dates.milliseconds(time));
  },


  today: function today() {
    return dates.startOf(new Date(), 'day');
  },
  tomorrow: function tomorrow() {
    return dates.add(dates.startOf(new Date(), 'day'), 1, 'day');
  }
});

exports.default = dates;
module.exports = exports['default'];