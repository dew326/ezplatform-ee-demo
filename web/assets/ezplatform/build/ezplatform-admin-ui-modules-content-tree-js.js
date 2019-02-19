(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-admin-ui-modules-content-tree-js"],{

/***/ "./vendor/ezsystems/ezplatform-admin-ui-modules/src/modules/content-tree/components/list-item/list.item.component.js":
/*!***************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui-modules/src/modules/content-tree/components/list-item/list.item.component.js ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\n\n\n\nvar ListItem =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(ListItem, _Component);\n\n  function ListItem(props) {\n    var _this;\n\n    _classCallCheck(this, ListItem);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(ListItem).call(this, props));\n    _this.toggleExpandedState = _this.toggleExpandedState.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.state = {\n      isExpanded: false\n    };\n    return _this;\n  }\n\n  _createClass(ListItem, [{\n    key: \"toggleExpandedState\",\n    value: function toggleExpandedState() {\n      this.setState(function (state) {\n        return {\n          isExpanded: !state.isExpanded\n        };\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          subItems = _this$props.subItems,\n          totalSubItems = _this$props.totalSubItems,\n          name = _this$props.name,\n          children = _this$props.children;\n      var itemClassName = 'c-list-item';\n      var attrs = {\n        className: itemClassName\n      };\n\n      if (subItems.length) {\n        attrs.className = \"\".concat(attrs.className, \" \").concat(itemClassName, \"--has-sub-items\");\n      }\n\n      if (subItems.length < totalSubItems) {\n        attrs.className = \"\".concat(attrs.className, \" \").concat(itemClassName, \"--can-load-more\");\n      }\n\n      if (this.state.isExpanded) {\n        attrs.className = \"\".concat(attrs.className, \" \").concat(itemClassName, \"--is-expanded\");\n      }\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", attrs, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"c-list-item__label\"\n      }, name, \" \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        className: \"c-list-item__toggler\",\n        onClick: this.toggleExpandedState\n      })), children);\n    }\n  }]);\n\n  return ListItem;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nListItem.propTypes = {\n  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,\n  href: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  contentTypeIdentifier: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  totalSubItems: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,\n  subItems: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,\n  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListItem);\n\n//# sourceURL=webpack:///./vendor/ezsystems/ezplatform-admin-ui-modules/src/modules/content-tree/components/list-item/list.item.component.js?");

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui-modules/src/modules/content-tree/components/list/list.component.js":
/*!*****************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui-modules/src/modules/content-tree/components/list/list.component.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _list_item_list_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../list-item/list.item.component */ \"./vendor/ezsystems/ezplatform-admin-ui-modules/src/modules/content-tree/components/list-item/list.item.component.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\nvar List = function List(props) {\n  var listAttrs = {\n    className: 'c-list'\n  };\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", listAttrs, props.items.map(function (item) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _extends({\n      key: true\n    }, item), item.subItems.length && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(List, {\n      items: item.subItems\n    }));\n  }));\n};\n\nList.propTypes = {\n  items: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (List);\n\n//# sourceURL=webpack:///./vendor/ezsystems/ezplatform-admin-ui-modules/src/modules/content-tree/components/list/list.component.js?");

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui-modules/src/modules/content-tree/content.tree.module.js":
/*!******************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui-modules/src/modules/content-tree/content.tree.module.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ContentTreeModule; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/list/list.component */ \"./vendor/ezsystems/ezplatform-admin-ui-modules/src/modules/content-tree/components/list/list.component.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\n\n\n\nvar CLASS_IS_TREE_RESIZING = 'ez-is-tree-resizing';\n\nvar ContentTreeModule =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(ContentTreeModule, _Component);\n\n  function ContentTreeModule(props) {\n    var _this;\n\n    _classCallCheck(this, ContentTreeModule);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(ContentTreeModule).call(this, props));\n    _this.changeContainerWidth = _this.changeContainerWidth.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.addWidthChangeListener = _this.addWidthChangeListener.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.removeWidthChangeListener = _this.removeWidthChangeListener.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this._refTreeContainer = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();\n    _this.state = {\n      selectedLocationId: props.selectedLocationId,\n      locations: props.preloadedLocations,\n      resizeStartPositionX: 0,\n      containerWidth: 0,\n      resizedContainerWidth: 0,\n      isResizing: false\n    };\n    return _this;\n  }\n\n  _createClass(ContentTreeModule, [{\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      this.clearDocumentResizingState();\n    }\n  }, {\n    key: \"changeContainerWidth\",\n    value: function changeContainerWidth(_ref) {\n      var clientX = _ref.clientX;\n      var currentPositionX = clientX;\n      this.setState(function (state) {\n        return {\n          resizedContainerWidth: state.containerWidth + (currentPositionX - state.resizeStartPositionX)\n        };\n      });\n    }\n  }, {\n    key: \"addWidthChangeListener\",\n    value: function addWidthChangeListener(_ref2) {\n      var nativeEvent = _ref2.nativeEvent;\n      var resizeStartPositionX = nativeEvent.clientX;\n      var containerWidth = parseInt(window.getComputedStyle(this._refTreeContainer.current).width, 10);\n      window.document.addEventListener('mousemove', this.changeContainerWidth, false);\n      window.document.addEventListener('mouseup', this.removeWidthChangeListener, false);\n      window.document.body.classList.add(CLASS_IS_TREE_RESIZING);\n      this.setState(function () {\n        return {\n          resizeStartPositionX: resizeStartPositionX,\n          containerWidth: containerWidth,\n          isResizing: true\n        };\n      });\n    }\n  }, {\n    key: \"removeWidthChangeListener\",\n    value: function removeWidthChangeListener() {\n      this.clearDocumentResizingState();\n      this.setState(function (state) {\n        return {\n          resizeStartPositionX: 0,\n          containerWidth: state.resizedContainerWidth,\n          isResizing: false\n        };\n      });\n    }\n  }, {\n    key: \"clearDocumentResizingState\",\n    value: function clearDocumentResizingState() {\n      window.document.removeEventListener('mousemove', this.changeContainerWidth);\n      window.document.removeEventListener('mouseup', this.removeWidthChangeListener);\n      window.document.body.classList.remove(CLASS_IS_TREE_RESIZING);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$state = this.state,\n          isResizing = _this$state.isResizing,\n          containerWidth = _this$state.containerWidth,\n          resizedContainerWidth = _this$state.resizedContainerWidth;\n      var width = isResizing ? resizedContainerWidth : containerWidth;\n      var containerAttrs = {\n        className: 'm-tree',\n        ref: this._refTreeContainer\n      };\n\n      if (width) {\n        containerAttrs.style = {\n          width: \"\".concat(width, \"px\")\n        };\n      }\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", containerAttrs, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_list_list_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        items: this.state.locations\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"m-tree__resize-handler\",\n        onMouseDown: this.addWidthChangeListener\n      }));\n    }\n  }]);\n\n  return ContentTreeModule;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n\neZ.addConfig('modules.ContentTree', ContentTreeModule);\nContentTreeModule.propTypes = {\n  selectedLocationId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,\n  preloadedLocations: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object)\n};\nContentTreeModule.defaultProps = {\n  preloadedLocations: []\n};\n\n//# sourceURL=webpack:///./vendor/ezsystems/ezplatform-admin-ui-modules/src/modules/content-tree/content.tree.module.js?");

/***/ }),

/***/ 38:
/*!************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-admin-ui-modules/src/modules/content-tree/content.tree.module.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /home/dev/server/pb-demo.v2/vendor/ezsystems/ezplatform-admin-ui-modules/src/modules/content-tree/content.tree.module.js */\"./vendor/ezsystems/ezplatform-admin-ui-modules/src/modules/content-tree/content.tree.module.js\");\n\n\n//# sourceURL=webpack:///multi_./vendor/ezsystems/ezplatform-admin-ui-modules/src/modules/content-tree/content.tree.module.js?");

/***/ }),

/***/ "prop-types":
/*!****************************!*\
  !*** external "PropTypes" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = PropTypes;\n\n//# sourceURL=webpack:///external_%22PropTypes%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = React;\n\n//# sourceURL=webpack:///external_%22React%22?");

/***/ })

},[[38,"runtime"]]]);