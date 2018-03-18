'use strict';

exports.__esModule = true;

var _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _class3, _temp;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _closest = require('dom-helpers/query/closest');

var _closest2 = _interopRequireDefault(_closest);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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

var _MultiselectInput = require('./MultiselectInput');

var _MultiselectInput2 = _interopRequireDefault(_MultiselectInput);

var _MultiselectTagList = require('./MultiselectTagList');

var _MultiselectTagList2 = _interopRequireDefault(_MultiselectTagList);

var _List = require('./List');

var _List2 = _interopRequireDefault(_List);

var _AddToListOption = require('./AddToListOption');

var _AddToListOption2 = _interopRequireDefault(_AddToListOption);

var _ = require('./util/_');

var _Filter = require('./util/Filter');

var Filter = _interopRequireWildcard(_Filter);

var _Props = require('./util/Props');

var Props = _interopRequireWildcard(_Props);

var _messages = require('./messages');

var _PropTypes = require('./util/PropTypes');

var CustomPropTypes = _interopRequireWildcard(_PropTypes);

var _accessorManager = require('./util/accessorManager');

var _accessorManager2 = _interopRequireDefault(_accessorManager);

var _focusManager = require('./util/focusManager');

var _focusManager2 = _interopRequireDefault(_focusManager);

var _listDataManager = require('./util/listDataManager');

var _listDataManager2 = _interopRequireDefault(_listDataManager);

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
var ENTER = 13;

var INSERT = 'insert';
var REMOVE = 'remove';

var propTypes = _extends({}, Filter.propTypes, {

  data: _propTypes2.default.array,
  //-- controlled props --
  value: _propTypes2.default.array,

  /**
   * @type {function (
   *  dataItems: ?any[],
   *  metadata: {
   *    dataItem: any,
   *    action: 'insert' | 'remove',
   *    originalEvent: SyntheticEvent,
   *    lastValue: ?any[],
   *    searchTerm: ?string
   *  }
   * ): void}
   */
  onChange: _propTypes2.default.func,

  searchTerm: _propTypes2.default.string,
  /**
   * @type {function (
   *  searchTerm: ?string,
   *  metadata: {
   *    action: 'clear' | 'input',
   *    lastSearchTerm: ?string,
   *    originalEvent: SyntheticEvent,
   *  }
   * ): void}
   */
  onSearch: _propTypes2.default.func,

  open: _propTypes2.default.bool,
  onToggle: _propTypes2.default.func,
  //-------------------------------------------

  valueField: CustomPropTypes.accessor,
  textField: CustomPropTypes.accessor,

  tagComponent: CustomPropTypes.elementType,
  itemComponent: CustomPropTypes.elementType,
  listComponent: CustomPropTypes.elementType,

  groupComponent: CustomPropTypes.elementType,
  groupBy: CustomPropTypes.accessor,

  allowCreate: _propTypes2.default.oneOf([true, false, 'onFilter']),

  /**
   *
   * @type { (dataItem: ?any, metadata: { originalEvent: SyntheticEvent }) => void }
   */
  onSelect: _propTypes2.default.func,

  /**
   * @type { (searchTerm: string) => void }
   */
  onCreate: _propTypes2.default.func,

  busy: _propTypes2.default.bool,
  dropUp: _propTypes2.default.bool,
  popupTransition: CustomPropTypes.elementType,

  inputProps: _propTypes2.default.object,
  listProps: _propTypes2.default.object,

  autoFocus: _propTypes2.default.bool,
  placeholder: _propTypes2.default.string,
  disabled: CustomPropTypes.disabled.acceptsArray,
  readOnly: CustomPropTypes.disabled,

  messages: _propTypes2.default.shape({
    open: CustomPropTypes.message,
    emptyList: CustomPropTypes.message,
    emptyFilter: CustomPropTypes.message,
    createOption: CustomPropTypes.message,

    tagsLabel: CustomPropTypes.message,
    selectedItems: CustomPropTypes.message,
    noneSelected: CustomPropTypes.message,
    removeLabel: CustomPropTypes.message
  })
});

/**
 * ---
 * shortcuts:
 *   - { key: left arrow, label: move focus to previous tag }
 *   - { key: right arrow, label: move focus to next tag }
 *   - { key: delete, deselect focused tag }
 *   - { key: backspace, deselect next tag }
 *   - { key: alt + up arrow, label: close Multiselect }
 *   - { key: down arrow, label: open Multiselect, and move focus to next item }
 *   - { key: up arrow, label: move focus to previous item }
 *   - { key: home, label: move focus to first item }
 *   - { key: end, label: move focus to last item }
 *   - { key: enter, label: select focused item }
 *   - { key: ctrl + enter, label: create new tag from current searchTerm }
 *   - { key: any key, label: search list for item starting with key }
 * ---
 *
 * A select listbox alternative.
 *
 * @public
 */

var Multiselect = (0, _withRightToLeft2.default)(_class = (_class2 = (_temp = _class3 = function (_React$Component) {
  _inherits(Multiselect, _React$Component);

  function Multiselect() {
    _classCallCheck(this, Multiselect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args)));

    _this.handleFocusDidChange = function (focused) {
      if (focused) return _this.focus();

      _this.close();
      _this.clearSearch();

      if (_this.refs.tagList) _this.setState({ focusedTag: null });
    };

    _this.handleDelete = function (dataItem, event) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          readOnly = _this$props.readOnly;


      if (disabled == true || readOnly) return;

      _this.focus();
      _this.change(dataItem, event, REMOVE);
    };

    _this.handleSearchKeyDown = function (e) {
      if (e.key === 'Backspace' && e.target.value && !_this._deletingText) _this._deletingText = true;
    };

    _this.handleSearchKeyUp = function (e) {
      if (e.key === 'Backspace' && _this._deletingText) _this._deletingText = false;
    };

    _this.handleInputChange = function (e) {
      _this.search(e.target.value, e, 'input');
      _this.open();
    };

    _initDefineProp(_this, 'handleClick', _descriptor, _this);

    _initDefineProp(_this, 'handleDoubleClick', _descriptor2, _this);

    _initDefineProp(_this, 'handleSelect', _descriptor3, _this);

    _initDefineProp(_this, 'handleCreate', _descriptor4, _this);

    _initDefineProp(_this, 'handleKeyDown', _descriptor5, _this);

    _this.messages = (0, _messages.getMessages)(_this.props.messages);

    _this.inputId = (0, _widgetHelpers.instanceId)(_this, '_input');
    _this.tagsId = (0, _widgetHelpers.instanceId)(_this, '_taglist');
    _this.notifyId = (0, _widgetHelpers.instanceId)(_this, '_notify_area');
    _this.listId = (0, _widgetHelpers.instanceId)(_this, '_listbox');
    _this.createId = (0, _widgetHelpers.instanceId)(_this, '_createlist_option');
    _this.activeTagId = (0, _widgetHelpers.instanceId)(_this, '_taglist_active_tag');
    _this.activeOptionId = (0, _widgetHelpers.instanceId)(_this, '_listbox_active_option');

    _this.list = (0, _listDataManager2.default)(_this);
    _this.tagList = (0, _listDataManager2.default)(_this, { getStateGetterFromProps: null });

    _this.accessors = (0, _accessorManager2.default)(_this);
    _this.handleScroll = (0, _scrollManager2.default)(_this);
    _this.focusManager = (0, _focusManager2.default)(_this, {
      didHandle: _this.handleFocusDidChange
    });

    _this.isDisabled = (0, _interaction.disabledManager)(_this);

    _this.state = _extends({
      focusedTag: null
    }, _this.getStateFromProps(_this.props));
    return _this;
  }

  Multiselect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    this.messages = (0, _messages.getMessages)(nextProps.messages);
    this.setState(this.getStateFromProps(nextProps));
  };

  Multiselect.prototype.getStateFromProps = function getStateFromProps(props) {
    var accessors = this.accessors,
        list = this.list,
        tagList = this.tagList;
    var data = props.data,
        searchTerm = props.searchTerm,
        minLength = props.minLength,
        caseSensitive = props.caseSensitive,
        filter = props.filter;


    var values = (0, _.makeArray)(props.value);
    var dataItems = values.map(function (item) {
      return accessors.findOrSelf(data, item);
    });

    data = data.filter(function (i) {
      return !values.some(function (v) {
        return accessors.matches(i, v);
      });
    });

    this._lengthWithoutValues = data.length;

    data = Filter.filter(data, {
      filter: filter,
      searchTerm: searchTerm,
      minLength: minLength,
      caseSensitive: caseSensitive,
      textField: accessors.text
    });

    list.setData(data);
    tagList.setData(dataItems);

    var _ref = this.state || {},
        focusedItem = _ref.focusedItem,
        focusedTag = _ref.focusedTag;

    return {
      data: data,
      dataItems: dataItems,
      focusedTag: list.nextEnabled(~dataItems.indexOf(focusedTag) ? focusedTag : null),
      focusedItem: list.nextEnabled(~data.indexOf(focusedItem) ? focusedItem : data[0])
    };
  };

  Multiselect.prototype.renderInput = function renderInput(ownedIds) {
    var _props = this.props,
        searchTerm = _props.searchTerm,
        maxLength = _props.maxLength,
        tabIndex = _props.tabIndex,
        busy = _props.busy,
        autoFocus = _props.autoFocus,
        inputProps = _props.inputProps,
        open = _props.open;
    var _state = this.state,
        focusedItem = _state.focusedItem,
        focusedTag = _state.focusedTag;


    var disabled = this.props.disabled === true;
    var readOnly = this.props.readOnly === true;

    var active = void 0;

    if (!open) active = focusedTag ? this.activeTagId : '';else if (focusedItem || this.allowCreate()) active = this.activeOptionId;

    return _react2.default.createElement(_MultiselectInput2.default, _extends({
      ref: 'input'
    }, inputProps, {
      autoFocus: autoFocus,
      tabIndex: tabIndex || 0,
      role: 'listbox',
      'aria-expanded': !!open,
      'aria-busy': !!busy,
      'aria-owns': ownedIds,
      'aria-haspopup': true,
      'aria-activedescendant': active || null,
      value: searchTerm,
      maxLength: maxLength,
      disabled: disabled,
      readOnly: readOnly,
      placeholder: this.getPlaceholder(),
      onKeyDown: this.handleSearchKeyDown,
      onKeyUp: this.handleSearchKeyUp,
      onChange: this.handleInputChange
    }));
  };

  Multiselect.prototype.renderList = function renderList(messages) {
    var inputId = this.inputId,
        activeOptionId = this.activeOptionId,
        listId = this.listId,
        accessors = this.accessors;
    var open = this.props.open;
    var focusedItem = this.state.focusedItem;


    var List = this.props.listComponent;
    var props = this.list.defaultProps();

    return _react2.default.createElement(List, _extends({}, props, {
      ref: 'list',
      id: listId,
      activeId: activeOptionId,
      valueAccessor: accessors.value,
      textAccessor: accessors.text,
      focusedItem: focusedItem,
      onSelect: this.handleSelect,
      onMove: this.handleScroll,
      'aria-live': 'polite',
      'aria-labelledby': inputId,
      'aria-hidden': !open,
      messages: {
        emptyList: this._lengthWithoutValues ? messages.emptyFilter : messages.emptyList
      }
    }));
  };

  Multiselect.prototype.renderNotificationArea = function renderNotificationArea(messages) {
    var _this2 = this;

    var _state2 = this.state,
        focused = _state2.focused,
        dataItems = _state2.dataItems;


    var itemLabels = dataItems.map(function (item) {
      return _this2.accessors.text(item);
    });

    return _react2.default.createElement(
      'span',
      {
        id: this.notifyId,
        role: 'status',
        className: 'rw-sr',
        'aria-live': 'assertive',
        'aria-atomic': 'true',
        'aria-relevant': 'additions removals text'
      },
      focused && (dataItems.length ? messages.selectedItems(itemLabels) : messages.noneSelected())
    );
  };

  Multiselect.prototype.renderTags = function renderTags(messages) {
    var readOnly = this.props.readOnly;
    var _state3 = this.state,
        focusedTag = _state3.focusedTag,
        dataItems = _state3.dataItems;


    var Component = this.props.tagComponent;

    return _react2.default.createElement(_MultiselectTagList2.default, {
      ref: 'tagList',
      id: this.tagsId,
      activeId: this.activeTagId,
      textAccessor: this.accessors.text,
      valueAccessor: this.accessors.value,
      label: messages.tagsLabel(),
      value: dataItems,
      readOnly: readOnly,
      disabled: this.isDisabled(),
      focusedItem: focusedTag,
      onDelete: this.handleDelete,
      valueComponent: Component
    });
  };

  Multiselect.prototype.render = function render() {
    var _this3 = this;

    var _props2 = this.props,
        className = _props2.className,
        busy = _props2.busy,
        dropUp = _props2.dropUp,
        open = _props2.open,
        searchTerm = _props2.searchTerm,
        popupTransition = _props2.popupTransition;
    var _state4 = this.state,
        focused = _state4.focused,
        focusedItem = _state4.focusedItem,
        dataItems = _state4.dataItems;


    var elementProps = Props.pickElementProps(this);

    var shouldRenderTags = !!dataItems.length,
        shouldRenderPopup = (0, _widgetHelpers.isFirstFocusedRender)(this) || open,
        allowCreate = this.allowCreate();

    var inputOwns = this.listId + ' ' + this.notifyId + ' ' + (shouldRenderTags ? this.tagsId : '') + (allowCreate ? this.createId : '');

    var disabled = this.isDisabled() === true;
    var readOnly = this.props.readOnly === true;

    var messages = this.messages;

    return _react2.default.createElement(
      _Widget2.default,
      _extends({}, elementProps, {
        open: open,
        dropUp: dropUp,
        focused: focused,
        disabled: disabled,
        readOnly: readOnly,
        onKeyDown: this.handleKeyDown,
        onBlur: this.focusManager.handleBlur,
        onFocus: this.focusManager.handleFocus,
        className: (0, _classnames2.default)(className, 'rw-multiselect')
      }),
      this.renderNotificationArea(messages),
      _react2.default.createElement(
        _WidgetPicker2.default,
        {
          className: 'rw-widget-input',
          onClick: this.handleClick,
          onDoubleClick: this.handleDoubleClick,
          onTouchEnd: this.handleClick
        },
        _react2.default.createElement(
          'div',
          null,
          shouldRenderTags && this.renderTags(messages),
          this.renderInput(inputOwns)
        ),
        _react2.default.createElement(_Select2.default, {
          busy: busy,
          icon: focused ? 'caret-down' : '',
          'aria-hidden': 'true',
          role: 'presentational',
          disabled: disabled || readOnly
        })
      ),
      shouldRenderPopup && _react2.default.createElement(
        _Popup2.default,
        {
          dropUp: dropUp,
          open: open,
          transition: popupTransition,
          onEntering: function onEntering() {
            return _this3.refs.list.forceUpdate();
          }
        },
        _react2.default.createElement(
          'div',
          null,
          this.renderList(messages),
          allowCreate && _react2.default.createElement(
            _AddToListOption2.default,
            {
              id: this.createId,
              searchTerm: searchTerm,
              onSelect: this.handleCreate,
              focused: !focusedItem || focusedItem === CREATE_OPTION
            },
            messages.createOption(this.props)
          )
        )
      )
    );
  };

  Multiselect.prototype.change = function change(dataItem, originalEvent, action) {
    var _props3 = this.props,
        onChange = _props3.onChange,
        searchTerm = _props3.searchTerm,
        lastValue = _props3.value;
    var dataItems = this.state.dataItems;


    switch (action) {
      case INSERT:
        dataItems = dataItems.concat(dataItem);
        break;
      case REMOVE:
        dataItems = dataItems.filter(function (d) {
          return d !== dataItem;
        });
        break;
    }

    (0, _widgetHelpers.notify)(onChange, [dataItems, {
      action: action,
      dataItem: dataItem,
      originalEvent: originalEvent,
      lastValue: lastValue,
      searchTerm: searchTerm
    }]);

    this.clearSearch(originalEvent);
  };

  Multiselect.prototype.clearSearch = function clearSearch(originalEvent) {
    this.search('', originalEvent, 'clear');
  };

  Multiselect.prototype.search = function search(searchTerm, originalEvent) {
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

  Multiselect.prototype.focus = function focus() {
    if (this.refs.input) this.refs.input.focus();
  };

  Multiselect.prototype.toggle = function toggle() {
    this.props.open ? this.close() : this.open();
  };

  Multiselect.prototype.open = function open() {
    if (!this.props.open) (0, _widgetHelpers.notify)(this.props.onToggle, true);
  };

  Multiselect.prototype.close = function close() {
    if (this.props.open) (0, _widgetHelpers.notify)(this.props.onToggle, false);
  };

  Multiselect.prototype.allowCreate = function allowCreate() {
    var _props5 = this.props,
        searchTerm = _props5.searchTerm,
        onCreate = _props5.onCreate,
        allowCreate = _props5.allowCreate;


    return !!(onCreate && (allowCreate === true || allowCreate === 'onFilter' && searchTerm) && !this.hasExtactMatch());
  };

  Multiselect.prototype.hasExtactMatch = function hasExtactMatch() {
    var _props6 = this.props,
        searchTerm = _props6.searchTerm,
        caseSensitive = _props6.caseSensitive;
    var _state5 = this.state,
        data = _state5.data,
        dataItems = _state5.dataItems;
    var text = this.accessors.text;


    var lower = function lower(text) {
      return caseSensitive ? text : text.toLowerCase();
    };
    var eq = function eq(v) {
      return lower(text(v)) === lower(searchTerm);
    };

    // if there is an exact match on textFields:
    // "john" => { name: "john" }, don't show
    return dataItems.some(eq) || data.some(eq);
  };

  Multiselect.prototype.getPlaceholder = function getPlaceholder() {
    var _props7 = this.props,
        value = _props7.value,
        placeholder = _props7.placeholder;

    return (value && value.length ? '' : placeholder) || '';
  };

  return Multiselect;
}(_react2.default.Component), _class3.propTypes = propTypes, _class3.defaultProps = {
  data: [],
  allowCreate: 'onFilter',
  filter: 'startsWith',
  value: [],
  searchTerm: '',
  listComponent: _List2.default
}, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'handleClick', [_interaction.widgetEditable], {
  enumerable: true,
  initializer: function initializer() {
    var _this4 = this;

    return function (_ref2) {
      var target = _ref2.target;

      _this4.focus();

      if ((0, _closest2.default)(target, '.rw-select')) _this4.toggle();else _this4.open();
    };
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'handleDoubleClick', [_interaction.widgetEditable], {
  enumerable: true,
  initializer: function initializer() {
    var _this5 = this;

    return function () {
      if (!_this5.refs.input) return;

      _this5.focus();
      _this5.refs.input.select();
    };
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'handleSelect', [_interaction.widgetEditable], {
  enumerable: true,
  initializer: function initializer() {
    var _this6 = this;

    return function (dataItem, originalEvent) {
      if (dataItem === undefined || dataItem === CREATE_OPTION) {
        _this6.handleCreate(_this6.props.searchTerm, originalEvent);
        return;
      }

      (0, _widgetHelpers.notify)(_this6.props.onSelect, [dataItem, { originalEvent: originalEvent }]);

      _this6.change(dataItem, originalEvent, INSERT);
      _this6.focus();
    };
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'handleCreate', [_interaction.widgetEditable], {
  enumerable: true,
  initializer: function initializer() {
    var _this7 = this;

    return function () {
      var searchTerm = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var event = arguments[1];

      (0, _widgetHelpers.notify)(_this7.props.onCreate, searchTerm);

      _this7.clearSearch(event);
      _this7.focus();
    };
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'handleKeyDown', [_interaction.widgetEditable], {
  enumerable: true,
  initializer: function initializer() {
    var _this8 = this;

    return function (event) {
      var _props8 = _this8.props,
          open = _props8.open,
          searchTerm = _props8.searchTerm,
          onKeyDown = _props8.onKeyDown;
      var key = event.key,
          keyCode = event.keyCode,
          altKey = event.altKey,
          ctrlKey = event.ctrlKey;
      var _state6 = _this8.state,
          focusedTag = _state6.focusedTag,
          focusedItem = _state6.focusedItem;
      var list = _this8.list,
          tagList = _this8.tagList;


      var createIsFocused = focusedItem === CREATE_OPTION;
      var canCreate = _this8.allowCreate();

      var focusTag = function focusTag(tag) {
        return _this8.setState({ focusedTag: tag });
      };
      var focusItem = function focusItem(item) {
        return _this8.setState({ focusedItem: item, focusedTag: null });
      };

      (0, _widgetHelpers.notify)(onKeyDown, [event]);

      if (event.defaultPrevented) return;

      if (key === 'ArrowDown') {
        event.preventDefault();

        if (!open) return _this8.open();

        var next = list.next(focusedItem);
        var creating = createIsFocused || canCreate && focusedItem === next;

        focusItem(creating ? CREATE_OPTION : next);
      } else if (key === 'ArrowUp' && (open || altKey)) {
        event.preventDefault();

        if (altKey) return _this8.close();
        focusItem(createIsFocused ? list.last() : list.prev(focusedItem));
      } else if (key === 'End') {
        event.preventDefault();

        if (open) focusItem(list.last());else focusTag(tagList.last());
      } else if (key === 'Home') {
        event.preventDefault();
        if (open) focusItem(list.first());else focusTag(tagList.first());
      }
      // using keyCode to ignore enter for japanese IME
      else if (open && keyCode === ENTER) {
          event.preventDefault();

          if (ctrlKey && canCreate) return _this8.handleCreate(searchTerm, event);

          _this8.handleSelect(focusedItem, event);
        } else if (key === 'Escape') {
          open ? _this8.close() : tagList && focusTag(null);
        } else if (!searchTerm && !_this8._deletingText) {
          if (key === 'ArrowLeft') {
            focusTag(tagList.prev(focusedTag) || tagList.last());
          } else if (key === 'ArrowRight' && focusedTag) {
            var nextTag = tagList.next(focusedTag);
            focusTag(nextTag === focusedTag ? null : nextTag);
          } else if (key === 'Delete' && !tagList.isDisabled(focusedTag)) {
            _this8.handleDelete(focusedTag, event);
          } else if (key === 'Backspace') {
            _this8.handleDelete(tagList.last(), event);
          } else if (key === ' ' && !open) {
            event.preventDefault();
            _this8.open();
          }
        }
    };
  }
})), _class2)) || _class;

exports.default = (0, _uncontrollable2.default)(Multiselect, {
  open: 'onToggle',
  value: 'onChange',
  searchTerm: 'onSearch'
}, ['focus']);
module.exports = exports['default'];