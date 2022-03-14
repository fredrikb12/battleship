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
  const possibleAttacks = [];
  const gameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();
  let isNext = false;

  const getName = () => name;

  const setIsNext = (bool) => (isNext = bool);

  const makeAttack = (target, coord) => {
    if (!isNext) throw Error(`${getName()} is not next!`);
    if (target === gameboard) throw Error("Can't attack own gameboard!");
    let wasHit;

    if (name === "computer" || name === "Computer") {
      const attack = getComputerAttack();
      wasHit = target.receiveAttack(attack);
      previousAttacks.push(attack);
    } else {
      wasHit = target.receiveAttack(coord);
      previousAttacks.push(coord);
    }
    return wasHit;
  };

  const getComputerAttack = () => {
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

  const fillPossibleAttack = () => {
    for (let i = 1; i < 11; i++) {
      for (let j = 1; j < 11; j++) {
        possibleAttacks.push({ x: i, y: j });
      }
    }
  };

  const hasAlreadyClicked = (coord) => {
    return previousAttacks.find(
      (el) => el.x === coord.x && el.y === coord.y
    ) !== undefined
      ? true
      : false;
  };

  return {
    gameboard,
    getName,
    makeAttack,
    setIsNext,
    fillPossibleAttack,
    hasAlreadyClicked,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7O0FBRTFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsaURBQUk7QUFDdkIsbUJBQW1CLDhDQUE4QztBQUNqRSxNQUFNO0FBQ04sbUJBQW1CLGlEQUFJO0FBQ3ZCLG1CQUFtQiw4Q0FBOEM7QUFDakU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixnQ0FBZ0M7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osb0JBQW9CLGdDQUFnQztBQUNwRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzNHekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7O1VDdkJwQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTm9DOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixzREFBUztBQUM3Qjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLGdDQUFnQyxXQUFXO0FBQzNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QixzQkFBc0IsUUFBUTtBQUM5QiwrQkFBK0IsWUFBWTtBQUMzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuXG5jb25zdCBHYW1lYm9hcmQgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHNoaXBzID0gW107XG4gIGNvbnN0IG1pc3NlZEhpdHMgPSBbXTtcblxuICBjb25zdCBwbGFjZVNoaXAgPSAoc3RhcnRDb29yZCwgZW5kQ29vcmQpID0+IHtcbiAgICBpZiAoc3RhcnRDb29yZC54ICE9PSBlbmRDb29yZC54ICYmIHN0YXJ0Q29vcmQueSAhPT0gZW5kQ29vcmQueSlcbiAgICAgIHRocm93IEVycm9yKFwiSW52YWxpZCBjb29yZGluYXRlcywgc2hpcCBpcyBkaWFnb25hbGx5IHBsYWNlZFwiKTtcblxuICAgIGNvbnN0IGNoZWNrZWRDb29yZHMgPSBbc3RhcnRDb29yZCwgZW5kQ29vcmRdLmZpbHRlcigoY29vcmQpID0+IHtcbiAgICAgIHJldHVybiBjb29yZC54IDwgMSB8fCBjb29yZC55IDwgMSB8fCBjb29yZC54ID4gMTAgfHwgY29vcmQueSA+IDEwO1xuICAgIH0pO1xuICAgIGlmIChjaGVja2VkQ29vcmRzLmxlbmd0aCA+IDApIHRocm93IEVycm9yKFwiSW52YWxpZCBjb29yZGluYXRlIHJhbmdlXCIpO1xuXG4gICAgaWYgKHNoaXBzLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmIChnZXRTaGlwQnlDb29yZGluYXRlKHNoaXBzLCBzdGFydENvb3JkLCBlbmRDb29yZCkpIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoc3RhcnRDb29yZC54ID4gZW5kQ29vcmQueCB8fCBzdGFydENvb3JkLnkgPiBlbmRDb29yZC55KSB7XG4gICAgICBjb25zdCBzaGlwID0gU2hpcChnZXRMZW5ndGgoZW5kQ29vcmQsIHN0YXJ0Q29vcmQpKTtcbiAgICAgIHNoaXBzLnB1c2goeyBzaGlwOiBzaGlwLCBzdGFydDogZW5kQ29vcmQsIGVuZDogc3RhcnRDb29yZCB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc2hpcCA9IFNoaXAoZ2V0TGVuZ3RoKHN0YXJ0Q29vcmQsIGVuZENvb3JkKSk7XG4gICAgICBzaGlwcy5wdXNoKHsgc2hpcDogc2hpcCwgc3RhcnQ6IHN0YXJ0Q29vcmQsIGVuZDogZW5kQ29vcmQgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29vcmQpID0+IHtcbiAgICBjb25zdCBoaXRTaGlwID0gZ2V0U2hpcEJ5Q29vcmRpbmF0ZShzaGlwcywgY29vcmQpO1xuICAgIGlmICghaGl0U2hpcCkge1xuICAgICAgbWlzc2VkSGl0cy5wdXNoKGNvb3JkKTtcbiAgICAgIHJldHVybiB7IGhpdDogZmFsc2UsIGNvb3JkOiBjb29yZCB9O1xuICAgIH1cbiAgICBoaXRTaGlwLnNoaXAuaGl0KGdldEhpdFBvc2l0aW9uKGhpdFNoaXAuc3RhcnQsIGhpdFNoaXAuZW5kLCBjb29yZCkpO1xuICAgIHJldHVybiB7IGhpdDogdHJ1ZSwgY29vcmQ6IGNvb3JkIH07XG4gIH07XG5cbiAgY29uc3QgZ2V0U2hpcENvdW50ID0gKCkgPT4ge1xuICAgIHJldHVybiBzaGlwcy5sZW5ndGg7XG4gIH07XG5cbiAgY29uc3QgZ2V0TWlzc2VkSGl0cyA9ICgpID0+IHtcbiAgICByZXR1cm4gWy4uLm1pc3NlZEhpdHNdO1xuICB9O1xuXG4gIGNvbnN0IGFyZVNoaXBzU3VuayA9ICgpID0+IHtcbiAgICBjb25zdCBzdW5rU2hpcHMgPSBzaGlwcy5maWx0ZXIoKHNoaXApID0+IHtcbiAgICAgIHJldHVybiBzaGlwLnNoaXAuaXNTdW5rKCk7XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coc3Vua1NoaXBzKTtcbiAgICByZXR1cm4gc3Vua1NoaXBzLmxlbmd0aCA9PT0gc2hpcHMubGVuZ3RoID8gdHJ1ZSA6IGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGNvb3JkaW5hdGVIYXNTaGlwID0gKGNvb3JkKSA9PiB7XG4gICAgY29uc3Qgc2hpcCA9IGdldFNoaXBCeUNvb3JkaW5hdGUoc2hpcHMsIGNvb3JkKTtcbiAgICBpZiAoc2hpcCA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcGxhY2VTaGlwLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgZ2V0U2hpcENvdW50LFxuICAgIGdldE1pc3NlZEhpdHMsXG4gICAgYXJlU2hpcHNTdW5rLFxuICAgIGNvb3JkaW5hdGVIYXNTaGlwLFxuICB9O1xufTtcblxuZnVuY3Rpb24gZ2V0U2hpcEJ5Q29vcmRpbmF0ZShzaGlwQXJyYXksIGNvb3JkKSB7XG4gIGlmICghY29vcmQpIHJldHVybjtcbiAgY29uc3QgW2ZvdW5kU2hpcF0gPSBzaGlwQXJyYXkuZmlsdGVyKChzaGlwKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHNoaXAuc3RhcnQueCA8PSBjb29yZC54ICYmXG4gICAgICBzaGlwLnN0YXJ0LnkgPD0gY29vcmQueSAmJlxuICAgICAgc2hpcC5lbmQueCA+PSBjb29yZC54ICYmXG4gICAgICBzaGlwLmVuZC55ID49IGNvb3JkLnlcbiAgICApO1xuICB9KTtcbiAgaWYgKCFmb3VuZFNoaXApIHJldHVybiBudWxsO1xuICByZXR1cm4gZm91bmRTaGlwO1xufVxuXG5mdW5jdGlvbiBnZXRMZW5ndGgoc3RhcnQsIGVuZCkge1xuICByZXR1cm4gKFxuICAgIE1hdGguc3FydChcbiAgICAgIChzdGFydC54IC0gZW5kLngpICogKHN0YXJ0LnggLSBlbmQueCkgK1xuICAgICAgICAoc3RhcnQueSAtIGVuZC55KSAqIChzdGFydC55IC0gZW5kLnkpXG4gICAgKSArIDFcbiAgKTtcbn1cblxuZnVuY3Rpb24gZ2V0SGl0UG9zaXRpb24oc3RhcnQsIGVuZCwgaGl0Q29vcmQpIHtcbiAgaWYgKHN0YXJ0LnggIT09IGVuZC54KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gTWF0aC5hYnMoc3RhcnQueCAtIGVuZC54KTsgaSsrKSB7XG4gICAgICBpZiAoc3RhcnQueCArIGkgPT09IGhpdENvb3JkLnggJiYgc3RhcnQueSA9PT0gaGl0Q29vcmQueSkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gTWF0aC5hYnMoc3RhcnQueSAtIGVuZC55KTsgaSsrKSB7XG4gICAgICBpZiAoc3RhcnQueCA9PT0gaGl0Q29vcmQueCAmJiBzdGFydC55ICsgaSA9PT0gaGl0Q29vcmQueSkgcmV0dXJuIGk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsImNvbnN0IFNoaXAgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICBpZiAodHlwZW9mIHNpemUgIT09IFwibnVtYmVyXCIpIHRocm93IEVycm9yKFwiSW5jb3JyZWN0IHR5cGUgZm9yIGhpdCBjcmVhdGlvblwiKTtcbiAgaWYgKHNpemUgPCAyKSB0aHJvdyBFcnJvcihcIlNpemUgdG9vIGxvd1wiKTtcbiAgY29uc3QgbGVuZ3RoID0gcGFyc2VJbnQoc2l6ZSk7XG4gIGNvbnN0IGhpdHMgPSBbXTtcblxuICBjb25zdCBoaXQgPSAocG9zKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBwb3MgIT09IFwibnVtYmVyXCIpIHRocm93IEVycm9yKFwiSW5jb3JyZWN0IHR5cGUgZm9yIGhpdFwiKTtcbiAgICBpZiAoaXNTdW5rKCkpIHJldHVybjtcbiAgICBpZiAoaGl0cy5pbmNsdWRlcyhwb3MpKSByZXR1cm47XG4gICAgaGl0cy5wdXNoKHBvcyk7XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgIHJldHVybiBoaXRzLmxlbmd0aCA9PT0gbGVuZ3RoID8gdHJ1ZSA6IGZhbHNlO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgaGl0LFxuICAgIGlzU3VuayxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5cbmNvbnN0IFBsYXllciA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGlmICh0eXBlb2YgbmFtZSAhPT0gXCJzdHJpbmdcIikgbmFtZSA9IFwiUGxheWVyIDFcIjtcbiAgY29uc3QgcHJldmlvdXNBdHRhY2tzID0gW107XG4gIGNvbnN0IHBvc3NpYmxlQXR0YWNrcyA9IFtdO1xuICBjb25zdCBnYW1lYm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgbGV0IGlzTmV4dCA9IGZhbHNlO1xuXG4gIGNvbnN0IGdldE5hbWUgPSAoKSA9PiBuYW1lO1xuXG4gIGNvbnN0IHNldElzTmV4dCA9IChib29sKSA9PiAoaXNOZXh0ID0gYm9vbCk7XG5cbiAgY29uc3QgbWFrZUF0dGFjayA9ICh0YXJnZXQsIGNvb3JkKSA9PiB7XG4gICAgaWYgKCFpc05leHQpIHRocm93IEVycm9yKGAke2dldE5hbWUoKX0gaXMgbm90IG5leHQhYCk7XG4gICAgaWYgKHRhcmdldCA9PT0gZ2FtZWJvYXJkKSB0aHJvdyBFcnJvcihcIkNhbid0IGF0dGFjayBvd24gZ2FtZWJvYXJkIVwiKTtcbiAgICBsZXQgd2FzSGl0O1xuXG4gICAgaWYgKG5hbWUgPT09IFwiY29tcHV0ZXJcIiB8fCBuYW1lID09PSBcIkNvbXB1dGVyXCIpIHtcbiAgICAgIGNvbnN0IGF0dGFjayA9IGdldENvbXB1dGVyQXR0YWNrKCk7XG4gICAgICB3YXNIaXQgPSB0YXJnZXQucmVjZWl2ZUF0dGFjayhhdHRhY2spO1xuICAgICAgcHJldmlvdXNBdHRhY2tzLnB1c2goYXR0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2FzSGl0ID0gdGFyZ2V0LnJlY2VpdmVBdHRhY2soY29vcmQpO1xuICAgICAgcHJldmlvdXNBdHRhY2tzLnB1c2goY29vcmQpO1xuICAgIH1cbiAgICByZXR1cm4gd2FzSGl0O1xuICB9O1xuXG4gIGNvbnN0IGdldENvbXB1dGVyQXR0YWNrID0gKCkgPT4ge1xuICAgIGNvbnN0IGF0dGVtcHRlZEF0dGFjayA9IHtcbiAgICAgIHg6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSArIDEsXG4gICAgICB5OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxLFxuICAgIH07XG5cbiAgICBjb25zdCBtYXRjaGVkQXR0YWNrID0gcHJldmlvdXNBdHRhY2tzLmZpbmQoKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGNvb3JkaW5hdGUueCA9PT0gYXR0ZW1wdGVkQXR0YWNrLnggJiYgY29vcmRpbmF0ZS55ID09PSBhdHRlbXB0ZWRBdHRhY2sueVxuICAgICAgKTtcbiAgICB9KTtcbiAgICBpZiAobWF0Y2hlZEF0dGFjayAhPT0gdW5kZWZpbmVkKSByZXR1cm4gZ2V0Q29tcHV0ZXJBdHRhY2soKTtcblxuICAgIHJldHVybiBhdHRlbXB0ZWRBdHRhY2s7XG4gIH07XG5cbiAgY29uc3QgZmlsbFBvc3NpYmxlQXR0YWNrID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMTE7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDE7IGogPCAxMTsgaisrKSB7XG4gICAgICAgIHBvc3NpYmxlQXR0YWNrcy5wdXNoKHsgeDogaSwgeTogaiB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFzQWxyZWFkeUNsaWNrZWQgPSAoY29vcmQpID0+IHtcbiAgICByZXR1cm4gcHJldmlvdXNBdHRhY2tzLmZpbmQoXG4gICAgICAoZWwpID0+IGVsLnggPT09IGNvb3JkLnggJiYgZWwueSA9PT0gY29vcmQueVxuICAgICkgIT09IHVuZGVmaW5lZFxuICAgICAgPyB0cnVlXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2FtZWJvYXJkLFxuICAgIGdldE5hbWUsXG4gICAgbWFrZUF0dGFjayxcbiAgICBzZXRJc05leHQsXG4gICAgZmlsbFBvc3NpYmxlQXR0YWNrLFxuICAgIGhhc0FscmVhZHlDbGlja2VkLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9