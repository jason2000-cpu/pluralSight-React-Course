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

/***/ "./src/Speakers.js":
/*!*************************!*\
  !*** ./src/Speakers.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"./src/Header.js\");\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Menu */ \"./src/Menu.js\");\n/* harmony import */ var _SpeakerDetail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SpeakerDetail */ \"./src/SpeakerDetail.js\");\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SpeakerData */ \"./src/SpeakerData.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Speakers = ()=>{\n    _s();\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_App__WEBPACK_IMPORTED_MODULE_6__.ConfigContext);\n    const [speakingSaturday, setSpeakingSaturday] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [speakingSunday, setSpeakingSunday] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const handleChangeSaturday = ()=>{\n        setSpeakingSaturday(!speakingSaturday);\n    };\n    const handleChangeSunday = ()=>{\n        setSpeakingSunday(!speakingSunday);\n    };\n    const heartFavoriteHandler = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e, favoriteValue)=>{\n        e.preventDefault();\n        const sessionId = parseInt(e.target.attributes[\"data-sessionid\"].value);\n        dispatch({\n            type: favoriteValue === true ? \"favorite\" : \"unvaforite\",\n            id: sessionId\n        });\n    }, []);\n    const newSpeakerList = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>speakerList.filter((param)=>{\n            let { sat, sun } = param;\n            return speakingSaturday && sat || speakingSunday && sun;\n        }).sort(function(a, b) {\n            if (a.firstName < b.firstName) {\n                return -1;\n            }\n            if (a.firstName > b.firstName) {\n                return 1;\n            }\n            return 0;\n        }), [\n        speakingSaturday,\n        speakingSunday,\n        speakerList\n    ]);\n    const speakerListFiltered = isLoading ? [] : newSpeakerList;\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"isLoading....\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\src\\\\Speakers.js\",\n        lineNumber: 51,\n        columnNumber: 26\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\src\\\\Speakers.js\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\src\\\\Speakers.js\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"btn-toolbar margintopbottom5 checbox-bigger\",\n                        children: context.showSpeakerSpeakingDays === false ? null : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"hide\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"form-check-inline\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"form-check-label\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"checkbox\",\n                                                className: \"form-check-input\",\n                                                onChange: handleChangeSaturday,\n                                                checked: speakingSaturday\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\src\\\\Speakers.js\",\n                                                lineNumber: 63,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            \"Saturday Speakers\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\src\\\\Speakers.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"form-check-inline\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            className: \"form-check-label\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    type: \"checkbox\",\n                                                    className: \"form-check-input\",\n                                                    onChange: handleChangeSunday,\n                                                    checked: speakingSunday\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\src\\\\Speakers.js\",\n                                                    lineNumber: 71,\n                                                    columnNumber: 37\n                                                }, undefined),\n                                                \"Sunday Speakers\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\src\\\\Speakers.js\",\n                                            lineNumber: 70,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\src\\\\Speakers.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\src\\\\Speakers.js\",\n                                lineNumber: 61,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\src\\\\Speakers.js\",\n                            lineNumber: 60,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\src\\\\Speakers.js\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card-deck\",\n                            children: speakerListFiltered.map((param)=>{\n                                let { id, firstName, lastName, bio, favorite } = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakerDetail__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    id: id,\n                                    favorite: favorite,\n                                    firstName: firstName,\n                                    lastName: lastName,\n                                    bio: bio,\n                                    onHeartFavouriteHandler: heartFavoriteHandler\n                                }, id, false, {\n                                    fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\src\\\\Speakers.js\",\n                                    lineNumber: 86,\n                                    columnNumber: 33\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\src\\\\Speakers.js\",\n                            lineNumber: 83,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\src\\\\Speakers.js\",\n                        lineNumber: 82,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\src\\\\Speakers.js\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\src\\\\Speakers.js\",\n        lineNumber: 54,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Speakers, \"UjlhY/VI3LBzk3rmNxZ8MG6IMKw=\");\n_c = Speakers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speakers);\nvar _c;\n$RefreshReg$(_c, \"Speakers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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X0UvLi9zcmMvU3BlYWtlcnMuanM/MmZiYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlUmVkdWNlciwgdXNlQ2FsbGJhY2ssIHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCAgSGVhZGVyICBmcm9tIFwiLi9IZWFkZXJcIjtcclxuaW1wb3J0IE1lbnUgIGZyb20gXCIuL01lbnVcIjtcclxuaW1wb3J0IFNwZWFrZXJEZXRhaWwgIGZyb20gXCIuL1NwZWFrZXJEZXRhaWxcIjtcclxuaW1wb3J0IFNwZWFrZXJEYXRhIGZyb20gXCIuL1NwZWFrZXJEYXRhXCI7XHJcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQgfSBmcm9tIFwiLi9BcHBcIjtcclxuXHJcblxyXG5jb25zdCBTcGVha2VycyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KENvbmZpZ0NvbnRleHQpO1xyXG4gICAgY29uc3QgW3NwZWFraW5nU2F0dXJkYXksIHNldFNwZWFraW5nU2F0dXJkYXldID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbc3BlYWtpbmdTdW5kYXksIHNldFNwZWFraW5nU3VuZGF5XSA9IHVzZVN0YXRlKHRydWUpXHJcblxyXG4gICAgXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VTYXR1cmRheSA9ICgpID0+IHtcclxuICAgICAgICBzZXRTcGVha2luZ1NhdHVyZGF5KCFzcGVha2luZ1NhdHVyZGF5KTtcclxuICAgIH07XHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VTdW5kYXkgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0U3BlYWtpbmdTdW5kYXkoIXNwZWFraW5nU3VuZGF5KTtcclxuICAgIH07XHJcblxyXG4gIFxyXG5cclxuICAgIGNvbnN0IGhlYXJ0RmF2b3JpdGVIYW5kbGVyID0gdXNlQ2FsbGJhY2soKGUsIGZhdm9yaXRlVmFsdWUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3Qgc2Vzc2lvbklkID0gcGFyc2VJbnQoZS50YXJnZXQuYXR0cmlidXRlc1snZGF0YS1zZXNzaW9uaWQnXS52YWx1ZSk7XHJcblxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogZmF2b3JpdGVWYWx1ZSA9PT0gdHJ1ZSA/IFwiZmF2b3JpdGVcIiA6IFwidW52YWZvcml0ZVwiLFxyXG4gICAgICAgICAgICBpZDogc2Vzc2lvbklkXHJcbiAgICAgICAgfSlcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0IG5ld1NwZWFrZXJMaXN0ID0gdXNlTWVtbygoKSA9PiBzcGVha2VyTGlzdFxyXG4gICAgLmZpbHRlcihcclxuICAgICAgICAoeyBzYXQsIHN1biB9KSA9PiAoc3BlYWtpbmdTYXR1cmRheSAmJiBzYXQpIHx8IChzcGVha2luZ1N1bmRheSAmJiBzdW4pXHJcbiAgICApXHJcbiAgICAuc29ydChmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgICAgaWYgKGEuZmlyc3ROYW1lIDwgYi5maXJzdE5hbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYS5maXJzdE5hbWUgPiBiLmZpcnN0TmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9KSwgW3NwZWFraW5nU2F0dXJkYXksIHNwZWFraW5nU3VuZGF5LCBzcGVha2VyTGlzdF0pXHJcblxyXG4gICAgY29uc3Qgc3BlYWtlckxpc3RGaWx0ZXJlZCA9IGlzTG9hZGluZyA/IFtdIDogbmV3U3BlYWtlckxpc3Q7XHJcblxyXG4gICAgaWYoaXNMb2FkaW5nKSByZXR1cm4gPGRpdj5pc0xvYWRpbmcuLi4uPC9kaXY+XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgIDxNZW51IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi10b29sYmFyIG1hcmdpbnRvcGJvdHRvbTUgY2hlY2JveC1iaWdnZXJcIj5cclxuICAgICAgICAgICAgICAgIHtjb250ZXh0LnNob3dTcGVha2VyU3BlYWtpbmdEYXlzID09PSBmYWxzZSA/IG51bGwgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVNhdHVyZGF5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzcGVha2luZ1NhdHVyZGF5fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNhdHVyZGF5IFNwZWFrZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VTdW5kYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzcGVha2luZ1N1bmRheX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdW5kYXkgU3BlYWtlcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZGVja1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3NwZWFrZXJMaXN0RmlsdGVyZWQubWFwKCh7aWQsIGZpcnN0TmFtZSwgbGFzdE5hbWUsIGJpbywgZmF2b3JpdGV9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGVha2VyRGV0YWlsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2lkfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmF2b3JpdGU9e2Zhdm9yaXRlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lPXtmaXJzdE5hbWV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0TmFtZT17bGFzdE5hbWV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaW89e2Jpb30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSGVhcnRGYXZvdXJpdGVIYW5kbGVyPXtoZWFydEZhdm9yaXRlSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcnM7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQ29udGV4dCIsInVzZVJlZHVjZXIiLCJ1c2VDYWxsYmFjayIsInVzZU1lbW8iLCJIZWFkZXIiLCJNZW51IiwiU3BlYWtlckRldGFpbCIsIlNwZWFrZXJEYXRhIiwiQ29uZmlnQ29udGV4dCIsIlNwZWFrZXJzIiwiY29udGV4dCIsInNwZWFraW5nU2F0dXJkYXkiLCJzZXRTcGVha2luZ1NhdHVyZGF5Iiwic3BlYWtpbmdTdW5kYXkiLCJzZXRTcGVha2luZ1N1bmRheSIsImhhbmRsZUNoYW5nZVNhdHVyZGF5IiwiaGFuZGxlQ2hhbmdlU3VuZGF5IiwiaGVhcnRGYXZvcml0ZUhhbmRsZXIiLCJlIiwiZmF2b3JpdGVWYWx1ZSIsInByZXZlbnREZWZhdWx0Iiwic2Vzc2lvbklkIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJhdHRyaWJ1dGVzIiwidmFsdWUiLCJkaXNwYXRjaCIsInR5cGUiLCJpZCIsIm5ld1NwZWFrZXJMaXN0Iiwic3BlYWtlckxpc3QiLCJmaWx0ZXIiLCJzYXQiLCJzdW4iLCJzb3J0IiwiYSIsImIiLCJmaXJzdE5hbWUiLCJzcGVha2VyTGlzdEZpbHRlcmVkIiwiaXNMb2FkaW5nIiwiZGl2IiwiY2xhc3NOYW1lIiwic2hvd1NwZWFrZXJTcGVha2luZ0RheXMiLCJsYWJlbCIsImlucHV0Iiwib25DaGFuZ2UiLCJjaGVja2VkIiwibWFwIiwibGFzdE5hbWUiLCJiaW8iLCJmYXZvcml0ZSIsIm9uSGVhcnRGYXZvdXJpdGVIYW5kbGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Speakers.js\n"));

/***/ })

});