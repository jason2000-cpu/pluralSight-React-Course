"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/emailValidating",{

/***/ "./src/useEmailValid.js":
/*!******************************!*\
  !*** ./src/useEmailValid.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _useInterval__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useInterval */ \"./src/useInterval.js\");\nvar _s = $RefreshSig$();\n\n\nfunction useEmailValidating(time) {\n    _s();\n    const validateEmail = (email)=>{\n        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;\n        return re.test(email);\n    // return email.includes('@')\n    };\n    const [emailValid, setEmailValid] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    const emailReducer = (state, action)=>{\n        const isValidEmail = validateEmail(action);\n        setEmailValid(isValidEmail);\n        return action;\n    };\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(emailReducer, \"\");\n    // const maxSeconds = 30;\n    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(time);\n    (0,_useInterval__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(()=>{\n        setCount(count - 1);\n    }, 1000);\n    return {\n        count,\n        emailValid,\n        setCount,\n        setEmail,\n        email\n    };\n}\n_s(useEmailValidating, \"cbYogtYhDuds6TJ54IhrYE8guz4=\", false, function() {\n    return [\n        _useInterval__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (useEmailValidating);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXNlRW1haWxWYWxpZC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE0QztBQUVMO0FBRXZDLFNBQVNHLG1CQUFtQkMsSUFBSTs7SUFDNUIsTUFBTUMsZ0JBQWdCLENBQUNDO1FBQ25CLE1BQU1DLEtBQUs7UUFDWCxPQUFPQSxHQUFHQyxJQUFJLENBQUNGO0lBQ2YsNkJBQTZCO0lBQ2pDO0lBQ0EsTUFBTSxDQUFDRyxZQUFZQyxjQUFjLEdBQUdWLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU1XLGVBQWUsQ0FBQ0MsT0FBT0M7UUFDekIsTUFBTUMsZUFBZVQsY0FBY1E7UUFDbkNILGNBQWNJO1FBQ2QsT0FBT0Q7SUFDWDtJQUVBLE1BQU0sQ0FBQ1AsT0FBT1MsU0FBUyxHQUFHZCxpREFBVUEsQ0FBQ1UsY0FBYztJQUNuRCx5QkFBeUI7SUFDekIsTUFBTSxDQUFDSyxPQUFPQyxTQUFTLEdBQUdqQiwrQ0FBUUEsQ0FBQ0k7SUFFbkNGLHdEQUFXQSxDQUFDO1FBQ1JlLFNBQVNELFFBQVE7SUFDckIsR0FBRztJQUVILE9BQU87UUFBQ0E7UUFBT1A7UUFBWVE7UUFBVUY7UUFBVVQ7SUFBTTtBQUN6RDtHQXRCU0g7O1FBaUJMRCxvREFBV0E7OztBQVFmLCtEQUFlQyxrQkFBa0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VzZUVtYWlsVmFsaWQuanM/MzRmYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSx1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgdXNlSW50ZXJ2YWwgZnJvbSAnLi91c2VJbnRlcnZhbCdcclxuXHJcbmZ1bmN0aW9uIHVzZUVtYWlsVmFsaWRhdGluZyh0aW1lKSB7XHJcbiAgICBjb25zdCB2YWxpZGF0ZUVtYWlsID0gKGVtYWlsKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmUgPSAvXlthLXpBLVowLTkuXyUrLV0rQFthLXpBLVowLTkuLV0rXFwuW2EtekEtWl17Mix9JC87XHJcbiAgICAgICAgcmV0dXJuIHJlLnRlc3QoZW1haWwpXHJcbiAgICAgICAgLy8gcmV0dXJuIGVtYWlsLmluY2x1ZGVzKCdAJylcclxuICAgIH1cclxuICAgIGNvbnN0IFtlbWFpbFZhbGlkLCBzZXRFbWFpbFZhbGlkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGVtYWlsUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaXNWYWxpZEVtYWlsID0gdmFsaWRhdGVFbWFpbChhY3Rpb24pO1xyXG4gICAgICAgIHNldEVtYWlsVmFsaWQoaXNWYWxpZEVtYWlsKTtcclxuICAgICAgICByZXR1cm4gYWN0aW9uXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VSZWR1Y2VyKGVtYWlsUmVkdWNlciwgXCJcIik7XHJcbiAgICAvLyBjb25zdCBtYXhTZWNvbmRzID0gMzA7XHJcbiAgICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKHRpbWUpO1xyXG4gICAgXHJcbiAgICB1c2VJbnRlcnZhbCgoKT0+e1xyXG4gICAgICAgIHNldENvdW50KGNvdW50IC0gMSk7XHJcbiAgICB9LCAxMDAwKTtcclxuXHJcbiAgICByZXR1cm4ge2NvdW50LCBlbWFpbFZhbGlkLCBzZXRDb3VudCwgc2V0RW1haWwsIGVtYWlsIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZUVtYWlsVmFsaWRhdGluZzsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSZWR1Y2VyIiwidXNlSW50ZXJ2YWwiLCJ1c2VFbWFpbFZhbGlkYXRpbmciLCJ0aW1lIiwidmFsaWRhdGVFbWFpbCIsImVtYWlsIiwicmUiLCJ0ZXN0IiwiZW1haWxWYWxpZCIsInNldEVtYWlsVmFsaWQiLCJlbWFpbFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsImlzVmFsaWRFbWFpbCIsInNldEVtYWlsIiwiY291bnQiLCJzZXRDb3VudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/useEmailValid.js\n"));

/***/ })

});