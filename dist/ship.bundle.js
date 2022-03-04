/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Ship = function (startCoord, endCoord) {
  //let orientation;
  let length;
  const coordinates = [];
  const hits = [];
  if (typeof startCoord !== "object" || typeof endCoord !== "object")
    throw Error("Coordinates are wrong format: ", startCoord, endCoord);
  if (
    !startCoord.hasOwnProperty("x") ||
    !startCoord.hasOwnProperty("y") ||
    !endCoord.hasOwnProperty("x") ||
    !endCoord.hasOwnProperty("y")
  )
    throw Error("Missing coordinate property on object.", startCoord, endCoord);

  if (startCoord.x !== endCoord.x) {
    length = Math.abs(startCoord.x - endCoord.x) + 1;
    for (let i = 0; i < length; i++) {
      coordinates.push({ x: startCoord.x + i, y: startCoord.y });
    }
  } else {
    length = Math.abs(startCoord.y - endCoord.y) + 1;
    for (let i = 0; i < length; i++) {
      coordinates.push({ x: startCoord.x, y: startCoord.y + i });
    }
  }

  const hit = (pos) => {
    const hitCoord = coordinates.find((coord) => {
      return pos.x === coord.x && pos.y === coord.y;
    });
    if (!hitCoord) return;
    hits.push(hitCoord);
  };

  const isSunk = () => {
    return hits.length === length ? true : false;
  };

  const getHits = () => {
    return [...hits];
  };

  const getCoordinates = () => {
    return [...coordinates];
  };

  return {
    hit,
    isSunk,
    getHits,
    getCoordinates,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQyx5QkFBeUIsc0NBQXNDO0FBQy9EO0FBQ0EsSUFBSTtBQUNKO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEMseUJBQXlCLHNDQUFzQztBQUMvRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnN0IFNoaXAgPSBmdW5jdGlvbiAoc3RhcnRDb29yZCwgZW5kQ29vcmQpIHtcbiAgLy9sZXQgb3JpZW50YXRpb247XG4gIGxldCBsZW5ndGg7XG4gIGNvbnN0IGNvb3JkaW5hdGVzID0gW107XG4gIGNvbnN0IGhpdHMgPSBbXTtcbiAgaWYgKHR5cGVvZiBzdGFydENvb3JkICE9PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBlbmRDb29yZCAhPT0gXCJvYmplY3RcIilcbiAgICB0aHJvdyBFcnJvcihcIkNvb3JkaW5hdGVzIGFyZSB3cm9uZyBmb3JtYXQ6IFwiLCBzdGFydENvb3JkLCBlbmRDb29yZCk7XG4gIGlmIChcbiAgICAhc3RhcnRDb29yZC5oYXNPd25Qcm9wZXJ0eShcInhcIikgfHxcbiAgICAhc3RhcnRDb29yZC5oYXNPd25Qcm9wZXJ0eShcInlcIikgfHxcbiAgICAhZW5kQ29vcmQuaGFzT3duUHJvcGVydHkoXCJ4XCIpIHx8XG4gICAgIWVuZENvb3JkLmhhc093blByb3BlcnR5KFwieVwiKVxuICApXG4gICAgdGhyb3cgRXJyb3IoXCJNaXNzaW5nIGNvb3JkaW5hdGUgcHJvcGVydHkgb24gb2JqZWN0LlwiLCBzdGFydENvb3JkLCBlbmRDb29yZCk7XG5cbiAgaWYgKHN0YXJ0Q29vcmQueCAhPT0gZW5kQ29vcmQueCkge1xuICAgIGxlbmd0aCA9IE1hdGguYWJzKHN0YXJ0Q29vcmQueCAtIGVuZENvb3JkLngpICsgMTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBjb29yZGluYXRlcy5wdXNoKHsgeDogc3RhcnRDb29yZC54ICsgaSwgeTogc3RhcnRDb29yZC55IH0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBNYXRoLmFicyhzdGFydENvb3JkLnkgLSBlbmRDb29yZC55KSArIDE7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgY29vcmRpbmF0ZXMucHVzaCh7IHg6IHN0YXJ0Q29vcmQueCwgeTogc3RhcnRDb29yZC55ICsgaSB9KTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBoaXQgPSAocG9zKSA9PiB7XG4gICAgY29uc3QgaGl0Q29vcmQgPSBjb29yZGluYXRlcy5maW5kKChjb29yZCkgPT4ge1xuICAgICAgcmV0dXJuIHBvcy54ID09PSBjb29yZC54ICYmIHBvcy55ID09PSBjb29yZC55O1xuICAgIH0pO1xuICAgIGlmICghaGl0Q29vcmQpIHJldHVybjtcbiAgICBoaXRzLnB1c2goaGl0Q29vcmQpO1xuICB9O1xuXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICByZXR1cm4gaGl0cy5sZW5ndGggPT09IGxlbmd0aCA/IHRydWUgOiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBnZXRIaXRzID0gKCkgPT4ge1xuICAgIHJldHVybiBbLi4uaGl0c107XG4gIH07XG5cbiAgY29uc3QgZ2V0Q29vcmRpbmF0ZXMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIFsuLi5jb29yZGluYXRlc107XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBoaXQsXG4gICAgaXNTdW5rLFxuICAgIGdldEhpdHMsXG4gICAgZ2V0Q29vcmRpbmF0ZXMsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9