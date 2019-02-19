(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-admin-ui-content-type-view-js"],{

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.location.change.language.js":
/*!***********************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.location.change.language.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function (global, doc) {\n  var changeLocationLanguage = function changeLocationLanguage(event) {\n    window.location = event.currentTarget.value;\n  };\n\n  var locationLanguageSwitchers = doc.querySelectorAll('.ez-location-language-change');\n  locationLanguageSwitchers.forEach(function (locationLanguageSwitcher) {\n    locationLanguageSwitcher.addEventListener('change', changeLocationLanguage, false);\n  });\n})(window, document);\n\n//# sourceURL=webpack:///./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.location.change.language.js?");

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.state.toggle.js":
/*!************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.state.toggle.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n(function (global, doc) {\n  var toggleForms = _toConsumableArray(doc.querySelectorAll('.ez-toggle-btn-state'));\n\n  toggleForms.forEach(function (toggleForm) {\n    var checkboxes = _toConsumableArray(toggleForm.querySelectorAll('.ez-table__cell.ez-table__cell--has-checkbox input[type=\"checkbox\"]'));\n\n    var buttonRemove = doc.querySelector(toggleForm.dataset.toggleButtonId);\n\n    if (!buttonRemove) {\n      return;\n    }\n\n    var toggleButtonState = function toggleButtonState() {\n      var isAnythingSelected = checkboxes.some(function (el) {\n        return el.checked;\n      });\n      buttonRemove.disabled = !isAnythingSelected;\n    };\n\n    toggleButtonState();\n    checkboxes.forEach(function (checkbox) {\n      return checkbox.addEventListener('change', toggleButtonState, false);\n    });\n  });\n})(window, document);\n\n//# sourceURL=webpack:///./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.state.toggle.js?");

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/contenttype.edit.js":
/*!*********************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/contenttype.edit.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n(function (global, doc) {\n  var editButton = doc.querySelector('.ez-btn--edit');\n  var languageRadioOption = doc.querySelector('.ez-extra-actions--edit.ez-extra-actions--prevent-show [type=\"radio\"]');\n  var editActions = doc.querySelector('.ez-extra-actions--edit');\n\n  var btns = _toConsumableArray(editActions.querySelectorAll('.form-check [type=\"radio\"]'));\n\n  var changeHandler = function changeHandler() {\n    var form = doc.querySelector('.ez-extra-actions--edit form');\n    form.submit();\n  };\n\n  btns.forEach(function (btn) {\n    return btn.addEventListener('change', changeHandler, false);\n  });\n\n  if (!languageRadioOption) {\n    return;\n  }\n\n  editButton.addEventListener('click', function () {\n    languageRadioOption.checked = true;\n    changeHandler();\n  }, false);\n})(window, document);\n\n//# sourceURL=webpack:///./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/contenttype.edit.js?");

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/sidebar/extra.actions.js":
/*!**************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/sidebar/extra.actions.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function (global, doc) {\n  var CLASS_HIDDEN = 'ez-extra-actions--hidden';\n  var CLASS_PREVENT_SHOW = 'ez-extra-actions--prevent-show';\n  var btns = doc.querySelectorAll('.ez-btn--extra-actions');\n\n  var haveHiddenPart = function haveHiddenPart(element) {\n    return element.classList.contains(CLASS_HIDDEN) && !element.classList.contains(CLASS_PREVENT_SHOW);\n  };\n\n  btns.forEach(function (btn) {\n    btn.addEventListener('click', function () {\n      var actions = doc.querySelector(\".ez-extra-actions[data-actions=\\\"\".concat(btn.dataset.actions, \"\\\"]\"));\n      var methodName = haveHiddenPart(actions) ? 'remove' : 'add';\n      var focusElement = actions.querySelector(btn.dataset.focusElement);\n\n      var detectClickOutside = function detectClickOutside(event) {\n        var isNotButton = event.target !== btn || !btn.contains(event.target);\n        var isNotExtraActions = !event.target.closest('.ez-extra-actions');\n        var isNotCalendar = !event.target.closest('.flatpickr-calendar');\n\n        if (isNotButton && isNotExtraActions && isNotCalendar) {\n          actions.classList.add(CLASS_HIDDEN);\n          doc.body.removeEventListener('click', detectClickOutside, false);\n        }\n      };\n\n      actions.classList[methodName](CLASS_HIDDEN);\n      var actionsRect = actions.getBoundingClientRect();\n      actions.style.opacity = 0;\n      var fitsViewport = actionsRect.height + btn.offsetTop <= global.innerHeight;\n\n      if (!fitsViewport) {\n        actions.style.bottom = \"0px\";\n        actions.style.top = 'auto';\n      } else {\n        actions.style.top = \"\".concat(btn.offsetTop, \"px\");\n        actions.style.bottom = 'auto';\n      }\n\n      if (!actions.classList.contains(CLASS_HIDDEN)) {\n        doc.body.addEventListener('click', detectClickOutside, false);\n      } else {\n        doc.body.removeEventListener('click', detectClickOutside);\n      }\n\n      if (focusElement) {\n        focusElement.focus();\n      }\n\n      actions.style.opacity = 1;\n    }, false);\n  });\n})(window, window.document);\n\n//# sourceURL=webpack:///./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/sidebar/extra.actions.js?");

/***/ }),

/***/ 5:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.location.change.language.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/sidebar/extra.actions.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/contenttype.edit.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.state.toggle.js ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! /home/dev/server/pb-demo.v2/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.location.change.language.js */\"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.location.change.language.js\");\n__webpack_require__(/*! /home/dev/server/pb-demo.v2/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/sidebar/extra.actions.js */\"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/sidebar/extra.actions.js\");\n__webpack_require__(/*! /home/dev/server/pb-demo.v2/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/contenttype.edit.js */\"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/contenttype.edit.js\");\nmodule.exports = __webpack_require__(/*! /home/dev/server/pb-demo.v2/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.state.toggle.js */\"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.state.toggle.js\");\n\n\n//# sourceURL=webpack:///multi_./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.location.change.language.js_./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/sidebar/extra.actions.js_./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/contenttype.edit.js_./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.state.toggle.js?");

/***/ })

},[[5,"runtime"]]]);