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
                lineNumber: 26,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
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
                  lineNumber: 35,
                  columnNumber: 29
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                children: [bio, " ", company, " ", twitterHandle, " ", favorite, " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 26
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "sessionBox card h-250",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Session, {
              title: sessions[0].title,
              room: sessions.room.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 20
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 16
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 30
        }, this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 12
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }, _this);
};

_c2 = IndexPage;
/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

var _c, _c2;

$RefreshReg$(_c, "Session");
$RefreshReg$(_c2, "IndexPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzA0OWZiYzUwMDdlOGJhNGIwNjQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBRUEsU0FBU0MsT0FBVCxDQUFpQkMsS0FBakIsRUFBd0JDLElBQXhCLEVBQTZCO0FBRXpCLHNCQUNJO0FBQU0sYUFBUyxFQUFDLGVBQWhCO0FBQUEsZUFDQ0QsS0FERCxxQkFDUztBQUFBLDJCQUFlQyxJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBS0g7O0tBUFFGOztBQVVULElBQU1HLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQUs7QUFHbkIsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsd0JBQWY7QUFBQSwyQkFDRztBQUFLLGVBQVMsRUFBQyxLQUFmO0FBQUEsZ0JBQ0tKLGtEQUFBLENBQVMsVUFBU00sT0FBVCxFQUFpQjtBQUFBLFlBQ2ZDLEVBRGUsR0FDcURELE9BRHJELENBQ2ZDLEVBRGU7QUFBQSxZQUNYQyxHQURXLEdBQ3FERixPQURyRCxDQUNYRSxHQURXO0FBQUEsWUFDTkMsS0FETSxHQUNxREgsT0FEckQsQ0FDTkcsS0FETTtBQUFBLFlBQ0NDLElBREQsR0FDcURKLE9BRHJELENBQ0NJLElBREQ7QUFBQSxZQUNPQyxRQURQLEdBQ3FETCxPQURyRCxDQUNPSyxRQURQO0FBQUEsWUFDaUJDLGFBRGpCLEdBQ3FETixPQURyRCxDQUNpQk0sYUFEakI7QUFBQSxZQUNnQ0MsT0FEaEMsR0FDcURQLE9BRHJELENBQ2dDTyxPQURoQztBQUFBLFlBQ3lDQyxRQUR6QyxHQUNxRFIsT0FEckQsQ0FDeUNRLFFBRHpDO0FBRXRCLDRCQUNTO0FBQUssbUJBQVMsRUFBQywyREFBZjtBQUFBLGtDQUNUO0FBQUsscUJBQVMsRUFBQywyQkFBZjtBQUFBLG9DQUNJO0FBQUssdUJBQVMsRUFBQyw2RUFBZjtBQUFBLHFDQUNBO0FBQ0kseUJBQVMsRUFBQyxhQURkO0FBRUksbUJBQUcsNEJBQXFCUCxFQUFyQixTQUZQO0FBR0kscUJBQUssRUFBQyxLQUhWO0FBSUksbUJBQUcsWUFBS0UsS0FBTCxjQUFjQyxJQUFkO0FBSlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFTSTtBQUFLLHVCQUFTLEVBQUMsY0FBZjtBQUFBLHFDQUNJO0FBQUsseUJBQVMsRUFBQyxxQ0FBZjtBQUFBLHVDQUNBO0FBQUksMkJBQVMsRUFBQyxxQkFBZDtBQUFBLDZCQUNLRCxLQURMLE9BQ2FDLElBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBVEosZUFnQks7QUFBQSxxQ0FDRztBQUFBLDJCQUFJRixHQUFKLE9BQVVLLE9BQVYsT0FBb0JELGFBQXBCLE9BQW9DRCxRQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWhCTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRFMsZUFxQmQ7QUFBSyxxQkFBUyxFQUFDLHVCQUFmO0FBQUEsbUNBQ0ksOERBQUMsT0FBRDtBQUFTLG1CQUFLLEVBQUVHLFFBQVEsQ0FBQyxDQUFELENBQVIsQ0FBWVosS0FBNUI7QUFBbUMsa0JBQUksRUFBRVksUUFBUSxDQUFDWCxJQUFULENBQWNZO0FBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXJCYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRFQ7QUErQkosT0FqQ0E7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBMENILENBN0NEOztNQUFNWDtBQStDTiwrREFBZUEsU0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHtkYXRhfSBmcm9tIFwiLi4vU3BlYWtlckRhdGFcIjtcclxuXHJcbmZ1bmN0aW9uIFNlc3Npb24odGl0bGUsIHJvb20pe1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2Vzc2lvbiB3LTEwMFwiPlxyXG4gICAgICAgIHt0aXRsZX0gIDxzdHJvbmc+Um9vbToge3Jvb219PC9zdHJvbmc+XHJcbiAgICAgPC9zcGFuPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuY29uc3QgSW5kZXhQYWdlID0gKCkgPT57XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgc3BlYWtlci1saXN0XCI+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAge2RhdGEubWFwKGZ1bmN0aW9uKHNwZWFrZXIpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHtpZCwgYmlvLCBmaXJzdCwgbGFzdCwgZmF2b3JpdGUsIHR3aXR0ZXJIYW5kbGUsIGNvbXBhbnksIHNlc3Npb25zfSA9IHNwZWFrZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNCBjb2wtc20tMTIgY29sLXhzLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtaGVpZ2h0IHAtNCBtdC00XCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwZWFrZXItaW1nIGQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBoLTMwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbi1maXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltYWdlcy9zcGVha2VyLSR7aWR9LmpwZ2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2Ake2ZpcnN0fSAke2xhc3R9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwZWFrZXItaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWItM1wiPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXRydW5jYXRlIHctMjAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZpcnN0fSB7bGFzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntiaW99IHtjb21wYW55fSB7dHdpdHRlckhhbmRsZX0ge2Zhdm9yaXRlfSA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uQm94IGNhcmQgaC0yNTBcIj5cclxuICAgICAgICAgICAgICAgICAgIDxTZXNzaW9uIHRpdGxlPXtzZXNzaW9uc1swXS50aXRsZX0gcm9vbT17c2Vzc2lvbnMucm9vbS5uYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgIDwvZGl2PiBcclxuXHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7Il0sIm5hbWVzIjpbImRhdGEiLCJTZXNzaW9uIiwidGl0bGUiLCJyb29tIiwiSW5kZXhQYWdlIiwibWFwIiwic3BlYWtlciIsImlkIiwiYmlvIiwiZmlyc3QiLCJsYXN0IiwiZmF2b3JpdGUiLCJ0d2l0dGVySGFuZGxlIiwiY29tcGFueSIsInNlc3Npb25zIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=