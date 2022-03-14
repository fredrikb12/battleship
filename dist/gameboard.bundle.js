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
  if (size < 2) throw Error("Size too low");
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

    if (startCoord.x > endCoord.x || startCoord.y > endCoord.y) {
      const ship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(getLength(endCoord, startCoord));
      ships.push({ ship: ship, start: endCoord, end: startCoord });
    } else {
      const ship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(getLength(startCoord, endCoord));
      ships.push({ ship: ship, start: startCoord, end: endCoord });
    }
  };

  const receiveAttack = (coord) => {
    const hitShip = getShipByCoordinate(ships, coord);
    if (!hitShip) {
      missedHits.push(coord);
      return { hit: false, coord: coord };
    }
    hitShip.ship.hit(getHitPosition(hitShip.start, hitShip.end, coord));
    return { hit: true, coord: coord };
  };

  const getShipCount = () => {
    return ships.length;
  };

  const getMissedHits = () => {
    return [...missedHits];
  };

  const areShipsSunk = () => {
    const sunkShips = ships.filter((ship) => {
      return ship.ship.isSunk();
    });
    console.log(sunkShips);
    return sunkShips.length === ships.length ? true : false;
  };

  const coordinateHasShip = (coord) => {
    const ship = getShipByCoordinate(ships, coord);
    if (ship === null) return false;
    return true;
  };

  return {
    placeShip,
    receiveAttack,
    getShipCount,
    getMissedHits,
    areShipsSunk,
    coordinateHasShip,
  };
};

function getShipByCoordinate(shipArray, coord) {
  if (!coord) return;
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
  return (
    Math.sqrt(
      (start.x - end.x) * (start.x - end.x) +
        (start.y - end.y) * (start.y - end.y)
    ) + 1
  );
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZWJvYXJkLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7OztVQ3ZCcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ04wQjs7QUFFMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixpREFBSTtBQUN2QixtQkFBbUIsOENBQThDO0FBQ2pFLE1BQU07QUFDTixtQkFBbUIsaURBQUk7QUFDdkIsbUJBQW1CLDhDQUE4QztBQUNqRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLGdDQUFnQztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixvQkFBb0IsZ0NBQWdDO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU2hpcCA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIGlmICh0eXBlb2Ygc2l6ZSAhPT0gXCJudW1iZXJcIikgdGhyb3cgRXJyb3IoXCJJbmNvcnJlY3QgdHlwZSBmb3IgaGl0IGNyZWF0aW9uXCIpO1xuICBpZiAoc2l6ZSA8IDIpIHRocm93IEVycm9yKFwiU2l6ZSB0b28gbG93XCIpO1xuICBjb25zdCBsZW5ndGggPSBwYXJzZUludChzaXplKTtcbiAgY29uc3QgaGl0cyA9IFtdO1xuXG4gIGNvbnN0IGhpdCA9IChwb3MpID0+IHtcbiAgICBpZiAodHlwZW9mIHBvcyAhPT0gXCJudW1iZXJcIikgdGhyb3cgRXJyb3IoXCJJbmNvcnJlY3QgdHlwZSBmb3IgaGl0XCIpO1xuICAgIGlmIChpc1N1bmsoKSkgcmV0dXJuO1xuICAgIGlmIChoaXRzLmluY2x1ZGVzKHBvcykpIHJldHVybjtcbiAgICBoaXRzLnB1c2gocG9zKTtcbiAgfTtcblxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGhpdHMubGVuZ3RoID09PSBsZW5ndGggPyB0cnVlIDogZmFsc2U7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBoaXQsXG4gICAgaXNTdW5rLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuXG5jb25zdCBHYW1lYm9hcmQgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHNoaXBzID0gW107XG4gIGNvbnN0IG1pc3NlZEhpdHMgPSBbXTtcblxuICBjb25zdCBwbGFjZVNoaXAgPSAoc3RhcnRDb29yZCwgZW5kQ29vcmQpID0+IHtcbiAgICBpZiAoc3RhcnRDb29yZC54ICE9PSBlbmRDb29yZC54ICYmIHN0YXJ0Q29vcmQueSAhPT0gZW5kQ29vcmQueSlcbiAgICAgIHRocm93IEVycm9yKFwiSW52YWxpZCBjb29yZGluYXRlcywgc2hpcCBpcyBkaWFnb25hbGx5IHBsYWNlZFwiKTtcblxuICAgIGNvbnN0IGNoZWNrZWRDb29yZHMgPSBbc3RhcnRDb29yZCwgZW5kQ29vcmRdLmZpbHRlcigoY29vcmQpID0+IHtcbiAgICAgIHJldHVybiBjb29yZC54IDwgMSB8fCBjb29yZC55IDwgMSB8fCBjb29yZC54ID4gMTAgfHwgY29vcmQueSA+IDEwO1xuICAgIH0pO1xuICAgIGlmIChjaGVja2VkQ29vcmRzLmxlbmd0aCA+IDApIHRocm93IEVycm9yKFwiSW52YWxpZCBjb29yZGluYXRlIHJhbmdlXCIpO1xuXG4gICAgaWYgKHNoaXBzLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmIChnZXRTaGlwQnlDb29yZGluYXRlKHNoaXBzLCBzdGFydENvb3JkLCBlbmRDb29yZCkpIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoc3RhcnRDb29yZC54ID4gZW5kQ29vcmQueCB8fCBzdGFydENvb3JkLnkgPiBlbmRDb29yZC55KSB7XG4gICAgICBjb25zdCBzaGlwID0gU2hpcChnZXRMZW5ndGgoZW5kQ29vcmQsIHN0YXJ0Q29vcmQpKTtcbiAgICAgIHNoaXBzLnB1c2goeyBzaGlwOiBzaGlwLCBzdGFydDogZW5kQ29vcmQsIGVuZDogc3RhcnRDb29yZCB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc2hpcCA9IFNoaXAoZ2V0TGVuZ3RoKHN0YXJ0Q29vcmQsIGVuZENvb3JkKSk7XG4gICAgICBzaGlwcy5wdXNoKHsgc2hpcDogc2hpcCwgc3RhcnQ6IHN0YXJ0Q29vcmQsIGVuZDogZW5kQ29vcmQgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29vcmQpID0+IHtcbiAgICBjb25zdCBoaXRTaGlwID0gZ2V0U2hpcEJ5Q29vcmRpbmF0ZShzaGlwcywgY29vcmQpO1xuICAgIGlmICghaGl0U2hpcCkge1xuICAgICAgbWlzc2VkSGl0cy5wdXNoKGNvb3JkKTtcbiAgICAgIHJldHVybiB7IGhpdDogZmFsc2UsIGNvb3JkOiBjb29yZCB9O1xuICAgIH1cbiAgICBoaXRTaGlwLnNoaXAuaGl0KGdldEhpdFBvc2l0aW9uKGhpdFNoaXAuc3RhcnQsIGhpdFNoaXAuZW5kLCBjb29yZCkpO1xuICAgIHJldHVybiB7IGhpdDogdHJ1ZSwgY29vcmQ6IGNvb3JkIH07XG4gIH07XG5cbiAgY29uc3QgZ2V0U2hpcENvdW50ID0gKCkgPT4ge1xuICAgIHJldHVybiBzaGlwcy5sZW5ndGg7XG4gIH07XG5cbiAgY29uc3QgZ2V0TWlzc2VkSGl0cyA9ICgpID0+IHtcbiAgICByZXR1cm4gWy4uLm1pc3NlZEhpdHNdO1xuICB9O1xuXG4gIGNvbnN0IGFyZVNoaXBzU3VuayA9ICgpID0+IHtcbiAgICBjb25zdCBzdW5rU2hpcHMgPSBzaGlwcy5maWx0ZXIoKHNoaXApID0+IHtcbiAgICAgIHJldHVybiBzaGlwLnNoaXAuaXNTdW5rKCk7XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coc3Vua1NoaXBzKTtcbiAgICByZXR1cm4gc3Vua1NoaXBzLmxlbmd0aCA9PT0gc2hpcHMubGVuZ3RoID8gdHJ1ZSA6IGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGNvb3JkaW5hdGVIYXNTaGlwID0gKGNvb3JkKSA9PiB7XG4gICAgY29uc3Qgc2hpcCA9IGdldFNoaXBCeUNvb3JkaW5hdGUoc2hpcHMsIGNvb3JkKTtcbiAgICBpZiAoc2hpcCA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcGxhY2VTaGlwLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgZ2V0U2hpcENvdW50LFxuICAgIGdldE1pc3NlZEhpdHMsXG4gICAgYXJlU2hpcHNTdW5rLFxuICAgIGNvb3JkaW5hdGVIYXNTaGlwLFxuICB9O1xufTtcblxuZnVuY3Rpb24gZ2V0U2hpcEJ5Q29vcmRpbmF0ZShzaGlwQXJyYXksIGNvb3JkKSB7XG4gIGlmICghY29vcmQpIHJldHVybjtcbiAgY29uc3QgW2ZvdW5kU2hpcF0gPSBzaGlwQXJyYXkuZmlsdGVyKChzaGlwKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHNoaXAuc3RhcnQueCA8PSBjb29yZC54ICYmXG4gICAgICBzaGlwLnN0YXJ0LnkgPD0gY29vcmQueSAmJlxuICAgICAgc2hpcC5lbmQueCA+PSBjb29yZC54ICYmXG4gICAgICBzaGlwLmVuZC55ID49IGNvb3JkLnlcbiAgICApO1xuICB9KTtcbiAgaWYgKCFmb3VuZFNoaXApIHJldHVybiBudWxsO1xuICByZXR1cm4gZm91bmRTaGlwO1xufVxuXG5mdW5jdGlvbiBnZXRMZW5ndGgoc3RhcnQsIGVuZCkge1xuICByZXR1cm4gKFxuICAgIE1hdGguc3FydChcbiAgICAgIChzdGFydC54IC0gZW5kLngpICogKHN0YXJ0LnggLSBlbmQueCkgK1xuICAgICAgICAoc3RhcnQueSAtIGVuZC55KSAqIChzdGFydC55IC0gZW5kLnkpXG4gICAgKSArIDFcbiAgKTtcbn1cblxuZnVuY3Rpb24gZ2V0SGl0UG9zaXRpb24oc3RhcnQsIGVuZCwgaGl0Q29vcmQpIHtcbiAgaWYgKHN0YXJ0LnggIT09IGVuZC54KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gTWF0aC5hYnMoc3RhcnQueCAtIGVuZC54KTsgaSsrKSB7XG4gICAgICBpZiAoc3RhcnQueCArIGkgPT09IGhpdENvb3JkLnggJiYgc3RhcnQueSA9PT0gaGl0Q29vcmQueSkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gTWF0aC5hYnMoc3RhcnQueSAtIGVuZC55KTsgaSsrKSB7XG4gICAgICBpZiAoc3RhcnQueCA9PT0gaGl0Q29vcmQueCAmJiBzdGFydC55ICsgaSA9PT0gaGl0Q29vcmQueSkgcmV0dXJuIGk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==