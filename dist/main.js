/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/canvas.js":
/*!***********************!*\
  !*** ./src/canvas.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar PathCanvas = /*#__PURE__*/function () {\n  function PathCanvas(el) {\n    _classCallCheck(this, PathCanvas);\n\n    this.el = el;\n    this.ctx = el.getContext('2d');\n  }\n\n  _createClass(PathCanvas, [{\n    key: \"draw\",\n    value: function draw() {\n      this.ctx.fillRect(0, 0, 150, 150); // Draw a rectangle with default settings\n\n      this.ctx.save(); // Save the default state\n\n      this.ctx.fillStyle = '#09F'; // Make changes to the settings\n\n      this.ctx.fillRect(15, 15, 120, 120); // Draw a rectangle with new settings\n\n      this.ctx.save(); // Save the current state\n\n      this.ctx.fillStyle = '#FFF'; // Make changes to the settings\n\n      this.ctx.globalAlpha = 0.5;\n      this.ctx.fillRect(30, 30, 90, 90); // Draw a rectangle with new settings\n\n      this.ctx.restore(); // Restore previous state\n\n      this.ctx.fillRect(45, 45, 60, 60); // Draw a rectangle with restored settings\n\n      this.ctx.restore(); // Restore original state\n\n      this.ctx.fillRect(60, 60, 30, 30); // Draw a rectangle with restored settings\n    }\n  }]);\n\n  return PathCanvas;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PathCanvas);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2FudmFzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFDTUE7QUFDSixzQkFBWUMsRUFBWixFQUFnQjtBQUFBOztBQUNkLFNBQUtBLEVBQUwsR0FBVUEsRUFBVjtBQUNBLFNBQUtDLEdBQUwsR0FBV0QsRUFBRSxDQUFDRSxVQUFILENBQWMsSUFBZCxDQUFYO0FBQ0Q7Ozs7V0FDRCxnQkFBTztBQUVQLFdBQUtELEdBQUwsQ0FBU0UsUUFBVCxDQUFrQixDQUFsQixFQUFxQixDQUFyQixFQUF3QixHQUF4QixFQUE2QixHQUE3QixFQUZPLENBRTRCOztBQUNuQyxXQUFLRixHQUFMLENBQVNHLElBQVQsR0FITyxDQUdVOztBQUVqQixXQUFLSCxHQUFMLENBQVNJLFNBQVQsR0FBcUIsTUFBckIsQ0FMTyxDQUtzQjs7QUFDN0IsV0FBS0osR0FBTCxDQUFTRSxRQUFULENBQWtCLEVBQWxCLEVBQXNCLEVBQXRCLEVBQTBCLEdBQTFCLEVBQStCLEdBQS9CLEVBTk8sQ0FNOEI7O0FBRXJDLFdBQUtGLEdBQUwsQ0FBU0csSUFBVCxHQVJPLENBUVU7O0FBQ2pCLFdBQUtILEdBQUwsQ0FBU0ksU0FBVCxHQUFxQixNQUFyQixDQVRPLENBU3NCOztBQUM3QixXQUFLSixHQUFMLENBQVNLLFdBQVQsR0FBdUIsR0FBdkI7QUFDQSxXQUFLTCxHQUFMLENBQVNFLFFBQVQsQ0FBa0IsRUFBbEIsRUFBc0IsRUFBdEIsRUFBMEIsRUFBMUIsRUFBOEIsRUFBOUIsRUFYTyxDQVc0Qjs7QUFFbkMsV0FBS0YsR0FBTCxDQUFTTSxPQUFULEdBYk8sQ0FhYTs7QUFDcEIsV0FBS04sR0FBTCxDQUFTRSxRQUFULENBQWtCLEVBQWxCLEVBQXNCLEVBQXRCLEVBQTBCLEVBQTFCLEVBQThCLEVBQTlCLEVBZE8sQ0FjNEI7O0FBRW5DLFdBQUtGLEdBQUwsQ0FBU00sT0FBVCxHQWhCTyxDQWdCYTs7QUFDcEIsV0FBS04sR0FBTCxDQUFTRSxRQUFULENBQWtCLEVBQWxCLEVBQXNCLEVBQXRCLEVBQTBCLEVBQTFCLEVBQThCLEVBQTlCLEVBakJPLENBaUI0QjtBQUNsQzs7Ozs7O0FBR0gsK0RBQWVKLFVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYXRoZmluZGluZy8uL3NyYy9jYW52YXMuanM/YjdiNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmNsYXNzIFBhdGhDYW52YXMge1xuICBjb25zdHJ1Y3RvcihlbCkge1xuICAgIHRoaXMuZWwgPSBlbDtcbiAgICB0aGlzLmN0eCA9IGVsLmdldENvbnRleHQoJzJkJyk7XG4gIH1cbiAgZHJhdygpIHtcblxuICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCAxNTAsIDE1MCk7IC8vIERyYXcgYSByZWN0YW5nbGUgd2l0aCBkZWZhdWx0IHNldHRpbmdzXG4gIHRoaXMuY3R4LnNhdmUoKTsgLy8gU2F2ZSB0aGUgZGVmYXVsdCBzdGF0ZVxuXG4gIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICcjMDlGJzsgLy8gTWFrZSBjaGFuZ2VzIHRvIHRoZSBzZXR0aW5nc1xuICB0aGlzLmN0eC5maWxsUmVjdCgxNSwgMTUsIDEyMCwgMTIwKTsgLy8gRHJhdyBhIHJlY3RhbmdsZSB3aXRoIG5ldyBzZXR0aW5nc1xuXG4gIHRoaXMuY3R4LnNhdmUoKTsgLy8gU2F2ZSB0aGUgY3VycmVudCBzdGF0ZVxuICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnI0ZGRic7IC8vIE1ha2UgY2hhbmdlcyB0byB0aGUgc2V0dGluZ3NcbiAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSAwLjU7XG4gIHRoaXMuY3R4LmZpbGxSZWN0KDMwLCAzMCwgOTAsIDkwKTsgLy8gRHJhdyBhIHJlY3RhbmdsZSB3aXRoIG5ldyBzZXR0aW5nc1xuXG4gIHRoaXMuY3R4LnJlc3RvcmUoKTsgLy8gUmVzdG9yZSBwcmV2aW91cyBzdGF0ZVxuICB0aGlzLmN0eC5maWxsUmVjdCg0NSwgNDUsIDYwLCA2MCk7IC8vIERyYXcgYSByZWN0YW5nbGUgd2l0aCByZXN0b3JlZCBzZXR0aW5nc1xuXG4gIHRoaXMuY3R4LnJlc3RvcmUoKTsgLy8gUmVzdG9yZSBvcmlnaW5hbCBzdGF0ZVxuICB0aGlzLmN0eC5maWxsUmVjdCg2MCwgNjAsIDMwLCAzMCk7IC8vIERyYXcgYSByZWN0YW5nbGUgd2l0aCByZXN0b3JlZCBzZXR0aW5nc1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhdGhDYW52YXMiXSwibmFtZXMiOlsiUGF0aENhbnZhcyIsImVsIiwiY3R4IiwiZ2V0Q29udGV4dCIsImZpbGxSZWN0Iiwic2F2ZSIsImZpbGxTdHlsZSIsImdsb2JhbEFscGhhIiwicmVzdG9yZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/canvas.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ \"./src/canvas.js\");\n\nwindow.addEventListener('DOMContentLoaded', function () {\n  var can = document.getElementById('canvas');\n  var test = new _canvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"](can);\n  test.draw();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBRSxNQUFNLENBQUNDLGdCQUFQLENBQXdCLGtCQUF4QixFQUE0QyxZQUFNO0FBQ2hELE1BQU1DLEdBQUcsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFFBQXhCLENBQVo7QUFDQSxNQUFNQyxJQUFJLEdBQUcsSUFBSU4sK0NBQUosQ0FBZ0JHLEdBQWhCLENBQWI7QUFDQUcsRUFBQUEsSUFBSSxDQUFDQyxJQUFMO0FBQ0QsQ0FKRCIsInNvdXJjZXMiOlsid2VicGFjazovL3BhdGhmaW5kaW5nLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVmYXVsdCBhcyBQYXRoQ2FudmFzIH0gZnJvbSBcIi4vY2FudmFzXCI7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zdCBjYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJylcbiAgY29uc3QgdGVzdCA9IG5ldyBQYXRoQ2FudmFzIChjYW4pIDtcbiAgdGVzdC5kcmF3KCk7XG59KVxuIl0sIm5hbWVzIjpbImRlZmF1bHQiLCJQYXRoQ2FudmFzIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0ZXN0IiwiZHJhdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYXRoZmluZGluZy8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;