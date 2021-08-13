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
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
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
        }, this)
      }, void 0, false, {
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
        lineNumber: 65,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SpeakerDemographics, _objectSpread({}, speaker), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Sessions, {
      sessions: sessions
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 63,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWViNjMzY2ExMDVkNzc1NTI3MDAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsU0FBU0EsT0FBVCxPQUErQjtBQUFBLE1BQWJDLEtBQWEsUUFBYkEsS0FBYTtBQUFBLE1BQU5DLElBQU0sUUFBTkEsSUFBTTtBQUUzQixzQkFDSTtBQUFNLGFBQVMsRUFBQyxlQUFoQjtBQUFBLGVBQ0NELEtBREQscUJBQ1M7QUFBQSwyQkFBZUMsSUFBSSxDQUFDQyxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQUtIOztLQVBRSDs7QUFVVCxTQUFVSSxRQUFWLFFBQThCO0FBQUEsTUFBVkMsUUFBVSxTQUFWQSxRQUFVO0FBQzFCLHNCQUNJO0FBQUssYUFBUyxFQUFDLHVCQUFmO0FBQUEsMkJBQ0EsOERBQUMsT0FBRCxvQkFBY0EsUUFBUSxDQUFDLENBQUQsQ0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQU9IOztNQVJTRDs7QUFVVixTQUFTRSxZQUFULFFBQXdDO0FBQUEsTUFBakJDLEVBQWlCLFNBQWpCQSxFQUFpQjtBQUFBLE1BQWJDLEtBQWEsU0FBYkEsS0FBYTtBQUFBLE1BQU5DLElBQU0sU0FBTkEsSUFBTTtBQUNwQyxzQkFDSTtBQUFLLGFBQVMsRUFBQyw2RUFBZjtBQUFBLDJCQUNnQjtBQUNJLGVBQVMsRUFBQyxhQURkO0FBRUksU0FBRyw0QkFBcUJGLEVBQXJCLFNBRlA7QUFHSSxXQUFLLEVBQUMsS0FIVjtBQUlJLFNBQUcsWUFBS0MsS0FBTCxjQUFjQyxJQUFkO0FBSlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFVSDs7TUFYUUg7O0FBYVQsU0FBU0ksbUJBQVQsUUFBaUY7QUFBQSxNQUFuREYsS0FBbUQsU0FBbkRBLEtBQW1EO0FBQUEsTUFBN0NDLElBQTZDLFNBQTdDQSxJQUE2QztBQUFBLE1BQXZDRSxHQUF1QyxTQUF2Q0EsR0FBdUM7QUFBQSxNQUFsQ0MsT0FBa0MsU0FBbENBLE9BQWtDO0FBQUEsTUFBekJDLGFBQXlCLFNBQXpCQSxhQUF5QjtBQUFBLE1BQVZDLFFBQVUsU0FBVkEsUUFBVTtBQUM3RSxzQkFDSTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUEsNEJBQ0E7QUFBSyxlQUFTLEVBQUMscUNBQWY7QUFBQSw2QkFDQTtBQUFJLGlCQUFTLEVBQUMscUJBQWQ7QUFBQSxtQkFDS04sS0FETCxPQUNhQyxJQURiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxlQU1IO0FBQUEsOEJBQ0c7QUFBRyxpQkFBUyxFQUFDLGtCQUFiO0FBQUEsbUJBQ0tFLEdBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREgsZUFHTztBQUFLLGlCQUFTLEVBQUMsNkJBQWY7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsU0FBZjtBQUFBLGtDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUk7QUFBQSxzQkFBS0M7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXFCSDs7TUF0QlFGOztBQXdCVCxTQUFTSyxPQUFULFFBQTJCO0FBQUEsTUFBVEMsT0FBUyxTQUFUQSxPQUFTO0FBQUEsTUFDaEJULEVBRGdCLEdBQ2FTLE9BRGIsQ0FDaEJULEVBRGdCO0FBQUEsTUFDWkMsS0FEWSxHQUNhUSxPQURiLENBQ1pSLEtBRFk7QUFBQSxNQUNMQyxJQURLLEdBQ2FPLE9BRGIsQ0FDTFAsSUFESztBQUFBLE1BQ0NKLFFBREQsR0FDYVcsT0FEYixDQUNDWCxRQUREO0FBRXZCLHNCQUNJO0FBQU8sYUFBUyxFQUFDLDJEQUFqQjtBQUFBLDRCQUNBO0FBQUssZUFBUyxFQUFDLDJCQUFmO0FBQUEsOEJBQ0ksOERBQUMsWUFBRDtBQUFjLFVBQUUsRUFBRUUsRUFBbEI7QUFBc0IsYUFBSyxFQUFFQyxLQUE3QjtBQUFvQyxZQUFJLEVBQUVDO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJLDhEQUFDLG1CQUFELG9CQUEyQk8sT0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURBLGVBS0EsOERBQUMsUUFBRDtBQUFVLGNBQVEsRUFBSVg7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBV0g7O01BYlFVO0FBZVQsK0RBQWVBLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmZ1bmN0aW9uIFNlc3Npb24oe3RpdGxlLCByb29tfSl7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZXNzaW9uIHctMTAwXCI+XHJcbiAgICAgICAge3RpdGxlfSAgPHN0cm9uZz5Sb29tOiB7cm9vbS5uYW1lfTwvc3Ryb25nPlxyXG4gICAgIDwvc3Bhbj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uICBTZXNzaW9ucyh7c2Vzc2lvbnN9KXtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlc3Npb25Cb3ggY2FyZCBoLTI1MFwiPlxyXG4gICAgICAgIDxTZXNzaW9uIHsuLi4gc2Vzc2lvbnNbMF19IC8+XHJcbiAgICAgICBcclxuXHJcbiAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0gICBcclxuXHJcbmZ1bmN0aW9uIFNwZWFrZXJJbWFnZSh7aWQsIGZpcnN0LCBsYXN0fSl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGVha2VyLWltZyBkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgaC0zMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW4tZml0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC9pbWFnZXMvc3BlYWtlci0ke2lkfS5qcGdgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtgJHtmaXJzdH0gJHtsYXN0fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gU3BlYWtlckRlbW9ncmFwaGljcyh7Zmlyc3QsbGFzdCwgYmlvLCBjb21wYW55LCB0d2l0dGVySGFuZGxlLCBmYXZvcml0ZX0pe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BlYWtlci1pbmZvXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWItM1wiPiBcclxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC10cnVuY2F0ZSB3LTIwMFwiPlxyXG4gICAgICAgICAgICB7Zmlyc3R9IHtsYXN0fVxyXG4gICAgICAgIDwvaDM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgPGRpdj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgIHtiaW99IDwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwgZC1mbGV4IGZsZXgtcm93IG10LTRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFueVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNT5Db21wYW55PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8aDY+e2NvbXBhbnl9PC9oNj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBTcGVha2VyKHtzcGVha2VyfSl7XHJcbiAgICBjb25zdCB7aWQsIGZpcnN0LCBsYXN0LCBzZXNzaW9uc30gPSBzcGVha2VyO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ICBkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNCBjb2wtc20tMTIgY29sLXhzLTEyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtaGVpZ2h0IHAtNCBtdC00XCI+IFxyXG4gICAgICAgICAgICA8U3BlYWtlckltYWdlIGlkPXtpZH0gZmlyc3Q9e2ZpcnN0fSBsYXN0PXtsYXN0fSAvPlxyXG4gICAgICAgICAgICA8U3BlYWtlckRlbW9ncmFwaGljcyB7IC4uLiBzcGVha2VyfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxTZXNzaW9ucyBzZXNzaW9ucyA9IHtzZXNzaW9uc30gLz5cclxuICBcclxuXHJcbjwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcGVha2VyOyJdLCJuYW1lcyI6WyJTZXNzaW9uIiwidGl0bGUiLCJyb29tIiwibmFtZSIsIlNlc3Npb25zIiwic2Vzc2lvbnMiLCJTcGVha2VySW1hZ2UiLCJpZCIsImZpcnN0IiwibGFzdCIsIlNwZWFrZXJEZW1vZ3JhcGhpY3MiLCJiaW8iLCJjb21wYW55IiwidHdpdHRlckhhbmRsZSIsImZhdm9yaXRlIiwiU3BlYWtlciIsInNwZWFrZXIiXSwic291cmNlUm9vdCI6IiJ9