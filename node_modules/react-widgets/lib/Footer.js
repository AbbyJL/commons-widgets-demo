'use strict';

exports.__esModule = true;
exports.default = Footer;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _localizers = require('./util/localizers');

var _PropTypes = require('./util/PropTypes');

var CustomPropTypes = _interopRequireWildcard(_PropTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  disabled: _propTypes2.default.bool,
  readOnly: _propTypes2.default.bool,
  value: _propTypes2.default.instanceOf(Date),
  onClick: _propTypes2.default.func.isRequired,
  culture: _propTypes2.default.string,
  format: CustomPropTypes.dateFormat
};

function Footer(_ref) {
  var disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      value = _ref.value,
      onClick = _ref.onClick,
      culture = _ref.culture,
      format = _ref.format;

  return _react2.default.createElement(
    'div',
    { className: 'rw-calendar-footer' },
    _react2.default.createElement(
      _Button2.default,
      {
        disabled: !!(disabled || readOnly),
        onClick: onClick.bind(null, value)
      },
      _localizers.date.format(value, _localizers.date.getFormat('footer', format), culture)
    )
  );
}

Footer.propTypes = propTypes;
module.exports = exports['default'];