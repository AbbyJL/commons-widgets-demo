'use strict';

exports.__esModule = true;

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  className: _propTypes2.default.string,
  component: _propTypes2.default.string
};

function ListOptionGroup(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$component = _ref.component,
      component = _ref$component === undefined ? 'li' : _ref$component;

  var Tag = component;
  return _react2.default.createElement(
    Tag,
    {
      tabIndex: '-1',
      role: 'separator',
      className: (0, _classnames2.default)(className, 'rw-list-optgroup')
    },
    children
  );
}

ListOptionGroup.propTypes = propTypes;

exports.default = ListOptionGroup;
module.exports = exports['default'];