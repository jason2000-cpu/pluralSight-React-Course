"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/ImageChangeOnScroll",{

/***/ "./pages/ImageChangeOnScroll.js":
/*!**************************************!*\
  !*** ./pages/ImageChangeOnScroll.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/ImageToggleOnScroll */ \"./src/ImageToggleOnScroll.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst ImageChangeOnScroll = ()=>{\n    _s();\n    const [currentSpeakerId, setCurrentSpeakerId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.document.title = \"Speaker ID : \".concat(currentSpeakerId);\n        console.log(\"useEffect: Setting title to :\", currentSpeakerId);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            1124,\n            187,\n            823,\n            1269,\n            1530\n        ].map((speakerId)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onMouseOver: ()=>{\n                    setCurrentSpeakerId(speakerId);\n                    console.log(currentSpeakerId);\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    primaryImg: \"/static/speakers/bw/Speaker-\".concat(speakerId, \".jpg\"),\n                    secondaryImg: \"/static/speakers/Speaker-\".concat(speakerId, \".jpg\")\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\pages\\\\ImageChangeOnScroll.js\",\n                    lineNumber: 23,\n                    columnNumber: 21\n                }, undefined)\n            }, speakerId, false, {\n                fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\pages\\\\ImageChangeOnScroll.js\",\n                lineNumber: 17,\n                columnNumber: 17\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\pages\\\\ImageChangeOnScroll.js\",\n        lineNumber: 14,\n        columnNumber: 6\n    }, undefined);\n};\n_s(ImageChangeOnScroll, \"DBBEfl6BpjNXDkjuM5rkdXkIAeE=\");\n_c = ImageChangeOnScroll;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageChangeOnScroll);\nvar _c;\n$RefreshReg$(_c, \"ImageChangeOnScroll\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9JbWFnZUNoYW5nZU9uU2Nyb2xsLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW1EO0FBRVU7QUFFN0QsTUFBTUksc0JBQXNCOztJQUN4QixNQUFNLENBQUNDLGtCQUFrQkMsb0JBQW9CLEdBQUdKLCtDQUFRQSxDQUFDO0lBRXpERCxnREFBU0EsQ0FBRTtRQUNQTSxPQUFPQyxRQUFRLENBQUNDLEtBQUssR0FBRSxnQkFBaUMsT0FBakJKO1FBQ3ZDSyxRQUFRQyxHQUFHLENBQUMsaUNBQWlDTjtJQUNqRCxHQUFHLEVBQUU7SUFFTCxxQkFDQyw4REFBQ087a0JBQ0c7WUFBQztZQUFNO1lBQUs7WUFBSztZQUFNO1NBQUssQ0FBQ0MsR0FBRyxDQUFDLENBQUNDO1lBQy9CLHFCQUNJLDhEQUFDRjtnQkFDQ0csYUFBZTtvQkFDYlQsb0JBQW9CUTtvQkFDcEJKLFFBQVFDLEdBQUcsQ0FBQ047Z0JBQ2Q7MEJBRUUsNEVBQUNGLGdFQUFtQkE7b0JBQ2hCYSxZQUFZLCtCQUF5QyxPQUFWRixXQUFVO29CQUNyREcsY0FBYyw0QkFBc0MsT0FBVkgsV0FBVTs7Ozs7O2VBUmxEQTs7Ozs7UUFZbEI7Ozs7OztBQUdSO0dBM0JNVjtLQUFBQTtBQTZCTiwrREFBZUEsbUJBQW1CQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0ltYWdlQ2hhbmdlT25TY3JvbGwuanM/NjA3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IEltYWdlVG9nZ2xlT25TY3JvbGwgZnJvbSBcIi4uL3NyYy9JbWFnZVRvZ2dsZU9uU2Nyb2xsXCI7XHJcblxyXG5jb25zdCBJbWFnZUNoYW5nZU9uU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2N1cnJlbnRTcGVha2VySWQsIHNldEN1cnJlbnRTcGVha2VySWRdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmRvY3VtZW50LnRpdGxlPSBgU3BlYWtlciBJRCA6ICR7Y3VycmVudFNwZWFrZXJJZH1gO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidXNlRWZmZWN0OiBTZXR0aW5nIHRpdGxlIHRvIDpcIiwgY3VycmVudFNwZWFrZXJJZClcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgPGRpdj5cclxuICAgICAgICB7WzExMjQsIDE4NywgODIzLCAxMjY5LCAxNTMwXS5tYXAoKHNwZWFrZXJJZCkgPT57XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17c3BlYWtlcklkfVxyXG4gICAgICAgICAgICAgICAgICBvbk1vdXNlT3ZlciA9IHsoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRTcGVha2VySWQoc3BlYWtlcklkKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudFNwZWFrZXJJZClcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VUb2dnbGVPblNjcm9sbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5SW1nPXtgL3N0YXRpYy9zcGVha2Vycy9idy9TcGVha2VyLSR7c3BlYWtlcklkfS5qcGdgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlJbWc9e2Avc3RhdGljL3NwZWFrZXJzL1NwZWFrZXItJHtzcGVha2VySWR9LmpwZ2B9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlQ2hhbmdlT25TY3JvbGw7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbWFnZVRvZ2dsZU9uU2Nyb2xsIiwiSW1hZ2VDaGFuZ2VPblNjcm9sbCIsImN1cnJlbnRTcGVha2VySWQiLCJzZXRDdXJyZW50U3BlYWtlcklkIiwid2luZG93IiwiZG9jdW1lbnQiLCJ0aXRsZSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJtYXAiLCJzcGVha2VySWQiLCJvbk1vdXNlT3ZlciIsInByaW1hcnlJbWciLCJzZWNvbmRhcnlJbWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/ImageChangeOnScroll.js\n"));

/***/ })

});