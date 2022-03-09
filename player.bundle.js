/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
      return false;
    }
    hitShip.ship.hit(getHitPosition(hitShip.start, hitShip.end, coord));
    return true;
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
  return Math.sqrt(
    (start.x - end.x) * (start.x - end.x) +
      (start.y - end.y) * (start.y - end.y)
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


/***/ }),

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
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");


const Player = function (name) {
  if (typeof name !== "string") name = "Player 1";
  const previousAttacks = [];
  const gameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();
  let isNext = false;

  const getName = () => name;

  const setIsNext = (bool) => (isNext = bool);

  const makeAttack = (target, coord) => {
    if (!isNext) throw Error(`${getName()} is not next!`);
    if (target === gameboard) throw Error("Can't attack own gameboard!");

    if (name === "computer" || name === "Computer") {
      const attack = getComputerAttack();
      target.receiveAttack(attack);
      previousAttacks.push(attack);
    } else {
      target.receiveAttack(coord);
      previousAttacks.push(coord);
    }
    isNext = false;
  };

  const getComputerAttack = () => {
    if (name !== "computer") return;

    const attemptedAttack = {
      x: Math.floor(Math.random() * 10) + 1,
      y: Math.floor(Math.random() * 10) + 1,
    };

    const matchedAttack = previousAttacks.find((coordinate) => {
      return (
        coordinate.x === attemptedAttack.x && coordinate.y === attemptedAttack.y
      );
    });
    if (matchedAttack !== undefined) return getComputerAttack();

    return attemptedAttack;
  };

  return {
    gameboard,
    getName,
    makeAttack,
    setIsNext,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7O0FBRTFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsaURBQUk7QUFDdkIsbUJBQW1CLDhDQUE4QztBQUNqRSxNQUFNO0FBQ04sbUJBQW1CLGlEQUFJO0FBQ3ZCLG1CQUFtQiw4Q0FBOEM7QUFDakU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixnQ0FBZ0M7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osb0JBQW9CLGdDQUFnQztBQUNwRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3ZHekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7OztVQ3RCcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05vQzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHNEQUFTO0FBQzdCOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsZ0NBQWdDLFdBQVc7QUFDM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5cbmNvbnN0IEdhbWVib2FyZCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgc2hpcHMgPSBbXTtcbiAgY29uc3QgbWlzc2VkSGl0cyA9IFtdO1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChzdGFydENvb3JkLCBlbmRDb29yZCkgPT4ge1xuICAgIGlmIChzdGFydENvb3JkLnggIT09IGVuZENvb3JkLnggJiYgc3RhcnRDb29yZC55ICE9PSBlbmRDb29yZC55KVxuICAgICAgdGhyb3cgRXJyb3IoXCJJbnZhbGlkIGNvb3JkaW5hdGVzLCBzaGlwIGlzIGRpYWdvbmFsbHkgcGxhY2VkXCIpO1xuXG4gICAgY29uc3QgY2hlY2tlZENvb3JkcyA9IFtzdGFydENvb3JkLCBlbmRDb29yZF0uZmlsdGVyKChjb29yZCkgPT4ge1xuICAgICAgcmV0dXJuIGNvb3JkLnggPCAxIHx8IGNvb3JkLnkgPCAxIHx8IGNvb3JkLnggPiAxMCB8fCBjb29yZC55ID4gMTA7XG4gICAgfSk7XG4gICAgaWYgKGNoZWNrZWRDb29yZHMubGVuZ3RoID4gMCkgdGhyb3cgRXJyb3IoXCJJbnZhbGlkIGNvb3JkaW5hdGUgcmFuZ2VcIik7XG5cbiAgICBpZiAoc2hpcHMubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKGdldFNoaXBCeUNvb3JkaW5hdGUoc2hpcHMsIHN0YXJ0Q29vcmQsIGVuZENvb3JkKSkgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChzdGFydENvb3JkLnggPiBlbmRDb29yZC54IHx8IHN0YXJ0Q29vcmQueSA+IGVuZENvb3JkLnkpIHtcbiAgICAgIGNvbnN0IHNoaXAgPSBTaGlwKGdldExlbmd0aChlbmRDb29yZCwgc3RhcnRDb29yZCkpO1xuICAgICAgc2hpcHMucHVzaCh7IHNoaXA6IHNoaXAsIHN0YXJ0OiBlbmRDb29yZCwgZW5kOiBzdGFydENvb3JkIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzaGlwID0gU2hpcChnZXRMZW5ndGgoc3RhcnRDb29yZCwgZW5kQ29vcmQpKTtcbiAgICAgIHNoaXBzLnB1c2goeyBzaGlwOiBzaGlwLCBzdGFydDogc3RhcnRDb29yZCwgZW5kOiBlbmRDb29yZCB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChjb29yZCkgPT4ge1xuICAgIGNvbnN0IGhpdFNoaXAgPSBnZXRTaGlwQnlDb29yZGluYXRlKHNoaXBzLCBjb29yZCk7XG4gICAgaWYgKCFoaXRTaGlwKSB7XG4gICAgICBtaXNzZWRIaXRzLnB1c2goY29vcmQpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBoaXRTaGlwLnNoaXAuaGl0KGdldEhpdFBvc2l0aW9uKGhpdFNoaXAuc3RhcnQsIGhpdFNoaXAuZW5kLCBjb29yZCkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IGdldFNoaXBDb3VudCA9ICgpID0+IHtcbiAgICByZXR1cm4gc2hpcHMubGVuZ3RoO1xuICB9O1xuXG4gIGNvbnN0IGdldE1pc3NlZEhpdHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIFsuLi5taXNzZWRIaXRzXTtcbiAgfTtcblxuICBjb25zdCBhcmVTaGlwc1N1bmsgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3Vua1NoaXBzID0gc2hpcHMuZmlsdGVyKChzaGlwKSA9PiB7XG4gICAgICByZXR1cm4gc2hpcC5zaGlwLmlzU3VuaygpO1xuICAgIH0pO1xuICAgIHJldHVybiBzdW5rU2hpcHMubGVuZ3RoID09PSBzaGlwcy5sZW5ndGggPyB0cnVlIDogZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgY29vcmRpbmF0ZUhhc1NoaXAgPSAoY29vcmQpID0+IHtcbiAgICBjb25zdCBzaGlwID0gZ2V0U2hpcEJ5Q29vcmRpbmF0ZShzaGlwcywgY29vcmQpO1xuICAgIGlmIChzaGlwID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBwbGFjZVNoaXAsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBnZXRTaGlwQ291bnQsXG4gICAgZ2V0TWlzc2VkSGl0cyxcbiAgICBhcmVTaGlwc1N1bmssXG4gICAgY29vcmRpbmF0ZUhhc1NoaXAsXG4gIH07XG59O1xuXG5mdW5jdGlvbiBnZXRTaGlwQnlDb29yZGluYXRlKHNoaXBBcnJheSwgY29vcmQpIHtcbiAgY29uc3QgW2ZvdW5kU2hpcF0gPSBzaGlwQXJyYXkuZmlsdGVyKChzaGlwKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHNoaXAuc3RhcnQueCA8PSBjb29yZC54ICYmXG4gICAgICBzaGlwLnN0YXJ0LnkgPD0gY29vcmQueSAmJlxuICAgICAgc2hpcC5lbmQueCA+PSBjb29yZC54ICYmXG4gICAgICBzaGlwLmVuZC55ID49IGNvb3JkLnlcbiAgICApO1xuICB9KTtcbiAgaWYgKCFmb3VuZFNoaXApIHJldHVybiBudWxsO1xuICByZXR1cm4gZm91bmRTaGlwO1xufVxuXG5mdW5jdGlvbiBnZXRMZW5ndGgoc3RhcnQsIGVuZCkge1xuICByZXR1cm4gTWF0aC5zcXJ0KFxuICAgIChzdGFydC54IC0gZW5kLngpICogKHN0YXJ0LnggLSBlbmQueCkgK1xuICAgICAgKHN0YXJ0LnkgLSBlbmQueSkgKiAoc3RhcnQueSAtIGVuZC55KVxuICApO1xufVxuXG5mdW5jdGlvbiBnZXRIaXRQb3NpdGlvbihzdGFydCwgZW5kLCBoaXRDb29yZCkge1xuICBpZiAoc3RhcnQueCAhPT0gZW5kLngpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBNYXRoLmFicyhzdGFydC54IC0gZW5kLngpOyBpKyspIHtcbiAgICAgIGlmIChzdGFydC54ICsgaSA9PT0gaGl0Q29vcmQueCAmJiBzdGFydC55ID09PSBoaXRDb29yZC55KSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBNYXRoLmFicyhzdGFydC55IC0gZW5kLnkpOyBpKyspIHtcbiAgICAgIGlmIChzdGFydC54ID09PSBoaXRDb29yZC54ICYmIHN0YXJ0LnkgKyBpID09PSBoaXRDb29yZC55KSByZXR1cm4gaTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuIiwiY29uc3QgU2hpcCA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIGlmICh0eXBlb2Ygc2l6ZSAhPT0gXCJudW1iZXJcIikgdGhyb3cgRXJyb3IoXCJJbmNvcnJlY3QgdHlwZSBmb3IgaGl0IGNyZWF0aW9uXCIpO1xuICBjb25zdCBsZW5ndGggPSBwYXJzZUludChzaXplKTtcbiAgY29uc3QgaGl0cyA9IFtdO1xuXG4gIGNvbnN0IGhpdCA9IChwb3MpID0+IHtcbiAgICBpZiAodHlwZW9mIHBvcyAhPT0gXCJudW1iZXJcIikgdGhyb3cgRXJyb3IoXCJJbmNvcnJlY3QgdHlwZSBmb3IgaGl0XCIpO1xuICAgIGlmIChpc1N1bmsoKSkgcmV0dXJuO1xuICAgIGlmIChoaXRzLmluY2x1ZGVzKHBvcykpIHJldHVybjtcbiAgICBoaXRzLnB1c2gocG9zKTtcbiAgfTtcblxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGhpdHMubGVuZ3RoID09PSBsZW5ndGggPyB0cnVlIDogZmFsc2U7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBoaXQsXG4gICAgaXNTdW5rLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcblxuY29uc3QgUGxheWVyID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgaWYgKHR5cGVvZiBuYW1lICE9PSBcInN0cmluZ1wiKSBuYW1lID0gXCJQbGF5ZXIgMVwiO1xuICBjb25zdCBwcmV2aW91c0F0dGFja3MgPSBbXTtcbiAgY29uc3QgZ2FtZWJvYXJkID0gR2FtZWJvYXJkKCk7XG4gIGxldCBpc05leHQgPSBmYWxzZTtcblxuICBjb25zdCBnZXROYW1lID0gKCkgPT4gbmFtZTtcblxuICBjb25zdCBzZXRJc05leHQgPSAoYm9vbCkgPT4gKGlzTmV4dCA9IGJvb2wpO1xuXG4gIGNvbnN0IG1ha2VBdHRhY2sgPSAodGFyZ2V0LCBjb29yZCkgPT4ge1xuICAgIGlmICghaXNOZXh0KSB0aHJvdyBFcnJvcihgJHtnZXROYW1lKCl9IGlzIG5vdCBuZXh0IWApO1xuICAgIGlmICh0YXJnZXQgPT09IGdhbWVib2FyZCkgdGhyb3cgRXJyb3IoXCJDYW4ndCBhdHRhY2sgb3duIGdhbWVib2FyZCFcIik7XG5cbiAgICBpZiAobmFtZSA9PT0gXCJjb21wdXRlclwiIHx8IG5hbWUgPT09IFwiQ29tcHV0ZXJcIikge1xuICAgICAgY29uc3QgYXR0YWNrID0gZ2V0Q29tcHV0ZXJBdHRhY2soKTtcbiAgICAgIHRhcmdldC5yZWNlaXZlQXR0YWNrKGF0dGFjayk7XG4gICAgICBwcmV2aW91c0F0dGFja3MucHVzaChhdHRhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXJnZXQucmVjZWl2ZUF0dGFjayhjb29yZCk7XG4gICAgICBwcmV2aW91c0F0dGFja3MucHVzaChjb29yZCk7XG4gICAgfVxuICAgIGlzTmV4dCA9IGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGdldENvbXB1dGVyQXR0YWNrID0gKCkgPT4ge1xuICAgIGlmIChuYW1lICE9PSBcImNvbXB1dGVyXCIpIHJldHVybjtcblxuICAgIGNvbnN0IGF0dGVtcHRlZEF0dGFjayA9IHtcbiAgICAgIHg6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSArIDEsXG4gICAgICB5OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxLFxuICAgIH07XG5cbiAgICBjb25zdCBtYXRjaGVkQXR0YWNrID0gcHJldmlvdXNBdHRhY2tzLmZpbmQoKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGNvb3JkaW5hdGUueCA9PT0gYXR0ZW1wdGVkQXR0YWNrLnggJiYgY29vcmRpbmF0ZS55ID09PSBhdHRlbXB0ZWRBdHRhY2sueVxuICAgICAgKTtcbiAgICB9KTtcbiAgICBpZiAobWF0Y2hlZEF0dGFjayAhPT0gdW5kZWZpbmVkKSByZXR1cm4gZ2V0Q29tcHV0ZXJBdHRhY2soKTtcblxuICAgIHJldHVybiBhdHRlbXB0ZWRBdHRhY2s7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnYW1lYm9hcmQsXG4gICAgZ2V0TmFtZSxcbiAgICBtYWtlQXR0YWNrLFxuICAgIHNldElzTmV4dCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==