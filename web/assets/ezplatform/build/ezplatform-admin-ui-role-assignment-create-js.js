(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-admin-ui-role-assignment-create-js"],{

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.role_assignment.add.js":
/*!******************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.role_assignment.add.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n(function (global, doc) {\n  var _this = this;\n\n  var udwContainer = doc.getElementById('react-udw');\n\n  var limitationsRadio = _toConsumableArray(doc.querySelectorAll('.ez-limitations__radio'));\n\n  var token = doc.querySelector('meta[name=\"CSRF-Token\"]').content;\n  var siteaccess = doc.querySelector('meta[name=\"SiteAccess\"]').content;\n\n  var closeUDW = function closeUDW() {\n    return ReactDOM.unmountComponentAtNode(udwContainer);\n  };\n\n  var selectSubtreeConfirm = function selectSubtreeConfirm(data) {\n    var selectedItems = data.reduce(function (total, item) {\n      return total + \"<li>\".concat(item.ContentInfo.Content.Name, \"</li>\");\n    }, '');\n    doc.querySelector('#role_assignment_create_locations').value = data.map(function (item) {\n      return item.id;\n    }).join();\n    doc.querySelector('.ez-limitations__selected-subtree').innerHTML = selectedItems;\n    closeUDW();\n  };\n\n  var selectSubtree = function selectSubtree(event) {\n    event.preventDefault();\n    var config = JSON.parse(event.currentTarget.dataset.udwConfig);\n    ReactDOM.render(React.createElement(eZ.modules.UniversalDiscovery, Object.assign({\n      onConfirm: selectSubtreeConfirm.bind(_this),\n      onCancel: closeUDW,\n      multiple: true,\n      startingLocationId: window.eZ.adminUiConfig.universalDiscoveryWidget.startingLocationId,\n      restInfo: {\n        token: token,\n        siteaccess: siteaccess\n      }\n    }, config)), udwContainer);\n  };\n\n  var toggleDisabledState = function toggleDisabledState() {\n    limitationsRadio.forEach(function (radio) {\n      var disableNode = doc.querySelector(radio.dataset.disableSelector);\n      var methodName = radio.checked ? 'removeAttribute' : 'setAttribute';\n\n      if (disableNode) {\n        disableNode[methodName]('disabled', 'disabled');\n      }\n    });\n  };\n\n  doc.querySelector('.ez-btn--select-subtree').addEventListener('click', selectSubtree, false);\n  limitationsRadio.forEach(function (radio) {\n    return radio.addEventListener('change', toggleDisabledState, false);\n  });\n})(window, document);\n\n//# sourceURL=webpack:///./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.role_assignment.add.js?");

/***/ }),

/***/ 8:
/*!************************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.role_assignment.add.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /home/dev/server/pb-demo.v2/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.role_assignment.add.js */\"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.role_assignment.add.js\");\n\n\n//# sourceURL=webpack:///multi_./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.role_assignment.add.js?");

/***/ })

},[[8,"runtime"]]]);