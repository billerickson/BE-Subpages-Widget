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
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__list_subpages__ = __webpack_require__(5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__select_subpages__ = __webpack_require__(6);\n/**\n * WordPress Dependencies\n */\nvar __ = wp.i18n.__;\nvar _wp$blocks = wp.blocks,\n    registerBlockType = _wp$blocks.registerBlockType,\n    Editable = _wp$blocks.Editable;\nvar _wp$components = wp.components,\n    withInstanceId = _wp$components.withInstanceId,\n    withAPIData = _wp$components.withAPIData;\nvar buildTermsTree = wp.utils.buildTermsTree;\n\n/**\n * Internal dependencies\n */\n//import './style.scss';\n//import './editor.scss';\n\n\n\n\n/**\n * Register block\n */\n/* unused harmony default export */ var _unused_webpack_default_export = (registerBlockType('be/list-subpages', {\n  title: __('List Subpages'),\n  category: 'widgets',\n  icon: 'list-view',\n  attributes: {\n    parentId: {\n      source: 'text',\n      type: 'int',\n      selector: '.parent-id'\n    }\n  },\n\n  edit: function edit(props) {\n    return wp.element.createElement(\n      'div',\n      { className: props.className },\n      !!props.focus ? Object(__WEBPACK_IMPORTED_MODULE_1__select_subpages__[\"a\" /* default */])() : Object(__WEBPACK_IMPORTED_MODULE_0__list_subpages__[\"a\" /* default */])()\n    );\n  },\n\n  save: function save(props) {\n    return Object(__WEBPACK_IMPORTED_MODULE_0__list_subpages__[\"a\" /* default */])();\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Jsb2Nrcy9saXN0LXN1YnBhZ2VzL2luZGV4LmpzP2MxOTMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBXb3JkUHJlc3MgRGVwZW5kZW5jaWVzXG4gKi9cbnZhciBfXyA9IHdwLmkxOG4uX187XG52YXIgX3dwJGJsb2NrcyA9IHdwLmJsb2NrcyxcbiAgICByZWdpc3RlckJsb2NrVHlwZSA9IF93cCRibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGUsXG4gICAgRWRpdGFibGUgPSBfd3AkYmxvY2tzLkVkaXRhYmxlO1xudmFyIF93cCRjb21wb25lbnRzID0gd3AuY29tcG9uZW50cyxcbiAgICB3aXRoSW5zdGFuY2VJZCA9IF93cCRjb21wb25lbnRzLndpdGhJbnN0YW5jZUlkLFxuICAgIHdpdGhBUElEYXRhID0gX3dwJGNvbXBvbmVudHMud2l0aEFQSURhdGE7XG52YXIgYnVpbGRUZXJtc1RyZWUgPSB3cC51dGlscy5idWlsZFRlcm1zVHJlZTtcblxuLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuLy9pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG4vL2ltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG5cbmltcG9ydCBsaXN0U3VicGFnZXMgZnJvbSAnLi9saXN0LXN1YnBhZ2VzJztcbmltcG9ydCBzZWxlY3RTdWJwYWdlcyBmcm9tICcuL3NlbGVjdC1zdWJwYWdlcyc7XG5cbi8qKlxuICogUmVnaXN0ZXIgYmxvY2tcbiAqL1xuZXhwb3J0IGRlZmF1bHQgcmVnaXN0ZXJCbG9ja1R5cGUoJ2JlL2xpc3Qtc3VicGFnZXMnLCB7XG4gIHRpdGxlOiBfXygnTGlzdCBTdWJwYWdlcycpLFxuICBjYXRlZ29yeTogJ3dpZGdldHMnLFxuICBpY29uOiAnbGlzdC12aWV3JyxcbiAgYXR0cmlidXRlczoge1xuICAgIHBhcmVudElkOiB7XG4gICAgICBzb3VyY2U6ICd0ZXh0JyxcbiAgICAgIHR5cGU6ICdpbnQnLFxuICAgICAgc2VsZWN0b3I6ICcucGFyZW50LWlkJ1xuICAgIH1cbiAgfSxcblxuICBlZGl0OiBmdW5jdGlvbiBlZGl0KHByb3BzKSB7XG4gICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgeyBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSB9LFxuICAgICAgISFwcm9wcy5mb2N1cyA/IHNlbGVjdFN1YnBhZ2VzKCkgOiBsaXN0U3VicGFnZXMoKVxuICAgICk7XG4gIH0sXG5cbiAgc2F2ZTogZnVuY3Rpb24gc2F2ZShwcm9wcykge1xuICAgIHJldHVybiBsaXN0U3VicGFnZXMoKTtcbiAgfVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ibG9ja3MvbGlzdC1zdWJwYWdlcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = listSubpages;\n/**\n * Returns a Promise with the subpages or an error on failure.\n *\n * @param   {Number} parentId       Parent Post ID\n *\n * @returns {wp.api.collections.Posts} Returns a Promise with the subpages.\n */\nfunction listSubpages() {\n  var parentId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n\n  return wp.element.createElement(\n    \"ul\",\n    null,\n    wp.element.createElement(\n      \"li\",\n      null,\n      \"Subpage 1\"\n    ),\n    wp.element.createElement(\n      \"li\",\n      null,\n      \"Subpage 2\"\n    )\n  );\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Jsb2Nrcy9saXN0LXN1YnBhZ2VzL2xpc3Qtc3VicGFnZXMuanM/NDNhMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJldHVybnMgYSBQcm9taXNlIHdpdGggdGhlIHN1YnBhZ2VzIG9yIGFuIGVycm9yIG9uIGZhaWx1cmUuXG4gKlxuICogQHBhcmFtICAge051bWJlcn0gcGFyZW50SWQgICAgICAgUGFyZW50IFBvc3QgSURcbiAqXG4gKiBAcmV0dXJucyB7d3AuYXBpLmNvbGxlY3Rpb25zLlBvc3RzfSBSZXR1cm5zIGEgUHJvbWlzZSB3aXRoIHRoZSBzdWJwYWdlcy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGlzdFN1YnBhZ2VzKCkge1xuICB2YXIgcGFyZW50SWQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGZhbHNlO1xuXG4gIHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJ1bFwiLFxuICAgIG51bGwsXG4gICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJsaVwiLFxuICAgICAgbnVsbCxcbiAgICAgIFwiU3VicGFnZSAxXCJcbiAgICApLFxuICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgIFwibGlcIixcbiAgICAgIG51bGwsXG4gICAgICBcIlN1YnBhZ2UgMlwiXG4gICAgKVxuICApO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYmxvY2tzL2xpc3Qtc3VicGFnZXMvbGlzdC1zdWJwYWdlcy5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = selectSubpages;\n/**\n * WordPress Dependencies\n */\nvar __ = wp.i18n.__;\nvar withAPIData = wp.components.withAPIData;\nvar buildTermsTree = wp.utils.buildTermsTree;\nvar SelectControl = wp.blocks.SelectControl;\n\n\nvar applyWithAPIDataItems = withAPIData(function (props, _ref) {\n\tvar type = _ref.type;\n\tvar postTypeSlug = props.postTypeSlug,\n\t    postId = props.postId;\n\n\tvar queryString = stringify({\n\t\tcontext: 'edit',\n\t\tper_page: 100,\n\t\t_fields: ['id', 'parent', 'title']\n\t});\n\treturn { items: '/wp/v2/' + type(postTypeSlug) + '?' + queryString };\n});\n\nfunction setParentId(value) {\n\tthis.props.setAttributes({ parentId: value });\n}\n\n/**\n * Returns a select menu with subpages\n *\n */\n\nfunction selectSubpages() {\n\n\tvar parentOptions = [{ value: '1', label: __('Option 1') }, { value: '2', label: __('Option 2') }];\n\tvar parentId = 2;\n\n\treturn wp.element.createElement(SelectControl, {\n\t\tlabel: __('Display subpages of'),\n\t\tvalue: parentId,\n\t\tonChange: setParentId,\n\t\toptions: parentOptions\n\t});\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Jsb2Nrcy9saXN0LXN1YnBhZ2VzL3NlbGVjdC1zdWJwYWdlcy5qcz85NDFmIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV29yZFByZXNzIERlcGVuZGVuY2llc1xuICovXG52YXIgX18gPSB3cC5pMThuLl9fO1xudmFyIHdpdGhBUElEYXRhID0gd3AuY29tcG9uZW50cy53aXRoQVBJRGF0YTtcbnZhciBidWlsZFRlcm1zVHJlZSA9IHdwLnV0aWxzLmJ1aWxkVGVybXNUcmVlO1xudmFyIFNlbGVjdENvbnRyb2wgPSB3cC5ibG9ja3MuU2VsZWN0Q29udHJvbDtcblxuXG52YXIgYXBwbHlXaXRoQVBJRGF0YUl0ZW1zID0gd2l0aEFQSURhdGEoZnVuY3Rpb24gKHByb3BzLCBfcmVmKSB7XG5cdHZhciB0eXBlID0gX3JlZi50eXBlO1xuXHR2YXIgcG9zdFR5cGVTbHVnID0gcHJvcHMucG9zdFR5cGVTbHVnLFxuXHQgICAgcG9zdElkID0gcHJvcHMucG9zdElkO1xuXG5cdHZhciBxdWVyeVN0cmluZyA9IHN0cmluZ2lmeSh7XG5cdFx0Y29udGV4dDogJ2VkaXQnLFxuXHRcdHBlcl9wYWdlOiAxMDAsXG5cdFx0X2ZpZWxkczogWydpZCcsICdwYXJlbnQnLCAndGl0bGUnXVxuXHR9KTtcblx0cmV0dXJuIHsgaXRlbXM6ICcvd3AvdjIvJyArIHR5cGUocG9zdFR5cGVTbHVnKSArICc/JyArIHF1ZXJ5U3RyaW5nIH07XG59KTtcblxuZnVuY3Rpb24gc2V0UGFyZW50SWQodmFsdWUpIHtcblx0dGhpcy5wcm9wcy5zZXRBdHRyaWJ1dGVzKHsgcGFyZW50SWQ6IHZhbHVlIH0pO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBzZWxlY3QgbWVudSB3aXRoIHN1YnBhZ2VzXG4gKlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNlbGVjdFN1YnBhZ2VzKCkge1xuXG5cdHZhciBwYXJlbnRPcHRpb25zID0gW3sgdmFsdWU6ICcxJywgbGFiZWw6IF9fKCdPcHRpb24gMScpIH0sIHsgdmFsdWU6ICcyJywgbGFiZWw6IF9fKCdPcHRpb24gMicpIH1dO1xuXHR2YXIgcGFyZW50SWQgPSAyO1xuXG5cdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoU2VsZWN0Q29udHJvbCwge1xuXHRcdGxhYmVsOiBfXygnRGlzcGxheSBzdWJwYWdlcyBvZicpLFxuXHRcdHZhbHVlOiBwYXJlbnRJZCxcblx0XHRvbkNoYW5nZTogc2V0UGFyZW50SWQsXG5cdFx0b3B0aW9uczogcGFyZW50T3B0aW9uc1xuXHR9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Jsb2Nrcy9saXN0LXN1YnBhZ2VzL3NlbGVjdC1zdWJwYWdlcy5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6\n");

/***/ })
/******/ ]);