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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/ImageToggleOnScroll */ \"./src/ImageToggleOnScroll.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst ImageChangeOnScroll = ()=>{\n    _s();\n    const [currentSpeakerId, setCurrentSpeakerId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [mouseCount, setMouseCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.document.title = \"Speaker ID : \".concat(currentSpeakerId);\n        console.log(\"useEffect: Setting title to :\", currentSpeakerId);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            1124,\n            187,\n            823,\n            1269,\n            1530\n        ].map((speakerId)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onMouseOver: ()=>{\n                    setCurrentSpeakerId(speakerId);\n                    console.log(currentSpeakerId);\n                    setMouseCount(mouseCount + 1);\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    primaryImg: \"/static/speakers/bw/Speaker-\".concat(speakerId, \".jpg\"),\n                    secondaryImg: \"/static/speakers/Speaker-\".concat(speakerId, \".jpg\")\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\pages\\\\ImageChangeOnScroll.js\",\n                    lineNumber: 25,\n                    columnNumber: 21\n                }, undefined)\n            }, speakerId, false, {\n                fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\pages\\\\ImageChangeOnScroll.js\",\n                lineNumber: 18,\n                columnNumber: 17\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\pages\\\\ImageChangeOnScroll.js\",\n        lineNumber: 15,\n        columnNumber: 6\n    }, undefined);\n};\n_s(ImageChangeOnScroll, \"XPN+kMbwee9IItCN/CYavXdMqrs=\");\n_c = ImageChangeOnScroll;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageChangeOnScroll);\nvar _c;\n$RefreshReg$(_c, \"ImageChangeOnScroll\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9JbWFnZUNoYW5nZU9uU2Nyb2xsLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW1EO0FBRVU7QUFFN0QsTUFBTUksc0JBQXNCOztJQUN4QixNQUFNLENBQUNDLGtCQUFrQkMsb0JBQW9CLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ3pELE1BQU0sQ0FBQ0ssWUFBWUMsY0FBYyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUU3Q0QsZ0RBQVNBLENBQUU7UUFDUFEsT0FBT0MsUUFBUSxDQUFDQyxLQUFLLEdBQUUsZ0JBQWlDLE9BQWpCTjtRQUN2Q08sUUFBUUMsR0FBRyxDQUFDLGlDQUFpQ1I7SUFDakQsR0FBRyxFQUFFO0lBRUwscUJBQ0MsOERBQUNTO2tCQUNHO1lBQUM7WUFBTTtZQUFLO1lBQUs7WUFBTTtTQUFLLENBQUNDLEdBQUcsQ0FBQyxDQUFDQztZQUMvQixxQkFDSSw4REFBQ0Y7Z0JBQ0NHLGFBQWU7b0JBQ2JYLG9CQUFvQlU7b0JBQ3BCSixRQUFRQyxHQUFHLENBQUNSO29CQUNaRyxjQUFjRCxhQUFhO2dCQUM3QjswQkFFRSw0RUFBQ0osZ0VBQW1CQTtvQkFDaEJlLFlBQVksK0JBQXlDLE9BQVZGLFdBQVU7b0JBQ3JERyxjQUFjLDRCQUFzQyxPQUFWSCxXQUFVOzs7Ozs7ZUFUbERBOzs7OztRQWFsQjs7Ozs7O0FBR1I7R0E3Qk1aO0tBQUFBO0FBK0JOLCtEQUFlQSxtQkFBbUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvSW1hZ2VDaGFuZ2VPblNjcm9sbC5qcz82MDcyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgSW1hZ2VUb2dnbGVPblNjcm9sbCBmcm9tIFwiLi4vc3JjL0ltYWdlVG9nZ2xlT25TY3JvbGxcIjtcclxuXHJcbmNvbnN0IEltYWdlQ2hhbmdlT25TY3JvbGwgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbY3VycmVudFNwZWFrZXJJZCwgc2V0Q3VycmVudFNwZWFrZXJJZF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFttb3VzZUNvdW50LCBzZXRNb3VzZUNvdW50XSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5kb2N1bWVudC50aXRsZT0gYFNwZWFrZXIgSUQgOiAke2N1cnJlbnRTcGVha2VySWR9YDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInVzZUVmZmVjdDogU2V0dGluZyB0aXRsZSB0byA6XCIsIGN1cnJlbnRTcGVha2VySWQpXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgIDxkaXY+XHJcbiAgICAgICAge1sxMTI0LCAxODcsIDgyMywgMTI2OSwgMTUzMF0ubWFwKChzcGVha2VySWQpID0+e1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e3NwZWFrZXJJZH1cclxuICAgICAgICAgICAgICAgICAgb25Nb3VzZU92ZXIgPSB7KCk9PntcclxuICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50U3BlYWtlcklkKHNwZWFrZXJJZCk7IFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRTcGVha2VySWQpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TW91c2VDb3VudChtb3VzZUNvdW50ICsgMSlcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VUb2dnbGVPblNjcm9sbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5SW1nPXtgL3N0YXRpYy9zcGVha2Vycy9idy9TcGVha2VyLSR7c3BlYWtlcklkfS5qcGdgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlJbWc9e2Avc3RhdGljL3NwZWFrZXJzL1NwZWFrZXItJHtzcGVha2VySWR9LmpwZ2B9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlQ2hhbmdlT25TY3JvbGw7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbWFnZVRvZ2dsZU9uU2Nyb2xsIiwiSW1hZ2VDaGFuZ2VPblNjcm9sbCIsImN1cnJlbnRTcGVha2VySWQiLCJzZXRDdXJyZW50U3BlYWtlcklkIiwibW91c2VDb3VudCIsInNldE1vdXNlQ291bnQiLCJ3aW5kb3ciLCJkb2N1bWVudCIsInRpdGxlIiwiY29uc29sZSIsImxvZyIsImRpdiIsIm1hcCIsInNwZWFrZXJJZCIsIm9uTW91c2VPdmVyIiwicHJpbWFyeUltZyIsInNlY29uZGFyeUltZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/ImageChangeOnScroll.js\n"));

/***/ })

});