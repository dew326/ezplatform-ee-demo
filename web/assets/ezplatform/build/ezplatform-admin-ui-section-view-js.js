(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-admin-ui-section-view-js"],{

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.section.view.js":
/*!***********************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.section.view.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function () {\n  var _this = this;\n\n  var btns = document.querySelectorAll('.btn--open-udw');\n  var udwContainer = document.getElementById('react-udw');\n  var token = document.querySelector('meta[name=\"CSRF-Token\"]').content;\n  var siteaccess = document.querySelector('meta[name=\"SiteAccess\"]').content;\n\n  var closeUDW = function closeUDW() {\n    return ReactDOM.unmountComponentAtNode(udwContainer);\n  };\n\n  var onConfirm = function onConfirm(form, content) {\n    var field = form.querySelector('#' + form.getAttribute('name') + '_locations_location');\n    field.value = content.map(function (item) {\n      return item.id;\n    }).join();\n    closeUDW();\n    form.submit();\n  };\n\n  var onCancel = function onCancel() {\n    return closeUDW();\n  };\n\n  var openUDW = function openUDW(event) {\n    event.preventDefault();\n    var form = event.target.closest('form');\n    var config = JSON.parse(event.currentTarget.dataset.udwConfig);\n    ReactDOM.render(React.createElement(eZ.modules.UniversalDiscovery, Object.assign({\n      onConfirm: onConfirm.bind(_this, form),\n      onCancel: onCancel,\n      startingLocationId: window.eZ.adminUiConfig.universalDiscoveryWidget.startingLocationId,\n      restInfo: {\n        token: token,\n        siteaccess: siteaccess\n      }\n    }, config)), udwContainer);\n  };\n\n  btns.forEach(function (btn) {\n    return btn.addEventListener('click', openUDW, false);\n  });\n})();\n\n//# sourceURL=webpack:///./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.section.view.js?");

/***/ }),

/***/ 11:
/*!*****************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.section.view.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /home/dev/server/pb-demo.v2/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.section.view.js */\"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.section.view.js\");\n\n\n//# sourceURL=webpack:///multi_./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.section.view.js?");

/***/ })

},[[11,"runtime"]]]);