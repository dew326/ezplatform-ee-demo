(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-page-builder-create-js"],{

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/page.builder.create.js":
/*!********************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/page.builder.create.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n(function (doc, React, ReactDOM, eZ) {\n  var SELECTOR_FIELD = '.ez-field-edit--ezlandingpage';\n  var pageBuilderContainer = doc.querySelector('#ez-page-builder-root'); // eslint-disable-next-line\n\n  var infobar = new eZ.modules.InfoBar({\n    isCreateMode: true\n  });\n  var pageBuilderConfig = Object.assign({}, eZ.pageBuilder.config, {\n    isCreateMode: true\n  }); // eslint-disable-next-line\n\n  var pageBuilder = ReactDOM.render(React.createElement(eZ.modules.PageBuilder, pageBuilderConfig), pageBuilderContainer);\n  var validator = new eZ.EzLandingPageValidator({\n    classInvalid: 'is-invalid',\n    pageBuilder: pageBuilder,\n    fieldSelector: SELECTOR_FIELD,\n    eventsMap: [{\n      selector: '#ezrepoforms_content_edit_fieldsData_page_value',\n      eventName: 'change',\n      callback: 'validateInput',\n      errorNodeSelectors: ['.ez-field-edit__label-wrapper']\n    }]\n  });\n  validator.init();\n  eZ.fieldTypeValidators = eZ.fieldTypeValidators ? [].concat(_toConsumableArray(eZ.fieldTypeValidators), [validator]) : [validator];\n})(window.document, window.React, window.ReactDOM, window.eZ);\n\n//# sourceURL=webpack:///./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/page.builder.create.js?");

/***/ }),

/***/ 42:
/*!**************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/page.builder.create.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /home/dev/server/pb-demo.v2/vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/page.builder.create.js */\"./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/page.builder.create.js\");\n\n\n//# sourceURL=webpack:///multi_./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/page.builder.create.js?");

/***/ })

},[[42,"runtime"]]]);