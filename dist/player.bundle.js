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
  const starterShips = [5, 4, 3, 3, 2];
  const ships = [];
  const missedHits = [];

  const placeShip = (startCoord, endCoord) => {
    if (startCoord.x !== endCoord.x && startCoord.y !== endCoord.y)
      throw Error("Invalid coordinates, ship is diagonally placed");

    const checkedCoords = [startCoord, endCoord].filter((coord) => {
      return coord.x < 1 || coord.y < 1 || coord.x > 10 || coord.y > 10;
    });
    if (checkedCoords.length > 0) throw Error("Invalid coordinate range");
    console.log(getShipByCoordinates(ships, startCoord, endCoord));
    if (getShipByCoordinates(ships, startCoord, endCoord)) return;

    if (startCoord.x > endCoord.x || startCoord.y > endCoord.y) {
      const ship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(getLength(endCoord, startCoord));
      ships.push({ ship: ship, start: endCoord, end: startCoord });
    } else {
      const ship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(getLength(startCoord, endCoord));
      ships.push({ ship: ship, start: startCoord, end: endCoord });
    }
    return true;
  };

  const receiveAttack = (coord) => {
    const hitShip = getShipByCoordinates(ships, coord);
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
    return sunkShips.length === ships.length ? true : false;
  };

  const coordinateHasShip = (coord) => {
    const ship = getShipByCoordinates(ships, coord);
    if (ship === null) return false;
    return true;
  };

  const getSuggestedPlacement = (coord, length, orientation) => {
    const coords = [];
    const adjustedCoords = [];
    const returnCoords = [];
    for (let i = 0; i < length; i++) {
      if (orientation === "x") coords.push({ x: coord.x + i, y: coord.y });
      if (orientation === "y") coords.push({ x: coord.x, y: coord.y + i });
    }
    switch (coord[orientation] + length - 1) {
      case 11:
        coords.forEach((coord) => adjustedCoords.push(coord[orientation] - 1));
        break;

      case 12:
        coords.forEach((coord) => adjustedCoords.push(coord[orientation] - 2));
        break;

      case 13:
        coords.forEach((coord) => adjustedCoords.push(coord[orientation] - 3));
        break;

      case 14:
        coords.forEach((coord) => adjustedCoords.push(coord[orientation] - 4));
        break;

      default:
        return coords;
    }
    adjustedCoords.forEach((adjusted) => {
      if (orientation === "x") {
        returnCoords.push({ x: adjusted, y: coord.y });
      } else {
        returnCoords.push({ x: coord.x, y: adjusted });
      }
    });
    return returnCoords;
  };

  const getShipToPlace = () => {
    return starterShips[ships.length];
  };

  function getShipByCoordinates(shipArray, start, end) {
    if (!start) return;
    if (!end) {
      const [foundShip] = shipArray.filter((ship) => {
        return (
          ship.start.x <= start.x &&
          ship.start.y <= start.y &&
          ship.end.x >= start.x &&
          ship.end.y >= start.y
        );
      });
      if (!foundShip) return null;
      return foundShip;
    }
    const coords = getAllCoordinates(start, end);
    console.log(coords);
    const foundShips = coords.map((coord) => coordinateHasShip(coord));
    console.log(foundShips);

    if (
      foundShips.filter((el) => {
        return el !== false;
      }).length > 0
    ) {
      return true;
    } else {
      return false;
    }
  }

  return {
    placeShip,
    receiveAttack,
    getShipCount,
    getMissedHits,
    areShipsSunk,
    coordinateHasShip,
    getSuggestedPlacement,
    getShipToPlace,
  };
};

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

function getAllCoordinates(start, end) {
  const coords = [];
  if (start.x !== end.x) {
    for (let i = 0; i <= Math.abs(end.x - start.x); i++) {
      coords.push({ x: start.x + i, y: start.y });
    }
  } else {
    for (let i = 0; i <= Math.abs(end.y - start.y); i++) {
      coords.push({ x: start.x, y: start.y + i });
    }
  }
  return coords;
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
    const attack =
      possibleAttacks[Math.floor(Math.random() * possibleAttacks.length)];
    possibleAttacks.splice(possibleAttacks.indexOf(attack), 1);
    /*const attemptedAttack = {
      x: Math.floor(Math.random() * 10) + 1,
      y: Math.floor(Math.random() * 10) + 1,
    };

    const matchedAttack = previousAttacks.find((coordinate) => {
      return (
        coordinate.x === attemptedAttack.x && coordinate.y === attemptedAttack.y
      );
    });
    if (matchedAttack !== undefined) return getComputerAttack();*/

    return attack;
  };

  const getComputerPlacement = () => {
    const placement = {
      x: Math.floor(Math.random() * 10) + 1,
      y: Math.floor(Math.random() * 10) + 1,
    };
    const orientation = Math.floor(Math.random() * 2 + 1) === 1 ? "x" : "y";
    return { placement, orientation };
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
    getComputerPlacement,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUs7QUFDTCxnRUFBZ0U7O0FBRWhFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUIsc0JBQXNCLFFBQVE7QUFDOUIsK0JBQStCLFlBQVk7QUFDM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuXG5jb25zdCBHYW1lYm9hcmQgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHN0YXJ0ZXJTaGlwcyA9IFs1LCA0LCAzLCAzLCAyXTtcbiAgY29uc3Qgc2hpcHMgPSBbXTtcbiAgY29uc3QgbWlzc2VkSGl0cyA9IFtdO1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChzdGFydENvb3JkLCBlbmRDb29yZCkgPT4ge1xuICAgIGlmIChzdGFydENvb3JkLnggIT09IGVuZENvb3JkLnggJiYgc3RhcnRDb29yZC55ICE9PSBlbmRDb29yZC55KVxuICAgICAgdGhyb3cgRXJyb3IoXCJJbnZhbGlkIGNvb3JkaW5hdGVzLCBzaGlwIGlzIGRpYWdvbmFsbHkgcGxhY2VkXCIpO1xuXG4gICAgY29uc3QgY2hlY2tlZENvb3JkcyA9IFtzdGFydENvb3JkLCBlbmRDb29yZF0uZmlsdGVyKChjb29yZCkgPT4ge1xuICAgICAgcmV0dXJuIGNvb3JkLnggPCAxIHx8IGNvb3JkLnkgPCAxIHx8IGNvb3JkLnggPiAxMCB8fCBjb29yZC55ID4gMTA7XG4gICAgfSk7XG4gICAgaWYgKGNoZWNrZWRDb29yZHMubGVuZ3RoID4gMCkgdGhyb3cgRXJyb3IoXCJJbnZhbGlkIGNvb3JkaW5hdGUgcmFuZ2VcIik7XG4gICAgY29uc29sZS5sb2coZ2V0U2hpcEJ5Q29vcmRpbmF0ZXMoc2hpcHMsIHN0YXJ0Q29vcmQsIGVuZENvb3JkKSk7XG4gICAgaWYgKGdldFNoaXBCeUNvb3JkaW5hdGVzKHNoaXBzLCBzdGFydENvb3JkLCBlbmRDb29yZCkpIHJldHVybjtcblxuICAgIGlmIChzdGFydENvb3JkLnggPiBlbmRDb29yZC54IHx8IHN0YXJ0Q29vcmQueSA+IGVuZENvb3JkLnkpIHtcbiAgICAgIGNvbnN0IHNoaXAgPSBTaGlwKGdldExlbmd0aChlbmRDb29yZCwgc3RhcnRDb29yZCkpO1xuICAgICAgc2hpcHMucHVzaCh7IHNoaXA6IHNoaXAsIHN0YXJ0OiBlbmRDb29yZCwgZW5kOiBzdGFydENvb3JkIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzaGlwID0gU2hpcChnZXRMZW5ndGgoc3RhcnRDb29yZCwgZW5kQ29vcmQpKTtcbiAgICAgIHNoaXBzLnB1c2goeyBzaGlwOiBzaGlwLCBzdGFydDogc3RhcnRDb29yZCwgZW5kOiBlbmRDb29yZCB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChjb29yZCkgPT4ge1xuICAgIGNvbnN0IGhpdFNoaXAgPSBnZXRTaGlwQnlDb29yZGluYXRlcyhzaGlwcywgY29vcmQpO1xuICAgIGlmICghaGl0U2hpcCkge1xuICAgICAgbWlzc2VkSGl0cy5wdXNoKGNvb3JkKTtcbiAgICAgIHJldHVybiB7IGhpdDogZmFsc2UsIGNvb3JkOiBjb29yZCB9O1xuICAgIH1cbiAgICBoaXRTaGlwLnNoaXAuaGl0KGdldEhpdFBvc2l0aW9uKGhpdFNoaXAuc3RhcnQsIGhpdFNoaXAuZW5kLCBjb29yZCkpO1xuICAgIHJldHVybiB7IGhpdDogdHJ1ZSwgY29vcmQ6IGNvb3JkIH07XG4gIH07XG5cbiAgY29uc3QgZ2V0U2hpcENvdW50ID0gKCkgPT4ge1xuICAgIHJldHVybiBzaGlwcy5sZW5ndGg7XG4gIH07XG5cbiAgY29uc3QgZ2V0TWlzc2VkSGl0cyA9ICgpID0+IHtcbiAgICByZXR1cm4gWy4uLm1pc3NlZEhpdHNdO1xuICB9O1xuXG4gIGNvbnN0IGFyZVNoaXBzU3VuayA9ICgpID0+IHtcbiAgICBjb25zdCBzdW5rU2hpcHMgPSBzaGlwcy5maWx0ZXIoKHNoaXApID0+IHtcbiAgICAgIHJldHVybiBzaGlwLnNoaXAuaXNTdW5rKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHN1bmtTaGlwcy5sZW5ndGggPT09IHNoaXBzLmxlbmd0aCA/IHRydWUgOiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBjb29yZGluYXRlSGFzU2hpcCA9IChjb29yZCkgPT4ge1xuICAgIGNvbnN0IHNoaXAgPSBnZXRTaGlwQnlDb29yZGluYXRlcyhzaGlwcywgY29vcmQpO1xuICAgIGlmIChzaGlwID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3QgZ2V0U3VnZ2VzdGVkUGxhY2VtZW50ID0gKGNvb3JkLCBsZW5ndGgsIG9yaWVudGF0aW9uKSA9PiB7XG4gICAgY29uc3QgY29vcmRzID0gW107XG4gICAgY29uc3QgYWRqdXN0ZWRDb29yZHMgPSBbXTtcbiAgICBjb25zdCByZXR1cm5Db29yZHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAob3JpZW50YXRpb24gPT09IFwieFwiKSBjb29yZHMucHVzaCh7IHg6IGNvb3JkLnggKyBpLCB5OiBjb29yZC55IH0pO1xuICAgICAgaWYgKG9yaWVudGF0aW9uID09PSBcInlcIikgY29vcmRzLnB1c2goeyB4OiBjb29yZC54LCB5OiBjb29yZC55ICsgaSB9KTtcbiAgICB9XG4gICAgc3dpdGNoIChjb29yZFtvcmllbnRhdGlvbl0gKyBsZW5ndGggLSAxKSB7XG4gICAgICBjYXNlIDExOlxuICAgICAgICBjb29yZHMuZm9yRWFjaCgoY29vcmQpID0+IGFkanVzdGVkQ29vcmRzLnB1c2goY29vcmRbb3JpZW50YXRpb25dIC0gMSkpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAxMjpcbiAgICAgICAgY29vcmRzLmZvckVhY2goKGNvb3JkKSA9PiBhZGp1c3RlZENvb3Jkcy5wdXNoKGNvb3JkW29yaWVudGF0aW9uXSAtIDIpKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgMTM6XG4gICAgICAgIGNvb3Jkcy5mb3JFYWNoKChjb29yZCkgPT4gYWRqdXN0ZWRDb29yZHMucHVzaChjb29yZFtvcmllbnRhdGlvbl0gLSAzKSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDE0OlxuICAgICAgICBjb29yZHMuZm9yRWFjaCgoY29vcmQpID0+IGFkanVzdGVkQ29vcmRzLnB1c2goY29vcmRbb3JpZW50YXRpb25dIC0gNCkpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGNvb3JkcztcbiAgICB9XG4gICAgYWRqdXN0ZWRDb29yZHMuZm9yRWFjaCgoYWRqdXN0ZWQpID0+IHtcbiAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJ4XCIpIHtcbiAgICAgICAgcmV0dXJuQ29vcmRzLnB1c2goeyB4OiBhZGp1c3RlZCwgeTogY29vcmQueSB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybkNvb3Jkcy5wdXNoKHsgeDogY29vcmQueCwgeTogYWRqdXN0ZWQgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJldHVybkNvb3JkcztcbiAgfTtcblxuICBjb25zdCBnZXRTaGlwVG9QbGFjZSA9ICgpID0+IHtcbiAgICByZXR1cm4gc3RhcnRlclNoaXBzW3NoaXBzLmxlbmd0aF07XG4gIH07XG5cbiAgZnVuY3Rpb24gZ2V0U2hpcEJ5Q29vcmRpbmF0ZXMoc2hpcEFycmF5LCBzdGFydCwgZW5kKSB7XG4gICAgaWYgKCFzdGFydCkgcmV0dXJuO1xuICAgIGlmICghZW5kKSB7XG4gICAgICBjb25zdCBbZm91bmRTaGlwXSA9IHNoaXBBcnJheS5maWx0ZXIoKHNoaXApID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBzaGlwLnN0YXJ0LnggPD0gc3RhcnQueCAmJlxuICAgICAgICAgIHNoaXAuc3RhcnQueSA8PSBzdGFydC55ICYmXG4gICAgICAgICAgc2hpcC5lbmQueCA+PSBzdGFydC54ICYmXG4gICAgICAgICAgc2hpcC5lbmQueSA+PSBzdGFydC55XG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICAgIGlmICghZm91bmRTaGlwKSByZXR1cm4gbnVsbDtcbiAgICAgIHJldHVybiBmb3VuZFNoaXA7XG4gICAgfVxuICAgIGNvbnN0IGNvb3JkcyA9IGdldEFsbENvb3JkaW5hdGVzKHN0YXJ0LCBlbmQpO1xuICAgIGNvbnNvbGUubG9nKGNvb3Jkcyk7XG4gICAgY29uc3QgZm91bmRTaGlwcyA9IGNvb3Jkcy5tYXAoKGNvb3JkKSA9PiBjb29yZGluYXRlSGFzU2hpcChjb29yZCkpO1xuICAgIGNvbnNvbGUubG9nKGZvdW5kU2hpcHMpO1xuXG4gICAgaWYgKFxuICAgICAgZm91bmRTaGlwcy5maWx0ZXIoKGVsKSA9PiB7XG4gICAgICAgIHJldHVybiBlbCAhPT0gZmFsc2U7XG4gICAgICB9KS5sZW5ndGggPiAwXG4gICAgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcGxhY2VTaGlwLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgZ2V0U2hpcENvdW50LFxuICAgIGdldE1pc3NlZEhpdHMsXG4gICAgYXJlU2hpcHNTdW5rLFxuICAgIGNvb3JkaW5hdGVIYXNTaGlwLFxuICAgIGdldFN1Z2dlc3RlZFBsYWNlbWVudCxcbiAgICBnZXRTaGlwVG9QbGFjZSxcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIGdldExlbmd0aChzdGFydCwgZW5kKSB7XG4gIHJldHVybiAoXG4gICAgTWF0aC5zcXJ0KFxuICAgICAgKHN0YXJ0LnggLSBlbmQueCkgKiAoc3RhcnQueCAtIGVuZC54KSArXG4gICAgICAgIChzdGFydC55IC0gZW5kLnkpICogKHN0YXJ0LnkgLSBlbmQueSlcbiAgICApICsgMVxuICApO1xufVxuXG5mdW5jdGlvbiBnZXRIaXRQb3NpdGlvbihzdGFydCwgZW5kLCBoaXRDb29yZCkge1xuICBpZiAoc3RhcnQueCAhPT0gZW5kLngpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBNYXRoLmFicyhzdGFydC54IC0gZW5kLngpOyBpKyspIHtcbiAgICAgIGlmIChzdGFydC54ICsgaSA9PT0gaGl0Q29vcmQueCAmJiBzdGFydC55ID09PSBoaXRDb29yZC55KSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBNYXRoLmFicyhzdGFydC55IC0gZW5kLnkpOyBpKyspIHtcbiAgICAgIGlmIChzdGFydC54ID09PSBoaXRDb29yZC54ICYmIHN0YXJ0LnkgKyBpID09PSBoaXRDb29yZC55KSByZXR1cm4gaTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0QWxsQ29vcmRpbmF0ZXMoc3RhcnQsIGVuZCkge1xuICBjb25zdCBjb29yZHMgPSBbXTtcbiAgaWYgKHN0YXJ0LnggIT09IGVuZC54KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gTWF0aC5hYnMoZW5kLnggLSBzdGFydC54KTsgaSsrKSB7XG4gICAgICBjb29yZHMucHVzaCh7IHg6IHN0YXJ0LnggKyBpLCB5OiBzdGFydC55IH0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBNYXRoLmFicyhlbmQueSAtIHN0YXJ0LnkpOyBpKyspIHtcbiAgICAgIGNvb3Jkcy5wdXNoKHsgeDogc3RhcnQueCwgeTogc3RhcnQueSArIGkgfSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBjb29yZHM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsImNvbnN0IFNoaXAgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICBpZiAodHlwZW9mIHNpemUgIT09IFwibnVtYmVyXCIpIHRocm93IEVycm9yKFwiSW5jb3JyZWN0IHR5cGUgZm9yIGhpdCBjcmVhdGlvblwiKTtcbiAgaWYgKHNpemUgPCAyKSB0aHJvdyBFcnJvcihcIlNpemUgdG9vIGxvd1wiKTtcbiAgY29uc3QgbGVuZ3RoID0gcGFyc2VJbnQoc2l6ZSk7XG4gIGNvbnN0IGhpdHMgPSBbXTtcblxuICBjb25zdCBoaXQgPSAocG9zKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBwb3MgIT09IFwibnVtYmVyXCIpIHRocm93IEVycm9yKFwiSW5jb3JyZWN0IHR5cGUgZm9yIGhpdFwiKTtcbiAgICBpZiAoaXNTdW5rKCkpIHJldHVybjtcbiAgICBpZiAoaGl0cy5pbmNsdWRlcyhwb3MpKSByZXR1cm47XG4gICAgaGl0cy5wdXNoKHBvcyk7XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgIHJldHVybiBoaXRzLmxlbmd0aCA9PT0gbGVuZ3RoID8gdHJ1ZSA6IGZhbHNlO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgaGl0LFxuICAgIGlzU3VuayxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5cbmNvbnN0IFBsYXllciA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGlmICh0eXBlb2YgbmFtZSAhPT0gXCJzdHJpbmdcIikgbmFtZSA9IFwiUGxheWVyIDFcIjtcblxuICBjb25zdCBwcmV2aW91c0F0dGFja3MgPSBbXTtcbiAgY29uc3QgcG9zc2libGVBdHRhY2tzID0gW107XG4gIGNvbnN0IGdhbWVib2FyZCA9IEdhbWVib2FyZCgpO1xuICBsZXQgaXNOZXh0ID0gZmFsc2U7XG5cbiAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IG5hbWU7XG5cbiAgY29uc3Qgc2V0SXNOZXh0ID0gKGJvb2wpID0+IChpc05leHQgPSBib29sKTtcblxuICBjb25zdCBtYWtlQXR0YWNrID0gKHRhcmdldCwgY29vcmQpID0+IHtcbiAgICBpZiAoIWlzTmV4dCkgdGhyb3cgRXJyb3IoYCR7Z2V0TmFtZSgpfSBpcyBub3QgbmV4dCFgKTtcbiAgICBpZiAodGFyZ2V0ID09PSBnYW1lYm9hcmQpIHRocm93IEVycm9yKFwiQ2FuJ3QgYXR0YWNrIG93biBnYW1lYm9hcmQhXCIpO1xuICAgIGxldCB3YXNIaXQ7XG5cbiAgICBpZiAobmFtZSA9PT0gXCJjb21wdXRlclwiIHx8IG5hbWUgPT09IFwiQ29tcHV0ZXJcIikge1xuICAgICAgY29uc3QgYXR0YWNrID0gZ2V0Q29tcHV0ZXJBdHRhY2soKTtcbiAgICAgIHdhc0hpdCA9IHRhcmdldC5yZWNlaXZlQXR0YWNrKGF0dGFjayk7XG4gICAgICBwcmV2aW91c0F0dGFja3MucHVzaChhdHRhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICB3YXNIaXQgPSB0YXJnZXQucmVjZWl2ZUF0dGFjayhjb29yZCk7XG4gICAgICBwcmV2aW91c0F0dGFja3MucHVzaChjb29yZCk7XG4gICAgfVxuICAgIHJldHVybiB3YXNIaXQ7XG4gIH07XG5cbiAgY29uc3QgZ2V0Q29tcHV0ZXJBdHRhY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgYXR0YWNrID1cbiAgICAgIHBvc3NpYmxlQXR0YWNrc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3NzaWJsZUF0dGFja3MubGVuZ3RoKV07XG4gICAgcG9zc2libGVBdHRhY2tzLnNwbGljZShwb3NzaWJsZUF0dGFja3MuaW5kZXhPZihhdHRhY2spLCAxKTtcbiAgICAvKmNvbnN0IGF0dGVtcHRlZEF0dGFjayA9IHtcbiAgICAgIHg6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSArIDEsXG4gICAgICB5OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxLFxuICAgIH07XG5cbiAgICBjb25zdCBtYXRjaGVkQXR0YWNrID0gcHJldmlvdXNBdHRhY2tzLmZpbmQoKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGNvb3JkaW5hdGUueCA9PT0gYXR0ZW1wdGVkQXR0YWNrLnggJiYgY29vcmRpbmF0ZS55ID09PSBhdHRlbXB0ZWRBdHRhY2sueVxuICAgICAgKTtcbiAgICB9KTtcbiAgICBpZiAobWF0Y2hlZEF0dGFjayAhPT0gdW5kZWZpbmVkKSByZXR1cm4gZ2V0Q29tcHV0ZXJBdHRhY2soKTsqL1xuXG4gICAgcmV0dXJuIGF0dGFjaztcbiAgfTtcblxuICBjb25zdCBnZXRDb21wdXRlclBsYWNlbWVudCA9ICgpID0+IHtcbiAgICBjb25zdCBwbGFjZW1lbnQgPSB7XG4gICAgICB4OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxLFxuICAgICAgeTogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICsgMSxcbiAgICB9O1xuICAgIGNvbnN0IG9yaWVudGF0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMiArIDEpID09PSAxID8gXCJ4XCIgOiBcInlcIjtcbiAgICByZXR1cm4geyBwbGFjZW1lbnQsIG9yaWVudGF0aW9uIH07XG4gIH07XG5cbiAgY29uc3QgZmlsbFBvc3NpYmxlQXR0YWNrID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMTE7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDE7IGogPCAxMTsgaisrKSB7XG4gICAgICAgIHBvc3NpYmxlQXR0YWNrcy5wdXNoKHsgeDogaSwgeTogaiB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFzQWxyZWFkeUNsaWNrZWQgPSAoY29vcmQpID0+IHtcbiAgICByZXR1cm4gcHJldmlvdXNBdHRhY2tzLmZpbmQoXG4gICAgICAoZWwpID0+IGVsLnggPT09IGNvb3JkLnggJiYgZWwueSA9PT0gY29vcmQueVxuICAgICkgIT09IHVuZGVmaW5lZFxuICAgICAgPyB0cnVlXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2FtZWJvYXJkLFxuICAgIGdldE5hbWUsXG4gICAgbWFrZUF0dGFjayxcbiAgICBzZXRJc05leHQsXG4gICAgZmlsbFBvc3NpYmxlQXR0YWNrLFxuICAgIGhhc0FscmVhZHlDbGlja2VkLFxuICAgIGdldENvbXB1dGVyUGxhY2VtZW50LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9