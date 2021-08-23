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
	"logo_container": "three_logo_container__2-Z2g"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CYW5uZXIvYmFubmVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQmFubmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29udGFjdC9jb250YWN0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29udGFjdC9maWVsZFZhbGlkYXRpb25zLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29udGFjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0V4cGxvcmUvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRXhwbG9yZS9leHBsb3JlLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRXhwbG9yZS9leHBsb3JlSXRlbS9FeHBsb3JlSXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0V4cGxvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyL2hlYWRlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci9tb2JpbGUtbWVudS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci9tb2JpbGUtbWVudS9tb2JpbGVNZW51Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvT3VyU2VydmljZXMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvT3VyU2VydmljZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9PdXJTZXJ2aWNlcy9vdXJTZXJ2aWNlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL091clNlcnZpY2VzSXRlbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL091cldvcmsvTXlJZnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9PdXJXb3JrL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL091cldvcmsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9PdXJXb3JrL291cldvcmsubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UaHJlZS9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UaHJlZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RocmVlL3RocmVlLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGhyZWUvdGhyZWVJdGVtL1RocmVlSXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1dob1dlQXJlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvV2hvV2VBcmUvd2hvV2VBcmUubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Zb3VyRGF0YS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1lvdXJEYXRhL3lvdXJEYXRhLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW1hZ2VuZXMvaWNvbm9fMS5wbmciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbWFnZW5lcy9pY29ub18yLnBuZyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ltYWdlbmVzL2ljb25vXzMucG5nIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW1hZ2VuZXMvbG9nby5zdmciLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9pY29ucy9pY29ubzcucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvaWNvbnMvaWNvbm9fMTAucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvaWNvbnMvaWNvbm9fMTEucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvaWNvbnMvaWNvbm9fMTFfZGlmLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2ljb25zL2ljb25vXzEyLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2ljb25zL2ljb25vXzEyX2RpZi5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9pY29ucy9pY29ub18xMy5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9pY29ucy9pY29ub18xM19kaWYucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvaWNvbnMvaWNvbm9fMTQucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvaWNvbnMvaWNvbm9fMTUucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvaWNvbnMvaWNvbm9fMTYucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvaWNvbnMvaWNvbm9fNi5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9pY29ucy9pY29ub184LnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2ljb25zL2ljb25vXzkucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL1RyYW5zcGFyZW50LWxvZ28ucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2ljb25vXzQucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2ljb25vXzUucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2ltYWdlMy5qcGciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvaW1hZ2U0LmpwZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9pbWFnZTUuanBnIiwid2VicGFjazovLy9leHRlcm5hbCBcImhpcHBvLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlmcmFtZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC12aXNpYmlsaXR5LXNlbnNvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkJhbm5lciIsInN0eWxlcyIsImNvbnRhaW5lciIsImNvbnRlbnQiLCJMb2dvIiwidGV4dCIsImJsYWNrX3RleHQiLCJyZXF1aXJlZCIsInZhbHVlIiwidW5kZWZpbmVkIiwiZW1haWwiLCJ0ZXN0IiwiQ29udGFjdCIsInRpdGxlIiwiZmlyc3RfdGl0bGUiLCJzZWNvbmRfdGl0bGUiLCJib3JkZXIiLCJuYW1lIiwidHlwZSIsImxhYmVsIiwidmFsaWRhdGlvbnMiLCJFWFBMT1JFX0RBVEEiLCJpbWFnZSIsImljb242IiwiaWNvbjciLCJpY29uOCIsImljb245IiwiaWNvbjEwIiwiRXhwbG9yZUl0ZW0iLCJleHBsb3JlRGF0YSIsImlzRWxlbWVudFZpc2libGUiLCJzZXRJc0VsZW1lbnRWaXNpYmxlIiwidXNlU3RhdGUiLCJvbkNoYW5nZVZpc2liaWxpdHkiLCJpc1Zpc2libGUiLCJpdGVtIiwiaGV4YWdvbiIsImxvZ28iLCJFeHBsb3JlIiwibWFwIiwiaW5kZXgiLCJNRU5VX0xJTktTIiwibGlua1RvIiwiSGVhZGVyIiwibWVudSIsImxpbmsiLCJNb2JpbGVNZW51IiwicHJvcHMiLCJtZW51SXRlbXMiLCJzdHlsZSIsIm1lbnVUb2dnbGUiLCJTRVJWSUNFU19EQVRBIiwiaWQiLCJpY29uMSIsImljb24yIiwiaWNvbjMiLCJPdXJTZXJ2aWNlcyIsIk91clNlcnZpY2VzSXRlbSIsInNlcnZpY2VzRGF0YSIsIml0ZW1faW1hZ2UiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJpdGVtX3RpdGxlIiwiaXRlbV9kZXNjcmlwdGlvbiIsIml0ZW1fdGV4dCIsIk15SWZyYW1lIiwidXJsIiwiREFTSEJPQVJEUyIsIk91cldvcmsiLCJkYXNoYm9hcmQiLCJoZWlnaHQiLCJUSFJFRV9EQVRBIiwiVGhyZWUiLCJzZWN0aW9uIiwib3ZlcmxheSIsIlRocmVlSXRlbSIsInRocmVlRGF0YSIsImxvZ29fY29udGFpbmVyIiwiYmxhY2tfYm94IiwiYXJyb3ciLCJ0ZXh0X2NvbnRhaW5lciIsIldob1dlQXJlIiwiaXNFbGVtZW50MVZpc2libGUiLCJzZXRJc0VsZW1lbnQxVmlzaWJsZTEiLCJpc0VsZW1lbnQyVmlzaWJsZSIsInNldElzRWxlbWVudDJWaXNpYmxlMiIsIm9uQ2hhbmdlVmlzaWJpbGl0eTEiLCJvbkNoYW5nZVZpc2liaWxpdHkyIiwiZmlyc3Rfc2VjdGlvbiIsImZpcnN0X292ZXJsYXkiLCJzZWN0aW9uX2ljb24iLCJzZWN0aW9uX2xvZ28iLCJpY29ubzQiLCJsb2dvX29uZSIsInBhcmFncmFwaCIsImltYWdlNCIsImltYWdlX29uZSIsImltYWdlMyIsImltYWdlX3R3byIsImljb25vNSIsImxvZ29fdHdvIiwiWW91ckRhdGEiLCJpc0xlZnRIb3ZlciIsInNldElzTGVmdEhvdmVyIiwiaXNUb3BIb3ZlciIsInNldElzVG9wSG92ZXIiLCJpc0JvdHRvbUhvdmVyIiwic2V0SXNCb3R0b21Ib3ZlciIsIml0ZW1zX3dyYXBwZXIiLCJob3Zlcl9lbGVtZW50IiwiRmlyc3RJY29uT3JhbmdlIiwiU2Vjb25kSWNvbk9yYW5nZSIsIlRoaXJkSWNvbk9yYW5nZSIsInJob21idXNfY29udGFpbmVyIiwicmhvbWJ1cyIsImxlZnQiLCJyaG9tYnVzX2hvdmVyIiwiU2Vjb25kSWNvbldoaXRlIiwiaWNvbiIsInRvcCIsIkZpcnN0SWNvbldoaXRlIiwicmlnaHQiLCJJ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O0FDQUEsb0Y7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiYmFubmVyX2NvbnRhaW5lcl9fZHV5RHpcIixcblx0XCJjb250ZW50XCI6IFwiYmFubmVyX2NvbnRlbnRfXzFybHBkXCIsXG5cdFwidGV4dFwiOiBcImJhbm5lcl90ZXh0X18ybW5RTVwiLFxuXHRcImJsYWNrX3RleHRcIjogXCJiYW5uZXJfYmxhY2tfdGV4dF9faXcwUExcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbi8vU3R5bGVcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2Jhbm5lci5tb2R1bGUuc2Nzcyc7XHJcbi8vSW1hZ2VcclxuaW1wb3J0IExvZ28gZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9pbWFnZXMvVHJhbnNwYXJlbnQtbG9nby5wbmcnXHJcblxyXG5jb25zdCBCYW5uZXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9IGlkPXsnaG9tZSd9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBhbHQ9eydsb2dvJ30gc3JjPXtMb2dvfS8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT48c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5ibGFja190ZXh0fT5CZXR0ZXI8L3NwYW4+PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYmxhY2tfdGV4dH0+RGF0YSw8L3NwYW4+IEJldHRlciBEZWNpc2lvbnM8L2gyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFubmVyIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiY29udGFjdF9jb250YWluZXJfXzF1NDB6XCIsXG5cdFwidGl0bGVcIjogXCJjb250YWN0X3RpdGxlX18yMXQyTFwiLFxuXHRcImZpcnN0X3RpdGxlXCI6IFwiY29udGFjdF9maXJzdF90aXRsZV9fMlY1WHpcIixcblx0XCJzZWNvbmRfdGl0bGVcIjogXCJjb250YWN0X3NlY29uZF90aXRsZV9fM2NxUnZcIixcblx0XCJib3JkZXJcIjogXCJjb250YWN0X2JvcmRlcl9fMktKZGpcIixcblx0XCJjdXN0b20tZm9ybS1jbGFzc1wiOiBcImNvbnRhY3RfY3VzdG9tLWZvcm0tY2xhc3NfXzJVcWZ1XCIsXG5cdFwiaXRlbVwiOiBcImNvbnRhY3RfaXRlbV9fMy1sYXZcIixcblx0XCJpbnB1dFwiOiBcImNvbnRhY3RfaW5wdXRfXzFhZEVqXCIsXG5cdFwiZXJyb3JcIjogXCJjb250YWN0X2Vycm9yX18zRUgyalwiLFxuXHRcImlucHV0X2JveFwiOiBcImNvbnRhY3RfaW5wdXRfYm94X183V3lhNVwiLFxuXHRcImVycm9yX21lc3NhZ2VcIjogXCJjb250YWN0X2Vycm9yX21lc3NhZ2VfX3piMkxXXCIsXG5cdFwic2VjdGlvblwiOiBcImNvbnRhY3Rfc2VjdGlvbl9fMkhDS0lcIixcblx0XCJmb3JtXCI6IFwiY29udGFjdF9mb3JtX18xZFNmZ1wiLFxuXHRcImNvbnRhY3QtYm9yZGVyXCI6IFwiY29udGFjdF9jb250YWN0LWJvcmRlcl9fMnJwNUpcIlxufTtcbiIsImNvbnN0IHJlcXVpcmVkID0gdmFsdWUgPT4gdmFsdWUgPyB1bmRlZmluZWQgOiAnUmVxdWlyZWQnO1xyXG5cclxuY29uc3QgZW1haWwgPSB2YWx1ZSA9PlxyXG4gICAgdmFsdWUgJiYgIS9eW0EtWjAtOS5fJSstXStAW0EtWjAtOS4tXStcXC5bQS1aXXsyLDR9JC9pLnRlc3QodmFsdWUpID9cclxuICAgICAgICAnSW52YWxpZCBlbWFpbCBhZGRyZXNzJyA6IHVuZGVmaW5lZDtcclxuXHJcbmV4cG9ydCB7XHJcbiAgICByZXF1aXJlZCxcclxuICAgIGVtYWlsLFxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuLy9TdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2NvbnRhY3QubW9kdWxlLnNjc3MnO1xyXG4vL0ZpZWxkcyB2YWxpZGF0aW9uc1xyXG5pbXBvcnQgeyByZXF1aXJlZCwgZW1haWwgfSBmcm9tICcuL2ZpZWxkVmFsaWRhdGlvbnMnO1xyXG5pbXBvcnQgeyBGb3JtIH0gZnJvbSAnaGlwcG8tY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBDb250YWN0ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0gaWQ9eydjb250YWN0J30+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmZpcnN0X3RpdGxlfT5DT05UQUNUPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5zZWNvbmRfdGl0bGV9PkFORCBHRVQgTVkgUVVPVEU8L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3JkZXJ9PlxyXG4gICAgICAgICAgICAgICAgPEZvcm1cclxuICAgICAgICAgICAgICAgICAgICBmaWVsZHM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ25hbWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdOYW1lIChSZXF1aXJlZCknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbnM6IFtyZXF1aXJlZF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjdXN0b21lckVtYWlsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnRW1haWwgKFJlcXVpcmVkKScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uczogW2VtYWlsXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3N1YmplY3QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdTdWJqZWN0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ21lc3NhZ2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3RleHRBcmVhJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnTWVzc2FnZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VjY2Vzc01lc3NhZ2U9eydZb3VyIG1lc3NhZ2UgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IHNlbnQuIFdlIHdpbGwgY29udGFjdCB5b3UgdmVyeSBzb29uISd9XHJcbiAgICAgICAgICAgICAgICAgICAgb25FcnJvck1lc3NhZ2U9eydQbGVhc2UgdHJ5IGFnYWluIGluIHNvbWUgbWludXRlcyd9XHJcbiAgICAgICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uTGFiZWw9eydTVUJNSVQnfVxyXG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzPXsnbWJhbmFseXN0LWNvbnRhY3QtZm9ybSd9XHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWxTZXJ2aWNlVVJMPXsnaHR0cHM6Ly90aGVoaXBwb2FwaS5uZXRsaWZ5LmFwcC8ubmV0bGlmeS9mdW5jdGlvbnMvYXBpL21iYW5hbHlzdC1tYWlsJ31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdFxyXG4iLCJpbXBvcnQgaWNvbjYgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9pY29ucy9pY29ub182LnBuZyc7XHJcbmltcG9ydCBpY29uNyBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2ljb25zL2ljb25vNy5wbmcnO1xyXG5pbXBvcnQgaWNvbjggZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9pY29ucy9pY29ub184LnBuZyc7XHJcbmltcG9ydCBpY29uOSBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2ljb25zL2ljb25vXzkucG5nJztcclxuaW1wb3J0IGljb24xMCBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2ljb25zL2ljb25vXzEwLnBuZyc7XHJcblxyXG5jb25zdCBFWFBMT1JFX0RBVEEgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaW1hZ2U6IGljb242LFxyXG4gICAgICAgIHRleHQ6ICdHZXQgcmVhbCB0aW1lIHZpc2liaWxpdHkgb2YgeW91ciBidXNpbmVzcyBLUElzIGFuZCBzYXZlIHNpZ25pZmljYW50IGNvc3RzIGJ5JyArXHJcbiAgICAgICAgICAgICcgc3dpdGNoaW5nIG1hbnVhbCByZXBvcnRpbmcgYWN0aXZpdGllcyB3aXRoIGZ1bGx5IGF1dG9tYXRlZCByZXBvcnRzIGFuZCBzY2hlZHVsZWQgcmVmcmVzaGVzLicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGltYWdlOiBpY29uNyxcclxuICAgICAgICB0ZXh0OiAnT2ZmZXJzIGRhdGEgYW5hbHlzaXMgd2l0aG91dCB0aGUgcmVxdWlyZW1lbnQgb2Ygc3BlY2lhbGlzZWQgdGVjaG5pY2FsIHN1cHBvcnQsJyArXHJcbiAgICAgICAgICAgICcgd2l0aCBhIHN0cm9uZywgaW50dWl0aXZlIGludGVyZmFjZS4nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpbWFnZTogaWNvbjgsXHJcbiAgICAgICAgdGV4dDogJ1NhdmVzIHlvdSB0aW1lIHdpdGggY3VzdG9taXNlZCBpbmZvcm1hdGlvbiBkYXNoYm9hcmRzLCB3aGljaCBhcmUgbW91bGRlZCB0byB5b3VyJyArXHJcbiAgICAgICAgICAgICcgb3JnYW5pc2F0aW9uXFwncyBzcGVjaWZpYyBuZWVkcy4nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpbWFnZTogaWNvbjksXHJcbiAgICAgICAgdGV4dDogJ0VsaW1pbmF0ZXMgc3BlZWQgYW5kIG1lbW9yeSByZXN0cmljdGlvbnMgdGhhbmtzIHRvIGEgcm9idXN0IGNsb3VkIGVudmlyb25tZW50LCcgK1xyXG4gICAgICAgICAgICAnIGVuYWJsaW5nIGRhdGEgdG8gYmUgZm91bmQgYW5kIGFuYWx5c2VkIHJhcGlkbHkuJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW1hZ2U6IGljb24xMCxcclxuICAgICAgICB0ZXh0OiAnQWxsb3dzIHlvdSB0byB2aWV3IHJlcG9ydHMgaW5zdGFudGx5IG9uIG11bHRpcGxlIHdlYi1jb25uZWN0ZWQgZGV2aWNlcywnICtcclxuICAgICAgICAgICAgJyBpbmNsdWRpbmcgaU9TLCBBbmRyb2lkIGFuZCBXaW5kb3dzLicsXHJcbiAgICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IHsgRVhQTE9SRV9EQVRBIH07IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiZXhwbG9yZV9jb250YWluZXJfXzFzczY3XCIsXG5cdFwidGl0bGVcIjogXCJleHBsb3JlX3RpdGxlX18xenJld1wiLFxuXHRcImNvbnRlbnRcIjogXCJleHBsb3JlX2NvbnRlbnRfXzJFTElTXCIsXG5cdFwiaXRlbVwiOiBcImV4cGxvcmVfaXRlbV9fM2w2bHFcIixcblx0XCJoZXhhZ29uXCI6IFwiZXhwbG9yZV9oZXhhZ29uX18yZ0NIa1wiLFxuXHRcImxvZ29cIjogXCJleHBsb3JlX2xvZ29fXzFyZGxvXCIsXG5cdFwidGV4dFwiOiBcImV4cGxvcmVfdGV4dF9fMmRQVzhcIixcblx0XCJ2aXNpYmxlQ2xhc3NcIjogXCJleHBsb3JlX3Zpc2libGVDbGFzc19fU201NHhcIixcblx0XCJzZWN0aW9uXCI6IFwiZXhwbG9yZV9zZWN0aW9uX18xRnF6N1wiXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFZpc2liaWxpdHlTZW5zb3IgZnJvbSAncmVhY3QtdmlzaWJpbGl0eS1zZW5zb3InO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL2V4cGxvcmUubW9kdWxlLnNjc3MnO1xyXG5cclxuY29uc3QgRXhwbG9yZUl0ZW0gPSAoe2V4cGxvcmVEYXRhfSkgPT4ge1xyXG4gICAgY29uc3QgW2lzRWxlbWVudFZpc2libGUsIHNldElzRWxlbWVudFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Qgb25DaGFuZ2VWaXNpYmlsaXR5ID0gKGlzVmlzaWJsZSkgPT4gaXNWaXNpYmxlID8gc2V0SXNFbGVtZW50VmlzaWJsZSh0cnVlKSA6IHNldElzRWxlbWVudFZpc2libGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IHtpbWFnZSwgdGV4dH0gPSBleHBsb3JlRGF0YTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxWaXNpYmlsaXR5U2Vuc29yIG9uQ2hhbmdlPXtvbkNoYW5nZVZpc2liaWxpdHl9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7aXNFbGVtZW50VmlzaWJsZSA/IGAke3N0eWxlcy5pdGVtfSB2aXNpYmxlQ2xhc3NgIDogYCR7c3R5bGVzLml0ZW19YH1gfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGV4YWdvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlfSBhbHQ9eydsb2dvJ30gY2xhc3NOYW1lPXtzdHlsZXMubG9nb30vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT57dGV4dH08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvVmlzaWJpbGl0eVNlbnNvcj5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4cGxvcmVJdGVtIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuLy9TdHlsZVxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZXhwbG9yZS5tb2R1bGUuc2NzcydcclxuaW1wb3J0IEV4cGxvcmVJdGVtIGZyb20gJy4vZXhwbG9yZUl0ZW0vRXhwbG9yZUl0ZW0nO1xyXG5pbXBvcnQge0VYUExPUkVfREFUQX0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5cclxuY29uc3QgRXhwbG9yZSA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PldoeSBjaG9vc2UgYSBCSSBzb2x1dGlvbj88L2gxPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAge0VYUExPUkVfREFUQS5tYXAoKHZhbHVlLCBpbmRleCkgPT4gPEV4cGxvcmVJdGVtIGV4cGxvcmVEYXRhPXt2YWx1ZX0ga2V5PXt2YWx1ZS50ZXh0fS8+KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeHBsb3JlIiwiY29uc3QgTUVOVV9MSU5LUyA9IFtcclxuICAgIHtcclxuICAgICAgICBsYWJlbDogJ0hPTUUnLFxyXG4gICAgICAgIGxpbmtUbzogJyNob21lJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYWJlbDogJ1NFUlZJQ0VTJyxcclxuICAgICAgICBsaW5rVG86ICcjc2VydmljZXMnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOiAnV09SSycsXHJcbiAgICAgICAgbGlua1RvOiAnI3dvcmsnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOiAnQ09OVEFDVCcsXHJcbiAgICAgICAgbGlua1RvOiAnI2NvbnRhY3QnXHJcbiAgICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IHtcclxuICAgIE1FTlVfTElOS1MsXHJcbn0iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJoZWFkZXJfY29udGFpbmVyX18xSGlONlwiLFxuXHRcIm1lbnVcIjogXCJoZWFkZXJfbWVudV9fMjN3SGJcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbi8vU3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9oZWFkZXIubW9kdWxlLnNjc3MnO1xyXG4vL0NvbnN0YW50c1xyXG5pbXBvcnQgeyBNRU5VX0xJTktTIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG4vL0NvbXBvbmVudHNcclxuaW1wb3J0IE1vYmlsZU1lbnUgZnJvbSAnLi9tb2JpbGUtbWVudSc7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcblxyXG4gICAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG4gICAgICAgIC8vIENsaWVudC1zaWRlLW9ubHkgY29kZVxyXG4gICAgICAgIGNvbnN0IHN0aWNreUZ1bmN0aW9uID0gKCkgPT4gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBsZXQgbmF2aWdhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25hdicpO1xyXG5cclxuICAgICAgICAgICAgaWYgKG5hdmlnYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIG5hdmlnYXRpb24uY2xhc3NMaXN0LnRvZ2dsZSgnc3RpY2t5Jywgd2luZG93LnNjcm9sbFkgPiAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgc3RpY2t5RnVuY3Rpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxuYXYgcm9sZT17J25hdmlnYXRpb24nfSBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb250YWluZXJ9IGhlYWRlci13cmFwcGVyYCB9PlxyXG4gICAgICAgICAgICA8dWwgaWQ9eydsYXJnZS1zY3JlZW4tbWVudSd9IGNsYXNzTmFtZT17c3R5bGVzLm1lbnV9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIE1FTlVfTElOS1MubWFwKChsaW5rLGluZGV4KSA9PiA8YSBrZXk9e2luZGV4fSBocmVmPXtsaW5rLmxpbmtUb30+PGxpPntsaW5rLmxhYmVsfTwvbGk+PC9hPilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPE1vYmlsZU1lbnUgbWVudUl0ZW1zPXtNRU5VX0xJTktTfSAvPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbi8vU3R5bGVcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4vbW9iaWxlTWVudS5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBNb2JpbGVNZW51ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7IG1lbnVJdGVtcyB9ID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubWVudVRvZ2dsZX0+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPlxyXG4gICAgICAgICAgICA8c3BhbiAvPlxyXG4gICAgICAgICAgICA8c3BhbiAvPlxyXG4gICAgICAgICAgICA8c3BhbiAvPlxyXG4gICAgICAgICAgICA8dWwgaWQ9eydtZW51J30gY2xhc3NOYW1lPXtzdHlsZS5tZW51fT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBtZW51SXRlbXMubWFwKChsaW5rLGluZGV4KSA9PiA8YSBrZXk9e2luZGV4fSBocmVmPXtsaW5rLmxpbmtUb30+PGxpPntsaW5rLmxhYmVsfTwvbGk+PC9hPilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vYmlsZU1lbnU7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibWVudVRvZ2dsZVwiOiBcIm1vYmlsZU1lbnVfbWVudVRvZ2dsZV9fMkpWa1NcIixcblx0XCJtZW51XCI6IFwibW9iaWxlTWVudV9tZW51X19qX1JIS1wiXG59O1xuIiwiaW1wb3J0IGljb24xIGZyb20gJy4uL2ltYWdlbmVzL2ljb25vXzEucG5nJztcclxuaW1wb3J0IGljb24yIGZyb20gJy4uL2ltYWdlbmVzL2ljb25vXzIucG5nJztcclxuaW1wb3J0IGljb24zIGZyb20gJy4uL2ltYWdlbmVzL2ljb25vXzMucG5nJztcclxuXHJcbmNvbnN0IFNFUlZJQ0VTX0RBVEEgPSBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnYm94MScsXHJcbiAgICAgIGltYWdlOiBpY29uMSxcclxuICAgICAgdGl0bGU6ICdQb3dlciBCSSBDb25zdWx0aW5nJyxcclxuICAgICAgdGV4dDogJ1dlIHdvcmsgd2l0aCBQb3dlciBCSSB0byBjcmVhdGUgcG93ZXJmdWwgYXV0b21hdGVkIHJlcG9ydHMnICtcclxuICAgICAgICAgICcgdG8gdmlzdWFsaXNlIHlvdXIgYnVzaW5lc3MgZGF0YSwgY2FwdHVyZSBrZXkgaW5zaWdodHMgaW4gcmVhbCB0aW1lIGFuZCBpbXByb3ZlIGRlY2lzaW9uIG1ha2luZy4gJyArXHJcbiAgICAgICAgICAnQXMgYSBiZXN0LWluLWNsYXNzIEJJIHBsYXRmb3JtLCBQb3dlciBCSSBhbGxvd3MgeW91IHRvIGNvbm5lY3QgdG8gZGF0YSBzdG9yZWQgaW4gbXVsdGlwbGUgc291cmNlcycgK1xyXG4gICAgICAgICAgJyBhbmQgc2hhcmUgYW5kIGNvbGxhYm9yYXRlIGFtb25nIHlvdXIgdGVhbSBtZW1iZXJzLCBlbnN1cmluZyB5b3VyIGRhdGEgaGFzIHRoZSBtYXhpbXVtIGltcGFjdC4nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6ICdib3gyJyxcclxuICAgICAgaW1hZ2U6IGljb24yLFxyXG4gICAgICB0aXRsZTogJ0J1c2luZXNzIEFuYWx5c2lzJyxcclxuICAgICAgdGV4dDogJ1dlIHVzZSBvdXIgd2VhbHRoIG9mIGV4cGVyaWVuY2UgaW4gQkkgYW5kIGNvbW1lcmNpYWwgYWN1bWVuIHRvIGhlbHAgeW91cicgK1xyXG4gICAgICAgICAgJyBidXNpbmVzcyBpZGVudGlmeSBhbmQgdW5kZXJzdGFuZCBpdHMga2V5IHBlcmZvcm1hbmNlIGRyaXZlcnMsIHNldCBtZWFuaW5nZnVsIHRhcmdldHMsJyArXHJcbiAgICAgICAgICAnIHNvbHZlIHByb2JsZW1zIHdpdGggZGF0YSBhbmQgc3VwcG9ydCBtYWpvciBidXNpbmVzcyBkZWNpc2lvbnMsIHdvcmtpbmcgY2xvc2VseSB3aXRoIHByb2Nlc3MnICtcclxuICAgICAgICAgICcgb3duZXJzIHRvIG1ha2UgdGhlIG1vc3Qgb2YgeW91ciBkYXRhLicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJ2JveDMnLFxyXG4gICAgICBpbWFnZTogaWNvbjMsXHJcbiAgICAgIHRpdGxlOiAnQkkgc3VwcG9ydCcsXHJcbiAgICAgIHRleHQ6ICdXZSBvZmZlciBlbmQtdG8tZW5kIHN1cHBvcnQgdG8gY29tcGFuaWVzIGFscmVhZHkgb3BlcmF0aW5nIGEgUG93ZXIgQkkgc29sdXRpb24sJyArXHJcbiAgICAgICAgICAnIGV4cGVydCBjb25zdWx0YW5jeSBvbiBQb3dlciBCSSBiZXN0IHByYWN0aWNlcyBhbmQgdHJhaW5pbmcgc2Vzc2lvbnMgYWxsb3dpbmcgeW91ciBidXNpbmVzcycgK1xyXG4gICAgICAgICAgJyB0byByZWFsaXNlIGl0cyBmdWxsIEJJIHBvdGVudGlhbC4nLFxyXG4gICAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCB7IFNFUlZJQ0VTX0RBVEEgfTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vb3VyU2VydmljZXMubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgJy4uL2ltYWdlbmVzL2xvZ28uc3ZnJztcclxuaW1wb3J0IE91clNlcnZpY2VzSXRlbSBmcm9tICcuLi9PdXJTZXJ2aWNlc0l0ZW0nO1xyXG5pbXBvcnQgeyBTRVJWSUNFU19EQVRBIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcblxyXG5jb25zdCBPdXJTZXJ2aWNlcyA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eydzaW1wbGUtc2VjdGlvbi13cmFwcGVyJ30gaWQ9eydzZXJ2aWNlcyd9PlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXsnc2VjdGlvbi1zdWJ0aXRsZSd9Pk9VUiBTRVJWSUNFUzwvaDI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIHtTRVJWSUNFU19EQVRBLm1hcCgodmFsdWUsIGluZGV4KSA9PiA8T3VyU2VydmljZXNJdGVtIHNlcnZpY2VzRGF0YT17dmFsdWV9IGtleT17dmFsdWUudGl0bGV9Lz4pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE91clNlcnZpY2VzOyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIm91clNlcnZpY2VzX2NvbnRhaW5lcl9fM21IdnNcIixcblx0XCJpdGVtXCI6IFwib3VyU2VydmljZXNfaXRlbV9fMTBxb0xcIixcblx0XCJpdGVtX2ltYWdlXCI6IFwib3VyU2VydmljZXNfaXRlbV9pbWFnZV9fMUpub0dcIixcblx0XCJpdGVtX2Rlc2NyaXB0aW9uXCI6IFwib3VyU2VydmljZXNfaXRlbV9kZXNjcmlwdGlvbl9fMUp0NzhcIixcblx0XCJpdGVtX3RpdGxlXCI6IFwib3VyU2VydmljZXNfaXRlbV90aXRsZV9fMjZFRFNcIixcblx0XCJpdGVtX3RleHRcIjogXCJvdXJTZXJ2aWNlc19pdGVtX3RleHRfXzE3RlJvXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBWaXNpYmlsaXR5U2Vuc29yIGZyb20gJ3JlYWN0LXZpc2liaWxpdHktc2Vuc29yJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9PdXJTZXJ2aWNlcy9vdXJTZXJ2aWNlcy5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBPdXJTZXJ2aWNlc0l0ZW0gPSAoe3NlcnZpY2VzRGF0YX0pID0+IHtcclxuICAgIGNvbnN0IFtpc0VsZW1lbnRWaXNpYmxlLCBzZXRJc0VsZW1lbnRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IG9uQ2hhbmdlVmlzaWJpbGl0eSA9IChpc1Zpc2libGUpID0+IGlzVmlzaWJsZSA/IHNldElzRWxlbWVudFZpc2libGUodHJ1ZSkgOiBzZXRJc0VsZW1lbnRWaXNpYmxlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCB7aW1hZ2UsIHRpdGxlLCB0ZXh0LCBpZH0gPSBzZXJ2aWNlc0RhdGE7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8VmlzaWJpbGl0eVNlbnNvciBvbkNoYW5nZT17b25DaGFuZ2VWaXNpYmlsaXR5fT5cclxuICAgICAgICAgICAgPGRpdiBpZD17aWR9IGNsYXNzTmFtZT17YCR7c3R5bGVzLml0ZW19IHZpc2libGVDbGFzc2B9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pdGVtX2ltYWdlfSBzdHlsZT17e2JhY2tncm91bmRJbWFnZTpgdXJsKCR7aW1hZ2V9KWB9fS8+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMuaXRlbV90aXRsZX0+e3RpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLml0ZW1fZGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLml0ZW1fdGV4dH0+e3RleHR9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvVmlzaWJpbGl0eVNlbnNvcj5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE91clNlcnZpY2VzSXRlbSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJZnJhbWUgZnJvbSAncmVhY3QtaWZyYW1lJztcclxuXHJcbmNvbnN0IE15SWZyYW1lID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7IHVybCwgaWQgfSA9IHByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8SWZyYW1lIHVybD17dXJsfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCI5OSVcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICBpZD17aWR9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteS1pZnJhbWVcIlxyXG4gICAgICAgICAgICAgICAgZGlzcGxheT1cImluaXRpYWxcIlxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXHJcbiAgICAgICAgLz5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15SWZyYW1lIiwiY29uc3QgREFTSEJPQVJEUyA9IFtcclxuICAgIHtcclxuICAgICAgICB1cmw6ICdodHRwczovL2FwcC5wb3dlcmJpLmNvbS92aWV3P3I9ZXlKcklqb2lNVFpsTkdSaE5HUXRZV1ZqTmkwME5HWmlMV0UyTmpjdE1tRXhZMk14TldVMk56VTVJaXdpZENJNklqSmtNV0UyWWpaa0xXWTVNMlV0TkRKbFl5MDRZelF5TFRoa1lXRTVOREF6WkRCa09DSjkmcGFnZU5hbWU9UmVwb3J0U2VjdGlvbjEnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1cmw6ICdodHRwczovL2FwcC5wb3dlcmJpLmNvbS92aWV3P3I9ZXlKcklqb2lOVEZoWmpJNU5tTXRZMk13WmkwME16ZzNMVGcxWVRrdFltTXlNV1F3WVdVeE1qRXpJaXdpZENJNklqSmtNV0UyWWpaa0xXWTVNMlV0TkRKbFl5MDRZelF5TFRoa1lXRTVOREF6WkRCa09DSjknLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1cmw6ICdodHRwczovL2FwcC5wb3dlcmJpLmNvbS92aWV3P3I9ZXlKcklqb2laV000T1dJNU1qWXRaREF3TVMwME1tRXpMVGs0WVRVdFlUQXhOamcyTkdWa05UZ3hJaXdpZENJNklqSmtNV0UyWWpaa0xXWTVNMlV0TkRKbFl5MDRZelF5TFRoa1lXRTVOREF6WkRCa09DSjknLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1cmw6ICdodHRwczovL2FwcC5wb3dlcmJpLmNvbS92aWV3P3I9ZXlKcklqb2lNakl6WXpRME56a3RNMkl4WkMwME56RmpMVGszTlRjdE1UQTBNVGxoTXpKaE5UY3hJaXdpZENJNklqSmtNV0UyWWpaa0xXWTVNMlV0TkRKbFl5MDRZelF5TFRoa1lXRTVOREF6WkRCa09DSjkmcGFnZU5hbWU9UmVwb3J0U2VjdGlvbjQyMTRmMWViZGFmZGIwN2Y1NTg4JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9hcHAucG93ZXJiaS5jb20vdmlldz9yPWV5SnJJam9pTUdNMlpEVTRZMkl0TnpGaU1pMDBaRFZtTFRnMU1HSXRPV0ZsTldJNFpUVXlaV0l6SWl3aWRDSTZJakprTVdFMllqWmtMV1k1TTJVdE5ESmxZeTA0WXpReUxUaGtZV0U1TkRBelpEQmtPQ0o5JnBhZ2VOYW1lPVJlcG9ydFNlY3Rpb25jNGJhNjFhNzY1YjA5YjAwNjI2NycsXHJcbiAgICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IHtcclxuICAgIERBU0hCT0FSRFNcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbi8vU3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9vdXJXb3JrLm1vZHVsZS5zY3NzJztcclxuLy9Db25zdGFudHNcclxuaW1wb3J0IHsgREFTSEJPQVJEUyB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuLy9Db21wb25lbnRcclxuaW1wb3J0ICdyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsL2xpYi9zdHlsZXMvY2Fyb3VzZWwubWluLmNzcyc7IC8vIHJlcXVpcmVzIGEgbG9hZGVyXHJcbmltcG9ydCBNeUlmcmFtZSBmcm9tICcuL015SWZyYW1lJztcclxuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tICdyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsJztcclxuXHJcbmNvbnN0IE91cldvcmsgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnc2ltcGxlLXNlY3Rpb24td3JhcHBlcid9IGlkPXsnd29yayd9PlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXsnc2VjdGlvbi1zdWJ0aXRsZSd9Pk9VUiBXT1JLPC9oMj5cclxuICAgICAgICAgICAgPENhcm91c2VsXHJcbiAgICAgICAgICAgICAgICBpbmZpbml0ZUxvb3A9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBzaG93U3RhdHVzPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIHNob3dUaHVtYnM9e2ZhbHNlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgREFTSEJPQVJEUy5tYXAoKGRhc2hib2FyZCwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gc3R5bGU9e3toZWlnaHQ6ICcxMDAlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE15SWZyYW1lIHVybD17ZGFzaGJvYXJkLnVybH0gaWQ9e2luZGV4fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+QXJlIHlvdSByZWFkeSB0byBhY2NlbGVyYXRlIHlvdXIgYnVzaW5lc3MgZ3Jvd3RoPzxici8+IEdldCBpbiB0b3VjaCB0b1xyXG4gICAgICAgICAgICAgICAgZGlzY292ZXIgbW9yZSBhYm91dCB3aGF0IE1CQW5hbHlzdCBjb3VsZCBkbyBmb3IgeW91ciBidXNpbmVzcy48L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPdXJXb3JrOyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRleHRcIjogXCJvdXJXb3JrX3RleHRfX09FSnVnXCJcbn07XG4iLCJpbXBvcnQgaWNvbjEgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9pY29ucy9pY29ub18xNC5wbmcnO1xyXG5pbXBvcnQgaWNvbjIgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9pY29ucy9pY29ub18xNS5wbmcnO1xyXG5pbXBvcnQgaWNvbjMgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9pY29ucy9pY29ub18xNi5wbmcnO1xyXG5cclxuY29uc3QgVEhSRUVfREFUQSA9IFtcclxuICAgIHtcclxuICAgICAgICBpbWFnZTogaWNvbjEsXHJcbiAgICAgICAgdGV4dDogJ01hbmFnZSBpbnZlbnRvcnkga2V5IG1ldHJpY3Mgc3VjaCBhcyBBZ2VkIFN0b2NrLCBJbnZlbnRvcnkgVHVybm92ZXIsIEF2YWlsYWJpbGl0eSwnICtcclxuICAgICAgICAgICAgJyBmYXN0ZXN0IG1vdmluZyBpbnZlbnRvcnkgaXRlbXMgYW5kIG90aGVycy4nLFxyXG4gICAgICAgIGlkOiAnYm94JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW1hZ2U6IGljb24yLFxyXG4gICAgICAgIHRleHQ6ICdMaW5rIGludmVudG9yeSBkYXRhIHRvIHNhbGVzIHBlcmZvcm1hbmNlIHRvIGZvcmVjYXN0IGludmVudG9yeSBwdXJjaGFzZXMgYW5kJyArXHJcbiAgICAgICAgICAgICcgaGVhbHRoeSBzdG9jayBsZXZlbHMnLFxyXG4gICAgICAgIGlkOiAnYmxhY2stYm94JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW1hZ2U6IGljb24zLFxyXG4gICAgICAgIHRleHQ6ICdWaXN1YWxpc2Ugb3ZlcmFsbCBTdXBwbHkgcGVyZm9ybWFuY2UgY2hhaW4gdGhyb3VnaCB1cGRhdGVkIGRhdGEgZGlyZWN0bHkgY29ubmVjdGVkJyArXHJcbiAgICAgICAgICAgICcgdG8geW91ciBpbnZlbnRvcnkgbWFuYWdlbWVudCBzeXN0ZW1zJyxcclxuICAgICAgICBpZDogJ2JveCcsXHJcbiAgICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IHsgVEhSRUVfREFUQSB9OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUaHJlZUl0ZW0gZnJvbSAnLi90aHJlZUl0ZW0vVGhyZWVJdGVtJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3RocmVlLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgVEhSRUVfREFUQSB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcblxyXG5jb25zdCBUaHJlZSA9ICgpID0+IHtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb259PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm92ZXJsYXl9Lz5cclxuICAgICAgICAgICAge1RIUkVFX0RBVEEubWFwKCh2YWx1ZSwgaW5kZXgpID0+IDxUaHJlZUl0ZW0gIHRocmVlRGF0YT17dmFsdWV9IGtleT17dmFsdWUudGV4dH0vPil9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaHJlZTsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJvdmVybGF5XCI6IFwidGhyZWVfb3ZlcmxheV9fMnJWaVZcIixcblx0XCJzZWN0aW9uXCI6IFwidGhyZWVfc2VjdGlvbl9fdmh2WmZcIixcblx0XCJibGFja19ib3hcIjogXCJ0aHJlZV9ibGFja19ib3hfXzF3S05PXCIsXG5cdFwibG9nb1wiOiBcInRocmVlX2xvZ29fX09hRFZlXCIsXG5cdFwiYXJyb3dcIjogXCJ0aHJlZV9hcnJvd19fMnhlNUxcIixcblx0XCJ0ZXh0X2NvbnRhaW5lclwiOiBcInRocmVlX3RleHRfY29udGFpbmVyX18xbDVOVlwiLFxuXHRcImxvZ29fY29udGFpbmVyXCI6IFwidGhyZWVfbG9nb19jb250YWluZXJfXzItWjJnXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBWaXNpYmlsaXR5U2Vuc29yIGZyb20gJ3JlYWN0LXZpc2liaWxpdHktc2Vuc29yJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi90aHJlZS5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBUaHJlZUl0ZW0gPSAoe3RocmVlRGF0YX0pID0+IHtcclxuICAgIGNvbnN0IFtpc0VsZW1lbnRWaXNpYmxlLCBzZXRJc0VsZW1lbnRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IG9uQ2hhbmdlVmlzaWJpbGl0eSA9IChpc1Zpc2libGUpID0+IGlzVmlzaWJsZSA/IHNldElzRWxlbWVudFZpc2libGUodHJ1ZSkgOiBzZXRJc0VsZW1lbnRWaXNpYmxlKGZhbHNlKTtcclxuXHJcblxyXG4gICAgY29uc3Qge2lkLCBpbWFnZSwgdGV4dH0gPSB0aHJlZURhdGE7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxWaXNpYmlsaXR5U2Vuc29yIG9uQ2hhbmdlPXtvbkNoYW5nZVZpc2liaWxpdHl9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7aWQgPT09ICdibGFjay1ib3gnID8gYCR7c3R5bGVzLmxvZ29fY29udGFpbmVyfSAke3N0eWxlcy5ibGFja19ib3h9YCAgOiBgJHtzdHlsZXMubG9nb19jb250YWluZXJ9YH1gfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgYWx0PXsnbG9nbyd9IHNyYz17aW1hZ2V9IGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IGlkPXtpZH0vPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hcnJvd30gaWQ9e2lkfSAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0X2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+e3RleHR9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvVmlzaWJpbGl0eVNlbnNvcj5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRocmVlSXRlbTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBWaXNpYmlsaXR5U2Vuc29yIGZyb20gJ3JlYWN0LXZpc2liaWxpdHktc2Vuc29yJztcclxuLy9TdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3dob1dlQXJlLm1vZHVsZS5zY3NzJztcclxuLy9JbWFnZXNcclxuaW1wb3J0IGljb25vNSBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9pY29ub181LnBuZyc7XHJcbmltcG9ydCBpY29ubzQgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9pbWFnZXMvaWNvbm9fNC5wbmcnO1xyXG5pbXBvcnQgaW1hZ2U0IGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2ltYWdlNC5qcGcnO1xyXG5pbXBvcnQgaW1hZ2UzIGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2ltYWdlMy5qcGcnO1xyXG5cclxuY29uc3QgV2hvV2VBcmUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbaXNFbGVtZW50MVZpc2libGUsIHNldElzRWxlbWVudDFWaXNpYmxlMV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaXNFbGVtZW50MlZpc2libGUsIHNldElzRWxlbWVudDJWaXNpYmxlMl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBvbkNoYW5nZVZpc2liaWxpdHkxID0gKGlzVmlzaWJsZSkgPT4gaXNWaXNpYmxlID8gc2V0SXNFbGVtZW50MVZpc2libGUxKHRydWUpIDogc2V0SXNFbGVtZW50MVZpc2libGUxKGZhbHNlKTtcclxuICAgIGNvbnN0IG9uQ2hhbmdlVmlzaWJpbGl0eTIgPSAoaXNWaXNpYmxlKSA9PiBpc1Zpc2libGUgPyBzZXRJc0VsZW1lbnQyVmlzaWJsZTIodHJ1ZSkgOiBzZXRJc0VsZW1lbnQyVmlzaWJsZTIoZmFsc2UpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmZpcnN0X3NlY3Rpb259ICR7c3R5bGVzLnNlY3Rpb259YH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpcnN0X292ZXJsYXl9Lz5cclxuICAgICAgICAgICAgICAgIDxoMT5XSE8gV0UgQVJFPC9oMT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PldlIGFyZSBjb21taXR0ZWQgdG8gaGVscGluZyBidXNpbmVzc2VzIG1ha2UgYmV0dGVyXHJcbiAgICAgICAgICAgICAgICAgICAgZGVjaXNpb25zIHVzaW5nIGRhdGEuIE91ciBleHBlcnQgdGVhbSB3aWxsIGJlY29tZSB5b3VyIHRydXN0ZWQgYWR2aXNlciBvbiBldmVyeXRoaW5nIGRhdGFcclxuICAgICAgICAgICAgICAgICAgICBjb21iaW5pbmcgcGFzc2lvbiwga25vd2xlZGdlIGFuZCBleHBlcmllbmNlIHRvIHRyYW5zZm9ybSB0aGUgd2F5IHlvdXIgYnVzaW5lc3MgZGVhbHMgd2l0aCBkYXRhLlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPFZpc2liaWxpdHlTZW5zb3Igb25DaGFuZ2U9e29uQ2hhbmdlVmlzaWJpbGl0eTF9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2lzRWxlbWVudDFWaXNpYmxlID8gYCR7c3R5bGVzLnNlY3Rpb25faWNvbn0gJHtzdHlsZXMuc2VjdGlvbn0gdmlzaWJsZUNsYXNzYCA6IGAke3N0eWxlcy5zZWN0aW9uX2ljb259ICR7c3R5bGVzLnNlY3Rpb259YH1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb25fbG9nb30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PXsnbG9nbzQnfSBzcmM9e2ljb25vNH0gY2xhc3NOYW1lPXtzdHlsZXMubG9nb19vbmV9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucGFyYWdyYXBofT5XZSBwcm92aWRlIGVuZCB0byBlbmQgQkkgc2VydmljZXMgdGFpbG9yZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGZpdCB5b3VyIGNvbXBhbnnigJlzIGluZGl2aWR1YWwgbmVlZHMuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PXsnaW1hZ2U0J30gc3JjPXtpbWFnZTR9IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX29uZX0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvVmlzaWJpbGl0eVNlbnNvcj5cclxuICAgICAgICAgICAgPFZpc2liaWxpdHlTZW5zb3Igb25DaGFuZ2U9e29uQ2hhbmdlVmlzaWJpbGl0eTJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2lzRWxlbWVudDJWaXNpYmxlID8gYCR7c3R5bGVzLnNlY3Rpb25faWNvbn0gJHtzdHlsZXMuc2VjdGlvbn0gdmlzaWJsZUNsYXNzYCA6IGAke3N0eWxlcy5zZWN0aW9uX2ljb259ICR7c3R5bGVzLnNlY3Rpb259YH1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGFsdD17J2ltYWdlMyd9IHNyYz17aW1hZ2UzfSBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZV90d299Lz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb25fbG9nb30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PXsnbG9nbzUnfSBzcmM9e2ljb25vNX0gY2xhc3NOYW1lPXtzdHlsZXMubG9nb190d299Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucGFyYWdyYXBofT5XZSBhcmUgYSBib3V0aXF1ZSBkYXRhIGFuYWx5dGljc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGluZyBmaXJtIGJhc2VkIGluIE1lbGJvdXJuZSwgQXVzdHJhbGlhIHdpdGggZXh0ZW5zaXZlIGV4cGVyaWVuY2Ugd29ya2luZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3RlbHkgaW4gZGF0YSBwcm9qZWN0cyBhcm91bmQgdGhlIHdvcmxkLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1Zpc2liaWxpdHlTZW5zb3I+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaG9XZUFyZSIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIndob1dlQXJlX2NvbnRhaW5lcl9fampweEVcIixcblx0XCJzZWN0aW9uXCI6IFwid2hvV2VBcmVfc2VjdGlvbl9fMWpoRjhcIixcblx0XCJmaXJzdF9vdmVybGF5XCI6IFwid2hvV2VBcmVfZmlyc3Rfb3ZlcmxheV9fcGFnUmxcIixcblx0XCJmaXJzdF9zZWN0aW9uXCI6IFwid2hvV2VBcmVfZmlyc3Rfc2VjdGlvbl9fMi1KYkJcIixcblx0XCJ0ZXh0XCI6IFwid2hvV2VBcmVfdGV4dF9fMndQaHZcIixcblx0XCJ0ZXh0X3NcIjogXCJ3aG9XZUFyZV90ZXh0X3NfXzNpR0JnXCIsXG5cdFwic2VjdGlvbl9pY29uXCI6IFwid2hvV2VBcmVfc2VjdGlvbl9pY29uX18zRmtkSFwiLFxuXHRcImltYWdlX3R3b1wiOiBcIndob1dlQXJlX2ltYWdlX3R3b19fMmtMM1RcIixcblx0XCJpbWFnZV9vbmVcIjogXCJ3aG9XZUFyZV9pbWFnZV9vbmVfXzNvQ1plXCIsXG5cdFwibG9nb19vbmVcIjogXCJ3aG9XZUFyZV9sb2dvX29uZV9fM2lsdkxcIixcblx0XCJsb2dvX3R3b1wiOiBcIndob1dlQXJlX2xvZ29fdHdvX18ybTdrb1wiLFxuXHRcInBhcmFncmFwaFwiOiBcIndob1dlQXJlX3BhcmFncmFwaF9fMUY0VktcIixcblx0XCJzZWN0aW9uX2xvZ29cIjogXCJ3aG9XZUFyZV9zZWN0aW9uX2xvZ29fXzEyYnRkXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbi8vY3NzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi95b3VyRGF0YS5tb2R1bGUuc2Nzcyc7XHJcbi8vSW1hZ2VzXHJcbmltcG9ydCBGaXJzdEljb25XaGl0ZSBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2ljb25zL2ljb25vXzExX2RpZi5wbmcnO1xyXG5pbXBvcnQgU2Vjb25kSWNvbldoaXRlIGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvaWNvbnMvaWNvbm9fMTJfZGlmLnBuZydcclxuaW1wb3J0IFRoaXJkSWNvbldoaXRlIGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvaWNvbnMvaWNvbm9fMTNfZGlmLnBuZydcclxuaW1wb3J0IEZpcnN0SWNvbk9yYW5nZSBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2ljb25zL2ljb25vXzExLnBuZydcclxuaW1wb3J0IFNlY29uZEljb25PcmFuZ2UgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9pY29ucy9pY29ub18xMi5wbmcnXHJcbmltcG9ydCBUaGlyZEljb25PcmFuZ2UgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9pY29ucy9pY29ub18xMy5wbmcnXHJcbmltcG9ydCBJbWFnZSBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9pbWFnZTUuanBnJ1xyXG5cclxuY29uc3QgWW91ckRhdGEgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbaXNMZWZ0SG92ZXIsIHNldElzTGVmdEhvdmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtpc1RvcEhvdmVyLCBzZXRJc1RvcEhvdmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtpc0JvdHRvbUhvdmVyLCBzZXRJc0JvdHRvbUhvdmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5FWFBMT1JFIFlPVVIgREFUQTwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLml0ZW1zX3dyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpc1RvcEhvdmVyID8gYCR7c3R5bGVzLml0ZW19ICR7c3R5bGVzLmhvdmVyX2VsZW1lbnR9YCA6IGAke3N0eWxlcy5pdGVtfWB9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRJc1RvcEhvdmVyKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldElzVG9wSG92ZXIoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBhbHQ9eyd0b3AtaWNvbid9IHNyYz17Rmlyc3RJY29uT3JhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5TYXkgZ29vZGJ5ZSB0byBjbHVua3kgc3ByZWFkc2hlZXRzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljIHZpZXdzIGFuZCBtYW51YWxseSBjb21waWxlZCByZXBvcnRzIHByb25lIHRvIGh1bWFuIGVycm9yPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpc0xlZnRIb3ZlciA/IGAke3N0eWxlcy5pdGVtfSAke3N0eWxlcy5ob3Zlcl9lbGVtZW50fWAgOiBgJHtzdHlsZXMuaXRlbX1gfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SXNMZWZ0SG92ZXIodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0SXNMZWZ0SG92ZXIoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBhbHQ9eydsZWZ0LWljb24nfSBzcmM9e1NlY29uZEljb25PcmFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PkRpc2NvdmVyIHBvd2VyZnVsIGluc2lnaHRzIHdpdGhpbiB5b3VyIGV4aXN0aW5nIGRhdGEgdG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkZW50aWZ5IGFyZWFzIG9mIGltcHJvdmVtZW50LCBzdHJlYW1saW5lIG9wZXJhdGlvbnMgYW5kIG1ha2UgZXZpZGVuY2UtYmFzZWQgZGVjaXNpb25zLiA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2lzQm90dG9tSG92ZXIgPyBgJHtzdHlsZXMuaXRlbX0gJHtzdHlsZXMuaG92ZXJfZWxlbWVudH1gIDogYCR7c3R5bGVzLml0ZW19YH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldElzQm90dG9tSG92ZXIodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0SXNCb3R0b21Ib3ZlcihmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGFsdD17J2JvdHRvbS1pY29uJ30gc3JjPXtUaGlyZEljb25PcmFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PkdldCBhIEJJIHNvbHV0aW9uIHRhaWxvcmVkIHRvIHlvdXIgYnVzaW5lc3MgbmVlZHMgdG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybSB5b3VyIGRhdGEgaW50byBhY3Rpb25hYmxlIGludGVsbGlnZW5jZSBpbiB0aGUgbW9zdCBlZmZpY2llbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBzdXN0YWluYWJsZSB3YXkuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJob21idXNfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aXNMZWZ0SG92ZXIgPyBgJHtzdHlsZXMucmhvbWJ1c30gJHtzdHlsZXMubGVmdH0gJHtzdHlsZXMucmhvbWJ1c19ob3Zlcn1gIDogYCR7c3R5bGVzLnJob21idXN9ICR7c3R5bGVzLmxlZnR9YH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldElzTGVmdEhvdmVyKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldElzTGVmdEhvdmVyKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtTZWNvbmRJY29uV2hpdGV9IGFsdD17J2xlZnQtaWNvbid9IGNsYXNzTmFtZT17c3R5bGVzLmljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aXNUb3BIb3ZlciA/IGAke3N0eWxlcy5yaG9tYnVzfSAke3N0eWxlcy50b3B9ICR7c3R5bGVzLnJob21idXNfaG92ZXJ9YCA6IGAke3N0eWxlcy5yaG9tYnVzfSAke3N0eWxlcy50b3B9YH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldElzVG9wSG92ZXIodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0SXNUb3BIb3ZlcihmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Rmlyc3RJY29uV2hpdGV9IGFsdD17J3RvcC1pY29uJ30gY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMucmhvbWJ1c30gJHtzdHlsZXMucmlnaHR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtJbWFnZX0gYWx0PXsncmlnaHQnfSBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aXNCb3R0b21Ib3ZlciA/IGAke3N0eWxlcy5yaG9tYnVzfSAke3N0eWxlcy5ib3R0b219ICR7c3R5bGVzLnJob21idXNfaG92ZXJ9YCA6IGAke3N0eWxlcy5yaG9tYnVzfSAke3N0eWxlcy5ib3R0b219YH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldElzQm90dG9tSG92ZXIodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0SXNCb3R0b21Ib3ZlcihmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17VGhpcmRJY29uV2hpdGV9IGFsdD17J2ZvdXJ0aC1pY29uJ30gY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgWW91ckRhdGE7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwieW91ckRhdGFfY29udGFpbmVyX19qSGpyYlwiLFxuXHRcImNvbnRlbnRcIjogXCJ5b3VyRGF0YV9jb250ZW50X18xNW1zR1wiLFxuXHRcIml0ZW1zX3dyYXBwZXJcIjogXCJ5b3VyRGF0YV9pdGVtc193cmFwcGVyX19mb25Mc1wiLFxuXHRcInRleHRcIjogXCJ5b3VyRGF0YV90ZXh0X18ydHVhVlwiLFxuXHRcIml0ZW1cIjogXCJ5b3VyRGF0YV9pdGVtX19jeUFZR1wiLFxuXHRcInRpdGxlXCI6IFwieW91ckRhdGFfdGl0bGVfXzNhYmdMXCIsXG5cdFwiaWNvblwiOiBcInlvdXJEYXRhX2ljb25fXzNfQnd6XCIsXG5cdFwiaW1hZ2VcIjogXCJ5b3VyRGF0YV9pbWFnZV9fMzdFdGRcIixcblx0XCJyaG9tYnVzX2NvbnRhaW5lclwiOiBcInlvdXJEYXRhX3Job21idXNfY29udGFpbmVyX19DUG1OU1wiLFxuXHRcInJob21idXNcIjogXCJ5b3VyRGF0YV9yaG9tYnVzX185Qng3LVwiLFxuXHRcImxlZnRcIjogXCJ5b3VyRGF0YV9sZWZ0X18yUlRnRVwiLFxuXHRcInRvcFwiOiBcInlvdXJEYXRhX3RvcF9fMllibURcIixcblx0XCJyaWdodFwiOiBcInlvdXJEYXRhX3JpZ2h0X19tQzlxY1wiLFxuXHRcImJvdHRvbVwiOiBcInlvdXJEYXRhX2JvdHRvbV9fMW96eklcIixcblx0XCJyaG9tYnVzX2hvdmVyXCI6IFwieW91ckRhdGFfcmhvbWJ1c19ob3Zlcl9fblZpSHVcIixcblx0XCJob3Zlcl9lbGVtZW50XCI6IFwieW91ckRhdGFfaG92ZXJfZWxlbWVudF9fM2poTEtcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9pY29ub18xLTdjMWRmMTMzOTg2Yzk5ZTc1OWFjM2QwMTc2N2E0NGU4LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9pY29ub18yLTJlYjE4YzU0ZjhhYzVlZWM5OWQ5MmI5ZDA0NjhlNWIyLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9pY29ub18zLTcwMjBjMTM5ZWQyYzIwZTQ0ZDQ1ZGUxNzI0MWMwZDg5LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSFpwWlhkQ2IzZzlJakFnTUNBNE5ERXVPU0ExT1RVdU15SStEUW9nSUNBZ1BHY2dabWxzYkQwaUl6WXhSRUZHUWlJK0RRb2dJQ0FnSUNBZ0lEeHdZWFJvSUdROUlrMDJOall1TXlBeU9UWXVOV013TFRNeUxqVXROREF1TnkwMk15NHpMVEV3TXk0eExUZ3lMalFnTVRRdU5DMDJNeTQySURndE1URTBMakl0TWpBdU1pMHhNekF1TkMwMkxqVXRNeTQ0TFRFMExqRXROUzQyTFRJeUxqUXROUzQyZGpJeUxqTmpOQzQySURBZ09DNHpMamtnTVRFdU5DQXlMallnTVRNdU5pQTNMamdnTVRrdU5TQXpOeTQxSURFMExqa2dOelV1TnkweExqRWdPUzQwTFRJdU9TQXhPUzR6TFRVdU1TQXlPUzQwTFRFNUxqWXROQzQ0TFRReExUZ3VOUzAyTXk0MUxURXdMamt0TVRNdU5TMHhPQzQxTFRJM0xqVXRNelV1TXkwME1TNDJMVFV3SURNeUxqWXRNekF1TXlBMk15NHlMVFEyTGprZ09EUXRORFl1T1ZZM09HTXRNamN1TlNBd0xUWXpMalVnTVRrdU5pMDVPUzQ1SURVekxqWXRNell1TkMwek15NDRMVGN5TGpRdE5UTXVNaTA1T1M0NUxUVXpMakoyTWpJdU0yTXlNQzQzSURBZ05URXVOQ0F4Tmk0MUlEZzBJRFEyTGpZdE1UUWdNVFF1TnkweU9DQXpNUzQwTFRReExqTWdORGt1T1MweU1pNDJJREl1TkMwME5DQTJMakV0TmpNdU5pQXhNUzB5TGpNdE1UQXROQzB4T1M0M0xUVXVNaTB5T1MwMExqY3RNemd1TWlBeExqRXROamN1T1NBeE5DNDJMVGMxTGpnZ015MHhMamdnTmk0NUxUSXVOaUF4TVM0MUxUSXVObFkzT0M0MVl5MDRMalFnTUMweE5pQXhMamd0TWpJdU5pQTFMall0TWpndU1TQXhOaTR5TFRNMExqUWdOall1TnkweE9TNDVJREV6TUM0eExUWXlMaklnTVRrdU1pMHhNREl1TnlBME9TNDVMVEV3TWk0M0lEZ3lMak1nTUNBek1pNDFJRFF3TGpjZ05qTXVNeUF4TURNdU1TQTRNaTQwTFRFMExqUWdOak11TmkwNElERXhOQzR5SURJd0xqSWdNVE13TGpRZ05pNDFJRE11T0NBeE5DNHhJRFV1TmlBeU1pNDFJRFV1TmlBeU55NDFJREFnTmpNdU5TMHhPUzQySURrNUxqa3ROVE11TmlBek5pNDBJRE16TGpnZ056SXVOQ0ExTXk0eUlEazVMamtnTlRNdU1pQTRMalFnTUNBeE5pMHhMamdnTWpJdU5pMDFMallnTWpndU1TMHhOaTR5SURNMExqUXROall1TnlBeE9TNDVMVEV6TUM0eElEWXlMVEU1TGpFZ01UQXlMalV0TkRrdU9TQXhNREl1TlMwNE1pNHplbTB0TVRNd0xqSXROall1TjJNdE15NDNJREV5TGprdE9DNHpJREkyTGpJdE1UTXVOU0F6T1M0MUxUUXVNUzA0TFRndU5DMHhOaTB4TXk0eExUSTBMVFF1TmkwNExUa3VOUzB4TlM0NExURTBMalF0TWpNdU5DQXhOQzR5SURJdU1TQXlOeTQ1SURRdU55QTBNU0EzTGpsNmJTMDBOUzQ0SURFd05pNDFZeTAzTGpnZ01UTXVOUzB4TlM0NElESTJMak10TWpRdU1TQXpPQzR5TFRFMExqa2dNUzR6TFRNd0lESXRORFV1TWlBeUxURTFMakVnTUMwek1DNHlMUzQzTFRRMUxURXVPUzA0TGpNdE1URXVPUzB4Tmk0MExUSTBMall0TWpRdU1pMHpPQzAzTGpZdE1UTXVNUzB4TkM0MUxUSTJMalF0TWpBdU9DMHpPUzQ0SURZdU1pMHhNeTQwSURFekxqSXRNall1T0NBeU1DNDNMVE01TGprZ055NDRMVEV6TGpVZ01UVXVPQzB5Tmk0eklESTBMakV0TXpndU1pQXhOQzQ1TFRFdU15QXpNQzB5SURRMUxqSXRNaUF4TlM0eElEQWdNekF1TWk0M0lEUTFJREV1T1NBNExqTWdNVEV1T1NBeE5pNDBJREkwTGpZZ01qUXVNaUF6T0NBM0xqWWdNVE11TVNBeE5DNDFJREkyTGpRZ01qQXVPQ0F6T1M0NExUWXVNeUF4TXk0MExURXpMaklnTWpZdU9DMHlNQzQzSURNNUxqbDZiVE15TGpNdE1UTmpOUzQwSURFekxqUWdNVEFnTWpZdU9DQXhNeTQ0SURNNUxqZ3RNVE11TVNBekxqSXRNall1T1NBMUxqa3ROREV1TWlBNElEUXVPUzAzTGpjZ09TNDRMVEUxTGpZZ01UUXVOQzB5TXk0M0lEUXVOaTA0SURndU9TMHhOaTR4SURFekxUSTBMakY2VFRReU1TNHlJRFF6TUdNdE9TNHpMVGt1TmkweE9DNDJMVEl3TGpNdE1qY3VPQzB6TWlBNUlDNDBJREU0TGpJdU55QXlOeTQxTGpjZ09TNDBJREFnTVRndU55MHVNaUF5Tnk0NExTNDNMVGtnTVRFdU55MHhPQzR6SURJeUxqUXRNamN1TlNBek1ucHRMVGMwTGpRdE5UZ3VPV010TVRRdU1pMHlMakV0TWpjdU9TMDBMamN0TkRFdE55NDVJRE11TnkweE1pNDVJRGd1TXkweU5pNHlJREV6TGpVdE16a3VOU0EwTGpFZ09DQTRMalFnTVRZZ01UTXVNU0F5TkNBMExqY2dPQ0E1TGpVZ01UVXVPQ0F4TkM0MElESXpMalI2VFRReU1DNDNJREUyTTJNNUxqTWdPUzQySURFNExqWWdNakF1TXlBeU55NDRJRE15TFRrdExqUXRNVGd1TWkwdU55MHlOeTQxTFM0M0xUa3VOQ0F3TFRFNExqY3VNaTB5Tnk0NExqY2dPUzB4TVM0M0lERTRMak10TWpJdU5DQXlOeTQxTFRNeWVtMHROelFnTlRndU9XTXROQzQ1SURjdU55MDVMamdnTVRVdU5pMHhOQzQwSURJekxqY3ROQzQySURndE9DNDVJREUyTFRFeklESTBMVFV1TkMweE15NDBMVEV3TFRJMkxqZ3RNVE11T0Mwek9TNDRJREV6TGpFdE15NHhJREkyTGprdE5TNDRJRFF4TGpJdE55NDVlbTB0T1RBdU5TQXhNalV1TW1NdE16VXVOQzB4TlM0eExUVTRMak10TXpRdU9TMDFPQzR6TFRVd0xqWWdNQzB4TlM0M0lESXlMamt0TXpVdU5pQTFPQzR6TFRVd0xqWWdPQzQyTFRNdU55QXhPQzAzSURJM0xqY3RNVEF1TVNBMUxqY2dNVGt1TmlBeE15NHlJRFF3SURJeUxqVWdOakF1T1MwNUxqSWdNakF1T0MweE5pNDJJRFF4TGpFdE1qSXVNaUEyTUM0MkxUa3VPUzB6TGpFdE1Ua3VNeTAyTGpVdE1qZ3RNVEF1TW5wTk16RXdJRFE1TUdNdE1UTXVOaTAzTGpndE1Ua3VOUzB6Tnk0MUxURTBMamt0TnpVdU55QXhMakV0T1M0MElESXVPUzB4T1M0eklEVXVNUzB5T1M0MElERTVMallnTkM0NElEUXhJRGd1TlNBMk15NDFJREV3TGprZ01UTXVOU0F4T0M0MUlESTNMalVnTXpVdU15QTBNUzQySURVd0xUTXlMallnTXpBdU15MDJNeTR5SURRMkxqa3RPRFFnTkRZdU9TMDBMalV0TGpFdE9DNHpMVEV0TVRFdU15MHlMamQ2YlRJek55NHlMVGMyTGpKak5DNDNJRE00TGpJdE1TNHhJRFkzTGprdE1UUXVOaUEzTlM0NExUTWdNUzQ0TFRZdU9TQXlMall0TVRFdU5TQXlMall0TWpBdU55QXdMVFV4TGpRdE1UWXVOUzA0TkMwME5pNDJJREUwTFRFMExqY2dNamd0TXpFdU5DQTBNUzR6TFRRNUxqa2dNakl1TmkweUxqUWdORFF0Tmk0eElEWXpMall0TVRFZ01pNHpJREV3TGpFZ05DNHhJREU1TGpnZ05TNHlJREk1TGpGNmJUTTRMalV0TmpZdU4yTXRPQzQySURNdU55MHhPQ0EzTFRJM0xqY2dNVEF1TVMwMUxqY3RNVGt1TmkweE15NHlMVFF3TFRJeUxqVXROakF1T1NBNUxqSXRNakF1T0NBeE5pNDJMVFF4TGpFZ01qSXVNaTAyTUM0MklEa3VPU0F6TGpFZ01Ua3VNeUEyTGpVZ01qZ3VNU0F4TUM0eUlETTFMalFnTVRVdU1TQTFPQzR6SURNMExqa2dOVGd1TXlBMU1DNDJMUzR4SURFMUxqY3RNak1nTXpVdU5pMDFPQzQwSURVd0xqWjZUVE15TUM0NElEYzRMalI2SWk4K0RRb2dJQ0FnSUNBZ0lEeGphWEpqYkdVZ1kzZzlJalF5TUM0NUlpQmplVDBpTWprMkxqVWlJSEk5SWpRMUxqY2lMejROQ2lBZ0lDQWdJQ0FnUEhCaGRHZ2daRDBpVFRVeU1DNDFJRGM0TGpGNklpOCtEUW9nSUNBZ1BDOW5QZzBLUEM5emRtYytEUW89XCIiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG4vL0NvbXBvbmVudHNcclxuaW1wb3J0IE91clNlcnZpY2VzIGZyb20gJy4uL2NvbXBvbmVudHMvT3VyU2VydmljZXMnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xyXG5pbXBvcnQgQmFubmVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Jhbm5lclwiO1xyXG5pbXBvcnQgV2hvV2VBcmUgZnJvbSBcIi4uL2NvbXBvbmVudHMvV2hvV2VBcmVcIjtcclxuaW1wb3J0IEV4cGxvcmUgZnJvbSBcIi4uL2NvbXBvbmVudHMvRXhwbG9yZVwiO1xyXG5pbXBvcnQgWW91ckRhdGEgZnJvbSBcIi4uL2NvbXBvbmVudHMvWW91ckRhdGFcIjtcclxuaW1wb3J0IFRocmVlIGZyb20gXCIuLi9jb21wb25lbnRzL1RocmVlXCI7XHJcbmltcG9ydCBPdXJXb3JrIGZyb20gXCIuLi9jb21wb25lbnRzL091cldvcmtcIjtcclxuaW1wb3J0IENvbnRhY3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udGFjdFwiO1xyXG5cclxuZnVuY3Rpb24gQXBwKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxyXG4gICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgIDxCYW5uZXIgLz5cclxuICAgICAgICAgICAgPE91clNlcnZpY2VzIC8+XHJcbiAgICAgICAgICAgIDxXaG9XZUFyZSAvPlxyXG4gICAgICAgICAgICA8RXhwbG9yZSAvPlxyXG4gICAgICAgICAgICA8WW91ckRhdGEgLz5cclxuICAgICAgICAgICAgPFRocmVlIC8+XHJcbiAgICAgICAgICAgIDxPdXJXb3JrIC8+XHJcbiAgICAgICAgICAgIDxDb250YWN0IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9pY29ubzctOTE1ZGU5YjNhOGM2ZDVlNzdiZGZjOGI3ZTc2ZjdjZmMucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2ljb25vXzEwLTkzZjhjZGEwYTg0YWE5NzY3YTEzM2ExNTUyNDgxMjJmLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9pY29ub18xMS05N2U3ZmJkNzNkMTY3ZjY4MWE0ZjBkNWRiYTM2ZDU1OS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvaWNvbm9fMTFfZGlmLTU1N2FiZTYzMzYxNzljZTFhYjZmOTAzNGZlMGQ1MDlkLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9pY29ub18xMi1hYWUyNDBmMjI4ZDQ5ZjRhNjcyNTQ3NWRhM2FiODMzNC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvaWNvbm9fMTJfZGlmLTA3ZWIzOTIxMjdlODcwZDcwZDRjYjg1ZDMwOGZlMDI4LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9pY29ub18xMy04N2FjYTQ5ODg1NjU0YTNjNGZhOGQ3Nzg1YzBiZmFmNC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvaWNvbm9fMTNfZGlmLTQwYWExMDM1ZTdhMmU0NmUyYWJlY2ZmYjFkN2I0Y2I1LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9pY29ub18xNC01MDY1MGEzNDU4ZjNjNjBiM2JjN2NjZGY5ODYwZWEzMC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvaWNvbm9fMTUtNGQ5YmVkYjJjZTQxMjNmMzBkZWMyNDAwZDM1NDU3YTUucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2ljb25vXzE2LTg1MDNmM2E4YmNjZDlmZjhlYTdkOWI3MjVlY2ZlZDYwLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9pY29ub182LTUyMDRiNWJmNWZmYjdjOTEwZWFjYmViMmJjNWU2MjQ1LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9pY29ub184LTcxMjI1ODNhNWI1ZTc2ZTc0ZjYwZDVjZTNjZGNhN2I3LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9pY29ub185LTc0NzQ5ZDI0M2UwNjhkYzA3NTQzMjYxM2ZmYjE1ODk1LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9UcmFuc3BhcmVudC1sb2dvLTk0MTA4NGU4ODgzNjMyYjBmNGZkYzQ3MDFhOWM4NWQxLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9pY29ub180LTAwZWRiMGNlMzRhMjk3NzQzOWJjNWU3M2IzYjlkYmE0LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9pY29ub181LWFlZTA2NTZiNGY5NjAwYjhjZDRlMjUwYTgzNWY2ZGQyLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9pbWFnZTMtMDVlOTM1Mzk3YTYzNDc1ZWRiZjI0MWMyNzM3YzQ4ZjcuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2ltYWdlNC0yMTY5NmFkMGQ4ZGY4YTViODFjNDQzMTg5ZDEzNmVmMC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvaW1hZ2U1LTUwMmIwYmJjOTM3YzcxOTBhZTg3MWViNTM1YmU2MmE0LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImhpcHBvLWNvbXBvbmVudHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWZyYW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdmlzaWJpbGl0eS1zZW5zb3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=