(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-admin-ui-content-preview-js"],{

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.preview.js":
/*!******************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.preview.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n(function (global, doc) {\n  var CLASS_BTN_SELECTED = 'ez-preview__action--selected';\n  var SELECTOR_BTN_ACTION = '.ez-preview__action';\n  var SELECTOR_PREVIEW_SITEACCESS_SELECT = '.ez-preview__item--siteaccess select';\n\n  var removeSelectedState = function removeSelectedState() {\n    return _toConsumableArray(doc.querySelectorAll(SELECTOR_BTN_ACTION)).forEach(function (btn) {\n      return btn.classList.remove(CLASS_BTN_SELECTED);\n    });\n  };\n\n  var changePreviewMode = function changePreviewMode(event) {\n    var btn = event.target.closest(SELECTOR_BTN_ACTION);\n    var iframeWrapper = doc.querySelector('.ez-preview__iframe');\n    removeSelectedState();\n    btn.classList.add(CLASS_BTN_SELECTED);\n    iframeWrapper.classList.remove('ez-preview__iframe--desktop', 'ez-preview__iframe--tablet', 'ez-preview__iframe--mobile');\n    iframeWrapper.classList.add(\"ez-preview__iframe--\".concat(btn.dataset.previewMode));\n  };\n\n  var changePreviewSiteaccess = function changePreviewSiteaccess(event) {\n    var iframeWrapper = doc.querySelector('.ez-preview__iframe iframe');\n    var siteaccessPreviewUrl = event.target.value;\n    iframeWrapper.setAttribute('src', siteaccessPreviewUrl);\n  };\n\n  _toConsumableArray(doc.querySelectorAll(SELECTOR_BTN_ACTION)).forEach(function (btn) {\n    return btn.addEventListener('click', changePreviewMode, false);\n  });\n\n  _toConsumableArray(doc.querySelectorAll(SELECTOR_PREVIEW_SITEACCESS_SELECT)).forEach(function (select) {\n    return select.addEventListener('change', changePreviewSiteaccess, false);\n  });\n})(window, document);\n\n//# sourceURL=webpack:///./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.preview.js?");

/***/ }),

/***/ 13:
/*!************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.preview.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /home/dev/server/pb-demo.v2/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.preview.js */\"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.preview.js\");\n\n\n//# sourceURL=webpack:///multi_./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.preview.js?");

/***/ })

},[[13,"runtime"]]]);