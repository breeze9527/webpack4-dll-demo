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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./deps/dep1.js":
/*!**********************!*\
  !*** ./deps/dep1.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function greeting() {
    return 'hi';
}


/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const isboolean = __webpack_require__(/*! lodash.isboolean */ "./node_modules/lodash.isboolean/index.js");
const map = __webpack_require__(/*! lodash.map */ "./node_modules/lodash.map/index.js");

const sayHi = __webpack_require__(/*! scoped/dep1 */ "scoped/dep1.js");
const sayHello = __webpack_require__(/*! scoped/dep2 */ "scoped/dep2.js");

const sayHello2 = __webpack_require__(/*! ./deps/dep1 */ "./deps/dep1.js"); // will not refence 

console.info(sayHi());
console.info(sayHello());
console.info(sayHello === sayHello2);

const data = map(['A', 'B', true, false], function (item) {
    return isboolean(item) ? String(item) : item
});
console.info(data);


/***/ }),

/***/ "./node_modules/lodash.isboolean/index.js":
/*!*******************************************************************************************************!*\
  !*** delegated ./node_modules/lodash.isboolean/index.js from dll-reference main_319526f67f3f7b418077 ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference main_319526f67f3f7b418077 */ "dll-reference main_319526f67f3f7b418077"))("./node_modules/lodash.isboolean/index.js");

/***/ }),

/***/ "./node_modules/lodash.map/index.js":
/*!*************************************************************************************************!*\
  !*** delegated ./node_modules/lodash.map/index.js from dll-reference main_319526f67f3f7b418077 ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference main_319526f67f3f7b418077 */ "dll-reference main_319526f67f3f7b418077"))("./node_modules/lodash.map/index.js");

/***/ }),

/***/ "dll-reference main_2d7aa9437020ac20a9b1":
/*!********************************************!*\
  !*** external "main_2d7aa9437020ac20a9b1" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = main_2d7aa9437020ac20a9b1;

/***/ }),

/***/ "dll-reference main_319526f67f3f7b418077":
/*!********************************************!*\
  !*** external "main_319526f67f3f7b418077" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = main_319526f67f3f7b418077;

/***/ }),

/***/ "scoped/dep1.js":
/*!************************************************************************!*\
  !*** delegated ./dep1.js from dll-reference main_2d7aa9437020ac20a9b1 ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference main_2d7aa9437020ac20a9b1 */ "dll-reference main_2d7aa9437020ac20a9b1"))("./deps/dep1.js");

/***/ }),

/***/ "scoped/dep2.js":
/*!************************************************************************!*\
  !*** delegated ./dep2.js from dll-reference main_2d7aa9437020ac20a9b1 ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference main_2d7aa9437020ac20a9b1 */ "dll-reference main_2d7aa9437020ac20a9b1"))("./deps/dep2.js");

/***/ })

/******/ });