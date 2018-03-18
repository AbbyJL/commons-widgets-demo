'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _class3, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _activeElement = require('dom-helpers/activeElement');

var _activeElement2 = _interopRequireDefault(_activeElement);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactComponentManagers = require('react-component-managers');

var _uncontrollable = require('uncontrollable');

var _uncontrollable2 = _interopRequireDefault(_uncontrollable);

var _Widget = require('./Widget');

var _Widget2 = _interopRequireDefault(_Widget);

var _WidgetPicker = require('./WidgetPicker');

var _WidgetPicker2 = _interopRequireDefault(_WidgetPicker);

var _Select = require('./Select');

var _Select2 = _interopRequireDefault(_Select);

var _Popup = require('./Popup');

var _Popup2 = _interopRequireDefault(_Popup);

var _List = require('./List');

var _List2 = _interopRequireDefault(_List);

var _AddToListOption = require('./AddToListOption');

var _AddToListOption2 = _interopRequireDefault(_AddToListOption);

var _DropdownListInput = require('./DropdownListInput');

var _DropdownListInput2 = _interopRequireDefault(_DropdownListInput);

var _messages = require('./messages');

var _Props = require('./util/Props');

var Props = _interopRequireWildcard(_Props);

var _Filter = require('./util/Filter');

var Filter = _interopRequireWildcard(_Filter);

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

var CREATE_OPTION = {};

/**
 * ---
 * shortcuts:
 *   - { key: alt + down arrow, label: open dropdown }
 *   - { key: alt + up arrow, label: close dropdown }
 *   - { key: down arrow, label: move focus to next item }
 *   - { key: up arrow, label: move focus to previous item }
 *   - { key: home, label: move focus to first item }
 *   - { key: end, label: move focus to last item }
 *   - { key: enter, label: select focused item }
 *   - { key: ctrl + enter, label: create new option from current searchTerm }
 *   - { key: any key, label: search list for item starting with key }
 * ---
 *
 * A `<select>` replacement for single value lists.

 * @public
 */

var DropdownList = (0, _withRightToLeft2.default)(_class = (_class2 = (_temp = _class3 = function (_React$Component) {
  _inherits(DropdownList, _React$Component);

  function DropdownList() {
    _classCallCheck(this, DropdownList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args)));

    _this.handleFocusChanged = function (focused) {
      if (!focused) _this.close();
    };

    _initDefineProp(_this, 'handleSelect', _descriptor, _this);

    _initDefineProp(_this, 'handleCreate', _descriptor2, _this);

    _initDefineProp(_this, 'handleClick', _descriptor3, _this);

    _initDefineProp(_this, 'handleKeyDown', _descriptor4, _this);

    _initDefineProp(_this, 'handleKeyPress', _descriptor5, _this);

    _this.handleInputChange = function (e) {
      _this.search(e.target.value, e, 'input');
    };

    _this.focus = function (target) {
      var _this$props = _this.props,
          filter = _this$props.filter,
          open = _this$props.open;

      var inst = target || (filter && open ? _this.refs.filter : _this.refs.input);

      inst = (0, _reactDom.findDOMNode)(inst);

      if (inst && (0, _activeElement2.default)() !== inst) inst.focus();
    };

    (0, _reactComponentManagers.autoFocus)(_this);
    _this.messages = (0, _messages.getMessages)(_this.props.messages);

    _this.inputId = (0, _widgetHelpers.instanceId)(_this, '_input');
    _this.listId = (0, _widgetHelpers.instanceId)(_this, '_listbox');
    _this.activeId = (0, _widgetHelpers.instanceId)(_this, '_listbox_active_option');

    _this.list = (0, _listDataManager2.default)(_this);
    _this.mounted = (0, _reactComponentManagers.mountManager)(_this);
    _this.timeouts = (0, _reactComponentManagers.timeoutManager)(_this);
    _this.accessors = (0, _accessorManager2.default)(_this);
    _this.handleScroll = (0, _scrollManager2.default)(_this);
    _this.focusManager = (0, _focusManager2.default)(_this, {
      didHandle: _this.handleFocusChanged
    });

    _this.state = _this.getStateFromProps(_this.props);
    return _this;
  }

  DropdownList.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    this.messages = (0, _messages.getMessages)(nextProps.messages);
    this.setState(this.getStateFromProps(nextProps));
  };

  DropdownList.prototype.getStateFromProps = function getStateFromProps(props) {
    var open = props.open,
        value = props.value,
        data = props.data,
        searchTerm = props.searchTerm,
        filter = props.filter,
        minLength = props.minLength,
        caseSensitive = props.caseSensitive;
    var accessors = this.accessors,
        list = this.list;

    var initialIdx = accessors.indexOf(data, value);

    if (open) data = Filter.filter(data, {
      filter: filter,
      searchTerm: searchTerm,
      minLength: minLength,
      caseSensitive: caseSensitive,
      textField: this.accessors.text
    });

    list.setData(data);

    var selectedItem = data[initialIdx];

    return {
      data: data,
      selectedItem: list.nextEnabled(selectedItem),
      focusedItem: list.nextEnabled(selectedItem || data[0])
    };
  };

  DropdownList.prototype.change = function change(nextValue, originalEvent) {
    var _props = this.props,
        onChange = _props.onChange,
        searchTerm = _props.searchTerm,
        lastValue = _props.value;


    if (!this.accessors.matches(nextValue, lastValue)) {
      (0, _widgetHelpers.notify)(onChange, [nextValue, {
        originalEvent: originalEvent,
        lastValue: lastValue,
        searchTerm: searchTerm
      }]);

      this.clearSearch(originalEvent);
      this.close();
    }
  };

  DropdownList.prototype.renderList = function renderList(messages) {
    var _props2 = this.props,
        open = _props2.open,
        filter = _props2.filter,
        data = _props2.data,
        searchTerm = _props2.searchTerm;
    var _state = this.state,
        selectedItem = _state.selectedItem,
        focusedItem = _state.focusedItem;
    var _accessors = this.accessors,
        value = _accessors.value,
        text = _accessors.text;


    var List = this.props.listComponent;
    var props = this.list.defaultProps();

    return _react2.default.createElement(
      'div',
      null,
      filter && _react2.default.createElement(
        _WidgetPicker2.default,
        {
          ref: 'filterWrapper',
          className: 'rw-filter-input rw-input'
        },
        _react2.default.createElement('input', {
          ref: 'filter',
          value: searchTerm,
          className: 'rw-input-reset',
          onChange: this.handleInputChange,
          placeholder: messages.filterPlaceholder(this.props)
        }),
        _react2.default.createElement(_Select2.default, { icon: 'search', role: 'presentation', 'aria-hidden': 'true' })
      ),
      _react2.default.createElement(List, _extends({}, props, {
        ref: 'list',
        id: this.listId,
        activeId: this.activeId,
        valueAccessor: value,
        textAccessor: text,
        selectedItem: selectedItem,
        focusedItem: open ? focusedItem : null,
        onSelect: this.handleSelect,
        onMove: this.handleScroll,
        'aria-live': open && 'polite',
        'aria-labelledby': this.inputId,
        'aria-hidden': !this.props.open,
        messages: {
          emptyList: data.length ? messages.emptyFilter : messages.emptyList
        }
      })),
      this.allowCreate() && _react2.default.createElement(
        _AddToListOption2.default,
        {
          id: this.createId,
          searchTerm: searchTerm,
          onSelect: this.handleCreate,
          focused: !focusedItem || focusedItem === CREATE_OPTION
        },
        messages.createOption(this.props)
      )
    );
  };

  DropdownList.prototype.render = function render() {
    var _this2 = this;

    var _props3 = this.props,
        className = _props3.className,
        tabIndex = _props3.tabIndex,
        popupTransition = _props3.popupTransition,
        textField = _props3.textField,
        data = _props3.data,
        busy = _props3.busy,
        dropUp = _props3.dropUp,
        placeholder = _props3.placeholder,
        value = _props3.value,
        open = _props3.open,
        filter = _props3.filter,
        inputProps = _props3.inputProps,
        valueComponent = _props3.valueComponent;
    var focused = this.state.focused;


    var disabled = this.props.disabled === true,
        readOnly = this.props.readOnly === true,
        valueItem = this.accessors.findOrSelf(data, value);

    var shouldRenderPopup = open || (0, _widgetHelpers.isFirstFocusedRender)(this);

    var elementProps = _extends(Props.pickElementProps(this), {
      name: undefined,
      role: 'combobox',
      id: this.inputId,
      tabIndex: open && filter ? -1 : tabIndex || 0,
      'aria-owns': this.listId,
      'aria-activedescendant': open ? this.activeId : null,
      'aria-expanded': !!open,
      'aria-haspopup': true,
      'aria-busy': !!busy,
      'aria-live': !open && 'polite',
      'aria-autocomplete': 'list',
      'aria-disabled': disabled,
      'aria-readonly': readOnly
    });

    var messages = this.messages;

    return _react2.default.createElement(
      _Widget2.default,
      _extends({}, elementProps, {
        ref: 'input',
        open: open,
        dropUp: dropUp,
        focused: focused,
        disabled: disabled,
        readOnly: readOnly,
        onBlur: this.focusManager.handleBlur,
        onFocus: this.focusManager.handleFocus,
        onKeyDown: this.handleKeyDown,
        onKeyPress: this.handleKeyPress,
        className: (0, _classnames2.default)(className, 'rw-dropdown-list')
      }),
      _react2.default.createElement(
        _WidgetPicker2.default,
        { onClick: this.handleClick, className: 'rw-widget-input' },
        _react2.default.createElement(_DropdownListInput2.default, _extends({}, inputProps, {
          value: valueItem,
          textField: textField,
          placeholder: placeholder,
          valueComponent: valueComponent
        })),
        _react2.default.createElement(_Select2.default, {
          busy: busy,
          icon: 'caret-down',
          role: 'presentational',
          'aria-hidden': 'true',
          disabled: disabled || readOnly,
          label: messages.openDropdown(this.props)
        })
      ),
      shouldRenderPopup && _react2.default.createElement(
        _Popup2.default,
        {
          open: open,
          dropUp: dropUp,
          transition: popupTransition,
          onEntered: function onEntered() {
            return _this2.focus();
          },
          onEntering: function onEntering() {
            return _this2.refs.list.forceUpdate();
          }
        },
        this.renderList(messages)
      )
    );
  };

  DropdownList.prototype.findOption = function findOption(character, cb) {
    var _this3 = this;

    var word = ((this._currentWord || '') + character).toLowerCase();

    if (!character) return;

    this._currentWord = word;

    this.timeouts.set('search', function () {
      var list = _this3.list,
          key = _this3.props.open ? 'focusedItem' : 'selectedItem',
          item = list.next(_this3.state[key], word);

      _this3._currentWord = '';
      if (item) cb(item);
    }, this.props.delay);
  };

  DropdownList.prototype.clearSearch = function clearSearch(originalEvent) {
    this.search('', originalEvent, 'clear');
  };

  DropdownList.prototype.search = function search(searchTerm, originalEvent) {
    var action = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'input';
    var _props4 = this.props,
        onSearch = _props4.onSearch,
        lastSearchTerm = _props4.searchTerm;


    if (searchTerm !== lastSearchTerm) (0, _widgetHelpers.notify)(onSearch, [searchTerm, {
      action: action,
      lastSearchTerm: lastSearchTerm,
      originalEvent: originalEvent
    }]);
  };

  DropdownList.prototype.open = function open() {
    if (!this.props.open) (0, _widgetHelpers.notify)(this.props.onToggle, true);
  };

  DropdownList.prototype.close = function close() {
    if (this.props.open) (0, _widgetHelpers.notify)(this.props.onToggle, false);
  };

  DropdownList.prototype.toggle = function toggle() {
    this.props.open ? this.close() : this.open();
  };

  DropdownList.prototype.allowCreate = function allowCreate() {
    var _props5 = this.props,
        searchTerm = _props5.searchTerm,
        onCreate = _props5.onCreate,
        allowCreate = _props5.allowCreate;


    return !!(onCreate && (allowCreate === true || allowCreate === 'onFilter' && searchTerm) && !this.hasExtactMatch());
  };

  DropdownList.prototype.hasExtactMatch = function hasExtactMatch() {
    var _props6 = this.props,
        searchTerm = _props6.searchTerm,
        caseSensitive = _props6.caseSensitive,
        filter = _props6.filter;
    var data = this.state.data;
    var text = this.accessors.text;

    var lower = function lower(text) {
      return caseSensitive ? text : text.toLowerCase();
    };

    // if there is an exact match on textFields:
    return filter && data.some(function (v) {
      return lower(text(v)) === lower(searchTerm);
    });
  };

  return DropdownList;
}(_react2.default.Component), _class3.propTypes = _extends({}, Filter.propTypes, {

  value: _propTypes2.default.any,
  /**
  * @type {function (
  *  dataItems: ?any,
  *  metadata: {
  *    lastValue: ?any,
  *    searchTerm: ?string
  *    originalEvent: SyntheticEvent,
  *  }
  * ): void}
  */
  onChange: _propTypes2.default.func,
  open: _propTypes2.default.bool,
  onToggle: _propTypes2.default.func,

  data: _propTypes2.default.array,
  valueField: CustomPropTypes.accessor,
  textField: CustomPropTypes.accessor,
  allowCreate: _propTypes2.default.oneOf([true, false, 'onFilter']),

  /**
   * A React component for customizing the rendering of the DropdownList
   * value
   */
  valueComponent: CustomPropTypes.elementType,
  itemComponent: CustomPropTypes.elementType,
  listComponent: CustomPropTypes.elementType,

  groupComponent: CustomPropTypes.elementType,
  groupBy: CustomPropTypes.accessor,

  /**
   *
   * @type {(dataItem: ?any, metadata: { originalEvent: SyntheticEvent }) => void}
   */
  onSelect: _propTypes2.default.func,

  onCreate: _propTypes2.default.func,

  /**
   * @type function(searchTerm: string, metadata: { action, lastSearchTerm, originalEvent? })
   */
  onSearch: _propTypes2.default.func,

  searchTerm: _propTypes2.default.string,
  busy: _propTypes2.default.bool,
  placeholder: _propTypes2.default.string,

  dropUp: _propTypes2.default.bool,
  popupTransition: CustomPropTypes.elementType,

  disabled: CustomPropTypes.disabled.acceptsArray,
  readOnly: CustomPropTypes.disabled,

  inputProps: _propTypes2.default.object,
  listProps: _propTypes2.default.object,

  messages: _propTypes2.default.shape({
    open: _propTypes2.default.string,
    emptyList: CustomPropTypes.message,
    emptyFilter: CustomPropTypes.message,
    filterPlaceholder: _propTypes2.default.string,
    createOption: CustomPropTypes.message
  })
}), _class3.defaultProps = {
  data: [],
  delay: 500,
  searchTerm: '',
  allowCreate: false,
  listComponent: _List2.default
}, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'handleSelect', [_interaction.widgetEditable], {
  enumerable: true,
  initializer: function initializer() {
    var _this4 = this;

    return function (dataItem, originalEvent) {
      if (dataItem === undefined || dataItem === CREATE_OPTION) {
        _this4.handleCreate(_this4.props.searchTerm);
        return;
      }

      (0, _widgetHelpers.notify)(_this4.props.onSelect, [dataItem, { originalEvent: originalEvent }]);

      _this4.change(dataItem, originalEvent);
      _this4.close();
      _this4.focus(_this4);
    };
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'handleCreate', [_interaction.widgetEditable], {
  enumerable: true,
  initializer: function initializer() {
    var _this5 = this;

    return function () {
      var searchTerm = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var event = arguments[1];

      (0, _widgetHelpers.notify)(_this5.props.onCreate, searchTerm);

      _this5.clearSearch(event);
      _this5.close();
      _this5.focus(_this5);
    };
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'handleClick', [_interaction.widgetEditable], {
  enumerable: true,
  initializer: function initializer() {
    var _this6 = this;

    return function (e) {
      _this6.focus();
      _this6.toggle();
      (0, _widgetHelpers.notify)(_this6.props.onClick, e);
    };
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'handleKeyDown', [_interaction.widgetEditable], {
  enumerable: true,
  initializer: function initializer() {
    var _this7 = this;

    return function (e) {
      var key = e.key,
          altKey = e.altKey,
          ctrlKey = e.ctrlKey;
      var list = _this7.list;
      var _props7 = _this7.props,
          open = _props7.open,
          onKeyDown = _props7.onKeyDown,
          filter = _props7.filter,
          searchTerm = _props7.searchTerm;
      var _state2 = _this7.state,
          focusedItem = _state2.focusedItem,
          selectedItem = _state2.selectedItem;


      var createIsFocused = focusedItem === CREATE_OPTION;
      var canCreate = _this7.allowCreate();

      (0, _widgetHelpers.notify)(onKeyDown, [e]);

      var closeWithFocus = function closeWithFocus() {
        _this7.close();
        (0, _reactDom.findDOMNode)(_this7).focus();
      };

      var change = function change(item) {
        return item != null && _this7.change(item, e);
      };
      var focusItem = function focusItem(item) {
        return _this7.setState({ focusedItem: item });
      };

      if (e.defaultPrevented) return;

      if (key === 'End') {
        e.preventDefault();

        if (open) focusItem(list.last());else change(list.last());
      } else if (key === 'Home') {
        e.preventDefault();

        if (open) focusItem(list.first());else change(list.first());
      } else if (key === 'Escape' && open) {
        e.preventDefault();
        closeWithFocus();
      } else if (key === 'Enter' && open && ctrlKey && canCreate) {
        e.preventDefault();
        _this7.handleCreate(searchTerm, e);
      } else if ((key === 'Enter' || key === ' ' && !filter) && open) {
        e.preventDefault();
        _this7.handleSelect(focusedItem, e);
      } else if (key === ' ' && !open) {
        e.preventDefault();
        _this7.open();
      } else if (key === 'ArrowDown') {
        e.preventDefault();

        if (altKey) return _this7.open();
        if (!open) change(list.next(selectedItem));

        var next = list.next(focusedItem);
        var creating = createIsFocused || canCreate && focusedItem === next;

        focusItem(creating ? CREATE_OPTION : next);
      } else if (key === 'ArrowUp') {
        e.preventDefault();

        if (altKey) return closeWithFocus();
        if (!open) return change(list.prev(selectedItem));

        focusItem(createIsFocused ? list.last() : list.prev(focusedItem));
      }
    };
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'handleKeyPress', [_interaction.widgetEditable], {
  enumerable: true,
  initializer: function initializer() {
    var _this8 = this;

    return function (e) {
      (0, _widgetHelpers.notify)(_this8.props.onKeyPress, [e]);
      if (e.defaultPrevented) return;

      if (!(_this8.props.filter && _this8.props.open)) _this8.findOption(String.fromCharCode(e.which), function (item) {
        _this8.mounted() && _this8.props.open ? _this8.setState({ focusedItem: item }) : item && _this8.change(item, e);
      });
    };
  }
})), _class2)) || _class;

exports.default = (0, _uncontrollable2.default)(DropdownList, {
  open: 'onToggle',
  value: 'onChange',
  searchTerm: 'onSearch'
}, ['focus']);
module.exports = exports['default'];