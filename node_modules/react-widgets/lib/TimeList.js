'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactComponentManagers = require('react-component-managers');

var _List = require('./List');

var _List2 = _interopRequireDefault(_List);

var _dates = require('./util/dates');

var _dates2 = _interopRequireDefault(_dates);

var _listDataManager = require('./util/listDataManager');

var _listDataManager2 = _interopRequireDefault(_listDataManager);

var _localizers = require('./util/localizers');

var _PropTypes = require('./util/PropTypes');

var CustomPropTypes = _interopRequireWildcard(_PropTypes);

var _Props = require('./util/Props');

var Props = _interopRequireWildcard(_Props);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var format = function format(props) {
  return _localizers.date.getFormat('time', props.format);
};

var TimeList = (_temp = _class = function (_React$Component) {
  _inherits(TimeList, _React$Component);

  function TimeList() {
    _classCallCheck(this, TimeList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args)));

    _this.handleKeyDown = function (e) {
      var key = e.key;
      var focusedItem = _this.state.focusedItem;
      var list = _this.list;

      if (key === 'End') {
        e.preventDefault();
        _this.setState({ focusedItem: list.last() });
      } else if (key === 'Home') {
        e.preventDefault();
        _this.setState({ focusedItem: list.first() });
      } else if (key === 'Enter') {
        _this.props.onSelect(focusedItem);
      } else if (key === 'ArrowDown') {
        e.preventDefault();
        _this.setState({ focusedItem: list.next(focusedItem) });
      } else if (key === 'ArrowUp') {
        e.preventDefault();
        _this.setState({ focusedItem: list.prev(focusedItem) });
      }
    };

    _this.handleKeyPress = function (e) {
      e.preventDefault();

      _this.search(String.fromCharCode(e.which), function (item) {
        !_this.unmounted && _this.setState({ focusedItem: item });
      });
    };

    _this.scrollTo = function () {
      _this.refs.list.move && _this.refs.list.move();
    };

    _this.accessors = {
      text: function text(item) {
        return item.label;
      },
      value: function value(item) {
        return item.date;
      }
    };

    _this.timeouts = (0, _reactComponentManagers.timeoutManager)(_this);
    _this.list = (0, _listDataManager2.default)(_this, {
      getListDataState: _List2.default.getListDataState,
      accessors: _this.accessors
    });

    _this.state = _this.getStateFromProps(_this.props);
    return _this;
  }

  TimeList.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    this.setState(this.getStateFromProps(nextProps));
  };

  TimeList.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unmounted = true;
  };

  TimeList.prototype.getStateFromProps = function getStateFromProps() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
    var value = props.value,
        currentDate = props.currentDate;

    var data = this.getDates(props);
    var selectedItem = this.getClosestDate(data, value || currentDate);

    this.list.setData(data);

    return {
      dates: data,
      selectedItem: this.list.nextEnabled(selectedItem),
      focusedItem: this.list.nextEnabled(selectedItem || data[0])
    };
  };

  TimeList.prototype.render = function render() {
    var onSelect = this.props.onSelect;
    var _state = this.state,
        selectedItem = _state.selectedItem,
        focusedItem = _state.focusedItem;


    var props = Props.omitOwn(this);
    var listProps = this.list.defaultProps();

    return _react2.default.createElement(_List2.default, _extends({
      ref: 'list'
    }, props, listProps, {
      onSelect: onSelect,
      textAccessor: this.accessors.text,
      valueAccessor: this.accessors.value,
      selectedItem: selectedItem,
      focusedItem: focusedItem
    }));
  };

  TimeList.prototype.getClosestDate = function getClosestDate(times, date) {
    var roundTo = 1000 * 60 * this.props.step,
        inst = null,
        label;

    if (!date) return null;

    date = new Date(Math.floor(date.getTime() / roundTo) * roundTo);
    label = _localizers.date.format(date, format(this.props), this.props.culture);

    times.some(function (time) {
      if (time.label === label) return inst = time;
    });

    return inst;
  };

  TimeList.prototype.getDates = function getDates() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

    var times = [];
    var values = this.getBounds(props);
    var start = values.min;
    var startDay = _dates2.default.date(start);

    while (_dates2.default.date(start) === startDay && _dates2.default.lte(start, values.max)) {
      times.push({
        date: start,
        label: _localizers.date.format(start, format(props), props.culture)
      });
      start = _dates2.default.add(start, props.step || 30, 'minutes');
    }
    return times;
  };

  TimeList.prototype.getBounds = function getBounds(props) {
    var value = props.value || props.currentDate || _dates2.default.today(),
        useDate = props.preserveDate,
        min = props.min,
        max = props.max,
        start,
        end;

    //compare just the time regradless of whether they fall on the same day
    if (!useDate) {
      start = _dates2.default.startOf(_dates2.default.merge(new Date(), min, props.currentDate), 'minutes');
      end = _dates2.default.startOf(_dates2.default.merge(new Date(), max, props.currentDate), 'minutes');

      if (_dates2.default.lte(end, start) && _dates2.default.gt(max, min, 'day')) end = _dates2.default.tomorrow();

      return {
        min: start,
        max: end
      };
    }

    start = _dates2.default.today();
    end = _dates2.default.tomorrow();
    //date parts are equal
    return {
      min: _dates2.default.eq(value, min, 'day') ? _dates2.default.merge(start, min, props.currentDate) : start,
      max: _dates2.default.eq(value, max, 'day') ? _dates2.default.merge(start, max, props.currentDate) : end
    };
  };

  TimeList.prototype.search = function search(character, cb) {
    var _this2 = this;

    var word = ((this._searchTerm || '') + character).toLowerCase();

    this._searchTerm = word;
    this.timeouts.set('search', function () {
      var item = _this2.list.next(_this2.state.focusedItem, word);

      _this2._searchTerm = '';
      if (item) cb(item);
    }, this.props.delay);
  };

  return TimeList;
}(_react2.default.Component), _class.propTypes = {
  value: _propTypes2.default.instanceOf(Date),
  step: _propTypes2.default.number,
  min: _propTypes2.default.instanceOf(Date),
  max: _propTypes2.default.instanceOf(Date),
  currentDate: _propTypes2.default.instanceOf(Date),

  itemComponent: CustomPropTypes.elementType,
  format: CustomPropTypes.dateFormat,
  onSelect: _propTypes2.default.func,
  preserveDate: _propTypes2.default.bool,
  culture: _propTypes2.default.string,
  delay: _propTypes2.default.number
}, _class.defaultProps = {
  step: 30,
  onSelect: function onSelect() {},
  min: new Date(1900, 0, 1),
  max: new Date(2099, 11, 31),
  preserveDate: true,
  delay: 300
}, _temp);
exports.default = TimeList;
module.exports = exports['default'];