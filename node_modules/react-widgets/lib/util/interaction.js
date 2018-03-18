'use strict';

exports.__esModule = true;
exports.disabledManager = exports.widgetEditable = exports.widgetEnabled = exports.isInDisabledFieldset = undefined;

var _reactDom = require('react-dom');

var _matches = require('dom-helpers/query/matches');

var _matches2 = _interopRequireDefault(_matches);

var _reactComponentManagers = require('react-component-managers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isInDisabledFieldset = exports.isInDisabledFieldset = function isInDisabledFieldset(inst) {
  var node = void 0;
  try {
    node = (0, _reactDom.findDOMNode)(inst);
  } catch (err) {/* ignore */}

  return !!node && (0, _matches2.default)(node, 'fieldset[disabled] *');
};

var widgetEnabled = exports.widgetEnabled = interactionDecorator(true);

var widgetEditable = exports.widgetEditable = interactionDecorator(false);

function interactionDecorator(disabledOnly) {
  function wrap(method) {
    return function decoratedMethod() {
      var _props = this.props,
          disabled = _props.disabled,
          readOnly = _props.readOnly;


      disabled = isInDisabledFieldset(this) || disabled == true || !disabledOnly && readOnly === true;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (!disabled) return method.apply(this, args);
    };
  }

  return function decorate(target, key, desc) {
    if (desc.initializer) {
      var init = desc.initializer;
      desc.initializer = function () {
        return wrap(init.call(this)).bind(this);
      };
    } else desc.value = wrap(desc.value);
    return desc;
  };
}

var disabledManager = exports.disabledManager = function disabledManager(component) {
  var mounted = false;
  var isInFieldSet = false;
  var useCached = false;
  (0, _reactComponentManagers.spyOnComponent)(component, {
    componentDidMount: function componentDidMount() {
      mounted = true;
      // becasue we can't access a dom node in the first render we need to
      // render again if the component was disabled via a fieldset
      if (isInDisabledFieldset(this)) this.forceUpdate();
    },
    componentWillUpdate: function componentWillUpdate() {
      isInFieldSet = mounted && isInDisabledFieldset(component);
      useCached = mounted;
    },
    componentDidUpdate: function componentDidUpdate() {
      useCached = false;
    },
    componentWillUnmount: function componentWillUnmount() {
      component = null;
    }
  });

  return function () {
    return component.props.disabled === true || (useCached ? isInFieldSet : mounted && isInDisabledFieldset(component)) || component.props.disabled // return the prop if nothing is true in case it's an array
    ;
  };
};