"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Speaker.js":
/*!***********************************!*\
  !*** ./src/components/Speaker.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_React_ReactList_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\React\\ReactList\\src\\components\\Speaker.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_React_ReactList_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Session(_ref) {
  var title = _ref.title,
      room = _ref.room;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
    className: "session w-100",
    children: [title, "  ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("strong", {
      children: ["Room: ", room.name]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 18
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

_c = Session;

function Sessions(_ref2) {
  var sessions = _ref2.sessions;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "sessionBox card h-250",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Session, _objectSpread({}, sessions[0]), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, this);
}

_c2 = Sessions;

function SpeakerImage(_ref3) {
  var id = _ref3.id,
      first = _ref3.first,
      last = _ref3.last;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "speaker-img d-flex flex-row justify-content-center align-items-center h-300",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
      className: "contain-fit",
      src: "/images/speaker-".concat(id, ".jpg"),
      width: "300",
      alt: "".concat(first, " ").concat(last)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 25
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }, this);
}

_c3 = SpeakerImage;

function SpeakerDemographics(_ref4) {
  var first = _ref4.first,
      last = _ref4.last,
      bio = _ref4.bio,
      company = _ref4.company,
      twitterHandle = _ref4.twitterHandle,
      favorite = _ref4.favorite;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "speaker-info",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "d-flex justify-content-between mb-3",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
        className: "text-truncate w-200",
        children: [first, " ", last]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        className: "card-description",
        children: [bio, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "social d-flex flex-row mt-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "company",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h5", {
            children: "Company"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h6", {
            children: company
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "twitter",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h5", {
            children: "Twitter"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h6", {
            children: twitterHandle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 6
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 9
  }, this);
}

_c4 = SpeakerDemographics;

function Speaker(_ref5) {
  var speaker = _ref5.speaker;
  var id = speaker.id,
      first = speaker.first,
      last = speaker.last,
      sessions = speaker.sessions;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "card card-height p-4 mt-4",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SpeakerImage, {
        id: id,
        first: first,
        last: last
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SpeakerDemographics, _objectSpread({}, speaker), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Sessions, {
      sessions: sessions
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 9
  }, this);
}

_c5 = Speaker;
/* harmony default export */ __webpack_exports__["default"] = (Speaker);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "Session");
$RefreshReg$(_c2, "Sessions");
$RefreshReg$(_c3, "SpeakerImage");
$RefreshReg$(_c4, "SpeakerDemographics");
$RefreshReg$(_c5, "Speaker");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDU4Mjg0ZDNhM2M4NWNhNDE3YzMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsU0FBU0EsT0FBVCxPQUErQjtBQUFBLE1BQWJDLEtBQWEsUUFBYkEsS0FBYTtBQUFBLE1BQU5DLElBQU0sUUFBTkEsSUFBTTtBQUUzQixzQkFDSTtBQUFNLGFBQVMsRUFBQyxlQUFoQjtBQUFBLGVBQ0NELEtBREQscUJBQ1M7QUFBQSwyQkFBZUMsSUFBSSxDQUFDQyxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQUtIOztLQVBRSDs7QUFVVCxTQUFVSSxRQUFWLFFBQThCO0FBQUEsTUFBVkMsUUFBVSxTQUFWQSxRQUFVO0FBQzFCLHNCQUNJO0FBQUssYUFBUyxFQUFDLHVCQUFmO0FBQUEsMkJBQ0EsOERBQUMsT0FBRCxvQkFBY0EsUUFBUSxDQUFDLENBQUQsQ0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQU9IOztNQVJTRDs7QUFVVixTQUFTRSxZQUFULFFBQXdDO0FBQUEsTUFBakJDLEVBQWlCLFNBQWpCQSxFQUFpQjtBQUFBLE1BQWJDLEtBQWEsU0FBYkEsS0FBYTtBQUFBLE1BQU5DLElBQU0sU0FBTkEsSUFBTTtBQUNwQyxzQkFDSTtBQUFLLGFBQVMsRUFBQyw2RUFBZjtBQUFBLDJCQUNnQjtBQUNJLGVBQVMsRUFBQyxhQURkO0FBRUksU0FBRyw0QkFBcUJGLEVBQXJCLFNBRlA7QUFHSSxXQUFLLEVBQUMsS0FIVjtBQUlJLFNBQUcsWUFBS0MsS0FBTCxjQUFjQyxJQUFkO0FBSlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFVSDs7TUFYUUg7O0FBYVQsU0FBU0ksbUJBQVQsUUFBaUY7QUFBQSxNQUFuREYsS0FBbUQsU0FBbkRBLEtBQW1EO0FBQUEsTUFBN0NDLElBQTZDLFNBQTdDQSxJQUE2QztBQUFBLE1BQXZDRSxHQUF1QyxTQUF2Q0EsR0FBdUM7QUFBQSxNQUFsQ0MsT0FBa0MsU0FBbENBLE9BQWtDO0FBQUEsTUFBekJDLGFBQXlCLFNBQXpCQSxhQUF5QjtBQUFBLE1BQVZDLFFBQVUsU0FBVkEsUUFBVTtBQUM3RSxzQkFDSTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUEsNEJBQ0E7QUFBSyxlQUFTLEVBQUMscUNBQWY7QUFBQSw2QkFDQTtBQUFJLGlCQUFTLEVBQUMscUJBQWQ7QUFBQSxtQkFDS04sS0FETCxPQUNhQyxJQURiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxlQU1IO0FBQUEsOEJBQ0c7QUFBRyxpQkFBUyxFQUFDLGtCQUFiO0FBQUEsbUJBQ0tFLEdBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREgsZUFHTztBQUFLLGlCQUFTLEVBQUMsNkJBQWY7QUFBQSxnQ0FDSTtBQUFLLG1CQUFTLEVBQUMsU0FBZjtBQUFBLGtDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUk7QUFBQSxzQkFBS0M7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQU1JO0FBQUssbUJBQVMsRUFBQyxTQUFmO0FBQUEsa0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSTtBQUFBLHNCQUFLQztBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5HO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBMEJIOztNQTNCUUg7O0FBNkJULFNBQVNLLE9BQVQsUUFBMkI7QUFBQSxNQUFUQyxPQUFTLFNBQVRBLE9BQVM7QUFBQSxNQUNoQlQsRUFEZ0IsR0FDYVMsT0FEYixDQUNoQlQsRUFEZ0I7QUFBQSxNQUNaQyxLQURZLEdBQ2FRLE9BRGIsQ0FDWlIsS0FEWTtBQUFBLE1BQ0xDLElBREssR0FDYU8sT0FEYixDQUNMUCxJQURLO0FBQUEsTUFDQ0osUUFERCxHQUNhVyxPQURiLENBQ0NYLFFBREQ7QUFFdkIsc0JBQ0k7QUFBTyxhQUFTLEVBQUMsMkRBQWpCO0FBQUEsNEJBQ0E7QUFBSyxlQUFTLEVBQUMsMkJBQWY7QUFBQSw4QkFDSSw4REFBQyxZQUFEO0FBQWMsVUFBRSxFQUFFRSxFQUFsQjtBQUFzQixhQUFLLEVBQUVDLEtBQTdCO0FBQW9DLFlBQUksRUFBRUM7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUksOERBQUMsbUJBQUQsb0JBQTJCTyxPQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREEsZUFLQSw4REFBQyxRQUFEO0FBQVUsY0FBUSxFQUFJWDtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFXSDs7TUFiUVU7QUFlVCwrREFBZUEsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TcGVha2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuZnVuY3Rpb24gU2Vzc2lvbih7dGl0bGUsIHJvb219KXtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlc3Npb24gdy0xMDBcIj5cclxuICAgICAgICB7dGl0bGV9ICA8c3Ryb25nPlJvb206IHtyb29tLm5hbWV9PC9zdHJvbmc+XHJcbiAgICAgPC9zcGFuPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gIFNlc3Npb25zKHtzZXNzaW9uc30pe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vzc2lvbkJveCBjYXJkIGgtMjUwXCI+XHJcbiAgICAgICAgPFNlc3Npb24gey4uLiBzZXNzaW9uc1swXX0gLz5cclxuICAgICAgIFxyXG5cclxuICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSAgIFxyXG5cclxuZnVuY3Rpb24gU3BlYWtlckltYWdlKHtpZCwgZmlyc3QsIGxhc3R9KXtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwZWFrZXItaW1nIGQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBoLTMwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbi1maXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltYWdlcy9zcGVha2VyLSR7aWR9LmpwZ2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2Ake2ZpcnN0fSAke2xhc3R9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBTcGVha2VyRGVtb2dyYXBoaWNzKHtmaXJzdCxsYXN0LCBiaW8sIGNvbXBhbnksIHR3aXR0ZXJIYW5kbGUsIGZhdm9yaXRlfSl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGVha2VyLWluZm9cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtYi0zXCI+IFxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXRydW5jYXRlIHctMjAwXCI+XHJcbiAgICAgICAgICAgIHtmaXJzdH0ge2xhc3R9XHJcbiAgICAgICAgPC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICA8ZGl2PlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAge2Jpb30gPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbCBkLWZsZXggZmxleC1yb3cgbXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYW55XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1PkNvbXBhbnk8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNj57Y29tcGFueX08L2g2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0d2l0dGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1PlR3aXR0ZXI8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNj57dHdpdHRlckhhbmRsZX08L2g2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNwZWFrZXIoe3NwZWFrZXJ9KXtcclxuICAgIGNvbnN0IHtpZCwgZmlyc3QsIGxhc3QsIHNlc3Npb25zfSA9IHNwZWFrZXI7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDwgIGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy00IGNvbC1zbS0xMiBjb2wteHMtMTJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1oZWlnaHQgcC00IG10LTRcIj4gXHJcbiAgICAgICAgICAgIDxTcGVha2VySW1hZ2UgaWQ9e2lkfSBmaXJzdD17Zmlyc3R9IGxhc3Q9e2xhc3R9IC8+XHJcbiAgICAgICAgICAgIDxTcGVha2VyRGVtb2dyYXBoaWNzIHsgLi4uIHNwZWFrZXJ9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPFNlc3Npb25zIHNlc3Npb25zID0ge3Nlc3Npb25zfSAvPlxyXG4gIFxyXG5cclxuPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXI7Il0sIm5hbWVzIjpbIlNlc3Npb24iLCJ0aXRsZSIsInJvb20iLCJuYW1lIiwiU2Vzc2lvbnMiLCJzZXNzaW9ucyIsIlNwZWFrZXJJbWFnZSIsImlkIiwiZmlyc3QiLCJsYXN0IiwiU3BlYWtlckRlbW9ncmFwaGljcyIsImJpbyIsImNvbXBhbnkiLCJ0d2l0dGVySGFuZGxlIiwiZmF2b3JpdGUiLCJTcGVha2VyIiwic3BlYWtlciJdLCJzb3VyY2VSb290IjoiIn0=