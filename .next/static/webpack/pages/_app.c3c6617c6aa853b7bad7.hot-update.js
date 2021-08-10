webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./css/globalStyles.scss":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-7-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-7-2!(webpack)/resolve-url-loader??ref--5-oneOf-7-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-7-4!./css/globalStyles.scss ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/getUrl.js */ "./node_modules/next/dist/compiled/css-loader/getUrl.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_assets_fonts_CODE_light_otf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/assets/fonts/CODE-light.otf */ "./src/components/assets/fonts/CODE-light.otf");
/* harmony import */ var _src_components_assets_fonts_CODE_bold_otf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/assets/fonts/CODE-bold.otf */ "./src/components/assets/fonts/CODE-bold.otf");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_src_components_assets_fonts_CODE_light_otf__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_src_components_assets_fonts_CODE_bold_otf__WEBPACK_IMPORTED_MODULE_3__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@font-face {\n  font-family: 'CODE light';\n  font-style: normal;\n  font-weight: 200;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); }\n\n@font-face {\n  font-family: 'CODE bold';\n  font-style: normal;\n  font-weight: 600;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + "); }\n\nbody {\n  margin: 0;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n* {\n  -moz-box-sizing: border-box;\n       box-sizing: border-box; }\n\nhtml {\n  font-size: 2vw;\n  scroll-behavior: smooth; }\n\nh1, h2, h3, h4, p {\n  margin: 0; }\n\nh1 {\n  font-size: clamp(55px, 2.4em, 100px); }\n\nh2 {\n  font-size: clamp(50px, 1.4em, 80px);\n  font-family: \"CODE bold\"; }\n\nh3 {\n  font-size: clamp(30px, 0.9em, 40px); }\n\np, label {\n  font-family: Arial, serif;\n  font-size: clamp(17px, 0.3em, 22px); }\n\n.simple-section-wrapper {\n  padding: 0 10%;\n  margin: 5% 0; }\n\n.section-subtitle {\n  text-align: center;\n  font-size: clamp(50px, 1.6em, 80px);\n  margin-bottom: 4%; }\n\n#services, #work, #contact {\n  scroll-margin-top: 60px; }\n\n.mbanalyst-contact-form {\n  width: 65%; }\n  .mbanalyst-contact-form .contact-input-button {\n    background-color: rgba(243, 159, 24, 0.9);\n    color: #ffffff;\n    padding: 3% 10%;\n    border: 2px solid rgba(243, 159, 24, 0.9);\n    cursor: pointer;\n    -webkit-transition: 300ms;\n    -moz-transition: 300ms;\n    transition: 300ms; }\n  .mbanalyst-contact-form .contact-input-button:hover {\n    background-color: #ffffff;\n    color: rgba(243, 159, 24, 0.9);\n    border: 2px solid rgba(243, 159, 24, 0.9); }\n  .mbanalyst-contact-form .item {\n    text-align: left;\n    padding: 2% 0; }\n\n/*Carousel overwrite styles*/\n.carousel-root, .carousel-slider, .slider-wrapper, .slider {\n  height: 100vh; }\n\n.control-arrow {\n  padding: 0 !important;\n  width: 3% !important; }\n\n.carousel.carousel-slider .control-arrow {\n  opacity: 1; }\n\n.carousel .control-prev.control-arrow:before {\n  border-right: 20px solid rgba(12, 16, 19, 0.9) !important; }\n\n.carousel .control-next.control-arrow:before {\n  border-left: 20px solid rgba(12, 16, 19, 0.9) !important; }\n\n.carousel .control-arrow:before, .carousel.carousel-slider .control-arrow:before {\n  border-top: 20px solid transparent !important;\n  border-bottom: 20px solid transparent !important; }\n\n.carousel .slide {\n  background-color: #ffffff !important; }\n\n@media (max-width: 450px) {\n  .section-subtitle {\n    margin: 12% 0; }\n  .simple-section-wrapper {\n    padding: 0; }\n  .mbanalyst-contact-form {\n    width: 100%; } }\n\n@media (min-width: 700px) {\n  .sticky.header-wrapper {\n    top: 0; } }\n", "",{"version":3,"sources":["webpack://variables.scss","webpack://globalStyles.scss"],"names":[],"mappings":"AAmBA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;EAChB,4CAAyD,EAAA;;AAG3D;EACE,wBAAwB;EACxB,kBAAkB;EAClB,gBAAgB;EAChB,4CAAwD,EAAA;;AC5B1D;EACE,SAAS;EACT,mCAAmC;EACnC,kCAAkC,EAAA;;AAGpC;EACE,2BAAsB;OAAtB,sBAAsB,EAAA;;AAGxB;EACE,cAAc;EACd,uBAAuB,EAAA;;AAGzB;EAAgB,SAAS,EAAA;;AAEzB;EAAK,oCAAoC,EAAA;;AAEzC;EACE,mCAAmC;EACnC,wBDN0C,EAAA;;ACS5C;EAAK,mCAAoC,EAAA;;AAEzC;EACE,yBAAyB;EACzB,mCAAmC,EAAA;;AAGrC;EACE,cAAc;EACd,YAAY,EAAA;;AAId;EACE,kBAAkB;EAClB,mCAAmC;EACnC,iBAAiB,EAAA;;AAGnB;EACE,uBAAuB,EAAA;;AAGzB;EAEE,UAAU,EAAA;EAFZ;IAKI,yCDrDiC;ICsDjC,cDnDiB;ICoDjB,eAAe;IACf,yCDxDiC;ICyDjC,eAAe;IACf,yBAAiB;IAAjB,sBAAiB;IAAjB,iBAAiB,EAAA;EAVrB;IAcI,yBD3DiB;IC4DjB,8BD/DiC;ICgEjC,yCDhEiC,EAAA;ECgDrC;IAoBI,gBAAgB;IAChB,aAAa,EAAA;;AAQjB,4BAAA;AACA;EACE,aAAa,EAAA;;AAGf;EACE,qBAAqB;EACrB,oBAAoB,EAAA;;AAGtB;EACE,UAAU,EAAA;;AAEZ;EACE,yDAAgD,EAAA;;AAGlD;EACE,wDAA+C,EAAA;;AAGjD;EACE,6CAA6C;EAC7C,gDAAgD,EAAA;;AAGlD;EACE,oCAAyC,EAAA;;AAG3C;EACE;IACE,aAAa,EAAA;EAGf;IACE,UAAU,EAAA;EAGZ;IACE,WAAW,EAAA,EACZ;;AAGH;EACE;IACE,MAAM,EAAA,EACP","sourcesContent":["//Colors\r\n$main-orange: rgba(243, 159, 24, 0.9);\r\n$red-errors: #cc0017;\r\n$green-succeed: #33a533;\r\n$white-color: #ffffff;\r\n$black-color: rgba(12, 16, 19, 0.9);\r\n\r\n//Text sizes\r\n$links-and-cta-font-size: clamp(100%, 1.1em, 27px);\r\n\r\n//Devices sizes\r\n$xs-screen: 450px;\r\n$md-screen: 700px;\r\n$lg-screen: 1024px;\r\n\r\n//Fonts\r\n$section-title-font-family: 'CODE light';\r\n$sections-sub-title-font-family: 'CODE bold';\r\n\r\n@font-face {\r\n  font-family: 'CODE light';\r\n  font-style: normal;\r\n  font-weight: 200;\r\n  src: url('../src/components/assets/fonts/CODE-light.otf');\r\n}\r\n\r\n@font-face {\r\n  font-family: 'CODE bold';\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  src: url('../src/components/assets/fonts/CODE-bold.otf');\r\n}","@import 'variables';\r\n\r\nbody {\r\n  margin: 0;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  font-size: 2vw;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nh1,h2,h3,h4,p { margin: 0; }\r\n\r\nh1 { font-size: clamp(55px, 2.4em, 100px); }\r\n\r\nh2 {\r\n  font-size: clamp(50px, 1.4em, 80px);\r\n  font-family: $sections-sub-title-font-family;\r\n}\r\n\r\nh3 { font-size: clamp(30px, 0.9em, 40px ) }\r\n\r\np, label {\r\n  font-family: Arial, serif;\r\n  font-size: clamp(17px, 0.3em, 22px);\r\n}\r\n\r\n.simple-section-wrapper {\r\n  padding: 0 10%;\r\n  margin: 5% 0;\r\n}\r\n\r\n\r\n.section-subtitle {\r\n  text-align: center;\r\n  font-size: clamp(50px, 1.6em, 80px);\r\n  margin-bottom: 4%;\r\n}\r\n\r\n#services, #work, #contact {\r\n  scroll-margin-top: 60px;\r\n}\r\n\r\n.mbanalyst-contact-form {\r\n\r\n  width: 65%;\r\n\r\n  .contact-input-button {\r\n    background-color: $main-orange;\r\n    color: $white-color;\r\n    padding: 3% 10%;\r\n    border: 2px solid $main-orange;\r\n    cursor: pointer;\r\n    transition: 300ms;\r\n  }\r\n\r\n  .contact-input-button:hover {\r\n    background-color: $white-color;\r\n    color: $main-orange;\r\n    border: 2px solid $main-orange;\r\n  }\r\n\r\n  .item {\r\n    text-align: left;\r\n    padding: 2% 0;\r\n  }\r\n\r\n  .input {\r\n\r\n  }\r\n}\r\n\r\n/*Carousel overwrite styles*/\r\n.carousel-root, .carousel-slider, .slider-wrapper, .slider {\r\n  height: 100vh;\r\n}\r\n\r\n.control-arrow {\r\n  padding: 0 !important;\r\n  width: 3% !important;\r\n}\r\n\r\n.carousel.carousel-slider .control-arrow {\r\n  opacity: 1;\r\n}\r\n.carousel .control-prev.control-arrow:before {\r\n  border-right: 20px solid $black-color !important;\r\n}\r\n\r\n.carousel .control-next.control-arrow:before {\r\n  border-left: 20px solid $black-color !important;\r\n}\r\n\r\n.carousel .control-arrow:before, .carousel.carousel-slider .control-arrow:before {\r\n  border-top: 20px solid transparent !important;\r\n  border-bottom: 20px solid transparent !important;\r\n}\r\n\r\n.carousel .slide {\r\n  background-color: $white-color !important;\r\n}\r\n\r\n@media (max-width: $xs-screen) {\r\n  .section-subtitle {\r\n    margin: 12% 0;\r\n  }\r\n\r\n  .simple-section-wrapper {\r\n    padding: 0;\r\n  }\r\n\r\n  .mbanalyst-contact-form {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n@media (min-width: $md-screen) {\r\n  .sticky.header-wrapper {\r\n    top: 0;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY3NzL2dsb2JhbFN0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQytGO0FBQ087QUFDWjtBQUNEO0FBQ3pGLDhCQUE4Qix5RkFBMkI7QUFDekQseUNBQXlDLDRGQUErQixDQUFDLG1GQUE2QjtBQUN0Ryx5Q0FBeUMsNEZBQStCLENBQUMsa0ZBQTZCO0FBQ3RHO0FBQ0EsOEJBQThCLFFBQVMsZUFBZSw4QkFBOEIsdUJBQXVCLHFCQUFxQix5REFBeUQsRUFBRSxnQkFBZ0IsNkJBQTZCLHVCQUF1QixxQkFBcUIseURBQXlELEVBQUUsVUFBVSxjQUFjLHdDQUF3Qyx1Q0FBdUMsRUFBRSxPQUFPLGdDQUFnQyxnQ0FBZ0MsRUFBRSxVQUFVLG1CQUFtQiw0QkFBNEIsRUFBRSx1QkFBdUIsY0FBYyxFQUFFLFFBQVEseUNBQXlDLEVBQUUsUUFBUSx3Q0FBd0MsK0JBQStCLEVBQUUsUUFBUSx3Q0FBd0MsRUFBRSxjQUFjLDhCQUE4Qix3Q0FBd0MsRUFBRSw2QkFBNkIsbUJBQW1CLGlCQUFpQixFQUFFLHVCQUF1Qix1QkFBdUIsd0NBQXdDLHNCQUFzQixFQUFFLGdDQUFnQyw0QkFBNEIsRUFBRSw2QkFBNkIsZUFBZSxFQUFFLG1EQUFtRCxnREFBZ0QscUJBQXFCLHNCQUFzQixnREFBZ0Qsc0JBQXNCLGdDQUFnQyw2QkFBNkIsd0JBQXdCLEVBQUUseURBQXlELGdDQUFnQyxxQ0FBcUMsZ0RBQWdELEVBQUUsbUNBQW1DLHVCQUF1QixvQkFBb0IsRUFBRSwrRkFBK0Ysa0JBQWtCLEVBQUUsb0JBQW9CLDBCQUEwQix5QkFBeUIsRUFBRSw4Q0FBOEMsZUFBZSxFQUFFLGtEQUFrRCw4REFBOEQsRUFBRSxrREFBa0QsNkRBQTZELEVBQUUsc0ZBQXNGLGtEQUFrRCxxREFBcUQsRUFBRSxzQkFBc0IseUNBQXlDLEVBQUUsK0JBQStCLHVCQUF1QixvQkFBb0IsRUFBRSw2QkFBNkIsaUJBQWlCLEVBQUUsNkJBQTZCLGtCQUFrQixFQUFFLEVBQUUsK0JBQStCLDRCQUE0QixhQUFhLEVBQUUsRUFBRSxTQUFTLDhHQUE4RyxZQUFZLGFBQWEsYUFBYSxtQkFBbUIsTUFBTSxZQUFZLGFBQWEsYUFBYSxtQkFBbUIsT0FBTyxVQUFVLFlBQVksbUJBQW1CLE1BQU0sWUFBWSxtQkFBbUIsTUFBTSxVQUFVLGtCQUFrQixNQUFNLGlCQUFpQixNQUFNLGtCQUFrQixNQUFNLFlBQVksbUJBQW1CLE1BQU0sa0JBQWtCLE1BQU0sWUFBWSxtQkFBbUIsTUFBTSxVQUFVLGdCQUFnQixLQUFLLFlBQVksYUFBYSxtQkFBbUIsTUFBTSxrQkFBa0IsTUFBTSxlQUFlLEtBQUssYUFBYSxjQUFjLFlBQVksYUFBYSxZQUFZLFlBQVksYUFBYSxrQkFBa0IsTUFBTSxhQUFhLGVBQWUsb0JBQW9CLE9BQU8sYUFBYSxpQkFBaUIsWUFBWSxLQUFLLGdCQUFnQixLQUFLLFlBQVksbUJBQW1CLE1BQU0sZ0JBQWdCLEtBQUssa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sWUFBWSxtQkFBbUIsTUFBTSxrQkFBa0IsTUFBTSxLQUFLLGVBQWUsS0FBSyxlQUFlLEtBQUsscUJBQXFCLEtBQUssS0FBSywwRkFBMEYseUJBQXlCLDRCQUE0QiwwQkFBMEIsd0NBQXdDLDJFQUEyRSw2Q0FBNkMsc0JBQXNCLHVCQUF1Qiw0REFBNEQsaURBQWlELG9CQUFvQixnQ0FBZ0MseUJBQXlCLHVCQUF1QixnRUFBZ0UsS0FBSyxvQkFBb0IsK0JBQStCLHlCQUF5Qix1QkFBdUIsK0RBQStELEtBQUssdUJBQXVCLGNBQWMsZ0JBQWdCLDBDQUEwQyx5Q0FBeUMsS0FBSyxXQUFXLDZCQUE2QixLQUFLLGNBQWMscUJBQXFCLDhCQUE4QixLQUFLLHVCQUF1QixXQUFXLEVBQUUsWUFBWSxzQ0FBc0MsRUFBRSxZQUFZLDBDQUEwQyxtREFBbUQsS0FBSyxZQUFZLHVDQUF1QyxrQkFBa0IsZ0NBQWdDLDBDQUEwQyxLQUFLLGlDQUFpQyxxQkFBcUIsbUJBQW1CLEtBQUssK0JBQStCLHlCQUF5QiwwQ0FBMEMsd0JBQXdCLEtBQUssb0NBQW9DLDhCQUE4QixLQUFLLGlDQUFpQyxxQkFBcUIsaUNBQWlDLHVDQUF1Qyw0QkFBNEIsd0JBQXdCLHVDQUF1Qyx3QkFBd0IsMEJBQTBCLE9BQU8sdUNBQXVDLHVDQUF1Qyw0QkFBNEIsdUNBQXVDLE9BQU8saUJBQWlCLHlCQUF5QixzQkFBc0IsT0FBTyxrQkFBa0IsV0FBVyxLQUFLLHFHQUFxRyxvQkFBb0IsS0FBSyx3QkFBd0IsNEJBQTRCLDJCQUEyQixLQUFLLGtEQUFrRCxpQkFBaUIsS0FBSyxrREFBa0QsdURBQXVELEtBQUssc0RBQXNELHNEQUFzRCxLQUFLLDBGQUEwRixvREFBb0QsdURBQXVELEtBQUssMEJBQTBCLGdEQUFnRCxLQUFLLHdDQUF3Qyx5QkFBeUIsc0JBQXNCLE9BQU8sbUNBQW1DLG1CQUFtQixPQUFPLG1DQUFtQyxvQkFBb0IsT0FBTyxLQUFLLHdDQUF3Qyw4QkFBOEIsZUFBZSxPQUFPLEtBQUssdUJBQXVCO0FBQ3JnTztBQUNlLHNGQUF1QixFQUFDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYzNjNjYxN2M2YWE4NTNiN2JhZDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL2Fzc2V0cy9mb250cy9DT0RFLWxpZ2h0Lm90ZlwiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9hc3NldHMvZm9udHMvQ09ERS1ib2xkLm90ZlwiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQ09ERSBsaWdodCc7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogMjAwO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpOyB9XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0NPREUgYm9sZCc7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpOyB9XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7IH1cXG5cXG4qIHtcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiAydnc7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDsgfVxcblxcbmgxLCBoMiwgaDMsIGg0LCBwIHtcXG4gIG1hcmdpbjogMDsgfVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoNTVweCwgMi40ZW0sIDEwMHB4KTsgfVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoNTBweCwgMS40ZW0sIDgwcHgpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJDT0RFIGJvbGRcXFwiOyB9XFxuXFxuaDMge1xcbiAgZm9udC1zaXplOiBjbGFtcCgzMHB4LCAwLjllbSwgNDBweCk7IH1cXG5cXG5wLCBsYWJlbCB7XFxuICBmb250LWZhbWlseTogQXJpYWwsIHNlcmlmO1xcbiAgZm9udC1zaXplOiBjbGFtcCgxN3B4LCAwLjNlbSwgMjJweCk7IH1cXG5cXG4uc2ltcGxlLXNlY3Rpb24td3JhcHBlciB7XFxuICBwYWRkaW5nOiAwIDEwJTtcXG4gIG1hcmdpbjogNSUgMDsgfVxcblxcbi5zZWN0aW9uLXN1YnRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoNTBweCwgMS42ZW0sIDgwcHgpO1xcbiAgbWFyZ2luLWJvdHRvbTogNCU7IH1cXG5cXG4jc2VydmljZXMsICN3b3JrLCAjY29udGFjdCB7XFxuICBzY3JvbGwtbWFyZ2luLXRvcDogNjBweDsgfVxcblxcbi5tYmFuYWx5c3QtY29udGFjdC1mb3JtIHtcXG4gIHdpZHRoOiA2NSU7IH1cXG4gIC5tYmFuYWx5c3QtY29udGFjdC1mb3JtIC5jb250YWN0LWlucHV0LWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQzLCAxNTksIDI0LCAwLjkpO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgcGFkZGluZzogMyUgMTAlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI0MywgMTU5LCAyNCwgMC45KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDMwMG1zO1xcbiAgICAtbW96LXRyYW5zaXRpb246IDMwMG1zO1xcbiAgICB0cmFuc2l0aW9uOiAzMDBtczsgfVxcbiAgLm1iYW5hbHlzdC1jb250YWN0LWZvcm0gLmNvbnRhY3QtaW5wdXQtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gICAgY29sb3I6IHJnYmEoMjQzLCAxNTksIDI0LCAwLjkpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI0MywgMTU5LCAyNCwgMC45KTsgfVxcbiAgLm1iYW5hbHlzdC1jb250YWN0LWZvcm0gLml0ZW0ge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBwYWRkaW5nOiAyJSAwOyB9XFxuXFxuLypDYXJvdXNlbCBvdmVyd3JpdGUgc3R5bGVzKi9cXG4uY2Fyb3VzZWwtcm9vdCwgLmNhcm91c2VsLXNsaWRlciwgLnNsaWRlci13cmFwcGVyLCAuc2xpZGVyIHtcXG4gIGhlaWdodDogMTAwdmg7IH1cXG5cXG4uY29udHJvbC1hcnJvdyB7XFxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XFxuICB3aWR0aDogMyUgIWltcG9ydGFudDsgfVxcblxcbi5jYXJvdXNlbC5jYXJvdXNlbC1zbGlkZXIgLmNvbnRyb2wtYXJyb3cge1xcbiAgb3BhY2l0eTogMTsgfVxcblxcbi5jYXJvdXNlbCAuY29udHJvbC1wcmV2LmNvbnRyb2wtYXJyb3c6YmVmb3JlIHtcXG4gIGJvcmRlci1yaWdodDogMjBweCBzb2xpZCByZ2JhKDEyLCAxNiwgMTksIDAuOSkgIWltcG9ydGFudDsgfVxcblxcbi5jYXJvdXNlbCAuY29udHJvbC1uZXh0LmNvbnRyb2wtYXJyb3c6YmVmb3JlIHtcXG4gIGJvcmRlci1sZWZ0OiAyMHB4IHNvbGlkIHJnYmEoMTIsIDE2LCAxOSwgMC45KSAhaW1wb3J0YW50OyB9XFxuXFxuLmNhcm91c2VsIC5jb250cm9sLWFycm93OmJlZm9yZSwgLmNhcm91c2VsLmNhcm91c2VsLXNsaWRlciAuY29udHJvbC1hcnJvdzpiZWZvcmUge1xcbiAgYm9yZGVyLXRvcDogMjBweCBzb2xpZCB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xcbiAgYm9yZGVyLWJvdHRvbTogMjBweCBzb2xpZCB0cmFuc3BhcmVudCAhaW1wb3J0YW50OyB9XFxuXFxuLmNhcm91c2VsIC5zbGlkZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7IH1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcXG4gIC5zZWN0aW9uLXN1YnRpdGxlIHtcXG4gICAgbWFyZ2luOiAxMiUgMDsgfVxcbiAgLnNpbXBsZS1zZWN0aW9uLXdyYXBwZXIge1xcbiAgICBwYWRkaW5nOiAwOyB9XFxuICAubWJhbmFseXN0LWNvbnRhY3QtZm9ybSB7XFxuICAgIHdpZHRoOiAxMDAlOyB9IH1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcXG4gIC5zdGlja3kuaGVhZGVyLXdyYXBwZXIge1xcbiAgICB0b3A6IDA7IH0gfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly92YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovL2dsb2JhbFN0eWxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQW1CQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDRDQUF5RCxFQUFBOztBQUczRDtFQUNFLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDRDQUF3RCxFQUFBOztBQzVCMUQ7RUFDRSxTQUFTO0VBQ1QsbUNBQW1DO0VBQ25DLGtDQUFrQyxFQUFBOztBQUdwQztFQUNFLDJCQUFzQjtPQUF0QixzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxjQUFjO0VBQ2QsdUJBQXVCLEVBQUE7O0FBR3pCO0VBQWdCLFNBQVMsRUFBQTs7QUFFekI7RUFBSyxvQ0FBb0MsRUFBQTs7QUFFekM7RUFDRSxtQ0FBbUM7RUFDbkMsd0JETjBDLEVBQUE7O0FDUzVDO0VBQUssbUNBQW9DLEVBQUE7O0FBRXpDO0VBQ0UseUJBQXlCO0VBQ3pCLG1DQUFtQyxFQUFBOztBQUdyQztFQUNFLGNBQWM7RUFDZCxZQUFZLEVBQUE7O0FBSWQ7RUFDRSxrQkFBa0I7RUFDbEIsbUNBQW1DO0VBQ25DLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLHVCQUF1QixFQUFBOztBQUd6QjtFQUVFLFVBQVUsRUFBQTtFQUZaO0lBS0kseUNEckRpQztJQ3NEakMsY0RuRGlCO0lDb0RqQixlQUFlO0lBQ2YseUNEeERpQztJQ3lEakMsZUFBZTtJQUNmLHlCQUFpQjtJQUFqQixzQkFBaUI7SUFBakIsaUJBQWlCLEVBQUE7RUFWckI7SUFjSSx5QkQzRGlCO0lDNERqQiw4QkQvRGlDO0lDZ0VqQyx5Q0RoRWlDLEVBQUE7RUNnRHJDO0lBb0JJLGdCQUFnQjtJQUNoQixhQUFhLEVBQUE7O0FBUWpCLDRCQUFBO0FBQ0E7RUFDRSxhQUFhLEVBQUE7O0FBR2Y7RUFDRSxxQkFBcUI7RUFDckIsb0JBQW9CLEVBQUE7O0FBR3RCO0VBQ0UsVUFBVSxFQUFBOztBQUVaO0VBQ0UseURBQWdELEVBQUE7O0FBR2xEO0VBQ0Usd0RBQStDLEVBQUE7O0FBR2pEO0VBQ0UsNkNBQTZDO0VBQzdDLGdEQUFnRCxFQUFBOztBQUdsRDtFQUNFLG9DQUF5QyxFQUFBOztBQUczQztFQUNFO0lBQ0UsYUFBYSxFQUFBO0VBR2Y7SUFDRSxVQUFVLEVBQUE7RUFHWjtJQUNFLFdBQVcsRUFBQSxFQUNaOztBQUdIO0VBQ0U7SUFDRSxNQUFNLEVBQUEsRUFDUFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvL0NvbG9yc1xcclxcbiRtYWluLW9yYW5nZTogcmdiYSgyNDMsIDE1OSwgMjQsIDAuOSk7XFxyXFxuJHJlZC1lcnJvcnM6ICNjYzAwMTc7XFxyXFxuJGdyZWVuLXN1Y2NlZWQ6ICMzM2E1MzM7XFxyXFxuJHdoaXRlLWNvbG9yOiAjZmZmZmZmO1xcclxcbiRibGFjay1jb2xvcjogcmdiYSgxMiwgMTYsIDE5LCAwLjkpO1xcclxcblxcclxcbi8vVGV4dCBzaXplc1xcclxcbiRsaW5rcy1hbmQtY3RhLWZvbnQtc2l6ZTogY2xhbXAoMTAwJSwgMS4xZW0sIDI3cHgpO1xcclxcblxcclxcbi8vRGV2aWNlcyBzaXplc1xcclxcbiR4cy1zY3JlZW46IDQ1MHB4O1xcclxcbiRtZC1zY3JlZW46IDcwMHB4O1xcclxcbiRsZy1zY3JlZW46IDEwMjRweDtcXHJcXG5cXHJcXG4vL0ZvbnRzXFxyXFxuJHNlY3Rpb24tdGl0bGUtZm9udC1mYW1pbHk6ICdDT0RFIGxpZ2h0JztcXHJcXG4kc2VjdGlvbnMtc3ViLXRpdGxlLWZvbnQtZmFtaWx5OiAnQ09ERSBib2xkJztcXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnQ09ERSBsaWdodCc7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogMjAwO1xcclxcbiAgc3JjOiB1cmwoJy4uL3NyYy9jb21wb25lbnRzL2Fzc2V0cy9mb250cy9DT0RFLWxpZ2h0Lm90ZicpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnQ09ERSBib2xkJztcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBzcmM6IHVybCgnLi4vc3JjL2NvbXBvbmVudHMvYXNzZXRzL2ZvbnRzL0NPREUtYm9sZC5vdGYnKTtcXHJcXG59XCIsXCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xcclxcblxcclxcbmJvZHkge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxyXFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgZm9udC1zaXplOiAydnc7XFxyXFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG59XFxyXFxuXFxyXFxuaDEsaDIsaDMsaDQscCB7IG1hcmdpbjogMDsgfVxcclxcblxcclxcbmgxIHsgZm9udC1zaXplOiBjbGFtcCg1NXB4LCAyLjRlbSwgMTAwcHgpOyB9XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgZm9udC1zaXplOiBjbGFtcCg1MHB4LCAxLjRlbSwgODBweCk7XFxyXFxuICBmb250LWZhbWlseTogJHNlY3Rpb25zLXN1Yi10aXRsZS1mb250LWZhbWlseTtcXHJcXG59XFxyXFxuXFxyXFxuaDMgeyBmb250LXNpemU6IGNsYW1wKDMwcHgsIDAuOWVtLCA0MHB4ICkgfVxcclxcblxcclxcbnAsIGxhYmVsIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2VyaWY7XFxyXFxuICBmb250LXNpemU6IGNsYW1wKDE3cHgsIDAuM2VtLCAyMnB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpbXBsZS1zZWN0aW9uLXdyYXBwZXIge1xcclxcbiAgcGFkZGluZzogMCAxMCU7XFxyXFxuICBtYXJnaW46IDUlIDA7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5zZWN0aW9uLXN1YnRpdGxlIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogY2xhbXAoNTBweCwgMS42ZW0sIDgwcHgpO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNCU7XFxyXFxufVxcclxcblxcclxcbiNzZXJ2aWNlcywgI3dvcmssICNjb250YWN0IHtcXHJcXG4gIHNjcm9sbC1tYXJnaW4tdG9wOiA2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWJhbmFseXN0LWNvbnRhY3QtZm9ybSB7XFxyXFxuXFxyXFxuICB3aWR0aDogNjUlO1xcclxcblxcclxcbiAgLmNvbnRhY3QtaW5wdXQtYnV0dG9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tb3JhbmdlO1xcclxcbiAgICBjb2xvcjogJHdoaXRlLWNvbG9yO1xcclxcbiAgICBwYWRkaW5nOiAzJSAxMCU7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICRtYWluLW9yYW5nZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiAzMDBtcztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWN0LWlucHV0LWJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZS1jb2xvcjtcXHJcXG4gICAgY29sb3I6ICRtYWluLW9yYW5nZTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgJG1haW4tb3JhbmdlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLml0ZW0ge1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBwYWRkaW5nOiAyJSAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmlucHV0IHtcXHJcXG5cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLypDYXJvdXNlbCBvdmVyd3JpdGUgc3R5bGVzKi9cXHJcXG4uY2Fyb3VzZWwtcm9vdCwgLmNhcm91c2VsLXNsaWRlciwgLnNsaWRlci13cmFwcGVyLCAuc2xpZGVyIHtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbi5jb250cm9sLWFycm93IHtcXHJcXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcXHJcXG4gIHdpZHRoOiAzJSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uY2Fyb3VzZWwuY2Fyb3VzZWwtc2xpZGVyIC5jb250cm9sLWFycm93IHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcbi5jYXJvdXNlbCAuY29udHJvbC1wcmV2LmNvbnRyb2wtYXJyb3c6YmVmb3JlIHtcXHJcXG4gIGJvcmRlci1yaWdodDogMjBweCBzb2xpZCAkYmxhY2stY29sb3IgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcm91c2VsIC5jb250cm9sLW5leHQuY29udHJvbC1hcnJvdzpiZWZvcmUge1xcclxcbiAgYm9yZGVyLWxlZnQ6IDIwcHggc29saWQgJGJsYWNrLWNvbG9yICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5jYXJvdXNlbCAuY29udHJvbC1hcnJvdzpiZWZvcmUsIC5jYXJvdXNlbC5jYXJvdXNlbC1zbGlkZXIgLmNvbnRyb2wtYXJyb3c6YmVmb3JlIHtcXHJcXG4gIGJvcmRlci10b3A6IDIwcHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDIwcHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcm91c2VsIC5zbGlkZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUtY29sb3IgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6ICR4cy1zY3JlZW4pIHtcXHJcXG4gIC5zZWN0aW9uLXN1YnRpdGxlIHtcXHJcXG4gICAgbWFyZ2luOiAxMiUgMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zaW1wbGUtc2VjdGlvbi13cmFwcGVyIHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tYmFuYWx5c3QtY29udGFjdC1mb3JtIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAkbWQtc2NyZWVuKSB7XFxyXFxuICAuc3RpY2t5LmhlYWRlci13cmFwcGVyIHtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==