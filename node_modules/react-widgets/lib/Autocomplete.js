'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _desc, _value, _class2, _descriptor, _descriptor2, _class3, _temp;

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var PropTypes = _interopRequireWildcard(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _uncontrollable = require('uncontrollable');

var _uncontrollable2 = _interopRequireDefault(_uncontrollable);

var _List = require('./List');

var _List2 = _interopRequireDefault(_List);

var _Popup = require('./Popup');

var _Popup2 = _interopRequireDefault(_Popup);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

var _Select = require('./Select');

var _Select2 = _interopRequireDefault(_Select);

var _Widget = require('./Widget');

var _Widget2 = _interopRequireDefault(_Widget);

var _WidgetPicker = require('./WidgetPicker');

var _WidgetPicker2 = _interopRequireDefault(_WidgetPicker);

var _messages = require('./messages');

var _focusManager = require('./util/focusManager');

var _focusManager2 = _interopRequireDefault(_focusManager);

var _listDataManager = require('./util/listDataManager');

var _listDataManager2 = _interopRequireDefault(_listDataManager);

var _PropTypes = require('./util/PropTypes');

var CustomPropTypes = _interopRequireWildcard(_PropTypes);

var _accessorManager = require('./util/accessorManager');

var _accessorManager2 = _interopRequireDefault(_accessorManager);

var _scrollManager = require('./util/scrollManager');

var _scrollManager2 = _interopRequireDefault(_scrollManager);

var _Props = require('./util/Props');

var Props = _interopRequireWildcard(_Props);

var _withRightToLeft = require('./util/withRightToLeft');

var _withRightToLeft2 = _interopRequireDefault(_withRightToLeft);

var _interaction = require('./util/interaction');

var _widgetHelpers = require('./util/widgetHelpers');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var propTypes = {
  //-- controlled props -----------
  value: PropTypes.any,
  onChange: PropTypes.func,
  open: PropTypes.bool,
  onToggle: PropTypes.func,
  //------------------------------------

  itemComponent: CustomPropTypes.elementType,
  selectComponent: CustomPropTypes.elementType,
  listComponent: CustomPropTypes.elementType,
  groupComponent: CustomPropTypes.elementType,
  groupBy: CustomPropTypes.accessor,

  data: PropTypes.array,
  valueField: CustomPropTypes.accessor,
  textField: CustomPropTypes.accessor,

  onKeyDown: PropTypes.func,
  onSelect: PropTypes.func,
  autoFocus: PropTypes.bool,
  disabled: CustomPropTypes.disabled.acceptsArray,
  readOnly: CustomPropTypes.disabled,
  busy: PropTypes.bool,

  delay: PropTypes.number,
  dropUp: PropTypes.bool,
  popupTransition: CustomPropTypes.elementType,

  placeholder: PropTypes.string,
  inputProps: PropTypes.object,
  listProps: PropTypes.object,
  messages: PropTypes.shape({
    openCombobox: CustomPropTypes.message,
    emptyList: CustomPropTypes.message,
    emptyFilter: CustomPropTypes.message
  })
};

var Autocomplete = (0, _withRightToLeft2.default)(_class = (_class2 = (_temp = _class3 = function (_React$Component) {
  _inherits(Autocomplete, _React$Component);

  function Autocomplete(props, context) {
    _classCallCheck(this, Autocomplete);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.handleFocusChanged = function (focused) {
      if (!focused) _this.close();
    };

    _initDefineProp(_this, 'handleSelect', _descriptor, _this);

    _this.handleInputChange = function (event) {
      _this.change(event.target.value, event);
      _this.open();
    };

    _initDefineProp(_this, 'handleKeyDown', _descriptor2, _this);

    _this.messages = (0, _messages.getMessages)(props.messages);
    _this.inputId = (0, _widgetHelpers.instanceId)(_this, '_input');
    _this.listId = (0, _widgetHelpers.instanceId)(_this, '_listbox');
    _this.activeId = (0, _widgetHelpers.instanceId)(_this, '_listbox_active_option');

    _this.list = (0, _listDataManager2.default)(_this);
    _this.accessors = (0, _accessorManager2.default)(_this);
    _this.handleScroll = (0, _scrollManager2.default)(_this);
    _this.focusManager = (0, _focusManager2.default)(_this, {
      didHandle: _this.handleFocusChanged
    });

    _this.state = _extends({}, _this.getStateFromProps(props), {
      open: false
    });
    return _this;
  }

  Autocomplete.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    this.messages = (0, _messages.getMessages)(nextProps.messages);
    this.setState(this.getStateFromProps(nextProps));
  };

  Autocomplete.prototype.getStateFromProps = function getStateFromProps(props) {
    var accessors = this.accessors,
        list = this.list;
    var value = props.value,
        data = props.data;

    var _ref = this.state || {},
        _ref$focusedItem = _ref.focusedItem,
        focusedItem = _ref$focusedItem === undefined ? null : _ref$focusedItem;

    var index = accessors.indexOf(data, value);
    list.setData(data);

    return {
      data: data,
      selectedItem: list.nextEnabled(data[index]),
      focusedItem: ~index ? list.nextEnabled(data[index]) : focusedItem
    };
  };

  Autocomplete.prototype.renderList = function renderList(messages) {
    var activeId = this.activeId,
        inputId = this.inputId,
        listId = this.listId,
        accessors = this.accessors;
    var open = this.props.open;
    var _state = this.state,
        selectedItem = _state.selectedItem,
        focusedItem = _state.focusedItem;

    var List = this.props.listComponent;
    var props = this.list.defaultProps();

    return _react2.default.createElement(List, _extends({
      ref: 'list'
    }, props, {
      id: listId,
      activeId: activeId,
      valueAccessor: accessors.value,
      textAccessor: accessors.text,
      selectedItem: selectedItem,
      focusedItem: open ? focusedItem : null,
      'aria-hidden': !open,
      'aria-labelledby': inputId,
      'aria-live': open && 'polite',
      onSelect: this.handleSelect,
      onMove: this.handleScroll,
      messages: messages
    }));
  };

  Autocomplete.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        className = _props.className,
        popupTransition = _props.popupTransition,
        data = _props.data,
        value = _props.value,
        busy = _props.busy,
        dropUp = _props.dropUp,
        open = _props.open,
        autoFocus = _props.autoFocus,
        placeholder = _props.placeholder,
        inputProps = _props.inputProps,
        SelectComponent = _props.selectComponent;
    var focused = this.state.focused;


    var disabled = this.props.disabled === true;
    var readOnly = this.props.readOnly === true;

    var elementProps = Props.pickElementProps(this);
    var shouldRenderPopup = open || (0, _widgetHelpers.isFirstFocusedRender)(this);

    var messages = this.messages;
    var valueItem = this.accessors.findOrSelf(data, value);

    return _react2.default.createElement(
      _Widget2.default,
      _extends({}, elementProps, {
        open: open,
        dropUp: dropUp,
        focused: focused,
        disabled: disabled,
        readOnly: readOnly,
        onBlur: this.focusManager.handleBlur,
        onFocus: this.focusManager.handleFocus,
        onKeyDown: this.handleKeyDown,
        className: (0, _classnames2.default)(className, 'rw-autocomplete')
      }),
      _react2.default.createElement(
        _WidgetPicker2.default,
        null,
        _react2.default.createElement(_Input2.default, _extends({}, inputProps, {
          ref: 'input',
          role: 'combobox',
          id: this.inputId,
          autoFocus: autoFocus,
          disabled: disabled === true,
          readOnly: readOnly === true,
          'aria-busy': !!busy,
          'aria-owns': this.listId,
          'aria-autocomplete': 'list',
          'aria-activedescendant': open ? this.activeId : null,
          'aria-expanded': open,
          'aria-haspopup': true,
          placeholder: placeholder,
          value: this.accessors.text(valueItem),
          onChange: this.handleInputChange,
          onKeyDown: this.handleInputKeyDown
        })),
        _react2.default.createElement(SelectComponent, {
          busy: busy,
          'aria-hidden': 'true',
          role: 'presentational',
          disabled: disabled || readOnly,
          label: messages.openDropdown(this.props)
        })
      ),
      !!value && !!data.length && shouldRenderPopup && _react2.default.createElement(
        _Popup2.default,
        {
          open: open,
          dropUp: dropUp,
          transition: popupTransition,
          onEntering: function onEntering() {
            return _this2.refs.list.forceUpdate();
          }
        },
        _react2.default.createElement(
          'div',
          null,
          this.renderList(messages)
        )
      )
    );
  };

  Autocomplete.prototype.focus = function focus() {
    this.refs.input && (0, _reactDom.findDOMNode)(this.refs.input).focus();
  };

  Autocomplete.prototype.change = function change(nextValue, originalEvent) {
    var _props2 = this.props,
        onChange = _props2.onChange,
        lastValue = _props2.value;

    (0, _widgetHelpers.notify)(onChange, [nextValue, {
      lastValue: lastValue,
      originalEvent: originalEvent
    }]);
  };

  Autocomplete.prototype.open = function open() {
    if (!this.props.open) (0, _widgetHelpers.notify)(this.props.onToggle, true);
  };

  Autocomplete.prototype.close = function close() {
    var _this3 = this;

    this.setState({ focusedItem: null }, function () {
      (0, _widgetHelpers.notify)(_this3.props.onToggle, false);
    });
  };

  return Autocomplete;
}(_react2.default.Component), _class3.defaultProps = {
  data: [],
  open: false,
  listComponent: _List2.default,
  selectComponent: _Select2.default
}, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'handleSelect', [_interaction.widgetEditable], {
  enumerable: true,
  initializer: function initializer() {
    var _this4 = this;

    return function (data, originalEvent) {
      _this4.close();
      (0, _widgetHelpers.notify)(_this4.props.onSelect, [data, { originalEvent: originalEvent }]);
      _this4.change(data, originalEvent);
      _this4.focus();
    };
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'handleKeyDown', [_interaction.widgetEditable], {
  enumerable: true,
  initializer: function initializer() {
    var _this5 = this;

    return function (e) {
      var key = e.key,
          list = _this5.list,
          focusedItem = _this5.state.focusedItem,
          isOpen = _this5.props.open;

      (0, _widgetHelpers.notify)(_this5.props.onKeyDown, [e]);

      if (e.defaultPrevented) return;

      if (!isOpen) {
        if (key === 'ArrowDown') _this5.open();
        return;
      }

      if (key === 'End') {
        e.preventDefault();
        _this5.setState({ focusedItem: list.last() });
      } else if (key === 'Home') {
        e.preventDefault();
        _this5.setState({ focusedItem: list.first() });
      } else if (key === 'Escape') _this5.close();else if (key === 'Enter') {
        if (!focusedItem) {
          return void _this5.close();
        }

        e.preventDefault();
        _this5.handleSelect(focusedItem, e);
        _this5.change(focusedItem, false, e);
      } else if (key === 'ArrowDown') {
        e.preventDefault();
        _this5.setState({ focusedItem: list.next(focusedItem) });
      } else if (key === 'ArrowUp') {
        e.preventDefault();
        _this5.setState({ focusedItem: list.prev(focusedItem) });
      }
    };
  }
})), _class2)) || _class;

Autocomplete.propTypes = propTypes;

exports.default = (0, _uncontrollable2.default)(Autocomplete, {
  open: 'onToggle',
  value: 'onChange'
}, ['focus']);
module.exports = exports['default'];