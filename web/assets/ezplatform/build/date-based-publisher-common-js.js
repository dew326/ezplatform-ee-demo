(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-based-publisher-common-js"],{

/***/ "./vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/future.scheduling.js":
/*!***********************************************************************************************!*\
  !*** ./vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/future.scheduling.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function (global, doc) {\n  var SELECTOR_INPUT = '.dbp-publish-later__pick-input';\n  var flatpickrInput = doc.querySelector('.flatpickr-date-input');\n  var confirmBtn = doc.querySelector('.ez-btn--confirm-schedule');\n\n  var updateValue = function updateValue(dates) {\n    var isSelectedDate = !!dates[0];\n    var selectedDate = isSelectedDate ? dates[0].getTime() / 1000 : '';\n    var hiddenMethodName = isSelectedDate ? 'removeAttribute' : 'setAttribute';\n    doc.querySelector(SELECTOR_INPUT).setAttribute('data-time', selectedDate);\n    doc.querySelector('.dbp-publish-later__actions')[hiddenMethodName]('hidden', 'hidden');\n  };\n\n  var submitForm = function submitForm() {\n    var timestamp = doc.querySelector(SELECTOR_INPUT).dataset.time;\n    doc.querySelector('[name=\"ezrepoforms_content_edit[date_based_publisher][timestamp]\"]').value = timestamp;\n    doc.querySelector('[name=\"ezrepoforms_content_edit[schedule_publish]\"]').click();\n  };\n\n  if (!confirmBtn) {\n    return;\n  }\n\n  flatpickr(flatpickrInput, {\n    enableTime: true,\n    time_24hr: true,\n    formatDate: function formatDate(date) {\n      return new Date(date).toLocaleString();\n    },\n    minDate: Date.now(),\n    onChange: updateValue,\n    inline: true\n  });\n  confirmBtn.addEventListener('click', submitForm, false);\n})(window, document);\n\n//# sourceURL=webpack:///./vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/future.scheduling.js?");

/***/ }),

/***/ "./vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/timeline.event.listener.js":
/*!*****************************************************************************************************!*\
  !*** ./vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/timeline.event.listener.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function (global, doc, eZ) {\n  var refreshPreview = function refreshPreview(event) {\n    var latestPublishLaterEventInRange;\n    var latestPublishLaterEventBeforeRange;\n    var _event$detail = event.detail,\n        newTimestamp = _event$detail.newTimestamp,\n        oldTimestamp = _event$detail.oldTimestamp,\n        events = _event$detail.events;\n    var isSetToFuture = newTimestamp > oldTimestamp;\n    var now = new Date().getTime();\n    var publishLaterEventsInRange = [];\n    var publishLaterEventsBeforeRange = [];\n\n    var findLatestEvent = function findLatestEvent(latestEvent, event) {\n      return latestEvent.date < event.date ? event : latestEvent;\n    };\n\n    events.forEach(function (event) {\n      var isPublishLaterEvent = event.type === 'future_publication';\n\n      if (!isPublishLaterEvent) {\n        return;\n      }\n\n      var timestamp = event.date * 1000;\n      var isBeforeTimeRange = isSetToFuture ? timestamp >= now && timestamp <= oldTimestamp : timestamp >= now && timestamp <= newTimestamp;\n      var isInTimeRange = isSetToFuture ? timestamp > oldTimestamp && timestamp <= newTimestamp : timestamp <= oldTimestamp && timestamp > newTimestamp;\n\n      if (isInTimeRange) {\n        publishLaterEventsInRange.push(event);\n      } else if (isBeforeTimeRange) {\n        publishLaterEventsBeforeRange.push(event);\n      }\n    });\n\n    if (!publishLaterEventsInRange.length) {\n      return;\n    }\n\n    if (publishLaterEventsInRange.length) {\n      latestPublishLaterEventInRange = publishLaterEventsInRange.reduce(findLatestEvent);\n    }\n\n    if (publishLaterEventsBeforeRange.length) {\n      latestPublishLaterEventBeforeRange = publishLaterEventsBeforeRange.reduce(findLatestEvent);\n    }\n\n    var latestPublishLaterEvent = isSetToFuture ? latestPublishLaterEventInRange : latestPublishLaterEventBeforeRange;\n    global.location = global.Routing.generate('ezplatform.page_builder.location_preview', {\n      locationId: eZ.pageBuilder.data.locationId,\n      languageCode: eZ.pageBuilder.data.languageCode,\n      versionNo: latestPublishLaterEvent ? latestPublishLaterEvent.futureVersionNo : eZ.pageBuilder.data.publishedVersionNo,\n      siteaccessName: eZ.pageBuilder.data.siteaccess,\n      reference_timestamp: Math.floor(newTimestamp / 1000)\n    }, true);\n  };\n\n  doc.body.addEventListener('ez-timestamp-changed', refreshPreview, false);\n})(window, document, window.eZ);\n\n//# sourceURL=webpack:///./vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/timeline.event.listener.js?");

/***/ }),

/***/ 80:
/*!***************************************************************************************************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/future.scheduling.js ./vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/timeline.event.listener.js ***!
  \***************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! /home/dev/server/pb-demo.v2/vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/future.scheduling.js */\"./vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/future.scheduling.js\");\nmodule.exports = __webpack_require__(/*! /home/dev/server/pb-demo.v2/vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/timeline.event.listener.js */\"./vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/timeline.event.listener.js\");\n\n\n//# sourceURL=webpack:///multi_./vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/future.scheduling.js_./vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/timeline.event.listener.js?");

/***/ })

},[[80,"runtime"]]]);