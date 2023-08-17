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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"./src/Header.js\");\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Menu */ \"./src/Menu.js\");\n/* harmony import */ var _SpeakerDetail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SpeakerDetail */ \"./src/SpeakerDetail.js\");\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SpeakerData */ \"./src/SpeakerData.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Speakers = ()=>{\n    _s();\n    // const [speakerList, setSpeakerList] = useState([]);\n    const speakerReducer = (state, action)=>{\n        const updateFavourite = (favoriteVal)=>{\n            return state.map((item, index)=>{\n                if (item.id === action.sessionId) {\n                    return {\n                        ...item,\n                        favorite: favoriteVal\n                    };\n                }\n                return item;\n            });\n        };\n        switch(action.type){\n            case \"setSpeakerList\":\n                {\n                    return action.data;\n                }\n            case \"favorite\":\n                {\n                    return updateFavourite(true);\n                }\n            case \"unvaforite\":\n                {\n                    return updateFavourite(false);\n                }\n            default:\n                return state;\n        }\n    };\n    const [speakerList, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(speakerReducer, []);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [speakingSaturday, setSpeakingSaturday] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [speakingSunday, setSpeakingSunday] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_App__WEBPACK_IMPORTED_MODULE_6__.ConfigContext);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setIsLoading(true);\n        new Promise(function(resolve) {\n            setTimeout(function() {\n                resolve();\n            }, 1000);\n        }).then(()=>{\n            setIsLoading(false);\n        });\n        // setSpeakerList(SpeakerData);\n        dispatch({\n            type: \"setSpeakerList\",\n            data: _SpeakerData__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n        });\n        // console.log(speakerData)\n        return ()=>{\n            console.log(\"cleanup\");\n        };\n    }, []);\n    const handleChangeSaturday = ()=>{\n        setSpeakingSaturday(!speakingSaturday);\n    };\n    const handleChangeSunday = ()=>{\n        setSpeakingSunday(!speakingSunday);\n    };\n    const heartFavoriteHandler = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e, favoriteValue)=>{\n        e.preventDefault();\n        const sessionId = parseInt(e.target.attributes[\"data-sessionid\"].value);\n        dispatch({\n            type: favoriteValue === true ? \"favorite\" : \"unvaforite\",\n            sessionId: sessionId\n        });\n    // setSpeakerList(\n    //     speakerList.map((item) => {\n    //         if (item.id === sessionId) {\n    //             return {...item, favorite:favoriteValue};\n    //         }\n    //         return item;\n    //     })\n    // )\n    }, []);\n    const newSpeakerList = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{\n        speakerList.filter((param)=>{\n            let { sat, sun } = param;\n            return speakingSaturday && sat || speakingSunday && sun;\n        }).sort(function(a, b) {\n            if (a.firstName < b.firstName) {\n                return -1;\n            }\n            if (a.firstName > b.firstName) {\n                return 1;\n            }\n            return 0;\n        });\n    }, [\n        speakingSaturday,\n        speakingSunday,\n        speakerList\n    ]);\n    // const speakerListFiltered = isLoading ? [] : newSpeakerList;\n    const speakerListFiltered = newSpeakerList ? newSpeakerList : setIsLoading(true);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"isLoading....\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\src\\\\Speakers.js\",\n        lineNumber: 110,\n        columnNumber: 26\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\src\\\\Speakers.js\",\n                lineNumber: 114,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\src\\\\Speakers.js\",\n                lineNumber: 115,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"btn-toolbar margintopbottom5 checbox-bigger\",\n                        children: context.showSpeakerSpeakingDays === false ? null : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"hide\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"form-check-inline\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"form-check-label\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"checkbox\",\n                                                className: \"form-check-input\",\n                                                onChange: handleChangeSaturday,\n                                                checked: speakingSaturday\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\src\\\\Speakers.js\",\n                                                lineNumber: 122,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            \"Saturday Speakers\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\src\\\\Speakers.js\",\n                                        lineNumber: 121,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"form-check-inline\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            className: \"form-check-label\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    type: \"checkbox\",\n                                                    className: \"form-check-input\",\n                                                    onChange: handleChangeSunday,\n                                                    checked: speakingSunday\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\src\\\\Speakers.js\",\n                                                    lineNumber: 130,\n                                                    columnNumber: 37\n                                                }, undefined),\n                                                \"Sunday Speakers\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\src\\\\Speakers.js\",\n                                            lineNumber: 129,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\src\\\\Speakers.js\",\n                                        lineNumber: 128,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\src\\\\Speakers.js\",\n                                lineNumber: 120,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\src\\\\Speakers.js\",\n                            lineNumber: 119,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\src\\\\Speakers.js\",\n                        lineNumber: 117,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card-deck\",\n                            children: speakerListFiltered.map((param)=>{\n                                let { id, firstName, lastName, bio, favorite } = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakerDetail__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    id: id,\n                                    favorite: favorite,\n                                    firstName: firstName,\n                                    lastName: lastName,\n                                    bio: bio,\n                                    onHeartFavouriteHandler: heartFavoriteHandler\n                                }, id, false, {\n                                    fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\src\\\\Speakers.js\",\n                                    lineNumber: 145,\n                                    columnNumber: 33\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\src\\\\Speakers.js\",\n                            lineNumber: 142,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\src\\\\Speakers.js\",\n                        lineNumber: 141,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\src\\\\Speakers.js\",\n                lineNumber: 116,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\jason\\\\projects\\\\pluralSight-React-Course\\\\Setting-Up-Toolchain\\\\src\\\\Speakers.js\",\n        lineNumber: 113,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Speakers, \"ZvGf2JVMKwx1sH69Nb9dRROIq/s=\");\n_c = Speakers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speakers);\nvar _c;\n$RefreshReg$(_c, \"Speakers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZWJwYWNrOi8vX05fRS8uL3NyYy9TcGVha2Vycy5qcz8yZmJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VSZWR1Y2VyLCB1c2VDYWxsYmFjaywgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0ICBIZWFkZXIgIGZyb20gXCIuL0hlYWRlclwiO1xyXG5pbXBvcnQgTWVudSAgZnJvbSBcIi4vTWVudVwiO1xyXG5pbXBvcnQgU3BlYWtlckRldGFpbCAgZnJvbSBcIi4vU3BlYWtlckRldGFpbFwiO1xyXG5pbXBvcnQgU3BlYWtlckRhdGEgZnJvbSBcIi4vU3BlYWtlckRhdGFcIjtcclxuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCB9IGZyb20gXCIuL0FwcFwiO1xyXG5pbXBvcnQgc3BlYWtlckRhdGEgZnJvbSBcIi4vU3BlYWtlckRhdGFcIjtcclxuXHJcblxyXG5jb25zdCBTcGVha2VycyA9ICgpID0+IHtcclxuICAgIC8vIGNvbnN0IFtzcGVha2VyTGlzdCwgc2V0U3BlYWtlckxpc3RdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIGNvbnN0IHNwZWFrZXJSZWR1Y2VyID0oc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZUZhdm91cml0ZSA9IChmYXZvcml0ZVZhbCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoaXRlbS5pZCA9PT0gYWN0aW9uLnNlc3Npb25JZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7Li4uaXRlbSwgZmF2b3JpdGU6IGZhdm9yaXRlVmFsfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcInNldFNwZWFrZXJMaXN0XCIgOiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWN0aW9uLmRhdGFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwiZmF2b3JpdGVcIiA6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1cGRhdGVGYXZvdXJpdGUodHJ1ZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwidW52YWZvcml0ZVwiOiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdXBkYXRlRmF2b3VyaXRlKGZhbHNlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQgOiBcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IFtzcGVha2VyTGlzdCwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihzcGVha2VyUmVkdWNlciwgW10pXHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbc3BlYWtpbmdTYXR1cmRheSwgc2V0U3BlYWtpbmdTYXR1cmRheV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtzcGVha2luZ1N1bmRheSwgc2V0U3BlYWtpbmdTdW5kYXldID0gdXNlU3RhdGUodHJ1ZSlcclxuXHJcbiAgICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChDb25maWdDb250ZXh0KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgICAgICBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIHNldFNwZWFrZXJMaXN0KFNwZWFrZXJEYXRhKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwic2V0U3BlYWtlckxpc3RcIixcclxuICAgICAgICAgICAgZGF0YTogU3BlYWtlckRhdGFcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHNwZWFrZXJEYXRhKVxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2xlYW51cFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcbiAgICBcclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZVNhdHVyZGF5ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFNwZWFraW5nU2F0dXJkYXkoIXNwZWFraW5nU2F0dXJkYXkpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZVN1bmRheSA9ICgpID0+IHtcclxuICAgICAgICBzZXRTcGVha2luZ1N1bmRheSghc3BlYWtpbmdTdW5kYXkpO1xyXG4gICAgfTtcclxuXHJcbiAgXHJcblxyXG4gICAgY29uc3QgaGVhcnRGYXZvcml0ZUhhbmRsZXIgPSB1c2VDYWxsYmFjaygoZSwgZmF2b3JpdGVWYWx1ZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBzZXNzaW9uSWQgPSBwYXJzZUludChlLnRhcmdldC5hdHRyaWJ1dGVzWydkYXRhLXNlc3Npb25pZCddLnZhbHVlKTtcclxuXHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBmYXZvcml0ZVZhbHVlID09PSB0cnVlID8gXCJmYXZvcml0ZVwiIDogXCJ1bnZhZm9yaXRlXCIsXHJcbiAgICAgICAgICAgIHNlc3Npb25JZDogc2Vzc2lvbklkXHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyBzZXRTcGVha2VyTGlzdChcclxuICAgICAgICAvLyAgICAgc3BlYWtlckxpc3QubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICBpZiAoaXRlbS5pZCA9PT0gc2Vzc2lvbklkKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgcmV0dXJuIHsuLi5pdGVtLCBmYXZvcml0ZTpmYXZvcml0ZVZhbHVlfTtcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgIC8vICAgICB9KVxyXG4gICAgICAgIC8vIClcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0IG5ld1NwZWFrZXJMaXN0ID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICAgICAgc3BlYWtlckxpc3QuZmlsdGVyKFxyXG4gICAgICAgICAgICAoe3NhdCwgc3VufSkgPT4gKHNwZWFraW5nU2F0dXJkYXkgJiYgc2F0KSB8fCAoc3BlYWtpbmdTdW5kYXkgJiYgc3VuKSxcclxuICAgICAgICApLnNvcnQoZnVuY3Rpb24oYSxiKSB7XHJcbiAgICAgICAgICAgIGlmIChhLmZpcnN0TmFtZSA8IGIuZmlyc3ROYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGEuZmlyc3ROYW1lID4gYi5maXJzdE5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICApfSwgW3NwZWFraW5nU2F0dXJkYXksIHNwZWFraW5nU3VuZGF5LCBzcGVha2VyTGlzdF0pXHJcblxyXG4gICAgLy8gY29uc3Qgc3BlYWtlckxpc3RGaWx0ZXJlZCA9IGlzTG9hZGluZyA/IFtdIDogbmV3U3BlYWtlckxpc3Q7XHJcbiAgICBjb25zdCBzcGVha2VyTGlzdEZpbHRlcmVkID0gbmV3U3BlYWtlckxpc3QgPyBuZXdTcGVha2VyTGlzdCA6IHNldElzTG9hZGluZyh0cnVlKTtcclxuXHJcblxyXG4gICAgaWYoaXNMb2FkaW5nKSByZXR1cm4gPGRpdj5pc0xvYWRpbmcuLi4uPC9kaXY+XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgIDxNZW51IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi10b29sYmFyIG1hcmdpbnRvcGJvdHRvbTUgY2hlY2JveC1iaWdnZXJcIj5cclxuICAgICAgICAgICAgICAgIHtjb250ZXh0LnNob3dTcGVha2VyU3BlYWtpbmdEYXlzID09PSBmYWxzZSA/IG51bGwgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVNhdHVyZGF5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzcGVha2luZ1NhdHVyZGF5fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNhdHVyZGF5IFNwZWFrZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VTdW5kYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzcGVha2luZ1N1bmRheX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdW5kYXkgU3BlYWtlcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZGVja1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3NwZWFrZXJMaXN0RmlsdGVyZWQubWFwKCh7aWQsIGZpcnN0TmFtZSwgbGFzdE5hbWUsIGJpbywgZmF2b3JpdGV9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGVha2VyRGV0YWlsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2lkfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmF2b3JpdGU9e2Zhdm9yaXRlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lPXtmaXJzdE5hbWV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0TmFtZT17bGFzdE5hbWV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaW89e2Jpb30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSGVhcnRGYXZvdXJpdGVIYW5kbGVyPXtoZWFydEZhdm9yaXRlSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcnM7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQ29udGV4dCIsInVzZVJlZHVjZXIiLCJ1c2VDYWxsYmFjayIsInVzZU1lbW8iLCJIZWFkZXIiLCJNZW51IiwiU3BlYWtlckRldGFpbCIsIlNwZWFrZXJEYXRhIiwiQ29uZmlnQ29udGV4dCIsInNwZWFrZXJEYXRhIiwiU3BlYWtlcnMiLCJzcGVha2VyUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidXBkYXRlRmF2b3VyaXRlIiwiZmF2b3JpdGVWYWwiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJpZCIsInNlc3Npb25JZCIsImZhdm9yaXRlIiwidHlwZSIsImRhdGEiLCJzcGVha2VyTGlzdCIsImRpc3BhdGNoIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwic3BlYWtpbmdTYXR1cmRheSIsInNldFNwZWFraW5nU2F0dXJkYXkiLCJzcGVha2luZ1N1bmRheSIsInNldFNwZWFraW5nU3VuZGF5IiwiY29udGV4dCIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2hhbmdlU2F0dXJkYXkiLCJoYW5kbGVDaGFuZ2VTdW5kYXkiLCJoZWFydEZhdm9yaXRlSGFuZGxlciIsImUiLCJmYXZvcml0ZVZhbHVlIiwicHJldmVudERlZmF1bHQiLCJwYXJzZUludCIsInRhcmdldCIsImF0dHJpYnV0ZXMiLCJ2YWx1ZSIsIm5ld1NwZWFrZXJMaXN0IiwiZmlsdGVyIiwic2F0Iiwic3VuIiwic29ydCIsImEiLCJiIiwiZmlyc3ROYW1lIiwic3BlYWtlckxpc3RGaWx0ZXJlZCIsImRpdiIsImNsYXNzTmFtZSIsInNob3dTcGVha2VyU3BlYWtpbmdEYXlzIiwibGFiZWwiLCJpbnB1dCIsIm9uQ2hhbmdlIiwiY2hlY2tlZCIsImxhc3ROYW1lIiwiYmlvIiwib25IZWFydEZhdm91cml0ZUhhbmRsZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Speakers.js\n"));

/***/ })

});