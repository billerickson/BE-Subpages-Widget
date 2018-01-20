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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__list_subpages__ = __webpack_require__(1);\n/**\n * Import blocks\n */\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Jsb2Nrcy9pbmRleC5qcz84MTkzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogSW1wb3J0IGJsb2Nrc1xuICovXG5pbXBvcnQgJy4vbGlzdC1zdWJwYWdlcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ibG9ja3MvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__list_subpages__ = __webpack_require__(2);\n/**\n * Block dependencies\n */\n//import './style.scss';\n//import './editor.scss';\n\n\n/**\n * Internal block libraries\n */\nvar __ = wp.i18n.__;\nvar _wp$blocks = wp.blocks,\n    registerBlockType = _wp$blocks.registerBlockType,\n    Editable = _wp$blocks.Editable;\n\n/**\n * Register block\n */\n\n/* unused harmony default export */ var _unused_webpack_default_export = (registerBlockType('be/list-subpages', {\n  title: __('List Subpages'),\n  category: 'widgets',\n  icon: 'list-view',\n\n  edit: function edit(props) {\n    return wp.element.createElement(\n      'div',\n      { className: props.className },\n      !!props.focus ? wp.element.createElement(\n        'p',\n        null,\n        'Focus'\n      ) : Object(__WEBPACK_IMPORTED_MODULE_0__list_subpages__[\"a\" /* default */])()\n    );\n  },\n\n  save: function save(props) {\n    return Object(__WEBPACK_IMPORTED_MODULE_0__list_subpages__[\"a\" /* default */])();\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Jsb2Nrcy9saXN0LXN1YnBhZ2VzL2luZGV4LmpzP2MxOTMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBCbG9jayBkZXBlbmRlbmNpZXNcbiAqL1xuLy9pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG4vL2ltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG5pbXBvcnQgbGlzdFN1YnBhZ2VzIGZyb20gJy4vbGlzdC1zdWJwYWdlcyc7XG5cbi8qKlxuICogSW50ZXJuYWwgYmxvY2sgbGlicmFyaWVzXG4gKi9cbnZhciBfXyA9IHdwLmkxOG4uX187XG52YXIgX3dwJGJsb2NrcyA9IHdwLmJsb2NrcyxcbiAgICByZWdpc3RlckJsb2NrVHlwZSA9IF93cCRibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGUsXG4gICAgRWRpdGFibGUgPSBfd3AkYmxvY2tzLkVkaXRhYmxlO1xuXG4vKipcbiAqIFJlZ2lzdGVyIGJsb2NrXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0ZXJCbG9ja1R5cGUoJ2JlL2xpc3Qtc3VicGFnZXMnLCB7XG4gIHRpdGxlOiBfXygnTGlzdCBTdWJwYWdlcycpLFxuICBjYXRlZ29yeTogJ3dpZGdldHMnLFxuICBpY29uOiAnbGlzdC12aWV3JyxcblxuICBlZGl0OiBmdW5jdGlvbiBlZGl0KHByb3BzKSB7XG4gICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgeyBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSB9LFxuICAgICAgISFwcm9wcy5mb2N1cyA/IHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3AnLFxuICAgICAgICBudWxsLFxuICAgICAgICAnRm9jdXMnXG4gICAgICApIDogbGlzdFN1YnBhZ2VzKClcbiAgICApO1xuICB9LFxuXG4gIHNhdmU6IGZ1bmN0aW9uIHNhdmUocHJvcHMpIHtcbiAgICByZXR1cm4gbGlzdFN1YnBhZ2VzKCk7XG4gIH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYmxvY2tzL2xpc3Qtc3VicGFnZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = listSubpages;\n/**\n * Returns a Promise with the subpages or an error on failure.\n *\n * @param   {Number} parentId       Parent Post ID\n *\n * @returns {wp.api.collections.Posts} Returns a Promise with the subpages.\n */\nfunction listSubpages() {\n  var parentId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n\n  return wp.element.createElement(\n    \"ul\",\n    null,\n    wp.element.createElement(\n      \"li\",\n      null,\n      \"Subpage 1\"\n    ),\n    wp.element.createElement(\n      \"li\",\n      null,\n      \"Subpage 2\"\n    )\n  );\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Jsb2Nrcy9saXN0LXN1YnBhZ2VzL2xpc3Qtc3VicGFnZXMuanM/NDNhMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJldHVybnMgYSBQcm9taXNlIHdpdGggdGhlIHN1YnBhZ2VzIG9yIGFuIGVycm9yIG9uIGZhaWx1cmUuXG4gKlxuICogQHBhcmFtICAge051bWJlcn0gcGFyZW50SWQgICAgICAgUGFyZW50IFBvc3QgSURcbiAqXG4gKiBAcmV0dXJucyB7d3AuYXBpLmNvbGxlY3Rpb25zLlBvc3RzfSBSZXR1cm5zIGEgUHJvbWlzZSB3aXRoIHRoZSBzdWJwYWdlcy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGlzdFN1YnBhZ2VzKCkge1xuICB2YXIgcGFyZW50SWQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGZhbHNlO1xuXG4gIHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJ1bFwiLFxuICAgIG51bGwsXG4gICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJsaVwiLFxuICAgICAgbnVsbCxcbiAgICAgIFwiU3VicGFnZSAxXCJcbiAgICApLFxuICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgIFwibGlcIixcbiAgICAgIG51bGwsXG4gICAgICBcIlN1YnBhZ2UgMlwiXG4gICAgKVxuICApO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYmxvY2tzL2xpc3Qtc3VicGFnZXMvbGlzdC1zdWJwYWdlcy5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);