'use strict';

exports.__esModule = true;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactComponentManagers = require('react-component-managers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactComponentManagers.mixin)({
  propTypes: {
    isRtl: _propTypes2.default.bool
  },

  contextTypes: {
    isRtl: _propTypes2.default.bool
  },

  childContextTypes: {
    isRtl: _propTypes2.default.bool
  },

  getChildContext: function getChildContext() {
    return {
      isRtl: this.isRtl()
    };
  },
  isRtl: function isRtl() {
    return !!(this.props.isRtl || this.context && this.context.isRtl);
  }
});
module.exports = exports['default'];