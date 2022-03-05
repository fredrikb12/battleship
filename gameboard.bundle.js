/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Ship = function (size) {
  if (typeof size !== "number") throw Error("Incorrect type for hit creation");
  const length = parseInt(size);
  const hits = [];

  const hit = (pos) => {
    if (typeof pos !== "number") throw Error("Incorrect type for hit");
    if (isSunk()) return;
    if (hits.includes(pos)) return;
    hits.push(pos);
  };

  const isSunk = () => {
    return hits.length === length ? true : false;
  };

  return {
    hit,
    isSunk,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);


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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");


const Gameboard = function () {
  const ships = [];
  const missedHits = [];

  const placeShip = (startCoord, endCoord) => {
    if (startCoord.x !== endCoord.x && startCoord.y !== endCoord.y)
      throw Error("Invalid coordinates, ship is diagonally placed");
    const checkedCoords = [startCoord, endCoord].filter((coord) => {
      return coord.x < 1 || coord.y < 1 || coord.x > 10 || coord.y > 10;
    });
    if (checkedCoords.length > 0) throw Error("Invalid coordinate range");
    if (ships.length > 0) {
      if (getShipByCoordinate(ships, startCoord, endCoord)) return;
    }

    const ship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(getLength(startCoord, endCoord));
    ships.push({ ship: ship, start: startCoord, end: endCoord });
  };

  const receiveAttack = (coord) => {
    const hitShip = getShipByCoordinate(ships, coord);
    if (!hitShip) {
      missedHits.push(coord);
      return;
    }
    hitShip.ship.hit(getHitPosition(hitShip.start, hitShip.end, coord));
  };

  const getShipCount = () => {
    return ships.length;
  };

  const getMissedHitCount = () => {
    return missedHits.length;
  };

  const areShipsSunk = () => {
    const sunkShips = ships.filter((ship) => {
      return ship.ship.isSunk();
    });
    return sunkShips.length === ships.length ? true : false;
  };

  return {
    placeShip,
    receiveAttack,
    getShipCount,
    getMissedHitCount,
    areShipsSunk,
  };
};

function getShipByCoordinate(shipArray, coord) {
  const [foundShip] = shipArray.filter((ship) => {
    return (
      ship.start.x <= coord.x &&
      ship.start.y <= coord.y &&
      ship.end.x >= coord.x &&
      ship.end.y >= coord.y
    );
  });
  if (!foundShip) return null;
  return foundShip;
}

function getLength(start, end) {
  if (start.x !== end.x) {
    return Math.abs(start.x - end.x) + 1;
  } else {
    return Math.abs(start.y - end.y) + 1;
  }
}

function getHitPosition(start, end, hitCoord) {
  if (start.x !== end.x) {
    for (let i = 0; i <= Math.abs(start.x - end.x); i++) {
      if (start.x + i === hitCoord.x && start.y === hitCoord.y) {
        return i;
      }
    }
  } else {
    for (let i = 0; i <= Math.abs(start.y - end.y); i++) {
      if (start.x === hitCoord.x && start.y + i === hitCoord.y) return i;
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZWJvYXJkLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7VUN0QnBCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOMEI7O0FBRTFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixpREFBSTtBQUNyQixpQkFBaUIsOENBQThDO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixnQ0FBZ0M7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osb0JBQW9CLGdDQUFnQztBQUNwRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFNoaXAgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICBpZiAodHlwZW9mIHNpemUgIT09IFwibnVtYmVyXCIpIHRocm93IEVycm9yKFwiSW5jb3JyZWN0IHR5cGUgZm9yIGhpdCBjcmVhdGlvblwiKTtcbiAgY29uc3QgbGVuZ3RoID0gcGFyc2VJbnQoc2l6ZSk7XG4gIGNvbnN0IGhpdHMgPSBbXTtcblxuICBjb25zdCBoaXQgPSAocG9zKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBwb3MgIT09IFwibnVtYmVyXCIpIHRocm93IEVycm9yKFwiSW5jb3JyZWN0IHR5cGUgZm9yIGhpdFwiKTtcbiAgICBpZiAoaXNTdW5rKCkpIHJldHVybjtcbiAgICBpZiAoaGl0cy5pbmNsdWRlcyhwb3MpKSByZXR1cm47XG4gICAgaGl0cy5wdXNoKHBvcyk7XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgIHJldHVybiBoaXRzLmxlbmd0aCA9PT0gbGVuZ3RoID8gdHJ1ZSA6IGZhbHNlO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgaGl0LFxuICAgIGlzU3VuayxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBcIjtcblxuY29uc3QgR2FtZWJvYXJkID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBzaGlwcyA9IFtdO1xuICBjb25zdCBtaXNzZWRIaXRzID0gW107XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKHN0YXJ0Q29vcmQsIGVuZENvb3JkKSA9PiB7XG4gICAgaWYgKHN0YXJ0Q29vcmQueCAhPT0gZW5kQ29vcmQueCAmJiBzdGFydENvb3JkLnkgIT09IGVuZENvb3JkLnkpXG4gICAgICB0aHJvdyBFcnJvcihcIkludmFsaWQgY29vcmRpbmF0ZXMsIHNoaXAgaXMgZGlhZ29uYWxseSBwbGFjZWRcIik7XG4gICAgY29uc3QgY2hlY2tlZENvb3JkcyA9IFtzdGFydENvb3JkLCBlbmRDb29yZF0uZmlsdGVyKChjb29yZCkgPT4ge1xuICAgICAgcmV0dXJuIGNvb3JkLnggPCAxIHx8IGNvb3JkLnkgPCAxIHx8IGNvb3JkLnggPiAxMCB8fCBjb29yZC55ID4gMTA7XG4gICAgfSk7XG4gICAgaWYgKGNoZWNrZWRDb29yZHMubGVuZ3RoID4gMCkgdGhyb3cgRXJyb3IoXCJJbnZhbGlkIGNvb3JkaW5hdGUgcmFuZ2VcIik7XG4gICAgaWYgKHNoaXBzLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmIChnZXRTaGlwQnlDb29yZGluYXRlKHNoaXBzLCBzdGFydENvb3JkLCBlbmRDb29yZCkpIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzaGlwID0gU2hpcChnZXRMZW5ndGgoc3RhcnRDb29yZCwgZW5kQ29vcmQpKTtcbiAgICBzaGlwcy5wdXNoKHsgc2hpcDogc2hpcCwgc3RhcnQ6IHN0YXJ0Q29vcmQsIGVuZDogZW5kQ29vcmQgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChjb29yZCkgPT4ge1xuICAgIGNvbnN0IGhpdFNoaXAgPSBnZXRTaGlwQnlDb29yZGluYXRlKHNoaXBzLCBjb29yZCk7XG4gICAgaWYgKCFoaXRTaGlwKSB7XG4gICAgICBtaXNzZWRIaXRzLnB1c2goY29vcmQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBoaXRTaGlwLnNoaXAuaGl0KGdldEhpdFBvc2l0aW9uKGhpdFNoaXAuc3RhcnQsIGhpdFNoaXAuZW5kLCBjb29yZCkpO1xuICB9O1xuXG4gIGNvbnN0IGdldFNoaXBDb3VudCA9ICgpID0+IHtcbiAgICByZXR1cm4gc2hpcHMubGVuZ3RoO1xuICB9O1xuXG4gIGNvbnN0IGdldE1pc3NlZEhpdENvdW50ID0gKCkgPT4ge1xuICAgIHJldHVybiBtaXNzZWRIaXRzLmxlbmd0aDtcbiAgfTtcblxuICBjb25zdCBhcmVTaGlwc1N1bmsgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3Vua1NoaXBzID0gc2hpcHMuZmlsdGVyKChzaGlwKSA9PiB7XG4gICAgICByZXR1cm4gc2hpcC5zaGlwLmlzU3VuaygpO1xuICAgIH0pO1xuICAgIHJldHVybiBzdW5rU2hpcHMubGVuZ3RoID09PSBzaGlwcy5sZW5ndGggPyB0cnVlIDogZmFsc2U7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBwbGFjZVNoaXAsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBnZXRTaGlwQ291bnQsXG4gICAgZ2V0TWlzc2VkSGl0Q291bnQsXG4gICAgYXJlU2hpcHNTdW5rLFxuICB9O1xufTtcblxuZnVuY3Rpb24gZ2V0U2hpcEJ5Q29vcmRpbmF0ZShzaGlwQXJyYXksIGNvb3JkKSB7XG4gIGNvbnN0IFtmb3VuZFNoaXBdID0gc2hpcEFycmF5LmZpbHRlcigoc2hpcCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICBzaGlwLnN0YXJ0LnggPD0gY29vcmQueCAmJlxuICAgICAgc2hpcC5zdGFydC55IDw9IGNvb3JkLnkgJiZcbiAgICAgIHNoaXAuZW5kLnggPj0gY29vcmQueCAmJlxuICAgICAgc2hpcC5lbmQueSA+PSBjb29yZC55XG4gICAgKTtcbiAgfSk7XG4gIGlmICghZm91bmRTaGlwKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIGZvdW5kU2hpcDtcbn1cblxuZnVuY3Rpb24gZ2V0TGVuZ3RoKHN0YXJ0LCBlbmQpIHtcbiAgaWYgKHN0YXJ0LnggIT09IGVuZC54KSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKHN0YXJ0LnggLSBlbmQueCkgKyAxO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBNYXRoLmFicyhzdGFydC55IC0gZW5kLnkpICsgMTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRIaXRQb3NpdGlvbihzdGFydCwgZW5kLCBoaXRDb29yZCkge1xuICBpZiAoc3RhcnQueCAhPT0gZW5kLngpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBNYXRoLmFicyhzdGFydC54IC0gZW5kLngpOyBpKyspIHtcbiAgICAgIGlmIChzdGFydC54ICsgaSA9PT0gaGl0Q29vcmQueCAmJiBzdGFydC55ID09PSBoaXRDb29yZC55KSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBNYXRoLmFicyhzdGFydC55IC0gZW5kLnkpOyBpKyspIHtcbiAgICAgIGlmIChzdGFydC54ID09PSBoaXRDb29yZC54ICYmIHN0YXJ0LnkgKyBpID09PSBoaXRDb29yZC55KSByZXR1cm4gaTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9