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
    const foundShips = coords.map((coord) => coordinateHasShip(coord));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUIsc0JBQXNCLFFBQVE7QUFDOUIsK0JBQStCLFlBQVk7QUFDM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuXG5jb25zdCBHYW1lYm9hcmQgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHN0YXJ0ZXJTaGlwcyA9IFs1LCA0LCAzLCAzLCAyXTtcbiAgY29uc3Qgc2hpcHMgPSBbXTtcbiAgY29uc3QgbWlzc2VkSGl0cyA9IFtdO1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChzdGFydENvb3JkLCBlbmRDb29yZCkgPT4ge1xuICAgIGlmIChzdGFydENvb3JkLnggIT09IGVuZENvb3JkLnggJiYgc3RhcnRDb29yZC55ICE9PSBlbmRDb29yZC55KVxuICAgICAgdGhyb3cgRXJyb3IoXCJJbnZhbGlkIGNvb3JkaW5hdGVzLCBzaGlwIGlzIGRpYWdvbmFsbHkgcGxhY2VkXCIpO1xuXG4gICAgY29uc3QgY2hlY2tlZENvb3JkcyA9IFtzdGFydENvb3JkLCBlbmRDb29yZF0uZmlsdGVyKChjb29yZCkgPT4ge1xuICAgICAgcmV0dXJuIGNvb3JkLnggPCAxIHx8IGNvb3JkLnkgPCAxIHx8IGNvb3JkLnggPiAxMCB8fCBjb29yZC55ID4gMTA7XG4gICAgfSk7XG4gICAgaWYgKGNoZWNrZWRDb29yZHMubGVuZ3RoID4gMCkgdGhyb3cgRXJyb3IoXCJJbnZhbGlkIGNvb3JkaW5hdGUgcmFuZ2VcIik7XG4gICAgaWYgKGdldFNoaXBCeUNvb3JkaW5hdGVzKHNoaXBzLCBzdGFydENvb3JkLCBlbmRDb29yZCkpIHJldHVybjtcblxuICAgIGlmIChzdGFydENvb3JkLnggPiBlbmRDb29yZC54IHx8IHN0YXJ0Q29vcmQueSA+IGVuZENvb3JkLnkpIHtcbiAgICAgIGNvbnN0IHNoaXAgPSBTaGlwKGdldExlbmd0aChlbmRDb29yZCwgc3RhcnRDb29yZCkpO1xuICAgICAgc2hpcHMucHVzaCh7IHNoaXA6IHNoaXAsIHN0YXJ0OiBlbmRDb29yZCwgZW5kOiBzdGFydENvb3JkIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzaGlwID0gU2hpcChnZXRMZW5ndGgoc3RhcnRDb29yZCwgZW5kQ29vcmQpKTtcbiAgICAgIHNoaXBzLnB1c2goeyBzaGlwOiBzaGlwLCBzdGFydDogc3RhcnRDb29yZCwgZW5kOiBlbmRDb29yZCB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChjb29yZCkgPT4ge1xuICAgIGNvbnN0IGhpdFNoaXAgPSBnZXRTaGlwQnlDb29yZGluYXRlcyhzaGlwcywgY29vcmQpO1xuICAgIGlmICghaGl0U2hpcCkge1xuICAgICAgbWlzc2VkSGl0cy5wdXNoKGNvb3JkKTtcbiAgICAgIHJldHVybiB7IGhpdDogZmFsc2UsIGNvb3JkOiBjb29yZCB9O1xuICAgIH1cbiAgICBoaXRTaGlwLnNoaXAuaGl0KGdldEhpdFBvc2l0aW9uKGhpdFNoaXAuc3RhcnQsIGhpdFNoaXAuZW5kLCBjb29yZCkpO1xuICAgIHJldHVybiB7IGhpdDogdHJ1ZSwgY29vcmQ6IGNvb3JkIH07XG4gIH07XG5cbiAgY29uc3QgZ2V0U2hpcENvdW50ID0gKCkgPT4ge1xuICAgIHJldHVybiBzaGlwcy5sZW5ndGg7XG4gIH07XG5cbiAgY29uc3QgZ2V0TWlzc2VkSGl0cyA9ICgpID0+IHtcbiAgICByZXR1cm4gWy4uLm1pc3NlZEhpdHNdO1xuICB9O1xuXG4gIGNvbnN0IGFyZVNoaXBzU3VuayA9ICgpID0+IHtcbiAgICBjb25zdCBzdW5rU2hpcHMgPSBzaGlwcy5maWx0ZXIoKHNoaXApID0+IHtcbiAgICAgIHJldHVybiBzaGlwLnNoaXAuaXNTdW5rKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHN1bmtTaGlwcy5sZW5ndGggPT09IHNoaXBzLmxlbmd0aCA/IHRydWUgOiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBjb29yZGluYXRlSGFzU2hpcCA9IChjb29yZCkgPT4ge1xuICAgIGNvbnN0IHNoaXAgPSBnZXRTaGlwQnlDb29yZGluYXRlcyhzaGlwcywgY29vcmQpO1xuICAgIGlmIChzaGlwID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3QgZ2V0U3VnZ2VzdGVkUGxhY2VtZW50ID0gKGNvb3JkLCBsZW5ndGgsIG9yaWVudGF0aW9uKSA9PiB7XG4gICAgY29uc3QgY29vcmRzID0gW107XG4gICAgY29uc3QgYWRqdXN0ZWRDb29yZHMgPSBbXTtcbiAgICBjb25zdCByZXR1cm5Db29yZHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAob3JpZW50YXRpb24gPT09IFwieFwiKSBjb29yZHMucHVzaCh7IHg6IGNvb3JkLnggKyBpLCB5OiBjb29yZC55IH0pO1xuICAgICAgaWYgKG9yaWVudGF0aW9uID09PSBcInlcIikgY29vcmRzLnB1c2goeyB4OiBjb29yZC54LCB5OiBjb29yZC55ICsgaSB9KTtcbiAgICB9XG4gICAgc3dpdGNoIChjb29yZFtvcmllbnRhdGlvbl0gKyBsZW5ndGggLSAxKSB7XG4gICAgICBjYXNlIDExOlxuICAgICAgICBjb29yZHMuZm9yRWFjaCgoY29vcmQpID0+IGFkanVzdGVkQ29vcmRzLnB1c2goY29vcmRbb3JpZW50YXRpb25dIC0gMSkpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAxMjpcbiAgICAgICAgY29vcmRzLmZvckVhY2goKGNvb3JkKSA9PiBhZGp1c3RlZENvb3Jkcy5wdXNoKGNvb3JkW29yaWVudGF0aW9uXSAtIDIpKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgMTM6XG4gICAgICAgIGNvb3Jkcy5mb3JFYWNoKChjb29yZCkgPT4gYWRqdXN0ZWRDb29yZHMucHVzaChjb29yZFtvcmllbnRhdGlvbl0gLSAzKSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDE0OlxuICAgICAgICBjb29yZHMuZm9yRWFjaCgoY29vcmQpID0+IGFkanVzdGVkQ29vcmRzLnB1c2goY29vcmRbb3JpZW50YXRpb25dIC0gNCkpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGNvb3JkcztcbiAgICB9XG4gICAgYWRqdXN0ZWRDb29yZHMuZm9yRWFjaCgoYWRqdXN0ZWQpID0+IHtcbiAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJ4XCIpIHtcbiAgICAgICAgcmV0dXJuQ29vcmRzLnB1c2goeyB4OiBhZGp1c3RlZCwgeTogY29vcmQueSB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybkNvb3Jkcy5wdXNoKHsgeDogY29vcmQueCwgeTogYWRqdXN0ZWQgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJldHVybkNvb3JkcztcbiAgfTtcblxuICBjb25zdCBnZXRTaGlwVG9QbGFjZSA9ICgpID0+IHtcbiAgICByZXR1cm4gc3RhcnRlclNoaXBzW3NoaXBzLmxlbmd0aF07XG4gIH07XG5cbiAgZnVuY3Rpb24gZ2V0U2hpcEJ5Q29vcmRpbmF0ZXMoc2hpcEFycmF5LCBzdGFydCwgZW5kKSB7XG4gICAgaWYgKCFzdGFydCkgcmV0dXJuO1xuICAgIGlmICghZW5kKSB7XG4gICAgICBjb25zdCBbZm91bmRTaGlwXSA9IHNoaXBBcnJheS5maWx0ZXIoKHNoaXApID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBzaGlwLnN0YXJ0LnggPD0gc3RhcnQueCAmJlxuICAgICAgICAgIHNoaXAuc3RhcnQueSA8PSBzdGFydC55ICYmXG4gICAgICAgICAgc2hpcC5lbmQueCA+PSBzdGFydC54ICYmXG4gICAgICAgICAgc2hpcC5lbmQueSA+PSBzdGFydC55XG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICAgIGlmICghZm91bmRTaGlwKSByZXR1cm4gbnVsbDtcbiAgICAgIHJldHVybiBmb3VuZFNoaXA7XG4gICAgfVxuICAgIGNvbnN0IGNvb3JkcyA9IGdldEFsbENvb3JkaW5hdGVzKHN0YXJ0LCBlbmQpO1xuICAgIGNvbnN0IGZvdW5kU2hpcHMgPSBjb29yZHMubWFwKChjb29yZCkgPT4gY29vcmRpbmF0ZUhhc1NoaXAoY29vcmQpKTtcblxuICAgIGlmIChcbiAgICAgIGZvdW5kU2hpcHMuZmlsdGVyKChlbCkgPT4ge1xuICAgICAgICByZXR1cm4gZWwgIT09IGZhbHNlO1xuICAgICAgfSkubGVuZ3RoID4gMFxuICAgICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBsYWNlU2hpcCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGdldFNoaXBDb3VudCxcbiAgICBnZXRNaXNzZWRIaXRzLFxuICAgIGFyZVNoaXBzU3VuayxcbiAgICBjb29yZGluYXRlSGFzU2hpcCxcbiAgICBnZXRTdWdnZXN0ZWRQbGFjZW1lbnQsXG4gICAgZ2V0U2hpcFRvUGxhY2UsXG4gIH07XG59O1xuXG5mdW5jdGlvbiBnZXRMZW5ndGgoc3RhcnQsIGVuZCkge1xuICByZXR1cm4gKFxuICAgIE1hdGguc3FydChcbiAgICAgIChzdGFydC54IC0gZW5kLngpICogKHN0YXJ0LnggLSBlbmQueCkgK1xuICAgICAgICAoc3RhcnQueSAtIGVuZC55KSAqIChzdGFydC55IC0gZW5kLnkpXG4gICAgKSArIDFcbiAgKTtcbn1cblxuZnVuY3Rpb24gZ2V0SGl0UG9zaXRpb24oc3RhcnQsIGVuZCwgaGl0Q29vcmQpIHtcbiAgaWYgKHN0YXJ0LnggIT09IGVuZC54KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gTWF0aC5hYnMoc3RhcnQueCAtIGVuZC54KTsgaSsrKSB7XG4gICAgICBpZiAoc3RhcnQueCArIGkgPT09IGhpdENvb3JkLnggJiYgc3RhcnQueSA9PT0gaGl0Q29vcmQueSkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gTWF0aC5hYnMoc3RhcnQueSAtIGVuZC55KTsgaSsrKSB7XG4gICAgICBpZiAoc3RhcnQueCA9PT0gaGl0Q29vcmQueCAmJiBzdGFydC55ICsgaSA9PT0gaGl0Q29vcmQueSkgcmV0dXJuIGk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldEFsbENvb3JkaW5hdGVzKHN0YXJ0LCBlbmQpIHtcbiAgY29uc3QgY29vcmRzID0gW107XG4gIGlmIChzdGFydC54ICE9PSBlbmQueCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IE1hdGguYWJzKGVuZC54IC0gc3RhcnQueCk7IGkrKykge1xuICAgICAgY29vcmRzLnB1c2goeyB4OiBzdGFydC54ICsgaSwgeTogc3RhcnQueSB9KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gTWF0aC5hYnMoZW5kLnkgLSBzdGFydC55KTsgaSsrKSB7XG4gICAgICBjb29yZHMucHVzaCh7IHg6IHN0YXJ0LngsIHk6IHN0YXJ0LnkgKyBpIH0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY29vcmRzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCJjb25zdCBTaGlwID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgaWYgKHR5cGVvZiBzaXplICE9PSBcIm51bWJlclwiKSB0aHJvdyBFcnJvcihcIkluY29ycmVjdCB0eXBlIGZvciBoaXQgY3JlYXRpb25cIik7XG4gIGlmIChzaXplIDwgMikgdGhyb3cgRXJyb3IoXCJTaXplIHRvbyBsb3dcIik7XG4gIGNvbnN0IGxlbmd0aCA9IHBhcnNlSW50KHNpemUpO1xuICBjb25zdCBoaXRzID0gW107XG5cbiAgY29uc3QgaGl0ID0gKHBvcykgPT4ge1xuICAgIGlmICh0eXBlb2YgcG9zICE9PSBcIm51bWJlclwiKSB0aHJvdyBFcnJvcihcIkluY29ycmVjdCB0eXBlIGZvciBoaXRcIik7XG4gICAgaWYgKGlzU3VuaygpKSByZXR1cm47XG4gICAgaWYgKGhpdHMuaW5jbHVkZXMocG9zKSkgcmV0dXJuO1xuICAgIGhpdHMucHVzaChwb3MpO1xuICB9O1xuXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICByZXR1cm4gaGl0cy5sZW5ndGggPT09IGxlbmd0aCA/IHRydWUgOiBmYWxzZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGhpdCxcbiAgICBpc1N1bmssXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xuXG5jb25zdCBQbGF5ZXIgPSBmdW5jdGlvbiAobmFtZSkge1xuICBpZiAodHlwZW9mIG5hbWUgIT09IFwic3RyaW5nXCIpIG5hbWUgPSBcIlBsYXllciAxXCI7XG5cbiAgY29uc3QgcHJldmlvdXNBdHRhY2tzID0gW107XG4gIGNvbnN0IHBvc3NpYmxlQXR0YWNrcyA9IFtdO1xuICBjb25zdCBnYW1lYm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgbGV0IGlzTmV4dCA9IGZhbHNlO1xuXG4gIGNvbnN0IGdldE5hbWUgPSAoKSA9PiBuYW1lO1xuXG4gIGNvbnN0IHNldElzTmV4dCA9IChib29sKSA9PiAoaXNOZXh0ID0gYm9vbCk7XG5cbiAgY29uc3QgbWFrZUF0dGFjayA9ICh0YXJnZXQsIGNvb3JkKSA9PiB7XG4gICAgaWYgKCFpc05leHQpIHRocm93IEVycm9yKGAke2dldE5hbWUoKX0gaXMgbm90IG5leHQhYCk7XG4gICAgaWYgKHRhcmdldCA9PT0gZ2FtZWJvYXJkKSB0aHJvdyBFcnJvcihcIkNhbid0IGF0dGFjayBvd24gZ2FtZWJvYXJkIVwiKTtcbiAgICBsZXQgd2FzSGl0O1xuXG4gICAgaWYgKG5hbWUgPT09IFwiY29tcHV0ZXJcIiB8fCBuYW1lID09PSBcIkNvbXB1dGVyXCIpIHtcbiAgICAgIGNvbnN0IGF0dGFjayA9IGdldENvbXB1dGVyQXR0YWNrKCk7XG4gICAgICB3YXNIaXQgPSB0YXJnZXQucmVjZWl2ZUF0dGFjayhhdHRhY2spO1xuICAgICAgcHJldmlvdXNBdHRhY2tzLnB1c2goYXR0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2FzSGl0ID0gdGFyZ2V0LnJlY2VpdmVBdHRhY2soY29vcmQpO1xuICAgICAgcHJldmlvdXNBdHRhY2tzLnB1c2goY29vcmQpO1xuICAgIH1cbiAgICByZXR1cm4gd2FzSGl0O1xuICB9O1xuXG4gIGNvbnN0IGdldENvbXB1dGVyQXR0YWNrID0gKCkgPT4ge1xuICAgIGNvbnN0IGF0dGFjayA9XG4gICAgICBwb3NzaWJsZUF0dGFja3NbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zc2libGVBdHRhY2tzLmxlbmd0aCldO1xuICAgIHBvc3NpYmxlQXR0YWNrcy5zcGxpY2UocG9zc2libGVBdHRhY2tzLmluZGV4T2YoYXR0YWNrKSwgMSk7XG4gICBcbiAgICByZXR1cm4gYXR0YWNrO1xuICB9O1xuXG4gIGNvbnN0IGdldENvbXB1dGVyUGxhY2VtZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHBsYWNlbWVudCA9IHtcbiAgICAgIHg6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSArIDEsXG4gICAgICB5OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxLFxuICAgIH07XG4gICAgY29uc3Qgb3JpZW50YXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyICsgMSkgPT09IDEgPyBcInhcIiA6IFwieVwiO1xuICAgIHJldHVybiB7IHBsYWNlbWVudCwgb3JpZW50YXRpb24gfTtcbiAgfTtcblxuICBjb25zdCBmaWxsUG9zc2libGVBdHRhY2sgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMTsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMTsgaiA8IDExOyBqKyspIHtcbiAgICAgICAgcG9zc2libGVBdHRhY2tzLnB1c2goeyB4OiBpLCB5OiBqIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYXNBbHJlYWR5Q2xpY2tlZCA9IChjb29yZCkgPT4ge1xuICAgIHJldHVybiBwcmV2aW91c0F0dGFja3MuZmluZChcbiAgICAgIChlbCkgPT4gZWwueCA9PT0gY29vcmQueCAmJiBlbC55ID09PSBjb29yZC55XG4gICAgKSAhPT0gdW5kZWZpbmVkXG4gICAgICA/IHRydWVcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnYW1lYm9hcmQsXG4gICAgZ2V0TmFtZSxcbiAgICBtYWtlQXR0YWNrLFxuICAgIHNldElzTmV4dCxcbiAgICBmaWxsUG9zc2libGVBdHRhY2ssXG4gICAgaGFzQWxyZWFkeUNsaWNrZWQsXG4gICAgZ2V0Q29tcHV0ZXJQbGFjZW1lbnQsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=