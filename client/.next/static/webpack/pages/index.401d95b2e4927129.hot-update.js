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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var _components_cards_parallaxBG__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/cards/parallaxBG */ \"./components/cards/parallaxBG.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_cards_Post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/cards/Post */ \"./components/cards/Post.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_routes_UserRoute__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/routes/UserRoute */ \"./components/routes/UserRoute.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction Home(param) {\n    let { posts } = param;\n    _s();\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_2__.UserContext);\n    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    // for posts\n    const [userposts, setUserPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    //people\n    const [people, setPeople] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // for comments\n    const [comment, setComment] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [currentPost, setCurrentPost] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const newsFeed = async ()=>{\n        try {\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(\"/news-feed\");\n            // console.log(\"User posts=>\", data);\n            setUserPosts(data);\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    const head = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"SOCIAL MEDIA- A social network by devs for devs\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\pro\\\\Authentication_using_MERNSTACK\\\\client\\\\pages\\\\index.js\",\n                    lineNumber: 42,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                    name: \"description\",\n                    content: \"A social network by developers for other web developers\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\pro\\\\Authentication_using_MERNSTACK\\\\client\\\\pages\\\\index.js\",\n                    lineNumber: 43,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                    property: \"og:description\",\n                    content: \"A social network by developers for other web developers\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\pro\\\\Authentication_using_MERNSTACK\\\\client\\\\pages\\\\index.js\",\n                    lineNumber: 44,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                    property: \"og:type\",\n                    content: \"website\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\pro\\\\Authentication_using_MERNSTACK\\\\client\\\\pages\\\\index.js\",\n                    lineNumber: 46,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                    property: \"og:site_name\",\n                    content: \"SOCIALMEDIA\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\pro\\\\Authentication_using_MERNSTACK\\\\client\\\\pages\\\\index.js\",\n                    lineNumber: 47,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                    property: \"og:url\",\n                    content: \"http://socialmedia.com\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\pro\\\\Authentication_using_MERNSTACK\\\\client\\\\pages\\\\index.js\",\n                    lineNumber: 48,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                    property: \"og:image:secure_url\",\n                    content: \"http://socilamedia.com/images/default.jpg\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\pro\\\\Authentication_using_MERNSTACK\\\\client\\\\pages\\\\index.js\",\n                    lineNumber: 49,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\pro\\\\Authentication_using_MERNSTACK\\\\client\\\\pages\\\\index.js\",\n            lineNumber: 41,\n            columnNumber: 9\n        }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_routes_UserRoute__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        children: [\n            head(),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container-fluid\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cards_parallaxBG__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        url: \"/images/default.jpg\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\pro\\\\Authentication_using_MERNSTACK\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row pt-5\",\n                        \"py-3\": true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-md-6 offset-1\",\n                            children: posts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                    href: \"/post/\".concat(post._id),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cards_Post__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        post: post,\n                                        handleDelete: handleDelete,\n                                        handleLike: handleLike,\n                                        handleUnlike: handleUnlike,\n                                        handleComment: handleComment\n                                    }, post._id, false, {\n                                        fileName: \"D:\\\\pro\\\\Authentication_using_MERNSTACK\\\\client\\\\pages\\\\index.js\",\n                                        lineNumber: 65,\n                                        columnNumber: 37\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\pro\\\\Authentication_using_MERNSTACK\\\\client\\\\pages\\\\index.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 33\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"D:\\\\pro\\\\Authentication_using_MERNSTACK\\\\client\\\\pages\\\\index.js\",\n                            lineNumber: 61,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\pro\\\\Authentication_using_MERNSTACK\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\pro\\\\Authentication_using_MERNSTACK\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\pro\\\\Authentication_using_MERNSTACK\\\\client\\\\pages\\\\index.js\",\n        lineNumber: 55,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"d8pZ3pv0Um4XbZFwVVSH1oNChwk=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNWO0FBQ2U7QUFDOUI7QUFDa0I7QUFDZjtBQUNBO0FBQzBCOztBQUV4QyxTQUFTVSxLQUFLLEtBQVM7UUFBVCxFQUFFQyxLQUFLLEVBQUUsR0FBVDs7SUFFekIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdaLGlEQUFVQSxDQUFDRSxpREFBV0E7SUFFaEQsTUFBTSxDQUFDVyxTQUFTQyxXQUFXLEdBQUdiLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ2MsT0FBT0MsU0FBUyxHQUFHZiwrQ0FBUUEsQ0FBQyxDQUFDO0lBRXBDLFlBQVk7SUFDWixNQUFNLENBQUNnQixXQUFXQyxhQUFhLEdBQUdqQiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzdDLFFBQVE7SUFDUixNQUFNLENBQUNrQixRQUFRQyxVQUFVLEdBQUduQiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3ZDLE1BQU0sQ0FBQ29CLFNBQVNDLFdBQVcsR0FBR3JCLCtDQUFRQSxDQUFDO0lBQ3ZDLGVBQWU7SUFDZixNQUFNLENBQUNzQixTQUFTQyxXQUFXLEdBQUd2QiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUN3QixTQUFTQyxXQUFXLEdBQUd6QiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUMwQixhQUFhQyxlQUFlLEdBQUczQiwrQ0FBUUEsQ0FBQyxDQUFDO0lBRWhELE1BQU00QixXQUFXO1FBQ2IsSUFBSTtZQUNBLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUcsTUFBTTFCLGlEQUFTLENBQUM7WUFDakMscUNBQXFDO1lBQ3JDYyxhQUFhWTtRQUVqQixFQUFFLE9BQU9FLEtBQUs7WUFDVkMsUUFBUUMsR0FBRyxDQUFDRjtRQUNoQjtJQUNKO0lBSUEsTUFBTUcsT0FBTyxrQkFDVCw4REFBQzdCLGtEQUFJQTs7OEJBQ0QsOERBQUM4Qjs4QkFBTTs7Ozs7OzhCQUNQLDhEQUFDQztvQkFBS0MsTUFBSztvQkFBY3pCLFNBQVE7Ozs7Ozs4QkFDakMsOERBQUN3QjtvQkFBS0UsVUFBUztvQkFDWDFCLFNBQVE7Ozs7Ozs4QkFDWiw4REFBQ3dCO29CQUFLRSxVQUFTO29CQUFVMUIsU0FBUTs7Ozs7OzhCQUNqQyw4REFBQ3dCO29CQUFLRSxVQUFTO29CQUFlMUIsU0FBUTs7Ozs7OzhCQUN0Qyw4REFBQ3dCO29CQUFLRSxVQUFTO29CQUFTMUIsU0FBUTs7Ozs7OzhCQUNoQyw4REFBQ3dCO29CQUFLRSxVQUFTO29CQUFzQjFCLFNBQVE7Ozs7Ozs7Ozs7OztJQUtyRCxxQkFDSSw4REFBQ0wsb0VBQVNBOztZQUNMMkI7MEJBQ0QsOERBQUNLO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ3RDLG9FQUFVQTt3QkFBQ3VDLEtBQUk7Ozs7OztrQ0FFaEIsOERBQUNGO3dCQUFJQyxXQUFVO3dCQUFXRSxNQUFJO2tDQUMxQiw0RUFBQ0g7NEJBQUlDLFdBQVU7c0NBRVAvQixNQUFNa0MsR0FBRyxDQUFDLENBQUNDLHFCQUNQLDhEQUFDdEMsa0RBQUlBO29DQUFDdUMsTUFBTSxTQUFrQixPQUFURCxLQUFLRSxHQUFHOzhDQUN6Qiw0RUFBQzFDLDhEQUFJQTt3Q0FBZ0J3QyxNQUFNQTt3Q0FDdkJHLGNBQWNBO3dDQUNkQyxZQUFZQTt3Q0FDWkMsY0FBY0E7d0NBQ2RDLGVBQWVBO3VDQUpSTixLQUFLRSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWN2RDtHQXJFd0J0QztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlYWN0LCB1c2VDb250ZXh0LHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQnO1xyXG5pbXBvcnQgUGFyYWxsYXhCRyBmcm9tICcuLi9jb21wb25lbnRzL2NhcmRzL3BhcmFsbGF4QkcnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgUG9zdCBmcm9tICcuLi9jb21wb25lbnRzL2NhcmRzL1Bvc3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFVzZXJSb3V0ZSBmcm9tICcuLi9jb21wb25lbnRzL3JvdXRlcy9Vc2VyUm91dGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHBvc3RzIH0pIHtcclxuXHJcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG5cclxuICAgIGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gICAgLy8gZm9yIHBvc3RzXHJcbiAgICBjb25zdCBbdXNlcnBvc3RzLCBzZXRVc2VyUG9zdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgLy9wZW9wbGVcclxuICAgIGNvbnN0IFtwZW9wbGUsIHNldFBlb3BsZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAvLyBmb3IgY29tbWVudHNcclxuICAgIGNvbnN0IFtjb21tZW50LCBzZXRDb21tZW50XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtjdXJyZW50UG9zdCwgc2V0Q3VycmVudFBvc3RdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuICAgIGNvbnN0IG5ld3NGZWVkID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCcvbmV3cy1mZWVkJyk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiVXNlciBwb3N0cz0+XCIsIGRhdGEpO1xyXG4gICAgICAgICAgICBzZXRVc2VyUG9zdHMoZGF0YSk7XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG5cclxuXHJcbiAgICBjb25zdCBoZWFkID0gKCkgPT4gKFxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8dGl0bGU+U09DSUFMIE1FRElBLSBBIHNvY2lhbCBuZXR3b3JrIGJ5IGRldnMgZm9yIGRldnM8L3RpdGxlPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiQSBzb2NpYWwgbmV0d29yayBieSBkZXZlbG9wZXJzIGZvciBvdGhlciB3ZWIgZGV2ZWxvcGVyc1wiIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgY29udGVudD1cIkEgc29jaWFsIG5ldHdvcmsgYnkgZGV2ZWxvcGVycyBmb3Igb3RoZXIgd2ViIGRldmVsb3BlcnNcIiAvPlxyXG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6c2l0ZV9uYW1lXCIgY29udGVudD1cIlNPQ0lBTE1FRElBXCIgLz5cclxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PVwiaHR0cDovL3NvY2lhbG1lZGlhLmNvbVwiIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6c2VjdXJlX3VybFwiIGNvbnRlbnQ9XCJodHRwOi8vc29jaWxhbWVkaWEuY29tL2ltYWdlcy9kZWZhdWx0LmpwZ1wiIC8+XHJcblxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgIClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxVc2VyUm91dGU+XHJcbiAgICAgICAgICAgIHtoZWFkKCl9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgICA8UGFyYWxsYXhCRyB1cmw9XCIvaW1hZ2VzL2RlZmF1bHQuanBnXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBwdC01XCIgcHktMz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG9mZnNldC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RzLm1hcCgocG9zdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcG9zdC8ke3Bvc3QuX2lkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9zdCBrZXk9e3Bvc3QuX2lkfSBwb3N0PXtwb3N0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRGVsZXRlPXtoYW5kbGVEZWxldGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVMaWtlPXtoYW5kbGVMaWtlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlVW5saWtlPXtoYW5kbGVVbmxpa2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDb21tZW50PXtoYW5kbGVDb21tZW50fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9Vc2VyUm91dGU+XHJcbiAgICApO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldCgnL3Bvc3RzJyk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBwb3N0czogZGF0YSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIlVzZXJDb250ZXh0IiwiUGFyYWxsYXhCRyIsImF4aW9zIiwiUG9zdCIsIkhlYWQiLCJMaW5rIiwiVXNlclJvdXRlIiwiSG9tZSIsInBvc3RzIiwic3RhdGUiLCJzZXRTdGF0ZSIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwiaW1hZ2UiLCJzZXRJbWFnZSIsInVzZXJwb3N0cyIsInNldFVzZXJQb3N0cyIsInBlb3BsZSIsInNldFBlb3BsZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiY29tbWVudCIsInNldENvbW1lbnQiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsImN1cnJlbnRQb3N0Iiwic2V0Q3VycmVudFBvc3QiLCJuZXdzRmVlZCIsImRhdGEiLCJnZXQiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiaGVhZCIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJwcm9wZXJ0eSIsImRpdiIsImNsYXNzTmFtZSIsInVybCIsInB5LTMiLCJtYXAiLCJwb3N0IiwiaHJlZiIsIl9pZCIsImhhbmRsZURlbGV0ZSIsImhhbmRsZUxpa2UiLCJoYW5kbGVVbmxpa2UiLCJoYW5kbGVDb21tZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});