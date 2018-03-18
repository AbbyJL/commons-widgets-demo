'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _PropTypes = require('./util/PropTypes');

var CustomPropTypes = _interopRequireWildcard(_PropTypes);

var _Props = require('./util/Props');

var Props = _interopRequireWildcard(_Props);

var _widgetHelpers = require('./util/widgetHelpers');

var _listDataManager = require('./util/listDataManager');

var _Listbox = require('./Listbox');

var _Listbox2 = _interopRequireDefault(_Listbox);

var _ListOption = require('./ListOption');

var _ListOption2 = _interopRequireDefault(_ListOption);

var _ListOptionGroup = require('./ListOptionGroup');

var _ListOptionGroup2 = _interopRequireDefault(_ListOptionGroup);

var _messages = require('./messages');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EMPTY_DATA_STATE = {};

var propTypes = {
  data: _propTypes2.default.array,
  dataState: _propTypes2.default.shape({
    sortedKeys: _propTypes2.default.array,
    groups: _propTypes2.default.object,
    data: _propTypes2.default.array,
    sequentialData: _propTypes2.default.array
  }),

  onSelect: _propTypes2.default.func,
  onMove: _propTypes2.default.func,

  activeId: _propTypes2.default.string,
  optionComponent: CustomPropTypes.elementType,
  renderItem: _propTypes2.default.func.isRequired,
  renderGroup: _propTypes2.default.func,

  focusedItem: _propTypes2.default.any,
  selectedItem: _propTypes2.default.any,
  searchTerm: _propTypes2.default.string,

  isDisabled: _propTypes2.default.func.isRequired,
  groupBy: CustomPropTypes.accessor,

  messages: _propTypes2.default.shape({
    emptyList: _propTypes2.default.func.isRequired
  })
};

var defaultProps = {
  onSelect: function onSelect() {},
  data: [],
  dataState: EMPTY_DATA_STATE,
  optionComponent: _ListOption2.default
};

var List = (_temp = _class = function (_React$Component) {
  _inherits(List, _React$Component);

  function List() {
    _classCallCheck(this, List);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  List.prototype.componentDidMount = function componentDidMount() {
    this.move();
  };

  List.prototype.componentDidUpdate = function componentDidUpdate() {
    this.move();
  };

  List.prototype.mapItems = function mapItems(fn) {
    var _props = this.props,
        data = _props.data,
        dataState = _props.dataState;
    var sortedKeys = dataState.sortedKeys,
        groups = dataState.groups;


    if (!groups) return data.map(function (item, idx) {
      return fn(item, idx, false);
    });

    var idx = -1;
    return sortedKeys.reduce(function (items, key) {
      var group = groups[key];

      return items.concat(fn(key, idx, true), group.map(function (item) {
        return fn(item, ++idx, false);
      }));
    }, []);
  };

  List.prototype.render = function render() {
    var _this2 = this;

    var _props2 = this.props,
        className = _props2.className,
        messages = _props2.messages;


    var elementProps = Props.pickElementProps(this);

    var _getMessages = (0, _messages.getMessages)(messages),
        emptyList = _getMessages.emptyList;

    return _react2.default.createElement(
      _Listbox2.default,
      _extends({}, elementProps, {
        className: className,
        emptyListMessage: emptyList(this.props)
      }),
      this.mapItems(function (item, idx, isHeader) {
        return isHeader ? _this2.renderGroupHeader(item) : _this2.renderItem(item, idx);
      })
    );
  };

  List.prototype.renderGroupHeader = function renderGroupHeader(group) {
    var renderGroup = this.props.renderGroup;

    return _react2.default.createElement(
      _ListOptionGroup2.default,
      {
        key: 'group_' + group,
        group: group
      },
      renderGroup({ group: group })
    );
  };

  List.prototype.renderItem = function renderItem(item, index) {
    var _props3 = this.props,
        activeId = _props3.activeId,
        focusedItem = _props3.focusedItem,
        selectedItem = _props3.selectedItem,
        onSelect = _props3.onSelect,
        isDisabled = _props3.isDisabled,
        renderItem = _props3.renderItem,
        Option = _props3.optionComponent;


    var isFocused = focusedItem === item;

    return _react2.default.createElement(
      Option,
      {
        dataItem: item,
        key: 'item_' + index,
        index: index,
        activeId: activeId,
        focused: isFocused,
        onSelect: onSelect,
        disabled: isDisabled(item),
        selected: selectedItem === item
      },
      renderItem({ item: item, index: index })
    );
  };

  List.prototype.move = function move() {
    var _props4 = this.props,
        focusedItem = _props4.focusedItem,
        onMove = _props4.onMove,
        data = _props4.data,
        dataState = _props4.dataState;

    var list = (0, _reactDom.findDOMNode)(this);
    var idx = renderedIndexOf(focusedItem, list, data, dataState);
    var selectedItem = list.children[idx];

    if (selectedItem) (0, _widgetHelpers.notify)(onMove, [selectedItem, list, focusedItem]);
  };

  return List;
}(_react2.default.Component), _class.getDataState = _listDataManager.defaultGetDataState, _temp);


function renderedIndexOf(item, list, data, dataState) {
  var groups = dataState.groups,
      sortedKeys = dataState.sortedKeys;


  if (!groups) return data.indexOf(item);

  var runningIdx = -1;
  var idx = -1;

  sortedKeys.some(function (group) {
    var itemIdx = groups[group].indexOf(item);
    runningIdx++;

    if (itemIdx !== -1) {
      idx = runningIdx + itemIdx + 1;
      return true;
    }

    runningIdx += groups[group].length;
  });
  return idx;
}

List.propTypes = propTypes;
List.defaultProps = defaultProps;

exports.default = List;
module.exports = exports['default'];