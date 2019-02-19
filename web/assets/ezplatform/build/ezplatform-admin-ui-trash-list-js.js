(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-admin-ui-trash-list-js"],{

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.trash.list.js":
/*!*********************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.trash.list.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n(function (global, doc, eZ, React, ReactDOM, Translator) {\n  var _this = this;\n\n  var btns = doc.querySelectorAll('.btn--open-udw');\n  var udwContainer = doc.getElementById('react-udw');\n  var token = doc.querySelector('meta[name=\"CSRF-Token\"]').content;\n  var siteaccess = doc.querySelector('meta[name=\"SiteAccess\"]').content;\n\n  var closeUDW = function closeUDW() {\n    return ReactDOM.unmountComponentAtNode(udwContainer);\n  };\n\n  var onConfirm = function onConfirm(form, content) {\n    var field = form.querySelector('#trash_item_restore_location_location');\n    field.value = content.map(function (item) {\n      return item.id;\n    }).join();\n    closeUDW();\n    form.submit();\n  };\n\n  var onCancel = function onCancel() {\n    return closeUDW();\n  };\n\n  var openUDW = function openUDW(event) {\n    event.preventDefault();\n    var form = event.target.closest('form[name=\"trash_item_restore\"]');\n    var config = JSON.parse(event.currentTarget.dataset.udwConfig);\n    var title = Translator.trans(\n    /*@Desc(\"Select a location to restore you content item(s)\")*/\n    'restore_under_new_location.title', {}, 'universal_discovery_widget');\n    ReactDOM.render(React.createElement(eZ.modules.UniversalDiscovery, Object.assign({\n      onConfirm: onConfirm.bind(_this, form),\n      onCancel: onCancel,\n      title: title,\n      startingLocationId: eZ.adminUiConfig.universalDiscoveryWidget.startingLocationId,\n      allowContainersOnly: true,\n      restInfo: {\n        token: token,\n        siteaccess: siteaccess\n      },\n      multiple: false\n    }, config)), udwContainer);\n  };\n\n  btns.forEach(function (btn) {\n    return btn.addEventListener('click', openUDW, false);\n  });\n\n  var checkboxes = _toConsumableArray(doc.querySelectorAll('form[name=\"trash_item_restore\"] input[type=\"checkbox\"]'));\n\n  var buttonRestore = doc.querySelector('#trash_item_restore_restore');\n  var buttonRestoreUnderNewParent = doc.querySelector('#trash_item_restore_location_select_content');\n  var buttonDelete = doc.querySelector('#delete-trash-items');\n\n  var enableButtons = function enableButtons() {\n    var isEmptySelection = checkboxes.every(function (el) {\n      return !el.checked;\n    });\n    var isMissingParent = checkboxes.some(function (el) {\n      return el.checked && parseInt(el.dataset.isParentInTrash, 10) === 1;\n    });\n\n    if (buttonRestore) {\n      buttonRestore.disabled = isEmptySelection || isMissingParent;\n    }\n\n    if (buttonDelete) {\n      buttonDelete.disabled = isEmptySelection;\n    }\n\n    if (buttonRestoreUnderNewParent) {\n      buttonRestoreUnderNewParent.disabled = isEmptySelection;\n    }\n  };\n\n  var updateTrashForm = function updateTrashForm(checkboxes) {\n    checkboxes.forEach(function (checkbox) {\n      var trashFormCheckbox = doc.querySelector('form[name=\"trash_item_delete\"] input[type=\"checkbox\"][value=\"' + checkbox.value + '\"]');\n\n      if (trashFormCheckbox) {\n        trashFormCheckbox.checked = checkbox.checked;\n      }\n    });\n  };\n\n  var handleCheckboxChange = function handleCheckboxChange(event) {\n    updateTrashForm([event.target]);\n    enableButtons();\n  };\n\n  updateTrashForm(checkboxes);\n  enableButtons();\n  checkboxes.forEach(function (checkbox) {\n    return checkbox.addEventListener('change', handleCheckboxChange, false);\n  });\n})(window, document, window.eZ, window.React, window.ReactDOM, window.Translator);\n\n//# sourceURL=webpack:///./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.trash.list.js?");

/***/ }),

/***/ 12:
/*!***************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.trash.list.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /home/dev/server/pb-demo.v2/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.trash.list.js */\"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.trash.list.js\");\n\n\n//# sourceURL=webpack:///multi_./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.trash.list.js?");

/***/ })

},[[12,"runtime"]]]);