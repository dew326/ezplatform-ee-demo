(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-admin-ui-content-type-create-js"],{

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.contenttype.fieldtype.js":
/*!********************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.contenttype.fieldtype.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n(function (global, doc) {\n  var togglers = _toConsumableArray(doc.querySelectorAll('.ez-card__body-display-toggler'));\n\n  var toggleFieldTypeView = function toggleFieldTypeView(event) {\n    event.preventDefault();\n    event.currentTarget.closest('.ez-card--fieldtype-container').classList.toggle('ez-card--collapsed');\n  };\n\n  togglers.forEach(function (btn) {\n    return btn.addEventListener('click', toggleFieldTypeView, false);\n  });\n})(window, window.document);\n\n//# sourceURL=webpack:///./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.contenttype.fieldtype.js?");

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.contenttype.selection.js":
/*!********************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.contenttype.selection.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n(function (global, doc) {\n  var SELECTOR_TEMPLATE = '.ezselection-settings-option-value-prototype';\n  var SELECTOR_OPTION = '.ezselection-settings-option-value';\n  var SELECTOR_OPTIONS_LIST = '.ezselection-settings-option-list';\n  var SELECTOR_BTN_REMOVE = '.ezselection-settings-option-remove';\n  var SELECTOR_BTN_ADD = '.ezselection-settings-option-add';\n  var NUMBER_PLACEHOLDER = /__number__/g;\n\n  _toConsumableArray(doc.querySelectorAll('.ezselection-settings.options')).forEach(function (container) {\n    var countExistingOptions = function countExistingOptions() {\n      return container.querySelectorAll(SELECTOR_OPTION).length;\n    };\n\n    var findCheckedOptions = function findCheckedOptions() {\n      return _toConsumableArray(container.querySelectorAll('.ezselection-settings-option-checkbox:checked'));\n    };\n\n    var toggleDisableState = function toggleDisableState() {\n      var disabledState = !!findCheckedOptions().length;\n      var methodName = disabledState ? 'removeAttribute' : 'setAttribute';\n      container.querySelector(SELECTOR_BTN_REMOVE)[methodName]('disabled', disabledState);\n    };\n\n    var addOption = function addOption() {\n      var template = container.querySelector(SELECTOR_TEMPLATE).innerHTML;\n      container.querySelector(SELECTOR_OPTIONS_LIST).insertAdjacentHTML('beforeend', template.replace(NUMBER_PLACEHOLDER, countExistingOptions()));\n    };\n\n    var removeOptions = function removeOptions() {\n      findCheckedOptions().forEach(function (element) {\n        return element.closest(SELECTOR_OPTION).remove();\n      });\n      toggleDisableState();\n    };\n\n    container.querySelector(SELECTOR_OPTIONS_LIST).addEventListener('click', toggleDisableState, false);\n    container.querySelector(SELECTOR_BTN_ADD).addEventListener('click', addOption, false);\n    container.querySelector(SELECTOR_BTN_REMOVE).addEventListener('click', removeOptions, false);\n  });\n})(window, document);\n\n//# sourceURL=webpack:///./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.contenttype.selection.js?");

/***/ }),

/***/ 2:
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.contenttype.selection.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.contenttype.fieldtype.js ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! /home/dev/server/pb-demo.v2/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.contenttype.selection.js */\"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.contenttype.selection.js\");\nmodule.exports = __webpack_require__(/*! /home/dev/server/pb-demo.v2/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.contenttype.fieldtype.js */\"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.contenttype.fieldtype.js\");\n\n\n//# sourceURL=webpack:///multi_./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.contenttype.selection.js_./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.contenttype.fieldtype.js?");

/***/ })

},[[2,"runtime"]]]);