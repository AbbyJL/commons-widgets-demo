'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.normalizeComponent = normalizeComponent;
exports.defaultGetDataState = defaultGetDataState;
exports.default = listDataManager;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactComponentManagers = require('react-component-managers');

var _Filter = require('./Filter');

var _ = require('./_');

var _accessorManager = require('./accessorManager');

var _accessorManager2 = _interopRequireDefault(_accessorManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var EMPTY_VALUE = {};

function normalizeComponent(Component) {
  return function (itemProps) {
    return Component ? _react2.default.createElement(Component, itemProps) : itemProps.text || itemProps.item;
  };
}

function defaultGetDataState(data, _ref) {
  var groupBy = _ref.groupBy;
  var lastState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (lastState.data !== data || lastState.groupBy !== groupBy) {
    if (!groupBy) return {};

    var keys = [];
    var groups = (0, _.groupBySortedKeys)(groupBy, data, keys);

    return {
      data: data,
      groupBy: groupBy,
      groups: groups,
      sortedKeys: keys,
      sequentialData: Object.keys(groups).reduce(function (flat, grp) {
        return flat.concat(groups[grp]);
      }, [])
    };
  }

  return lastState;
}

function defaultGetStateGetterFromList(_ref2) {
  var listComponent = _ref2.listComponent;

  return listComponent && listComponent.getDataState;
}

function listDataManager(component) {
  var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      getDataState = _ref3.getDataState,
      getStateGetterFromProps = _ref3.getStateGetterFromProps,
      _ref3$accessors = _ref3.accessors,
      accessors = _ref3$accessors === undefined ? (0, _accessorManager2.default)(component) : _ref3$accessors;

  var listData = void 0;
  var listState = void 0;
  var needsUpdate = true;
  var currentProps = component.props;

  if (getDataState) getStateGetterFromProps = null;else {
    if (!getStateGetterFromProps) getStateGetterFromProps = defaultGetStateGetterFromList;

    getDataState = getStateGetterFromProps(currentProps) || defaultGetDataState;
  }

  (0, _reactComponentManagers.spyOnComponent)(component, {
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
      if (!needsUpdate) needsUpdate = nextProps !== currentProps;

      currentProps = nextProps;

      if (needsUpdate && getStateGetterFromProps) {
        getDataState = getStateGetterFromProps(currentProps) || defaultGetDataState;
      }
    },
    componentWillUnmount: function componentWillUnmount() {
      listData = null;
      listState = null;
      currentProps = null;
      getDataState = null;
      getStateGetterFromProps = null;
    }
  });

  function isDisabled(item) {
    var disabled = currentProps.disabled;
    if (!Array.isArray(disabled)) return false;

    return disabled.some(function (disabled) {
      return accessors.value(item) === accessors.value(disabled);
    });
  }

  function getMatcher(word) {
    if (!word) return function () {
      return true;
    };

    word = word.toLowerCase();
    return function (item) {
      return _Filter.presets.startsWith(accessors.text(item).toLowerCase(), word);
    };
  }

  function getSequentialData() {
    var state = manager.getState();
    return state && state.sequentialData || listData;
  }

  var renderItem = function renderItem(_ref4) {
    var item = _ref4.item,
        rest = _objectWithoutProperties(_ref4, ['item']);

    // eslint-disable-line react/prop-types
    var Component = currentProps.itemComponent;
    return Component ? _react2.default.createElement(Component, _extends({
      item: item,
      value: accessors.value(item),
      text: accessors.text(item),
      disabled: isDisabled(item)
    }, rest)) : accessors.text(item);
  };

  var renderGroup = function renderGroup(_ref5) {
    var group = _ref5.group;
    // eslint-disable-line react/prop-types
    var Component = currentProps.groupComponent;
    return Component ? _react2.default.createElement(Component, { item: group }) : group;
  };

  var manager = {
    isDisabled: isDisabled,

    first: function first() {
      return manager.next(EMPTY_VALUE);
    },
    last: function last() {
      var data = getSequentialData();
      return manager.prevEnabled(data[data.length - 1]);
    },
    prevEnabled: function prevEnabled(item) {
      return isDisabled(item) ? manager.prev(item) : item;
    },
    prev: function prev(item, word) {
      var data = getSequentialData();
      var matches = getMatcher(word);
      var nextIdx = data.indexOf(item);

      if (nextIdx < 0 || nextIdx == null) nextIdx = 0;

      nextIdx--;

      while (nextIdx > -1 && (isDisabled(data[nextIdx]) || !matches(data[nextIdx]))) {
        nextIdx--;
      }if (nextIdx >= 0) return data[nextIdx];
      if (!manager.isDisabled(item)) return item;
    },
    next: function next(item, word) {
      var data = getSequentialData();
      var matches = getMatcher(word);
      var nextIdx = data.indexOf(item) + 1;
      var len = data.length;

      while (nextIdx < len && (isDisabled(data[nextIdx]) || !matches(data[nextIdx]))) {
        nextIdx++;
      }if (nextIdx < len) return data[nextIdx];
      if (!manager.isDisabled(item)) return item;
    },
    nextEnabled: function nextEnabled(item) {
      return isDisabled(item) ? manager.next(item) : item;
    },
    setData: function setData(data) {
      if (!needsUpdate) needsUpdate = data !== listData;

      listData = data;
    },
    getState: function getState() {
      if (needsUpdate) {
        needsUpdate = false;
        listState = getDataState(listData, currentProps, listState);
      }

      return listState;
    },
    defaultProps: function defaultProps() {
      var _currentProps = currentProps,
          groupBy = _currentProps.groupBy,
          optionComponent = _currentProps.optionComponent,
          searchTerm = _currentProps.searchTerm;


      return _extends({
        groupBy: groupBy,
        renderItem: renderItem,
        renderGroup: renderGroup,
        searchTerm: searchTerm,
        optionComponent: optionComponent,
        isDisabled: isDisabled
      }, currentProps.listProps, {
        data: listData,
        dataState: manager.getState()
      });
    }
  };

  return manager;
}