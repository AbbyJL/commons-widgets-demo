'use strict';

exports.__esModule = true;
exports.getMessages = getMessages;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var messages = {
  moveBack: 'Navigate back',
  moveForward: 'Navigate forward',

  dateButton: 'Select date',
  timeButton: 'Select time',

  openCombobox: 'open combobox',
  openDropdown: 'open dropdown',

  placeholder: '',
  filterPlaceholder: '',

  emptyList: 'There are no items in this list',
  emptyFilter: 'The filter returned no results',

  createOption: function createOption(_ref) {
    var searchTerm = _ref.searchTerm;
    return [' Create option', searchTerm && ' ', searchTerm && _react2.default.createElement(
      'strong',
      { key: '_' },
      '"' + searchTerm + '"'
    )];
  },

  tagsLabel: 'Selected items',
  removeLabel: 'Remove selected item',
  noneSelected: 'no selected items',
  selectedItems: function selectedItems(labels) {
    return 'Selected items: ' + labels.join(', ');
  },

  // number
  increment: 'Increment value',
  decrement: 'Decrement value'
};

function getMessages() {
  var defaults = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var processed = {};
  Object.keys(messages).forEach(function (message) {
    var value = defaults[message];
    if (value == null) value = messages[message];

    processed[message] = typeof value === 'function' ? value : function () {
      return value;
    };
  });

  return processed;
}