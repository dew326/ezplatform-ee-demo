(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-admin-ui-modal-location-trash-single-asset-js"],{

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.state.radio.toggle.js":
/*!******************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.state.radio.toggle.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n(function (global, doc) {\n  var toggleForms = _toConsumableArray(doc.querySelectorAll('.ez-toggle-btn-state-radio'));\n\n  toggleForms.forEach(function (toggleForm) {\n    var radioInputs = _toConsumableArray(toggleForm.querySelectorAll('input[type=\"radio\"]'));\n\n    var button = doc.querySelector(toggleForm.dataset.toggleButtonId);\n\n    if (!button) {\n      return;\n    }\n\n    var toggleButtonState = function toggleButtonState() {\n      var isAnythingSelected = radioInputs.some(function (el) {\n        return el.checked;\n      });\n      button.disabled = !isAnythingSelected;\n    };\n\n    toggleButtonState();\n    radioInputs.forEach(function (radioInput) {\n      return radioInput.addEventListener('change', toggleButtonState, false);\n    });\n  });\n})(window, document);\n\n//# sourceURL=webpack:///./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.state.radio.toggle.js?");

/***/ }),

/***/ 16:
/*!************************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.state.radio.toggle.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /home/dev/server/pb-demo.v2/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.state.radio.toggle.js */\"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.state.radio.toggle.js\");\n\n\n//# sourceURL=webpack:///multi_./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.state.radio.toggle.js?");

/***/ })

},[[16,"runtime"]]]);