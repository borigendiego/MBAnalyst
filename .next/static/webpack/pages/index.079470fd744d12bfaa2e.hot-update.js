webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/Header/mobile-menu/mobileMenu.module.scss":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./components/Header/mobile-menu/mobileMenu.module.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/getUrl.js */ "./node_modules/next/dist/compiled/css-loader/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../../../src/components/assets/fonts/CODE-light.otf */ "./src/components/assets/fonts/CODE-light.otf");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../../../src/components/assets/fonts/CODE-bold.otf */ "./src/components/assets/fonts/CODE-bold.otf");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@font-face {\n  font-family: 'CODE light';\n  font-style: normal;\n  font-weight: 200;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); }\n\n@font-face {\n  font-family: 'CODE bold';\n  font-style: normal;\n  font-weight: 600;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + "); }\n\n.mobileMenu_menuToggle__2JVkS {\n  display: none; }\n\n@media (max-width: 450px) {\n  .mobileMenu_menuToggle__2JVkS {\n    display: -moz-box;\n    display: flex;\n    -moz-box-orient: vertical;\n    -moz-box-direction: normal;\n         flex-direction: column;\n    -moz-box-pack: justify;\n         justify-content: space-between;\n    position: relative;\n    margin: 1% 0;\n    width: 25px;\n    height: 25px;\n    padding: 1% 0;\n    right: 12%;\n    z-index: 1;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n         user-select: none; }\n  .mobileMenu_menuToggle__2JVkS a {\n    text-decoration: none;\n    color: #232323;\n    -webkit-transition: color 0.3s ease;\n    -moz-transition: color 0.3s ease;\n    transition: color 0.3s ease; }\n  .mobileMenu_menuToggle__2JVkS input {\n    display: block;\n    width: 40px;\n    height: 32px;\n    position: absolute;\n    top: -7px;\n    left: -5px;\n    cursor: pointer;\n    opacity: 0;\n    /* hide this */\n    z-index: 2;\n    /* and place it over the hamburger */\n    -webkit-touch-callout: none; }\n  /*\r\n   * Hamburger menu\r\n   */\n  .mobileMenu_menuToggle__2JVkS span {\n    background: #cdcdcd;\n    display: block;\n    width: 100%;\n    height: 4px;\n    position: relative;\n    border-radius: 3px;\n    max-width: 34px;\n    z-index: 1;\n    -webkit-transform-origin: 1% 1%;\n       -moz-transform-origin: 1% 1%;\n            transform-origin: 1% 1%;\n    -webkit-transition: background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease, -webkit-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);\n    transition: background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease, -webkit-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);\n    -moz-transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease, -moz-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);\n    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;\n    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease, -webkit-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), -moz-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1); }\n  .mobileMenu_menuToggle__2JVkS span:first-child {\n    -webkit-transform-origin: 0 0;\n       -moz-transform-origin: 0 0;\n            transform-origin: 0 0; }\n  .mobileMenu_menuToggle__2JVkS span:nth-last-child(2) {\n    -webkit-transform-origin: 0 100%;\n       -moz-transform-origin: 0 100%;\n            transform-origin: 0 100%; }\n  /*\r\n   * Transform all the slices of hamburger\r\n   * into a crossmark.\r\n   */\n  .mobileMenu_menuToggle__2JVkS input:checked ~ span {\n    opacity: 1;\n    -webkit-transform: rotate(45deg) translate(-2px, -1px);\n       -moz-transform: rotate(45deg) translate(-2px, -1px);\n            transform: rotate(45deg) translate(-2px, -1px);\n    background: #ffffff; }\n  /*\r\n   * Hide the middle line one.\r\n   */\n  .mobileMenu_menuToggle__2JVkS input:checked ~ span:nth-last-child(3) {\n    opacity: 0;\n    -webkit-transform: rotate(0deg) scale(0.2, 0.2);\n       -moz-transform: rotate(0deg) scale(0.2, 0.2);\n            transform: rotate(0deg) scale(0.2, 0.2); }\n  /*\r\n   * Rotate line direction\r\n   */\n  .mobileMenu_menuToggle__2JVkS input:checked ~ span:nth-last-child(2) {\n    -webkit-transform: rotate(-45deg) translate(-1px, -1px);\n       -moz-transform: rotate(-45deg) translate(-1px, -1px);\n            transform: rotate(-45deg) translate(-1px, -1px); }\n  .mobileMenu_menu__j_RHK {\n    position: absolute;\n    width: 0;\n    height: 0;\n    top: -100%;\n    padding: 160% 70%;\n    list-style-type: none;\n    -webkit-font-smoothing: antialiased;\n    /* to stop flickering of text in safari */\n    -webkit-transition: all 500ms cubic-bezier(0.77, 0.2, 0.05, 1);\n    -moz-transition: all 500ms cubic-bezier(0.77, 0.2, 0.05, 1);\n    transition: all 500ms cubic-bezier(0.77, 0.2, 0.05, 1); }\n  .mobileMenu_menu__j_RHK li {\n    padding: 5% 0;\n    font-size: clamp(100%, 5vw, 24px);\n    font-family: \"CODE light\";\n    visibility: hidden;\n    -webkit-transition: all 150ms;\n    -moz-transition: all 150ms;\n    transition: all 150ms; }\n  /*\r\n   * Make slide came from right\r\n   */\n  .mobileMenu_menuToggle__2JVkS input:checked ~ .mobileMenu_menu__j_RHK {\n    width: 80vw;\n    height: 50vh;\n    background-color: rgba(228, 228, 228, 0.901961);\n    -webkit-transform: translate(-68vw, 0);\n       -moz-transform: translate(-68vw, 0);\n            transform: translate(-68vw, 0); }\n    .mobileMenu_menuToggle__2JVkS input:checked ~ .mobileMenu_menu__j_RHK li {\n      visibility: visible;\n      border-bottom: solid; } }\n", "",{"version":3,"sources":["webpack://../../../css/variables.scss","webpack://mobileMenu.module.scss"],"names":[],"mappings":"AAmBA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;EAChB,4CAAyD,EAAA;;AAG3D;EACE,wBAAwB;EACxB,kBAAkB;EAClB,gBAAgB;EAChB,4CAAwD,EAAA;;AC5B1D;EACE,aAAa,EAAA;;AAIf;EACE;IAEE,iBAAa;IAAb,aAAa;IACb,yBAAsB;IAAtB,0BAAsB;SAAtB,sBAAsB;IACtB,sBAA8B;SAA9B,8BAA8B;IAC9B,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,aAAa;IACb,UAAU;IACV,UAAU;IACV,yBAAyB;IACzB,sBAAiB;SAAjB,iBAAiB,EAAA;EAGnB;IAEE,qBAAqB;IACrB,cAAc;IAEd,mCAA2B;IAA3B,gCAA2B;IAA3B,2BAA2B,EAAA;EAI7B;IAEE,cAAc;IACd,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,eAAe;IAEf,UAAU;IAAE,cAAA;IACZ,UAAU;IAAE,oCAAA;IAEZ,2BAA2B,EAAA;EAG7B;;IADE;EAIF;IAEE,mBAAmB;IACnB,cAAc;IACd,WAAW;IACX,WAAW;IACX,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;IAEf,UAAU;IAEV,+BAAuB;OAAvB,4BAAuB;YAAvB,uBAAuB;IAEvB,iJAEkB;IAFlB,yIAEkB;IAFlB,4LAEkB;IAFlB,iIAEkB;IAFlB,gPAEkB,EAAA;EAGpB;IAEE,6BAAqB;OAArB,0BAAqB;YAArB,qBAAqB,EAAA;EAGvB;IAEE,gCAAwB;OAAxB,6BAAwB;YAAxB,wBAAwB,EAAA;EAG1B;;;IAdE;EAkBF;IAEE,UAAU;IACV,sDAA8C;OAA9C,mDAA8C;YAA9C,8CAA8C;IAC9C,mBAAmB,EAAA;EAGrB;;IAlBE;EAqBF;IAEE,UAAU;IACV,+CAAuC;OAAvC,4CAAuC;YAAvC,uCAAuC,EAAA;EAGzC;;IArBE;EAwBF;IAEE,uDAA+C;OAA/C,oDAA+C;YAA/C,+CAA+C,EAAA;EAGjD;IAEE,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,UAAU;IACV,iBAAiB;IACjB,qBAAqB;IACrB,mCAAmC;IACnC,yCAAA;IAEA,8DAAqD;IAArD,2DAAqD;IAArD,sDAAqD,EAAA;EAGvD;IAEE,aAAa;IACb,iCAAiC;IACjC,yBD/GoC;ICgHpC,kBAAkB;IAClB,6BAAqB;IAArB,0BAAqB;IAArB,qBAAqB,EAAA;EAGvB;;IA/BE;EAkCF;IAEE,WAAW;IACX,YAAY;IACZ,+CAA0C;IAC1C,sCAA8B;OAA9B,mCAA8B;YAA9B,8BAA8B,EAAA;IALhC;MAQI,mBAAmB;MACnB,oBAAoB,EAAA,EACrB","sourcesContent":["//Colors\r\n$main-orange: rgba(243, 159, 24, 0.9);\r\n$red-errors: #cc0017;\r\n$green-succeed: #33a533;\r\n$white-color: #ffffff;\r\n$black-color: rgba(12, 16, 19, 0.9);\r\n\r\n//Text sizes\r\n$links-and-cta-font-size: clamp(100%, 1.1em, 27px);\r\n\r\n//Devices sizes\r\n$xs-screen: 450px;\r\n$md-screen: 700px;\r\n$lg-screen: 1024px;\r\n\r\n//Fonts\r\n$section-title-font-family: 'CODE light';\r\n$sections-sub-title-font-family: 'CODE bold';\r\n\r\n@font-face {\r\n  font-family: 'CODE light';\r\n  font-style: normal;\r\n  font-weight: 200;\r\n  src: url('../src/components/assets/fonts/CODE-light.otf');\r\n}\r\n\r\n@font-face {\r\n  font-family: 'CODE bold';\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  src: url('../src/components/assets/fonts/CODE-bold.otf');\r\n}","@import '../../../css/variables.scss';\r\n\r\n.menuToggle {\r\n  display: none;\r\n}\r\n\r\n//TODO: Check all the px values and change for % or em\r\n@media (max-width: $xs-screen) {\r\n  .menuToggle\r\n  {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    position: relative;\r\n    margin: 1% 0;\r\n    width: 25px;\r\n    height: 25px;\r\n    padding: 1% 0;\r\n    right: 12%;\r\n    z-index: 1;\r\n    -webkit-user-select: none;\r\n    user-select: none;\r\n  }\r\n\r\n  .menuToggle a\r\n  {\r\n    text-decoration: none;\r\n    color: #232323;\r\n\r\n    transition: color 0.3s ease;\r\n  }\r\n\r\n\r\n  .menuToggle input\r\n  {\r\n    display: block;\r\n    width: 40px;\r\n    height: 32px;\r\n    position: absolute;\r\n    top: -7px;\r\n    left: -5px;\r\n    cursor: pointer;\r\n\r\n    opacity: 0; /* hide this */\r\n    z-index: 2; /* and place it over the hamburger */\r\n\r\n    -webkit-touch-callout: none;\r\n  }\r\n\r\n  /*\r\n   * Hamburger menu\r\n   */\r\n  .menuToggle span\r\n  {\r\n    background: #cdcdcd;\r\n    display: block;\r\n    width: 100%;\r\n    height: 4px;\r\n    position: relative;\r\n    border-radius: 3px;\r\n    max-width: 34px;\r\n\r\n    z-index: 1;\r\n\r\n    transform-origin: 1% 1%;\r\n\r\n    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\r\n    background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\r\n    opacity 0.55s ease;\r\n  }\r\n\r\n  .menuToggle span:first-child\r\n  {\r\n    transform-origin: 0 0;\r\n  }\r\n\r\n  .menuToggle span:nth-last-child(2)\r\n  {\r\n    transform-origin: 0 100%;\r\n  }\r\n\r\n  /*\r\n   * Transform all the slices of hamburger\r\n   * into a crossmark.\r\n   */\r\n  .menuToggle input:checked ~ span\r\n  {\r\n    opacity: 1;\r\n    transform: rotate(45deg) translate(-2px, -1px);\r\n    background: #ffffff;\r\n  }\r\n\r\n  /*\r\n   * Hide the middle line one.\r\n   */\r\n  .menuToggle input:checked ~ span:nth-last-child(3)\r\n  {\r\n    opacity: 0;\r\n    transform: rotate(0deg) scale(0.2, 0.2);\r\n  }\r\n\r\n  /*\r\n   * Rotate line direction\r\n   */\r\n  .menuToggle input:checked ~ span:nth-last-child(2)\r\n  {\r\n    transform: rotate(-45deg) translate(-1px, -1px);\r\n  }\r\n\r\n  .menu\r\n  {\r\n    position: absolute;\r\n    width: 0;\r\n    height: 0;\r\n    top: -100%;\r\n    padding: 160% 70%;\r\n    list-style-type: none;\r\n    -webkit-font-smoothing: antialiased;\r\n    /* to stop flickering of text in safari */\r\n\r\n    transition: all 500ms cubic-bezier(0.77,0.2,0.05,1.0);\r\n  }\r\n\r\n  .menu li\r\n  {\r\n    padding: 5% 0;\r\n    font-size: clamp(100%, 5vw, 24px);\r\n    font-family: $section-title-font-family;\r\n    visibility: hidden;\r\n    transition: all 150ms;\r\n  }\r\n\r\n  /*\r\n   * Make slide came from right\r\n   */\r\n  .menuToggle input:checked ~ .menu\r\n  {\r\n    width: 80vw;\r\n    height: 50vh;\r\n    background-color: hsla(0,0%,89.4%,.901961);\r\n    transform: translate(-68vw, 0);\r\n\r\n    li {\r\n      visibility: visible;\r\n      border-bottom: solid;\r\n    }\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"menuToggle": "mobileMenu_menuToggle__2JVkS",
	"menu": "mobileMenu_menu__j_RHK"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvbW9iaWxlLW1lbnUvbW9iaWxlTWVudS5tb2R1bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHVIQUE0RDtBQUN0RyxzQ0FBc0MsbUJBQU8sQ0FBQyw2SEFBK0Q7QUFDN0csb0NBQW9DLG1CQUFPLENBQUMseUdBQXFEO0FBQ2pHLG9DQUFvQyxtQkFBTyxDQUFDLHVHQUFvRDtBQUNoRztBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixRQUFTLGVBQWUsOEJBQThCLHVCQUF1QixxQkFBcUIseURBQXlELEVBQUUsZ0JBQWdCLDZCQUE2Qix1QkFBdUIscUJBQXFCLHlEQUF5RCxFQUFFLG1DQUFtQyxrQkFBa0IsRUFBRSwrQkFBK0IsbUNBQW1DLHdCQUF3QixvQkFBb0IsZ0NBQWdDLGlDQUFpQyxrQ0FBa0MsNkJBQTZCLDBDQUEwQyx5QkFBeUIsbUJBQW1CLGtCQUFrQixtQkFBbUIsb0JBQW9CLGlCQUFpQixpQkFBaUIsZ0NBQWdDLDZCQUE2Qiw2QkFBNkIsRUFBRSxxQ0FBcUMsNEJBQTRCLHFCQUFxQiwwQ0FBMEMsdUNBQXVDLGtDQUFrQyxFQUFFLHlDQUF5QyxxQkFBcUIsa0JBQWtCLG1CQUFtQix5QkFBeUIsZ0JBQWdCLGlCQUFpQixzQkFBc0IsaUJBQWlCLHNDQUFzQyw2RUFBNkUsRUFBRSw4RUFBOEUsMEJBQTBCLHFCQUFxQixrQkFBa0Isa0JBQWtCLHlCQUF5Qix5QkFBeUIsc0JBQXNCLGlCQUFpQixzQ0FBc0Msc0NBQXNDLHNDQUFzQyx3SkFBd0osZ0pBQWdKLG1NQUFtTSx3SUFBd0ksdVBBQXVQLEVBQUUsb0RBQW9ELG9DQUFvQyxvQ0FBb0Msb0NBQW9DLEVBQUUsMERBQTBELHVDQUF1Qyx1Q0FBdUMsdUNBQXVDLEVBQUUsK0lBQStJLGlCQUFpQiw2REFBNkQsNkRBQTZELDZEQUE2RCwwQkFBMEIsRUFBRSwySEFB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IiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjA3OTQ3MGZkNzQ0ZDEyYmZhYTJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Fzc2V0cy9mb250cy9DT0RFLWxpZ2h0Lm90ZlwiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9hc3NldHMvZm9udHMvQ09ERS1ib2xkLm90ZlwiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0NPREUgbGlnaHQnO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTsgfVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdDT0RFIGJvbGQnO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTsgfVxcblxcbi5tb2JpbGVNZW51X21lbnVUb2dnbGVfXzJKVmtTIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcXG4gIC5tb2JpbGVNZW51X21lbnVUb2dnbGVfXzJKVmtTIHtcXG4gICAgZGlzcGxheTogLW1vei1ib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XFxuICAgIC1tb3otYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC1tb3otYm94LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbjogMSUgMDtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgcGFkZGluZzogMSUgMDtcXG4gICAgcmlnaHQ6IDEyJTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsgfVxcbiAgLm1vYmlsZU1lbnVfbWVudVRvZ2dsZV9fMkpWa1MgYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6ICMyMzIzMjM7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xcbiAgICAtbW96LXRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlOyB9XFxuICAubW9iaWxlTWVudV9tZW51VG9nZ2xlX18ySlZrUyBpbnB1dCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTdweDtcXG4gICAgbGVmdDogLTVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAvKiBoaWRlIHRoaXMgKi9cXG4gICAgei1pbmRleDogMjtcXG4gICAgLyogYW5kIHBsYWNlIGl0IG92ZXIgdGhlIGhhbWJ1cmdlciAqL1xcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7IH1cXG4gIC8qXFxyXFxuICAgKiBIYW1idXJnZXIgbWVudVxcclxcbiAgICovXFxuICAubW9iaWxlTWVudV9tZW51VG9nZ2xlX18ySlZrUyBzcGFuIHtcXG4gICAgYmFja2dyb3VuZDogI2NkY2RjZDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDRweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIG1heC13aWR0aDogMzRweDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAxJSAxJTtcXG4gICAgICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiAxJSAxJTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAxJSAxJTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNXMgY3ViaWMtYmV6aWVyKDAuNzcsIDAuMiwgMC4wNSwgMSksIG9wYWNpdHkgMC41NXMgZWFzZSwgLXdlYmtpdC10cmFuc2Zvcm0gMC41cyBjdWJpYy1iZXppZXIoMC43NywgMC4yLCAwLjA1LCAxKTtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjVzIGN1YmljLWJlemllcigwLjc3LCAwLjIsIDAuMDUsIDEpLCBvcGFjaXR5IDAuNTVzIGVhc2UsIC13ZWJraXQtdHJhbnNmb3JtIDAuNXMgY3ViaWMtYmV6aWVyKDAuNzcsIDAuMiwgMC4wNSwgMSk7XFxuICAgIC1tb3otdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgY3ViaWMtYmV6aWVyKDAuNzcsIDAuMiwgMC4wNSwgMSksIGJhY2tncm91bmQgMC41cyBjdWJpYy1iZXppZXIoMC43NywgMC4yLCAwLjA1LCAxKSwgb3BhY2l0eSAwLjU1cyBlYXNlLCAtbW96LXRyYW5zZm9ybSAwLjVzIGN1YmljLWJlemllcigwLjc3LCAwLjIsIDAuMDUsIDEpO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBjdWJpYy1iZXppZXIoMC43NywgMC4yLCAwLjA1LCAxKSwgYmFja2dyb3VuZCAwLjVzIGN1YmljLWJlemllcigwLjc3LCAwLjIsIDAuMDUsIDEpLCBvcGFjaXR5IDAuNTVzIGVhc2U7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGN1YmljLWJlemllcigwLjc3LCAwLjIsIDAuMDUsIDEpLCBiYWNrZ3JvdW5kIDAuNXMgY3ViaWMtYmV6aWVyKDAuNzcsIDAuMiwgMC4wNSwgMSksIG9wYWNpdHkgMC41NXMgZWFzZSwgLXdlYmtpdC10cmFuc2Zvcm0gMC41cyBjdWJpYy1iZXppZXIoMC43NywgMC4yLCAwLjA1LCAxKSwgLW1vei10cmFuc2Zvcm0gMC41cyBjdWJpYy1iZXppZXIoMC43NywgMC4yLCAwLjA1LCAxKTsgfVxcbiAgLm1vYmlsZU1lbnVfbWVudVRvZ2dsZV9fMkpWa1Mgc3BhbjpmaXJzdC1jaGlsZCB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcbiAgICAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IDAgMDtcXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7IH1cXG4gIC5tb2JpbGVNZW51X21lbnVUb2dnbGVfXzJKVmtTIHNwYW46bnRoLWxhc3QtY2hpbGQoMikge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgMTAwJTtcXG4gICAgICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XFxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCAxMDAlOyB9XFxuICAvKlxcclxcbiAgICogVHJhbnNmb3JtIGFsbCB0aGUgc2xpY2VzIG9mIGhhbWJ1cmdlclxcclxcbiAgICogaW50byBhIGNyb3NzbWFyay5cXHJcXG4gICAqL1xcbiAgLm1vYmlsZU1lbnVfbWVudVRvZ2dsZV9fMkpWa1MgaW5wdXQ6Y2hlY2tlZCB+IHNwYW4ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoLTJweCwgLTFweCk7XFxuICAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgtMnB4LCAtMXB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC0ycHgsIC0xcHgpO1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmOyB9XFxuICAvKlxcclxcbiAgICogSGlkZSB0aGUgbWlkZGxlIGxpbmUgb25lLlxcclxcbiAgICovXFxuICAubW9iaWxlTWVudV9tZW51VG9nZ2xlX18ySlZrUyBpbnB1dDpjaGVja2VkIH4gc3BhbjpudGgtbGFzdC1jaGlsZCgzKSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgc2NhbGUoMC4yLCAwLjIpO1xcbiAgICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpIHNjYWxlKDAuMiwgMC4yKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSBzY2FsZSgwLjIsIDAuMik7IH1cXG4gIC8qXFxyXFxuICAgKiBSb3RhdGUgbGluZSBkaXJlY3Rpb25cXHJcXG4gICAqL1xcbiAgLm1vYmlsZU1lbnVfbWVudVRvZ2dsZV9fMkpWa1MgaW5wdXQ6Y2hlY2tlZCB+IHNwYW46bnRoLWxhc3QtY2hpbGQoMikge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKC0xcHgsIC0xcHgpO1xcbiAgICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKC0xcHgsIC0xcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKC0xcHgsIC0xcHgpOyB9XFxuICAubW9iaWxlTWVudV9tZW51X19qX1JISyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gICAgdG9wOiAtMTAwJTtcXG4gICAgcGFkZGluZzogMTYwJSA3MCU7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAgIC8qIHRvIHN0b3AgZmxpY2tlcmluZyBvZiB0ZXh0IGluIHNhZmFyaSAqL1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCA1MDBtcyBjdWJpYy1iZXppZXIoMC43NywgMC4yLCAwLjA1LCAxKTtcXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgNTAwbXMgY3ViaWMtYmV6aWVyKDAuNzcsIDAuMiwgMC4wNSwgMSk7XFxuICAgIHRyYW5zaXRpb246IGFsbCA1MDBtcyBjdWJpYy1iZXppZXIoMC43NywgMC4yLCAwLjA1LCAxKTsgfVxcbiAgLm1vYmlsZU1lbnVfbWVudV9fal9SSEsgbGkge1xcbiAgICBwYWRkaW5nOiA1JSAwO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDEwMCUsIDV2dywgMjRweCk7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQ09ERSBsaWdodFxcXCI7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMTUwbXM7XFxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDE1MG1zO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTUwbXM7IH1cXG4gIC8qXFxyXFxuICAgKiBNYWtlIHNsaWRlIGNhbWUgZnJvbSByaWdodFxcclxcbiAgICovXFxuICAubW9iaWxlTWVudV9tZW51VG9nZ2xlX18ySlZrUyBpbnB1dDpjaGVja2VkIH4gLm1vYmlsZU1lbnVfbWVudV9fal9SSEsge1xcbiAgICB3aWR0aDogODB2dztcXG4gICAgaGVpZ2h0OiA1MHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyOCwgMjI4LCAyMjgsIDAuOTAxOTYxKTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNjh2dywgMCk7XFxuICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTY4dncsIDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC02OHZ3LCAwKTsgfVxcbiAgICAubW9iaWxlTWVudV9tZW51VG9nZ2xlX18ySlZrUyBpbnB1dDpjaGVja2VkIH4gLm1vYmlsZU1lbnVfbWVudV9fal9SSEsgbGkge1xcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQ7IH0gfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uLi8uLi8uLi9jc3MvdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly9tb2JpbGVNZW51Lm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQW1CQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDRDQUF5RCxFQUFBOztBQUczRDtFQUNFLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDRDQUF3RCxFQUFBOztBQzVCMUQ7RUFDRSxhQUFhLEVBQUE7O0FBSWY7RUFDRTtJQUVFLGlCQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFzQjtJQUF0QiwwQkFBc0I7U0FBdEIsc0JBQXNCO0lBQ3RCLHNCQUE4QjtTQUE5Qiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixVQUFVO0lBQ1YsVUFBVTtJQUNWLHlCQUF5QjtJQUN6QixzQkFBaUI7U0FBakIsaUJBQWlCLEVBQUE7RUFHbkI7SUFFRSxxQkFBcUI7SUFDckIsY0FBYztJQUVkLG1DQUEyQjtJQUEzQixnQ0FBMkI7SUFBM0IsMkJBQTJCLEVBQUE7RUFJN0I7SUFFRSxjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixlQUFlO0lBRWYsVUFBVTtJQUFFLGNBQUE7SUFDWixVQUFVO0lBQUUsb0NBQUE7SUFFWiwyQkFBMkIsRUFBQTtFQUc3Qjs7SUFERTtFQUlGO0lBRUUsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtJQUVmLFVBQVU7SUFFViwrQkFBdUI7T0FBdkIsNEJBQXVCO1lBQXZCLHVCQUF1QjtJQUV2QixpSkFFa0I7SUFGbEIseUlBRWtCO0lBRmxCLDRMQUVrQjtJQUZsQixpSUFFa0I7SUFGbEIsZ1BBRWtCLEVBQUE7RUFHcEI7SUFFRSw2QkFBcUI7T0FBckIsMEJBQXFCO1lBQXJCLHFCQUFxQixFQUFBO0VBR3ZCO0lBRUUsZ0NBQXdCO09BQXhCLDZCQUF3QjtZQUF4Qix3QkFBd0IsRUFBQTtFQUcxQjs7O0lBZEU7RUFrQkY7SUFFRSxVQUFVO0lBQ1Ysc0RBQThDO09BQTlDLG1EQUE4QztZQUE5Qyw4Q0FBOEM7SUFDOUMsbUJBQW1CLEVBQUE7RUFHckI7O0lBbEJFO0VBcUJGO0lBRUUsVUFBVTtJQUNWLCtDQUF1QztPQUF2Qyw0Q0FBdUM7WUFBdkMsdUNBQXVDLEVBQUE7RUFHekM7O0lBckJFO0VBd0JGO0lBRUUsdURBQStDO09BQS9DLG9EQUErQztZQUEvQywrQ0FBK0MsRUFBQTtFQUdqRDtJQUVFLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULFVBQVU7SUFDVixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLG1DQUFtQztJQUNuQyx5Q0FBQTtJQUVBLDhEQUFxRDtJQUFyRCwyREFBcUQ7SUFBckQsc0RBQXFELEVBQUE7RUFHdkQ7SUFFRSxhQUFhO0lBQ2IsaUNBQWlDO0lBQ2pDLHlCRC9Hb0M7SUNnSHBDLGtCQUFrQjtJQUNsQiw2QkFBcUI7SUFBckIsMEJBQXFCO0lBQXJCLHFCQUFxQixFQUFBO0VBR3ZCOztJQS9CRTtFQWtDRjtJQUVFLFdBQVc7SUFDWCxZQUFZO0lBQ1osK0NBQTBDO0lBQzFDLHNDQUE4QjtPQUE5QixtQ0FBOEI7WUFBOUIsOEJBQThCLEVBQUE7SUFMaEM7TUFRSSxtQkFBbUI7TUFDbkIsb0JBQW9CLEVBQUEsRUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLy9Db2xvcnNcXHJcXG4kbWFpbi1vcmFuZ2U6IHJnYmEoMjQzLCAxNTksIDI0LCAwLjkpO1xcclxcbiRyZWQtZXJyb3JzOiAjY2MwMDE3O1xcclxcbiRncmVlbi1zdWNjZWVkOiAjMzNhNTMzO1xcclxcbiR3aGl0ZS1jb2xvcjogI2ZmZmZmZjtcXHJcXG4kYmxhY2stY29sb3I6IHJnYmEoMTIsIDE2LCAxOSwgMC45KTtcXHJcXG5cXHJcXG4vL1RleHQgc2l6ZXNcXHJcXG4kbGlua3MtYW5kLWN0YS1mb250LXNpemU6IGNsYW1wKDEwMCUsIDEuMWVtLCAyN3B4KTtcXHJcXG5cXHJcXG4vL0RldmljZXMgc2l6ZXNcXHJcXG4keHMtc2NyZWVuOiA0NTBweDtcXHJcXG4kbWQtc2NyZWVuOiA3MDBweDtcXHJcXG4kbGctc2NyZWVuOiAxMDI0cHg7XFxyXFxuXFxyXFxuLy9Gb250c1xcclxcbiRzZWN0aW9uLXRpdGxlLWZvbnQtZmFtaWx5OiAnQ09ERSBsaWdodCc7XFxyXFxuJHNlY3Rpb25zLXN1Yi10aXRsZS1mb250LWZhbWlseTogJ0NPREUgYm9sZCc7XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ0NPREUgbGlnaHQnO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXHJcXG4gIHNyYzogdXJsKCcuLi9zcmMvY29tcG9uZW50cy9hc3NldHMvZm9udHMvQ09ERS1saWdodC5vdGYnKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ0NPREUgYm9sZCc7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgc3JjOiB1cmwoJy4uL3NyYy9jb21wb25lbnRzL2Fzc2V0cy9mb250cy9DT0RFLWJvbGQub3RmJyk7XFxyXFxufVwiLFwiQGltcG9ydCAnLi4vLi4vLi4vY3NzL3ZhcmlhYmxlcy5zY3NzJztcXHJcXG5cXHJcXG4ubWVudVRvZ2dsZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vL1RPRE86IENoZWNrIGFsbCB0aGUgcHggdmFsdWVzIGFuZCBjaGFuZ2UgZm9yICUgb3IgZW1cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogJHhzLXNjcmVlbikge1xcclxcbiAgLm1lbnVUb2dnbGVcXHJcXG4gIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIG1hcmdpbjogMSUgMDtcXHJcXG4gICAgd2lkdGg6IDI1cHg7XFxyXFxuICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgcGFkZGluZzogMSUgMDtcXHJcXG4gICAgcmlnaHQ6IDEyJTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWVudVRvZ2dsZSBhXFxyXFxuICB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6ICMyMzIzMjM7XFxyXFxuXFxyXFxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4gIC5tZW51VG9nZ2xlIGlucHV0XFxyXFxuICB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMnB4O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogLTdweDtcXHJcXG4gICAgbGVmdDogLTVweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcblxcclxcbiAgICBvcGFjaXR5OiAwOyAvKiBoaWRlIHRoaXMgKi9cXHJcXG4gICAgei1pbmRleDogMjsgLyogYW5kIHBsYWNlIGl0IG92ZXIgdGhlIGhhbWJ1cmdlciAqL1xcclxcblxcclxcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvKlxcclxcbiAgICogSGFtYnVyZ2VyIG1lbnVcXHJcXG4gICAqL1xcclxcbiAgLm1lbnVUb2dnbGUgc3BhblxcclxcbiAge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjY2RjZGNkO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNHB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gICAgbWF4LXdpZHRoOiAzNHB4O1xcclxcblxcclxcbiAgICB6LWluZGV4OiAxO1xcclxcblxcclxcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAxJSAxJTtcXHJcXG5cXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgY3ViaWMtYmV6aWVyKDAuNzcsMC4yLDAuMDUsMS4wKSxcXHJcXG4gICAgYmFja2dyb3VuZCAwLjVzIGN1YmljLWJlemllcigwLjc3LDAuMiwwLjA1LDEuMCksXFxyXFxuICAgIG9wYWNpdHkgMC41NXMgZWFzZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZW51VG9nZ2xlIHNwYW46Zmlyc3QtY2hpbGRcXHJcXG4gIHtcXHJcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1lbnVUb2dnbGUgc3BhbjpudGgtbGFzdC1jaGlsZCgyKVxcclxcbiAge1xcclxcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvKlxcclxcbiAgICogVHJhbnNmb3JtIGFsbCB0aGUgc2xpY2VzIG9mIGhhbWJ1cmdlclxcclxcbiAgICogaW50byBhIGNyb3NzbWFyay5cXHJcXG4gICAqL1xcclxcbiAgLm1lbnVUb2dnbGUgaW5wdXQ6Y2hlY2tlZCB+IHNwYW5cXHJcXG4gIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgtMnB4LCAtMXB4KTtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8qXFxyXFxuICAgKiBIaWRlIHRoZSBtaWRkbGUgbGluZSBvbmUuXFxyXFxuICAgKi9cXHJcXG4gIC5tZW51VG9nZ2xlIGlucHV0OmNoZWNrZWQgfiBzcGFuOm50aC1sYXN0LWNoaWxkKDMpXFxyXFxuICB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpIHNjYWxlKDAuMiwgMC4yKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8qXFxyXFxuICAgKiBSb3RhdGUgbGluZSBkaXJlY3Rpb25cXHJcXG4gICAqL1xcclxcbiAgLm1lbnVUb2dnbGUgaW5wdXQ6Y2hlY2tlZCB+IHNwYW46bnRoLWxhc3QtY2hpbGQoMilcXHJcXG4gIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoLTFweCwgLTFweCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWVudVxcclxcbiAge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAwO1xcclxcbiAgICBoZWlnaHQ6IDA7XFxyXFxuICAgIHRvcDogLTEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDE2MCUgNzAlO1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcclxcbiAgICAvKiB0byBzdG9wIGZsaWNrZXJpbmcgb2YgdGV4dCBpbiBzYWZhcmkgKi9cXHJcXG5cXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGN1YmljLWJlemllcigwLjc3LDAuMiwwLjA1LDEuMCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWVudSBsaVxcclxcbiAge1xcclxcbiAgICBwYWRkaW5nOiA1JSAwO1xcclxcbiAgICBmb250LXNpemU6IGNsYW1wKDEwMCUsIDV2dywgMjRweCk7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAkc2VjdGlvbi10aXRsZS1mb250LWZhbWlseTtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTUwbXM7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvKlxcclxcbiAgICogTWFrZSBzbGlkZSBjYW1lIGZyb20gcmlnaHRcXHJcXG4gICAqL1xcclxcbiAgLm1lbnVUb2dnbGUgaW5wdXQ6Y2hlY2tlZCB+IC5tZW51XFxyXFxuICB7XFxyXFxuICAgIHdpZHRoOiA4MHZ3O1xcclxcbiAgICBoZWlnaHQ6IDUwdmg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwwJSw4OS40JSwuOTAxOTYxKTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTY4dncsIDApO1xcclxcblxcclxcbiAgICBsaSB7XFxyXFxuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gICAgICBib3JkZXItYm90dG9tOiBzb2xpZDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJtZW51VG9nZ2xlXCI6IFwibW9iaWxlTWVudV9tZW51VG9nZ2xlX18ySlZrU1wiLFxuXHRcIm1lbnVcIjogXCJtb2JpbGVNZW51X21lbnVfX2pfUkhLXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==