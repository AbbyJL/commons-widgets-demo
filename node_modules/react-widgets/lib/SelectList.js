'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _desc, _value, _class2, _descriptor, _descriptor2, _class3, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactComponentManagers = require('react-component-managers');

var _uncontrollable = require('uncontrollable');

var _uncontrollable2 = _interopRequireDefault(_uncontrollable);

var _List = require('./List');

var _List2 = _interopRequireDefault(_List);

var _Widget = require('./Widget');

var _Widget2 = _interopRequireDefault(_Widget);

var _SelectListItem = require('./SelectListItem');

var _SelectListItem2 = _interopRequireDefault(_SelectListItem);

var _messages = require('./messages');

var _ = require('./util/_');

var _Props = require('./util/Props');

var Props = _interopRequireWildcard(_Props);

var _PropTypes = require('./util/PropTypes');

var CustomPropTypes = _interopRequireWildcard(_PropTypes);

var _listDataManager = require('./util/listDataManager');

var _listDataManager2 = _interopRequireDefault(_listDataManager);

var _accessorManager = require('./util/accessorManager');

var _accessorManager2 = _interopRequireDefault(_accessorManager);

var _focusManager = require('./util/focusManager');

var _focusManager2 = _interopRequireDefault(_focusManager);

var _scrollManager = require('./util/scrollManager');

var _scrollManager2 = _interopRequireDefault(_scrollManager);

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

function getFirstValue(data, values) {
  if (!values.length) return null;

  for (var idx = 0; idx < data.length; idx++) {
    if (~values.indexOf(data[idx])) return data[idx];
  }return null;
}

/**
 * ---
 * shortcuts:
 *   - { key: down arrow, label: move focus, or select previous option }
 *   - { key: up arrow, label: move focus, or select next option }
 *   - { key: home, label: move focus to first option }
 *   - { key: end, label: move focus to last option }
 *   - { key: spacebar, label: toggle focused option }
 *   - { key: ctrl + a, label: ctoggle select all/select none }
 *   - { key: any key, label: search list for option starting with key }
 * ---
 *
 * A group of radio buttons or checkboxes bound to a dataset.
 *
 * @public
 */

var SelectList = (0, _withRightToLeft2.default)(_class = (_class2 = (_temp = _class3 = function (_React$Component) {
  _inherits(SelectList, _React$Component);

  function SelectList() {
    _classCallCheck(this, SelectList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args)));

    _this.handleMouseDown = function () {
      _this._clicking = true;
    };

    _this.handleFocusChanged = function (focused) {
      var _this$props = _this.props,
          data = _this$props.data,
          disabled = _this$props.disabled;
      var dataItems = _this.state.dataItems;

      // the rigamarole here is to avoid flicker went clicking an item and
      // gaining focus at the same time.

      if (focused !== _this.state.focused) {
        if (!focused) _this.setState({ focusedItem: null });else if (focused && !_this._clicking) {
          var allowed = Array.isArray(disabled) ? dataItems.filter(function (v) {
            return !_this.accessors.find(disabled, v);
          }) : dataItems;

          _this.setState({
            focusedItem: getFirstValue(data, allowed) || _this.list.nextEnabled(data[0])
          });
        }
        _this._clicking = false;
      }
    };

    _initDefineProp(_this, 'handleKeyDown', _descriptor, _this);

    _initDefineProp(_this, 'handleKeyPress', _descriptor2, _this);

    _this.handleChange = function (item, checked, originalEvent) {
      var _this$props2 = _this.props,
          multiple = _this$props2.multiple,
          onChange = _this$props2.onChange;

      var lastValue = _this.state.dataItems;

      _this.setState({ focusedItem: item });

      if (!multiple) return (0, _widgetHelpers.notify)(onChange, [checked ? item : null, {
        originalEvent: originalEvent,
        lastValue: lastValue,
        checked: checked
      }]);

      var nextValue = checked ? lastValue.concat(item) : lastValue.filter(function (v) {
        return v !== item;
      });

      (0, _widgetHelpers.notify)(onChange, [nextValue || [], {
        checked: checked,
        lastValue: lastValue,
        originalEvent: originalEvent,
        dataItem: item
      }]);
    };

    _this.renderListItem = function (itemProps) {
      var _this$props3 = _this.props,
          name = _this$props3.name,
          multiple = _this$props3.multiple,
          disabled = _this$props3.disabled,
          readOnly = _this$props3.readOnly;
      var dataItems = _this.state.dataItems;

      return _react2.default.createElement(_SelectListItem2.default, _extends({}, itemProps, {
        name: name || _this.itemName,
        type: multiple ? 'checkbox' : 'radio',
        readOnly: disabled === true || readOnly,
        onChange: _this.handleChange,
        onMouseDown: _this.handleMouseDown,
        checked: !!_this.accessors.find(dataItems, itemProps.dataItem)
      }));
    };

    (0, _reactComponentManagers.autoFocus)(_this);

    _this.messages = (0, _messages.getMessages)(_this.props.messages);

    _this.widgetId = (0, _widgetHelpers.instanceId)(_this, '_widget');
    _this.listId = (0, _widgetHelpers.instanceId)(_this, '_listbox');
    _this.activeId = (0, _widgetHelpers.instanceId)(_this, '_listbox_active_option');
    _this.itemName = (0, _widgetHelpers.instanceId)(_this, '_name');

    _this.list = (0, _listDataManager2.default)(_this);
    _this.accessors = (0, _accessorManager2.default)(_this);
    _this.timeouts = (0, _reactComponentManagers.timeoutManager)(_this);
    _this.handleScroll = (0, _scrollManager2.default)(_this, false);
    _this.focusManager = (0, _focusManager2.default)(_this, {
      didHandle: _this.handleFocusChanged
    });

    _this.state = _this.getStateFromProps(_this.props);
    return _this;
  }

  SelectList.prototype.getStateFromProps = function getStateFromProps(props) {
    var accessors = this.accessors,
        list = this.list;
    var data = props.data,
        value = props.value;


    list.setData(data);

    return {
      dataItems: (0, _.makeArray)(value).map(function (item) {
        return accessors.findOrSelf(data, item);
      })
    };
  };

  SelectList.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    this.messages = (0, _messages.getMessages)(nextProps.messages);
    return this.setState(this.getStateFromProps(nextProps));
  };

  SelectList.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        tabIndex = _props.tabIndex,
        busy = _props.busy;


    var elementProps = Props.pickElementProps(this);

    var _state = this.state,
        focusedItem = _state.focusedItem,
        focused = _state.focused;
    var _accessors = this.accessors,
        value = _accessors.value,
        text = _accessors.text;


    var List = this.props.listComponent;
    var listProps = this.list.defaultProps();

    var disabled = this.props.disabled === true,
        readOnly = this.props.readOnly === true;

    focusedItem = focused && !disabled && !readOnly && focusedItem;

    return _react2.default.createElement(
      _Widget2.default,
      _extends({}, elementProps, {
        id: this.widgetId,
        onBlur: this.focusManager.handleBlur,
        onFocus: this.focusManager.handleFocus,
        onKeyDown: this.handleKeyDown,
        onKeyPress: this.handleKeyPress,
        focused: focused,
        disabled: disabled,
        readOnly: readOnly,
        role: 'radiogroup',
        'aria-busy': !!busy,
        'aria-activedescendant': this.activeId,
        className: (0, _classnames2.default)(className, 'rw-select-list', 'rw-widget-input', 'rw-widget-container', busy && 'rw-loading-mask')
      }),
      _react2.default.createElement(List, _extends({}, listProps, {
        ref: 'list',
        role: 'radiogroup',
        tabIndex: tabIndex || '0',
        id: this.listId,
        activeId: this.activeId,
        valueAccessor: value,
        textAccessor: text,
        focusedItem: focusedItem,
        onMove: this.handleScroll,
        optionComponent: this.renderListItem,
        messages: { emptyList: this.messages.emptyList }
      }))
    );
  };

  SelectList.prototype.focus = function focus() {
    (0, _reactDom.findDOMNode)(this.refs.list).focus();
  };

  SelectList.prototype.selectAll = function selectAll() {
    var accessors = this.accessors;
    var _props2 = this.props,
        data = _props2.data,
        disabled = _props2.disabled,
        onChange = _props2.onChange;

    var values = this.state.dataItems;

    disabled = Array.isArray(disabled) ? disabled : [];

    var disabledValues = void 0;
    var enabledData = data;

    if (disabled.length) {
      disabledValues = values.filter(function (v) {
        return accessors.find(disabled, v);
      });
      enabledData = data.filter(function (v) {
        return !accessors.find(disabled, v);
      });
    }

    var nextValues = values.length >= enabledData.length ? values.filter(function (v) {
      return accessors.find(disabled, v);
    }) : enabledData.concat(disabledValues);

    (0, _widgetHelpers.notify)(onChange, [nextValues]);
  };

  SelectList.prototype.search = function search(character, originalEvent) {
    var _this2 = this;

    var _searchTerm = this._searchTerm,
        list = this.list;


    var word = ((_searchTerm || '') + character).toLowerCase();
    var multiple = this.props.multiple;

    if (!multiple) originalEvent.persist();

    if (!character) return;

    this._searchTerm = word;

    this.timeouts.set('search', function () {
      var focusedItem = list.next(_this2.state.focusedItem, word);

      _this2._searchTerm = '';

      if (focusedItem) {
        !multiple ? _this2.handleChange(focusedItem, true, originalEvent) : _this2.setState({ focusedItem: focusedItem });
      }
    }, this.props.delay);
  };

  return SelectList;
}(_react2.default.Component), _class3.propTypes = {
  data: _propTypes2.default.array,
  value: _propTypes2.default.oneOfType([_propTypes2.default.any, _propTypes2.default.array]),
  onChange: _propTypes2.default.func,

  /**
   * A handler called when focus shifts on the SelectList. Internally this is used to ensure the focused item is in view.
   * If you want to define your own "scrollTo" behavior or just disable the default one specify an `onMove` handler.
   * The handler is called with the relevant DOM nodes needed to implement scroll behavior: the list element,
   * the element that is currently focused, and a focused value.
   *
   * @type {function(list: HTMLELement, focusedNode: HTMLElement, focusedItem: any)}
   */
  onMove: _propTypes2.default.func,

  /**
   * Whether or not the SelectList allows multiple selection or not. when `false` the SelectList will
   * render as a list of radio buttons, and checkboxes when `true`.
   */
  multiple: _propTypes2.default.bool,

  onKeyDown: _propTypes2.default.func,
  onKeyPress: _propTypes2.default.func,

  itemComponent: CustomPropTypes.elementType,
  listComponent: CustomPropTypes.elementType,

  valueField: CustomPropTypes.accessor,
  textField: CustomPropTypes.accessor,
  busy: _propTypes2.default.bool,
  delay: _propTypes2.default.number,

  autoFocus: _propTypes2.default.bool,
  disabled: CustomPropTypes.disabled.acceptsArray,
  readOnly: CustomPropTypes.disabled,

  listProps: _propTypes2.default.object,
  messages: _propTypes2.default.shape({
    emptyList: CustomPropTypes.message
  }),

  tabIndex: _propTypes2.default.any,

  /**
   * The HTML `name` attribute used to group checkboxes and radio buttons
   * together.
   */
  name: _propTypes2.default.string
}, _class3.defaultProps = {
  delay: 250,
  value: [],
  data: [],
  listComponent: _List2.default
}, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'handleKeyDown', [_interaction.widgetEditable], {
  enumerable: true,
  initializer: function initializer() {
    var _this3 = this;

    return function (event) {
      var list = _this3.list,
          accessors = _this3.accessors;
      var multiple = _this3.props.multiple;
      var _state2 = _this3.state,
          dataItems = _state2.dataItems,
          focusedItem = _state2.focusedItem;
      var keyCode = event.keyCode,
          key = event.key,
          ctrlKey = event.ctrlKey;


      var change = function change(item) {
        if (!item) return;

        var checked = multiple ? !accessors.find(dataItems, item) // toggle value
        : true;

        _this3.handleChange(item, checked, event);
      };

      (0, _widgetHelpers.notify)(_this3.props.onKeyDown, [event]);

      if (event.defaultPrevented) return;

      if (key === 'End') {
        event.preventDefault();
        focusedItem = list.last();

        _this3.setState({ focusedItem: focusedItem });
        if (!multiple) change(focusedItem);
      } else if (key === 'Home') {
        event.preventDefault();
        focusedItem = list.first();

        _this3.setState({ focusedItem: focusedItem });
        if (!multiple) change(focusedItem);
      } else if (key === 'Enter' || key === ' ') {
        event.preventDefault();
        change(focusedItem);
      } else if (key === 'ArrowDown' || key === 'ArrowRight') {
        event.preventDefault();
        focusedItem = list.next(focusedItem);

        _this3.setState({ focusedItem: focusedItem });
        if (!multiple) change(focusedItem);
      } else if (key === 'ArrowUp' || key === 'ArrowLeft') {
        event.preventDefault();
        focusedItem = list.prev(focusedItem);

        _this3.setState({ focusedItem: focusedItem });
        if (!multiple) change(focusedItem);
      } else if (multiple && keyCode === 65 && ctrlKey) {
        event.preventDefault();
        _this3.selectAll();
      }
    };
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'handleKeyPress', [_interaction.widgetEditable], {
  enumerable: true,
  initializer: function initializer() {
    var _this4 = this;

    return function (event) {
      (0, _widgetHelpers.notify)(_this4.props.onKeyPress, [event]);

      if (event.defaultPrevented) return;

      _this4.search(String.fromCharCode(event.which), event);
    };
  }
})), _class2)) || _class;

exports.default = (0, _uncontrollable2.default)(SelectList, {
  value: 'onChange'
}, ['selectAll', 'focus']);
module.exports = exports['default'];