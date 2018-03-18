'use strict';

exports.__esModule = true;

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _MultiselectTag = require('./MultiselectTag');

var _MultiselectTag2 = _interopRequireDefault(_MultiselectTag);

var _PropTypes = require('./util/PropTypes');

var CustomPropTypes = _interopRequireWildcard(_PropTypes);

var _dataHelpers = require('./util/dataHelpers');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// disabled === true || [1, 2, 3, etc]
var isDisabled = function isDisabled(item, list, value) {
  return !!(Array.isArray(list) ? ~(0, _dataHelpers.dataIndexOf)(list, item, value) : list);
};

var MultiselectTagList = (_temp2 = _class = function (_React$Component) {
  _inherits(MultiselectTagList, _React$Component);

  function MultiselectTagList() {
    var _temp, _this, _ret;

    _classCallCheck(this, MultiselectTagList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleDelete = function (item, event) {
      if (_this.props.disabled !== true) _this.props.onDelete(item, event);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  MultiselectTagList.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        id = _props.id,
        value = _props.value,
        activeId = _props.activeId,
        valueAccessor = _props.valueAccessor,
        textAccessor = _props.textAccessor,
        label = _props.label,
        disabled = _props.disabled,
        focusedItem = _props.focusedItem,
        ValueComponent = _props.valueComponent;


    return _react2.default.createElement(
      'ul',
      {
        id: id,
        tabIndex: '-1',
        role: 'listbox',
        'aria-label': label,
        className: 'rw-multiselect-taglist'
      },
      value.map(function (item, i) {
        var isFocused = focusedItem === item;

        return _react2.default.createElement(
          _MultiselectTag2.default,
          {
            key: i,
            id: isFocused ? activeId : null,
            value: item,
            focused: isFocused,
            onClick: _this2.handleDelete,
            disabled: isDisabled(item, disabled, valueAccessor)
          },
          ValueComponent ? _react2.default.createElement(ValueComponent, { item: item }) : _react2.default.createElement(
            'span',
            null,
            textAccessor(item)
          )
        );
      })
    );
  };

  return MultiselectTagList;
}(_react2.default.Component), _class.propTypes = {
  id: _propTypes2.default.string.isRequired,
  activeId: _propTypes2.default.string.isRequired,
  label: _propTypes2.default.string,

  value: _propTypes2.default.array,
  focusedItem: _propTypes2.default.any,

  valueAccessor: _propTypes2.default.func.isRequired,
  textAccessor: _propTypes2.default.func.isRequired,

  onDelete: _propTypes2.default.func.isRequired,
  valueComponent: _propTypes2.default.func,

  disabled: CustomPropTypes.disabled.acceptsArray
}, _temp2);
exports.default = MultiselectTagList;
module.exports = exports['default'];