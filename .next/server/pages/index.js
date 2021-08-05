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
	"black_text": "banner_black_text__iw0PL",
	"banner": "banner_banner__1zwXL",
	"banner-content": "banner_banner-content__2l38H"
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
	"menu": "header_menu__23wHb",
	"large-screen-menu": "header_large-screen-menu__2XqJu"
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
	"item_text": "ourServices_item_text__17FRo",
	"visibleClass": "ourServices_visibleClass__3sr4X"
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
      className: `${isElementVisible ? `${_OurServices_ourServices_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.item} visibleClass` : `${_OurServices_ourServices_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.item}`}`,
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
/* harmony import */ var _src_components_assets_icons_icono_14_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/components/assets/icons/icono_14.png */ "./src/components/assets/icons/icono_14.png");
/* harmony import */ var _src_components_assets_icons_icono_14_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_assets_icons_icono_14_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_assets_icons_icono_15_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/components/assets/icons/icono_15.png */ "./src/components/assets/icons/icono_15.png");
/* harmony import */ var _src_components_assets_icons_icono_15_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_components_assets_icons_icono_15_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_assets_icons_icono_16_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/components/assets/icons/icono_16.png */ "./src/components/assets/icons/icono_16.png");
/* harmony import */ var _src_components_assets_icons_icono_16_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_components_assets_icons_icono_16_png__WEBPACK_IMPORTED_MODULE_2__);



const THREE_DATA = [{
  image: _src_components_assets_icons_icono_14_png__WEBPACK_IMPORTED_MODULE_0___default.a,
  text: 'Manage inventory key metrics such as Aged Stock, Inventory Turnover, Availability,' + ' fastest moving inventory items and others.',
  id: 'box'
}, {
  image: _src_components_assets_icons_icono_15_png__WEBPACK_IMPORTED_MODULE_1___default.a,
  text: 'Link inventory data to sales performance to forecast inventory purchases and' + ' healthy stock levels',
  id: 'black-box'
}, {
  image: _src_components_assets_icons_icono_16_png__WEBPACK_IMPORTED_MODULE_2___default.a,
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
    children: _constants__WEBPACK_IMPORTED_MODULE_4__["THREE_DATA"].map((value, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_threeItem_ThreeItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      threeData: value
    }, value.text, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 47
    }, undefined))
  }, void 0, false, {
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
	"section": "three_section__vhvZf",
	"black_box": "three_black_box__1wKNO",
	"arrow": "three_arrow__2xe5L",
	"logo": "three_logo__OaDVe",
	"text_container": "three_text_container__1l5NV",
	"text": "three_text__3xoqI",
	"logo_container": "three_logo_container__2-Z2g",
	"visibleClass": "three_visibleClass__fasJb",
	"three-arrow": "three_three-arrow__3CWqq"
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
	"section_logo": "whoWeAre_section_logo__12btd",
	"visibleClass": "whoWeAre_visibleClass__q2bEE"
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

/***/ "./src/components/assets/icons/icono_14.png":
/*!**************************************************!*\
  !*** ./src/components/assets/icons/icono_14.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/icono_14-50650a3458f3c60b3bc7ccdf9860ea30.png";

/***/ }),

/***/ "./src/components/assets/icons/icono_15.png":
/*!**************************************************!*\
  !*** ./src/components/assets/icons/icono_15.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/icono_15-4d9bedb2ce4123f30dec2400d35457a5.png";

/***/ }),

/***/ "./src/components/assets/icons/icono_16.png":
/*!**************************************************!*\
  !*** ./src/components/assets/icons/icono_16.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/icono_16-8503f3a8bccd9ff8ea7d9b725ecfed60.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CYW5uZXIvYmFubmVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQmFubmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29udGFjdC9jb250YWN0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29udGFjdC9maWVsZFZhbGlkYXRpb25zLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29udGFjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0V4cGxvcmUvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRXhwbG9yZS9leHBsb3JlLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRXhwbG9yZS9leHBsb3JlSXRlbS9FeHBsb3JlSXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0V4cGxvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyL2hlYWRlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci9tb2JpbGUtbWVudS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci9tb2JpbGUtbWVudS9tb2JpbGVNZW51Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvT3VyU2VydmljZXMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvT3VyU2VydmljZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9PdXJTZXJ2aWNlcy9vdXJTZXJ2aWNlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL091clNlcnZpY2VzSXRlbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL091cldvcmsvTXlJZnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9PdXJXb3JrL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL091cldvcmsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9PdXJXb3JrL291cldvcmsubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UaHJlZS9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UaHJlZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RocmVlL3RocmVlLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGhyZWUvdGhyZWVJdGVtL1RocmVlSXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1dob1dlQXJlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvV2hvV2VBcmUvd2hvV2VBcmUubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Zb3VyRGF0YS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1lvdXJEYXRhL3lvdXJEYXRhLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW1hZ2VuZXMvaWNvbm9fMS5wbmciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbWFnZW5lcy9pY29ub18yLnBuZyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ltYWdlbmVzL2ljb25vXzMucG5nIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW1hZ2VuZXMvbG9nby5zdmciLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9pY29ucy9pY29ubzcucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvaWNvbnMvaWNvbm9fMTAucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvaWNvbnMvaWNvbm9fMTEucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvaWNvbnMvaWNvbm9fMTFfZGlmLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2ljb25zL2ljb25vXzEyLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2ljb25zL2ljb25vXzEyX2RpZi5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9pY29ucy9pY29ub18xMy5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9pY29ucy9pY29ub18xM19kaWYucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvaWNvbnMvaWNvbm9fNi5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9pY29ucy9pY29ub184LnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2ljb25zL2ljb25vXzkucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL1RyYW5zcGFyZW50LWxvZ28ucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2ljb25vXzQucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2ljb25vXzUucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2ltYWdlMy5qcGciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvaW1hZ2U0LmpwZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9pbWFnZTUuanBnIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Fzc2V0cy9pY29ucy9pY29ub18xNC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXNzZXRzL2ljb25zL2ljb25vXzE1LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hc3NldHMvaWNvbnMvaWNvbm9fMTYucG5nIiwid2VicGFjazovLy9leHRlcm5hbCBcImhpcHBvLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlmcmFtZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC12aXNpYmlsaXR5LXNlbnNvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkJhbm5lciIsInN0eWxlcyIsImNvbnRhaW5lciIsImNvbnRlbnQiLCJMb2dvIiwidGV4dCIsImJsYWNrX3RleHQiLCJyZXF1aXJlZCIsInZhbHVlIiwidW5kZWZpbmVkIiwiZW1haWwiLCJ0ZXN0IiwiQ29udGFjdCIsInRpdGxlIiwiZmlyc3RfdGl0bGUiLCJzZWNvbmRfdGl0bGUiLCJib3JkZXIiLCJuYW1lIiwidHlwZSIsImxhYmVsIiwidmFsaWRhdGlvbnMiLCJFWFBMT1JFX0RBVEEiLCJpbWFnZSIsImljb242IiwiaWNvbjciLCJpY29uOCIsImljb245IiwiaWNvbjEwIiwiRXhwbG9yZUl0ZW0iLCJleHBsb3JlRGF0YSIsImlzRWxlbWVudFZpc2libGUiLCJzZXRJc0VsZW1lbnRWaXNpYmxlIiwidXNlU3RhdGUiLCJvbkNoYW5nZVZpc2liaWxpdHkiLCJpc1Zpc2libGUiLCJpdGVtIiwiaGV4YWdvbiIsImxvZ28iLCJFeHBsb3JlIiwibWFwIiwiaW5kZXgiLCJNRU5VX0xJTktTIiwibGlua1RvIiwiSGVhZGVyIiwibWVudSIsImxpbmsiLCJNb2JpbGVNZW51IiwicHJvcHMiLCJtZW51SXRlbXMiLCJzdHlsZSIsIm1lbnVUb2dnbGUiLCJTRVJWSUNFU19EQVRBIiwiaWQiLCJpY29uMSIsImljb24yIiwiaWNvbjMiLCJPdXJTZXJ2aWNlcyIsIk91clNlcnZpY2VzSXRlbSIsInNlcnZpY2VzRGF0YSIsIml0ZW1faW1hZ2UiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJpdGVtX3RpdGxlIiwiaXRlbV9kZXNjcmlwdGlvbiIsIml0ZW1fdGV4dCIsIk15SWZyYW1lIiwidXJsIiwiREFTSEJPQVJEUyIsIk91cldvcmsiLCJkYXNoYm9hcmQiLCJoZWlnaHQiLCJUSFJFRV9EQVRBIiwiVGhyZWUiLCJzZWN0aW9uIiwiVGhyZWVJdGVtIiwidGhyZWVEYXRhIiwibG9nb19jb250YWluZXIiLCJibGFja19ib3giLCJhcnJvdyIsInRleHRfY29udGFpbmVyIiwiV2hvV2VBcmUiLCJpc0VsZW1lbnQxVmlzaWJsZSIsInNldElzRWxlbWVudDFWaXNpYmxlMSIsImlzRWxlbWVudDJWaXNpYmxlIiwic2V0SXNFbGVtZW50MlZpc2libGUyIiwib25DaGFuZ2VWaXNpYmlsaXR5MSIsIm9uQ2hhbmdlVmlzaWJpbGl0eTIiLCJmaXJzdF9zZWN0aW9uIiwiZmlyc3Rfb3ZlcmxheSIsInNlY3Rpb25faWNvbiIsInNlY3Rpb25fbG9nbyIsImljb25vNCIsImxvZ29fb25lIiwicGFyYWdyYXBoIiwiaW1hZ2U0IiwiaW1hZ2Vfb25lIiwiaW1hZ2UzIiwiaW1hZ2VfdHdvIiwiaWNvbm81IiwibG9nb190d28iLCJZb3VyRGF0YSIsImlzTGVmdEhvdmVyIiwic2V0SXNMZWZ0SG92ZXIiLCJpc1RvcEhvdmVyIiwic2V0SXNUb3BIb3ZlciIsImlzQm90dG9tSG92ZXIiLCJzZXRJc0JvdHRvbUhvdmVyIiwiaXRlbXNfd3JhcHBlciIsImhvdmVyX2VsZW1lbnQiLCJGaXJzdEljb25PcmFuZ2UiLCJTZWNvbmRJY29uT3JhbmdlIiwiVGhpcmRJY29uT3JhbmdlIiwicmhvbWJ1c19jb250YWluZXIiLCJyaG9tYnVzIiwibGVmdCIsInJob21idXNfaG92ZXIiLCJTZWNvbmRJY29uV2hpdGUiLCJpY29uIiwidG9wIiwiRmlyc3RJY29uV2hp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Ozs7QUNBQSxzRjs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJiYW5uZXJfY29udGFpbmVyX19kdXlEelwiLFxuXHRcImNvbnRlbnRcIjogXCJiYW5uZXJfY29udGVudF9fMXJscGRcIixcblx0XCJ0ZXh0XCI6IFwiYmFubmVyX3RleHRfXzJtblFNXCIsXG5cdFwiYmxhY2tfdGV4dFwiOiBcImJhbm5lcl9ibGFja190ZXh0X19pdzBQTFwiLFxuXHRcImJhbm5lclwiOiBcImJhbm5lcl9iYW5uZXJfXzF6d1hMXCIsXG5cdFwiYmFubmVyLWNvbnRlbnRcIjogXCJiYW5uZXJfYmFubmVyLWNvbnRlbnRfXzJsMzhIXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG4vL1N0eWxlXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9iYW5uZXIubW9kdWxlLnNjc3MnO1xyXG4vL0ltYWdlXHJcbmltcG9ydCBMb2dvIGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL1RyYW5zcGFyZW50LWxvZ28ucG5nJ1xyXG5cclxuY29uc3QgQmFubmVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSBpZD17J2hvbWUnfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxpbWcgYWx0PXsnbG9nbyd9IHNyYz17TG9nb30vPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYmxhY2tfdGV4dH0+QmV0dGVyPC9zcGFuPjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PjxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmJsYWNrX3RleHR9PkRhdGEsPC9zcGFuPiBCZXR0ZXIgRGVjaXNpb25zPC9oMj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhbm5lciIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcImNvbnRhY3RfY29udGFpbmVyX18xdTQwelwiLFxuXHRcInRpdGxlXCI6IFwiY29udGFjdF90aXRsZV9fMjF0MkxcIixcblx0XCJmaXJzdF90aXRsZVwiOiBcImNvbnRhY3RfZmlyc3RfdGl0bGVfXzJWNVh6XCIsXG5cdFwic2Vjb25kX3RpdGxlXCI6IFwiY29udGFjdF9zZWNvbmRfdGl0bGVfXzNjcVJ2XCIsXG5cdFwiYm9yZGVyXCI6IFwiY29udGFjdF9ib3JkZXJfXzJLSmRqXCIsXG5cdFwiY3VzdG9tLWZvcm0tY2xhc3NcIjogXCJjb250YWN0X2N1c3RvbS1mb3JtLWNsYXNzX18yVXFmdVwiLFxuXHRcIml0ZW1cIjogXCJjb250YWN0X2l0ZW1fXzMtbGF2XCIsXG5cdFwiaW5wdXRcIjogXCJjb250YWN0X2lucHV0X18xYWRFalwiLFxuXHRcImVycm9yXCI6IFwiY29udGFjdF9lcnJvcl9fM0VIMmpcIixcblx0XCJpbnB1dF9ib3hcIjogXCJjb250YWN0X2lucHV0X2JveF9fN1d5YTVcIixcblx0XCJlcnJvcl9tZXNzYWdlXCI6IFwiY29udGFjdF9lcnJvcl9tZXNzYWdlX196YjJMV1wiLFxuXHRcInNlY3Rpb25cIjogXCJjb250YWN0X3NlY3Rpb25fXzJIQ0tJXCIsXG5cdFwiZm9ybVwiOiBcImNvbnRhY3RfZm9ybV9fMWRTZmdcIixcblx0XCJjb250YWN0LWJvcmRlclwiOiBcImNvbnRhY3RfY29udGFjdC1ib3JkZXJfXzJycDVKXCJcbn07XG4iLCJjb25zdCByZXF1aXJlZCA9IHZhbHVlID0+IHZhbHVlID8gdW5kZWZpbmVkIDogJ1JlcXVpcmVkJztcclxuXHJcbmNvbnN0IGVtYWlsID0gdmFsdWUgPT5cclxuICAgIHZhbHVlICYmICEvXltBLVowLTkuXyUrLV0rQFtBLVowLTkuLV0rXFwuW0EtWl17Miw0fSQvaS50ZXN0KHZhbHVlKSA/XHJcbiAgICAgICAgJ0ludmFsaWQgZW1haWwgYWRkcmVzcycgOiB1bmRlZmluZWQ7XHJcblxyXG5leHBvcnQge1xyXG4gICAgcmVxdWlyZWQsXHJcbiAgICBlbWFpbCxcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbi8vU3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9jb250YWN0Lm1vZHVsZS5zY3NzJztcclxuLy9GaWVsZHMgdmFsaWRhdGlvbnNcclxuaW1wb3J0IHsgcmVxdWlyZWQsIGVtYWlsIH0gZnJvbSAnLi9maWVsZFZhbGlkYXRpb25zJztcclxuaW1wb3J0IHsgRm9ybSB9IGZyb20gJ2hpcHBvLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgQ29udGFjdCA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9IGlkPXsnY29udGFjdCd9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5maXJzdF90aXRsZX0+Q09OVEFDVDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuc2Vjb25kX3RpdGxlfT5BTkQgR0VUIE1ZIFFVT1RFPC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9yZGVyfT5cclxuICAgICAgICAgICAgICAgIDxGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICduYW1lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnTmFtZSAoUmVxdWlyZWQpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zOiBbcmVxdWlyZWRdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY3VzdG9tZXJFbWFpbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0VtYWlsIChSZXF1aXJlZCknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbnM6IFtlbWFpbF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzdWJqZWN0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnU3ViamVjdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdtZXNzYWdlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0QXJlYScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ01lc3NhZ2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3NNZXNzYWdlPXsnWW91ciBtZXNzYWdlIGhhcyBiZWVuIHN1Y2Nlc3NmdWxseSBzZW50LiBXZSB3aWxsIGNvbnRhY3QgeW91IHZlcnkgc29vbiEnfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uRXJyb3JNZXNzYWdlPXsnUGxlYXNlIHRyeSBhZ2FpbiBpbiBzb21lIG1pbnV0ZXMnfVxyXG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbkxhYmVsPXsnU1VCTUlUJ31cclxuICAgICAgICAgICAgICAgICAgICBjdXN0b21DbGFzcz17J21iYW5hbHlzdC1jb250YWN0LWZvcm0nfVxyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsU2VydmljZVVSTD17J2h0dHBzOi8vdGhlaGlwcG9hcGkubmV0bGlmeS5hcHAvLm5ldGxpZnkvZnVuY3Rpb25zL2FwaS9tYmFuYWx5c3QtbWFpbCd9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RcclxuIiwiaW1wb3J0IGljb242IGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvaWNvbnMvaWNvbm9fNi5wbmcnO1xyXG5pbXBvcnQgaWNvbjcgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9pY29ucy9pY29ubzcucG5nJztcclxuaW1wb3J0IGljb244IGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvaWNvbnMvaWNvbm9fOC5wbmcnO1xyXG5pbXBvcnQgaWNvbjkgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9pY29ucy9pY29ub185LnBuZyc7XHJcbmltcG9ydCBpY29uMTAgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9pY29ucy9pY29ub18xMC5wbmcnO1xyXG5cclxuY29uc3QgRVhQTE9SRV9EQVRBID0gW1xyXG4gICAge1xyXG4gICAgICAgIGltYWdlOiBpY29uNixcclxuICAgICAgICB0ZXh0OiAnR2V0IHJlYWwgdGltZSB2aXNpYmlsaXR5IG9mIHlvdXIgYnVzaW5lc3MgS1BJcyBhbmQgc2F2ZSBzaWduaWZpY2FudCBjb3N0cyBieScgK1xyXG4gICAgICAgICAgICAnIHN3aXRjaGluZyBtYW51YWwgcmVwb3J0aW5nIGFjdGl2aXRpZXMgd2l0aCBmdWxseSBhdXRvbWF0ZWQgcmVwb3J0cyBhbmQgc2NoZWR1bGVkIHJlZnJlc2hlcy4nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpbWFnZTogaWNvbjcsXHJcbiAgICAgICAgdGV4dDogJ09mZmVycyBkYXRhIGFuYWx5c2lzIHdpdGhvdXQgdGhlIHJlcXVpcmVtZW50IG9mIHNwZWNpYWxpc2VkIHRlY2huaWNhbCBzdXBwb3J0LCcgK1xyXG4gICAgICAgICAgICAnIHdpdGggYSBzdHJvbmcsIGludHVpdGl2ZSBpbnRlcmZhY2UuJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW1hZ2U6IGljb244LFxyXG4gICAgICAgIHRleHQ6ICdTYXZlcyB5b3UgdGltZSB3aXRoIGN1c3RvbWlzZWQgaW5mb3JtYXRpb24gZGFzaGJvYXJkcywgd2hpY2ggYXJlIG1vdWxkZWQgdG8geW91cicgK1xyXG4gICAgICAgICAgICAnIG9yZ2FuaXNhdGlvblxcJ3Mgc3BlY2lmaWMgbmVlZHMuJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW1hZ2U6IGljb245LFxyXG4gICAgICAgIHRleHQ6ICdFbGltaW5hdGVzIHNwZWVkIGFuZCBtZW1vcnkgcmVzdHJpY3Rpb25zIHRoYW5rcyB0byBhIHJvYnVzdCBjbG91ZCBlbnZpcm9ubWVudCwnICtcclxuICAgICAgICAgICAgJyBlbmFibGluZyBkYXRhIHRvIGJlIGZvdW5kIGFuZCBhbmFseXNlZCByYXBpZGx5LicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGltYWdlOiBpY29uMTAsXHJcbiAgICAgICAgdGV4dDogJ0FsbG93cyB5b3UgdG8gdmlldyByZXBvcnRzIGluc3RhbnRseSBvbiBtdWx0aXBsZSB3ZWItY29ubmVjdGVkIGRldmljZXMsJyArXHJcbiAgICAgICAgICAgICcgaW5jbHVkaW5nIGlPUywgQW5kcm9pZCBhbmQgV2luZG93cy4nLFxyXG4gICAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCB7IEVYUExPUkVfREFUQSB9OyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcImV4cGxvcmVfY29udGFpbmVyX18xc3M2N1wiLFxuXHRcInRpdGxlXCI6IFwiZXhwbG9yZV90aXRsZV9fMXpyZXdcIixcblx0XCJjb250ZW50XCI6IFwiZXhwbG9yZV9jb250ZW50X18yRUxJU1wiLFxuXHRcIml0ZW1cIjogXCJleHBsb3JlX2l0ZW1fXzNsNmxxXCIsXG5cdFwiaGV4YWdvblwiOiBcImV4cGxvcmVfaGV4YWdvbl9fMmdDSGtcIixcblx0XCJsb2dvXCI6IFwiZXhwbG9yZV9sb2dvX18xcmRsb1wiLFxuXHRcInRleHRcIjogXCJleHBsb3JlX3RleHRfXzJkUFc4XCIsXG5cdFwidmlzaWJsZUNsYXNzXCI6IFwiZXhwbG9yZV92aXNpYmxlQ2xhc3NfX1NtNTR4XCIsXG5cdFwic2VjdGlvblwiOiBcImV4cGxvcmVfc2VjdGlvbl9fMUZxejdcIlxufTtcbiIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBWaXNpYmlsaXR5U2Vuc29yIGZyb20gJ3JlYWN0LXZpc2liaWxpdHktc2Vuc29yJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9leHBsb3JlLm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IEV4cGxvcmVJdGVtID0gKHtleHBsb3JlRGF0YX0pID0+IHtcclxuICAgIGNvbnN0IFtpc0VsZW1lbnRWaXNpYmxlLCBzZXRJc0VsZW1lbnRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IG9uQ2hhbmdlVmlzaWJpbGl0eSA9IChpc1Zpc2libGUpID0+IGlzVmlzaWJsZSA/IHNldElzRWxlbWVudFZpc2libGUodHJ1ZSkgOiBzZXRJc0VsZW1lbnRWaXNpYmxlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCB7aW1hZ2UsIHRleHR9ID0gZXhwbG9yZURhdGE7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8VmlzaWJpbGl0eVNlbnNvciBvbkNoYW5nZT17b25DaGFuZ2VWaXNpYmlsaXR5fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2lzRWxlbWVudFZpc2libGUgPyBgJHtzdHlsZXMuaXRlbX0gdmlzaWJsZUNsYXNzYCA6IGAke3N0eWxlcy5pdGVtfWB9YH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhleGFnb259PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZX0gYWx0PXsnbG9nbyd9IGNsYXNzTmFtZT17c3R5bGVzLmxvZ299Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+e3RleHR9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1Zpc2liaWxpdHlTZW5zb3I+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeHBsb3JlSXRlbSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbi8vU3R5bGVcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2V4cGxvcmUubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBFeHBsb3JlSXRlbSBmcm9tICcuL2V4cGxvcmVJdGVtL0V4cGxvcmVJdGVtJztcclxuaW1wb3J0IHtFWFBMT1JFX0RBVEF9IGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbmNvbnN0IEV4cGxvcmUgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5XaHkgY2hvb3NlIGEgQkkgc29sdXRpb24/PC9oMT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIHtFWFBMT1JFX0RBVEEubWFwKCh2YWx1ZSwgaW5kZXgpID0+IDxFeHBsb3JlSXRlbSBleHBsb3JlRGF0YT17dmFsdWV9IGtleT17dmFsdWUudGV4dH0vPil9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXhwbG9yZSIsImNvbnN0IE1FTlVfTElOS1MgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6ICdIT01FJyxcclxuICAgICAgICBsaW5rVG86ICcjaG9tZSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6ICdTRVJWSUNFUycsXHJcbiAgICAgICAgbGlua1RvOiAnI3NlcnZpY2VzJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYWJlbDogJ1dPUksnLFxyXG4gICAgICAgIGxpbmtUbzogJyN3b3JrJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYWJlbDogJ0NPTlRBQ1QnLFxyXG4gICAgICAgIGxpbmtUbzogJyNjb250YWN0J1xyXG4gICAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBNRU5VX0xJTktTLFxyXG59IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiaGVhZGVyX2NvbnRhaW5lcl9fMUhpTjZcIixcblx0XCJtZW51XCI6IFwiaGVhZGVyX21lbnVfXzIzd0hiXCIsXG5cdFwibGFyZ2Utc2NyZWVuLW1lbnVcIjogXCJoZWFkZXJfbGFyZ2Utc2NyZWVuLW1lbnVfXzJYcUp1XCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG4vL1N0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaGVhZGVyLm1vZHVsZS5zY3NzJztcclxuLy9Db25zdGFudHNcclxuaW1wb3J0IHsgTUVOVV9MSU5LUyB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuLy9Db21wb25lbnRzXHJcbmltcG9ydCBNb2JpbGVNZW51IGZyb20gJy4vbW9iaWxlLW1lbnUnO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG5cclxuICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgICAgICAvLyBDbGllbnQtc2lkZS1vbmx5IGNvZGVcclxuICAgICAgICBjb25zdCBzdGlja3lGdW5jdGlvbiA9ICgpID0+IHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgbGV0IG5hdmlnYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCduYXYnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChuYXZpZ2F0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uLmNsYXNzTGlzdC50b2dnbGUoJ3N0aWNreScsIHdpbmRvdy5zY3JvbGxZID4gMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHN0aWNreUZ1bmN0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bmF2IHJvbGU9eyduYXZpZ2F0aW9uJ30gY2xhc3NOYW1lPXtgJHtzdHlsZXMuY29udGFpbmVyfSBoZWFkZXItd3JhcHBlcmAgfT5cclxuICAgICAgICAgICAgPHVsIGlkPXsnbGFyZ2Utc2NyZWVuLW1lbnUnfSBjbGFzc05hbWU9e3N0eWxlcy5tZW51fT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBNRU5VX0xJTktTLm1hcCgobGluayxpbmRleCkgPT4gPGEga2V5PXtpbmRleH0gaHJlZj17bGluay5saW5rVG99PjxsaT57bGluay5sYWJlbH08L2xpPjwvYT4pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxNb2JpbGVNZW51IG1lbnVJdGVtcz17TUVOVV9MSU5LU30gLz5cclxuICAgICAgICA8L25hdj5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG4vL1N0eWxlXHJcbmltcG9ydCBzdHlsZSBmcm9tICcuL21vYmlsZU1lbnUubW9kdWxlLnNjc3MnO1xyXG5cclxuY29uc3QgTW9iaWxlTWVudSA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgeyBtZW51SXRlbXMgfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLm1lbnVUb2dnbGV9PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz5cclxuICAgICAgICAgICAgPHNwYW4gLz5cclxuICAgICAgICAgICAgPHNwYW4gLz5cclxuICAgICAgICAgICAgPHNwYW4gLz5cclxuICAgICAgICAgICAgPHVsIGlkPXsnbWVudSd9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lbnVJdGVtcy5tYXAoKGxpbmssaW5kZXgpID0+IDxhIGtleT17aW5kZXh9IGhyZWY9e2xpbmsubGlua1RvfT48bGk+e2xpbmsubGFiZWx9PC9saT48L2E+KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlTWVudTsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtZW51VG9nZ2xlXCI6IFwibW9iaWxlTWVudV9tZW51VG9nZ2xlX18ySlZrU1wiLFxuXHRcIm1lbnVcIjogXCJtb2JpbGVNZW51X21lbnVfX2pfUkhLXCJcbn07XG4iLCJpbXBvcnQgaWNvbjEgZnJvbSAnLi4vaW1hZ2VuZXMvaWNvbm9fMS5wbmcnO1xyXG5pbXBvcnQgaWNvbjIgZnJvbSAnLi4vaW1hZ2VuZXMvaWNvbm9fMi5wbmcnO1xyXG5pbXBvcnQgaWNvbjMgZnJvbSAnLi4vaW1hZ2VuZXMvaWNvbm9fMy5wbmcnO1xyXG5cclxuY29uc3QgU0VSVklDRVNfREFUQSA9IFtcclxuICAgIHtcclxuICAgICAgaWQ6ICdib3gxJyxcclxuICAgICAgaW1hZ2U6IGljb24xLFxyXG4gICAgICB0aXRsZTogJ1Bvd2VyIEJJIENvbnN1bHRpbmcnLFxyXG4gICAgICB0ZXh0OiAnV2Ugd29yayB3aXRoIFBvd2VyIEJJIHRvIGNyZWF0ZSBwb3dlcmZ1bCBhdXRvbWF0ZWQgcmVwb3J0cycgK1xyXG4gICAgICAgICAgJyB0byB2aXN1YWxpc2UgeW91ciBidXNpbmVzcyBkYXRhLCBjYXB0dXJlIGtleSBpbnNpZ2h0cyBpbiByZWFsIHRpbWUgYW5kIGltcHJvdmUgZGVjaXNpb24gbWFraW5nLiAnICtcclxuICAgICAgICAgICdBcyBhIGJlc3QtaW4tY2xhc3MgQkkgcGxhdGZvcm0sIFBvd2VyIEJJIGFsbG93cyB5b3UgdG8gY29ubmVjdCB0byBkYXRhIHN0b3JlZCBpbiBtdWx0aXBsZSBzb3VyY2VzJyArXHJcbiAgICAgICAgICAnIGFuZCBzaGFyZSBhbmQgY29sbGFib3JhdGUgYW1vbmcgeW91ciB0ZWFtIG1lbWJlcnMsIGVuc3VyaW5nIHlvdXIgZGF0YSBoYXMgdGhlIG1heGltdW0gaW1wYWN0LicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJ2JveDInLFxyXG4gICAgICBpbWFnZTogaWNvbjIsXHJcbiAgICAgIHRpdGxlOiAnQnVzaW5lc3MgQW5hbHlzaXMnLFxyXG4gICAgICB0ZXh0OiAnV2UgdXNlIG91ciB3ZWFsdGggb2YgZXhwZXJpZW5jZSBpbiBCSSBhbmQgY29tbWVyY2lhbCBhY3VtZW4gdG8gaGVscCB5b3VyJyArXHJcbiAgICAgICAgICAnIGJ1c2luZXNzIGlkZW50aWZ5IGFuZCB1bmRlcnN0YW5kIGl0cyBrZXkgcGVyZm9ybWFuY2UgZHJpdmVycywgc2V0IG1lYW5pbmdmdWwgdGFyZ2V0cywnICtcclxuICAgICAgICAgICcgc29sdmUgcHJvYmxlbXMgd2l0aCBkYXRhIGFuZCBzdXBwb3J0IG1ham9yIGJ1c2luZXNzIGRlY2lzaW9ucywgd29ya2luZyBjbG9zZWx5IHdpdGggcHJvY2VzcycgK1xyXG4gICAgICAgICAgJyBvd25lcnMgdG8gbWFrZSB0aGUgbW9zdCBvZiB5b3VyIGRhdGEuJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnYm94MycsXHJcbiAgICAgIGltYWdlOiBpY29uMyxcclxuICAgICAgdGl0bGU6ICdCSSBzdXBwb3J0JyxcclxuICAgICAgdGV4dDogJ1dlIG9mZmVyIGVuZC10by1lbmQgc3VwcG9ydCB0byBjb21wYW5pZXMgYWxyZWFkeSBvcGVyYXRpbmcgYSBQb3dlciBCSSBzb2x1dGlvbiwnICtcclxuICAgICAgICAgICcgZXhwZXJ0IGNvbnN1bHRhbmN5IG9uIFBvd2VyIEJJIGJlc3QgcHJhY3RpY2VzIGFuZCB0cmFpbmluZyBzZXNzaW9ucyBhbGxvd2luZyB5b3VyIGJ1c2luZXNzJyArXHJcbiAgICAgICAgICAnIHRvIHJlYWxpc2UgaXRzIGZ1bGwgQkkgcG90ZW50aWFsLicsXHJcbiAgICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IHsgU0VSVklDRVNfREFUQSB9OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9vdXJTZXJ2aWNlcy5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCAnLi4vaW1hZ2VuZXMvbG9nby5zdmcnO1xyXG5pbXBvcnQgT3VyU2VydmljZXNJdGVtIGZyb20gJy4uL091clNlcnZpY2VzSXRlbSc7XHJcbmltcG9ydCB7IFNFUlZJQ0VTX0RBVEEgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuXHJcbmNvbnN0IE91clNlcnZpY2VzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3NpbXBsZS1zZWN0aW9uLXdyYXBwZXInfSBpZD17J3NlcnZpY2VzJ30+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9eydzZWN0aW9uLXN1YnRpdGxlJ30+T1VSIFNFUlZJQ0VTPC9oMj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAge1NFUlZJQ0VTX0RBVEEubWFwKCh2YWx1ZSwgaW5kZXgpID0+IDxPdXJTZXJ2aWNlc0l0ZW0gc2VydmljZXNEYXRhPXt2YWx1ZX0ga2V5PXt2YWx1ZS50aXRsZX0vPil9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3VyU2VydmljZXM7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwib3VyU2VydmljZXNfY29udGFpbmVyX18zbUh2c1wiLFxuXHRcIml0ZW1cIjogXCJvdXJTZXJ2aWNlc19pdGVtX18xMHFvTFwiLFxuXHRcIml0ZW1faW1hZ2VcIjogXCJvdXJTZXJ2aWNlc19pdGVtX2ltYWdlX18xSm5vR1wiLFxuXHRcIml0ZW1fZGVzY3JpcHRpb25cIjogXCJvdXJTZXJ2aWNlc19pdGVtX2Rlc2NyaXB0aW9uX18xSnQ3OFwiLFxuXHRcIml0ZW1fdGl0bGVcIjogXCJvdXJTZXJ2aWNlc19pdGVtX3RpdGxlX18yNkVEU1wiLFxuXHRcIml0ZW1fdGV4dFwiOiBcIm91clNlcnZpY2VzX2l0ZW1fdGV4dF9fMTdGUm9cIixcblx0XCJ2aXNpYmxlQ2xhc3NcIjogXCJvdXJTZXJ2aWNlc192aXNpYmxlQ2xhc3NfXzNzcjRYXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBWaXNpYmlsaXR5U2Vuc29yIGZyb20gJ3JlYWN0LXZpc2liaWxpdHktc2Vuc29yJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9PdXJTZXJ2aWNlcy9vdXJTZXJ2aWNlcy5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBPdXJTZXJ2aWNlc0l0ZW0gPSAoe3NlcnZpY2VzRGF0YX0pID0+IHtcclxuICAgIGNvbnN0IFtpc0VsZW1lbnRWaXNpYmxlLCBzZXRJc0VsZW1lbnRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IG9uQ2hhbmdlVmlzaWJpbGl0eSA9IChpc1Zpc2libGUpID0+IGlzVmlzaWJsZSA/IHNldElzRWxlbWVudFZpc2libGUodHJ1ZSkgOiBzZXRJc0VsZW1lbnRWaXNpYmxlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCB7aW1hZ2UsIHRpdGxlLCB0ZXh0LCBpZH0gPSBzZXJ2aWNlc0RhdGE7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8VmlzaWJpbGl0eVNlbnNvciBvbkNoYW5nZT17b25DaGFuZ2VWaXNpYmlsaXR5fT5cclxuICAgICAgICAgICAgPGRpdiBpZD17aWR9IGNsYXNzTmFtZT17YCR7aXNFbGVtZW50VmlzaWJsZSA/IGAke3N0eWxlcy5pdGVtfSB2aXNpYmxlQ2xhc3NgIDogYCR7c3R5bGVzLml0ZW19YH1gfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaXRlbV9pbWFnZX0gc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6YHVybCgke2ltYWdlfSlgfX0vPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLml0ZW1fdGl0bGV9Pnt0aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pdGVtX2Rlc2NyaXB0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5pdGVtX3RleHR9Pnt0ZXh0fTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1Zpc2liaWxpdHlTZW5zb3I+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPdXJTZXJ2aWNlc0l0ZW0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSWZyYW1lIGZyb20gJ3JlYWN0LWlmcmFtZSc7XHJcblxyXG5jb25zdCBNeUlmcmFtZSA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgeyB1cmwsIGlkIH0gPSBwcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPElmcmFtZSB1cmw9e3VybH1cclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiOTklXCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgaWQ9e2lkfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXktaWZyYW1lXCJcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJpbml0aWFsXCJcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxyXG4gICAgICAgIC8+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUlmcmFtZSIsImNvbnN0IERBU0hCT0FSRFMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9hcHAucG93ZXJiaS5jb20vdmlldz9yPWV5SnJJam9pTVRabE5HUmhOR1F0WVdWak5pMDBOR1ppTFdFMk5qY3RNbUV4WTJNeE5XVTJOelU1SWl3aWRDSTZJakprTVdFMllqWmtMV1k1TTJVdE5ESmxZeTA0WXpReUxUaGtZV0U1TkRBelpEQmtPQ0o5JnBhZ2VOYW1lPVJlcG9ydFNlY3Rpb24xJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9hcHAucG93ZXJiaS5jb20vdmlldz9yPWV5SnJJam9pTlRGaFpqSTVObU10WTJNd1ppMDBNemczTFRnMVlUa3RZbU15TVdRd1lXVXhNakV6SWl3aWRDSTZJakprTVdFMllqWmtMV1k1TTJVdE5ESmxZeTA0WXpReUxUaGtZV0U1TkRBelpEQmtPQ0o5JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9hcHAucG93ZXJiaS5jb20vdmlldz9yPWV5SnJJam9pWldNNE9XSTVNall0WkRBd01TMDBNbUV6TFRrNFlUVXRZVEF4TmpnMk5HVmtOVGd4SWl3aWRDSTZJakprTVdFMllqWmtMV1k1TTJVdE5ESmxZeTA0WXpReUxUaGtZV0U1TkRBelpEQmtPQ0o5JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9hcHAucG93ZXJiaS5jb20vdmlldz9yPWV5SnJJam9pTWpJell6UTBOemt0TTJJeFpDMDBOekZqTFRrM05UY3RNVEEwTVRsaE16SmhOVGN4SWl3aWRDSTZJakprTVdFMllqWmtMV1k1TTJVdE5ESmxZeTA0WXpReUxUaGtZV0U1TkRBelpEQmtPQ0o5JnBhZ2VOYW1lPVJlcG9ydFNlY3Rpb240MjE0ZjFlYmRhZmRiMDdmNTU4OCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVybDogJ2h0dHBzOi8vYXBwLnBvd2VyYmkuY29tL3ZpZXc/cj1leUpySWpvaU1HTTJaRFU0WTJJdE56RmlNaTAwWkRWbUxUZzFNR0l0T1dGbE5XSTRaVFV5WldJeklpd2lkQ0k2SWpKa01XRTJZalprTFdZNU0yVXROREpsWXkwNFl6UXlMVGhrWVdFNU5EQXpaREJrT0NKOSZwYWdlTmFtZT1SZXBvcnRTZWN0aW9uYzRiYTYxYTc2NWIwOWIwMDYyNjcnLFxyXG4gICAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBEQVNIQk9BUkRTXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG4vL1N0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vb3VyV29yay5tb2R1bGUuc2Nzcyc7XHJcbi8vQ29uc3RhbnRzXHJcbmltcG9ydCB7IERBU0hCT0FSRFMgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbi8vQ29tcG9uZW50XHJcbmltcG9ydCAncmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbC9saWIvc3R5bGVzL2Nhcm91c2VsLm1pbi5jc3MnOyAvLyByZXF1aXJlcyBhIGxvYWRlclxyXG5pbXBvcnQgTXlJZnJhbWUgZnJvbSAnLi9NeUlmcmFtZSc7XHJcbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSAncmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbCc7XHJcblxyXG5jb25zdCBPdXJXb3JrID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3NpbXBsZS1zZWN0aW9uLXdyYXBwZXInfSBpZD17J3dvcmsnfT5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17J3NlY3Rpb24tc3VidGl0bGUnfT5PVVIgV09SSzwvaDI+XHJcbiAgICAgICAgICAgIDxDYXJvdXNlbFxyXG4gICAgICAgICAgICAgICAgaW5maW5pdGVMb29wPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgc2hvd1N0YXR1cz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBzaG93VGh1bWJzPXtmYWxzZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIERBU0hCT0FSRFMubWFwKChkYXNoYm9hcmQsIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IHN0eWxlPXt7aGVpZ2h0OiAnMTAwJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNeUlmcmFtZSB1cmw9e2Rhc2hib2FyZC51cmx9IGlkPXtpbmRleH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PkFyZSB5b3UgcmVhZHkgdG8gYWNjZWxlcmF0ZSB5b3VyIGJ1c2luZXNzIGdyb3d0aD88YnIvPiBHZXQgaW4gdG91Y2ggdG9cclxuICAgICAgICAgICAgICAgIGRpc2NvdmVyIG1vcmUgYWJvdXQgd2hhdCBNQkFuYWx5c3QgY291bGQgZG8gZm9yIHlvdXIgYnVzaW5lc3MuPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3VyV29yazsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ0ZXh0XCI6IFwib3VyV29ya190ZXh0X19PRUp1Z1wiXG59O1xuIiwiaW1wb3J0IGljb24xIGZyb20gJy4uLy4uL3NyYy9jb21wb25lbnRzL2Fzc2V0cy9pY29ucy9pY29ub18xNC5wbmcnO1xyXG5pbXBvcnQgaWNvbjIgZnJvbSAnLi4vLi4vc3JjL2NvbXBvbmVudHMvYXNzZXRzL2ljb25zL2ljb25vXzE1LnBuZyc7XHJcbmltcG9ydCBpY29uMyBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9hc3NldHMvaWNvbnMvaWNvbm9fMTYucG5nJztcclxuXHJcbmNvbnN0IFRIUkVFX0RBVEEgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaW1hZ2U6IGljb24xLFxyXG4gICAgICAgIHRleHQ6ICdNYW5hZ2UgaW52ZW50b3J5IGtleSBtZXRyaWNzIHN1Y2ggYXMgQWdlZCBTdG9jaywgSW52ZW50b3J5IFR1cm5vdmVyLCBBdmFpbGFiaWxpdHksJyArXHJcbiAgICAgICAgICAgICcgZmFzdGVzdCBtb3ZpbmcgaW52ZW50b3J5IGl0ZW1zIGFuZCBvdGhlcnMuJyxcclxuICAgICAgICBpZDogJ2JveCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGltYWdlOiBpY29uMixcclxuICAgICAgICB0ZXh0OiAnTGluayBpbnZlbnRvcnkgZGF0YSB0byBzYWxlcyBwZXJmb3JtYW5jZSB0byBmb3JlY2FzdCBpbnZlbnRvcnkgcHVyY2hhc2VzIGFuZCcgK1xyXG4gICAgICAgICAgICAnIGhlYWx0aHkgc3RvY2sgbGV2ZWxzJyxcclxuICAgICAgICBpZDogJ2JsYWNrLWJveCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGltYWdlOiBpY29uMyxcclxuICAgICAgICB0ZXh0OiAnVmlzdWFsaXNlIG92ZXJhbGwgU3VwcGx5IHBlcmZvcm1hbmNlIGNoYWluIHRocm91Z2ggdXBkYXRlZCBkYXRhIGRpcmVjdGx5IGNvbm5lY3RlZCcgK1xyXG4gICAgICAgICAgICAnIHRvIHlvdXIgaW52ZW50b3J5IG1hbmFnZW1lbnQgc3lzdGVtcycsXHJcbiAgICAgICAgaWQ6ICdib3gnLFxyXG4gICAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCB7IFRIUkVFX0RBVEEgfTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVGhyZWVJdGVtIGZyb20gJy4vdGhyZWVJdGVtL1RocmVlSXRlbSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi90aHJlZS5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IFRIUkVFX0RBVEEgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5cclxuY29uc3QgVGhyZWUgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9ufT5cclxuICAgICAgICAgICAge1RIUkVFX0RBVEEubWFwKCh2YWx1ZSwgaW5kZXgpID0+IDxUaHJlZUl0ZW0gIHRocmVlRGF0YT17dmFsdWV9IGtleT17dmFsdWUudGV4dH0vPil9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaHJlZTsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzZWN0aW9uXCI6IFwidGhyZWVfc2VjdGlvbl9fdmh2WmZcIixcblx0XCJibGFja19ib3hcIjogXCJ0aHJlZV9ibGFja19ib3hfXzF3S05PXCIsXG5cdFwiYXJyb3dcIjogXCJ0aHJlZV9hcnJvd19fMnhlNUxcIixcblx0XCJsb2dvXCI6IFwidGhyZWVfbG9nb19fT2FEVmVcIixcblx0XCJ0ZXh0X2NvbnRhaW5lclwiOiBcInRocmVlX3RleHRfY29udGFpbmVyX18xbDVOVlwiLFxuXHRcInRleHRcIjogXCJ0aHJlZV90ZXh0X18zeG9xSVwiLFxuXHRcImxvZ29fY29udGFpbmVyXCI6IFwidGhyZWVfbG9nb19jb250YWluZXJfXzItWjJnXCIsXG5cdFwidmlzaWJsZUNsYXNzXCI6IFwidGhyZWVfdmlzaWJsZUNsYXNzX19mYXNKYlwiLFxuXHRcInRocmVlLWFycm93XCI6IFwidGhyZWVfdGhyZWUtYXJyb3dfXzNDV3FxXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBWaXNpYmlsaXR5U2Vuc29yIGZyb20gJ3JlYWN0LXZpc2liaWxpdHktc2Vuc29yJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi90aHJlZS5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBUaHJlZUl0ZW0gPSAoe3RocmVlRGF0YX0pID0+IHtcclxuICAgIGNvbnN0IFtpc0VsZW1lbnRWaXNpYmxlLCBzZXRJc0VsZW1lbnRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IG9uQ2hhbmdlVmlzaWJpbGl0eSA9IChpc1Zpc2libGUpID0+IGlzVmlzaWJsZSA/IHNldElzRWxlbWVudFZpc2libGUodHJ1ZSkgOiBzZXRJc0VsZW1lbnRWaXNpYmxlKGZhbHNlKTtcclxuXHJcblxyXG4gICAgY29uc3Qge2lkLCBpbWFnZSwgdGV4dH0gPSB0aHJlZURhdGE7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxWaXNpYmlsaXR5U2Vuc29yIG9uQ2hhbmdlPXtvbkNoYW5nZVZpc2liaWxpdHl9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7aWQgPT09ICdibGFjay1ib3gnID8gYCR7c3R5bGVzLmxvZ29fY29udGFpbmVyfSAke3N0eWxlcy5ibGFja19ib3h9YCAgOiBgJHtzdHlsZXMubG9nb19jb250YWluZXJ9YH1gfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgYWx0PXsnbG9nbyd9IHNyYz17aW1hZ2V9IGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IGlkPXtpZH0vPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hcnJvd30gaWQ9e2lkfSAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0X2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+e3RleHR9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvVmlzaWJpbGl0eVNlbnNvcj5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRocmVlSXRlbTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBWaXNpYmlsaXR5U2Vuc29yIGZyb20gJ3JlYWN0LXZpc2liaWxpdHktc2Vuc29yJztcclxuLy9TdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3dob1dlQXJlLm1vZHVsZS5zY3NzJztcclxuLy9JbWFnZXNcclxuaW1wb3J0IGljb25vNSBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9pY29ub181LnBuZyc7XHJcbmltcG9ydCBpY29ubzQgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9pbWFnZXMvaWNvbm9fNC5wbmcnO1xyXG5pbXBvcnQgaW1hZ2U0IGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2ltYWdlNC5qcGcnO1xyXG5pbXBvcnQgaW1hZ2UzIGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2ltYWdlMy5qcGcnO1xyXG5cclxuY29uc3QgV2hvV2VBcmUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbaXNFbGVtZW50MVZpc2libGUsIHNldElzRWxlbWVudDFWaXNpYmxlMV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaXNFbGVtZW50MlZpc2libGUsIHNldElzRWxlbWVudDJWaXNpYmxlMl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBvbkNoYW5nZVZpc2liaWxpdHkxID0gKGlzVmlzaWJsZSkgPT4gaXNWaXNpYmxlID8gc2V0SXNFbGVtZW50MVZpc2libGUxKHRydWUpIDogc2V0SXNFbGVtZW50MVZpc2libGUxKGZhbHNlKTtcclxuICAgIGNvbnN0IG9uQ2hhbmdlVmlzaWJpbGl0eTIgPSAoaXNWaXNpYmxlKSA9PiBpc1Zpc2libGUgPyBzZXRJc0VsZW1lbnQyVmlzaWJsZTIodHJ1ZSkgOiBzZXRJc0VsZW1lbnQyVmlzaWJsZTIoZmFsc2UpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmZpcnN0X3NlY3Rpb259ICR7c3R5bGVzLnNlY3Rpb259YH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpcnN0X292ZXJsYXl9Lz5cclxuICAgICAgICAgICAgICAgIDxoMT5XSE8gV0UgQVJFPC9oMT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PldlIGFyZSBjb21taXR0ZWQgdG8gaGVscGluZyBidXNpbmVzc2VzIG1ha2UgYmV0dGVyXHJcbiAgICAgICAgICAgICAgICAgICAgZGVjaXNpb25zIHVzaW5nIGRhdGEuIE91ciBleHBlcnQgdGVhbSB3aWxsIGJlY29tZSB5b3VyIHRydXN0ZWQgYWR2aXNlciBvbiBldmVyeXRoaW5nIGRhdGFcclxuICAgICAgICAgICAgICAgICAgICBjb21iaW5pbmcgcGFzc2lvbiwga25vd2xlZGdlIGFuZCBleHBlcmllbmNlIHRvIHRyYW5zZm9ybSB0aGUgd2F5IHlvdXIgYnVzaW5lc3MgZGVhbHMgd2l0aCBkYXRhLlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPFZpc2liaWxpdHlTZW5zb3Igb25DaGFuZ2U9e29uQ2hhbmdlVmlzaWJpbGl0eTF9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2lzRWxlbWVudDFWaXNpYmxlID8gYCR7c3R5bGVzLnNlY3Rpb25faWNvbn0gJHtzdHlsZXMuc2VjdGlvbn0gdmlzaWJsZUNsYXNzYCA6IGAke3N0eWxlcy5zZWN0aW9uX2ljb259ICR7c3R5bGVzLnNlY3Rpb259YH1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb25fbG9nb30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PXsnbG9nbzQnfSBzcmM9e2ljb25vNH0gY2xhc3NOYW1lPXtzdHlsZXMubG9nb19vbmV9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucGFyYWdyYXBofT5XZSBwcm92aWRlIGVuZCB0byBlbmQgQkkgc2VydmljZXMgdGFpbG9yZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGZpdCB5b3VyIGNvbXBhbnnigJlzIGluZGl2aWR1YWwgbmVlZHMuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PXsnaW1hZ2U0J30gc3JjPXtpbWFnZTR9IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX29uZX0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvVmlzaWJpbGl0eVNlbnNvcj5cclxuICAgICAgICAgICAgPFZpc2liaWxpdHlTZW5zb3Igb25DaGFuZ2U9e29uQ2hhbmdlVmlzaWJpbGl0eTJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2lzRWxlbWVudDJWaXNpYmxlID8gYCR7c3R5bGVzLnNlY3Rpb25faWNvbn0gJHtzdHlsZXMuc2VjdGlvbn0gdmlzaWJsZUNsYXNzYCA6IGAke3N0eWxlcy5zZWN0aW9uX2ljb259ICR7c3R5bGVzLnNlY3Rpb259YH1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGFsdD17J2ltYWdlMyd9IHNyYz17aW1hZ2UzfSBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZV90d299Lz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb25fbG9nb30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PXsnbG9nbzUnfSBzcmM9e2ljb25vNX0gY2xhc3NOYW1lPXtzdHlsZXMubG9nb190d299Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucGFyYWdyYXBofT5XZSBhcmUgYSBib3V0aXF1ZSBkYXRhIGFuYWx5dGljc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGluZyBmaXJtIGJhc2VkIGluIE1lbGJvdXJuZSwgQXVzdHJhbGlhIHdpdGggZXh0ZW5zaXZlIGV4cGVyaWVuY2Ugd29ya2luZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3RlbHkgaW4gZGF0YSBwcm9qZWN0cyBhcm91bmQgdGhlIHdvcmxkLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1Zpc2liaWxpdHlTZW5zb3I+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaG9XZUFyZSIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIndob1dlQXJlX2NvbnRhaW5lcl9fampweEVcIixcblx0XCJzZWN0aW9uXCI6IFwid2hvV2VBcmVfc2VjdGlvbl9fMWpoRjhcIixcblx0XCJmaXJzdF9vdmVybGF5XCI6IFwid2hvV2VBcmVfZmlyc3Rfb3ZlcmxheV9fcGFnUmxcIixcblx0XCJmaXJzdF9zZWN0aW9uXCI6IFwid2hvV2VBcmVfZmlyc3Rfc2VjdGlvbl9fMi1KYkJcIixcblx0XCJ0ZXh0XCI6IFwid2hvV2VBcmVfdGV4dF9fMndQaHZcIixcblx0XCJ0ZXh0X3NcIjogXCJ3aG9XZUFyZV90ZXh0X3NfXzNpR0JnXCIsXG5cdFwic2VjdGlvbl9pY29uXCI6IFwid2hvV2VBcmVfc2VjdGlvbl9pY29uX18zRmtkSFwiLFxuXHRcImltYWdlX3R3b1wiOiBcIndob1dlQXJlX2ltYWdlX3R3b19fMmtMM1RcIixcblx0XCJpbWFnZV9vbmVcIjogXCJ3aG9XZUFyZV9pbWFnZV9vbmVfXzNvQ1plXCIsXG5cdFwibG9nb19vbmVcIjogXCJ3aG9XZUFyZV9sb2dvX29uZV9fM2lsdkxcIixcblx0XCJsb2dvX3R3b1wiOiBcIndob1dlQXJlX2xvZ29fdHdvX18ybTdrb1wiLFxuXHRcInBhcmFncmFwaFwiOiBcIndob1dlQXJlX3BhcmFncmFwaF9fMUY0VktcIixcblx0XCJzZWN0aW9uX2xvZ29cIjogXCJ3aG9XZUFyZV9zZWN0aW9uX2xvZ29fXzEyYnRkXCIsXG5cdFwidmlzaWJsZUNsYXNzXCI6IFwid2hvV2VBcmVfdmlzaWJsZUNsYXNzX19xMmJFRVwiXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG4vL2Nzc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4veW91ckRhdGEubW9kdWxlLnNjc3MnO1xyXG4vL0ltYWdlc1xyXG5pbXBvcnQgRmlyc3RJY29uV2hpdGUgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9pY29ucy9pY29ub18xMV9kaWYucG5nJztcclxuaW1wb3J0IFNlY29uZEljb25XaGl0ZSBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2ljb25zL2ljb25vXzEyX2RpZi5wbmcnXHJcbmltcG9ydCBUaGlyZEljb25XaGl0ZSBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2ljb25zL2ljb25vXzEzX2RpZi5wbmcnXHJcbmltcG9ydCBGaXJzdEljb25PcmFuZ2UgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9pY29ucy9pY29ub18xMS5wbmcnXHJcbmltcG9ydCBTZWNvbmRJY29uT3JhbmdlIGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvaWNvbnMvaWNvbm9fMTIucG5nJ1xyXG5pbXBvcnQgVGhpcmRJY29uT3JhbmdlIGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvaWNvbnMvaWNvbm9fMTMucG5nJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9pbWFnZXMvaW1hZ2U1LmpwZydcclxuXHJcbmNvbnN0IFlvdXJEYXRhID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2lzTGVmdEhvdmVyLCBzZXRJc0xlZnRIb3Zlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaXNUb3BIb3Zlciwgc2V0SXNUb3BIb3Zlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaXNCb3R0b21Ib3Zlciwgc2V0SXNCb3R0b21Ib3Zlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+RVhQTE9SRSBZT1VSIERBVEE8L2gxPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pdGVtc193cmFwcGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aXNUb3BIb3ZlciA/IGAke3N0eWxlcy5pdGVtfSAke3N0eWxlcy5ob3Zlcl9lbGVtZW50fWAgOiBgJHtzdHlsZXMuaXRlbX1gfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SXNUb3BIb3Zlcih0cnVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRJc1RvcEhvdmVyKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PXsndG9wLWljb24nfSBzcmM9e0ZpcnN0SWNvbk9yYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+U2F5IGdvb2RieWUgdG8gY2x1bmt5IHNwcmVhZHNoZWV0cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpYyB2aWV3cyBhbmQgbWFudWFsbHkgY29tcGlsZWQgcmVwb3J0cyBwcm9uZSB0byBodW1hbiBlcnJvcjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aXNMZWZ0SG92ZXIgPyBgJHtzdHlsZXMuaXRlbX0gJHtzdHlsZXMuaG92ZXJfZWxlbWVudH1gIDogYCR7c3R5bGVzLml0ZW19YH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldElzTGVmdEhvdmVyKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldElzTGVmdEhvdmVyKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PXsnbGVmdC1pY29uJ30gc3JjPXtTZWNvbmRJY29uT3JhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5EaXNjb3ZlciBwb3dlcmZ1bCBpbnNpZ2h0cyB3aXRoaW4geW91ciBleGlzdGluZyBkYXRhIHRvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZGVudGlmeSBhcmVhcyBvZiBpbXByb3ZlbWVudCwgc3RyZWFtbGluZSBvcGVyYXRpb25zIGFuZCBtYWtlIGV2aWRlbmNlLWJhc2VkIGRlY2lzaW9ucy4gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpc0JvdHRvbUhvdmVyID8gYCR7c3R5bGVzLml0ZW19ICR7c3R5bGVzLmhvdmVyX2VsZW1lbnR9YCA6IGAke3N0eWxlcy5pdGVtfWB9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRJc0JvdHRvbUhvdmVyKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldElzQm90dG9tSG92ZXIoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBhbHQ9eydib3R0b20taWNvbid9IHNyYz17VGhpcmRJY29uT3JhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5HZXQgYSBCSSBzb2x1dGlvbiB0YWlsb3JlZCB0byB5b3VyIGJ1c2luZXNzIG5lZWRzIHRvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0geW91ciBkYXRhIGludG8gYWN0aW9uYWJsZSBpbnRlbGxpZ2VuY2UgaW4gdGhlIG1vc3QgZWZmaWNpZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgc3VzdGFpbmFibGUgd2F5LjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yaG9tYnVzX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2lzTGVmdEhvdmVyID8gYCR7c3R5bGVzLnJob21idXN9ICR7c3R5bGVzLmxlZnR9ICR7c3R5bGVzLnJob21idXNfaG92ZXJ9YCA6IGAke3N0eWxlcy5yaG9tYnVzfSAke3N0eWxlcy5sZWZ0fWB9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRJc0xlZnRIb3Zlcih0cnVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRJc0xlZnRIb3ZlcihmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17U2Vjb25kSWNvbldoaXRlfSBhbHQ9eydsZWZ0LWljb24nfSBjbGFzc05hbWU9e3N0eWxlcy5pY29ufS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2lzVG9wSG92ZXIgPyBgJHtzdHlsZXMucmhvbWJ1c30gJHtzdHlsZXMudG9wfSAke3N0eWxlcy5yaG9tYnVzX2hvdmVyfWAgOiBgJHtzdHlsZXMucmhvbWJ1c30gJHtzdHlsZXMudG9wfWB9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRJc1RvcEhvdmVyKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldElzVG9wSG92ZXIoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0ZpcnN0SWNvbldoaXRlfSBhbHQ9eyd0b3AtaWNvbid9IGNsYXNzTmFtZT17c3R5bGVzLmljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLnJob21idXN9ICR7c3R5bGVzLnJpZ2h0fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17SW1hZ2V9IGFsdD17J3JpZ2h0J30gY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2lzQm90dG9tSG92ZXIgPyBgJHtzdHlsZXMucmhvbWJ1c30gJHtzdHlsZXMuYm90dG9tfSAke3N0eWxlcy5yaG9tYnVzX2hvdmVyfWAgOiBgJHtzdHlsZXMucmhvbWJ1c30gJHtzdHlsZXMuYm90dG9tfWB9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRJc0JvdHRvbUhvdmVyKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldElzQm90dG9tSG92ZXIoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e1RoaXJkSWNvbldoaXRlfSBhbHQ9eydmb3VydGgtaWNvbid9IGNsYXNzTmFtZT17c3R5bGVzLmljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFlvdXJEYXRhOyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcInlvdXJEYXRhX2NvbnRhaW5lcl9fakhqcmJcIixcblx0XCJjb250ZW50XCI6IFwieW91ckRhdGFfY29udGVudF9fMTVtc0dcIixcblx0XCJpdGVtc193cmFwcGVyXCI6IFwieW91ckRhdGFfaXRlbXNfd3JhcHBlcl9fZm9uTHNcIixcblx0XCJ0ZXh0XCI6IFwieW91ckRhdGFfdGV4dF9fMnR1YVZcIixcblx0XCJpdGVtXCI6IFwieW91ckRhdGFfaXRlbV9fY3lBWUdcIixcblx0XCJ0aXRsZVwiOiBcInlvdXJEYXRhX3RpdGxlX18zYWJnTFwiLFxuXHRcImljb25cIjogXCJ5b3VyRGF0YV9pY29uX18zX0J3elwiLFxuXHRcImltYWdlXCI6IFwieW91ckRhdGFfaW1hZ2VfXzM3RXRkXCIsXG5cdFwicmhvbWJ1c19jb250YWluZXJcIjogXCJ5b3VyRGF0YV9yaG9tYnVzX2NvbnRhaW5lcl9fQ1BtTlNcIixcblx0XCJyaG9tYnVzXCI6IFwieW91ckRhdGFfcmhvbWJ1c19fOUJ4Ny1cIixcblx0XCJsZWZ0XCI6IFwieW91ckRhdGFfbGVmdF9fMlJUZ0VcIixcblx0XCJ0b3BcIjogXCJ5b3VyRGF0YV90b3BfXzJZYm1EXCIsXG5cdFwicmlnaHRcIjogXCJ5b3VyRGF0YV9yaWdodF9fbUM5cWNcIixcblx0XCJib3R0b21cIjogXCJ5b3VyRGF0YV9ib3R0b21fXzFvenpJXCIsXG5cdFwicmhvbWJ1c19ob3ZlclwiOiBcInlvdXJEYXRhX3Job21idXNfaG92ZXJfX25WaUh1XCIsXG5cdFwiaG92ZXJfZWxlbWVudFwiOiBcInlvdXJEYXRhX2hvdmVyX2VsZW1lbnRfXzNqaExLXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvaWNvbm9fMS03YzFkZjEzMzk4NmM5OWU3NTlhYzNkMDE3NjdhNDRlOC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvaWNvbm9fMi0yZWIxOGM1NGY4YWM1ZWVjOTlkOTJiOWQwNDY4ZTViMi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvaWNvbm9fMy03MDIwYzEzOWVkMmMyMGU0NGQ0NWRlMTcyNDFjMGQ4OS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhacFpYZENiM2c5SWpBZ01DQTROREV1T1NBMU9UVXVNeUkrRFFvZ0lDQWdQR2NnWm1sc2JEMGlJell4UkVGR1FpSStEUW9nSUNBZ0lDQWdJRHh3WVhSb0lHUTlJazAyTmpZdU15QXlPVFl1TldNd0xUTXlMalV0TkRBdU55MDJNeTR6TFRFd015NHhMVGd5TGpRZ01UUXVOQzAyTXk0MklEZ3RNVEUwTGpJdE1qQXVNaTB4TXpBdU5DMDJMalV0TXk0NExURTBMakV0TlM0MkxUSXlMalF0TlM0MmRqSXlMak5qTkM0MklEQWdPQzR6TGprZ01URXVOQ0F5TGpZZ01UTXVOaUEzTGpnZ01Ua3VOU0F6Tnk0MUlERTBMamtnTnpVdU55MHhMakVnT1M0MExUSXVPU0F4T1M0ekxUVXVNU0F5T1M0MExURTVMall0TkM0NExUUXhMVGd1TlMwMk15NDFMVEV3TGprdE1UTXVOUzB4T0M0MUxUSTNMalV0TXpVdU15MDBNUzQyTFRVd0lETXlMall0TXpBdU15QTJNeTR5TFRRMkxqa2dPRFF0TkRZdU9WWTNPR010TWpjdU5TQXdMVFl6TGpVZ01Ua3VOaTA1T1M0NUlEVXpMall0TXpZdU5DMHpNeTQ0TFRjeUxqUXROVE11TWkwNU9TNDVMVFV6TGpKMk1qSXVNMk15TUM0M0lEQWdOVEV1TkNBeE5pNDFJRGcwSURRMkxqWXRNVFFnTVRRdU55MHlPQ0F6TVM0MExUUXhMak1nTkRrdU9TMHlNaTQySURJdU5DMDBOQ0EyTGpFdE5qTXVOaUF4TVMweUxqTXRNVEF0TkMweE9TNDNMVFV1TWkweU9TMDBMamN0TXpndU1pQXhMakV0TmpjdU9TQXhOQzQyTFRjMUxqZ2dNeTB4TGpnZ05pNDVMVEl1TmlBeE1TNDFMVEl1TmxZM09DNDFZeTA0TGpRZ01DMHhOaUF4TGpndE1qSXVOaUExTGpZdE1qZ3VNU0F4Tmk0eUxUTTBMalFnTmpZdU55MHhPUzQ1SURFek1DNHhMVFl5TGpJZ01Ua3VNaTB4TURJdU55QTBPUzQ1TFRFd01pNDNJRGd5TGpNZ01DQXpNaTQxSURRd0xqY2dOak11TXlBeE1ETXVNU0E0TWk0MExURTBMalFnTmpNdU5pMDRJREV4TkM0eUlESXdMaklnTVRNd0xqUWdOaTQxSURNdU9DQXhOQzR4SURVdU5pQXlNaTQxSURVdU5pQXlOeTQxSURBZ05qTXVOUzB4T1M0MklEazVMamt0TlRNdU5pQXpOaTQwSURNekxqZ2dOekl1TkNBMU15NHlJRGs1TGprZ05UTXVNaUE0TGpRZ01DQXhOaTB4TGpnZ01qSXVOaTAxTGpZZ01qZ3VNUzB4Tmk0eUlETTBMalF0TmpZdU55QXhPUzQ1TFRFek1DNHhJRFl5TFRFNUxqRWdNVEF5TGpVdE5Ea3VPU0F4TURJdU5TMDRNaTR6ZW0wdE1UTXdMakl0TmpZdU4yTXRNeTQzSURFeUxqa3RPQzR6SURJMkxqSXRNVE11TlNBek9TNDFMVFF1TVMwNExUZ3VOQzB4TmkweE15NHhMVEkwTFRRdU5pMDRMVGt1TlMweE5TNDRMVEUwTGpRdE1qTXVOQ0F4TkM0eUlESXVNU0F5Tnk0NUlEUXVOeUEwTVNBM0xqbDZiUzAwTlM0NElERXdOaTQxWXkwM0xqZ2dNVE11TlMweE5TNDRJREkyTGpNdE1qUXVNU0F6T0M0eUxURTBMamtnTVM0ekxUTXdJREl0TkRVdU1pQXlMVEUxTGpFZ01DMHpNQzR5TFM0M0xUUTFMVEV1T1MwNExqTXRNVEV1T1MweE5pNDBMVEkwTGpZdE1qUXVNaTB6T0MwM0xqWXRNVE11TVMweE5DNDFMVEkyTGpRdE1qQXVPQzB6T1M0NElEWXVNaTB4TXk0MElERXpMakl0TWpZdU9DQXlNQzQzTFRNNUxqa2dOeTQ0TFRFekxqVWdNVFV1T0MweU5pNHpJREkwTGpFdE16Z3VNaUF4TkM0NUxURXVNeUF6TUMweUlEUTFMakl0TWlBeE5TNHhJREFnTXpBdU1pNDNJRFExSURFdU9TQTRMak1nTVRFdU9TQXhOaTQwSURJMExqWWdNalF1TWlBek9DQTNMallnTVRNdU1TQXhOQzQxSURJMkxqUWdNakF1T0NBek9TNDRMVFl1TXlBeE15NDBMVEV6TGpJZ01qWXVPQzB5TUM0M0lETTVMamw2YlRNeUxqTXRNVE5qTlM0MElERXpMalFnTVRBZ01qWXVPQ0F4TXk0NElETTVMamd0TVRNdU1TQXpMakl0TWpZdU9TQTFMamt0TkRFdU1pQTRJRFF1T1MwM0xqY2dPUzQ0TFRFMUxqWWdNVFF1TkMweU15NDNJRFF1TmkwNElEZ3VPUzB4Tmk0eElERXpMVEkwTGpGNlRUUXlNUzR5SURRek1HTXRPUzR6TFRrdU5pMHhPQzQyTFRJd0xqTXRNamN1T0Mwek1pQTVJQzQwSURFNExqSXVOeUF5Tnk0MUxqY2dPUzQwSURBZ01UZ3VOeTB1TWlBeU55NDRMUzQzTFRrZ01URXVOeTB4T0M0eklESXlMalF0TWpjdU5TQXpNbnB0TFRjMExqUXROVGd1T1dNdE1UUXVNaTB5TGpFdE1qY3VPUzAwTGpjdE5ERXROeTQ1SURNdU55MHhNaTQ1SURndU15MHlOaTR5SURFekxqVXRNemt1TlNBMExqRWdPQ0E0TGpRZ01UWWdNVE11TVNBeU5DQTBMamNnT0NBNUxqVWdNVFV1T0NBeE5DNDBJREl6TGpSNlRUUXlNQzQzSURFMk0yTTVMak1nT1M0MklERTRMallnTWpBdU15QXlOeTQ0SURNeUxUa3RMalF0TVRndU1pMHVOeTB5Tnk0MUxTNDNMVGt1TkNBd0xURTRMamN1TWkweU55NDRMamNnT1MweE1TNDNJREU0TGpNdE1qSXVOQ0F5Tnk0MUxUTXllbTB0TnpRZ05UZ3VPV010TkM0NUlEY3VOeTA1TGpnZ01UVXVOaTB4TkM0MElESXpMamN0TkM0MklEZ3RPQzQ1SURFMkxURXpJREkwTFRVdU5DMHhNeTQwTFRFd0xUSTJMamd0TVRNdU9DMHpPUzQ0SURFekxqRXRNeTR4SURJMkxqa3ROUzQ0SURReExqSXROeTQ1ZW0wdE9UQXVOU0F4TWpVdU1tTXRNelV1TkMweE5TNHhMVFU0TGpNdE16UXVPUzAxT0M0ekxUVXdMallnTUMweE5TNDNJREl5TGprdE16VXVOaUExT0M0ekxUVXdMallnT0M0MkxUTXVOeUF4T0MwM0lESTNMamN0TVRBdU1TQTFMamNnTVRrdU5pQXhNeTR5SURRd0lESXlMalVnTmpBdU9TMDVMaklnTWpBdU9DMHhOaTQySURReExqRXRNakl1TWlBMk1DNDJMVGt1T1MwekxqRXRNVGt1TXkwMkxqVXRNamd0TVRBdU1ucE5NekV3SURRNU1HTXRNVE11TmkwM0xqZ3RNVGt1TlMwek55NDFMVEUwTGprdE56VXVOeUF4TGpFdE9TNDBJREl1T1MweE9TNHpJRFV1TVMweU9TNDBJREU1TGpZZ05DNDRJRFF4SURndU5TQTJNeTQxSURFd0xqa2dNVE11TlNBeE9DNDFJREkzTGpVZ016VXVNeUEwTVM0MklEVXdMVE15TGpZZ016QXVNeTAyTXk0eUlEUTJMamt0T0RRZ05EWXVPUzAwTGpVdExqRXRPQzR6TFRFdE1URXVNeTB5TGpkNmJUSXpOeTR5TFRjMkxqSmpOQzQzSURNNExqSXRNUzR4SURZM0xqa3RNVFF1TmlBM05TNDRMVE1nTVM0NExUWXVPU0F5TGpZdE1URXVOU0F5TGpZdE1qQXVOeUF3TFRVeExqUXRNVFl1TlMwNE5DMDBOaTQySURFMExURTBMamNnTWpndE16RXVOQ0EwTVM0ekxUUTVMamtnTWpJdU5pMHlMalFnTkRRdE5pNHhJRFl6TGpZdE1URWdNaTR6SURFd0xqRWdOQzR4SURFNUxqZ2dOUzR5SURJNUxqRjZiVE00TGpVdE5qWXVOMk10T0M0MklETXVOeTB4T0NBM0xUSTNMamNnTVRBdU1TMDFMamN0TVRrdU5pMHhNeTR5TFRRd0xUSXlMalV0TmpBdU9TQTVMakl0TWpBdU9DQXhOaTQyTFRReExqRWdNakl1TWkwMk1DNDJJRGt1T1NBekxqRWdNVGt1TXlBMkxqVWdNamd1TVNBeE1DNHlJRE0xTGpRZ01UVXVNU0ExT0M0eklETTBMamtnTlRndU15QTFNQzQyTFM0eElERTFMamN0TWpNZ016VXVOaTAxT0M0MElEVXdMalo2VFRNeU1DNDRJRGM0TGpSNklpOCtEUW9nSUNBZ0lDQWdJRHhqYVhKamJHVWdZM2c5SWpReU1DNDVJaUJqZVQwaU1qazJMalVpSUhJOUlqUTFMamNpTHo0TkNpQWdJQ0FnSUNBZ1BIQmhkR2dnWkQwaVRUVXlNQzQxSURjNExqRjZJaTgrRFFvZ0lDQWdQQzluUGcwS1BDOXpkbWMrRFFvPVwiIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuLy9Db21wb25lbnRzXHJcbmltcG9ydCBPdXJTZXJ2aWNlcyBmcm9tICcuLi9jb21wb25lbnRzL091clNlcnZpY2VzJztcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcclxuaW1wb3J0IEJhbm5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9CYW5uZXJcIjtcclxuaW1wb3J0IFdob1dlQXJlIGZyb20gXCIuLi9jb21wb25lbnRzL1dob1dlQXJlXCI7XHJcbmltcG9ydCBFeHBsb3JlIGZyb20gXCIuLi9jb21wb25lbnRzL0V4cGxvcmVcIjtcclxuaW1wb3J0IFlvdXJEYXRhIGZyb20gXCIuLi9jb21wb25lbnRzL1lvdXJEYXRhXCI7XHJcbmltcG9ydCBUaHJlZSBmcm9tIFwiLi4vY29tcG9uZW50cy9UaHJlZVwiO1xyXG5pbXBvcnQgT3VyV29yayBmcm9tIFwiLi4vY29tcG9uZW50cy9PdXJXb3JrXCI7XHJcbmltcG9ydCBDb250YWN0IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIEFwcCgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICA8QmFubmVyIC8+XHJcbiAgICAgICAgICAgIDxPdXJTZXJ2aWNlcyAvPlxyXG4gICAgICAgICAgICA8V2hvV2VBcmUgLz5cclxuICAgICAgICAgICAgPEV4cGxvcmUgLz5cclxuICAgICAgICAgICAgPFlvdXJEYXRhIC8+XHJcbiAgICAgICAgICAgIDxUaHJlZSAvPlxyXG4gICAgICAgICAgICA8T3VyV29yayAvPlxyXG4gICAgICAgICAgICA8Q29udGFjdCAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvaWNvbm83LTkxNWRlOWIzYThjNmQ1ZTc3YmRmYzhiN2U3NmY3Y2ZjLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9pY29ub18xMC05M2Y4Y2RhMGE4NGFhOTc2N2ExMzNhMTU1MjQ4MTIyZi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvaWNvbm9fMTEtOTdlN2ZiZDczZDE2N2Y2ODFhNGYwZDVkYmEzNmQ1NTkucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2ljb25vXzExX2RpZi01NTdhYmU2MzM2MTc5Y2UxYWI2ZjkwMzRmZTBkNTA5ZC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvaWNvbm9fMTItYWFlMjQwZjIyOGQ0OWY0YTY3MjU0NzVkYTNhYjgzMzQucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2ljb25vXzEyX2RpZi0wN2ViMzkyMTI3ZTg3MGQ3MGQ0Y2I4NWQzMDhmZTAyOC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvaWNvbm9fMTMtODdhY2E0OTg4NTY1NGEzYzRmYThkNzc4NWMwYmZhZjQucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2ljb25vXzEzX2RpZi00MGFhMTAzNWU3YTJlNDZlMmFiZWNmZmIxZDdiNGNiNS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvaWNvbm9fNi01MjA0YjViZjVmZmI3YzkxMGVhY2JlYjJiYzVlNjI0NS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvaWNvbm9fOC03MTIyNTgzYTViNWU3NmU3NGY2MGQ1Y2UzY2RjYTdiNy5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvaWNvbm9fOS03NDc0OWQyNDNlMDY4ZGMwNzU0MzI2MTNmZmIxNTg5NS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvVHJhbnNwYXJlbnQtbG9nby05NDEwODRlODg4MzYzMmIwZjRmZGM0NzAxYTljODVkMS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvaWNvbm9fNC0wMGVkYjBjZTM0YTI5Nzc0MzliYzVlNzNiM2I5ZGJhNC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvaWNvbm9fNS1hZWUwNjU2YjRmOTYwMGI4Y2Q0ZTI1MGE4MzVmNmRkMi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvaW1hZ2UzLTA1ZTkzNTM5N2E2MzQ3NWVkYmYyNDFjMjczN2M0OGY3LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9pbWFnZTQtMjE2OTZhZDBkOGRmOGE1YjgxYzQ0MzE4OWQxMzZlZjAuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2ltYWdlNS01MDJiMGJiYzkzN2M3MTkwYWU4NzFlYjUzNWJlNjJhNC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvaWNvbm9fMTQtNTA2NTBhMzQ1OGYzYzYwYjNiYzdjY2RmOTg2MGVhMzAucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2ljb25vXzE1LTRkOWJlZGIyY2U0MTIzZjMwZGVjMjQwMGQzNTQ1N2E1LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9pY29ub18xNi04NTAzZjNhOGJjY2Q5ZmY4ZWE3ZDliNzI1ZWNmZWQ2MC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJoaXBwby1jb21wb25lbnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlmcmFtZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXZpc2liaWxpdHktc2Vuc29yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9