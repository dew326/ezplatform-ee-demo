(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-admin-ui-urls-tab-js"],{

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.state.toggle.js":
/*!************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.state.toggle.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n(function (global, doc) {\n  var toggleForms = _toConsumableArray(doc.querySelectorAll('.ez-toggle-btn-state'));\n\n  toggleForms.forEach(function (toggleForm) {\n    var checkboxes = _toConsumableArray(toggleForm.querySelectorAll('.ez-table__cell.ez-table__cell--has-checkbox input[type=\"checkbox\"]'));\n\n    var buttonRemove = doc.querySelector(toggleForm.dataset.toggleButtonId);\n\n    if (!buttonRemove) {\n      return;\n    }\n\n    var toggleButtonState = function toggleButtonState() {\n      var isAnythingSelected = checkboxes.some(function (el) {\n        return el.checked;\n      });\n      buttonRemove.disabled = !isAnythingSelected;\n    };\n\n    toggleButtonState();\n    checkboxes.forEach(function (checkbox) {\n      return checkbox.addEventListener('change', toggleButtonState, false);\n    });\n  });\n})(window, document);\n\n//# sourceURL=webpack:///./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.state.toggle.js?");

/***/ }),

/***/ 4:
/*!******************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.state.toggle.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /home/dev/server/pb-demo.v2/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.state.toggle.js */\"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.state.toggle.js\");\n\n\n//# sourceURL=webpack:///multi_./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.state.toggle.js?");

/***/ })

},[[4,"runtime"]]]);