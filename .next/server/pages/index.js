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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CYW5uZXIvYmFubmVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQmFubmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29udGFjdC9jb250YWN0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29udGFjdC9maWVsZFZhbGlkYXRpb25zLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29udGFjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0V4cGxvcmUvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRXhwbG9yZS9leHBsb3JlLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRXhwbG9yZS9leHBsb3JlSXRlbS9FeHBsb3JlSXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0V4cGxvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyL2hlYWRlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci9tb2JpbGUtbWVudS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci9tb2JpbGUtbWVudS9tb2JpbGVNZW51Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvT3VyU2VydmljZXMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvT3VyU2VydmljZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9PdXJTZXJ2aWNlcy9vdXJTZXJ2aWNlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL091clNlcnZpY2VzSXRlbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL091cldvcmsvTXlJZnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9PdXJXb3JrL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL091cldvcmsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9PdXJXb3JrL291cldvcmsubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UaHJlZS9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UaHJlZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RocmVlL3RocmVlLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGhyZWUvdGhyZWVJdGVtL1RocmVlSXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1dob1dlQXJlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvV2hvV2VBcmUvd2hvV2VBcmUubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Zb3VyRGF0YS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1lvdXJEYXRhL3lvdXJEYXRhLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW1hZ2VuZXMvaWNvbm9fMS5wbmciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbWFnZW5lcy9pY29ub18yLnBuZyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ltYWdlbmVzL2ljb25vXzMucG5nIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW1hZ2VuZXMvbG9nby5zdmciLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9pY29ucy9pY29ubzcucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvaWNvbnMvaWNvbm9fMTAucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvaWNvbnMvaWNvbm9fMTEucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvaWNvbnMvaWNvbm9fMTFfZGlmLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2ljb25zL2ljb25vXzEyLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2ljb25zL2ljb25vXzEyX2RpZi5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9pY29ucy9pY29ub18xMy5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9pY29ucy9pY29ub18xM19kaWYucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvaWNvbnMvaWNvbm9fNi5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9pY29ucy9pY29ub184LnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2ljb25zL2ljb25vXzkucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL1RyYW5zcGFyZW50LWxvZ28ucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2ljb25vXzQucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2ljb25vXzUucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2ltYWdlMy5qcGciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvaW1hZ2U0LmpwZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9pbWFnZTUuanBnIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Fzc2V0cy9pY29ucy9pY29ub18xNC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXNzZXRzL2ljb25zL2ljb25vXzE1LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hc3NldHMvaWNvbnMvaWNvbm9fMTYucG5nIiwid2VicGFjazovLy9leHRlcm5hbCBcImhpcHBvLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlmcmFtZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC12aXNpYmlsaXR5LXNlbnNvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkJhbm5lciIsInN0eWxlcyIsImNvbnRhaW5lciIsImNvbnRlbnQiLCJMb2dvIiwidGV4dCIsImJsYWNrX3RleHQiLCJyZXF1aXJlZCIsInZhbHVlIiwidW5kZWZpbmVkIiwiZW1haWwiLCJ0ZXN0IiwiQ29udGFjdCIsInRpdGxlIiwiZmlyc3RfdGl0bGUiLCJzZWNvbmRfdGl0bGUiLCJib3JkZXIiLCJuYW1lIiwidHlwZSIsImxhYmVsIiwidmFsaWRhdGlvbnMiLCJFWFBMT1JFX0RBVEEiLCJpbWFnZSIsImljb242IiwiaWNvbjciLCJpY29uOCIsImljb245IiwiaWNvbjEwIiwiRXhwbG9yZUl0ZW0iLCJleHBsb3JlRGF0YSIsImlzRWxlbWVudFZpc2libGUiLCJzZXRJc0VsZW1lbnRWaXNpYmxlIiwidXNlU3RhdGUiLCJvbkNoYW5nZVZpc2liaWxpdHkiLCJpc1Zpc2libGUiLCJpdGVtIiwiaGV4YWdvbiIsImxvZ28iLCJFeHBsb3JlIiwibWFwIiwiaW5kZXgiLCJNRU5VX0xJTktTIiwibGlua1RvIiwiSGVhZGVyIiwibWVudSIsImxpbmsiLCJNb2JpbGVNZW51IiwicHJvcHMiLCJtZW51SXRlbXMiLCJzdHlsZSIsIm1lbnVUb2dnbGUiLCJTRVJWSUNFU19EQVRBIiwiaWQiLCJpY29uMSIsImljb24yIiwiaWNvbjMiLCJPdXJTZXJ2aWNlcyIsIk91clNlcnZpY2VzSXRlbSIsInNlcnZpY2VzRGF0YSIsIml0ZW1faW1hZ2UiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJpdGVtX3RpdGxlIiwiaXRlbV9kZXNjcmlwdGlvbiIsIml0ZW1fdGV4dCIsIk15SWZyYW1lIiwidXJsIiwiREFTSEJPQVJEUyIsIk91cldvcmsiLCJkYXNoYm9hcmQiLCJoZWlnaHQiLCJUSFJFRV9EQVRBIiwiVGhyZWUiLCJzZWN0aW9uIiwiVGhyZWVJdGVtIiwidGhyZWVEYXRhIiwibG9nb19jb250YWluZXIiLCJibGFja19ib3giLCJhcnJvdyIsInRleHRfY29udGFpbmVyIiwiV2hvV2VBcmUiLCJpc0VsZW1lbnQxVmlzaWJsZSIsInNldElzRWxlbWVudDFWaXNpYmxlMSIsImlzRWxlbWVudDJWaXNpYmxlIiwic2V0SXNFbGVtZW50MlZpc2libGUyIiwib25DaGFuZ2VWaXNpYmlsaXR5MSIsIm9uQ2hhbmdlVmlzaWJpbGl0eTIiLCJmaXJzdF9zZWN0aW9uIiwiZmlyc3Rfb3ZlcmxheSIsInNlY3Rpb25faWNvbiIsInNlY3Rpb25fbG9nbyIsImljb25vNCIsImxvZ29fb25lIiwicGFyYWdyYXBoIiwiaW1hZ2U0IiwiaW1hZ2Vfb25lIiwiaW1hZ2UzIiwiaW1hZ2VfdHdvIiwiaWNvbm81IiwibG9nb190d28iLCJZb3VyRGF0YSIsImlzTGVmdEhvdmVyIiwic2V0SXNMZWZ0SG92ZXIiLCJpc1RvcEhvdmVyIiwic2V0SXNUb3BIb3ZlciIsImlzQm90dG9tSG92ZXIiLCJzZXRJc0JvdHRvbUhvdmVyIiwiaXRlbXNfd3JhcHBlciIsImhvdmVyX2VsZW1lbnQiLCJGaXJzdEljb25PcmFuZ2UiLCJTZWNvbmRJY29uT3JhbmdlIiwiVGhpcmRJY29uT3JhbmdlIiwicmhvbWJ1c19jb250YWluZXIiLCJyaG9tYnVzIiwibGVmdCIsInJob21idXNfaG92ZXIiLCJTZWNvbmRJY29uV2hpdGUiLCJpY29uIiwidG9wIiwiRmlyc3RJY29uV2hp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Ozs7OztBQ0FBLHNGOzs7Ozs7Ozs7OztBQ0FBLHNGOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcImJhbm5lcl9jb250YWluZXJfX2R1eUR6XCIsXG5cdFwiY29udGVudFwiOiBcImJhbm5lcl9jb250ZW50X18xcmxwZFwiLFxuXHRcInRleHRcIjogXCJiYW5uZXJfdGV4dF9fMm1uUU1cIixcblx0XCJibGFja190ZXh0XCI6IFwiYmFubmVyX2JsYWNrX3RleHRfX2l3MFBMXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG4vL1N0eWxlXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9iYW5uZXIubW9kdWxlLnNjc3MnO1xyXG4vL0ltYWdlXHJcbmltcG9ydCBMb2dvIGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL1RyYW5zcGFyZW50LWxvZ28ucG5nJ1xyXG5cclxuY29uc3QgQmFubmVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSBpZD17J2hvbWUnfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxpbWcgYWx0PXsnbG9nbyd9IHNyYz17TG9nb30vPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYmxhY2tfdGV4dH0+QmV0dGVyPC9zcGFuPjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PjxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmJsYWNrX3RleHR9PkRhdGEsPC9zcGFuPiBCZXR0ZXIgRGVjaXNpb25zPC9oMj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhbm5lciIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcImNvbnRhY3RfY29udGFpbmVyX18xdTQwelwiLFxuXHRcInRpdGxlXCI6IFwiY29udGFjdF90aXRsZV9fMjF0MkxcIixcblx0XCJmaXJzdF90aXRsZVwiOiBcImNvbnRhY3RfZmlyc3RfdGl0bGVfXzJWNVh6XCIsXG5cdFwic2Vjb25kX3RpdGxlXCI6IFwiY29udGFjdF9zZWNvbmRfdGl0bGVfXzNjcVJ2XCIsXG5cdFwiYm9yZGVyXCI6IFwiY29udGFjdF9ib3JkZXJfXzJLSmRqXCIsXG5cdFwiY3VzdG9tLWZvcm0tY2xhc3NcIjogXCJjb250YWN0X2N1c3RvbS1mb3JtLWNsYXNzX18yVXFmdVwiLFxuXHRcIml0ZW1cIjogXCJjb250YWN0X2l0ZW1fXzMtbGF2XCIsXG5cdFwiaW5wdXRcIjogXCJjb250YWN0X2lucHV0X18xYWRFalwiLFxuXHRcImVycm9yXCI6IFwiY29udGFjdF9lcnJvcl9fM0VIMmpcIixcblx0XCJpbnB1dF9ib3hcIjogXCJjb250YWN0X2lucHV0X2JveF9fN1d5YTVcIixcblx0XCJlcnJvcl9tZXNzYWdlXCI6IFwiY29udGFjdF9lcnJvcl9tZXNzYWdlX196YjJMV1wiLFxuXHRcInNlY3Rpb25cIjogXCJjb250YWN0X3NlY3Rpb25fXzJIQ0tJXCIsXG5cdFwiZm9ybVwiOiBcImNvbnRhY3RfZm9ybV9fMWRTZmdcIixcblx0XCJjb250YWN0LWJvcmRlclwiOiBcImNvbnRhY3RfY29udGFjdC1ib3JkZXJfXzJycDVKXCJcbn07XG4iLCJjb25zdCByZXF1aXJlZCA9IHZhbHVlID0+IHZhbHVlID8gdW5kZWZpbmVkIDogJ1JlcXVpcmVkJztcclxuXHJcbmNvbnN0IGVtYWlsID0gdmFsdWUgPT5cclxuICAgIHZhbHVlICYmICEvXltBLVowLTkuXyUrLV0rQFtBLVowLTkuLV0rXFwuW0EtWl17Miw0fSQvaS50ZXN0KHZhbHVlKSA/XHJcbiAgICAgICAgJ0ludmFsaWQgZW1haWwgYWRkcmVzcycgOiB1bmRlZmluZWQ7XHJcblxyXG5leHBvcnQge1xyXG4gICAgcmVxdWlyZWQsXHJcbiAgICBlbWFpbCxcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbi8vU3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9jb250YWN0Lm1vZHVsZS5zY3NzJztcclxuLy9GaWVsZHMgdmFsaWRhdGlvbnNcclxuaW1wb3J0IHsgcmVxdWlyZWQsIGVtYWlsIH0gZnJvbSAnLi9maWVsZFZhbGlkYXRpb25zJztcclxuaW1wb3J0IHsgRm9ybSB9IGZyb20gJ2hpcHBvLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgQ29udGFjdCA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9IGlkPXsnY29udGFjdCd9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5maXJzdF90aXRsZX0+Q09OVEFDVDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuc2Vjb25kX3RpdGxlfT5BTkQgR0VUIE1ZIFFVT1RFPC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9yZGVyfT5cclxuICAgICAgICAgICAgICAgIDxGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICduYW1lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnTmFtZSAoUmVxdWlyZWQpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zOiBbcmVxdWlyZWRdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY3VzdG9tZXJFbWFpbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0VtYWlsIChSZXF1aXJlZCknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbnM6IFtlbWFpbF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzdWJqZWN0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnU3ViamVjdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdtZXNzYWdlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0QXJlYScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ01lc3NhZ2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3NNZXNzYWdlPXsnWW91ciBtZXNzYWdlIGhhcyBiZWVuIHN1Y2Nlc3NmdWxseSBzZW50LiBXZSB3aWxsIGNvbnRhY3QgeW91IHZlcnkgc29vbiEnfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uRXJyb3JNZXNzYWdlPXsnUGxlYXNlIHRyeSBhZ2FpbiBpbiBzb21lIG1pbnV0ZXMnfVxyXG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbkxhYmVsPXsnU1VCTUlUJ31cclxuICAgICAgICAgICAgICAgICAgICBjdXN0b21DbGFzcz17J21iYW5hbHlzdC1jb250YWN0LWZvcm0nfVxyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsU2VydmljZVVSTD17J2h0dHBzOi8vdGhlaGlwcG9hcGkubmV0bGlmeS5hcHAvLm5ldGxpZnkvZnVuY3Rpb25zL2FwaS9tYmFuYWx5c3QtbWFpbCd9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RcclxuIiwiaW1wb3J0IGljb242IGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvaWNvbnMvaWNvbm9fNi5wbmcnO1xyXG5pbXBvcnQgaWNvbjcgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9pY29ucy9pY29ubzcucG5nJztcclxuaW1wb3J0IGljb244IGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvaWNvbnMvaWNvbm9fOC5wbmcnO1xyXG5pbXBvcnQgaWNvbjkgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9pY29ucy9pY29ub185LnBuZyc7XHJcbmltcG9ydCBpY29uMTAgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9pY29ucy9pY29ub18xMC5wbmcnO1xyXG5cclxuY29uc3QgRVhQTE9SRV9EQVRBID0gW1xyXG4gICAge1xyXG4gICAgICAgIGltYWdlOiBpY29uNixcclxuICAgICAgICB0ZXh0OiAnR2V0IHJlYWwgdGltZSB2aXNpYmlsaXR5IG9mIHlvdXIgYnVzaW5lc3MgS1BJcyBhbmQgc2F2ZSBzaWduaWZpY2FudCBjb3N0cyBieScgK1xyXG4gICAgICAgICAgICAnIHN3aXRjaGluZyBtYW51YWwgcmVwb3J0aW5nIGFjdGl2aXRpZXMgd2l0aCBmdWxseSBhdXRvbWF0ZWQgcmVwb3J0cyBhbmQgc2NoZWR1bGVkIHJlZnJlc2hlcy4nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpbWFnZTogaWNvbjcsXHJcbiAgICAgICAgdGV4dDogJ09mZmVycyBkYXRhIGFuYWx5c2lzIHdpdGhvdXQgdGhlIHJlcXVpcmVtZW50IG9mIHNwZWNpYWxpc2VkIHRlY2huaWNhbCBzdXBwb3J0LCcgK1xyXG4gICAgICAgICAgICAnIHdpdGggYSBzdHJvbmcsIGludHVpdGl2ZSBpbnRlcmZhY2UuJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW1hZ2U6IGljb244LFxyXG4gICAgICAgIHRleHQ6ICdTYXZlcyB5b3UgdGltZSB3aXRoIGN1c3RvbWlzZWQgaW5mb3JtYXRpb24gZGFzaGJvYXJkcywgd2hpY2ggYXJlIG1vdWxkZWQgdG8geW91cicgK1xyXG4gICAgICAgICAgICAnIG9yZ2FuaXNhdGlvblxcJ3Mgc3BlY2lmaWMgbmVlZHMuJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW1hZ2U6IGljb245LFxyXG4gICAgICAgIHRleHQ6ICdFbGltaW5hdGVzIHNwZWVkIGFuZCBtZW1vcnkgcmVzdHJpY3Rpb25zIHRoYW5rcyB0byBhIHJvYnVzdCBjbG91ZCBlbnZpcm9ubWVudCwnICtcclxuICAgICAgICAgICAgJyBlbmFibGluZyBkYXRhIHRvIGJlIGZvdW5kIGFuZCBhbmFseXNlZCByYXBpZGx5LicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGltYWdlOiBpY29uMTAsXHJcbiAgICAgICAgdGV4dDogJ0FsbG93cyB5b3UgdG8gdmlldyByZXBvcnRzIGluc3RhbnRseSBvbiBtdWx0aXBsZSB3ZWItY29ubmVjdGVkIGRldmljZXMsJyArXHJcbiAgICAgICAgICAgICcgaW5jbHVkaW5nIGlPUywgQW5kcm9pZCBhbmQgV2luZG93cy4nLFxyXG4gICAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCB7IEVYUExPUkVfREFUQSB9OyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcImV4cGxvcmVfY29udGFpbmVyX18xc3M2N1wiLFxuXHRcInRpdGxlXCI6IFwiZXhwbG9yZV90aXRsZV9fMXpyZXdcIixcblx0XCJjb250ZW50XCI6IFwiZXhwbG9yZV9jb250ZW50X18yRUxJU1wiLFxuXHRcIml0ZW1cIjogXCJleHBsb3JlX2l0ZW1fXzNsNmxxXCIsXG5cdFwiaGV4YWdvblwiOiBcImV4cGxvcmVfaGV4YWdvbl9fMmdDSGtcIixcblx0XCJsb2dvXCI6IFwiZXhwbG9yZV9sb2dvX18xcmRsb1wiLFxuXHRcInRleHRcIjogXCJleHBsb3JlX3RleHRfXzJkUFc4XCIsXG5cdFwidmlzaWJsZUNsYXNzXCI6IFwiZXhwbG9yZV92aXNpYmxlQ2xhc3NfX1NtNTR4XCIsXG5cdFwic2VjdGlvblwiOiBcImV4cGxvcmVfc2VjdGlvbl9fMUZxejdcIlxufTtcbiIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBWaXNpYmlsaXR5U2Vuc29yIGZyb20gJ3JlYWN0LXZpc2liaWxpdHktc2Vuc29yJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9leHBsb3JlLm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IEV4cGxvcmVJdGVtID0gKHtleHBsb3JlRGF0YX0pID0+IHtcclxuICAgIGNvbnN0IFtpc0VsZW1lbnRWaXNpYmxlLCBzZXRJc0VsZW1lbnRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IG9uQ2hhbmdlVmlzaWJpbGl0eSA9IChpc1Zpc2libGUpID0+IGlzVmlzaWJsZSA/IHNldElzRWxlbWVudFZpc2libGUodHJ1ZSkgOiBzZXRJc0VsZW1lbnRWaXNpYmxlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCB7aW1hZ2UsIHRleHR9ID0gZXhwbG9yZURhdGE7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8VmlzaWJpbGl0eVNlbnNvciBvbkNoYW5nZT17b25DaGFuZ2VWaXNpYmlsaXR5fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2lzRWxlbWVudFZpc2libGUgPyBgJHtzdHlsZXMuaXRlbX0gdmlzaWJsZUNsYXNzYCA6IGAke3N0eWxlcy5pdGVtfWB9YH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhleGFnb259PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZX0gYWx0PXsnbG9nbyd9IGNsYXNzTmFtZT17c3R5bGVzLmxvZ299Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+e3RleHR9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1Zpc2liaWxpdHlTZW5zb3I+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeHBsb3JlSXRlbSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbi8vU3R5bGVcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2V4cGxvcmUubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBFeHBsb3JlSXRlbSBmcm9tICcuL2V4cGxvcmVJdGVtL0V4cGxvcmVJdGVtJztcclxuaW1wb3J0IHtFWFBMT1JFX0RBVEF9IGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbmNvbnN0IEV4cGxvcmUgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5XaHkgY2hvb3NlIGEgQkkgc29sdXRpb24/PC9oMT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIHtFWFBMT1JFX0RBVEEubWFwKCh2YWx1ZSwgaW5kZXgpID0+IDxFeHBsb3JlSXRlbSBleHBsb3JlRGF0YT17dmFsdWV9IGtleT17dmFsdWUudGV4dH0vPil9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXhwbG9yZSIsImNvbnN0IE1FTlVfTElOS1MgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6ICdIT01FJyxcclxuICAgICAgICBsaW5rVG86ICcjaG9tZSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6ICdTRVJWSUNFUycsXHJcbiAgICAgICAgbGlua1RvOiAnI3NlcnZpY2VzJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYWJlbDogJ1dPUksnLFxyXG4gICAgICAgIGxpbmtUbzogJyN3b3JrJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYWJlbDogJ0NPTlRBQ1QnLFxyXG4gICAgICAgIGxpbmtUbzogJyNjb250YWN0J1xyXG4gICAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBNRU5VX0xJTktTLFxyXG59IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiaGVhZGVyX2NvbnRhaW5lcl9fMUhpTjZcIixcblx0XCJtZW51XCI6IFwiaGVhZGVyX21lbnVfXzIzd0hiXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG4vL1N0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaGVhZGVyLm1vZHVsZS5zY3NzJztcclxuLy9Db25zdGFudHNcclxuaW1wb3J0IHsgTUVOVV9MSU5LUyB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuLy9Db21wb25lbnRzXHJcbmltcG9ydCBNb2JpbGVNZW51IGZyb20gJy4vbW9iaWxlLW1lbnUnO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG5cclxuICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgICAgICAvLyBDbGllbnQtc2lkZS1vbmx5IGNvZGVcclxuICAgICAgICBjb25zdCBzdGlja3lGdW5jdGlvbiA9ICgpID0+IHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgbGV0IG5hdmlnYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCduYXYnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChuYXZpZ2F0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uLmNsYXNzTGlzdC50b2dnbGUoJ3N0aWNreScsIHdpbmRvdy5zY3JvbGxZID4gMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHN0aWNreUZ1bmN0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bmF2IHJvbGU9eyduYXZpZ2F0aW9uJ30gY2xhc3NOYW1lPXtgJHtzdHlsZXMuY29udGFpbmVyfSBoZWFkZXItd3JhcHBlcmAgfT5cclxuICAgICAgICAgICAgPHVsIGlkPXsnbGFyZ2Utc2NyZWVuLW1lbnUnfSBjbGFzc05hbWU9e3N0eWxlcy5tZW51fT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBNRU5VX0xJTktTLm1hcCgobGluayxpbmRleCkgPT4gPGEga2V5PXtpbmRleH0gaHJlZj17bGluay5saW5rVG99PjxsaT57bGluay5sYWJlbH08L2xpPjwvYT4pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxNb2JpbGVNZW51IG1lbnVJdGVtcz17TUVOVV9MSU5LU30gLz5cclxuICAgICAgICA8L25hdj5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG4vL1N0eWxlXHJcbmltcG9ydCBzdHlsZSBmcm9tICcuL21vYmlsZU1lbnUubW9kdWxlLnNjc3MnO1xyXG5cclxuY29uc3QgTW9iaWxlTWVudSA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgeyBtZW51SXRlbXMgfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLm1lbnVUb2dnbGV9PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz5cclxuICAgICAgICAgICAgPHNwYW4gLz5cclxuICAgICAgICAgICAgPHNwYW4gLz5cclxuICAgICAgICAgICAgPHNwYW4gLz5cclxuICAgICAgICAgICAgPHVsIGlkPXsnbWVudSd9IGNsYXNzTmFtZT17c3R5bGUubWVudX0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVudUl0ZW1zLm1hcCgobGluayxpbmRleCkgPT4gPGEga2V5PXtpbmRleH0gaHJlZj17bGluay5saW5rVG99PjxsaT57bGluay5sYWJlbH08L2xpPjwvYT4pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2JpbGVNZW51OyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1lbnVUb2dnbGVcIjogXCJtb2JpbGVNZW51X21lbnVUb2dnbGVfXzJKVmtTXCIsXG5cdFwibWVudVwiOiBcIm1vYmlsZU1lbnVfbWVudV9fal9SSEtcIlxufTtcbiIsImltcG9ydCBpY29uMSBmcm9tICcuLi9pbWFnZW5lcy9pY29ub18xLnBuZyc7XHJcbmltcG9ydCBpY29uMiBmcm9tICcuLi9pbWFnZW5lcy9pY29ub18yLnBuZyc7XHJcbmltcG9ydCBpY29uMyBmcm9tICcuLi9pbWFnZW5lcy9pY29ub18zLnBuZyc7XHJcblxyXG5jb25zdCBTRVJWSUNFU19EQVRBID0gW1xyXG4gICAge1xyXG4gICAgICBpZDogJ2JveDEnLFxyXG4gICAgICBpbWFnZTogaWNvbjEsXHJcbiAgICAgIHRpdGxlOiAnUG93ZXIgQkkgQ29uc3VsdGluZycsXHJcbiAgICAgIHRleHQ6ICdXZSB3b3JrIHdpdGggUG93ZXIgQkkgdG8gY3JlYXRlIHBvd2VyZnVsIGF1dG9tYXRlZCByZXBvcnRzJyArXHJcbiAgICAgICAgICAnIHRvIHZpc3VhbGlzZSB5b3VyIGJ1c2luZXNzIGRhdGEsIGNhcHR1cmUga2V5IGluc2lnaHRzIGluIHJlYWwgdGltZSBhbmQgaW1wcm92ZSBkZWNpc2lvbiBtYWtpbmcuICcgK1xyXG4gICAgICAgICAgJ0FzIGEgYmVzdC1pbi1jbGFzcyBCSSBwbGF0Zm9ybSwgUG93ZXIgQkkgYWxsb3dzIHlvdSB0byBjb25uZWN0IHRvIGRhdGEgc3RvcmVkIGluIG11bHRpcGxlIHNvdXJjZXMnICtcclxuICAgICAgICAgICcgYW5kIHNoYXJlIGFuZCBjb2xsYWJvcmF0ZSBhbW9uZyB5b3VyIHRlYW0gbWVtYmVycywgZW5zdXJpbmcgeW91ciBkYXRhIGhhcyB0aGUgbWF4aW11bSBpbXBhY3QuJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnYm94MicsXHJcbiAgICAgIGltYWdlOiBpY29uMixcclxuICAgICAgdGl0bGU6ICdCdXNpbmVzcyBBbmFseXNpcycsXHJcbiAgICAgIHRleHQ6ICdXZSB1c2Ugb3VyIHdlYWx0aCBvZiBleHBlcmllbmNlIGluIEJJIGFuZCBjb21tZXJjaWFsIGFjdW1lbiB0byBoZWxwIHlvdXInICtcclxuICAgICAgICAgICcgYnVzaW5lc3MgaWRlbnRpZnkgYW5kIHVuZGVyc3RhbmQgaXRzIGtleSBwZXJmb3JtYW5jZSBkcml2ZXJzLCBzZXQgbWVhbmluZ2Z1bCB0YXJnZXRzLCcgK1xyXG4gICAgICAgICAgJyBzb2x2ZSBwcm9ibGVtcyB3aXRoIGRhdGEgYW5kIHN1cHBvcnQgbWFqb3IgYnVzaW5lc3MgZGVjaXNpb25zLCB3b3JraW5nIGNsb3NlbHkgd2l0aCBwcm9jZXNzJyArXHJcbiAgICAgICAgICAnIG93bmVycyB0byBtYWtlIHRoZSBtb3N0IG9mIHlvdXIgZGF0YS4nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6ICdib3gzJyxcclxuICAgICAgaW1hZ2U6IGljb24zLFxyXG4gICAgICB0aXRsZTogJ0JJIHN1cHBvcnQnLFxyXG4gICAgICB0ZXh0OiAnV2Ugb2ZmZXIgZW5kLXRvLWVuZCBzdXBwb3J0IHRvIGNvbXBhbmllcyBhbHJlYWR5IG9wZXJhdGluZyBhIFBvd2VyIEJJIHNvbHV0aW9uLCcgK1xyXG4gICAgICAgICAgJyBleHBlcnQgY29uc3VsdGFuY3kgb24gUG93ZXIgQkkgYmVzdCBwcmFjdGljZXMgYW5kIHRyYWluaW5nIHNlc3Npb25zIGFsbG93aW5nIHlvdXIgYnVzaW5lc3MnICtcclxuICAgICAgICAgICcgdG8gcmVhbGlzZSBpdHMgZnVsbCBCSSBwb3RlbnRpYWwuJyxcclxuICAgIH0sXHJcbl07XHJcblxyXG5leHBvcnQgeyBTRVJWSUNFU19EQVRBIH07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL291clNlcnZpY2VzLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0ICcuLi9pbWFnZW5lcy9sb2dvLnN2Zyc7XHJcbmltcG9ydCBPdXJTZXJ2aWNlc0l0ZW0gZnJvbSAnLi4vT3VyU2VydmljZXNJdGVtJztcclxuaW1wb3J0IHsgU0VSVklDRVNfREFUQSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgT3VyU2VydmljZXMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnc2ltcGxlLXNlY3Rpb24td3JhcHBlcid9IGlkPXsnc2VydmljZXMnfT5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17J3NlY3Rpb24tc3VidGl0bGUnfT5PVVIgU0VSVklDRVM8L2gyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICB7U0VSVklDRVNfREFUQS5tYXAoKHZhbHVlLCBpbmRleCkgPT4gPE91clNlcnZpY2VzSXRlbSBzZXJ2aWNlc0RhdGE9e3ZhbHVlfSBrZXk9e3ZhbHVlLnRpdGxlfS8+KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPdXJTZXJ2aWNlczsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJvdXJTZXJ2aWNlc19jb250YWluZXJfXzNtSHZzXCIsXG5cdFwiaXRlbVwiOiBcIm91clNlcnZpY2VzX2l0ZW1fXzEwcW9MXCIsXG5cdFwiaXRlbV9pbWFnZVwiOiBcIm91clNlcnZpY2VzX2l0ZW1faW1hZ2VfXzFKbm9HXCIsXG5cdFwiaXRlbV9kZXNjcmlwdGlvblwiOiBcIm91clNlcnZpY2VzX2l0ZW1fZGVzY3JpcHRpb25fXzFKdDc4XCIsXG5cdFwiaXRlbV90aXRsZVwiOiBcIm91clNlcnZpY2VzX2l0ZW1fdGl0bGVfXzI2RURTXCIsXG5cdFwiaXRlbV90ZXh0XCI6IFwib3VyU2VydmljZXNfaXRlbV90ZXh0X18xN0ZSb1wiLFxuXHRcInZpc2libGVDbGFzc1wiOiBcIm91clNlcnZpY2VzX3Zpc2libGVDbGFzc19fM3NyNFhcIlxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFZpc2liaWxpdHlTZW5zb3IgZnJvbSAncmVhY3QtdmlzaWJpbGl0eS1zZW5zb3InO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL091clNlcnZpY2VzL291clNlcnZpY2VzLm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IE91clNlcnZpY2VzSXRlbSA9ICh7c2VydmljZXNEYXRhfSkgPT4ge1xyXG4gICAgY29uc3QgW2lzRWxlbWVudFZpc2libGUsIHNldElzRWxlbWVudFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Qgb25DaGFuZ2VWaXNpYmlsaXR5ID0gKGlzVmlzaWJsZSkgPT4gaXNWaXNpYmxlID8gc2V0SXNFbGVtZW50VmlzaWJsZSh0cnVlKSA6IHNldElzRWxlbWVudFZpc2libGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IHtpbWFnZSwgdGl0bGUsIHRleHQsIGlkfSA9IHNlcnZpY2VzRGF0YTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxWaXNpYmlsaXR5U2Vuc29yIG9uQ2hhbmdlPXtvbkNoYW5nZVZpc2liaWxpdHl9PlxyXG4gICAgICAgICAgICA8ZGl2IGlkPXtpZH0gY2xhc3NOYW1lPXtgJHtpc0VsZW1lbnRWaXNpYmxlID8gYCR7c3R5bGVzLml0ZW19IHZpc2libGVDbGFzc2AgOiBgJHtzdHlsZXMuaXRlbX1gfWB9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pdGVtX2ltYWdlfSBzdHlsZT17e2JhY2tncm91bmRJbWFnZTpgdXJsKCR7aW1hZ2V9KWB9fS8+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMuaXRlbV90aXRsZX0+e3RpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLml0ZW1fZGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLml0ZW1fdGV4dH0+e3RleHR9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvVmlzaWJpbGl0eVNlbnNvcj5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE91clNlcnZpY2VzSXRlbSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJZnJhbWUgZnJvbSAncmVhY3QtaWZyYW1lJztcclxuXHJcbmNvbnN0IE15SWZyYW1lID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7IHVybCwgaWQgfSA9IHByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8SWZyYW1lIHVybD17dXJsfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCI5OSVcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICBpZD17aWR9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteS1pZnJhbWVcIlxyXG4gICAgICAgICAgICAgICAgZGlzcGxheT1cImluaXRpYWxcIlxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXHJcbiAgICAgICAgLz5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15SWZyYW1lIiwiY29uc3QgREFTSEJPQVJEUyA9IFtcclxuICAgIHtcclxuICAgICAgICB1cmw6ICdodHRwczovL2FwcC5wb3dlcmJpLmNvbS92aWV3P3I9ZXlKcklqb2lNVFpsTkdSaE5HUXRZV1ZqTmkwME5HWmlMV0UyTmpjdE1tRXhZMk14TldVMk56VTVJaXdpZENJNklqSmtNV0UyWWpaa0xXWTVNMlV0TkRKbFl5MDRZelF5TFRoa1lXRTVOREF6WkRCa09DSjkmcGFnZU5hbWU9UmVwb3J0U2VjdGlvbjEnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1cmw6ICdodHRwczovL2FwcC5wb3dlcmJpLmNvbS92aWV3P3I9ZXlKcklqb2lOVEZoWmpJNU5tTXRZMk13WmkwME16ZzNMVGcxWVRrdFltTXlNV1F3WVdVeE1qRXpJaXdpZENJNklqSmtNV0UyWWpaa0xXWTVNMlV0TkRKbFl5MDRZelF5TFRoa1lXRTVOREF6WkRCa09DSjknLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1cmw6ICdodHRwczovL2FwcC5wb3dlcmJpLmNvbS92aWV3P3I9ZXlKcklqb2laV000T1dJNU1qWXRaREF3TVMwME1tRXpMVGs0WVRVdFlUQXhOamcyTkdWa05UZ3hJaXdpZENJNklqSmtNV0UyWWpaa0xXWTVNMlV0TkRKbFl5MDRZelF5TFRoa1lXRTVOREF6WkRCa09DSjknLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1cmw6ICdodHRwczovL2FwcC5wb3dlcmJpLmNvbS92aWV3P3I9ZXlKcklqb2lNakl6WXpRME56a3RNMkl4WkMwME56RmpMVGszTlRjdE1UQTBNVGxoTXpKaE5UY3hJaXdpZENJNklqSmtNV0UyWWpaa0xXWTVNMlV0TkRKbFl5MDRZelF5TFRoa1lXRTVOREF6WkRCa09DSjkmcGFnZU5hbWU9UmVwb3J0U2VjdGlvbjQyMTRmMWViZGFmZGIwN2Y1NTg4JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9hcHAucG93ZXJiaS5jb20vdmlldz9yPWV5SnJJam9pTUdNMlpEVTRZMkl0TnpGaU1pMDBaRFZtTFRnMU1HSXRPV0ZsTldJNFpUVXlaV0l6SWl3aWRDSTZJakprTVdFMllqWmtMV1k1TTJVdE5ESmxZeTA0WXpReUxUaGtZV0U1TkRBelpEQmtPQ0o5JnBhZ2VOYW1lPVJlcG9ydFNlY3Rpb25jNGJhNjFhNzY1YjA5YjAwNjI2NycsXHJcbiAgICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IHtcclxuICAgIERBU0hCT0FSRFNcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbi8vU3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9vdXJXb3JrLm1vZHVsZS5zY3NzJztcclxuLy9Db25zdGFudHNcclxuaW1wb3J0IHsgREFTSEJPQVJEUyB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuLy9Db21wb25lbnRcclxuaW1wb3J0ICdyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsL2xpYi9zdHlsZXMvY2Fyb3VzZWwubWluLmNzcyc7IC8vIHJlcXVpcmVzIGEgbG9hZGVyXHJcbmltcG9ydCBNeUlmcmFtZSBmcm9tICcuL015SWZyYW1lJztcclxuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tICdyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsJztcclxuXHJcbmNvbnN0IE91cldvcmsgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnc2ltcGxlLXNlY3Rpb24td3JhcHBlcid9IGlkPXsnd29yayd9PlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXsnc2VjdGlvbi1zdWJ0aXRsZSd9Pk9VUiBXT1JLPC9oMj5cclxuICAgICAgICAgICAgPENhcm91c2VsXHJcbiAgICAgICAgICAgICAgICBpbmZpbml0ZUxvb3A9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBzaG93U3RhdHVzPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIHNob3dUaHVtYnM9e2ZhbHNlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgREFTSEJPQVJEUy5tYXAoKGRhc2hib2FyZCwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gc3R5bGU9e3toZWlnaHQ6ICcxMDAlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE15SWZyYW1lIHVybD17ZGFzaGJvYXJkLnVybH0gaWQ9e2luZGV4fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+QXJlIHlvdSByZWFkeSB0byBhY2NlbGVyYXRlIHlvdXIgYnVzaW5lc3MgZ3Jvd3RoPzxici8+IEdldCBpbiB0b3VjaCB0b1xyXG4gICAgICAgICAgICAgICAgZGlzY292ZXIgbW9yZSBhYm91dCB3aGF0IE1CQW5hbHlzdCBjb3VsZCBkbyBmb3IgeW91ciBidXNpbmVzcy48L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPdXJXb3JrOyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRleHRcIjogXCJvdXJXb3JrX3RleHRfX09FSnVnXCJcbn07XG4iLCJpbXBvcnQgaWNvbjEgZnJvbSAnLi4vLi4vc3JjL2NvbXBvbmVudHMvYXNzZXRzL2ljb25zL2ljb25vXzE0LnBuZyc7XHJcbmltcG9ydCBpY29uMiBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9hc3NldHMvaWNvbnMvaWNvbm9fMTUucG5nJztcclxuaW1wb3J0IGljb24zIGZyb20gJy4uLy4uL3NyYy9jb21wb25lbnRzL2Fzc2V0cy9pY29ucy9pY29ub18xNi5wbmcnO1xyXG5cclxuY29uc3QgVEhSRUVfREFUQSA9IFtcclxuICAgIHtcclxuICAgICAgICBpbWFnZTogaWNvbjEsXHJcbiAgICAgICAgdGV4dDogJ01hbmFnZSBpbnZlbnRvcnkga2V5IG1ldHJpY3Mgc3VjaCBhcyBBZ2VkIFN0b2NrLCBJbnZlbnRvcnkgVHVybm92ZXIsIEF2YWlsYWJpbGl0eSwnICtcclxuICAgICAgICAgICAgJyBmYXN0ZXN0IG1vdmluZyBpbnZlbnRvcnkgaXRlbXMgYW5kIG90aGVycy4nLFxyXG4gICAgICAgIGlkOiAnYm94JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW1hZ2U6IGljb24yLFxyXG4gICAgICAgIHRleHQ6ICdMaW5rIGludmVudG9yeSBkYXRhIHRvIHNhbGVzIHBlcmZvcm1hbmNlIHRvIGZvcmVjYXN0IGludmVudG9yeSBwdXJjaGFzZXMgYW5kJyArXHJcbiAgICAgICAgICAgICcgaGVhbHRoeSBzdG9jayBsZXZlbHMnLFxyXG4gICAgICAgIGlkOiAnYmxhY2stYm94JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW1hZ2U6IGljb24zLFxyXG4gICAgICAgIHRleHQ6ICdWaXN1YWxpc2Ugb3ZlcmFsbCBTdXBwbHkgcGVyZm9ybWFuY2UgY2hhaW4gdGhyb3VnaCB1cGRhdGVkIGRhdGEgZGlyZWN0bHkgY29ubmVjdGVkJyArXHJcbiAgICAgICAgICAgICcgdG8geW91ciBpbnZlbnRvcnkgbWFuYWdlbWVudCBzeXN0ZW1zJyxcclxuICAgICAgICBpZDogJ2JveCcsXHJcbiAgICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IHsgVEhSRUVfREFUQSB9OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUaHJlZUl0ZW0gZnJvbSAnLi90aHJlZUl0ZW0vVGhyZWVJdGVtJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3RocmVlLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgVEhSRUVfREFUQSB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcblxyXG5jb25zdCBUaHJlZSA9ICgpID0+IHtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb259PlxyXG4gICAgICAgICAgICB7VEhSRUVfREFUQS5tYXAoKHZhbHVlLCBpbmRleCkgPT4gPFRocmVlSXRlbSAgdGhyZWVEYXRhPXt2YWx1ZX0ga2V5PXt2YWx1ZS50ZXh0fS8+KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRocmVlOyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInNlY3Rpb25cIjogXCJ0aHJlZV9zZWN0aW9uX192aHZaZlwiLFxuXHRcImJsYWNrX2JveFwiOiBcInRocmVlX2JsYWNrX2JveF9fMXdLTk9cIixcblx0XCJhcnJvd1wiOiBcInRocmVlX2Fycm93X18yeGU1TFwiLFxuXHRcImxvZ29cIjogXCJ0aHJlZV9sb2dvX19PYURWZVwiLFxuXHRcInRleHRfY29udGFpbmVyXCI6IFwidGhyZWVfdGV4dF9jb250YWluZXJfXzFsNU5WXCIsXG5cdFwidGV4dFwiOiBcInRocmVlX3RleHRfXzN4b3FJXCIsXG5cdFwibG9nb19jb250YWluZXJcIjogXCJ0aHJlZV9sb2dvX2NvbnRhaW5lcl9fMi1aMmdcIixcblx0XCJ2aXNpYmxlQ2xhc3NcIjogXCJ0aHJlZV92aXNpYmxlQ2xhc3NfX2Zhc0piXCIsXG5cdFwidGhyZWUtYXJyb3dcIjogXCJ0aHJlZV90aHJlZS1hcnJvd19fM0NXcXFcIlxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFZpc2liaWxpdHlTZW5zb3IgZnJvbSAncmVhY3QtdmlzaWJpbGl0eS1zZW5zb3InO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3RocmVlLm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IFRocmVlSXRlbSA9ICh7dGhyZWVEYXRhfSkgPT4ge1xyXG4gICAgY29uc3QgW2lzRWxlbWVudFZpc2libGUsIHNldElzRWxlbWVudFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Qgb25DaGFuZ2VWaXNpYmlsaXR5ID0gKGlzVmlzaWJsZSkgPT4gaXNWaXNpYmxlID8gc2V0SXNFbGVtZW50VmlzaWJsZSh0cnVlKSA6IHNldElzRWxlbWVudFZpc2libGUoZmFsc2UpO1xyXG5cclxuXHJcbiAgICBjb25zdCB7aWQsIGltYWdlLCB0ZXh0fSA9IHRocmVlRGF0YTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFZpc2liaWxpdHlTZW5zb3Igb25DaGFuZ2U9e29uQ2hhbmdlVmlzaWJpbGl0eX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtpZCA9PT0gJ2JsYWNrLWJveCcgPyBgJHtzdHlsZXMubG9nb19jb250YWluZXJ9ICR7c3R5bGVzLmJsYWNrX2JveH1gICA6IGAke3N0eWxlcy5sb2dvX2NvbnRhaW5lcn1gfWB9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBhbHQ9eydsb2dvJ30gc3JjPXtpbWFnZX0gY2xhc3NOYW1lPXtzdHlsZXMubG9nb30gaWQ9e2lkfS8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFycm93fSBpZD17aWR9IC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHRfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT57dGV4dH08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9WaXNpYmlsaXR5U2Vuc29yPlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGhyZWVJdGVtOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFZpc2liaWxpdHlTZW5zb3IgZnJvbSAncmVhY3QtdmlzaWJpbGl0eS1zZW5zb3InO1xyXG4vL1N0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vd2hvV2VBcmUubW9kdWxlLnNjc3MnO1xyXG4vL0ltYWdlc1xyXG5pbXBvcnQgaWNvbm81IGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2ljb25vXzUucG5nJztcclxuaW1wb3J0IGljb25vNCBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9pY29ub180LnBuZyc7XHJcbmltcG9ydCBpbWFnZTQgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9pbWFnZXMvaW1hZ2U0LmpwZyc7XHJcbmltcG9ydCBpbWFnZTMgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9pbWFnZXMvaW1hZ2UzLmpwZyc7XHJcblxyXG5jb25zdCBXaG9XZUFyZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtpc0VsZW1lbnQxVmlzaWJsZSwgc2V0SXNFbGVtZW50MVZpc2libGUxXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtpc0VsZW1lbnQyVmlzaWJsZSwgc2V0SXNFbGVtZW50MlZpc2libGUyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IG9uQ2hhbmdlVmlzaWJpbGl0eTEgPSAoaXNWaXNpYmxlKSA9PiBpc1Zpc2libGUgPyBzZXRJc0VsZW1lbnQxVmlzaWJsZTEodHJ1ZSkgOiBzZXRJc0VsZW1lbnQxVmlzaWJsZTEoZmFsc2UpO1xyXG4gICAgY29uc3Qgb25DaGFuZ2VWaXNpYmlsaXR5MiA9IChpc1Zpc2libGUpID0+IGlzVmlzaWJsZSA/IHNldElzRWxlbWVudDJWaXNpYmxlMih0cnVlKSA6IHNldElzRWxlbWVudDJWaXNpYmxlMihmYWxzZSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuZmlyc3Rfc2VjdGlvbn0gJHtzdHlsZXMuc2VjdGlvbn1gfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmlyc3Rfb3ZlcmxheX0vPlxyXG4gICAgICAgICAgICAgICAgPGgxPldITyBXRSBBUkU8L2gxPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+V2UgYXJlIGNvbW1pdHRlZCB0byBoZWxwaW5nIGJ1c2luZXNzZXMgbWFrZSBiZXR0ZXJcclxuICAgICAgICAgICAgICAgICAgICBkZWNpc2lvbnMgdXNpbmcgZGF0YS4gT3VyIGV4cGVydCB0ZWFtIHdpbGwgYmVjb21lIHlvdXIgdHJ1c3RlZCBhZHZpc2VyIG9uIGV2ZXJ5dGhpbmcgZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbWJpbmluZyBwYXNzaW9uLCBrbm93bGVkZ2UgYW5kIGV4cGVyaWVuY2UgdG8gdHJhbnNmb3JtIHRoZSB3YXkgeW91ciBidXNpbmVzcyBkZWFscyB3aXRoIGRhdGEuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8VmlzaWJpbGl0eVNlbnNvciBvbkNoYW5nZT17b25DaGFuZ2VWaXNpYmlsaXR5MX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7aXNFbGVtZW50MVZpc2libGUgPyBgJHtzdHlsZXMuc2VjdGlvbl9pY29ufSAke3N0eWxlcy5zZWN0aW9ufSB2aXNpYmxlQ2xhc3NgIDogYCR7c3R5bGVzLnNlY3Rpb25faWNvbn0gJHtzdHlsZXMuc2VjdGlvbn1gfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VjdGlvbl9sb2dvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBhbHQ9eydsb2dvNCd9IHNyYz17aWNvbm80fSBjbGFzc05hbWU9e3N0eWxlcy5sb2dvX29uZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wYXJhZ3JhcGh9PldlIHByb3ZpZGUgZW5kIHRvIGVuZCBCSSBzZXJ2aWNlcyB0YWlsb3JlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gZml0IHlvdXIgY29tcGFueeKAmXMgaW5kaXZpZHVhbCBuZWVkcy48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBhbHQ9eydpbWFnZTQnfSBzcmM9e2ltYWdlNH0gY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2Vfb25lfS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9WaXNpYmlsaXR5U2Vuc29yPlxyXG4gICAgICAgICAgICA8VmlzaWJpbGl0eVNlbnNvciBvbkNoYW5nZT17b25DaGFuZ2VWaXNpYmlsaXR5Mn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7aXNFbGVtZW50MlZpc2libGUgPyBgJHtzdHlsZXMuc2VjdGlvbl9pY29ufSAke3N0eWxlcy5zZWN0aW9ufSB2aXNpYmxlQ2xhc3NgIDogYCR7c3R5bGVzLnNlY3Rpb25faWNvbn0gJHtzdHlsZXMuc2VjdGlvbn1gfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PXsnaW1hZ2UzJ30gc3JjPXtpbWFnZTN9IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX3R3b30vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VjdGlvbl9sb2dvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBhbHQ9eydsb2dvNSd9IHNyYz17aWNvbm81fSBjbGFzc05hbWU9e3N0eWxlcy5sb2dvX3R3b30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wYXJhZ3JhcGh9PldlIGFyZSBhIGJvdXRpcXVlIGRhdGEgYW5hbHl0aWNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdWx0aW5nIGZpcm0gYmFzZWQgaW4gTWVsYm91cm5lLCBBdXN0cmFsaWEgd2l0aCBleHRlbnNpdmUgZXhwZXJpZW5jZSB3b3JraW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdGVseSBpbiBkYXRhIHByb2plY3RzIGFyb3VuZCB0aGUgd29ybGQuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvVmlzaWJpbGl0eVNlbnNvcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdob1dlQXJlIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwid2hvV2VBcmVfY29udGFpbmVyX19qanB4RVwiLFxuXHRcInNlY3Rpb25cIjogXCJ3aG9XZUFyZV9zZWN0aW9uX18xamhGOFwiLFxuXHRcImZpcnN0X292ZXJsYXlcIjogXCJ3aG9XZUFyZV9maXJzdF9vdmVybGF5X19wYWdSbFwiLFxuXHRcImZpcnN0X3NlY3Rpb25cIjogXCJ3aG9XZUFyZV9maXJzdF9zZWN0aW9uX18yLUpiQlwiLFxuXHRcInRleHRcIjogXCJ3aG9XZUFyZV90ZXh0X18yd1BodlwiLFxuXHRcInRleHRfc1wiOiBcIndob1dlQXJlX3RleHRfc19fM2lHQmdcIixcblx0XCJzZWN0aW9uX2ljb25cIjogXCJ3aG9XZUFyZV9zZWN0aW9uX2ljb25fXzNGa2RIXCIsXG5cdFwiaW1hZ2VfdHdvXCI6IFwid2hvV2VBcmVfaW1hZ2VfdHdvX18ya0wzVFwiLFxuXHRcImltYWdlX29uZVwiOiBcIndob1dlQXJlX2ltYWdlX29uZV9fM29DWmVcIixcblx0XCJsb2dvX29uZVwiOiBcIndob1dlQXJlX2xvZ29fb25lX18zaWx2TFwiLFxuXHRcImxvZ29fdHdvXCI6IFwid2hvV2VBcmVfbG9nb190d29fXzJtN2tvXCIsXG5cdFwicGFyYWdyYXBoXCI6IFwid2hvV2VBcmVfcGFyYWdyYXBoX18xRjRWS1wiLFxuXHRcInNlY3Rpb25fbG9nb1wiOiBcIndob1dlQXJlX3NlY3Rpb25fbG9nb19fMTJidGRcIixcblx0XCJ2aXNpYmxlQ2xhc3NcIjogXCJ3aG9XZUFyZV92aXNpYmxlQ2xhc3NfX3EyYkVFXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbi8vY3NzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi95b3VyRGF0YS5tb2R1bGUuc2Nzcyc7XHJcbi8vSW1hZ2VzXHJcbmltcG9ydCBGaXJzdEljb25XaGl0ZSBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2ljb25zL2ljb25vXzExX2RpZi5wbmcnO1xyXG5pbXBvcnQgU2Vjb25kSWNvbldoaXRlIGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvaWNvbnMvaWNvbm9fMTJfZGlmLnBuZydcclxuaW1wb3J0IFRoaXJkSWNvbldoaXRlIGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvaWNvbnMvaWNvbm9fMTNfZGlmLnBuZydcclxuaW1wb3J0IEZpcnN0SWNvbk9yYW5nZSBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2ljb25zL2ljb25vXzExLnBuZydcclxuaW1wb3J0IFNlY29uZEljb25PcmFuZ2UgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9pY29ucy9pY29ub18xMi5wbmcnXHJcbmltcG9ydCBUaGlyZEljb25PcmFuZ2UgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9pY29ucy9pY29ub18xMy5wbmcnXHJcbmltcG9ydCBJbWFnZSBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9pbWFnZTUuanBnJ1xyXG5cclxuY29uc3QgWW91ckRhdGEgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbaXNMZWZ0SG92ZXIsIHNldElzTGVmdEhvdmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtpc1RvcEhvdmVyLCBzZXRJc1RvcEhvdmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtpc0JvdHRvbUhvdmVyLCBzZXRJc0JvdHRvbUhvdmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5FWFBMT1JFIFlPVVIgREFUQTwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLml0ZW1zX3dyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpc1RvcEhvdmVyID8gYCR7c3R5bGVzLml0ZW19ICR7c3R5bGVzLmhvdmVyX2VsZW1lbnR9YCA6IGAke3N0eWxlcy5pdGVtfWB9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRJc1RvcEhvdmVyKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldElzVG9wSG92ZXIoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBhbHQ9eyd0b3AtaWNvbid9IHNyYz17Rmlyc3RJY29uT3JhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5TYXkgZ29vZGJ5ZSB0byBjbHVua3kgc3ByZWFkc2hlZXRzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljIHZpZXdzIGFuZCBtYW51YWxseSBjb21waWxlZCByZXBvcnRzIHByb25lIHRvIGh1bWFuIGVycm9yPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpc0xlZnRIb3ZlciA/IGAke3N0eWxlcy5pdGVtfSAke3N0eWxlcy5ob3Zlcl9lbGVtZW50fWAgOiBgJHtzdHlsZXMuaXRlbX1gfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SXNMZWZ0SG92ZXIodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0SXNMZWZ0SG92ZXIoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBhbHQ9eydsZWZ0LWljb24nfSBzcmM9e1NlY29uZEljb25PcmFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PkRpc2NvdmVyIHBvd2VyZnVsIGluc2lnaHRzIHdpdGhpbiB5b3VyIGV4aXN0aW5nIGRhdGEgdG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkZW50aWZ5IGFyZWFzIG9mIGltcHJvdmVtZW50LCBzdHJlYW1saW5lIG9wZXJhdGlvbnMgYW5kIG1ha2UgZXZpZGVuY2UtYmFzZWQgZGVjaXNpb25zLiA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2lzQm90dG9tSG92ZXIgPyBgJHtzdHlsZXMuaXRlbX0gJHtzdHlsZXMuaG92ZXJfZWxlbWVudH1gIDogYCR7c3R5bGVzLml0ZW19YH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldElzQm90dG9tSG92ZXIodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0SXNCb3R0b21Ib3ZlcihmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGFsdD17J2JvdHRvbS1pY29uJ30gc3JjPXtUaGlyZEljb25PcmFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PkdldCBhIEJJIHNvbHV0aW9uIHRhaWxvcmVkIHRvIHlvdXIgYnVzaW5lc3MgbmVlZHMgdG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybSB5b3VyIGRhdGEgaW50byBhY3Rpb25hYmxlIGludGVsbGlnZW5jZSBpbiB0aGUgbW9zdCBlZmZpY2llbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBzdXN0YWluYWJsZSB3YXkuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJob21idXNfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aXNMZWZ0SG92ZXIgPyBgJHtzdHlsZXMucmhvbWJ1c30gJHtzdHlsZXMubGVmdH0gJHtzdHlsZXMucmhvbWJ1c19ob3Zlcn1gIDogYCR7c3R5bGVzLnJob21idXN9ICR7c3R5bGVzLmxlZnR9YH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldElzTGVmdEhvdmVyKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldElzTGVmdEhvdmVyKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtTZWNvbmRJY29uV2hpdGV9IGFsdD17J2xlZnQtaWNvbid9IGNsYXNzTmFtZT17c3R5bGVzLmljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aXNUb3BIb3ZlciA/IGAke3N0eWxlcy5yaG9tYnVzfSAke3N0eWxlcy50b3B9ICR7c3R5bGVzLnJob21idXNfaG92ZXJ9YCA6IGAke3N0eWxlcy5yaG9tYnVzfSAke3N0eWxlcy50b3B9YH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldElzVG9wSG92ZXIodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0SXNUb3BIb3ZlcihmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Rmlyc3RJY29uV2hpdGV9IGFsdD17J3RvcC1pY29uJ30gY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMucmhvbWJ1c30gJHtzdHlsZXMucmlnaHR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtJbWFnZX0gYWx0PXsncmlnaHQnfSBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aXNCb3R0b21Ib3ZlciA/IGAke3N0eWxlcy5yaG9tYnVzfSAke3N0eWxlcy5ib3R0b219ICR7c3R5bGVzLnJob21idXNfaG92ZXJ9YCA6IGAke3N0eWxlcy5yaG9tYnVzfSAke3N0eWxlcy5ib3R0b219YH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldElzQm90dG9tSG92ZXIodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0SXNCb3R0b21Ib3ZlcihmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17VGhpcmRJY29uV2hpdGV9IGFsdD17J2ZvdXJ0aC1pY29uJ30gY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgWW91ckRhdGE7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwieW91ckRhdGFfY29udGFpbmVyX19qSGpyYlwiLFxuXHRcImNvbnRlbnRcIjogXCJ5b3VyRGF0YV9jb250ZW50X18xNW1zR1wiLFxuXHRcIml0ZW1zX3dyYXBwZXJcIjogXCJ5b3VyRGF0YV9pdGVtc193cmFwcGVyX19mb25Mc1wiLFxuXHRcInRleHRcIjogXCJ5b3VyRGF0YV90ZXh0X18ydHVhVlwiLFxuXHRcIml0ZW1cIjogXCJ5b3VyRGF0YV9pdGVtX19jeUFZR1wiLFxuXHRcInRpdGxlXCI6IFwieW91ckRhdGFfdGl0bGVfXzNhYmdMXCIsXG5cdFwiaWNvblwiOiBcInlvdXJEYXRhX2ljb25fXzNfQnd6XCIsXG5cdFwiaW1hZ2VcIjogXCJ5b3VyRGF0YV9pbWFnZV9fMzdFdGRcIixcblx0XCJyaG9tYnVzX2NvbnRhaW5lclwiOiBcInlvdXJEYXRhX3Job21idXNfY29udGFpbmVyX19DUG1OU1wiLFxuXHRcInJob21idXNcIjogXCJ5b3VyRGF0YV9yaG9tYnVzX185Qng3LVwiLFxuXHRcImxlZnRcIjogXCJ5b3VyRGF0YV9sZWZ0X18yUlRnRVwiLFxuXHRcInRvcFwiOiBcInlvdXJEYXRhX3RvcF9fMllibURcIixcblx0XCJyaWdodFwiOiBcInlvdXJEYXRhX3JpZ2h0X19tQzlxY1wiLFxuXHRcImJvdHRvbVwiOiBcInlvdXJEYXRhX2JvdHRvbV9fMW96eklcIixcblx0XCJyaG9tYnVzX2hvdmVyXCI6IFwieW91ckRhdGFfcmhvbWJ1c19ob3Zlcl9fblZpSHVcIixcblx0XCJob3Zlcl9lbGVtZW50XCI6IFwieW91ckRhdGFfaG92ZXJfZWxlbWVudF9fM2poTEtcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9pY29ub18xLTdjMWRmMTMzOTg2Yzk5ZTc1OWFjM2QwMTc2N2E0NGU4LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9pY29ub18yLTJlYjE4YzU0ZjhhYzVlZWM5OWQ5MmI5ZDA0NjhlNWIyLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9pY29ub18zLTcwMjBjMTM5ZWQyYzIwZTQ0ZDQ1ZGUxNzI0MWMwZDg5LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSFpwWlhkQ2IzZzlJakFnTUNBNE5ERXVPU0ExT1RVdU15SStEUW9nSUNBZ1BHY2dabWxzYkQwaUl6WXhSRUZHUWlJK0RRb2dJQ0FnSUNBZ0lEeHdZWFJvSUdROUlrMDJOall1TXlBeU9UWXVOV013TFRNeUxqVXROREF1TnkwMk15NHpMVEV3TXk0eExUZ3lMalFnTVRRdU5DMDJNeTQySURndE1URTBMakl0TWpBdU1pMHhNekF1TkMwMkxqVXRNeTQ0TFRFMExqRXROUzQyTFRJeUxqUXROUzQyZGpJeUxqTmpOQzQySURBZ09DNHpMamtnTVRFdU5DQXlMallnTVRNdU5pQTNMamdnTVRrdU5TQXpOeTQxSURFMExqa2dOelV1TnkweExqRWdPUzQwTFRJdU9TQXhPUzR6TFRVdU1TQXlPUzQwTFRFNUxqWXROQzQ0TFRReExUZ3VOUzAyTXk0MUxURXdMamt0TVRNdU5TMHhPQzQxTFRJM0xqVXRNelV1TXkwME1TNDJMVFV3SURNeUxqWXRNekF1TXlBMk15NHlMVFEyTGprZ09EUXRORFl1T1ZZM09HTXRNamN1TlNBd0xUWXpMalVnTVRrdU5pMDVPUzQ1SURVekxqWXRNell1TkMwek15NDRMVGN5TGpRdE5UTXVNaTA1T1M0NUxUVXpMakoyTWpJdU0yTXlNQzQzSURBZ05URXVOQ0F4Tmk0MUlEZzBJRFEyTGpZdE1UUWdNVFF1TnkweU9DQXpNUzQwTFRReExqTWdORGt1T1MweU1pNDJJREl1TkMwME5DQTJMakV0TmpNdU5pQXhNUzB5TGpNdE1UQXROQzB4T1M0M0xUVXVNaTB5T1MwMExqY3RNemd1TWlBeExqRXROamN1T1NBeE5DNDJMVGMxTGpnZ015MHhMamdnTmk0NUxUSXVOaUF4TVM0MUxUSXVObFkzT0M0MVl5MDRMalFnTUMweE5pQXhMamd0TWpJdU5pQTFMall0TWpndU1TQXhOaTR5TFRNMExqUWdOall1TnkweE9TNDVJREV6TUM0eExUWXlMaklnTVRrdU1pMHhNREl1TnlBME9TNDVMVEV3TWk0M0lEZ3lMak1nTUNBek1pNDFJRFF3TGpjZ05qTXVNeUF4TURNdU1TQTRNaTQwTFRFMExqUWdOak11TmkwNElERXhOQzR5SURJd0xqSWdNVE13TGpRZ05pNDFJRE11T0NBeE5DNHhJRFV1TmlBeU1pNDFJRFV1TmlBeU55NDFJREFnTmpNdU5TMHhPUzQySURrNUxqa3ROVE11TmlBek5pNDBJRE16TGpnZ056SXVOQ0ExTXk0eUlEazVMamtnTlRNdU1pQTRMalFnTUNBeE5pMHhMamdnTWpJdU5pMDFMallnTWpndU1TMHhOaTR5SURNMExqUXROall1TnlBeE9TNDVMVEV6TUM0eElEWXlMVEU1TGpFZ01UQXlMalV0TkRrdU9TQXhNREl1TlMwNE1pNHplbTB0TVRNd0xqSXROall1TjJNdE15NDNJREV5TGprdE9DNHpJREkyTGpJdE1UTXVOU0F6T1M0MUxUUXVNUzA0TFRndU5DMHhOaTB4TXk0eExUSTBMVFF1TmkwNExUa3VOUzB4TlM0NExURTBMalF0TWpNdU5DQXhOQzR5SURJdU1TQXlOeTQ1SURRdU55QTBNU0EzTGpsNmJTMDBOUzQ0SURFd05pNDFZeTAzTGpnZ01UTXVOUzB4TlM0NElESTJMak10TWpRdU1TQXpPQzR5TFRFMExqa2dNUzR6TFRNd0lESXRORFV1TWlBeUxURTFMakVnTUMwek1DNHlMUzQzTFRRMUxURXVPUzA0TGpNdE1URXVPUzB4Tmk0MExUSTBMall0TWpRdU1pMHpPQzAzTGpZdE1UTXVNUzB4TkM0MUxUSTJMalF0TWpBdU9DMHpPUzQ0SURZdU1pMHhNeTQwSURFekxqSXRNall1T0NBeU1DNDNMVE01TGprZ055NDRMVEV6TGpVZ01UVXVPQzB5Tmk0eklESTBMakV0TXpndU1pQXhOQzQ1TFRFdU15QXpNQzB5SURRMUxqSXRNaUF4TlM0eElEQWdNekF1TWk0M0lEUTFJREV1T1NBNExqTWdNVEV1T1NBeE5pNDBJREkwTGpZZ01qUXVNaUF6T0NBM0xqWWdNVE11TVNBeE5DNDFJREkyTGpRZ01qQXVPQ0F6T1M0NExUWXVNeUF4TXk0MExURXpMaklnTWpZdU9DMHlNQzQzSURNNUxqbDZiVE15TGpNdE1UTmpOUzQwSURFekxqUWdNVEFnTWpZdU9DQXhNeTQ0SURNNUxqZ3RNVE11TVNBekxqSXRNall1T1NBMUxqa3ROREV1TWlBNElEUXVPUzAzTGpjZ09TNDRMVEUxTGpZZ01UUXVOQzB5TXk0M0lEUXVOaTA0SURndU9TMHhOaTR4SURFekxUSTBMakY2VFRReU1TNHlJRFF6TUdNdE9TNHpMVGt1TmkweE9DNDJMVEl3TGpNdE1qY3VPQzB6TWlBNUlDNDBJREU0TGpJdU55QXlOeTQxTGpjZ09TNDBJREFnTVRndU55MHVNaUF5Tnk0NExTNDNMVGtnTVRFdU55MHhPQzR6SURJeUxqUXRNamN1TlNBek1ucHRMVGMwTGpRdE5UZ3VPV010TVRRdU1pMHlMakV0TWpjdU9TMDBMamN0TkRFdE55NDVJRE11TnkweE1pNDVJRGd1TXkweU5pNHlJREV6TGpVdE16a3VOU0EwTGpFZ09DQTRMalFnTVRZZ01UTXVNU0F5TkNBMExqY2dPQ0E1TGpVZ01UVXVPQ0F4TkM0MElESXpMalI2VFRReU1DNDNJREUyTTJNNUxqTWdPUzQySURFNExqWWdNakF1TXlBeU55NDRJRE15TFRrdExqUXRNVGd1TWkwdU55MHlOeTQxTFM0M0xUa3VOQ0F3TFRFNExqY3VNaTB5Tnk0NExqY2dPUzB4TVM0M0lERTRMak10TWpJdU5DQXlOeTQxTFRNeWVtMHROelFnTlRndU9XTXROQzQ1SURjdU55MDVMamdnTVRVdU5pMHhOQzQwSURJekxqY3ROQzQySURndE9DNDVJREUyTFRFeklESTBMVFV1TkMweE15NDBMVEV3TFRJMkxqZ3RNVE11T0Mwek9TNDRJREV6TGpFdE15NHhJREkyTGprdE5TNDRJRFF4TGpJdE55NDVlbTB0T1RBdU5TQXhNalV1TW1NdE16VXVOQzB4TlM0eExUVTRMak10TXpRdU9TMDFPQzR6TFRVd0xqWWdNQzB4TlM0M0lESXlMamt0TXpVdU5pQTFPQzR6TFRVd0xqWWdPQzQyTFRNdU55QXhPQzAzSURJM0xqY3RNVEF1TVNBMUxqY2dNVGt1TmlBeE15NHlJRFF3SURJeUxqVWdOakF1T1MwNUxqSWdNakF1T0MweE5pNDJJRFF4TGpFdE1qSXVNaUEyTUM0MkxUa3VPUzB6TGpFdE1Ua3VNeTAyTGpVdE1qZ3RNVEF1TW5wTk16RXdJRFE1TUdNdE1UTXVOaTAzTGpndE1Ua3VOUzB6Tnk0MUxURTBMamt0TnpVdU55QXhMakV0T1M0MElESXVPUzB4T1M0eklEVXVNUzB5T1M0MElERTVMallnTkM0NElEUXhJRGd1TlNBMk15NDFJREV3TGprZ01UTXVOU0F4T0M0MUlESTNMalVnTXpVdU15QTBNUzQySURVd0xUTXlMallnTXpBdU15MDJNeTR5SURRMkxqa3RPRFFnTkRZdU9TMDBMalV0TGpFdE9DNHpMVEV0TVRFdU15MHlMamQ2YlRJek55NHlMVGMyTGpKak5DNDNJRE00TGpJdE1TNHhJRFkzTGprdE1UUXVOaUEzTlM0NExUTWdNUzQ0TFRZdU9TQXlMall0TVRFdU5TQXlMall0TWpBdU55QXdMVFV4TGpRdE1UWXVOUzA0TkMwME5pNDJJREUwTFRFMExqY2dNamd0TXpFdU5DQTBNUzR6TFRRNUxqa2dNakl1TmkweUxqUWdORFF0Tmk0eElEWXpMall0TVRFZ01pNHpJREV3TGpFZ05DNHhJREU1TGpnZ05TNHlJREk1TGpGNmJUTTRMalV0TmpZdU4yTXRPQzQySURNdU55MHhPQ0EzTFRJM0xqY2dNVEF1TVMwMUxqY3RNVGt1TmkweE15NHlMVFF3TFRJeUxqVXROakF1T1NBNUxqSXRNakF1T0NBeE5pNDJMVFF4TGpFZ01qSXVNaTAyTUM0MklEa3VPU0F6TGpFZ01Ua3VNeUEyTGpVZ01qZ3VNU0F4TUM0eUlETTFMalFnTVRVdU1TQTFPQzR6SURNMExqa2dOVGd1TXlBMU1DNDJMUzR4SURFMUxqY3RNak1nTXpVdU5pMDFPQzQwSURVd0xqWjZUVE15TUM0NElEYzRMalI2SWk4K0RRb2dJQ0FnSUNBZ0lEeGphWEpqYkdVZ1kzZzlJalF5TUM0NUlpQmplVDBpTWprMkxqVWlJSEk5SWpRMUxqY2lMejROQ2lBZ0lDQWdJQ0FnUEhCaGRHZ2daRDBpVFRVeU1DNDFJRGM0TGpGNklpOCtEUW9nSUNBZ1BDOW5QZzBLUEM5emRtYytEUW89XCIiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG4vL0NvbXBvbmVudHNcclxuaW1wb3J0IE91clNlcnZpY2VzIGZyb20gJy4uL2NvbXBvbmVudHMvT3VyU2VydmljZXMnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xyXG5pbXBvcnQgQmFubmVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Jhbm5lclwiO1xyXG5pbXBvcnQgV2hvV2VBcmUgZnJvbSBcIi4uL2NvbXBvbmVudHMvV2hvV2VBcmVcIjtcclxuaW1wb3J0IEV4cGxvcmUgZnJvbSBcIi4uL2NvbXBvbmVudHMvRXhwbG9yZVwiO1xyXG5pbXBvcnQgWW91ckRhdGEgZnJvbSBcIi4uL2NvbXBvbmVudHMvWW91ckRhdGFcIjtcclxuaW1wb3J0IFRocmVlIGZyb20gXCIuLi9jb21wb25lbnRzL1RocmVlXCI7XHJcbmltcG9ydCBPdXJXb3JrIGZyb20gXCIuLi9jb21wb25lbnRzL091cldvcmtcIjtcclxuaW1wb3J0IENvbnRhY3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udGFjdFwiO1xyXG5cclxuZnVuY3Rpb24gQXBwKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxyXG4gICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgIDxCYW5uZXIgLz5cclxuICAgICAgICAgICAgPE91clNlcnZpY2VzIC8+XHJcbiAgICAgICAgICAgIDxXaG9XZUFyZSAvPlxyXG4gICAgICAgICAgICA8RXhwbG9yZSAvPlxyXG4gICAgICAgICAgICA8WW91ckRhdGEgLz5cclxuICAgICAgICAgICAgPFRocmVlIC8+XHJcbiAgICAgICAgICAgIDxPdXJXb3JrIC8+XHJcbiAgICAgICAgICAgIDxDb250YWN0IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9pY29ubzctOTE1ZGU5YjNhOGM2ZDVlNzdiZGZjOGI3ZTc2ZjdjZmMucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2ljb25vXzEwLTkzZjhjZGEwYTg0YWE5NzY3YTEzM2ExNTUyNDgxMjJmLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9pY29ub18xMS05N2U3ZmJkNzNkMTY3ZjY4MWE0ZjBkNWRiYTM2ZDU1OS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvaWNvbm9fMTFfZGlmLTU1N2FiZTYzMzYxNzljZTFhYjZmOTAzNGZlMGQ1MDlkLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9pY29ub18xMi1hYWUyNDBmMjI4ZDQ5ZjRhNjcyNTQ3NWRhM2FiODMzNC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvaWNvbm9fMTJfZGlmLTA3ZWIzOTIxMjdlODcwZDcwZDRjYjg1ZDMwOGZlMDI4LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9pY29ub18xMy04N2FjYTQ5ODg1NjU0YTNjNGZhOGQ3Nzg1YzBiZmFmNC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvaWNvbm9fMTNfZGlmLTQwYWExMDM1ZTdhMmU0NmUyYWJlY2ZmYjFkN2I0Y2I1LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9pY29ub182LTUyMDRiNWJmNWZmYjdjOTEwZWFjYmViMmJjNWU2MjQ1LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9pY29ub184LTcxMjI1ODNhNWI1ZTc2ZTc0ZjYwZDVjZTNjZGNhN2I3LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9pY29ub185LTc0NzQ5ZDI0M2UwNjhkYzA3NTQzMjYxM2ZmYjE1ODk1LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9UcmFuc3BhcmVudC1sb2dvLTk0MTA4NGU4ODgzNjMyYjBmNGZkYzQ3MDFhOWM4NWQxLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9pY29ub180LTAwZWRiMGNlMzRhMjk3NzQzOWJjNWU3M2IzYjlkYmE0LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9pY29ub181LWFlZTA2NTZiNGY5NjAwYjhjZDRlMjUwYTgzNWY2ZGQyLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9pbWFnZTMtMDVlOTM1Mzk3YTYzNDc1ZWRiZjI0MWMyNzM3YzQ4ZjcuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2ltYWdlNC0yMTY5NmFkMGQ4ZGY4YTViODFjNDQzMTg5ZDEzNmVmMC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvaW1hZ2U1LTUwMmIwYmJjOTM3YzcxOTBhZTg3MWViNTM1YmU2MmE0LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9pY29ub18xNC01MDY1MGEzNDU4ZjNjNjBiM2JjN2NjZGY5ODYwZWEzMC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvaWNvbm9fMTUtNGQ5YmVkYjJjZTQxMjNmMzBkZWMyNDAwZDM1NDU3YTUucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2ljb25vXzE2LTg1MDNmM2E4YmNjZDlmZjhlYTdkOWI3MjVlY2ZlZDYwLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImhpcHBvLWNvbXBvbmVudHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWZyYW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdmlzaWJpbGl0eS1zZW5zb3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=