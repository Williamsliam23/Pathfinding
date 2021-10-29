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

eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar PathCanvas = /*#__PURE__*/function () {\n  function PathCanvas(el) {\n    _classCallCheck(this, PathCanvas);\n\n    this.el = el;\n    this.ctx = el.getContext('2d');\n  }\n\n  _createClass(PathCanvas, [{\n    key: \"draw\",\n    value: function draw() {\n      for (var i = 0; i < 3; i++) {\n        for (var j = 0; j < 3; j++) {\n          this.ctx.save();\n          this.ctx.fillStyle = 'rgb(' + 51 * i + ', ' + (255 - 51 * i) + ', 255)';\n          this.ctx.translate(10 + j * 50, 10 + i * 50);\n          this.ctx.fillRect(0, 0, 25, 25);\n          this.ctx.restore();\n        }\n      } // this.ctx.fillRect(0, 0, 150, 150); // Draw a rectangle with default settings\n      // this.ctx.save(); // Save the default state\n      // this.ctx.fillStyle = '#09F'; // Make changes to the settings\n      // this.ctx.fillRect(15, 15, 120, 120); // Draw a rectangle with new settings\n      // this.ctx.save(); // Save the current state\n      // this.ctx.fillStyle = '#FFF'; // Make changes to the settings\n      // this.ctx.globalAlpha = 0.5;\n      // this.ctx.fillRect(30, 30, 90, 90); // Draw a rectangle with new settings\n      // this.ctx.restore(); // Restore previous state\n      // this.ctx.fillRect(45, 45, 60, 60); // Draw a rectangle with restored settings\n      // this.ctx.restore(); // Restore original state\n      // this.ctx.fillRect(60, 60, 30, 30); // Draw a rectangle with restored settings\n\n    }\n  }]);\n\n  return PathCanvas;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PathCanvas);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2FudmFzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFDTUE7QUFDSixzQkFBWUMsRUFBWixFQUFnQjtBQUFBOztBQUNkLFNBQUtBLEVBQUwsR0FBVUEsRUFBVjtBQUNBLFNBQUtDLEdBQUwsR0FBV0QsRUFBRSxDQUFDRSxVQUFILENBQWMsSUFBZCxDQUFYO0FBQ0Q7Ozs7V0FDRCxnQkFBTztBQUNMLFdBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxDQUFwQixFQUF1QkEsQ0FBQyxFQUF4QixFQUE0QjtBQUMxQixhQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7QUFDMUIsZUFBS0gsR0FBTCxDQUFTSSxJQUFUO0FBQ0EsZUFBS0osR0FBTCxDQUFTSyxTQUFULEdBQXFCLFNBQVUsS0FBS0gsQ0FBZixHQUFvQixJQUFwQixJQUE0QixNQUFNLEtBQUtBLENBQXZDLElBQTRDLFFBQWpFO0FBQ0EsZUFBS0YsR0FBTCxDQUFTTSxTQUFULENBQW1CLEtBQUtILENBQUMsR0FBRyxFQUE1QixFQUFnQyxLQUFLRCxDQUFDLEdBQUcsRUFBekM7QUFDQSxlQUFLRixHQUFMLENBQVNPLFFBQVQsQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsRUFBd0IsRUFBeEIsRUFBNEIsRUFBNUI7QUFDQSxlQUFLUCxHQUFMLENBQVNRLE9BQVQ7QUFDRDtBQUNGLE9BVEksQ0FXUDtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBQ0M7Ozs7OztBQUdILCtEQUFlVixVQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGF0aGZpbmRpbmcvLi9zcmMvY2FudmFzLmpzP2I3YjUiXSwic291cmNlc0NvbnRlbnQiOlsiXG5jbGFzcyBQYXRoQ2FudmFzIHtcbiAgY29uc3RydWN0b3IoZWwpIHtcbiAgICB0aGlzLmVsID0gZWw7XG4gICAgdGhpcy5jdHggPSBlbC5nZXRDb250ZXh0KCcyZCcpO1xuICB9XG4gIGRyYXcoKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgMzsgaisrKSB7XG4gICAgICAgIHRoaXMuY3R4LnNhdmUoKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ3JnYignICsgKDUxICogaSkgKyAnLCAnICsgKDI1NSAtIDUxICogaSkgKyAnLCAyNTUpJztcbiAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKDEwICsgaiAqIDUwLCAxMCArIGkgKiA1MCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIDI1LCAyNSk7XG4gICAgICAgIHRoaXMuY3R4LnJlc3RvcmUoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgLy8gdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgMTUwLCAxNTApOyAvLyBEcmF3IGEgcmVjdGFuZ2xlIHdpdGggZGVmYXVsdCBzZXR0aW5nc1xuICAvLyB0aGlzLmN0eC5zYXZlKCk7IC8vIFNhdmUgdGhlIGRlZmF1bHQgc3RhdGVcblxuICAvLyB0aGlzLmN0eC5maWxsU3R5bGUgPSAnIzA5Ric7IC8vIE1ha2UgY2hhbmdlcyB0byB0aGUgc2V0dGluZ3NcbiAgLy8gdGhpcy5jdHguZmlsbFJlY3QoMTUsIDE1LCAxMjAsIDEyMCk7IC8vIERyYXcgYSByZWN0YW5nbGUgd2l0aCBuZXcgc2V0dGluZ3NcblxuICAvLyB0aGlzLmN0eC5zYXZlKCk7IC8vIFNhdmUgdGhlIGN1cnJlbnQgc3RhdGVcbiAgLy8gdGhpcy5jdHguZmlsbFN0eWxlID0gJyNGRkYnOyAvLyBNYWtlIGNoYW5nZXMgdG8gdGhlIHNldHRpbmdzXG4gIC8vIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gMC41O1xuICAvLyB0aGlzLmN0eC5maWxsUmVjdCgzMCwgMzAsIDkwLCA5MCk7IC8vIERyYXcgYSByZWN0YW5nbGUgd2l0aCBuZXcgc2V0dGluZ3NcblxuICAvLyB0aGlzLmN0eC5yZXN0b3JlKCk7IC8vIFJlc3RvcmUgcHJldmlvdXMgc3RhdGVcbiAgLy8gdGhpcy5jdHguZmlsbFJlY3QoNDUsIDQ1LCA2MCwgNjApOyAvLyBEcmF3IGEgcmVjdGFuZ2xlIHdpdGggcmVzdG9yZWQgc2V0dGluZ3NcblxuICAvLyB0aGlzLmN0eC5yZXN0b3JlKCk7IC8vIFJlc3RvcmUgb3JpZ2luYWwgc3RhdGVcbiAgLy8gdGhpcy5jdHguZmlsbFJlY3QoNjAsIDYwLCAzMCwgMzApOyAvLyBEcmF3IGEgcmVjdGFuZ2xlIHdpdGggcmVzdG9yZWQgc2V0dGluZ3NcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYXRoQ2FudmFzIl0sIm5hbWVzIjpbIlBhdGhDYW52YXMiLCJlbCIsImN0eCIsImdldENvbnRleHQiLCJpIiwiaiIsInNhdmUiLCJmaWxsU3R5bGUiLCJ0cmFuc2xhdGUiLCJmaWxsUmVjdCIsInJlc3RvcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/canvas.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ \"./src/canvas.js\");\n\nwindow.addEventListener('DOMContentLoaded', function () {\n  var can = document.getElementById('canvas');\n  can.style.border = '2px solid black';\n  var test = new _canvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"](can);\n  test.draw();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBRSxNQUFNLENBQUNDLGdCQUFQLENBQXdCLGtCQUF4QixFQUE0QyxZQUFNO0FBQ2hELE1BQU1DLEdBQUcsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFFBQXhCLENBQVo7QUFDQUYsRUFBQUEsR0FBRyxDQUFDRyxLQUFKLENBQVVDLE1BQVYsR0FBbUIsaUJBQW5CO0FBQ0EsTUFBTUMsSUFBSSxHQUFHLElBQUlSLCtDQUFKLENBQWdCRyxHQUFoQixDQUFiO0FBQ0FLLEVBQUFBLElBQUksQ0FBQ0MsSUFBTDtBQUNELENBTEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYXRoZmluZGluZy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlZmF1bHQgYXMgUGF0aENhbnZhcyB9IGZyb20gXCIuL2NhbnZhc1wiO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgY29uc3QgY2FuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpXG4gIGNhbi5zdHlsZS5ib3JkZXIgPSAnMnB4IHNvbGlkIGJsYWNrJ1xuICBjb25zdCB0ZXN0ID0gbmV3IFBhdGhDYW52YXMgKGNhbikgO1xuICB0ZXN0LmRyYXcoKTtcbn0pXG4iXSwibmFtZXMiOlsiZGVmYXVsdCIsIlBhdGhDYW52YXMiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY2FuIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiYm9yZGVyIiwidGVzdCIsImRyYXciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

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