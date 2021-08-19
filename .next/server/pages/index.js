module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Banner/banner.module.scss":
/*!**********************************************!*\
  !*** ./components/Banner/banner.module.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "banner_container__duyDz",
	"content": "banner_content__1rlpd",
	"text": "banner_text__2mnQM",
	"black_text": "banner_black_text__iw0PL"
};


/***/ }),

/***/ "./components/Banner/index.js":
/*!************************************!*\
  !*** ./components/Banner/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _banner_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./banner.module.scss */ "./components/Banner/banner.module.scss");
/* harmony import */ var _banner_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_banner_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_assets_images_Transparent_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/assets/images/Transparent-logo.png */ "./public/assets/images/Transparent-logo.png");
/* harmony import */ var _public_assets_images_Transparent_logo_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_Transparent_logo_png__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Admin\\Documents\\hipposoft\\MBAnalyst\\components\\Banner\\index.js";
 //Style

 //Image



const Banner = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _banner_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    id: 'home',
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _banner_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.content,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        alt: 'logo',
        src: _public_assets_images_Transparent_logo_png__WEBPACK_IMPORTED_MODULE_3___default.a
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: _banner_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.text,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _banner_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.black_text,
            children: "Better"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 49
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: _banner_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.text,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _banner_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.black_text,
            children: "Data,"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 49
          }, undefined), " Better Decisions"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

/***/ "./components/Contact/contact.module.scss":
/*!************************************************!*\
  !*** ./components/Contact/contact.module.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "contact_container__1u40z",
	"title": "contact_title__21t2L",
	"first_title": "contact_first_title__2V5Xz",
	"second_title": "contact_second_title__3cqRv",
	"border": "contact_border__2KJdj",
	"custom-form-class": "contact_custom-form-class__2Uqfu",
	"item": "contact_item__3-lav",
	"input": "contact_input__1adEj",
	"error": "contact_error__3EH2j",
	"input_box": "contact_input_box__7Wya5",
	"error_message": "contact_error_message__zb2LW",
	"section": "contact_section__2HCKI",
	"form": "contact_form__1dSfg",
	"contact-border": "contact_contact-border__2rp5J"
};


/***/ }),

/***/ "./components/Contact/fieldValidations.js":
/*!************************************************!*\
  !*** ./components/Contact/fieldValidations.js ***!
  \************************************************/
/*! exports provided: required, email */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "required", function() { return required; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "email", function() { return email; });
const required = value => value ? undefined : 'Required';

const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;



/***/ }),

/***/ "./components/Contact/index.js":
/*!*************************************!*\
  !*** ./components/Contact/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contact_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.module.scss */ "./components/Contact/contact.module.scss");
/* harmony import */ var _contact_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_contact_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fieldValidations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fieldValidations */ "./components/Contact/fieldValidations.js");
/* harmony import */ var hippo_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hippo-components */ "hippo-components");
/* harmony import */ var hippo_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hippo_components__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\Admin\\Documents\\hipposoft\\MBAnalyst\\components\\Contact\\index.js";
 //Styles

 //Fields validations




const Contact = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _contact_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    id: 'contact',
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _contact_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.title,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: _contact_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.first_title,
        children: "CONTACT"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: _contact_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.second_title,
        children: "AND GET MY QUOTE"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _contact_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.border,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(hippo_components__WEBPACK_IMPORTED_MODULE_4__["Form"], {
        fields: [{
          name: 'name',
          type: 'text',
          label: 'Name (Required)',
          validations: [_fieldValidations__WEBPACK_IMPORTED_MODULE_3__["required"]]
        }, {
          name: 'customerEmail',
          type: 'text',
          label: 'Email (Required)',
          validations: [_fieldValidations__WEBPACK_IMPORTED_MODULE_3__["email"]]
        }, {
          name: 'subject',
          type: 'text',
          label: 'Subject'
        }, {
          name: 'message',
          type: 'textArea',
          label: 'Message'
        }],
        onSuccessMessage: 'Your message has been successfully sent. We will contact you very soon!',
        onErrorMessage: 'Please try again in some minutes',
        submitButtonLabel: 'SUBMIT',
        customClass: 'mbanalyst-contact-form',
        emailServiceURL: 'https://thehippoapi.netlify.app/.netlify/functions/api/mbanalyst-mail'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./components/Explore/constants.js":
/*!*****************************************!*\
  !*** ./components/Explore/constants.js ***!
  \*****************************************/
/*! exports provided: EXPLORE_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXPLORE_DATA", function() { return EXPLORE_DATA; });
/* harmony import */ var _public_assets_icons_icono_6_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/assets/icons/icono_6.png */ "./public/assets/icons/icono_6.png");
/* harmony import */ var _public_assets_icons_icono_6_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_public_assets_icons_icono_6_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_assets_icons_icono7_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/assets/icons/icono7.png */ "./public/assets/icons/icono7.png");
/* harmony import */ var _public_assets_icons_icono7_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_assets_icons_icono7_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_assets_icons_icono_8_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/assets/icons/icono_8.png */ "./public/assets/icons/icono_8.png");
/* harmony import */ var _public_assets_icons_icono_8_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_assets_icons_icono_8_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_assets_icons_icono_9_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/assets/icons/icono_9.png */ "./public/assets/icons/icono_9.png");
/* harmony import */ var _public_assets_icons_icono_9_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_assets_icons_icono_9_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_assets_icons_icono_10_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/assets/icons/icono_10.png */ "./public/assets/icons/icono_10.png");
/* harmony import */ var _public_assets_icons_icono_10_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_assets_icons_icono_10_png__WEBPACK_IMPORTED_MODULE_4__);





const EXPLORE_DATA = [{
  image: _public_assets_icons_icono_6_png__WEBPACK_IMPORTED_MODULE_0___default.a,
  text: 'Get real time visibility of your business KPIs and save significant costs by' + ' switching manual reporting activities with fully automated reports and scheduled refreshes.'
}, {
  image: _public_assets_icons_icono7_png__WEBPACK_IMPORTED_MODULE_1___default.a,
  text: 'Offers data analysis without the requirement of specialised technical support,' + ' with a strong, intuitive interface.'
}, {
  image: _public_assets_icons_icono_8_png__WEBPACK_IMPORTED_MODULE_2___default.a,
  text: 'Saves you time with customised information dashboards, which are moulded to your' + ' organisation\'s specific needs.'
}, {
  image: _public_assets_icons_icono_9_png__WEBPACK_IMPORTED_MODULE_3___default.a,
  text: 'Eliminates speed and memory restrictions thanks to a robust cloud environment,' + ' enabling data to be found and analysed rapidly.'
}, {
  image: _public_assets_icons_icono_10_png__WEBPACK_IMPORTED_MODULE_4___default.a,
  text: 'Allows you to view reports instantly on multiple web-connected devices,' + ' including iOS, Android and Windows.'
}];


/***/ }),

/***/ "./components/Explore/explore.module.scss":
/*!************************************************!*\
  !*** ./components/Explore/explore.module.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "explore_container__1ss67",
	"title": "explore_title__1zrew",
	"content": "explore_content__2ELIS",
	"item": "explore_item__3l6lq",
	"hexagon": "explore_hexagon__2gCHk",
	"logo": "explore_logo__1rdlo",
	"text": "explore_text__2dPW8",
	"visibleClass": "explore_visibleClass__Sm54x",
	"section": "explore_section__1Fqz7"
};


/***/ }),

/***/ "./components/Explore/exploreItem/ExploreItem.js":
/*!*******************************************************!*\
  !*** ./components/Explore/exploreItem/ExploreItem.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-visibility-sensor */ "react-visibility-sensor");
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _explore_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../explore.module.scss */ "./components/Explore/explore.module.scss");
/* harmony import */ var _explore_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_explore_module_scss__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Admin\\Documents\\hipposoft\\MBAnalyst\\components\\Explore\\exploreItem\\ExploreItem.js";




const ExploreItem = ({
  exploreData
}) => {
  const {
    0: isElementVisible,
    1: setIsElementVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const onChangeVisibility = isVisible => isVisible ? setIsElementVisible(true) : setIsElementVisible(false);

  const {
    image,
    text
  } = exploreData;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2___default.a, {
    onChange: onChangeVisibility,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: `${isElementVisible ? `${_explore_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.item} visibleClass` : `${_explore_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.item}`}`,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _explore_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.hexagon,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: image,
          alt: 'logo',
          className: _explore_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.logo
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _explore_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.text,
        children: text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ExploreItem);

/***/ }),

/***/ "./components/Explore/index.js":
/*!*************************************!*\
  !*** ./components/Explore/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _explore_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./explore.module.scss */ "./components/Explore/explore.module.scss");
/* harmony import */ var _explore_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_explore_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _exploreItem_ExploreItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exploreItem/ExploreItem */ "./components/Explore/exploreItem/ExploreItem.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./components/Explore/constants.js");

var _jsxFileName = "C:\\Users\\Admin\\Documents\\hipposoft\\MBAnalyst\\components\\Explore\\index.js";
 //Style





const Explore = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _explore_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: _explore_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.title,
      children: "Why choose a BI solution?"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _explore_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.content,
      children: _constants__WEBPACK_IMPORTED_MODULE_4__["EXPLORE_DATA"].map((value, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_exploreItem_ExploreItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
        exploreData: value
      }, value.text, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 53
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Explore);

/***/ }),

/***/ "./components/Header/constants.js":
/*!****************************************!*\
  !*** ./components/Header/constants.js ***!
  \****************************************/
/*! exports provided: MENU_LINKS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_LINKS", function() { return MENU_LINKS; });
const MENU_LINKS = [{
  label: 'HOME',
  linkTo: '#home'
}, {
  label: 'SERVICES',
  linkTo: '#services'
}, {
  label: 'WORK',
  linkTo: '#work'
}, {
  label: 'CONTACT',
  linkTo: '#contact'
}];


/***/ }),

/***/ "./components/Header/header.module.scss":
/*!**********************************************!*\
  !*** ./components/Header/header.module.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "header_container__1HiN6",
	"menu": "header_menu__23wHb"
};


/***/ }),

/***/ "./components/Header/index.js":
/*!************************************!*\
  !*** ./components/Header/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.module.scss */ "./components/Header/header.module.scss");
/* harmony import */ var _header_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_header_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./components/Header/constants.js");
/* harmony import */ var _mobile_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mobile-menu */ "./components/Header/mobile-menu/index.js");

var _jsxFileName = "C:\\Users\\Admin\\Documents\\hipposoft\\MBAnalyst\\components\\Header\\index.js";
 //Styles

 //Constants

 //Components



const Header = () => {
  if (false) {}

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
    role: 'navigation',
    className: `${_header_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container} header-wrapper`,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      id: 'large-screen-menu',
      className: _header_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.menu,
      children: _constants__WEBPACK_IMPORTED_MODULE_3__["MENU_LINKS"].map((link, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: link.linkTo,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: link.label
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 86
        }, undefined)
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 52
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mobile_menu__WEBPACK_IMPORTED_MODULE_4__["default"], {
      menuItems: _constants__WEBPACK_IMPORTED_MODULE_3__["MENU_LINKS"]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Header/mobile-menu/index.js":
/*!************************************************!*\
  !*** ./components/Header/mobile-menu/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mobileMenu_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mobileMenu.module.scss */ "./components/Header/mobile-menu/mobileMenu.module.scss");
/* harmony import */ var _mobileMenu_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mobileMenu_module_scss__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Admin\\Documents\\hipposoft\\MBAnalyst\\components\\Header\\mobile-menu\\index.js";
 //Style



const MobileMenu = props => {
  const {
    menuItems
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _mobileMenu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.menuToggle,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      type: "checkbox"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      id: 'menu',
      className: _mobileMenu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.menu,
      children: menuItems.map((link, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: link.linkTo,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: link.label
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 85
        }, undefined)
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 51
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (MobileMenu);

/***/ }),

/***/ "./components/Header/mobile-menu/mobileMenu.module.scss":
/*!**************************************************************!*\
  !*** ./components/Header/mobile-menu/mobileMenu.module.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"menuToggle": "mobileMenu_menuToggle__2JVkS",
	"menu": "mobileMenu_menu__j_RHK"
};


/***/ }),

/***/ "./components/OurServices/constants.js":
/*!*********************************************!*\
  !*** ./components/OurServices/constants.js ***!
  \*********************************************/
/*! exports provided: SERVICES_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVICES_DATA", function() { return SERVICES_DATA; });
/* harmony import */ var _imagenes_icono_1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../imagenes/icono_1.png */ "./components/imagenes/icono_1.png");
/* harmony import */ var _imagenes_icono_1_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_imagenes_icono_1_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _imagenes_icono_2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../imagenes/icono_2.png */ "./components/imagenes/icono_2.png");
/* harmony import */ var _imagenes_icono_2_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_imagenes_icono_2_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _imagenes_icono_3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../imagenes/icono_3.png */ "./components/imagenes/icono_3.png");
/* harmony import */ var _imagenes_icono_3_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_imagenes_icono_3_png__WEBPACK_IMPORTED_MODULE_2__);



const SERVICES_DATA = [{
  id: 'box1',
  image: _imagenes_icono_1_png__WEBPACK_IMPORTED_MODULE_0___default.a,
  title: 'Power BI Consulting',
  text: 'We work with Power BI to create powerful automated reports' + ' to visualise your business data, capture key insights in real time and improve decision making. ' + 'As a best-in-class BI platform, Power BI allows you to connect to data stored in multiple sources' + ' and share and collaborate among your team members, ensuring your data has the maximum impact.'
}, {
  id: 'box2',
  image: _imagenes_icono_2_png__WEBPACK_IMPORTED_MODULE_1___default.a,
  title: 'Business Analysis',
  text: 'We use our wealth of experience in BI and commercial acumen to help your' + ' business identify and understand its key performance drivers, set meaningful targets,' + ' solve problems with data and support major business decisions, working closely with process' + ' owners to make the most of your data.'
}, {
  id: 'box3',
  image: _imagenes_icono_3_png__WEBPACK_IMPORTED_MODULE_2___default.a,
  title: 'BI support',
  text: 'We offer end-to-end support to companies already operating a Power BI solution,' + ' expert consultancy on Power BI best practices and training sessions allowing your business' + ' to realise its full BI potential.'
}];


/***/ }),

/***/ "./components/OurServices/index.js":
/*!*****************************************!*\
  !*** ./components/OurServices/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ourServices_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ourServices.module.scss */ "./components/OurServices/ourServices.module.scss");
/* harmony import */ var _ourServices_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ourServices_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _imagenes_logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../imagenes/logo.svg */ "./components/imagenes/logo.svg");
/* harmony import */ var _imagenes_logo_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_imagenes_logo_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _OurServicesItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../OurServicesItem */ "./components/OurServicesItem/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./components/OurServices/constants.js");

var _jsxFileName = "C:\\Users\\Admin\\Documents\\hipposoft\\MBAnalyst\\components\\OurServices\\index.js";






const OurServices = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: 'simple-section-wrapper',
    id: 'services',
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      className: 'section-subtitle',
      children: "OUR SERVICES"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _ourServices_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,
      children: _constants__WEBPACK_IMPORTED_MODULE_5__["SERVICES_DATA"].map((value, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_OurServicesItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
        servicesData: value
      }, value.title, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 54
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (OurServices);

/***/ }),

/***/ "./components/OurServices/ourServices.module.scss":
/*!********************************************************!*\
  !*** ./components/OurServices/ourServices.module.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "ourServices_container__3mHvs",
	"item": "ourServices_item__10qoL",
	"item_image": "ourServices_item_image__1JnoG",
	"item_description": "ourServices_item_description__1Jt78",
	"item_title": "ourServices_item_title__26EDS",
	"item_text": "ourServices_item_text__17FRo"
};


/***/ }),

/***/ "./components/OurServicesItem/index.js":
/*!*********************************************!*\
  !*** ./components/OurServicesItem/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-visibility-sensor */ "react-visibility-sensor");
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _OurServices_ourServices_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../OurServices/ourServices.module.scss */ "./components/OurServices/ourServices.module.scss");
/* harmony import */ var _OurServices_ourServices_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_OurServices_ourServices_module_scss__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Admin\\Documents\\hipposoft\\MBAnalyst\\components\\OurServicesItem\\index.js";




const OurServicesItem = ({
  servicesData
}) => {
  const {
    0: isElementVisible,
    1: setIsElementVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const onChangeVisibility = isVisible => isVisible ? setIsElementVisible(true) : setIsElementVisible(false);

  const {
    image,
    title,
    text,
    id
  } = servicesData;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2___default.a, {
    onChange: onChangeVisibility,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: id,
      className: `${_OurServices_ourServices_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.item} visibleClass`,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _OurServices_ourServices_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.item_image,
        style: {
          backgroundImage: `url(${image})`
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        className: _OurServices_ourServices_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.item_title,
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _OurServices_ourServices_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.item_description,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _OurServices_ourServices_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.item_text,
          children: text
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (OurServicesItem);

/***/ }),

/***/ "./components/OurWork/MyIframe.js":
/*!****************************************!*\
  !*** ./components/OurWork/MyIframe.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_iframe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-iframe */ "react-iframe");
/* harmony import */ var react_iframe__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_iframe__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Admin\\Documents\\hipposoft\\MBAnalyst\\components\\OurWork\\MyIframe.js";



const MyIframe = props => {
  const {
    url,
    id
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_iframe__WEBPACK_IMPORTED_MODULE_2___default.a, {
    url: url,
    width: "99%",
    height: "100%",
    id: id,
    className: "my-iframe",
    display: "initial",
    position: "relative"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (MyIframe);

/***/ }),

/***/ "./components/OurWork/constants.js":
/*!*****************************************!*\
  !*** ./components/OurWork/constants.js ***!
  \*****************************************/
/*! exports provided: DASHBOARDS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DASHBOARDS", function() { return DASHBOARDS; });
const DASHBOARDS = [{
  url: 'https://app.powerbi.com/view?r=eyJrIjoiMTZlNGRhNGQtYWVjNi00NGZiLWE2NjctMmExY2MxNWU2NzU5IiwidCI6IjJkMWE2YjZkLWY5M2UtNDJlYy04YzQyLThkYWE5NDAzZDBkOCJ9&pageName=ReportSection1'
}, {
  url: 'https://app.powerbi.com/view?r=eyJrIjoiNTFhZjI5NmMtY2MwZi00Mzg3LTg1YTktYmMyMWQwYWUxMjEzIiwidCI6IjJkMWE2YjZkLWY5M2UtNDJlYy04YzQyLThkYWE5NDAzZDBkOCJ9'
}, {
  url: 'https://app.powerbi.com/view?r=eyJrIjoiZWM4OWI5MjYtZDAwMS00MmEzLTk4YTUtYTAxNjg2NGVkNTgxIiwidCI6IjJkMWE2YjZkLWY5M2UtNDJlYy04YzQyLThkYWE5NDAzZDBkOCJ9'
}, {
  url: 'https://app.powerbi.com/view?r=eyJrIjoiMjIzYzQ0NzktM2IxZC00NzFjLTk3NTctMTA0MTlhMzJhNTcxIiwidCI6IjJkMWE2YjZkLWY5M2UtNDJlYy04YzQyLThkYWE5NDAzZDBkOCJ9&pageName=ReportSection4214f1ebdafdb07f5588'
}, {
  url: 'https://app.powerbi.com/view?r=eyJrIjoiMGM2ZDU4Y2ItNzFiMi00ZDVmLTg1MGItOWFlNWI4ZTUyZWIzIiwidCI6IjJkMWE2YjZkLWY5M2UtNDJlYy04YzQyLThkYWE5NDAzZDBkOCJ9&pageName=ReportSectionc4ba61a765b09b006267'
}];


/***/ }),

/***/ "./components/OurWork/index.js":
/*!*************************************!*\
  !*** ./components/OurWork/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ourWork_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ourWork.module.scss */ "./components/OurWork/ourWork.module.scss");
/* harmony import */ var _ourWork_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ourWork_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./components/OurWork/constants.js");
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ "./node_modules/react-responsive-carousel/lib/styles/carousel.min.css");
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _MyIframe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MyIframe */ "./components/OurWork/MyIframe.js");
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-responsive-carousel */ "react-responsive-carousel");
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\Admin\\Documents\\hipposoft\\MBAnalyst\\components\\OurWork\\index.js";
 //Styles

 //Constants

 //Component

 // requires a loader




const OurWork = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: 'simple-section-wrapper',
    id: 'work',
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      className: 'section-subtitle',
      children: "OUR WORK"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_6__["Carousel"], {
      infiniteLoop: true,
      showStatus: false,
      showThumbs: false,
      children: _constants__WEBPACK_IMPORTED_MODULE_3__["DASHBOARDS"].map((dashboard, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          height: '100%'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MyIframe__WEBPACK_IMPORTED_MODULE_5__["default"], {
          url: dashboard.url,
          id: index
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 29
        }, undefined)
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 25
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: _ourWork_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.text,
      children: ["Are you ready to accelerate your business growth?", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 89
      }, undefined), " Get in touch to discover more about what MBAnalyst could do for your business."]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (OurWork);

/***/ }),

/***/ "./components/OurWork/ourWork.module.scss":
/*!************************************************!*\
  !*** ./components/OurWork/ourWork.module.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"text": "ourWork_text__OEJug"
};


/***/ }),

/***/ "./components/Three/constants.js":
/*!***************************************!*\
  !*** ./components/Three/constants.js ***!
  \***************************************/
/*! exports provided: THREE_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THREE_DATA", function() { return THREE_DATA; });
/* harmony import */ var _public_assets_icons_icono_14_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/assets/icons/icono_14.png */ "./public/assets/icons/icono_14.png");
/* harmony import */ var _public_assets_icons_icono_14_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_public_assets_icons_icono_14_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_assets_icons_icono_15_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/assets/icons/icono_15.png */ "./public/assets/icons/icono_15.png");
/* harmony import */ var _public_assets_icons_icono_15_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_assets_icons_icono_15_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_assets_icons_icono_16_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/assets/icons/icono_16.png */ "./public/assets/icons/icono_16.png");
/* harmony import */ var _public_assets_icons_icono_16_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_assets_icons_icono_16_png__WEBPACK_IMPORTED_MODULE_2__);



const THREE_DATA = [{
  image: _public_assets_icons_icono_14_png__WEBPACK_IMPORTED_MODULE_0___default.a,
  text: 'Manage inventory key metrics such as Aged Stock, Inventory Turnover, Availability,' + ' fastest moving inventory items and others.',
  id: 'box'
}, {
  image: _public_assets_icons_icono_15_png__WEBPACK_IMPORTED_MODULE_1___default.a,
  text: 'Link inventory data to sales performance to forecast inventory purchases and' + ' healthy stock levels',
  id: 'black-box'
}, {
  image: _public_assets_icons_icono_16_png__WEBPACK_IMPORTED_MODULE_2___default.a,
  text: 'Visualise overall Supply performance chain through updated data directly connected' + ' to your inventory management systems',
  id: 'box'
}];


/***/ }),

/***/ "./components/Three/index.js":
/*!***********************************!*\
  !*** ./components/Three/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _threeItem_ThreeItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./threeItem/ThreeItem */ "./components/Three/threeItem/ThreeItem.js");
/* harmony import */ var _three_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./three.module.scss */ "./components/Three/three.module.scss");
/* harmony import */ var _three_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_three_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./components/Three/constants.js");

var _jsxFileName = "C:\\Users\\Admin\\Documents\\hipposoft\\MBAnalyst\\components\\Three\\index.js";





const Three = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _three_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.section,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _three_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.overlay
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined), _constants__WEBPACK_IMPORTED_MODULE_4__["THREE_DATA"].map((value, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_threeItem_ThreeItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      threeData: value
    }, value.text, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 47
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Three);

/***/ }),

/***/ "./components/Three/three.module.scss":
/*!********************************************!*\
  !*** ./components/Three/three.module.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"overlay": "three_overlay__2rViV",
	"section": "three_section__vhvZf",
	"black_box": "three_black_box__1wKNO",
	"logo": "three_logo__OaDVe",
	"arrow": "three_arrow__2xe5L",
	"text_container": "three_text_container__1l5NV",
	"logo_container": "three_logo_container__2-Z2g",
	"text": "three_text__3xoqI"
};


/***/ }),

/***/ "./components/Three/threeItem/ThreeItem.js":
/*!*************************************************!*\
  !*** ./components/Three/threeItem/ThreeItem.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-visibility-sensor */ "react-visibility-sensor");
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _three_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../three.module.scss */ "./components/Three/three.module.scss");
/* harmony import */ var _three_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_three_module_scss__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Admin\\Documents\\hipposoft\\MBAnalyst\\components\\Three\\threeItem\\ThreeItem.js";




const ThreeItem = ({
  threeData
}) => {
  const {
    0: isElementVisible,
    1: setIsElementVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const onChangeVisibility = isVisible => isVisible ? setIsElementVisible(true) : setIsElementVisible(false);

  const {
    id,
    image,
    text
  } = threeData;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2___default.a, {
    onChange: onChangeVisibility,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: `${id === 'black-box' ? `${_three_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.logo_container} ${_three_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.black_box}` : `${_three_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.logo_container}`}`,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        alt: 'logo',
        src: image,
        className: _three_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.logo,
        id: id
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _three_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.arrow,
        id: id
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _three_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.text_container,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _three_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.text,
          children: text
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ThreeItem);

/***/ }),

/***/ "./components/WhoWeAre/index.js":
/*!**************************************!*\
  !*** ./components/WhoWeAre/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-visibility-sensor */ "react-visibility-sensor");
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _whoWeAre_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./whoWeAre.module.scss */ "./components/WhoWeAre/whoWeAre.module.scss");
/* harmony import */ var _whoWeAre_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_whoWeAre_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_assets_images_icono_5_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/assets/images/icono_5.png */ "./public/assets/images/icono_5.png");
/* harmony import */ var _public_assets_images_icono_5_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_icono_5_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_assets_images_icono_4_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/assets/images/icono_4.png */ "./public/assets/images/icono_4.png");
/* harmony import */ var _public_assets_images_icono_4_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_icono_4_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_assets_images_image4_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/assets/images/image4.jpg */ "./public/assets/images/image4.jpg");
/* harmony import */ var _public_assets_images_image4_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_image4_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_assets_images_image3_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/assets/images/image3.jpg */ "./public/assets/images/image3.jpg");
/* harmony import */ var _public_assets_images_image3_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_image3_jpg__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\Users\\Admin\\Documents\\hipposoft\\MBAnalyst\\components\\WhoWeAre\\index.js";

 //Styles

 //Images






const WhoWeAre = () => {
  const {
    0: isElement1Visible,
    1: setIsElement1Visible1
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: isElement2Visible,
    1: setIsElement2Visible2
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const onChangeVisibility1 = isVisible => isVisible ? setIsElement1Visible1(true) : setIsElement1Visible1(false);

  const onChangeVisibility2 = isVisible => isVisible ? setIsElement2Visible2(true) : setIsElement2Visible2(false);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _whoWeAre_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: `${_whoWeAre_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.first_section} ${_whoWeAre_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.section}`,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _whoWeAre_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.first_overlay
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "WHO WE ARE"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _whoWeAre_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.text,
        children: "We are committed to helping businesses make better decisions using data. Our expert team will become your trusted adviser on everything data combining passion, knowledge and experience to transform the way your business deals with data."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2___default.a, {
      onChange: onChangeVisibility1,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: `${isElement1Visible ? `${_whoWeAre_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.section_icon} ${_whoWeAre_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.section} visibleClass` : `${_whoWeAre_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.section_icon} ${_whoWeAre_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.section}`}`,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _whoWeAre_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.section_logo,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            alt: 'logo4',
            src: _public_assets_images_icono_4_png__WEBPACK_IMPORTED_MODULE_5___default.a,
            className: _whoWeAre_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.logo_one
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _whoWeAre_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.paragraph,
            children: "We provide end to end BI services tailored to fit your company\u2019s individual needs."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          alt: 'image4',
          src: _public_assets_images_image4_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
          className: _whoWeAre_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_one
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2___default.a, {
      onChange: onChangeVisibility2,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: `${isElement2Visible ? `${_whoWeAre_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.section_icon} ${_whoWeAre_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.section} visibleClass` : `${_whoWeAre_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.section_icon} ${_whoWeAre_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.section}`}`,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          alt: 'image3',
          src: _public_assets_images_image3_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
          className: _whoWeAre_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image_two
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _whoWeAre_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.section_logo,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            alt: 'logo5',
            src: _public_assets_images_icono_5_png__WEBPACK_IMPORTED_MODULE_4___default.a,
            className: _whoWeAre_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.logo_two
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _whoWeAre_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.paragraph,
            children: "We are a boutique data analytics consulting firm based in Melbourne, Australia with extensive experience working remotely in data projects around the world."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (WhoWeAre);

/***/ }),

/***/ "./components/WhoWeAre/whoWeAre.module.scss":
/*!**************************************************!*\
  !*** ./components/WhoWeAre/whoWeAre.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "whoWeAre_container__jjpxE",
	"section": "whoWeAre_section__1jhF8",
	"first_overlay": "whoWeAre_first_overlay__pagRl",
	"first_section": "whoWeAre_first_section__2-JbB",
	"text": "whoWeAre_text__2wPhv",
	"text_s": "whoWeAre_text_s__3iGBg",
	"section_icon": "whoWeAre_section_icon__3FkdH",
	"image_two": "whoWeAre_image_two__2kL3T",
	"image_one": "whoWeAre_image_one__3oCZe",
	"logo_one": "whoWeAre_logo_one__3ilvL",
	"logo_two": "whoWeAre_logo_two__2m7ko",
	"paragraph": "whoWeAre_paragraph__1F4VK",
	"section_logo": "whoWeAre_section_logo__12btd"
};


/***/ }),

/***/ "./components/YourData/index.js":
/*!**************************************!*\
  !*** ./components/YourData/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _yourData_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./yourData.module.scss */ "./components/YourData/yourData.module.scss");
/* harmony import */ var _yourData_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_yourData_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_assets_icons_icono_11_dif_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/assets/icons/icono_11_dif.png */ "./public/assets/icons/icono_11_dif.png");
/* harmony import */ var _public_assets_icons_icono_11_dif_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_assets_icons_icono_11_dif_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_assets_icons_icono_12_dif_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/assets/icons/icono_12_dif.png */ "./public/assets/icons/icono_12_dif.png");
/* harmony import */ var _public_assets_icons_icono_12_dif_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_assets_icons_icono_12_dif_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_assets_icons_icono_13_dif_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/assets/icons/icono_13_dif.png */ "./public/assets/icons/icono_13_dif.png");
/* harmony import */ var _public_assets_icons_icono_13_dif_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_assets_icons_icono_13_dif_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_assets_icons_icono_11_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/assets/icons/icono_11.png */ "./public/assets/icons/icono_11.png");
/* harmony import */ var _public_assets_icons_icono_11_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_assets_icons_icono_11_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_assets_icons_icono_12_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/assets/icons/icono_12.png */ "./public/assets/icons/icono_12.png");
/* harmony import */ var _public_assets_icons_icono_12_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_assets_icons_icono_12_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_assets_icons_icono_13_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../public/assets/icons/icono_13.png */ "./public/assets/icons/icono_13.png");
/* harmony import */ var _public_assets_icons_icono_13_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_assets_icons_icono_13_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_assets_images_image5_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../public/assets/images/image5.jpg */ "./public/assets/images/image5.jpg");
/* harmony import */ var _public_assets_images_image5_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_image5_jpg__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "C:\\Users\\Admin\\Documents\\hipposoft\\MBAnalyst\\components\\YourData\\index.js";
 //css

 //Images









const YourData = () => {
  const {
    0: isLeftHover,
    1: setIsLeftHover
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: isTopHover,
    1: setIsTopHover
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: isBottomHover,
    1: setIsBottomHover
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _yourData_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: _yourData_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.title,
      children: "EXPLORE YOUR DATA"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _yourData_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.content,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _yourData_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.items_wrapper,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: `${isTopHover ? `${_yourData_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item} ${_yourData_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.hover_element}` : `${_yourData_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item}`}`,
          onMouseEnter: () => setIsTopHover(true),
          onMouseLeave: () => setIsTopHover(false),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            alt: 'top-icon',
            src: _public_assets_icons_icono_11_png__WEBPACK_IMPORTED_MODULE_6___default.a
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _yourData_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.text,
            children: "Say goodbye to clunky spreadsheets, static views and manually compiled reports prone to human error"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: `${isLeftHover ? `${_yourData_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item} ${_yourData_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.hover_element}` : `${_yourData_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item}`}`,
          onMouseEnter: () => setIsLeftHover(true),
          onMouseLeave: () => setIsLeftHover(false),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            alt: 'left-icon',
            src: _public_assets_icons_icono_12_png__WEBPACK_IMPORTED_MODULE_7___default.a
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _yourData_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.text,
            children: "Discover powerful insights within your existing data to identify areas of improvement, streamline operations and make evidence-based decisions. "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: `${isBottomHover ? `${_yourData_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item} ${_yourData_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.hover_element}` : `${_yourData_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item}`}`,
          onMouseEnter: () => setIsBottomHover(true),
          onMouseLeave: () => setIsBottomHover(false),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            alt: 'bottom-icon',
            src: _public_assets_icons_icono_13_png__WEBPACK_IMPORTED_MODULE_8___default.a
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _yourData_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.text,
            children: "Get a BI solution tailored to your business needs to transform your data into actionable intelligence in the most efficient and sustainable way."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _yourData_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.rhombus_container,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: `${isLeftHover ? `${_yourData_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.rhombus} ${_yourData_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.left} ${_yourData_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.rhombus_hover}` : `${_yourData_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.rhombus} ${_yourData_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.left}`}`,
          onMouseEnter: () => setIsLeftHover(true),
          onMouseLeave: () => setIsLeftHover(false),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: _public_assets_icons_icono_12_dif_png__WEBPACK_IMPORTED_MODULE_4___default.a,
            alt: 'left-icon',
            className: _yourData_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.icon
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: `${isTopHover ? `${_yourData_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.rhombus} ${_yourData_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.top} ${_yourData_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.rhombus_hover}` : `${_yourData_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.rhombus} ${_yourData_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.top}`}`,
          onMouseEnter: () => setIsTopHover(true),
          onMouseLeave: () => setIsTopHover(false),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: _public_assets_icons_icono_11_dif_png__WEBPACK_IMPORTED_MODULE_3___default.a,
            alt: 'top-icon',
            className: _yourData_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.icon
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: `${_yourData_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.rhombus} ${_yourData_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.right}`,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: _public_assets_images_image5_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
            alt: 'right',
            className: _yourData_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.image
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: `${isBottomHover ? `${_yourData_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.rhombus} ${_yourData_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.bottom} ${_yourData_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.rhombus_hover}` : `${_yourData_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.rhombus} ${_yourData_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.bottom}`}`,
          onMouseEnter: () => setIsBottomHover(true),
          onMouseLeave: () => setIsBottomHover(false),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: _public_assets_icons_icono_13_dif_png__WEBPACK_IMPORTED_MODULE_5___default.a,
            alt: 'fourth-icon',
            className: _yourData_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.icon
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (YourData);

/***/ }),

/***/ "./components/YourData/yourData.module.scss":
/*!**************************************************!*\
  !*** ./components/YourData/yourData.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "yourData_container__jHjrb",
	"content": "yourData_content__15msG",
	"items_wrapper": "yourData_items_wrapper__fonLs",
	"text": "yourData_text__2tuaV",
	"item": "yourData_item__cyAYG",
	"title": "yourData_title__3abgL",
	"icon": "yourData_icon__3_Bwz",
	"image": "yourData_image__37Etd",
	"rhombus_container": "yourData_rhombus_container__CPmNS",
	"rhombus": "yourData_rhombus__9Bx7-",
	"left": "yourData_left__2RTgE",
	"top": "yourData_top__2YbmD",
	"right": "yourData_right__mC9qc",
	"bottom": "yourData_bottom__1ozzI",
	"rhombus_hover": "yourData_rhombus_hover__nViHu",
	"hover_element": "yourData_hover_element__3jhLK"
};


/***/ }),

/***/ "./components/imagenes/icono_1.png":
/*!*****************************************!*\
  !*** ./components/imagenes/icono_1.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/icono_1-7c1df133986c99e759ac3d01767a44e8.png";

/***/ }),

/***/ "./components/imagenes/icono_2.png":
/*!*****************************************!*\
  !*** ./components/imagenes/icono_2.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/icono_2-2eb18c54f8ac5eec99d92b9d0468e5b2.png";

/***/ }),

/***/ "./components/imagenes/icono_3.png":
/*!*****************************************!*\
  !*** ./components/imagenes/icono_3.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/icono_3-7020c139ed2c20e44d45de17241c0d89.png";

/***/ }),

/***/ "./components/imagenes/logo.svg":
/*!**************************************!*\
  !*** ./components/imagenes/logo.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4NDEuOSA1OTUuMyI+DQogICAgPGcgZmlsbD0iIzYxREFGQiI+DQogICAgICAgIDxwYXRoIGQ9Ik02NjYuMyAyOTYuNWMwLTMyLjUtNDAuNy02My4zLTEwMy4xLTgyLjQgMTQuNC02My42IDgtMTE0LjItMjAuMi0xMzAuNC02LjUtMy44LTE0LjEtNS42LTIyLjQtNS42djIyLjNjNC42IDAgOC4zLjkgMTEuNCAyLjYgMTMuNiA3LjggMTkuNSAzNy41IDE0LjkgNzUuNy0xLjEgOS40LTIuOSAxOS4zLTUuMSAyOS40LTE5LjYtNC44LTQxLTguNS02My41LTEwLjktMTMuNS0xOC41LTI3LjUtMzUuMy00MS42LTUwIDMyLjYtMzAuMyA2My4yLTQ2LjkgODQtNDYuOVY3OGMtMjcuNSAwLTYzLjUgMTkuNi05OS45IDUzLjYtMzYuNC0zMy44LTcyLjQtNTMuMi05OS45LTUzLjJ2MjIuM2MyMC43IDAgNTEuNCAxNi41IDg0IDQ2LjYtMTQgMTQuNy0yOCAzMS40LTQxLjMgNDkuOS0yMi42IDIuNC00NCA2LjEtNjMuNiAxMS0yLjMtMTAtNC0xOS43LTUuMi0yOS00LjctMzguMiAxLjEtNjcuOSAxNC42LTc1LjggMy0xLjggNi45LTIuNiAxMS41LTIuNlY3OC41Yy04LjQgMC0xNiAxLjgtMjIuNiA1LjYtMjguMSAxNi4yLTM0LjQgNjYuNy0xOS45IDEzMC4xLTYyLjIgMTkuMi0xMDIuNyA0OS45LTEwMi43IDgyLjMgMCAzMi41IDQwLjcgNjMuMyAxMDMuMSA4Mi40LTE0LjQgNjMuNi04IDExNC4yIDIwLjIgMTMwLjQgNi41IDMuOCAxNC4xIDUuNiAyMi41IDUuNiAyNy41IDAgNjMuNS0xOS42IDk5LjktNTMuNiAzNi40IDMzLjggNzIuNCA1My4yIDk5LjkgNTMuMiA4LjQgMCAxNi0xLjggMjIuNi01LjYgMjguMS0xNi4yIDM0LjQtNjYuNyAxOS45LTEzMC4xIDYyLTE5LjEgMTAyLjUtNDkuOSAxMDIuNS04Mi4zem0tMTMwLjItNjYuN2MtMy43IDEyLjktOC4zIDI2LjItMTMuNSAzOS41LTQuMS04LTguNC0xNi0xMy4xLTI0LTQuNi04LTkuNS0xNS44LTE0LjQtMjMuNCAxNC4yIDIuMSAyNy45IDQuNyA0MSA3Ljl6bS00NS44IDEwNi41Yy03LjggMTMuNS0xNS44IDI2LjMtMjQuMSAzOC4yLTE0LjkgMS4zLTMwIDItNDUuMiAyLTE1LjEgMC0zMC4yLS43LTQ1LTEuOS04LjMtMTEuOS0xNi40LTI0LjYtMjQuMi0zOC03LjYtMTMuMS0xNC41LTI2LjQtMjAuOC0zOS44IDYuMi0xMy40IDEzLjItMjYuOCAyMC43LTM5LjkgNy44LTEzLjUgMTUuOC0yNi4zIDI0LjEtMzguMiAxNC45LTEuMyAzMC0yIDQ1LjItMiAxNS4xIDAgMzAuMi43IDQ1IDEuOSA4LjMgMTEuOSAxNi40IDI0LjYgMjQuMiAzOCA3LjYgMTMuMSAxNC41IDI2LjQgMjAuOCAzOS44LTYuMyAxMy40LTEzLjIgMjYuOC0yMC43IDM5Ljl6bTMyLjMtMTNjNS40IDEzLjQgMTAgMjYuOCAxMy44IDM5LjgtMTMuMSAzLjItMjYuOSA1LjktNDEuMiA4IDQuOS03LjcgOS44LTE1LjYgMTQuNC0yMy43IDQuNi04IDguOS0xNi4xIDEzLTI0LjF6TTQyMS4yIDQzMGMtOS4zLTkuNi0xOC42LTIwLjMtMjcuOC0zMiA5IC40IDE4LjIuNyAyNy41LjcgOS40IDAgMTguNy0uMiAyNy44LS43LTkgMTEuNy0xOC4zIDIyLjQtMjcuNSAzMnptLTc0LjQtNTguOWMtMTQuMi0yLjEtMjcuOS00LjctNDEtNy45IDMuNy0xMi45IDguMy0yNi4yIDEzLjUtMzkuNSA0LjEgOCA4LjQgMTYgMTMuMSAyNCA0LjcgOCA5LjUgMTUuOCAxNC40IDIzLjR6TTQyMC43IDE2M2M5LjMgOS42IDE4LjYgMjAuMyAyNy44IDMyLTktLjQtMTguMi0uNy0yNy41LS43LTkuNCAwLTE4LjcuMi0yNy44LjcgOS0xMS43IDE4LjMtMjIuNCAyNy41LTMyem0tNzQgNTguOWMtNC45IDcuNy05LjggMTUuNi0xNC40IDIzLjctNC42IDgtOC45IDE2LTEzIDI0LTUuNC0xMy40LTEwLTI2LjgtMTMuOC0zOS44IDEzLjEtMy4xIDI2LjktNS44IDQxLjItNy45em0tOTAuNSAxMjUuMmMtMzUuNC0xNS4xLTU4LjMtMzQuOS01OC4zLTUwLjYgMC0xNS43IDIyLjktMzUuNiA1OC4zLTUwLjYgOC42LTMuNyAxOC03IDI3LjctMTAuMSA1LjcgMTkuNiAxMy4yIDQwIDIyLjUgNjAuOS05LjIgMjAuOC0xNi42IDQxLjEtMjIuMiA2MC42LTkuOS0zLjEtMTkuMy02LjUtMjgtMTAuMnpNMzEwIDQ5MGMtMTMuNi03LjgtMTkuNS0zNy41LTE0LjktNzUuNyAxLjEtOS40IDIuOS0xOS4zIDUuMS0yOS40IDE5LjYgNC44IDQxIDguNSA2My41IDEwLjkgMTMuNSAxOC41IDI3LjUgMzUuMyA0MS42IDUwLTMyLjYgMzAuMy02My4yIDQ2LjktODQgNDYuOS00LjUtLjEtOC4zLTEtMTEuMy0yLjd6bTIzNy4yLTc2LjJjNC43IDM4LjItMS4xIDY3LjktMTQuNiA3NS44LTMgMS44LTYuOSAyLjYtMTEuNSAyLjYtMjAuNyAwLTUxLjQtMTYuNS04NC00Ni42IDE0LTE0LjcgMjgtMzEuNCA0MS4zLTQ5LjkgMjIuNi0yLjQgNDQtNi4xIDYzLjYtMTEgMi4zIDEwLjEgNC4xIDE5LjggNS4yIDI5LjF6bTM4LjUtNjYuN2MtOC42IDMuNy0xOCA3LTI3LjcgMTAuMS01LjctMTkuNi0xMy4yLTQwLTIyLjUtNjAuOSA5LjItMjAuOCAxNi42LTQxLjEgMjIuMi02MC42IDkuOSAzLjEgMTkuMyA2LjUgMjguMSAxMC4yIDM1LjQgMTUuMSA1OC4zIDM0LjkgNTguMyA1MC42LS4xIDE1LjctMjMgMzUuNi01OC40IDUwLjZ6TTMyMC44IDc4LjR6Ii8+DQogICAgICAgIDxjaXJjbGUgY3g9IjQyMC45IiBjeT0iMjk2LjUiIHI9IjQ1LjciLz4NCiAgICAgICAgPHBhdGggZD0iTTUyMC41IDc4LjF6Ii8+DQogICAgPC9nPg0KPC9zdmc+DQo="

/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/styles/carousel.min.css":
/*!****************************************************************************!*\
  !*** ./node_modules/react-responsive-carousel/lib/styles/carousel.min.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_OurServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/OurServices */ "./components/OurServices/index.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ "./components/Header/index.js");
/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Banner */ "./components/Banner/index.js");
/* harmony import */ var _components_WhoWeAre__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/WhoWeAre */ "./components/WhoWeAre/index.js");
/* harmony import */ var _components_Explore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Explore */ "./components/Explore/index.js");
/* harmony import */ var _components_YourData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/YourData */ "./components/YourData/index.js");
/* harmony import */ var _components_Three__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Three */ "./components/Three/index.js");
/* harmony import */ var _components_OurWork__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/OurWork */ "./components/OurWork/index.js");
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Contact */ "./components/Contact/index.js");

var _jsxFileName = "C:\\Users\\Admin\\Documents\\hipposoft\\MBAnalyst\\pages\\index.js";
 //Components











function App() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "App",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Banner__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_OurServices__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_WhoWeAre__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Explore__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_YourData__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Three__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_OurWork__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Contact__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./public/assets/icons/icono7.png":
/*!****************************************!*\
  !*** ./public/assets/icons/icono7.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/icono7-915de9b3a8c6d5e77bdfc8b7e76f7cfc.png";

/***/ }),

/***/ "./public/assets/icons/icono_10.png":
/*!******************************************!*\
  !*** ./public/assets/icons/icono_10.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/icono_10-93f8cda0a84aa9767a133a155248122f.png";

/***/ }),

/***/ "./public/assets/icons/icono_11.png":
/*!******************************************!*\
  !*** ./public/assets/icons/icono_11.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/icono_11-97e7fbd73d167f681a4f0d5dba36d559.png";

/***/ }),

/***/ "./public/assets/icons/icono_11_dif.png":
/*!**********************************************!*\
  !*** ./public/assets/icons/icono_11_dif.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/icono_11_dif-557abe6336179ce1ab6f9034fe0d509d.png";

/***/ }),

/***/ "./public/assets/icons/icono_12.png":
/*!******************************************!*\
  !*** ./public/assets/icons/icono_12.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/icono_12-aae240f228d49f4a6725475da3ab8334.png";

/***/ }),

/***/ "./public/assets/icons/icono_12_dif.png":
/*!**********************************************!*\
  !*** ./public/assets/icons/icono_12_dif.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/icono_12_dif-07eb392127e870d70d4cb85d308fe028.png";

/***/ }),

/***/ "./public/assets/icons/icono_13.png":
/*!******************************************!*\
  !*** ./public/assets/icons/icono_13.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/icono_13-87aca49885654a3c4fa8d7785c0bfaf4.png";

/***/ }),

/***/ "./public/assets/icons/icono_13_dif.png":
/*!**********************************************!*\
  !*** ./public/assets/icons/icono_13_dif.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/icono_13_dif-40aa1035e7a2e46e2abecffb1d7b4cb5.png";

/***/ }),

/***/ "./public/assets/icons/icono_14.png":
/*!******************************************!*\
  !*** ./public/assets/icons/icono_14.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/icono_14-50650a3458f3c60b3bc7ccdf9860ea30.png";

/***/ }),

/***/ "./public/assets/icons/icono_15.png":
/*!******************************************!*\
  !*** ./public/assets/icons/icono_15.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/icono_15-4d9bedb2ce4123f30dec2400d35457a5.png";

/***/ }),

/***/ "./public/assets/icons/icono_16.png":
/*!******************************************!*\
  !*** ./public/assets/icons/icono_16.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/icono_16-8503f3a8bccd9ff8ea7d9b725ecfed60.png";

/***/ }),

/***/ "./public/assets/icons/icono_6.png":
/*!*****************************************!*\
  !*** ./public/assets/icons/icono_6.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/icono_6-5204b5bf5ffb7c910eacbeb2bc5e6245.png";

/***/ }),

/***/ "./public/assets/icons/icono_8.png":
/*!*****************************************!*\
  !*** ./public/assets/icons/icono_8.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/icono_8-7122583a5b5e76e74f60d5ce3cdca7b7.png";

/***/ }),

/***/ "./public/assets/icons/icono_9.png":
/*!*****************************************!*\
  !*** ./public/assets/icons/icono_9.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/icono_9-74749d243e068dc075432613ffb15895.png";

/***/ }),

/***/ "./public/assets/images/Transparent-logo.png":
/*!***************************************************!*\
  !*** ./public/assets/images/Transparent-logo.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/Transparent-logo-941084e8883632b0f4fdc4701a9c85d1.png";

/***/ }),

/***/ "./public/assets/images/icono_4.png":
/*!******************************************!*\
  !*** ./public/assets/images/icono_4.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/icono_4-00edb0ce34a2977439bc5e73b3b9dba4.png";

/***/ }),

/***/ "./public/assets/images/icono_5.png":
/*!******************************************!*\
  !*** ./public/assets/images/icono_5.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/icono_5-aee0656b4f9600b8cd4e250a835f6dd2.png";

/***/ }),

/***/ "./public/assets/images/image3.jpg":
/*!*****************************************!*\
  !*** ./public/assets/images/image3.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/image3-05e935397a63475edbf241c2737c48f7.jpg";

/***/ }),

/***/ "./public/assets/images/image4.jpg":
/*!*****************************************!*\
  !*** ./public/assets/images/image4.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/image4-21696ad0d8df8a5b81c443189d136ef0.jpg";

/***/ }),

/***/ "./public/assets/images/image5.jpg":
/*!*****************************************!*\
  !*** ./public/assets/images/image5.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/image5-502b0bbc937c7190ae871eb535be62a4.jpg";

/***/ }),

/***/ "hippo-components":
/*!***********************************!*\
  !*** external "hippo-components" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("hippo-components");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-iframe":
/*!*******************************!*\
  !*** external "react-iframe" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-iframe");

/***/ }),

/***/ "react-responsive-carousel":
/*!********************************************!*\
  !*** external "react-responsive-carousel" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-responsive-carousel");

/***/ }),

/***/ "react-visibility-sensor":
/*!******************************************!*\
  !*** external "react-visibility-sensor" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-visibility-sensor");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CYW5uZXIvYmFubmVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQmFubmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29udGFjdC9jb250YWN0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29udGFjdC9maWVsZFZhbGlkYXRpb25zLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29udGFjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0V4cGxvcmUvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRXhwbG9yZS9leHBsb3JlLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRXhwbG9yZS9leHBsb3JlSXRlbS9FeHBsb3JlSXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0V4cGxvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyL2hlYWRlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci9tb2JpbGUtbWVudS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci9tb2JpbGUtbWVudS9tb2JpbGVNZW51Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvT3VyU2VydmljZXMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvT3VyU2VydmljZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9PdXJTZXJ2aWNlcy9vdXJTZXJ2aWNlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL091clNlcnZpY2VzSXRlbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL091cldvcmsvTXlJZnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9PdXJXb3JrL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL091cldvcmsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9PdXJXb3JrL291cldvcmsubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UaHJlZS9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UaHJlZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RocmVlL3RocmVlLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGhyZWUvdGhyZWVJdGVtL1RocmVlSXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1dob1dlQXJlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvV2hvV2VBcmUvd2hvV2VBcmUubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Zb3VyRGF0YS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1lvdXJEYXRhL3lvdXJEYXRhLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW1hZ2VuZXMvaWNvbm9fMS5wbmciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbWFnZW5lcy9pY29ub18yLnBuZyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ltYWdlbmVzL2ljb25vXzMucG5nIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW1hZ2VuZXMvbG9nby5zdmciLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9pY29ucy9pY29ubzcucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvaWNvbnMvaWNvbm9fMTAucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvaWNvbnMvaWNvbm9fMTEucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvaWNvbnMvaWNvbm9fMTFfZGlmLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2ljb25zL2ljb25vXzEyLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2ljb25zL2ljb25vXzEyX2RpZi5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9pY29ucy9pY29ub18xMy5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9pY29ucy9pY29ub18xM19kaWYucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvaWNvbnMvaWNvbm9fMTQucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvaWNvbnMvaWNvbm9fMTUucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvaWNvbnMvaWNvbm9fMTYucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvaWNvbnMvaWNvbm9fNi5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9pY29ucy9pY29ub184LnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2ljb25zL2ljb25vXzkucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL1RyYW5zcGFyZW50LWxvZ28ucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2ljb25vXzQucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2ljb25vXzUucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2ltYWdlMy5qcGciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvaW1hZ2U0LmpwZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9pbWFnZTUuanBnIiwid2VicGFjazovLy9leHRlcm5hbCBcImhpcHBvLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlmcmFtZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC12aXNpYmlsaXR5LXNlbnNvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkJhbm5lciIsInN0eWxlcyIsImNvbnRhaW5lciIsImNvbnRlbnQiLCJMb2dvIiwidGV4dCIsImJsYWNrX3RleHQiLCJyZXF1aXJlZCIsInZhbHVlIiwidW5kZWZpbmVkIiwiZW1haWwiLCJ0ZXN0IiwiQ29udGFjdCIsInRpdGxlIiwiZmlyc3RfdGl0bGUiLCJzZWNvbmRfdGl0bGUiLCJib3JkZXIiLCJuYW1lIiwidHlwZSIsImxhYmVsIiwidmFsaWRhdGlvbnMiLCJFWFBMT1JFX0RBVEEiLCJpbWFnZSIsImljb242IiwiaWNvbjciLCJpY29uOCIsImljb245IiwiaWNvbjEwIiwiRXhwbG9yZUl0ZW0iLCJleHBsb3JlRGF0YSIsImlzRWxlbWVudFZpc2libGUiLCJzZXRJc0VsZW1lbnRWaXNpYmxlIiwidXNlU3RhdGUiLCJvbkNoYW5nZVZpc2liaWxpdHkiLCJpc1Zpc2libGUiLCJpdGVtIiwiaGV4YWdvbiIsImxvZ28iLCJFeHBsb3JlIiwibWFwIiwiaW5kZXgiLCJNRU5VX0xJTktTIiwibGlua1RvIiwiSGVhZGVyIiwibWVudSIsImxpbmsiLCJNb2JpbGVNZW51IiwicHJvcHMiLCJtZW51SXRlbXMiLCJzdHlsZSIsIm1lbnVUb2dnbGUiLCJTRVJWSUNFU19EQVRBIiwiaWQiLCJpY29uMSIsImljb24yIiwiaWNvbjMiLCJPdXJTZXJ2aWNlcyIsIk91clNlcnZpY2VzSXRlbSIsInNlcnZpY2VzRGF0YSIsIml0ZW1faW1hZ2UiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJpdGVtX3RpdGxlIiwiaXRlbV9kZXNjcmlwdGlvbiIsIml0ZW1fdGV4dCIsIk15SWZyYW1lIiwidXJsIiwiREFTSEJPQVJEUyIsIk91cldvcmsiLCJkYXNoYm9hcmQiLCJoZWlnaHQiLCJUSFJFRV9EQVRBIiwiVGhyZWUiLCJzZWN0aW9uIiwib3ZlcmxheSIsIlRocmVlSXRlbSIsInRocmVlRGF0YSIsImxvZ29fY29udGFpbmVyIiwiYmxhY2tfYm94IiwiYXJyb3ciLCJ0ZXh0X2NvbnRhaW5lciIsIldob1dlQXJlIiwiaXNFbGVtZW50MVZpc2libGUiLCJzZXRJc0VsZW1lbnQxVmlzaWJsZTEiLCJpc0VsZW1lbnQyVmlzaWJsZSIsInNldElzRWxlbWVudDJWaXNpYmxlMiIsIm9uQ2hhbmdlVmlzaWJpbGl0eTEiLCJvbkNoYW5nZVZpc2liaWxpdHkyIiwiZmlyc3Rfc2VjdGlvbiIsImZpcnN0X292ZXJsYXkiLCJzZWN0aW9uX2ljb24iLCJzZWN0aW9uX2xvZ28iLCJpY29ubzQiLCJsb2dvX29uZSIsInBhcmFncmFwaCIsImltYWdlNCIsImltYWdlX29uZSIsImltYWdlMyIsImltYWdlX3R3byIsImljb25vNSIsImxvZ29fdHdvIiwiWW91ckRhdGEiLCJpc0xlZnRIb3ZlciIsInNldElzTGVmdEhvdmVyIiwiaXNUb3BIb3ZlciIsInNldElzVG9wSG92ZXIiLCJpc0JvdHRvbUhvdmVyIiwic2V0SXNCb3R0b21Ib3ZlciIsIml0ZW1zX3dyYXBwZXIiLCJob3Zlcl9lbGVtZW50IiwiRmlyc3RJY29uT3JhbmdlIiwiU2Vjb25kSWNvbk9yYW5nZSIsIlRoaXJkSWNvbk9yYW5nZSIsInJob21idXNfY29udGFpbmVyIiwicmhvbWJ1cyIsImxlZnQiLCJyaG9tYnVzX2hvdmVyIiwiU2Vjb25kSWNvbldoaXRlIiwiaWNvbiIsInRvcCIsIkZpcnN0SWNvbldoaXRlIiwicmlnaHQiLCJJ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Ozs7Ozs7QUNBQSxvRjs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJiYW5uZXJfY29udGFpbmVyX19kdXlEelwiLFxuXHRcImNvbnRlbnRcIjogXCJiYW5uZXJfY29udGVudF9fMXJscGRcIixcblx0XCJ0ZXh0XCI6IFwiYmFubmVyX3RleHRfXzJtblFNXCIsXG5cdFwiYmxhY2tfdGV4dFwiOiBcImJhbm5lcl9ibGFja190ZXh0X19pdzBQTFwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuLy9TdHlsZVxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vYmFubmVyLm1vZHVsZS5zY3NzJztcclxuLy9JbWFnZVxyXG5pbXBvcnQgTG9nbyBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9UcmFuc3BhcmVudC1sb2dvLnBuZydcclxuXHJcbmNvbnN0IEJhbm5lciA9ICgpID0+IHtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0gaWQ9eydob21lJ30+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGFsdD17J2xvZ28nfSBzcmM9e0xvZ299Lz5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PjxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmJsYWNrX3RleHR9PkJldHRlcjwvc3Bhbj48L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT48c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5ibGFja190ZXh0fT5EYXRhLDwvc3Bhbj4gQmV0dGVyIERlY2lzaW9uczwvaDI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYW5uZXIiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJjb250YWN0X2NvbnRhaW5lcl9fMXU0MHpcIixcblx0XCJ0aXRsZVwiOiBcImNvbnRhY3RfdGl0bGVfXzIxdDJMXCIsXG5cdFwiZmlyc3RfdGl0bGVcIjogXCJjb250YWN0X2ZpcnN0X3RpdGxlX18yVjVYelwiLFxuXHRcInNlY29uZF90aXRsZVwiOiBcImNvbnRhY3Rfc2Vjb25kX3RpdGxlX18zY3FSdlwiLFxuXHRcImJvcmRlclwiOiBcImNvbnRhY3RfYm9yZGVyX18yS0pkalwiLFxuXHRcImN1c3RvbS1mb3JtLWNsYXNzXCI6IFwiY29udGFjdF9jdXN0b20tZm9ybS1jbGFzc19fMlVxZnVcIixcblx0XCJpdGVtXCI6IFwiY29udGFjdF9pdGVtX18zLWxhdlwiLFxuXHRcImlucHV0XCI6IFwiY29udGFjdF9pbnB1dF9fMWFkRWpcIixcblx0XCJlcnJvclwiOiBcImNvbnRhY3RfZXJyb3JfXzNFSDJqXCIsXG5cdFwiaW5wdXRfYm94XCI6IFwiY29udGFjdF9pbnB1dF9ib3hfXzdXeWE1XCIsXG5cdFwiZXJyb3JfbWVzc2FnZVwiOiBcImNvbnRhY3RfZXJyb3JfbWVzc2FnZV9femIyTFdcIixcblx0XCJzZWN0aW9uXCI6IFwiY29udGFjdF9zZWN0aW9uX18ySENLSVwiLFxuXHRcImZvcm1cIjogXCJjb250YWN0X2Zvcm1fXzFkU2ZnXCIsXG5cdFwiY29udGFjdC1ib3JkZXJcIjogXCJjb250YWN0X2NvbnRhY3QtYm9yZGVyX18ycnA1SlwiXG59O1xuIiwiY29uc3QgcmVxdWlyZWQgPSB2YWx1ZSA9PiB2YWx1ZSA/IHVuZGVmaW5lZCA6ICdSZXF1aXJlZCc7XHJcblxyXG5jb25zdCBlbWFpbCA9IHZhbHVlID0+XHJcbiAgICB2YWx1ZSAmJiAhL15bQS1aMC05Ll8lKy1dK0BbQS1aMC05Li1dK1xcLltBLVpdezIsNH0kL2kudGVzdCh2YWx1ZSkgP1xyXG4gICAgICAgICdJbnZhbGlkIGVtYWlsIGFkZHJlc3MnIDogdW5kZWZpbmVkO1xyXG5cclxuZXhwb3J0IHtcclxuICAgIHJlcXVpcmVkLFxyXG4gICAgZW1haWwsXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG4vL1N0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vY29udGFjdC5tb2R1bGUuc2Nzcyc7XHJcbi8vRmllbGRzIHZhbGlkYXRpb25zXHJcbmltcG9ydCB7IHJlcXVpcmVkLCBlbWFpbCB9IGZyb20gJy4vZmllbGRWYWxpZGF0aW9ucyc7XHJcbmltcG9ydCB7IEZvcm0gfSBmcm9tICdoaXBwby1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IENvbnRhY3QgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSBpZD17J2NvbnRhY3QnfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuZmlyc3RfdGl0bGV9PkNPTlRBQ1Q8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnNlY29uZF90aXRsZX0+QU5EIEdFVCBNWSBRVU9URTwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvcmRlcn0+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybVxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkcz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnbmFtZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ05hbWUgKFJlcXVpcmVkKScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uczogW3JlcXVpcmVkXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2N1c3RvbWVyRW1haWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdFbWFpbCAoUmVxdWlyZWQpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zOiBbZW1haWxdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc3ViamVjdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1N1YmplY3QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnbWVzc2FnZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAndGV4dEFyZWEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdNZXNzYWdlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWNjZXNzTWVzc2FnZT17J1lvdXIgbWVzc2FnZSBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgc2VudC4gV2Ugd2lsbCBjb250YWN0IHlvdSB2ZXJ5IHNvb24hJ31cclxuICAgICAgICAgICAgICAgICAgICBvbkVycm9yTWVzc2FnZT17J1BsZWFzZSB0cnkgYWdhaW4gaW4gc29tZSBtaW51dGVzJ31cclxuICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b25MYWJlbD17J1NVQk1JVCd9XHJcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M9eydtYmFuYWx5c3QtY29udGFjdC1mb3JtJ31cclxuICAgICAgICAgICAgICAgICAgICBlbWFpbFNlcnZpY2VVUkw9eydodHRwczovL3RoZWhpcHBvYXBpLm5ldGxpZnkuYXBwLy5uZXRsaWZ5L2Z1bmN0aW9ucy9hcGkvbWJhbmFseXN0LW1haWwnfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0XHJcbiIsImltcG9ydCBpY29uNiBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2ljb25zL2ljb25vXzYucG5nJztcclxuaW1wb3J0IGljb243IGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvaWNvbnMvaWNvbm83LnBuZyc7XHJcbmltcG9ydCBpY29uOCBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2ljb25zL2ljb25vXzgucG5nJztcclxuaW1wb3J0IGljb245IGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvaWNvbnMvaWNvbm9fOS5wbmcnO1xyXG5pbXBvcnQgaWNvbjEwIGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvaWNvbnMvaWNvbm9fMTAucG5nJztcclxuXHJcbmNvbnN0IEVYUExPUkVfREFUQSA9IFtcclxuICAgIHtcclxuICAgICAgICBpbWFnZTogaWNvbjYsXHJcbiAgICAgICAgdGV4dDogJ0dldCByZWFsIHRpbWUgdmlzaWJpbGl0eSBvZiB5b3VyIGJ1c2luZXNzIEtQSXMgYW5kIHNhdmUgc2lnbmlmaWNhbnQgY29zdHMgYnknICtcclxuICAgICAgICAgICAgJyBzd2l0Y2hpbmcgbWFudWFsIHJlcG9ydGluZyBhY3Rpdml0aWVzIHdpdGggZnVsbHkgYXV0b21hdGVkIHJlcG9ydHMgYW5kIHNjaGVkdWxlZCByZWZyZXNoZXMuJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW1hZ2U6IGljb243LFxyXG4gICAgICAgIHRleHQ6ICdPZmZlcnMgZGF0YSBhbmFseXNpcyB3aXRob3V0IHRoZSByZXF1aXJlbWVudCBvZiBzcGVjaWFsaXNlZCB0ZWNobmljYWwgc3VwcG9ydCwnICtcclxuICAgICAgICAgICAgJyB3aXRoIGEgc3Ryb25nLCBpbnR1aXRpdmUgaW50ZXJmYWNlLicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGltYWdlOiBpY29uOCxcclxuICAgICAgICB0ZXh0OiAnU2F2ZXMgeW91IHRpbWUgd2l0aCBjdXN0b21pc2VkIGluZm9ybWF0aW9uIGRhc2hib2FyZHMsIHdoaWNoIGFyZSBtb3VsZGVkIHRvIHlvdXInICtcclxuICAgICAgICAgICAgJyBvcmdhbmlzYXRpb25cXCdzIHNwZWNpZmljIG5lZWRzLicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGltYWdlOiBpY29uOSxcclxuICAgICAgICB0ZXh0OiAnRWxpbWluYXRlcyBzcGVlZCBhbmQgbWVtb3J5IHJlc3RyaWN0aW9ucyB0aGFua3MgdG8gYSByb2J1c3QgY2xvdWQgZW52aXJvbm1lbnQsJyArXHJcbiAgICAgICAgICAgICcgZW5hYmxpbmcgZGF0YSB0byBiZSBmb3VuZCBhbmQgYW5hbHlzZWQgcmFwaWRseS4nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpbWFnZTogaWNvbjEwLFxyXG4gICAgICAgIHRleHQ6ICdBbGxvd3MgeW91IHRvIHZpZXcgcmVwb3J0cyBpbnN0YW50bHkgb24gbXVsdGlwbGUgd2ViLWNvbm5lY3RlZCBkZXZpY2VzLCcgK1xyXG4gICAgICAgICAgICAnIGluY2x1ZGluZyBpT1MsIEFuZHJvaWQgYW5kIFdpbmRvd3MuJyxcclxuICAgIH0sXHJcbl07XHJcblxyXG5leHBvcnQgeyBFWFBMT1JFX0RBVEEgfTsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJleHBsb3JlX2NvbnRhaW5lcl9fMXNzNjdcIixcblx0XCJ0aXRsZVwiOiBcImV4cGxvcmVfdGl0bGVfXzF6cmV3XCIsXG5cdFwiY29udGVudFwiOiBcImV4cGxvcmVfY29udGVudF9fMkVMSVNcIixcblx0XCJpdGVtXCI6IFwiZXhwbG9yZV9pdGVtX18zbDZscVwiLFxuXHRcImhleGFnb25cIjogXCJleHBsb3JlX2hleGFnb25fXzJnQ0hrXCIsXG5cdFwibG9nb1wiOiBcImV4cGxvcmVfbG9nb19fMXJkbG9cIixcblx0XCJ0ZXh0XCI6IFwiZXhwbG9yZV90ZXh0X18yZFBXOFwiLFxuXHRcInZpc2libGVDbGFzc1wiOiBcImV4cGxvcmVfdmlzaWJsZUNsYXNzX19TbTU0eFwiLFxuXHRcInNlY3Rpb25cIjogXCJleHBsb3JlX3NlY3Rpb25fXzFGcXo3XCJcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVmlzaWJpbGl0eVNlbnNvciBmcm9tICdyZWFjdC12aXNpYmlsaXR5LXNlbnNvcic7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vZXhwbG9yZS5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBFeHBsb3JlSXRlbSA9ICh7ZXhwbG9yZURhdGF9KSA9PiB7XHJcbiAgICBjb25zdCBbaXNFbGVtZW50VmlzaWJsZSwgc2V0SXNFbGVtZW50VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBvbkNoYW5nZVZpc2liaWxpdHkgPSAoaXNWaXNpYmxlKSA9PiBpc1Zpc2libGUgPyBzZXRJc0VsZW1lbnRWaXNpYmxlKHRydWUpIDogc2V0SXNFbGVtZW50VmlzaWJsZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3Qge2ltYWdlLCB0ZXh0fSA9IGV4cGxvcmVEYXRhO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFZpc2liaWxpdHlTZW5zb3Igb25DaGFuZ2U9e29uQ2hhbmdlVmlzaWJpbGl0eX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtpc0VsZW1lbnRWaXNpYmxlID8gYCR7c3R5bGVzLml0ZW19IHZpc2libGVDbGFzc2AgOiBgJHtzdHlsZXMuaXRlbX1gfWB9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZXhhZ29ufT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IGFsdD17J2xvZ28nfSBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9Pnt0ZXh0fTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9WaXNpYmlsaXR5U2Vuc29yPlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXhwbG9yZUl0ZW0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG4vL1N0eWxlXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9leHBsb3JlLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgRXhwbG9yZUl0ZW0gZnJvbSAnLi9leHBsb3JlSXRlbS9FeHBsb3JlSXRlbSc7XHJcbmltcG9ydCB7RVhQTE9SRV9EQVRBfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5jb25zdCBFeHBsb3JlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+V2h5IGNob29zZSBhIEJJIHNvbHV0aW9uPzwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICB7RVhQTE9SRV9EQVRBLm1hcCgodmFsdWUsIGluZGV4KSA9PiA8RXhwbG9yZUl0ZW0gZXhwbG9yZURhdGE9e3ZhbHVlfSBrZXk9e3ZhbHVlLnRleHR9Lz4pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4cGxvcmUiLCJjb25zdCBNRU5VX0xJTktTID0gW1xyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOiAnSE9NRScsXHJcbiAgICAgICAgbGlua1RvOiAnI2hvbWUnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOiAnU0VSVklDRVMnLFxyXG4gICAgICAgIGxpbmtUbzogJyNzZXJ2aWNlcydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6ICdXT1JLJyxcclxuICAgICAgICBsaW5rVG86ICcjd29yaydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6ICdDT05UQUNUJyxcclxuICAgICAgICBsaW5rVG86ICcjY29udGFjdCdcclxuICAgIH0sXHJcbl07XHJcblxyXG5leHBvcnQge1xyXG4gICAgTUVOVV9MSU5LUyxcclxufSIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcImhlYWRlcl9jb250YWluZXJfXzFIaU42XCIsXG5cdFwibWVudVwiOiBcImhlYWRlcl9tZW51X18yM3dIYlwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuLy9TdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2hlYWRlci5tb2R1bGUuc2Nzcyc7XHJcbi8vQ29uc3RhbnRzXHJcbmltcG9ydCB7IE1FTlVfTElOS1MgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbi8vQ29tcG9uZW50c1xyXG5pbXBvcnQgTW9iaWxlTWVudSBmcm9tICcuL21vYmlsZS1tZW51JztcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuXHJcbiAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcbiAgICAgICAgLy8gQ2xpZW50LXNpZGUtb25seSBjb2RlXHJcbiAgICAgICAgY29uc3Qgc3RpY2t5RnVuY3Rpb24gPSAoKSA9PiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGxldCBuYXZpZ2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbmF2Jyk7XHJcblxyXG4gICAgICAgICAgICBpZiAobmF2aWdhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgbmF2aWdhdGlvbi5jbGFzc0xpc3QudG9nZ2xlKCdzdGlja3knLCB3aW5kb3cuc2Nyb2xsWSA+IDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBzdGlja3lGdW5jdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG5hdiByb2xlPXsnbmF2aWdhdGlvbid9IGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvbnRhaW5lcn0gaGVhZGVyLXdyYXBwZXJgIH0+XHJcbiAgICAgICAgICAgIDx1bCBpZD17J2xhcmdlLXNjcmVlbi1tZW51J30gY2xhc3NOYW1lPXtzdHlsZXMubWVudX0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgTUVOVV9MSU5LUy5tYXAoKGxpbmssaW5kZXgpID0+IDxhIGtleT17aW5kZXh9IGhyZWY9e2xpbmsubGlua1RvfT48bGk+e2xpbmsubGFiZWx9PC9saT48L2E+KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8TW9iaWxlTWVudSBtZW51SXRlbXM9e01FTlVfTElOS1N9IC8+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuLy9TdHlsZVxyXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9tb2JpbGVNZW51Lm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IE1vYmlsZU1lbnUgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHsgbWVudUl0ZW1zIH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5tZW51VG9nZ2xlfT5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+XHJcbiAgICAgICAgICAgIDxzcGFuIC8+XHJcbiAgICAgICAgICAgIDxzcGFuIC8+XHJcbiAgICAgICAgICAgIDxzcGFuIC8+XHJcbiAgICAgICAgICAgIDx1bCBpZD17J21lbnUnfSBjbGFzc05hbWU9e3N0eWxlLm1lbnV9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lbnVJdGVtcy5tYXAoKGxpbmssaW5kZXgpID0+IDxhIGtleT17aW5kZXh9IGhyZWY9e2xpbmsubGlua1RvfT48bGk+e2xpbmsubGFiZWx9PC9saT48L2E+KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlTWVudTsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtZW51VG9nZ2xlXCI6IFwibW9iaWxlTWVudV9tZW51VG9nZ2xlX18ySlZrU1wiLFxuXHRcIm1lbnVcIjogXCJtb2JpbGVNZW51X21lbnVfX2pfUkhLXCJcbn07XG4iLCJpbXBvcnQgaWNvbjEgZnJvbSAnLi4vaW1hZ2VuZXMvaWNvbm9fMS5wbmcnO1xyXG5pbXBvcnQgaWNvbjIgZnJvbSAnLi4vaW1hZ2VuZXMvaWNvbm9fMi5wbmcnO1xyXG5pbXBvcnQgaWNvbjMgZnJvbSAnLi4vaW1hZ2VuZXMvaWNvbm9fMy5wbmcnO1xyXG5cclxuY29uc3QgU0VSVklDRVNfREFUQSA9IFtcclxuICAgIHtcclxuICAgICAgaWQ6ICdib3gxJyxcclxuICAgICAgaW1hZ2U6IGljb24xLFxyXG4gICAgICB0aXRsZTogJ1Bvd2VyIEJJIENvbnN1bHRpbmcnLFxyXG4gICAgICB0ZXh0OiAnV2Ugd29yayB3aXRoIFBvd2VyIEJJIHRvIGNyZWF0ZSBwb3dlcmZ1bCBhdXRvbWF0ZWQgcmVwb3J0cycgK1xyXG4gICAgICAgICAgJyB0byB2aXN1YWxpc2UgeW91ciBidXNpbmVzcyBkYXRhLCBjYXB0dXJlIGtleSBpbnNpZ2h0cyBpbiByZWFsIHRpbWUgYW5kIGltcHJvdmUgZGVjaXNpb24gbWFraW5nLiAnICtcclxuICAgICAgICAgICdBcyBhIGJlc3QtaW4tY2xhc3MgQkkgcGxhdGZvcm0sIFBvd2VyIEJJIGFsbG93cyB5b3UgdG8gY29ubmVjdCB0byBkYXRhIHN0b3JlZCBpbiBtdWx0aXBsZSBzb3VyY2VzJyArXHJcbiAgICAgICAgICAnIGFuZCBzaGFyZSBhbmQgY29sbGFib3JhdGUgYW1vbmcgeW91ciB0ZWFtIG1lbWJlcnMsIGVuc3VyaW5nIHlvdXIgZGF0YSBoYXMgdGhlIG1heGltdW0gaW1wYWN0LicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJ2JveDInLFxyXG4gICAgICBpbWFnZTogaWNvbjIsXHJcbiAgICAgIHRpdGxlOiAnQnVzaW5lc3MgQW5hbHlzaXMnLFxyXG4gICAgICB0ZXh0OiAnV2UgdXNlIG91ciB3ZWFsdGggb2YgZXhwZXJpZW5jZSBpbiBCSSBhbmQgY29tbWVyY2lhbCBhY3VtZW4gdG8gaGVscCB5b3VyJyArXHJcbiAgICAgICAgICAnIGJ1c2luZXNzIGlkZW50aWZ5IGFuZCB1bmRlcnN0YW5kIGl0cyBrZXkgcGVyZm9ybWFuY2UgZHJpdmVycywgc2V0IG1lYW5pbmdmdWwgdGFyZ2V0cywnICtcclxuICAgICAgICAgICcgc29sdmUgcHJvYmxlbXMgd2l0aCBkYXRhIGFuZCBzdXBwb3J0IG1ham9yIGJ1c2luZXNzIGRlY2lzaW9ucywgd29ya2luZyBjbG9zZWx5IHdpdGggcHJvY2VzcycgK1xyXG4gICAgICAgICAgJyBvd25lcnMgdG8gbWFrZSB0aGUgbW9zdCBvZiB5b3VyIGRhdGEuJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnYm94MycsXHJcbiAgICAgIGltYWdlOiBpY29uMyxcclxuICAgICAgdGl0bGU6ICdCSSBzdXBwb3J0JyxcclxuICAgICAgdGV4dDogJ1dlIG9mZmVyIGVuZC10by1lbmQgc3VwcG9ydCB0byBjb21wYW5pZXMgYWxyZWFkeSBvcGVyYXRpbmcgYSBQb3dlciBCSSBzb2x1dGlvbiwnICtcclxuICAgICAgICAgICcgZXhwZXJ0IGNvbnN1bHRhbmN5IG9uIFBvd2VyIEJJIGJlc3QgcHJhY3RpY2VzIGFuZCB0cmFpbmluZyBzZXNzaW9ucyBhbGxvd2luZyB5b3VyIGJ1c2luZXNzJyArXHJcbiAgICAgICAgICAnIHRvIHJlYWxpc2UgaXRzIGZ1bGwgQkkgcG90ZW50aWFsLicsXHJcbiAgICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IHsgU0VSVklDRVNfREFUQSB9OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9vdXJTZXJ2aWNlcy5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCAnLi4vaW1hZ2VuZXMvbG9nby5zdmcnO1xyXG5pbXBvcnQgT3VyU2VydmljZXNJdGVtIGZyb20gJy4uL091clNlcnZpY2VzSXRlbSc7XHJcbmltcG9ydCB7IFNFUlZJQ0VTX0RBVEEgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuXHJcbmNvbnN0IE91clNlcnZpY2VzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3NpbXBsZS1zZWN0aW9uLXdyYXBwZXInfSBpZD17J3NlcnZpY2VzJ30+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9eydzZWN0aW9uLXN1YnRpdGxlJ30+T1VSIFNFUlZJQ0VTPC9oMj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAge1NFUlZJQ0VTX0RBVEEubWFwKCh2YWx1ZSwgaW5kZXgpID0+IDxPdXJTZXJ2aWNlc0l0ZW0gc2VydmljZXNEYXRhPXt2YWx1ZX0ga2V5PXt2YWx1ZS50aXRsZX0vPil9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3VyU2VydmljZXM7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwib3VyU2VydmljZXNfY29udGFpbmVyX18zbUh2c1wiLFxuXHRcIml0ZW1cIjogXCJvdXJTZXJ2aWNlc19pdGVtX18xMHFvTFwiLFxuXHRcIml0ZW1faW1hZ2VcIjogXCJvdXJTZXJ2aWNlc19pdGVtX2ltYWdlX18xSm5vR1wiLFxuXHRcIml0ZW1fZGVzY3JpcHRpb25cIjogXCJvdXJTZXJ2aWNlc19pdGVtX2Rlc2NyaXB0aW9uX18xSnQ3OFwiLFxuXHRcIml0ZW1fdGl0bGVcIjogXCJvdXJTZXJ2aWNlc19pdGVtX3RpdGxlX18yNkVEU1wiLFxuXHRcIml0ZW1fdGV4dFwiOiBcIm91clNlcnZpY2VzX2l0ZW1fdGV4dF9fMTdGUm9cIlxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFZpc2liaWxpdHlTZW5zb3IgZnJvbSAncmVhY3QtdmlzaWJpbGl0eS1zZW5zb3InO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL091clNlcnZpY2VzL291clNlcnZpY2VzLm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IE91clNlcnZpY2VzSXRlbSA9ICh7c2VydmljZXNEYXRhfSkgPT4ge1xyXG4gICAgY29uc3QgW2lzRWxlbWVudFZpc2libGUsIHNldElzRWxlbWVudFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Qgb25DaGFuZ2VWaXNpYmlsaXR5ID0gKGlzVmlzaWJsZSkgPT4gaXNWaXNpYmxlID8gc2V0SXNFbGVtZW50VmlzaWJsZSh0cnVlKSA6IHNldElzRWxlbWVudFZpc2libGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IHtpbWFnZSwgdGl0bGUsIHRleHQsIGlkfSA9IHNlcnZpY2VzRGF0YTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxWaXNpYmlsaXR5U2Vuc29yIG9uQ2hhbmdlPXtvbkNoYW5nZVZpc2liaWxpdHl9PlxyXG4gICAgICAgICAgICA8ZGl2IGlkPXtpZH0gY2xhc3NOYW1lPXtgJHtzdHlsZXMuaXRlbX0gdmlzaWJsZUNsYXNzYH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLml0ZW1faW1hZ2V9IHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOmB1cmwoJHtpbWFnZX0pYH19Lz5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5pdGVtX3RpdGxlfT57dGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaXRlbV9kZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuaXRlbV90ZXh0fT57dGV4dH08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9WaXNpYmlsaXR5U2Vuc29yPlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3VyU2VydmljZXNJdGVtIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IElmcmFtZSBmcm9tICdyZWFjdC1pZnJhbWUnO1xyXG5cclxuY29uc3QgTXlJZnJhbWUgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHsgdXJsLCBpZCB9ID0gcHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxJZnJhbWUgdXJsPXt1cmx9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjk5JVwiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgIGlkPXtpZH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm15LWlmcmFtZVwiXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5PVwiaW5pdGlhbFwiXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcclxuICAgICAgICAvPlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlJZnJhbWUiLCJjb25zdCBEQVNIQk9BUkRTID0gW1xyXG4gICAge1xyXG4gICAgICAgIHVybDogJ2h0dHBzOi8vYXBwLnBvd2VyYmkuY29tL3ZpZXc/cj1leUpySWpvaU1UWmxOR1JoTkdRdFlXVmpOaTAwTkdaaUxXRTJOamN0TW1FeFkyTXhOV1UyTnpVNUlpd2lkQ0k2SWpKa01XRTJZalprTFdZNU0yVXROREpsWXkwNFl6UXlMVGhrWVdFNU5EQXpaREJrT0NKOSZwYWdlTmFtZT1SZXBvcnRTZWN0aW9uMScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVybDogJ2h0dHBzOi8vYXBwLnBvd2VyYmkuY29tL3ZpZXc/cj1leUpySWpvaU5URmhaakk1Tm1NdFkyTXdaaTAwTXpnM0xUZzFZVGt0WW1NeU1XUXdZV1V4TWpFeklpd2lkQ0k2SWpKa01XRTJZalprTFdZNU0yVXROREpsWXkwNFl6UXlMVGhrWVdFNU5EQXpaREJrT0NKOScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVybDogJ2h0dHBzOi8vYXBwLnBvd2VyYmkuY29tL3ZpZXc/cj1leUpySWpvaVpXTTRPV0k1TWpZdFpEQXdNUzAwTW1FekxUazRZVFV0WVRBeE5qZzJOR1ZrTlRneElpd2lkQ0k2SWpKa01XRTJZalprTFdZNU0yVXROREpsWXkwNFl6UXlMVGhrWVdFNU5EQXpaREJrT0NKOScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVybDogJ2h0dHBzOi8vYXBwLnBvd2VyYmkuY29tL3ZpZXc/cj1leUpySWpvaU1qSXpZelEwTnprdE0ySXhaQzAwTnpGakxUazNOVGN0TVRBME1UbGhNekpoTlRjeElpd2lkQ0k2SWpKa01XRTJZalprTFdZNU0yVXROREpsWXkwNFl6UXlMVGhrWVdFNU5EQXpaREJrT0NKOSZwYWdlTmFtZT1SZXBvcnRTZWN0aW9uNDIxNGYxZWJkYWZkYjA3ZjU1ODgnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1cmw6ICdodHRwczovL2FwcC5wb3dlcmJpLmNvbS92aWV3P3I9ZXlKcklqb2lNR00yWkRVNFkySXROekZpTWkwMFpEVm1MVGcxTUdJdE9XRmxOV0k0WlRVeVpXSXpJaXdpZENJNklqSmtNV0UyWWpaa0xXWTVNMlV0TkRKbFl5MDRZelF5TFRoa1lXRTVOREF6WkRCa09DSjkmcGFnZU5hbWU9UmVwb3J0U2VjdGlvbmM0YmE2MWE3NjViMDliMDA2MjY3JyxcclxuICAgIH0sXHJcbl07XHJcblxyXG5leHBvcnQge1xyXG4gICAgREFTSEJPQVJEU1xyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuLy9TdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL291cldvcmsubW9kdWxlLnNjc3MnO1xyXG4vL0NvbnN0YW50c1xyXG5pbXBvcnQgeyBEQVNIQk9BUkRTIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG4vL0NvbXBvbmVudFxyXG5pbXBvcnQgJ3JlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwvbGliL3N0eWxlcy9jYXJvdXNlbC5taW4uY3NzJzsgLy8gcmVxdWlyZXMgYSBsb2FkZXJcclxuaW1wb3J0IE15SWZyYW1lIGZyb20gJy4vTXlJZnJhbWUnO1xyXG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gJ3JlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwnO1xyXG5cclxuY29uc3QgT3VyV29yayA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eydzaW1wbGUtc2VjdGlvbi13cmFwcGVyJ30gaWQ9eyd3b3JrJ30+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9eydzZWN0aW9uLXN1YnRpdGxlJ30+T1VSIFdPUks8L2gyPlxyXG4gICAgICAgICAgICA8Q2Fyb3VzZWxcclxuICAgICAgICAgICAgICAgIGluZmluaXRlTG9vcD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIHNob3dTdGF0dXM9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgc2hvd1RodW1icz17ZmFsc2V9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBEQVNIQk9BUkRTLm1hcCgoZGFzaGJvYXJkLCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBzdHlsZT17e2hlaWdodDogJzEwMCUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TXlJZnJhbWUgdXJsPXtkYXNoYm9hcmQudXJsfSBpZD17aW5kZXh9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5BcmUgeW91IHJlYWR5IHRvIGFjY2VsZXJhdGUgeW91ciBidXNpbmVzcyBncm93dGg/PGJyLz4gR2V0IGluIHRvdWNoIHRvXHJcbiAgICAgICAgICAgICAgICBkaXNjb3ZlciBtb3JlIGFib3V0IHdoYXQgTUJBbmFseXN0IGNvdWxkIGRvIGZvciB5b3VyIGJ1c2luZXNzLjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE91cldvcms7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidGV4dFwiOiBcIm91cldvcmtfdGV4dF9fT0VKdWdcIlxufTtcbiIsImltcG9ydCBpY29uMSBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2ljb25zL2ljb25vXzE0LnBuZyc7XHJcbmltcG9ydCBpY29uMiBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2ljb25zL2ljb25vXzE1LnBuZyc7XHJcbmltcG9ydCBpY29uMyBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2ljb25zL2ljb25vXzE2LnBuZyc7XHJcblxyXG5jb25zdCBUSFJFRV9EQVRBID0gW1xyXG4gICAge1xyXG4gICAgICAgIGltYWdlOiBpY29uMSxcclxuICAgICAgICB0ZXh0OiAnTWFuYWdlIGludmVudG9yeSBrZXkgbWV0cmljcyBzdWNoIGFzIEFnZWQgU3RvY2ssIEludmVudG9yeSBUdXJub3ZlciwgQXZhaWxhYmlsaXR5LCcgK1xyXG4gICAgICAgICAgICAnIGZhc3Rlc3QgbW92aW5nIGludmVudG9yeSBpdGVtcyBhbmQgb3RoZXJzLicsXHJcbiAgICAgICAgaWQ6ICdib3gnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpbWFnZTogaWNvbjIsXHJcbiAgICAgICAgdGV4dDogJ0xpbmsgaW52ZW50b3J5IGRhdGEgdG8gc2FsZXMgcGVyZm9ybWFuY2UgdG8gZm9yZWNhc3QgaW52ZW50b3J5IHB1cmNoYXNlcyBhbmQnICtcclxuICAgICAgICAgICAgJyBoZWFsdGh5IHN0b2NrIGxldmVscycsXHJcbiAgICAgICAgaWQ6ICdibGFjay1ib3gnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpbWFnZTogaWNvbjMsXHJcbiAgICAgICAgdGV4dDogJ1Zpc3VhbGlzZSBvdmVyYWxsIFN1cHBseSBwZXJmb3JtYW5jZSBjaGFpbiB0aHJvdWdoIHVwZGF0ZWQgZGF0YSBkaXJlY3RseSBjb25uZWN0ZWQnICtcclxuICAgICAgICAgICAgJyB0byB5b3VyIGludmVudG9yeSBtYW5hZ2VtZW50IHN5c3RlbXMnLFxyXG4gICAgICAgIGlkOiAnYm94JyxcclxuICAgIH0sXHJcbl07XHJcblxyXG5leHBvcnQgeyBUSFJFRV9EQVRBIH07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRocmVlSXRlbSBmcm9tICcuL3RocmVlSXRlbS9UaHJlZUl0ZW0nO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vdGhyZWUubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyBUSFJFRV9EQVRBIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5cclxuXHJcbmNvbnN0IFRocmVlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VjdGlvbn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3ZlcmxheX0vPlxyXG4gICAgICAgICAgICB7VEhSRUVfREFUQS5tYXAoKHZhbHVlLCBpbmRleCkgPT4gPFRocmVlSXRlbSAgdGhyZWVEYXRhPXt2YWx1ZX0ga2V5PXt2YWx1ZS50ZXh0fS8+KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRocmVlOyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm92ZXJsYXlcIjogXCJ0aHJlZV9vdmVybGF5X18yclZpVlwiLFxuXHRcInNlY3Rpb25cIjogXCJ0aHJlZV9zZWN0aW9uX192aHZaZlwiLFxuXHRcImJsYWNrX2JveFwiOiBcInRocmVlX2JsYWNrX2JveF9fMXdLTk9cIixcblx0XCJsb2dvXCI6IFwidGhyZWVfbG9nb19fT2FEVmVcIixcblx0XCJhcnJvd1wiOiBcInRocmVlX2Fycm93X18yeGU1TFwiLFxuXHRcInRleHRfY29udGFpbmVyXCI6IFwidGhyZWVfdGV4dF9jb250YWluZXJfXzFsNU5WXCIsXG5cdFwibG9nb19jb250YWluZXJcIjogXCJ0aHJlZV9sb2dvX2NvbnRhaW5lcl9fMi1aMmdcIixcblx0XCJ0ZXh0XCI6IFwidGhyZWVfdGV4dF9fM3hvcUlcIlxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFZpc2liaWxpdHlTZW5zb3IgZnJvbSAncmVhY3QtdmlzaWJpbGl0eS1zZW5zb3InO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3RocmVlLm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IFRocmVlSXRlbSA9ICh7dGhyZWVEYXRhfSkgPT4ge1xyXG4gICAgY29uc3QgW2lzRWxlbWVudFZpc2libGUsIHNldElzRWxlbWVudFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Qgb25DaGFuZ2VWaXNpYmlsaXR5ID0gKGlzVmlzaWJsZSkgPT4gaXNWaXNpYmxlID8gc2V0SXNFbGVtZW50VmlzaWJsZSh0cnVlKSA6IHNldElzRWxlbWVudFZpc2libGUoZmFsc2UpO1xyXG5cclxuXHJcbiAgICBjb25zdCB7aWQsIGltYWdlLCB0ZXh0fSA9IHRocmVlRGF0YTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFZpc2liaWxpdHlTZW5zb3Igb25DaGFuZ2U9e29uQ2hhbmdlVmlzaWJpbGl0eX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtpZCA9PT0gJ2JsYWNrLWJveCcgPyBgJHtzdHlsZXMubG9nb19jb250YWluZXJ9ICR7c3R5bGVzLmJsYWNrX2JveH1gICA6IGAke3N0eWxlcy5sb2dvX2NvbnRhaW5lcn1gfWB9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBhbHQ9eydsb2dvJ30gc3JjPXtpbWFnZX0gY2xhc3NOYW1lPXtzdHlsZXMubG9nb30gaWQ9e2lkfS8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFycm93fSBpZD17aWR9IC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHRfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT57dGV4dH08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9WaXNpYmlsaXR5U2Vuc29yPlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGhyZWVJdGVtOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFZpc2liaWxpdHlTZW5zb3IgZnJvbSAncmVhY3QtdmlzaWJpbGl0eS1zZW5zb3InO1xyXG4vL1N0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vd2hvV2VBcmUubW9kdWxlLnNjc3MnO1xyXG4vL0ltYWdlc1xyXG5pbXBvcnQgaWNvbm81IGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2ljb25vXzUucG5nJztcclxuaW1wb3J0IGljb25vNCBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9pY29ub180LnBuZyc7XHJcbmltcG9ydCBpbWFnZTQgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9pbWFnZXMvaW1hZ2U0LmpwZyc7XHJcbmltcG9ydCBpbWFnZTMgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9pbWFnZXMvaW1hZ2UzLmpwZyc7XHJcblxyXG5jb25zdCBXaG9XZUFyZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtpc0VsZW1lbnQxVmlzaWJsZSwgc2V0SXNFbGVtZW50MVZpc2libGUxXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtpc0VsZW1lbnQyVmlzaWJsZSwgc2V0SXNFbGVtZW50MlZpc2libGUyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IG9uQ2hhbmdlVmlzaWJpbGl0eTEgPSAoaXNWaXNpYmxlKSA9PiBpc1Zpc2libGUgPyBzZXRJc0VsZW1lbnQxVmlzaWJsZTEodHJ1ZSkgOiBzZXRJc0VsZW1lbnQxVmlzaWJsZTEoZmFsc2UpO1xyXG4gICAgY29uc3Qgb25DaGFuZ2VWaXNpYmlsaXR5MiA9IChpc1Zpc2libGUpID0+IGlzVmlzaWJsZSA/IHNldElzRWxlbWVudDJWaXNpYmxlMih0cnVlKSA6IHNldElzRWxlbWVudDJWaXNpYmxlMihmYWxzZSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuZmlyc3Rfc2VjdGlvbn0gJHtzdHlsZXMuc2VjdGlvbn1gfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmlyc3Rfb3ZlcmxheX0vPlxyXG4gICAgICAgICAgICAgICAgPGgxPldITyBXRSBBUkU8L2gxPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+V2UgYXJlIGNvbW1pdHRlZCB0byBoZWxwaW5nIGJ1c2luZXNzZXMgbWFrZSBiZXR0ZXJcclxuICAgICAgICAgICAgICAgICAgICBkZWNpc2lvbnMgdXNpbmcgZGF0YS4gT3VyIGV4cGVydCB0ZWFtIHdpbGwgYmVjb21lIHlvdXIgdHJ1c3RlZCBhZHZpc2VyIG9uIGV2ZXJ5dGhpbmcgZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbWJpbmluZyBwYXNzaW9uLCBrbm93bGVkZ2UgYW5kIGV4cGVyaWVuY2UgdG8gdHJhbnNmb3JtIHRoZSB3YXkgeW91ciBidXNpbmVzcyBkZWFscyB3aXRoIGRhdGEuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8VmlzaWJpbGl0eVNlbnNvciBvbkNoYW5nZT17b25DaGFuZ2VWaXNpYmlsaXR5MX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7aXNFbGVtZW50MVZpc2libGUgPyBgJHtzdHlsZXMuc2VjdGlvbl9pY29ufSAke3N0eWxlcy5zZWN0aW9ufSB2aXNpYmxlQ2xhc3NgIDogYCR7c3R5bGVzLnNlY3Rpb25faWNvbn0gJHtzdHlsZXMuc2VjdGlvbn1gfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VjdGlvbl9sb2dvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBhbHQ9eydsb2dvNCd9IHNyYz17aWNvbm80fSBjbGFzc05hbWU9e3N0eWxlcy5sb2dvX29uZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wYXJhZ3JhcGh9PldlIHByb3ZpZGUgZW5kIHRvIGVuZCBCSSBzZXJ2aWNlcyB0YWlsb3JlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gZml0IHlvdXIgY29tcGFueeKAmXMgaW5kaXZpZHVhbCBuZWVkcy48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBhbHQ9eydpbWFnZTQnfSBzcmM9e2ltYWdlNH0gY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2Vfb25lfS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9WaXNpYmlsaXR5U2Vuc29yPlxyXG4gICAgICAgICAgICA8VmlzaWJpbGl0eVNlbnNvciBvbkNoYW5nZT17b25DaGFuZ2VWaXNpYmlsaXR5Mn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7aXNFbGVtZW50MlZpc2libGUgPyBgJHtzdHlsZXMuc2VjdGlvbl9pY29ufSAke3N0eWxlcy5zZWN0aW9ufSB2aXNpYmxlQ2xhc3NgIDogYCR7c3R5bGVzLnNlY3Rpb25faWNvbn0gJHtzdHlsZXMuc2VjdGlvbn1gfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PXsnaW1hZ2UzJ30gc3JjPXtpbWFnZTN9IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX3R3b30vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VjdGlvbl9sb2dvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBhbHQ9eydsb2dvNSd9IHNyYz17aWNvbm81fSBjbGFzc05hbWU9e3N0eWxlcy5sb2dvX3R3b30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wYXJhZ3JhcGh9PldlIGFyZSBhIGJvdXRpcXVlIGRhdGEgYW5hbHl0aWNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdWx0aW5nIGZpcm0gYmFzZWQgaW4gTWVsYm91cm5lLCBBdXN0cmFsaWEgd2l0aCBleHRlbnNpdmUgZXhwZXJpZW5jZSB3b3JraW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdGVseSBpbiBkYXRhIHByb2plY3RzIGFyb3VuZCB0aGUgd29ybGQuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvVmlzaWJpbGl0eVNlbnNvcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdob1dlQXJlIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwid2hvV2VBcmVfY29udGFpbmVyX19qanB4RVwiLFxuXHRcInNlY3Rpb25cIjogXCJ3aG9XZUFyZV9zZWN0aW9uX18xamhGOFwiLFxuXHRcImZpcnN0X292ZXJsYXlcIjogXCJ3aG9XZUFyZV9maXJzdF9vdmVybGF5X19wYWdSbFwiLFxuXHRcImZpcnN0X3NlY3Rpb25cIjogXCJ3aG9XZUFyZV9maXJzdF9zZWN0aW9uX18yLUpiQlwiLFxuXHRcInRleHRcIjogXCJ3aG9XZUFyZV90ZXh0X18yd1BodlwiLFxuXHRcInRleHRfc1wiOiBcIndob1dlQXJlX3RleHRfc19fM2lHQmdcIixcblx0XCJzZWN0aW9uX2ljb25cIjogXCJ3aG9XZUFyZV9zZWN0aW9uX2ljb25fXzNGa2RIXCIsXG5cdFwiaW1hZ2VfdHdvXCI6IFwid2hvV2VBcmVfaW1hZ2VfdHdvX18ya0wzVFwiLFxuXHRcImltYWdlX29uZVwiOiBcIndob1dlQXJlX2ltYWdlX29uZV9fM29DWmVcIixcblx0XCJsb2dvX29uZVwiOiBcIndob1dlQXJlX2xvZ29fb25lX18zaWx2TFwiLFxuXHRcImxvZ29fdHdvXCI6IFwid2hvV2VBcmVfbG9nb190d29fXzJtN2tvXCIsXG5cdFwicGFyYWdyYXBoXCI6IFwid2hvV2VBcmVfcGFyYWdyYXBoX18xRjRWS1wiLFxuXHRcInNlY3Rpb25fbG9nb1wiOiBcIndob1dlQXJlX3NlY3Rpb25fbG9nb19fMTJidGRcIlxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuLy9jc3NcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3lvdXJEYXRhLm1vZHVsZS5zY3NzJztcclxuLy9JbWFnZXNcclxuaW1wb3J0IEZpcnN0SWNvbldoaXRlIGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvaWNvbnMvaWNvbm9fMTFfZGlmLnBuZyc7XHJcbmltcG9ydCBTZWNvbmRJY29uV2hpdGUgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9pY29ucy9pY29ub18xMl9kaWYucG5nJ1xyXG5pbXBvcnQgVGhpcmRJY29uV2hpdGUgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9pY29ucy9pY29ub18xM19kaWYucG5nJ1xyXG5pbXBvcnQgRmlyc3RJY29uT3JhbmdlIGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvaWNvbnMvaWNvbm9fMTEucG5nJ1xyXG5pbXBvcnQgU2Vjb25kSWNvbk9yYW5nZSBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2ljb25zL2ljb25vXzEyLnBuZydcclxuaW1wb3J0IFRoaXJkSWNvbk9yYW5nZSBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2ljb25zL2ljb25vXzEzLnBuZydcclxuaW1wb3J0IEltYWdlIGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2ltYWdlNS5qcGcnXHJcblxyXG5jb25zdCBZb3VyRGF0YSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtpc0xlZnRIb3Zlciwgc2V0SXNMZWZ0SG92ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2lzVG9wSG92ZXIsIHNldElzVG9wSG92ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2lzQm90dG9tSG92ZXIsIHNldElzQm90dG9tSG92ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PkVYUExPUkUgWU9VUiBEQVRBPC9oMT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaXRlbXNfd3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2lzVG9wSG92ZXIgPyBgJHtzdHlsZXMuaXRlbX0gJHtzdHlsZXMuaG92ZXJfZWxlbWVudH1gIDogYCR7c3R5bGVzLml0ZW19YH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldElzVG9wSG92ZXIodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0SXNUb3BIb3ZlcihmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGFsdD17J3RvcC1pY29uJ30gc3JjPXtGaXJzdEljb25PcmFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PlNheSBnb29kYnllIHRvIGNsdW5reSBzcHJlYWRzaGVldHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWMgdmlld3MgYW5kIG1hbnVhbGx5IGNvbXBpbGVkIHJlcG9ydHMgcHJvbmUgdG8gaHVtYW4gZXJyb3I8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2lzTGVmdEhvdmVyID8gYCR7c3R5bGVzLml0ZW19ICR7c3R5bGVzLmhvdmVyX2VsZW1lbnR9YCA6IGAke3N0eWxlcy5pdGVtfWB9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRJc0xlZnRIb3Zlcih0cnVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRJc0xlZnRIb3ZlcihmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGFsdD17J2xlZnQtaWNvbid9IHNyYz17U2Vjb25kSWNvbk9yYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+RGlzY292ZXIgcG93ZXJmdWwgaW5zaWdodHMgd2l0aGluIHlvdXIgZXhpc3RpbmcgZGF0YSB0b1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRlbnRpZnkgYXJlYXMgb2YgaW1wcm92ZW1lbnQsIHN0cmVhbWxpbmUgb3BlcmF0aW9ucyBhbmQgbWFrZSBldmlkZW5jZS1iYXNlZCBkZWNpc2lvbnMuIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aXNCb3R0b21Ib3ZlciA/IGAke3N0eWxlcy5pdGVtfSAke3N0eWxlcy5ob3Zlcl9lbGVtZW50fWAgOiBgJHtzdHlsZXMuaXRlbX1gfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SXNCb3R0b21Ib3Zlcih0cnVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRJc0JvdHRvbUhvdmVyKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PXsnYm90dG9tLWljb24nfSBzcmM9e1RoaXJkSWNvbk9yYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+R2V0IGEgQkkgc29sdXRpb24gdGFpbG9yZWQgdG8geW91ciBidXNpbmVzcyBuZWVkcyB0b1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtIHlvdXIgZGF0YSBpbnRvIGFjdGlvbmFibGUgaW50ZWxsaWdlbmNlIGluIHRoZSBtb3N0IGVmZmljaWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kIHN1c3RhaW5hYmxlIHdheS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmhvbWJ1c19jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpc0xlZnRIb3ZlciA/IGAke3N0eWxlcy5yaG9tYnVzfSAke3N0eWxlcy5sZWZ0fSAke3N0eWxlcy5yaG9tYnVzX2hvdmVyfWAgOiBgJHtzdHlsZXMucmhvbWJ1c30gJHtzdHlsZXMubGVmdH1gfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SXNMZWZ0SG92ZXIodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0SXNMZWZ0SG92ZXIoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e1NlY29uZEljb25XaGl0ZX0gYWx0PXsnbGVmdC1pY29uJ30gY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpc1RvcEhvdmVyID8gYCR7c3R5bGVzLnJob21idXN9ICR7c3R5bGVzLnRvcH0gJHtzdHlsZXMucmhvbWJ1c19ob3Zlcn1gIDogYCR7c3R5bGVzLnJob21idXN9ICR7c3R5bGVzLnRvcH1gfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SXNUb3BIb3Zlcih0cnVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRJc1RvcEhvdmVyKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtGaXJzdEljb25XaGl0ZX0gYWx0PXsndG9wLWljb24nfSBjbGFzc05hbWU9e3N0eWxlcy5pY29ufS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5yaG9tYnVzfSAke3N0eWxlcy5yaWdodH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0ltYWdlfSBhbHQ9eydyaWdodCd9IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpc0JvdHRvbUhvdmVyID8gYCR7c3R5bGVzLnJob21idXN9ICR7c3R5bGVzLmJvdHRvbX0gJHtzdHlsZXMucmhvbWJ1c19ob3Zlcn1gIDogYCR7c3R5bGVzLnJob21idXN9ICR7c3R5bGVzLmJvdHRvbX1gfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SXNCb3R0b21Ib3Zlcih0cnVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRJc0JvdHRvbUhvdmVyKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtUaGlyZEljb25XaGl0ZX0gYWx0PXsnZm91cnRoLWljb24nfSBjbGFzc05hbWU9e3N0eWxlcy5pY29ufS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBZb3VyRGF0YTsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJ5b3VyRGF0YV9jb250YWluZXJfX2pIanJiXCIsXG5cdFwiY29udGVudFwiOiBcInlvdXJEYXRhX2NvbnRlbnRfXzE1bXNHXCIsXG5cdFwiaXRlbXNfd3JhcHBlclwiOiBcInlvdXJEYXRhX2l0ZW1zX3dyYXBwZXJfX2ZvbkxzXCIsXG5cdFwidGV4dFwiOiBcInlvdXJEYXRhX3RleHRfXzJ0dWFWXCIsXG5cdFwiaXRlbVwiOiBcInlvdXJEYXRhX2l0ZW1fX2N5QVlHXCIsXG5cdFwidGl0bGVcIjogXCJ5b3VyRGF0YV90aXRsZV9fM2FiZ0xcIixcblx0XCJpY29uXCI6IFwieW91ckRhdGFfaWNvbl9fM19Cd3pcIixcblx0XCJpbWFnZVwiOiBcInlvdXJEYXRhX2ltYWdlX18zN0V0ZFwiLFxuXHRcInJob21idXNfY29udGFpbmVyXCI6IFwieW91ckRhdGFfcmhvbWJ1c19jb250YWluZXJfX0NQbU5TXCIsXG5cdFwicmhvbWJ1c1wiOiBcInlvdXJEYXRhX3Job21idXNfXzlCeDctXCIsXG5cdFwibGVmdFwiOiBcInlvdXJEYXRhX2xlZnRfXzJSVGdFXCIsXG5cdFwidG9wXCI6IFwieW91ckRhdGFfdG9wX18yWWJtRFwiLFxuXHRcInJpZ2h0XCI6IFwieW91ckRhdGFfcmlnaHRfX21DOXFjXCIsXG5cdFwiYm90dG9tXCI6IFwieW91ckRhdGFfYm90dG9tX18xb3p6SVwiLFxuXHRcInJob21idXNfaG92ZXJcIjogXCJ5b3VyRGF0YV9yaG9tYnVzX2hvdmVyX19uVmlIdVwiLFxuXHRcImhvdmVyX2VsZW1lbnRcIjogXCJ5b3VyRGF0YV9ob3Zlcl9lbGVtZW50X18zamhMS1wiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2ljb25vXzEtN2MxZGYxMzM5ODZjOTllNzU5YWMzZDAxNzY3YTQ0ZTgucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2ljb25vXzItMmViMThjNTRmOGFjNWVlYzk5ZDkyYjlkMDQ2OGU1YjIucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2ljb25vXzMtNzAyMGMxMzllZDJjMjBlNDRkNDVkZTE3MjQxYzBkODkucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIWnBaWGRDYjNnOUlqQWdNQ0E0TkRFdU9TQTFPVFV1TXlJK0RRb2dJQ0FnUEdjZ1ptbHNiRDBpSXpZeFJFRkdRaUkrRFFvZ0lDQWdJQ0FnSUR4d1lYUm9JR1E5SWswMk5qWXVNeUF5T1RZdU5XTXdMVE15TGpVdE5EQXVOeTAyTXk0ekxURXdNeTR4TFRneUxqUWdNVFF1TkMwMk15NDJJRGd0TVRFMExqSXRNakF1TWkweE16QXVOQzAyTGpVdE15NDRMVEUwTGpFdE5TNDJMVEl5TGpRdE5TNDJkakl5TGpOak5DNDJJREFnT0M0ekxqa2dNVEV1TkNBeUxqWWdNVE11TmlBM0xqZ2dNVGt1TlNBek55NDFJREUwTGprZ056VXVOeTB4TGpFZ09TNDBMVEl1T1NBeE9TNHpMVFV1TVNBeU9TNDBMVEU1TGpZdE5DNDRMVFF4TFRndU5TMDJNeTQxTFRFd0xqa3RNVE11TlMweE9DNDFMVEkzTGpVdE16VXVNeTAwTVM0MkxUVXdJRE15TGpZdE16QXVNeUEyTXk0eUxUUTJMamtnT0RRdE5EWXVPVlkzT0dNdE1qY3VOU0F3TFRZekxqVWdNVGt1TmkwNU9TNDVJRFV6TGpZdE16WXVOQzB6TXk0NExUY3lMalF0TlRNdU1pMDVPUzQ1TFRVekxqSjJNakl1TTJNeU1DNDNJREFnTlRFdU5DQXhOaTQxSURnMElEUTJMall0TVRRZ01UUXVOeTB5T0NBek1TNDBMVFF4TGpNZ05Ea3VPUzB5TWk0MklESXVOQzAwTkNBMkxqRXROak11TmlBeE1TMHlMak10TVRBdE5DMHhPUzQzTFRVdU1pMHlPUzAwTGpjdE16Z3VNaUF4TGpFdE5qY3VPU0F4TkM0MkxUYzFMamdnTXkweExqZ2dOaTQ1TFRJdU5pQXhNUzQxTFRJdU5sWTNPQzQxWXkwNExqUWdNQzB4TmlBeExqZ3RNakl1TmlBMUxqWXRNamd1TVNBeE5pNHlMVE0wTGpRZ05qWXVOeTB4T1M0NUlERXpNQzR4TFRZeUxqSWdNVGt1TWkweE1ESXVOeUEwT1M0NUxURXdNaTQzSURneUxqTWdNQ0F6TWk0MUlEUXdMamNnTmpNdU15QXhNRE11TVNBNE1pNDBMVEUwTGpRZ05qTXVOaTA0SURFeE5DNHlJREl3TGpJZ01UTXdMalFnTmk0MUlETXVPQ0F4TkM0eElEVXVOaUF5TWk0MUlEVXVOaUF5Tnk0MUlEQWdOak11TlMweE9TNDJJRGs1TGprdE5UTXVOaUF6Tmk0MElETXpMamdnTnpJdU5DQTFNeTR5SURrNUxqa2dOVE11TWlBNExqUWdNQ0F4TmkweExqZ2dNakl1TmkwMUxqWWdNamd1TVMweE5pNHlJRE0wTGpRdE5qWXVOeUF4T1M0NUxURXpNQzR4SURZeUxURTVMakVnTVRBeUxqVXRORGt1T1NBeE1ESXVOUzA0TWk0emVtMHRNVE13TGpJdE5qWXVOMk10TXk0M0lERXlMamt0T0M0eklESTJMakl0TVRNdU5TQXpPUzQxTFRRdU1TMDRMVGd1TkMweE5pMHhNeTR4TFRJMExUUXVOaTA0TFRrdU5TMHhOUzQ0TFRFMExqUXRNak11TkNBeE5DNHlJREl1TVNBeU55NDVJRFF1TnlBME1TQTNMamw2YlMwME5TNDRJREV3Tmk0MVl5MDNMamdnTVRNdU5TMHhOUzQ0SURJMkxqTXRNalF1TVNBek9DNHlMVEUwTGprZ01TNHpMVE13SURJdE5EVXVNaUF5TFRFMUxqRWdNQzB6TUM0eUxTNDNMVFExTFRFdU9TMDRMak10TVRFdU9TMHhOaTQwTFRJMExqWXRNalF1TWkwek9DMDNMall0TVRNdU1TMHhOQzQxTFRJMkxqUXRNakF1T0Mwek9TNDRJRFl1TWkweE15NDBJREV6TGpJdE1qWXVPQ0F5TUM0M0xUTTVMamtnTnk0NExURXpMalVnTVRVdU9DMHlOaTR6SURJMExqRXRNemd1TWlBeE5DNDVMVEV1TXlBek1DMHlJRFExTGpJdE1pQXhOUzR4SURBZ016QXVNaTQzSURRMUlERXVPU0E0TGpNZ01URXVPU0F4Tmk0MElESTBMallnTWpRdU1pQXpPQ0EzTGpZZ01UTXVNU0F4TkM0MUlESTJMalFnTWpBdU9DQXpPUzQ0TFRZdU15QXhNeTQwTFRFekxqSWdNall1T0MweU1DNDNJRE01TGpsNmJUTXlMak10TVROak5TNDBJREV6TGpRZ01UQWdNall1T0NBeE15NDRJRE01TGpndE1UTXVNU0F6TGpJdE1qWXVPU0ExTGprdE5ERXVNaUE0SURRdU9TMDNMamNnT1M0NExURTFMallnTVRRdU5DMHlNeTQzSURRdU5pMDRJRGd1T1MweE5pNHhJREV6TFRJMExqRjZUVFF5TVM0eUlEUXpNR010T1M0ekxUa3VOaTB4T0M0MkxUSXdMak10TWpjdU9DMHpNaUE1SUM0MElERTRMakl1TnlBeU55NDFMamNnT1M0MElEQWdNVGd1TnkwdU1pQXlOeTQ0TFM0M0xUa2dNVEV1TnkweE9DNHpJREl5TGpRdE1qY3VOU0F6TW5wdExUYzBMalF0TlRndU9XTXRNVFF1TWkweUxqRXRNamN1T1MwMExqY3ROREV0Tnk0NUlETXVOeTB4TWk0NUlEZ3VNeTB5Tmk0eUlERXpMalV0TXprdU5TQTBMakVnT0NBNExqUWdNVFlnTVRNdU1TQXlOQ0EwTGpjZ09DQTVMalVnTVRVdU9DQXhOQzQwSURJekxqUjZUVFF5TUM0M0lERTJNMk01TGpNZ09TNDJJREU0TGpZZ01qQXVNeUF5Tnk0NElETXlMVGt0TGpRdE1UZ3VNaTB1TnkweU55NDFMUzQzTFRrdU5DQXdMVEU0TGpjdU1pMHlOeTQ0TGpjZ09TMHhNUzQzSURFNExqTXRNakl1TkNBeU55NDFMVE15ZW0wdE56UWdOVGd1T1dNdE5DNDVJRGN1TnkwNUxqZ2dNVFV1TmkweE5DNDBJREl6TGpjdE5DNDJJRGd0T0M0NUlERTJMVEV6SURJMExUVXVOQzB4TXk0MExURXdMVEkyTGpndE1UTXVPQzB6T1M0NElERXpMakV0TXk0eElESTJMamt0TlM0NElEUXhMakl0Tnk0NWVtMHRPVEF1TlNBeE1qVXVNbU10TXpVdU5DMHhOUzR4TFRVNExqTXRNelF1T1MwMU9DNHpMVFV3TGpZZ01DMHhOUzQzSURJeUxqa3RNelV1TmlBMU9DNHpMVFV3TGpZZ09DNDJMVE11TnlBeE9DMDNJREkzTGpjdE1UQXVNU0ExTGpjZ01Ua3VOaUF4TXk0eUlEUXdJREl5TGpVZ05qQXVPUzA1TGpJZ01qQXVPQzB4Tmk0MklEUXhMakV0TWpJdU1pQTJNQzQyTFRrdU9TMHpMakV0TVRrdU15MDJMalV0TWpndE1UQXVNbnBOTXpFd0lEUTVNR010TVRNdU5pMDNMamd0TVRrdU5TMHpOeTQxTFRFMExqa3ROelV1TnlBeExqRXRPUzQwSURJdU9TMHhPUzR6SURVdU1TMHlPUzQwSURFNUxqWWdOQzQ0SURReElEZ3VOU0EyTXk0MUlERXdMamtnTVRNdU5TQXhPQzQxSURJM0xqVWdNelV1TXlBME1TNDJJRFV3TFRNeUxqWWdNekF1TXkwMk15NHlJRFEyTGprdE9EUWdORFl1T1MwMExqVXRMakV0T0M0ekxURXRNVEV1TXkweUxqZDZiVEl6Tnk0eUxUYzJMakpqTkM0M0lETTRMakl0TVM0eElEWTNMamt0TVRRdU5pQTNOUzQ0TFRNZ01TNDRMVFl1T1NBeUxqWXRNVEV1TlNBeUxqWXRNakF1TnlBd0xUVXhMalF0TVRZdU5TMDROQzAwTmk0MklERTBMVEUwTGpjZ01qZ3RNekV1TkNBME1TNHpMVFE1TGprZ01qSXVOaTB5TGpRZ05EUXROaTR4SURZekxqWXRNVEVnTWk0eklERXdMakVnTkM0eElERTVMamdnTlM0eUlESTVMakY2YlRNNExqVXROall1TjJNdE9DNDJJRE11TnkweE9DQTNMVEkzTGpjZ01UQXVNUzAxTGpjdE1Ua3VOaTB4TXk0eUxUUXdMVEl5TGpVdE5qQXVPU0E1TGpJdE1qQXVPQ0F4Tmk0MkxUUXhMakVnTWpJdU1pMDJNQzQySURrdU9TQXpMakVnTVRrdU15QTJMalVnTWpndU1TQXhNQzR5SURNMUxqUWdNVFV1TVNBMU9DNHpJRE0wTGprZ05UZ3VNeUExTUM0MkxTNHhJREUxTGpjdE1qTWdNelV1TmkwMU9DNDBJRFV3TGpaNlRUTXlNQzQ0SURjNExqUjZJaTgrRFFvZ0lDQWdJQ0FnSUR4amFYSmpiR1VnWTNnOUlqUXlNQzQ1SWlCamVUMGlNamsyTGpVaUlISTlJalExTGpjaUx6NE5DaUFnSUNBZ0lDQWdQSEJoZEdnZ1pEMGlUVFV5TUM0MUlEYzRMakY2SWk4K0RRb2dJQ0FnUEM5blBnMEtQQzl6ZG1jK0RRbz1cIiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbi8vQ29tcG9uZW50c1xyXG5pbXBvcnQgT3VyU2VydmljZXMgZnJvbSAnLi4vY29tcG9uZW50cy9PdXJTZXJ2aWNlcyc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XHJcbmltcG9ydCBCYW5uZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvQmFubmVyXCI7XHJcbmltcG9ydCBXaG9XZUFyZSBmcm9tIFwiLi4vY29tcG9uZW50cy9XaG9XZUFyZVwiO1xyXG5pbXBvcnQgRXhwbG9yZSBmcm9tIFwiLi4vY29tcG9uZW50cy9FeHBsb3JlXCI7XHJcbmltcG9ydCBZb3VyRGF0YSBmcm9tIFwiLi4vY29tcG9uZW50cy9Zb3VyRGF0YVwiO1xyXG5pbXBvcnQgVGhyZWUgZnJvbSBcIi4uL2NvbXBvbmVudHMvVGhyZWVcIjtcclxuaW1wb3J0IE91cldvcmsgZnJvbSBcIi4uL2NvbXBvbmVudHMvT3VyV29ya1wiO1xyXG5pbXBvcnQgQ29udGFjdCBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250YWN0XCI7XHJcblxyXG5mdW5jdGlvbiBBcHAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgPEJhbm5lciAvPlxyXG4gICAgICAgICAgICA8T3VyU2VydmljZXMgLz5cclxuICAgICAgICAgICAgPFdob1dlQXJlIC8+XHJcbiAgICAgICAgICAgIDxFeHBsb3JlIC8+XHJcbiAgICAgICAgICAgIDxZb3VyRGF0YSAvPlxyXG4gICAgICAgICAgICA8VGhyZWUgLz5cclxuICAgICAgICAgICAgPE91cldvcmsgLz5cclxuICAgICAgICAgICAgPENvbnRhY3QgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2ljb25vNy05MTVkZTliM2E4YzZkNWU3N2JkZmM4YjdlNzZmN2NmYy5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvaWNvbm9fMTAtOTNmOGNkYTBhODRhYTk3NjdhMTMzYTE1NTI0ODEyMmYucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2ljb25vXzExLTk3ZTdmYmQ3M2QxNjdmNjgxYTRmMGQ1ZGJhMzZkNTU5LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9pY29ub18xMV9kaWYtNTU3YWJlNjMzNjE3OWNlMWFiNmY5MDM0ZmUwZDUwOWQucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2ljb25vXzEyLWFhZTI0MGYyMjhkNDlmNGE2NzI1NDc1ZGEzYWI4MzM0LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9pY29ub18xMl9kaWYtMDdlYjM5MjEyN2U4NzBkNzBkNGNiODVkMzA4ZmUwMjgucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2ljb25vXzEzLTg3YWNhNDk4ODU2NTRhM2M0ZmE4ZDc3ODVjMGJmYWY0LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9pY29ub18xM19kaWYtNDBhYTEwMzVlN2EyZTQ2ZTJhYmVjZmZiMWQ3YjRjYjUucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2ljb25vXzE0LTUwNjUwYTM0NThmM2M2MGIzYmM3Y2NkZjk4NjBlYTMwLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9pY29ub18xNS00ZDliZWRiMmNlNDEyM2YzMGRlYzI0MDBkMzU0NTdhNS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvaWNvbm9fMTYtODUwM2YzYThiY2NkOWZmOGVhN2Q5YjcyNWVjZmVkNjAucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2ljb25vXzYtNTIwNGI1YmY1ZmZiN2M5MTBlYWNiZWIyYmM1ZTYyNDUucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2ljb25vXzgtNzEyMjU4M2E1YjVlNzZlNzRmNjBkNWNlM2NkY2E3YjcucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2ljb25vXzktNzQ3NDlkMjQzZTA2OGRjMDc1NDMyNjEzZmZiMTU4OTUucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL1RyYW5zcGFyZW50LWxvZ28tOTQxMDg0ZTg4ODM2MzJiMGY0ZmRjNDcwMWE5Yzg1ZDEucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2ljb25vXzQtMDBlZGIwY2UzNGEyOTc3NDM5YmM1ZTczYjNiOWRiYTQucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2ljb25vXzUtYWVlMDY1NmI0Zjk2MDBiOGNkNGUyNTBhODM1ZjZkZDIucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2ltYWdlMy0wNWU5MzUzOTdhNjM0NzVlZGJmMjQxYzI3MzdjNDhmNy5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvaW1hZ2U0LTIxNjk2YWQwZDhkZjhhNWI4MWM0NDMxODlkMTM2ZWYwLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9pbWFnZTUtNTAyYjBiYmM5MzdjNzE5MGFlODcxZWI1MzViZTYyYTQuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaGlwcG8tY29tcG9uZW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pZnJhbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC12aXNpYmlsaXR5LXNlbnNvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==