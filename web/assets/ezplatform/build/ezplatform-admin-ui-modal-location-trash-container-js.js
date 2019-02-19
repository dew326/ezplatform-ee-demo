(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-admin-ui-modal-location-trash-container-js"],{

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.trash.container.js":
/*!**************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.trash.container.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function (global, doc) {\n  var toggleForm = doc.querySelector('form[name=\"location_trash_container\"]');\n  var hasAsset = toggleForm.dataset.hasAsset;\n  var hasUniqueAsset = toggleForm.dataset.hasUniqueAsset;\n\n  var openTrashImageAssetModal = function openTrashImageAssetModal(event) {\n    if (!hasAsset && !hasUniqueAsset) {\n      return;\n    }\n\n    event.preventDefault();\n    $('#trash-container-modal').modal('hide');\n    $('#trash-with-asset-modal').modal('show');\n  };\n\n  toggleForm.addEventListener('submit', openTrashImageAssetModal, false);\n})(window, document);\n\n//# sourceURL=webpack:///./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.trash.container.js?");

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.state.checkbox.toggle.js":
/*!*********************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.state.checkbox.toggle.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n(function (global, doc) {\n  var toggleForms = doc.querySelectorAll('.ez-toggle-btn-state-checkbox');\n  var ALL_CHECKED = 'all-checked';\n  var ANY_CHECKED = 'any-checked';\n\n  var toggleButtonState = function toggleButtonState(button, validateCheckboxStatus) {\n    var methodName = 'setAttribute';\n\n    if (validateCheckboxStatus()) {\n      methodName = 'removeAttribute';\n    }\n\n    button[methodName]('disabled', true);\n  };\n\n  toggleForms.forEach(function (toggleForm) {\n    var checkboxInputs = _toConsumableArray(toggleForm.querySelectorAll('input[type=\"checkbox\"]'));\n\n    var button = doc.querySelector(toggleForm.dataset.toggleButtonId);\n    var toggleMode = toggleForm.dataset.toggleMode || ANY_CHECKED;\n\n    var validateCheckboxStatus = function validateCheckboxStatus() {\n      return checkboxInputs.some(function (el) {\n        return el.checked;\n      }) && ALL_CHECKED === toggleMode || checkboxInputs.every(function (el) {\n        return el.checked;\n      }) && ANY_CHECKED === toggleMode;\n    };\n\n    checkboxInputs.forEach(function (input) {\n      return input.addEventListener('change', toggleButtonState.bind(input, button, validateCheckboxStatus), false);\n    });\n  });\n})(window, document);\n\n//# sourceURL=webpack:///./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.state.checkbox.toggle.js?");

/***/ }),

/***/ 15:
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.state.checkbox.toggle.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.trash.container.js ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! /home/dev/server/pb-demo.v2/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.state.checkbox.toggle.js */\"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.state.checkbox.toggle.js\");\nmodule.exports = __webpack_require__(/*! /home/dev/server/pb-demo.v2/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.trash.container.js */\"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.trash.container.js\");\n\n\n//# sourceURL=webpack:///multi_./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.state.checkbox.toggle.js_./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.trash.container.js?");

/***/ })

},[[15,"runtime"]]]);