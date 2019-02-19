(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-workflow-common-js"],{

/***/ "./vendor/ezsystems/ezplatform-workflow/src/bundle/Resources/public/js/workflow.admin.dashboard.js":
/*!*********************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-workflow/src/bundle/Resources/public/js/workflow.admin.dashboard.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function (global, doc, eZ, $) {\n  var containers = doc.querySelectorAll('.ez-workflow-dashboard-table');\n\n  var showPopup = function showPopup(_ref) {\n    var btn = _ref.currentTarget;\n    var selector = \"[data-workflow-popup=\\\"\".concat(btn.dataset.uiComponent, \"-\").concat(btn.dataset.workflowName, \"-\").concat(btn.dataset.contentId, \"-\").concat(btn.dataset.versionNo, \"\\\"]\");\n    fetch(btn.dataset.src).then(function (response) {\n      return response.text();\n    }).then(function (text) {\n      var $modal = $(selector);\n      $modal[0].querySelector('.modal-body').innerHTML = text;\n      $modal.modal('show');\n      $(doc).one('hidden.bs.modal', function () {\n        return $('.modal-backdrop').hide();\n      });\n    });\n  };\n\n  containers.forEach(function (container) {\n    container.querySelectorAll('.ez-btn--workflow-chart').forEach(function (btn) {\n      btn.addEventListener('click', showPopup, false);\n    });\n  });\n})(window, window.document, window.eZ, window.jQuery);\n\n//# sourceURL=webpack:///./vendor/ezsystems/ezplatform-workflow/src/bundle/Resources/public/js/workflow.admin.dashboard.js?");

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-workflow/src/bundle/Resources/public/js/workflow.transition.apply.widget.js":
/*!*****************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-workflow/src/bundle/Resources/public/js/workflow.transition.apply.widget.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function (global, doc) {\n  var applyTransitionButtons = doc.querySelectorAll('.ez-btn--workflow-apply');\n\n  var applyTransition = function applyTransition(event) {\n    var clickedButton = event.currentTarget;\n    var message = clickedButton.closest('.ez-extra-actions__content').querySelector('.ez-workflow-apply-transition__message-wrapper textarea').value;\n    doc.querySelector('[name=\"ezrepoforms_content_edit[workflow][name]\"]').value = clickedButton.dataset.workflow;\n    doc.querySelector('[name=\"ezrepoforms_content_edit[workflow][transition]\"]').value = clickedButton.dataset.transition;\n    doc.querySelector('[name=\"ezrepoforms_content_edit[workflow][comment]\"]').value = message;\n    doc.querySelector('[name=\"ezrepoforms_content_edit[workflow][apply]\"]').click();\n  };\n\n  if (!applyTransitionButtons.length) {\n    return;\n  }\n\n  applyTransitionButtons.forEach(function (btn) {\n    return btn.addEventListener('click', applyTransition, false);\n  });\n})(window, document);\n\n//# sourceURL=webpack:///./vendor/ezsystems/ezplatform-workflow/src/bundle/Resources/public/js/workflow.transition.apply.widget.js?");

/***/ }),

/***/ 86:
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-workflow/src/bundle/Resources/public/js/workflow.transition.apply.widget.js ./vendor/ezsystems/ezplatform-workflow/src/bundle/Resources/public/js/workflow.admin.dashboard.js ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! /home/dev/server/pb-demo.v2/vendor/ezsystems/ezplatform-workflow/src/bundle/Resources/public/js/workflow.transition.apply.widget.js */\"./vendor/ezsystems/ezplatform-workflow/src/bundle/Resources/public/js/workflow.transition.apply.widget.js\");\nmodule.exports = __webpack_require__(/*! /home/dev/server/pb-demo.v2/vendor/ezsystems/ezplatform-workflow/src/bundle/Resources/public/js/workflow.admin.dashboard.js */\"./vendor/ezsystems/ezplatform-workflow/src/bundle/Resources/public/js/workflow.admin.dashboard.js\");\n\n\n//# sourceURL=webpack:///multi_./vendor/ezsystems/ezplatform-workflow/src/bundle/Resources/public/js/workflow.transition.apply.widget.js_./vendor/ezsystems/ezplatform-workflow/src/bundle/Resources/public/js/workflow.admin.dashboard.js?");

/***/ })

},[[86,"runtime"]]]);