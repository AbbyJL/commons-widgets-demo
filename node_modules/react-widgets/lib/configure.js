'use strict';

exports.__esModule = true;

var _localizers = require('./util/localizers');

var localizers = _interopRequireWildcard(_localizers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = {
  setLocalizers: function setLocalizers(_ref) {
    var date = _ref.date,
        number = _ref.number;

    date && this.setDateLocalizer(date);
    number && this.setNumberLocalizer(number);
  },


  setDateLocalizer: localizers.setDate,
  setNumberLocalizer: localizers.setNumber
};
module.exports = exports['default'];