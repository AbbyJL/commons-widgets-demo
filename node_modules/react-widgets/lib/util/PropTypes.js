'use strict';

exports.__esModule = true;
exports.message = exports.accessor = exports.disabled = exports.dateFormat = exports.numberFormat = exports.elementType = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _elementType = require('react-prop-types/lib/elementType');

var _elementType2 = _interopRequireDefault(_elementType);

var _createChainableTypeChecker = require('react-prop-types/lib/utils/createChainableTypeChecker');

var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

var _localizers = require('./localizers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.elementType = _elementType2.default;
var numberFormat = exports.numberFormat = (0, _createChainableTypeChecker2.default)(function () {
  return _localizers.number.propType.apply(_localizers.number, arguments);
});

var dateFormat = exports.dateFormat = (0, _createChainableTypeChecker2.default)(function () {
  return _localizers.date.propType.apply(_localizers.date, arguments);
});

var disabled = exports.disabled = (0, _createChainableTypeChecker2.default)(function () {
  return _propTypes2.default.bool.apply(_propTypes2.default, arguments);
});

disabled.acceptsArray = _propTypes2.default.oneOfType([disabled, _propTypes2.default.array]);

var accessor = exports.accessor = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]);

var message = exports.message = _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.string, _propTypes2.default.func]);