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



function Session(props) {
  var title = props.title;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
    className: "session w-100",
    children: [props.title, "  ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
      children: ["Room: ", props.room]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 24
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTFhYTY5MWQ4MzYzM2NiOWQyYjguaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBRUEsU0FBU0MsT0FBVCxDQUFpQkMsS0FBakIsRUFBdUI7QUFDbkIsTUFBTUMsS0FBSyxHQUFHRCxLQUFLLENBQUNDLEtBQXBCO0FBQ0Esc0JBQ0k7QUFBTSxhQUFTLEVBQUMsZUFBaEI7QUFBQSxlQUNDRCxLQUFLLENBQUNDLEtBRFAscUJBQ2U7QUFBQSwyQkFBZUQsS0FBSyxDQUFDRSxJQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQUtIOztLQVBRSDs7QUFVVCxJQUFNSSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFLO0FBR25CLHNCQUNJO0FBQUssYUFBUyxFQUFDLHdCQUFmO0FBQUEsMkJBQ0c7QUFBSyxlQUFTLEVBQUMsS0FBZjtBQUFBLGdCQUNLTCxrREFBQSxDQUFTLFVBQVNPLE9BQVQsRUFBaUI7QUFBQSxZQUNmQyxFQURlLEdBQ3FERCxPQURyRCxDQUNmQyxFQURlO0FBQUEsWUFDWEMsR0FEVyxHQUNxREYsT0FEckQsQ0FDWEUsR0FEVztBQUFBLFlBQ05DLEtBRE0sR0FDcURILE9BRHJELENBQ05HLEtBRE07QUFBQSxZQUNDQyxJQURELEdBQ3FESixPQURyRCxDQUNDSSxJQUREO0FBQUEsWUFDT0MsUUFEUCxHQUNxREwsT0FEckQsQ0FDT0ssUUFEUDtBQUFBLFlBQ2lCQyxhQURqQixHQUNxRE4sT0FEckQsQ0FDaUJNLGFBRGpCO0FBQUEsWUFDZ0NDLE9BRGhDLEdBQ3FEUCxPQURyRCxDQUNnQ08sT0FEaEM7QUFBQSxZQUN5Q0MsUUFEekMsR0FDcURSLE9BRHJELENBQ3lDUSxRQUR6QztBQUV0Qiw0QkFDUztBQUFLLG1CQUFTLEVBQUMsMkRBQWY7QUFBQSxrQ0FDVDtBQUFLLHFCQUFTLEVBQUMsMkJBQWY7QUFBQSxvQ0FDSTtBQUFLLHVCQUFTLEVBQUMsNkVBQWY7QUFBQSxxQ0FDQTtBQUNJLHlCQUFTLEVBQUMsYUFEZDtBQUVJLG1CQUFHLDRCQUFxQlAsRUFBckIsU0FGUDtBQUdJLHFCQUFLLEVBQUMsS0FIVjtBQUlJLG1CQUFHLFlBQUtFLEtBQUwsY0FBY0MsSUFBZDtBQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBU0k7QUFBSyx1QkFBUyxFQUFDLGNBQWY7QUFBQSxxQ0FDSTtBQUFLLHlCQUFTLEVBQUMscUNBQWY7QUFBQSx1Q0FDQTtBQUFJLDJCQUFTLEVBQUMscUJBQWQ7QUFBQSw2QkFDS0QsS0FETCxPQUNhQyxJQURiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVRKLGVBZ0JLO0FBQUEscUNBQ0c7QUFBQSwyQkFBSUYsR0FBSixPQUFVSyxPQUFWLE9BQW9CRCxhQUFwQixPQUFvQ0QsUUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFoQkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURTLGVBcUJkO0FBQUsscUJBQVMsRUFBQyx1QkFBZjtBQUFBLG1DQUNJLDhEQUFDLE9BQUQ7QUFBUyxtQkFBSyxFQUFFRyxRQUFRLENBQUMsQ0FBRCxDQUFSLENBQVlaLEtBQTVCO0FBQW1DLGtCQUFJLEVBQUVZLFFBQVEsQ0FBQ1gsSUFBVCxDQUFjWTtBQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFyQmM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURUO0FBK0JKLE9BakNBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQTBDSCxDQTdDRDs7TUFBTVg7QUErQ04sK0RBQWVBLFNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7ZGF0YX0gZnJvbSBcIi4uL1NwZWFrZXJEYXRhXCI7XHJcblxyXG5mdW5jdGlvbiBTZXNzaW9uKHByb3BzKXtcclxuICAgIGNvbnN0IHRpdGxlID0gcHJvcHMudGl0bGU7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlc3Npb24gdy0xMDBcIj5cclxuICAgICAgICB7cHJvcHMudGl0bGV9ICA8c3Ryb25nPlJvb206IHtwcm9wcy5yb29tfTwvc3Ryb25nPlxyXG4gICAgIDwvc3Bhbj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmNvbnN0IEluZGV4UGFnZSA9ICgpID0+e1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHNwZWFrZXItbGlzdFwiPlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgIHtkYXRhLm1hcChmdW5jdGlvbihzcGVha2VyKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7aWQsIGJpbywgZmlyc3QsIGxhc3QsIGZhdm9yaXRlLCB0d2l0dGVySGFuZGxlLCBjb21wYW55LCBzZXNzaW9uc30gPSBzcGVha2VyO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTQgY29sLXNtLTEyIGNvbC14cy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWhlaWdodCBwLTQgbXQtNFwiPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGVha2VyLWltZyBkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgaC0zMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW4tZml0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC9pbWFnZXMvc3BlYWtlci0ke2lkfS5qcGdgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtgJHtmaXJzdH0gJHtsYXN0fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGVha2VyLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG1iLTNcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC10cnVuY2F0ZSB3LTIwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmaXJzdH0ge2xhc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57YmlvfSB7Y29tcGFueX0ge3R3aXR0ZXJIYW5kbGV9IHtmYXZvcml0ZX0gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vzc2lvbkJveCBjYXJkIGgtMjUwXCI+XHJcbiAgICAgICAgICAgICAgICAgICA8U2Vzc2lvbiB0aXRsZT17c2Vzc2lvbnNbMF0udGl0bGV9IHJvb209e3Nlc3Npb25zLnJvb20ubmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICA8L2Rpdj4gXHJcblxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuXHJcbiAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlOyJdLCJuYW1lcyI6WyJkYXRhIiwiU2Vzc2lvbiIsInByb3BzIiwidGl0bGUiLCJyb29tIiwiSW5kZXhQYWdlIiwibWFwIiwic3BlYWtlciIsImlkIiwiYmlvIiwiZmlyc3QiLCJsYXN0IiwiZmF2b3JpdGUiLCJ0d2l0dGVySGFuZGxlIiwiY29tcGFueSIsInNlc3Npb25zIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=