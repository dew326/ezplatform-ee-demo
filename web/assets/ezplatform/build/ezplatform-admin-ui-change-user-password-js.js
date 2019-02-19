(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-admin-ui-change-user-password-js"],{

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/user_password.change.js":
/*!*************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/user_password.change.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n(function (global, doc) {\n  var form = doc.querySelector('form[name=\"user_password_change\"]');\n  var submitBtns = form.querySelectorAll('[type=\"submit\"]:not([formnovalidate])');\n  var oldPasswordInput = form.querySelector('#user_password_change_oldPassword');\n  var newPasswordInput = form.querySelector('#user_password_change_newPassword_first');\n  var confirmPasswordInput = form.querySelector('#user_password_change_newPassword_second');\n  var SELECTOR_FIELD = '.ez-field';\n  var SELECTOR_LABEL = '.ez-field__label';\n  var SELECTOR_LABEL_WRAPPER = '.ez-field__label-wrapper';\n  var CLASS_INVALID = 'is-invalid';\n  /**\n   * Creates an error node\n   *\n   * @method createErrorNode\n   * @param {String} message\n   * @returns {HTMLElement}\n   */\n\n  var createErrorNode = function createErrorNode(message) {\n    var errorNode = doc.createElement('em');\n    errorNode.classList.add('ez-field__error');\n    errorNode.innerHTML = message;\n    return errorNode;\n  };\n  /**\n   * Toggles the error\n   *\n   * @method toggleError\n   * @param {Boolean} isError\n   * @param {String} message\n   * @param {HTMLElement} target\n   */\n\n\n  var toggleError = function toggleError(isError, message, target) {\n    var methodName = isError ? 'add' : 'remove';\n    var field = target.closest(SELECTOR_FIELD);\n    var labelWrapper = field.querySelector(SELECTOR_LABEL_WRAPPER);\n\n    var errorNodes = _toConsumableArray(labelWrapper.querySelectorAll('.ez-field__error'));\n\n    field.classList[methodName](CLASS_INVALID);\n    target.classList[methodName](CLASS_INVALID);\n    errorNodes.forEach(function (el) {\n      return el.remove();\n    });\n\n    if (isError) {\n      labelWrapper.append(createErrorNode(message));\n    }\n  };\n  /**\n   * Compares passwords\n   *\n   * @method comparePasswords\n   * @return {Boolean}\n   */\n\n\n  var comparePasswords = function comparePasswords() {\n    var newPassword = newPasswordInput.value.trim();\n    var confirmPassword = confirmPasswordInput.value.trim();\n    var isNotEmptyPassword = checkIsNotEmpty(newPasswordInput) && checkIsNotEmpty(confirmPasswordInput);\n    var passwordMatch = newPassword === confirmPassword;\n    var message = global.eZ.errors.notSamePasswords;\n\n    if (!passwordMatch) {\n      toggleError(!passwordMatch, message, confirmPasswordInput);\n    }\n\n    return passwordMatch && isNotEmptyPassword;\n  };\n  /**\n   * Checks if input has not empty value\n   *\n   * @method checkIsNotEmpty\n   * @param {HTMLElement} target\n   * @return {Boolean}\n   */\n\n\n  var checkIsNotEmpty = function checkIsNotEmpty(target) {\n    var isRequired = target.required;\n    var isEmpty = !target.value.trim();\n    var isError = isRequired && isEmpty;\n    var fieldContainer = target.closest(SELECTOR_FIELD);\n    var message = global.eZ.errors.emptyField.replace('{fieldName}', fieldContainer.querySelector(SELECTOR_LABEL).innerHTML);\n    toggleError(isError, message, target);\n    return !isError;\n  };\n\n  form.setAttribute('novalidate', true);\n  submitBtns.forEach(function (btn) {\n    var clickHandler = function clickHandler(event) {\n      if (!parseInt(btn.dataset.isFormValid, 10)) {\n        event.preventDefault();\n\n        var requiredFields = _toConsumableArray(form.querySelectorAll('.ez-field input[required]'));\n\n        var isFormValid = requiredFields.map(checkIsNotEmpty).every(function (result) {\n          return result;\n        }) && comparePasswords();\n\n        if (isFormValid) {\n          btn.dataset.isFormValid = 1; // for some reason trying to fire click event inside the event handler flow is impossible\n          // the following line breaks the flow so it's possible to fire click event on a button again.\n\n          global.setTimeout(function () {\n            return btn.click();\n          }, 0);\n        }\n      }\n    };\n\n    btn.dataset.isFormValid = 0;\n    btn.addEventListener('click', clickHandler, false);\n  });\n  oldPasswordInput.addEventListener('blur', function (event) {\n    return checkIsNotEmpty(event.currentTarget);\n  }, false);\n  newPasswordInput.addEventListener('blur', function (event) {\n    return checkIsNotEmpty(event.currentTarget);\n  }, false);\n  confirmPasswordInput.addEventListener('blur', function (event) {\n    return checkIsNotEmpty(event.currentTarget);\n  }, false);\n  confirmPasswordInput.addEventListener('blur', comparePasswords, false);\n})(window, document);\n\n//# sourceURL=webpack:///./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/user_password.change.js?");

/***/ }),

/***/ 20:
/*!*******************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/user_password.change.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /home/dev/server/pb-demo.v2/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/user_password.change.js */\"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/user_password.change.js\");\n\n\n//# sourceURL=webpack:///multi_./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/user_password.change.js?");

/***/ })

},[[20,"runtime"]]]);