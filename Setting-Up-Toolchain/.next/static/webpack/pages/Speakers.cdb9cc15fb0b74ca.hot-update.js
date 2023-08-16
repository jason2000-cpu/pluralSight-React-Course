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

/***/ "./src/Speakers.js":
/*!*************************!*\
  !*** ./src/Speakers.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"./src/Header.js\");\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Menu */ \"./src/Menu.js\");\n/* harmony import */ var _SpeakerDetail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SpeakerDetail */ \"./src/SpeakerDetail.js\");\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SpeakerData */ \"./src/SpeakerData.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Speakers = ()=>{\n    _s();\n    // const [speakerList, setSpeakerList] = useState([]);\n    const speakerReducer = (state, action)=>{\n        const updateFavourite = (favoriteVal)=>{\n            return state.map((item, index)=>{\n                if (index === action.sessionId) {\n                    return {\n                        ...item,\n                        favorite: favoriteVal\n                    };\n                }\n                return item;\n            });\n        };\n        switch(action.type){\n            case \"setSpeakerList\":\n                {\n                    return action.data;\n                }\n            case \"favorite\":\n                {\n                    return updateFavourite(true);\n                }\n            case \"unvaforite\":\n                {\n                    return updateFavourite(false);\n                }\n            default:\n                return state;\n        }\n    };\n    const [speakerList, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(speakerReducer, []);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [speakingSaturday, setSpeakingSaturday] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [speakingSunday, setSpeakingSunday] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_App__WEBPACK_IMPORTED_MODULE_6__.ConfigContext);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setIsLoading(true);\n        new Promise(function(resolve) {\n            setTimeout(function() {\n                resolve();\n            }, 1000);\n        }).then(()=>{\n            setIsLoading(false);\n        });\n        // setSpeakerList(SpeakerData);\n        dispatch({\n            type: \"setSpeakerList\",\n            data: _SpeakerData__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n        });\n        return ()=>{\n            console.log(\"cleanup\");\n        };\n    }, []);\n    const handleChangeSaturday = ()=>{\n        setSpeakingSaturday(!speakingSaturday);\n    };\n    const handleChangeSunday = ()=>{\n        setSpeakingSunday(!speakingSunday);\n    };\n    const speakerListFiltered = isLoading ? [] : speakerList.filter((param)=>{\n        let { sat, sun } = param;\n        return speakingSaturday && sat || speakingSunday && sun;\n    }).sort(function(a, b) {\n        if (a.firstName < b.firstName) {\n            return -1;\n        }\n        if (a.firstName > b.firstName) {\n            return 1;\n        }\n        return 0;\n    });\n    const heartFavoriteHandler = (e, favoriteValue)=>{\n        e.preventDefault();\n        const sessionId = parseInt(e.target.attributes[\"data-sessionid\"].value);\n        dispatch({\n            type: favoriteValue === true ? \"favorite\" : \"unvaforite\",\n            sessionId: sessionId\n        });\n    // setSpeakerList(\n    //     speakerList.map((item) => {\n    //         if (item.id === sessionId) {\n    //             return {...item, favorite:favoriteValue};\n    //         }\n    //         return item;\n    //     })\n    // )\n    };\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"isLoading....\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\src\\\\Speakers.js\",\n        lineNumber: 102,\n        columnNumber: 26\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\src\\\\Speakers.js\",\n                lineNumber: 106,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\src\\\\Speakers.js\",\n                lineNumber: 107,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"btn-toolbar margintopbottom5 checbox-bigger\",\n                        children: context.showSpeakerSpeakingDays === false ? null : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"hide\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"form-check-inline\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"form-check-label\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"checkbox\",\n                                                className: \"form-check-input\",\n                                                onChange: handleChangeSaturday,\n                                                checked: speakingSaturday\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\src\\\\Speakers.js\",\n                                                lineNumber: 114,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            \"Saturday Speakers\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\src\\\\Speakers.js\",\n                                        lineNumber: 113,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"form-check-inline\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            className: \"form-check-label\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    type: \"checkbox\",\n                                                    className: \"form-check-input\",\n                                                    onChange: handleChangeSunday,\n                                                    checked: speakingSunday\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\src\\\\Speakers.js\",\n                                                    lineNumber: 122,\n                                                    columnNumber: 37\n                                                }, undefined),\n                                                \"Sunday Speakers\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\src\\\\Speakers.js\",\n                                            lineNumber: 121,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\src\\\\Speakers.js\",\n                                        lineNumber: 120,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\src\\\\Speakers.js\",\n                                lineNumber: 112,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\src\\\\Speakers.js\",\n                            lineNumber: 111,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\src\\\\Speakers.js\",\n                        lineNumber: 109,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card-deck\",\n                            children: speakerListFiltered.map((param)=>{\n                                let { id, firstName, lastName, bio, favorite } = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakerDetail__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    id: id,\n                                    favorite: favorite,\n                                    firstName: firstName,\n                                    lastName: lastName,\n                                    bio: bio,\n                                    onHeartFavouriteHandler: heartFavoriteHandler\n                                }, id, false, {\n                                    fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\src\\\\Speakers.js\",\n                                    lineNumber: 137,\n                                    columnNumber: 33\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\src\\\\Speakers.js\",\n                            lineNumber: 134,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\src\\\\Speakers.js\",\n                        lineNumber: 133,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\src\\\\Speakers.js\",\n                lineNumber: 108,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\src\\\\Speakers.js\",\n        lineNumber: 105,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Speakers, \"TXHVrMsn7TKz1WWky1I1nyoOUd4=\");\n_c = Speakers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speakers);\nvar _c;\n$RefreshReg$(_c, \"Speakers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVU7O2tDQUNYLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDZDFCLFFBQVEyQix1QkFBdUIsS0FBSyxRQUFRLHFCQUN6Qyw4REFBQ0Y7NEJBQUlDLFdBQVU7c0NBQ1gsNEVBQUNEO2dDQUFJQyxXQUFVOztrREFDWCw4REFBQ0U7d0NBQU1GLFdBQVU7OzBEQUNiLDhEQUFDRztnREFBTXZDLE1BQUs7Z0RBQVdvQyxXQUFVO2dEQUM3QkksVUFBVXZCO2dEQUNWd0IsU0FBU25DOzs7Ozs7NENBQ1A7Ozs7Ozs7a0RBR1YsOERBQUM2Qjt3Q0FBSUMsV0FBVTtrREFDWCw0RUFBQ0U7NENBQU1GLFdBQVU7OzhEQUNiLDhEQUFDRztvREFBTXZDLE1BQUs7b0RBQVdvQyxXQUFVO29EQUM3QkksVUFBVXRCO29EQUNWdUIsU0FBU2pDOzs7Ozs7Z0RBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBUXJCLDhEQUFDMkI7d0JBQUlDLFdBQVU7a0NBQ1gsNEVBQUNEOzRCQUFJQyxXQUFVO3NDQUNWakIsb0JBQW9CeEIsR0FBRyxDQUFDO29DQUFDLEVBQUMrQyxFQUFFLEVBQUVoQixTQUFTLEVBQUVpQixRQUFRLEVBQUVDLEdBQUcsRUFBRTdDLFFBQVEsRUFBQztnQ0FDOUQscUJBQ0ksOERBQUNiLHNEQUFhQTtvQ0FFVndELElBQUlBO29DQUNKM0MsVUFBVUE7b0NBQ1YyQixXQUFXQTtvQ0FDWGlCLFVBQVVBO29DQUNWQyxLQUFLQTtvQ0FDTEMseUJBQXlCbEI7bUNBTnBCZTs7Ozs7NEJBU2pCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF4QjtHQWpKTXJEO0tBQUFBO0FBbUpOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9TcGVha2Vycy5qcz8yZmJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgIEhlYWRlciAgZnJvbSBcIi4vSGVhZGVyXCI7XHJcbmltcG9ydCBNZW51ICBmcm9tIFwiLi9NZW51XCI7XHJcbmltcG9ydCBTcGVha2VyRGV0YWlsICBmcm9tIFwiLi9TcGVha2VyRGV0YWlsXCI7XHJcbmltcG9ydCBTcGVha2VyRGF0YSBmcm9tIFwiLi9TcGVha2VyRGF0YVwiO1xyXG5pbXBvcnQgeyBDb25maWdDb250ZXh0IH0gZnJvbSBcIi4vQXBwXCI7XHJcblxyXG5cclxuY29uc3QgU3BlYWtlcnMgPSAoKSA9PiB7XHJcbiAgICAvLyBjb25zdCBbc3BlYWtlckxpc3QsIHNldFNwZWFrZXJMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICBjb25zdCBzcGVha2VyUmVkdWNlciA9KHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICBjb25zdCB1cGRhdGVGYXZvdXJpdGUgPSAoZmF2b3JpdGVWYWwpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGluZGV4ID09PSBhY3Rpb24uc2Vzc2lvbklkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5pdGVtLCBmYXZvcml0ZTogZmF2b3JpdGVWYWx9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwic2V0U3BlYWtlckxpc3RcIiA6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhY3Rpb24uZGF0YVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJmYXZvcml0ZVwiIDoge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZUZhdm91cml0ZSh0cnVlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJ1bnZhZm9yaXRlXCI6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1cGRhdGVGYXZvdXJpdGUoZmFsc2UpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdCA6IFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgW3NwZWFrZXJMaXN0LCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHNwZWFrZXJSZWR1Y2VyLCBbXSlcclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtzcGVha2luZ1NhdHVyZGF5LCBzZXRTcGVha2luZ1NhdHVyZGF5XSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW3NwZWFraW5nU3VuZGF5LCBzZXRTcGVha2luZ1N1bmRheV0gPSB1c2VTdGF0ZSh0cnVlKVxyXG5cclxuICAgIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KENvbmZpZ0NvbnRleHQpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gc2V0U3BlYWtlckxpc3QoU3BlYWtlckRhdGEpO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogXCJzZXRTcGVha2VyTGlzdFwiLFxyXG4gICAgICAgICAgICBkYXRhOiBTcGVha2VyRGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjbGVhbnVwXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuICAgIFxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlU2F0dXJkYXkgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0U3BlYWtpbmdTYXR1cmRheSghc3BlYWtpbmdTYXR1cmRheSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlU3VuZGF5ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFNwZWFraW5nU3VuZGF5KCFzcGVha2luZ1N1bmRheSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNwZWFrZXJMaXN0RmlsdGVyZWQgPSBpc0xvYWRpbmcgPyBbXSA6IFxyXG4gICAgICAgIHNwZWFrZXJMaXN0LmZpbHRlcihcclxuICAgICAgICAgICAgKHtzYXQsIHN1bn0pID0+IChzcGVha2luZ1NhdHVyZGF5ICYmIHNhdCkgfHwgKHNwZWFraW5nU3VuZGF5ICYmIHN1biksXHJcbiAgICAgICAgKS5zb3J0KGZ1bmN0aW9uKGEsYikge1xyXG4gICAgICAgICAgICBpZiAoYS5maXJzdE5hbWUgPCBiLmZpcnN0TmFtZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChhLmZpcnN0TmFtZSA+IGIuZmlyc3ROYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9KVxyXG5cclxuICAgIGNvbnN0IGhlYXJ0RmF2b3JpdGVIYW5kbGVyID0gKGUsIGZhdm9yaXRlVmFsdWUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3Qgc2Vzc2lvbklkID0gcGFyc2VJbnQoZS50YXJnZXQuYXR0cmlidXRlc1snZGF0YS1zZXNzaW9uaWQnXS52YWx1ZSk7XHJcblxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogZmF2b3JpdGVWYWx1ZSA9PT0gdHJ1ZSA/IFwiZmF2b3JpdGVcIiA6IFwidW52YWZvcml0ZVwiLFxyXG4gICAgICAgICAgICBzZXNzaW9uSWQ6IHNlc3Npb25JZFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8gc2V0U3BlYWtlckxpc3QoXHJcbiAgICAgICAgLy8gICAgIHNwZWFrZXJMaXN0Lm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgaWYgKGl0ZW0uaWQgPT09IHNlc3Npb25JZCkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHJldHVybiB7Li4uaXRlbSwgZmF2b3JpdGU6ZmF2b3JpdGVWYWx1ZX07XHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAvLyApXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmKGlzTG9hZGluZykgcmV0dXJuIDxkaXY+aXNMb2FkaW5nLi4uLjwvZGl2PlxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICA8TWVudSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tdG9vbGJhciBtYXJnaW50b3Bib3R0b201IGNoZWNib3gtYmlnZ2VyXCI+XHJcbiAgICAgICAgICAgICAgICB7Y29udGV4dC5zaG93U3BlYWtlclNwZWFraW5nRGF5cyA9PT0gZmFsc2UgPyBudWxsIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VTYXR1cmRheX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c3BlYWtpbmdTYXR1cmRheX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTYXR1cmRheSBTcGVha2Vyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlU3VuZGF5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c3BlYWtpbmdTdW5kYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3VuZGF5IFNwZWFrZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWRlY2tcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzcGVha2VyTGlzdEZpbHRlcmVkLm1hcCgoe2lkLCBmaXJzdE5hbWUsIGxhc3ROYW1lLCBiaW8sIGZhdm9yaXRlfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BlYWtlckRldGFpbCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtpZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhdm9yaXRlPXtmYXZvcml0ZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZT17Zmlyc3ROYW1lfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdE5hbWU9e2xhc3ROYW1lfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmlvPXtiaW99IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkhlYXJ0RmF2b3VyaXRlSGFuZGxlcj17aGVhcnRGYXZvcml0ZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJzO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwidXNlUmVkdWNlciIsIkhlYWRlciIsIk1lbnUiLCJTcGVha2VyRGV0YWlsIiwiU3BlYWtlckRhdGEiLCJDb25maWdDb250ZXh0IiwiU3BlYWtlcnMiLCJzcGVha2VyUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidXBkYXRlRmF2b3VyaXRlIiwiZmF2b3JpdGVWYWwiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJzZXNzaW9uSWQiLCJmYXZvcml0ZSIsInR5cGUiLCJkYXRhIiwic3BlYWtlckxpc3QiLCJkaXNwYXRjaCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInNwZWFraW5nU2F0dXJkYXkiLCJzZXRTcGVha2luZ1NhdHVyZGF5Iiwic3BlYWtpbmdTdW5kYXkiLCJzZXRTcGVha2luZ1N1bmRheSIsImNvbnRleHQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZVNhdHVyZGF5IiwiaGFuZGxlQ2hhbmdlU3VuZGF5Iiwic3BlYWtlckxpc3RGaWx0ZXJlZCIsImZpbHRlciIsInNhdCIsInN1biIsInNvcnQiLCJhIiwiYiIsImZpcnN0TmFtZSIsImhlYXJ0RmF2b3JpdGVIYW5kbGVyIiwiZSIsImZhdm9yaXRlVmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsInBhcnNlSW50IiwidGFyZ2V0IiwiYXR0cmlidXRlcyIsInZhbHVlIiwiZGl2IiwiY2xhc3NOYW1lIiwic2hvd1NwZWFrZXJTcGVha2luZ0RheXMiLCJsYWJlbCIsImlucHV0Iiwib25DaGFuZ2UiLCJjaGVja2VkIiwiaWQiLCJsYXN0TmFtZSIsImJpbyIsIm9uSGVhcnRGYXZvdXJpdGVIYW5kbGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Speakers.js\n"));

/***/ })

});