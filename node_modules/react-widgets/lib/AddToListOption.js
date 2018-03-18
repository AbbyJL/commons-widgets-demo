'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require('prop-types');

var PropTypes = _interopRequireWildcard(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Listbox = require('./Listbox');

var _Listbox2 = _interopRequireDefault(_Listbox);

var _ListOption = require('./ListOption');

var _ListOption2 = _interopRequireDefault(_ListOption);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  searchTerm: PropTypes.string,
  focused: PropTypes.bool,
  onSelect: PropTypes.func.isRequired,
  activeId: PropTypes.string
};

function AddToListOption(_ref) {
  var searchTerm = _ref.searchTerm,
      onSelect = _ref.onSelect,
      focused = _ref.focused,
      children = _ref.children,
      activeId = _ref.activeId,
      props = _objectWithoutProperties(_ref, ['searchTerm', 'onSelect', 'focused', 'children', 'activeId']);

  return _react2.default.createElement(
    _Listbox2.default,
    _extends({}, props, { className: 'rw-list-option-create' }),
    _react2.default.createElement(
      _ListOption2.default,
      {
        onSelect: onSelect,
        focused: focused,
        activeId: activeId,
        dataItem: searchTerm
      },
      children
    )
  );
}

AddToListOption.propTypes = propTypes;

exports.default = AddToListOption;
module.exports = exports['default'];