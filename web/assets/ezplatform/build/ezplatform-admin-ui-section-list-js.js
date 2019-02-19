(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-admin-ui-section-list-js"],{

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.section.list.js":
/*!***********************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.section.list.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function () {\n  var _this = this;\n\n  var btns = document.querySelectorAll('.btn--open-udw');\n  var udwContainer = document.getElementById('react-udw');\n  var token = document.querySelector('meta[name=\"CSRF-Token\"]').content;\n  var siteaccess = document.querySelector('meta[name=\"SiteAccess\"]').content;\n\n  var closeUDW = function closeUDW() {\n    return ReactDOM.unmountComponentAtNode(udwContainer);\n  };\n\n  var onConfirm = function onConfirm(form, content) {\n    var field = form.querySelector('#' + form.getAttribute('name') + '_locations_location');\n    field.value = content.map(function (item) {\n      return item.id;\n    }).join();\n    closeUDW();\n    form.submit();\n  };\n\n  var onCancel = function onCancel() {\n    return closeUDW();\n  };\n\n  var openUDW = function openUDW(event) {\n    event.preventDefault();\n    var form = document.querySelector('form[name=\"section_content_assign\"]');\n    var btn = event.target.closest('a');\n    var config = JSON.parse(btn.dataset.udwConfig);\n    form.action = btn.dataset.formAction;\n    document.querySelector('#section_content_assign_section').value = btn.dataset.sectionId;\n    ReactDOM.render(React.createElement(eZ.modules.UniversalDiscovery, Object.assign({\n      onConfirm: onConfirm.bind(_this, form),\n      onCancel: onCancel,\n      startingLocationId: window.eZ.adminUiConfig.universalDiscoveryWidget.startingLocationId,\n      restInfo: {\n        token: token,\n        siteaccess: siteaccess\n      }\n    }, config)), udwContainer);\n  };\n\n  btns.forEach(function (btn) {\n    return btn.addEventListener('click', openUDW, false);\n  });\n})();\n\n//# sourceURL=webpack:///./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.section.list.js?");

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.state.toggle.js":
/*!************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.state.toggle.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n(function (global, doc) {\n  var toggleForms = _toConsumableArray(doc.querySelectorAll('.ez-toggle-btn-state'));\n\n  toggleForms.forEach(function (toggleForm) {\n    var checkboxes = _toConsumableArray(toggleForm.querySelectorAll('.ez-table__cell.ez-table__cell--has-checkbox input[type=\"checkbox\"]'));\n\n    var buttonRemove = doc.querySelector(toggleForm.dataset.toggleButtonId);\n\n    if (!buttonRemove) {\n      return;\n    }\n\n    var toggleButtonState = function toggleButtonState() {\n      var isAnythingSelected = checkboxes.some(function (el) {\n        return el.checked;\n      });\n      buttonRemove.disabled = !isAnythingSelected;\n    };\n\n    toggleButtonState();\n    checkboxes.forEach(function (checkbox) {\n      return checkbox.addEventListener('change', toggleButtonState, false);\n    });\n  });\n})(window, document);\n\n//# sourceURL=webpack:///./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.state.toggle.js?");

/***/ }),

/***/ 10:
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.section.list.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.state.toggle.js ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! /home/dev/server/pb-demo.v2/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.section.list.js */\"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.section.list.js\");\nmodule.exports = __webpack_require__(/*! /home/dev/server/pb-demo.v2/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.state.toggle.js */\"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.state.toggle.js\");\n\n\n//# sourceURL=webpack:///multi_./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.section.list.js_./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.state.toggle.js?");

/***/ })

},[[10,"runtime"]]]);