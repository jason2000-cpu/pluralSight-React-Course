"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Speakers",{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ConfigContext: function() { return /* binding */ ConfigContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home */ \"./src/Home.js\");\n/* harmony import */ var _Speakers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Speakers */ \"./src/Speakers.js\");\n\n\n\n\nconst ConfigContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(true);\nconst PageToShow = (pageName)=>{\n    if (pageName === \"Home\") return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Home__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n        fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\src\\\\App.js\",\n        lineNumber: 10,\n        columnNumber: 37\n    }, undefined);\n    if (pageName === \"Speakers\") return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speakers__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n        fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\src\\\\App.js\",\n        lineNumber: 11,\n        columnNumber: 41\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Page Not Found\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\src\\\\App.js\",\n        lineNumber: 12,\n        columnNumber: 12\n    }, undefined);\n};\n_c = PageToShow;\nconst configValue = {\n    showSpeakerSpeakingDays: true\n};\nconst App = (param)=>{\n    let { pageName } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ConfigContext.Provider, {\n        value: configValue,\n        children: PageToShow(pageName)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\src\\\\App.js\",\n        lineNumber: 22,\n        columnNumber: 8\n    }, undefined);\n};\n_c1 = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c, _c1;\n$RefreshReg$(_c, \"PageToShow\");\n$RefreshReg$(_c1, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXFEO0FBRTNCO0FBQ1E7QUFHM0IsTUFBTUssOEJBQWdCSixvREFBYUEsQ0FBQyxNQUFNO0FBRWpELE1BQU1LLGFBQWFDLENBQUFBO0lBQ2YsSUFBSUEsYUFBYSxRQUFRLHFCQUFPLDhEQUFDSiw2Q0FBSUE7Ozs7O0lBQ3JDLElBQUlJLGFBQWEsWUFBWSxxQkFBTyw4REFBQ0gsaURBQVFBOzs7OztJQUM3QyxxQkFBTyw4REFBQ0k7a0JBQUk7Ozs7OztBQUNoQjtLQUpNRjtBQU1OLE1BQU1HLGNBQWM7SUFDaEJDLHlCQUF5QjtBQUM3QjtBQUdBLE1BQU1DLE1BQUs7UUFBQyxFQUFDSixRQUFRLEVBQUM7SUFDbEIscUJBQ0csOERBQUNGLGNBQWNPLFFBQVE7UUFBRUMsT0FBT0o7a0JBQzdCSCxXQUFXQzs7Ozs7O0FBR3JCO01BTk1JO0FBT04sK0RBQWVBLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0FwcC5qcz9lM2U1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge2NyZWF0ZUNvbnRleHQsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBIb21lIGZyb20gXCIuL0hvbWVcIjtcclxuaW1wb3J0IFNwZWFrZXJzIGZyb20gXCIuL1NwZWFrZXJzXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IENvbmZpZ0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KHRydWUpO1xyXG5cclxuY29uc3QgUGFnZVRvU2hvdyA9IHBhZ2VOYW1lID0+IHtcclxuICAgIGlmIChwYWdlTmFtZSA9PT0gJ0hvbWUnKSByZXR1cm4gPEhvbWUgLz47XHJcbiAgICBpZiAocGFnZU5hbWUgPT09ICdTcGVha2VycycpIHJldHVybiA8U3BlYWtlcnMgLz47XHJcbiAgICByZXR1cm4gPGRpdj5QYWdlIE5vdCBGb3VuZDwvZGl2PlxyXG59XHJcblxyXG5jb25zdCBjb25maWdWYWx1ZSA9IHtcclxuICAgIHNob3dTcGVha2VyU3BlYWtpbmdEYXlzOiB0cnVlXHJcbn1cclxuXHJcblxyXG5jb25zdCBBcHAgPSh7cGFnZU5hbWV9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgPENvbmZpZ0NvbnRleHQuUHJvdmlkZXIgIHZhbHVlPXtjb25maWdWYWx1ZX0+XHJcbiAgICAgICAgIHtQYWdlVG9TaG93KHBhZ2VOYW1lKX1cclxuICAgICAgIDwvQ29uZmlnQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBBcHA7Il0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwiSG9tZSIsIlNwZWFrZXJzIiwiQ29uZmlnQ29udGV4dCIsIlBhZ2VUb1Nob3ciLCJwYWdlTmFtZSIsImRpdiIsImNvbmZpZ1ZhbHVlIiwic2hvd1NwZWFrZXJTcGVha2luZ0RheXMiLCJBcHAiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/App.js\n"));

/***/ })

});