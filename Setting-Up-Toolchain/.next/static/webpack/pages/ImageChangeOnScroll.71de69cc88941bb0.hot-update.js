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

/***/ "./public/static/loadingGIF.gif":
/*!**************************************!*\
  !*** ./public/static/loadingGIF.gif ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\"src\":\"/_next/static/media/loadingGIF.3170e5c7.gif\",\"height\":480,\"width\":475,\"blurWidth\":0,\"blurHeight\":0});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvc3RhdGljL2xvYWRpbmdHSUYuZ2lmIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxDQUFDLDBHQUEwRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wdWJsaWMvc3RhdGljL2xvYWRpbmdHSUYuZ2lmPzQ2MWYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL21lZGlhL2xvYWRpbmdHSUYuMzE3MGU1YzcuZ2lmXCIsXCJoZWlnaHRcIjo0ODAsXCJ3aWR0aFwiOjQ3NSxcImJsdXJXaWR0aFwiOjAsXCJibHVySGVpZ2h0XCI6MH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/static/loadingGIF.gif\n"));

/***/ }),

/***/ "./src/ImageToggleOnScroll.js":
/*!************************************!*\
  !*** ./src/ImageToggleOnScroll.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_static_loadingGIF_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/static/loadingGIF.gif */ \"./public/static/loadingGIF.gif\");\n\nvar _s = $RefreshSig$();\n\n\nconst ImageToggleOnScroll = (param)=>{\n    let { secondaryImg, primaryImg } = param;\n    _s();\n    const imgRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const isInView = ()=>{\n        const rect = imgRef.current.getBoundingClientRect();\n        return rect.top >= 0 && rect.bottom <= window.innerHeight;\n    };\n    const [inView, setInView] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setIsLoading(false);\n        setInView(isInView());\n        window.addEventListener(\"scroll\", scrollHandler);\n        return ()=>{\n            window.removeEventListener(\"scroll\", scrollHandler);\n        };\n    }, []);\n    const scrollHandler = ()=>{\n        setInView(isInView());\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: isLoading ? _public_static_loadingGIF_gif__WEBPACK_IMPORTED_MODULE_2__[\"default\"] : inView ? secondaryImg : primaryImg,\n        alt: \"\",\n        ref: imgRef\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\src\\\\ImageToggleOnScroll.js\",\n        lineNumber: 33,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ImageToggleOnScroll, \"F2Xk3jWNLlZ3e2iS7SWN/u32gMw=\");\n_c = ImageToggleOnScroll;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageToggleOnScroll);\nvar _c;\n$RefreshReg$(_c, \"ImageToggleOnScroll\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvSW1hZ2VUb2dnbGVPblNjcm9sbC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEyRDtBQUVGO0FBR3pELE1BQU1LLHNCQUFzQjtRQUFDLEVBQUNDLFlBQVksRUFBRUMsVUFBVSxFQUFDOztJQUNuRCxNQUFNQyxTQUFTTiw2Q0FBTUEsQ0FBQztJQUV0QixNQUFNLENBQUNPLFdBQVdDLGFBQWEsR0FBR1AsK0NBQVFBLENBQUM7SUFFM0MsTUFBTVEsV0FBVztRQUNiLE1BQU1DLE9BQU9KLE9BQU9LLE9BQU8sQ0FBQ0MscUJBQXFCO1FBQ2pELE9BQU9GLEtBQUtHLEdBQUcsSUFBSSxLQUFLSCxLQUFLSSxNQUFNLElBQUlDLE9BQU9DLFdBQVc7SUFDN0Q7SUFFQSxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR2pCLCtDQUFRQSxDQUFDO0lBRXJDRixnREFBU0EsQ0FBQztRQUNOUyxhQUFhO1FBQ2JVLFVBQVVUO1FBQ1ZNLE9BQU9JLGdCQUFnQixDQUFDLFVBQVVDO1FBQ2xDLE9BQU87WUFDSEwsT0FBT00sbUJBQW1CLENBQUMsVUFBVUQ7UUFDekM7SUFDSixHQUFHLEVBQUU7SUFHTCxNQUFNQSxnQkFBZ0I7UUFDbEJGLFVBQVVUO0lBQ2Q7SUFFQSxxQkFDSSw4REFBQ2E7UUFDR0MsS0FBS2hCLFlBQVlMLHFFQUFVQSxHQUFFZSxTQUFTYixlQUFlQztRQUNyRG1CLEtBQUk7UUFDSkMsS0FBS25COzs7Ozs7QUFHakI7R0FqQ01IO0tBQUFBO0FBb0NOLCtEQUFlQSxtQkFBbUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0ltYWdlVG9nZ2xlT25TY3JvbGwuanM/Y2M3MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgbG9hZGluZ0dpZiBmcm9tIFwiLi4vcHVibGljL3N0YXRpYy9sb2FkaW5nR0lGLmdpZlwiO1xyXG5cclxuXHJcbmNvbnN0IEltYWdlVG9nZ2xlT25TY3JvbGwgPSAoe3NlY29uZGFyeUltZywgcHJpbWFyeUltZ30pID0+IHtcclxuICAgIGNvbnN0IGltZ1JlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgaXNJblZpZXcgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVjdCA9IGltZ1JlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIHJldHVybiByZWN0LnRvcCA+PSAwICYmIHJlY3QuYm90dG9tIDw9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbaW5WaWV3LCBzZXRJblZpZXddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICBzZXRJblZpZXcoaXNJblZpZXcoKSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsSGFuZGxlcik7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsSGFuZGxlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuXHJcbiAgICBjb25zdCBzY3JvbGxIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEluVmlldyhpc0luVmlldygpKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz17aXNMb2FkaW5nID8gbG9hZGluZ0dpZiA6aW5WaWV3ID8gc2Vjb25kYXJ5SW1nIDogcHJpbWFyeUltZ31cclxuICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgcmVmPXtpbWdSZWZ9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZVRvZ2dsZU9uU2Nyb2xsOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwibG9hZGluZ0dpZiIsIkltYWdlVG9nZ2xlT25TY3JvbGwiLCJzZWNvbmRhcnlJbWciLCJwcmltYXJ5SW1nIiwiaW1nUmVmIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiaXNJblZpZXciLCJyZWN0IiwiY3VycmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImJvdHRvbSIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiaW5WaWV3Iiwic2V0SW5WaWV3IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbEhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaW1nIiwic3JjIiwiYWx0IiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ImageToggleOnScroll.js\n"));

/***/ })

});