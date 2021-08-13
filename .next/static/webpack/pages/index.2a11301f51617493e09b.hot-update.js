"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SpeakerData */ "./SpeakerData.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\React\\Project\\pages\\index.js",
    _this = undefined;



function Session(title, room) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
    className: "session w-100",
    children: [title, "  ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
      children: ["Room: ", room]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 18
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, this);
}

_c = Session;

function Sessions(_ref) {
  var sessions = _ref.sessions;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "sessionBox card h-250",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Session, {
      sessions: sessions[0]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, this);
}

_c2 = Sessions;

var IndexPage = function IndexPage() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container speaker-list",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "row",
      children: _SpeakerData__WEBPACK_IMPORTED_MODULE_1__.data.map(function (speaker) {
        var id = speaker.id,
            bio = speaker.bio,
            first = speaker.first,
            last = speaker.last,
            favorite = speaker.favorite,
            twitterHandle = speaker.twitterHandle,
            company = speaker.company,
            sessions = speaker.sessions;
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "card card-height p-4 mt-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "speaker-img d-flex flex-row justify-content-center align-items-center h-300",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                className: "contain-fit",
                src: "/images/speaker-".concat(id, ".jpg"),
                width: "300",
                alt: "".concat(first, " ").concat(last)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "speaker-info",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "d-flex justify-content-between mb-3",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                  className: "text-truncate w-200",
                  children: [first, " ", last]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 46,
                  columnNumber: 29
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                children: [bio, " ", company, " ", twitterHandle, " ", favorite, " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 26
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sessions, {
            sessions: sessions
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 30
        }, this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 12
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 9
  }, _this);
};

_c3 = IndexPage;
/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

var _c, _c2, _c3;

$RefreshReg$(_c, "Session");
$RefreshReg$(_c2, "Sessions");
$RefreshReg$(_c3, "IndexPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmExMTMwMWY1MTYxNzQ5M2UwOWIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBRUEsU0FBU0MsT0FBVCxDQUFpQkMsS0FBakIsRUFBd0JDLElBQXhCLEVBQTZCO0FBRXpCLHNCQUNJO0FBQU0sYUFBUyxFQUFDLGVBQWhCO0FBQUEsZUFDQ0QsS0FERCxxQkFDUztBQUFBLDJCQUFlQyxJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBS0g7O0tBUFFGOztBQVVULFNBQVVHLFFBQVYsT0FBOEI7QUFBQSxNQUFWQyxRQUFVLFFBQVZBLFFBQVU7QUFDMUIsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsdUJBQWY7QUFBQSwyQkFDQSw4REFBQyxPQUFEO0FBQVMsY0FBUSxFQUFFQSxRQUFRLENBQUMsQ0FBRDtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBT0g7O01BUlNEOztBQVdWLElBQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQUs7QUFHbkIsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsd0JBQWY7QUFBQSwyQkFDRztBQUFLLGVBQVMsRUFBQyxLQUFmO0FBQUEsZ0JBQ0tOLGtEQUFBLENBQVMsVUFBU1EsT0FBVCxFQUFpQjtBQUFBLFlBQ2ZDLEVBRGUsR0FDcURELE9BRHJELENBQ2ZDLEVBRGU7QUFBQSxZQUNYQyxHQURXLEdBQ3FERixPQURyRCxDQUNYRSxHQURXO0FBQUEsWUFDTkMsS0FETSxHQUNxREgsT0FEckQsQ0FDTkcsS0FETTtBQUFBLFlBQ0NDLElBREQsR0FDcURKLE9BRHJELENBQ0NJLElBREQ7QUFBQSxZQUNPQyxRQURQLEdBQ3FETCxPQURyRCxDQUNPSyxRQURQO0FBQUEsWUFDaUJDLGFBRGpCLEdBQ3FETixPQURyRCxDQUNpQk0sYUFEakI7QUFBQSxZQUNnQ0MsT0FEaEMsR0FDcURQLE9BRHJELENBQ2dDTyxPQURoQztBQUFBLFlBQ3lDVixRQUR6QyxHQUNxREcsT0FEckQsQ0FDeUNILFFBRHpDO0FBRXRCLDRCQUNTO0FBQUssbUJBQVMsRUFBQywyREFBZjtBQUFBLGtDQUNUO0FBQUsscUJBQVMsRUFBQywyQkFBZjtBQUFBLG9DQUNJO0FBQUssdUJBQVMsRUFBQyw2RUFBZjtBQUFBLHFDQUNBO0FBQ0kseUJBQVMsRUFBQyxhQURkO0FBRUksbUJBQUcsNEJBQXFCSSxFQUFyQixTQUZQO0FBR0kscUJBQUssRUFBQyxLQUhWO0FBSUksbUJBQUcsWUFBS0UsS0FBTCxjQUFjQyxJQUFkO0FBSlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFTSTtBQUFLLHVCQUFTLEVBQUMsY0FBZjtBQUFBLHFDQUNJO0FBQUsseUJBQVMsRUFBQyxxQ0FBZjtBQUFBLHVDQUNBO0FBQUksMkJBQVMsRUFBQyxxQkFBZDtBQUFBLDZCQUNLRCxLQURMLE9BQ2FDLElBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBVEosZUFnQks7QUFBQSxxQ0FDRztBQUFBLDJCQUFJRixHQUFKLE9BQVVLLE9BQVYsT0FBb0JELGFBQXBCLE9BQW9DRCxRQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWhCTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRFMsZUFxQlQsOERBQUMsUUFBRDtBQUFVLG9CQUFRLEVBQUlSO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBckJTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEVDtBQTRCSixPQTlCQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUF1Q0gsQ0ExQ0Q7O01BQU1DO0FBNENOLCtEQUFlQSxTQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQge2RhdGF9IGZyb20gXCIuLi9TcGVha2VyRGF0YVwiO1xyXG5cclxuZnVuY3Rpb24gU2Vzc2lvbih0aXRsZSwgcm9vbSl7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZXNzaW9uIHctMTAwXCI+XHJcbiAgICAgICAge3RpdGxlfSAgPHN0cm9uZz5Sb29tOiB7cm9vbX08L3N0cm9uZz5cclxuICAgICA8L3NwYW4+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiAgU2Vzc2lvbnMoe3Nlc3Npb25zfSl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uQm94IGNhcmQgaC0yNTBcIj5cclxuICAgICAgICA8U2Vzc2lvbiBzZXNzaW9ucz17c2Vzc2lvbnNbMF19IC8+XHJcbiAgICAgICBcclxuXHJcbiAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcblxyXG5jb25zdCBJbmRleFBhZ2UgPSAoKSA9PntcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBzcGVha2VyLWxpc3RcIj5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICB7ZGF0YS5tYXAoZnVuY3Rpb24oc3BlYWtlcil7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qge2lkLCBiaW8sIGZpcnN0LCBsYXN0LCBmYXZvcml0ZSwgdHdpdHRlckhhbmRsZSwgY29tcGFueSwgc2Vzc2lvbnN9ID0gc3BlYWtlcjtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy00IGNvbC1zbS0xMiBjb2wteHMtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1oZWlnaHQgcC00IG10LTRcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BlYWtlci1pbWcgZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIGgtMzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250YWluLWZpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AvaW1hZ2VzL3NwZWFrZXItJHtpZH0uanBnYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17YCR7Zmlyc3R9ICR7bGFzdH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BlYWtlci1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtYi0zXCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtdHJ1bmNhdGUgdy0yMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zmlyc3R9IHtsYXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2Jpb30ge2NvbXBhbnl9IHt0d2l0dGVySGFuZGxlfSB7ZmF2b3JpdGV9IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZXNzaW9ucyBzZXNzaW9ucyA9IHtzZXNzaW9uc30gLz5cclxuICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7Il0sIm5hbWVzIjpbImRhdGEiLCJTZXNzaW9uIiwidGl0bGUiLCJyb29tIiwiU2Vzc2lvbnMiLCJzZXNzaW9ucyIsIkluZGV4UGFnZSIsIm1hcCIsInNwZWFrZXIiLCJpZCIsImJpbyIsImZpcnN0IiwibGFzdCIsImZhdm9yaXRlIiwidHdpdHRlckhhbmRsZSIsImNvbXBhbnkiXSwic291cmNlUm9vdCI6IiJ9