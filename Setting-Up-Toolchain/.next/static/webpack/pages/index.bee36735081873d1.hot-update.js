"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst InputElement = ()=>{\n    _s();\n    const [inputText, setInputText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [historyList, setHistoryList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const onChangeHandler = (e)=>{\n        setInputText(e.target.value);\n        if (e.target.value !== \"\") {\n            setHistoryList([]);\n        }\n        setHistoryList([\n            ...historyList,\n            e.target.value\n        ]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                onChange: onChangeHandler,\n                placeholder: \"Enter some text please\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\pages\\\\index.js\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: inputText\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\pages\\\\index.js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\pages\\\\index.js\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\pages\\\\index.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: historyList.map((item)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: item\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\pages\\\\index.js\",\n                        lineNumber: 21,\n                        columnNumber: 28\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\pages\\\\index.js\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(InputElement, \"Bk0Id2fWlKN3EwjLkrmfJt96ZA4=\");\n_c = InputElement;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InputElement);\nvar _c;\n$RefreshReg$(_c, \"InputElement\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXNDO0FBRXRDLE1BQU1FLGVBQWU7O0lBQ2pCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHSCwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNJLGFBQWFDLGVBQWUsR0FBR0wsK0NBQVFBLENBQUMsRUFBRTtJQUNsRCxNQUFNTSxrQkFBa0IsQ0FBQ0M7UUFDckJKLGFBQWFJLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztRQUMzQixJQUFHRixFQUFFQyxNQUFNLENBQUNDLEtBQUssS0FBSyxJQUFHO1lBQ3hCSixlQUFlLEVBQUU7UUFDbEI7UUFDQUEsZUFBZTtlQUFJRDtZQUFhRyxFQUFFQyxNQUFNLENBQUNDLEtBQUs7U0FBQztJQUNsRDtJQUNBLHFCQUNJOzswQkFDSSw4REFBQ0M7Z0JBQU1DLFVBQVVMO2dCQUFpQk0sYUFBWTs7Ozs7OzBCQUM5Qyw4REFBQ0M7MEJBQUlYOzs7Ozs7MEJBQ0wsOERBQUNZOzs7OzswQkFDRCw4REFBQ0M7Ozs7OzBCQUNELDhEQUFDQzswQkFDSVosWUFBWWEsR0FBRyxDQUFDLENBQUNDO29CQUNkLHFCQUFPLDhEQUFDQztrQ0FBSUQ7Ozs7OztnQkFDaEI7Ozs7Ozs7O0FBSWhCO0dBdkJNakI7S0FBQUE7QUF5Qk4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBJbnB1dEVsZW1lbnQgPSAoKSA9PntcclxuICAgIGNvbnN0IFtpbnB1dFRleHQsIHNldElucHV0VGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtoaXN0b3J5TGlzdCwgc2V0SGlzdG9yeUxpc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gICBjb25zdCBvbkNoYW5nZUhhbmRsZXIgPSAoZSkgPT57XHJcbiAgICAgICBzZXRJbnB1dFRleHQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgaWYoZS50YXJnZXQudmFsdWUgIT09IFwiXCIpe1xyXG4gICAgICAgIHNldEhpc3RvcnlMaXN0KFtdKTtcclxuICAgICAgIH1cclxuICAgICAgIHNldEhpc3RvcnlMaXN0KFsuLi5oaXN0b3J5TGlzdCwgZS50YXJnZXQudmFsdWVdKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtvbkNoYW5nZUhhbmRsZXJ9IHBsYWNlaG9sZGVyPVwiRW50ZXIgc29tZSB0ZXh0IHBsZWFzZVwiIC8+XHJcbiAgICAgICAgICAgIDxoMT57aW5wdXRUZXh0fTwvaDE+XHJcbiAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAge2hpc3RvcnlMaXN0Lm1hcCgoaXRlbSk9PntcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpPntpdGVtfTwvbGk+XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dEVsZW1lbnQ7XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJJbnB1dEVsZW1lbnQiLCJpbnB1dFRleHQiLCJzZXRJbnB1dFRleHQiLCJoaXN0b3J5TGlzdCIsInNldEhpc3RvcnlMaXN0Iiwib25DaGFuZ2VIYW5kbGVyIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaW5wdXQiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwiaDEiLCJociIsImJyIiwidWwiLCJtYXAiLCJpdGVtIiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});