/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nconsole.log(\"Everything is ready!\");\r\n\r\n// Плагин для поля ввода телефона\r\n\r\nlet input = document.querySelector(\"#phone\");\r\nlet iti = window.intlTelInput(input, {\r\n    allowDropdown: true,\r\n    initialCountry: \"ru\",\r\n    preferredCountries: [\"ru\", \"ua\", \"by\", \"kz\"],\r\n    nationalMode: true,\r\n    utilsScript:\r\n        \"https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js\",\r\n});\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    \r\n    // Табы\r\n\r\n    const catalogHeaders = document.querySelectorAll(\".catalog__headers li\");\r\n    const catalogItems = document.querySelectorAll(\".catalog__item\");\r\n\r\n    catalogHeaders.forEach(function (item) {\r\n        item.addEventListener(\"click\", function () {\r\n            const dataAtr = this.getAttribute('data-category'),\r\n                activeItems = document.querySelectorAll('.catalog__item[data-category=\"'+dataAtr+'\"]'),\r\n                activeHeader = document.querySelector('.catalog__headers li.active');\r\n\r\n                activeHeader.classList.remove('active');\r\n                item.classList.add('active');\r\n                \r\n                catalogItems.forEach(function (item) {\r\n                    item.style.display = 'none';\r\n                });\r\n    \r\n                activeItems.forEach(function (item) {\r\n                    item.style.display = 'block';\r\n                });\r\n                \r\n        });\r\n    });\r\n    document.querySelector('.catalog__headers li.active').click();\r\n\r\n\r\n    // // Initialize and add the map\r\n    // function initMap() {\r\n    //     // The location of Uluru\r\n    //     const uluru = { lat: -25.344, lng: 131.031 };\r\n    //     // The map, centered at Uluru\r\n    //     const map = new google.maps.Map(document.getElementById(\"map\"), {\r\n    //     zoom: 4,\r\n    //     center: uluru,\r\n    //     });\r\n    //     // The marker, positioned at Uluru\r\n    //     const marker = new google.maps.Marker({\r\n    //     position: uluru,\r\n    //     map: map,\r\n    //     });\r\n    // }\r\n    \r\n    // window.initMap = initMap;\r\n});\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ })

/******/ });