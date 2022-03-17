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
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const UI = (() => {
  let orientation = "x";

  const createBoard = (player, opponent, isPlayerBoard, gameIsOver) => {
    const boardWrapper = document.createElement("div");
    boardWrapper.classList.add("wrapper");
    if (!isPlayerBoard) boardWrapper.setAttribute("id", "computer-board");
    if (isPlayerBoard) boardWrapper.setAttribute("id", "player-board");
    const h1 = document.createElement("h1");
    h1.textContent = player.getName();
    const grid = document.createElement("div");
    grid.classList.add("grid");
    for (let i = 1; i < 11; i++) {
      const col = document.createElement("div");
      col.classList.add("col");
      for (let j = 1; j < 11; j++) {
        const square = document.createElement("div");
        square.dataset.x = i;
        square.dataset.y = j;
        square.classList.add("square");
        if (
          player /*.getName() !== "Computer"*/ &&
          !gameIsOver &&
          player.gameboard.coordinateHasShip({ x: i, y: j })
        ) {
          square.classList.add("ship-square");
        } else if (gameIsOver) {
          if (
            player.gameboard.coordinateHasShip({ x: i, y: j }) &&
            opponent.hasAlreadyClicked({ x: i, y: j })
          ) {
            square.classList.add("hit");
          } else if (opponent.hasAlreadyClicked({ x: i, y: j })) {
            square.classList.add("miss");
          } else if (player.gameboard.coordinateHasShip({ x: i, y: j })) {
            square.classList.add("ship-square");
          }
        }

        col.appendChild(square);
      }
      grid.appendChild(col);
    }
    boardWrapper.appendChild(h1);
    boardWrapper.appendChild(grid);
    return boardWrapper;
  };

  const renderHitStatus = (hitStatus, el) => {
    if (hitStatus.hit) el.classList.add("hit");
    else el.classList.add("miss");
  };

  const getElementByCoord = ({ x, y }) => {
    let foundChild;
    const grid = document.querySelector("#player-board");
    const squares = grid.querySelectorAll(".square");
    squares.forEach((square) => {
      if (
        parseInt(square.dataset.x) === x &&
        parseInt(square.dataset.y) === y
      ) {
        foundChild = square;
      }
    });
    return foundChild;
  };

  const addWinHeader = (winner) => {
    /*const header = document.createElement("h1");
    header.textContent = winner.getName();
    header.classList.add("winner");
    document.getElementById("header").after(header);*/
    const header = document.getElementById("header");
    header.textContent = `${winner.getName()} won!`;
  };

  const createWrapper = () => {
    const wrapper = document.createElement("div");
    wrapper.setAttribute("id", "main-wrapper");
    document.body.appendChild(wrapper);
  };

  const createHeader = () => {
    const header = document.createElement("h1");
    header.setAttribute("id", "header");
    header.textContent = "Battleship";
    document.body.prepend(header);
  };

  const getOrientation = () => {
    return orientation;
  };

  const switchOrientation = () => {
    orientation = orientation === "x" ? "y" : "x";
  };

  const createOrientationButton = () => {
    const button = document.createElement("button");
    button.textContent = `Switch orientation: ${getOrientation()}`;
    button.setAttribute("id", "orientation-button");
    button.addEventListener("click", (e) => {
      switchOrientation();
      button.textContent = `Switch orientation: ${getOrientation()}`;
    });
    return button;
  };

  const addSelection = (coords, isShip) => {
    const elements = coords.map((coord) => {
      return document.querySelector(
        `[data-x="${coord.x.toString()}"][data-y="${coord.y.toString()}"]`
      );
    });
    elements.forEach((element) => {
      if (!isShip) element.classList.add("selected");
      else element.classList.add("ship-square");
    });
  };

  const removeSelections = () => {
    document.querySelectorAll(".selected").forEach((element) => {
      element.classList.remove("selected");
    });
  };

  const createPrompt = (text) => {
    const prompt = document.createElement("p");
    prompt.setAttribute("id", "prompt");
    prompt.textContent = "Place your ships to continue...";
    if (text) prompt.textContent = text;
    document.body.prepend(prompt);
  };

  const setPromptText = (text) => {
    document.getElementById("prompt").textContent = text;
  };
  return {
    createBoard,
    renderHitStatus,
    getElementByCoord,
    addWinHeader,
    createWrapper,
    createHeader,
    getOrientation,
    switchOrientation,
    createOrientationButton,
    addSelection,
    removeSelections,
    createPrompt,
    setPromptText,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0Esc0JBQXNCLFFBQVE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsWUFBWTtBQUMzRDtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsaURBQWlELFlBQVk7QUFDN0QseUNBQXlDLFlBQVk7QUFDckQ7QUFDQTtBQUNBLFlBQVksc0NBQXNDLFlBQVk7QUFDOUQ7QUFDQSxZQUFZLDhDQUE4QyxZQUFZO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtCQUErQixNQUFNO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQSw0QkFBNEIsa0JBQWtCO0FBQzlDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdEQUFnRCxpQkFBaUI7QUFDakU7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGlCQUFpQjtBQUNuRSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbUJBQW1CLGFBQWEsbUJBQW1CO0FBQ3ZFO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxFQUFFLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy91aS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnN0IFVJID0gKCgpID0+IHtcbiAgbGV0IG9yaWVudGF0aW9uID0gXCJ4XCI7XG5cbiAgY29uc3QgY3JlYXRlQm9hcmQgPSAocGxheWVyLCBvcHBvbmVudCwgaXNQbGF5ZXJCb2FyZCwgZ2FtZUlzT3ZlcikgPT4ge1xuICAgIGNvbnN0IGJvYXJkV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYm9hcmRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJ3cmFwcGVyXCIpO1xuICAgIGlmICghaXNQbGF5ZXJCb2FyZCkgYm9hcmRXcmFwcGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29tcHV0ZXItYm9hcmRcIik7XG4gICAgaWYgKGlzUGxheWVyQm9hcmQpIGJvYXJkV3JhcHBlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInBsYXllci1ib2FyZFwiKTtcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoMS50ZXh0Q29udGVudCA9IHBsYXllci5nZXROYW1lKCk7XG4gICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwiZ3JpZFwiKTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDExOyBpKyspIHtcbiAgICAgIGNvbnN0IGNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb2wuY2xhc3NMaXN0LmFkZChcImNvbFwiKTtcbiAgICAgIGZvciAobGV0IGogPSAxOyBqIDwgMTE7IGorKykge1xuICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzcXVhcmUuZGF0YXNldC54ID0gaTtcbiAgICAgICAgc3F1YXJlLmRhdGFzZXQueSA9IGo7XG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic3F1YXJlXCIpO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcGxheWVyIC8qLmdldE5hbWUoKSAhPT0gXCJDb21wdXRlclwiKi8gJiZcbiAgICAgICAgICAhZ2FtZUlzT3ZlciAmJlxuICAgICAgICAgIHBsYXllci5nYW1lYm9hcmQuY29vcmRpbmF0ZUhhc1NoaXAoeyB4OiBpLCB5OiBqIH0pXG4gICAgICAgICkge1xuICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic2hpcC1zcXVhcmVcIik7XG4gICAgICAgIH0gZWxzZSBpZiAoZ2FtZUlzT3Zlcikge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHBsYXllci5nYW1lYm9hcmQuY29vcmRpbmF0ZUhhc1NoaXAoeyB4OiBpLCB5OiBqIH0pICYmXG4gICAgICAgICAgICBvcHBvbmVudC5oYXNBbHJlYWR5Q2xpY2tlZCh7IHg6IGksIHk6IGogfSlcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICAgICAgICAgIH0gZWxzZSBpZiAob3Bwb25lbnQuaGFzQWxyZWFkeUNsaWNrZWQoeyB4OiBpLCB5OiBqIH0pKSB7XG4gICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcIm1pc3NcIik7XG4gICAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXIuZ2FtZWJvYXJkLmNvb3JkaW5hdGVIYXNTaGlwKHsgeDogaSwgeTogaiB9KSkge1xuICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJzaGlwLXNxdWFyZVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb2wuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICAgIH1cbiAgICAgIGdyaWQuYXBwZW5kQ2hpbGQoY29sKTtcbiAgICB9XG4gICAgYm9hcmRXcmFwcGVyLmFwcGVuZENoaWxkKGgxKTtcbiAgICBib2FyZFdyYXBwZXIuYXBwZW5kQ2hpbGQoZ3JpZCk7XG4gICAgcmV0dXJuIGJvYXJkV3JhcHBlcjtcbiAgfTtcblxuICBjb25zdCByZW5kZXJIaXRTdGF0dXMgPSAoaGl0U3RhdHVzLCBlbCkgPT4ge1xuICAgIGlmIChoaXRTdGF0dXMuaGl0KSBlbC5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICAgIGVsc2UgZWwuY2xhc3NMaXN0LmFkZChcIm1pc3NcIik7XG4gIH07XG5cbiAgY29uc3QgZ2V0RWxlbWVudEJ5Q29vcmQgPSAoeyB4LCB5IH0pID0+IHtcbiAgICBsZXQgZm91bmRDaGlsZDtcbiAgICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXItYm9hcmRcIik7XG4gICAgY29uc3Qgc3F1YXJlcyA9IGdyaWQucXVlcnlTZWxlY3RvckFsbChcIi5zcXVhcmVcIik7XG4gICAgc3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgcGFyc2VJbnQoc3F1YXJlLmRhdGFzZXQueCkgPT09IHggJiZcbiAgICAgICAgcGFyc2VJbnQoc3F1YXJlLmRhdGFzZXQueSkgPT09IHlcbiAgICAgICkge1xuICAgICAgICBmb3VuZENoaWxkID0gc3F1YXJlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmb3VuZENoaWxkO1xuICB9O1xuXG4gIGNvbnN0IGFkZFdpbkhlYWRlciA9ICh3aW5uZXIpID0+IHtcbiAgICAvKmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSB3aW5uZXIuZ2V0TmFtZSgpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwid2lubmVyXCIpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyXCIpLmFmdGVyKGhlYWRlcik7Ki9cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlclwiKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBgJHt3aW5uZXIuZ2V0TmFtZSgpfSB3b24hYDtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVXcmFwcGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHdyYXBwZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluLXdyYXBwZXJcIik7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGhlYWRlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhlYWRlclwiKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkJhdHRsZXNoaXBcIjtcbiAgICBkb2N1bWVudC5ib2R5LnByZXBlbmQoaGVhZGVyKTtcbiAgfTtcblxuICBjb25zdCBnZXRPcmllbnRhdGlvbiA9ICgpID0+IHtcbiAgICByZXR1cm4gb3JpZW50YXRpb247XG4gIH07XG5cbiAgY29uc3Qgc3dpdGNoT3JpZW50YXRpb24gPSAoKSA9PiB7XG4gICAgb3JpZW50YXRpb24gPSBvcmllbnRhdGlvbiA9PT0gXCJ4XCIgPyBcInlcIiA6IFwieFwiO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZU9yaWVudGF0aW9uQnV0dG9uID0gKCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gYFN3aXRjaCBvcmllbnRhdGlvbjogJHtnZXRPcmllbnRhdGlvbigpfWA7XG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwib3JpZW50YXRpb24tYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIHN3aXRjaE9yaWVudGF0aW9uKCk7XG4gICAgICBidXR0b24udGV4dENvbnRlbnQgPSBgU3dpdGNoIG9yaWVudGF0aW9uOiAke2dldE9yaWVudGF0aW9uKCl9YDtcbiAgICB9KTtcbiAgICByZXR1cm4gYnV0dG9uO1xuICB9O1xuXG4gIGNvbnN0IGFkZFNlbGVjdGlvbiA9IChjb29yZHMsIGlzU2hpcCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gY29vcmRzLm1hcCgoY29vcmQpID0+IHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgW2RhdGEteD1cIiR7Y29vcmQueC50b1N0cmluZygpfVwiXVtkYXRhLXk9XCIke2Nvb3JkLnkudG9TdHJpbmcoKX1cIl1gXG4gICAgICApO1xuICAgIH0pO1xuICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGlmICghaXNTaGlwKSBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgIGVsc2UgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwic2hpcC1zcXVhcmVcIik7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlU2VsZWN0aW9ucyA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlbGVjdGVkXCIpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVByb21wdCA9ICh0ZXh0KSA9PiB7XG4gICAgY29uc3QgcHJvbXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcHJvbXB0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvbXB0XCIpO1xuICAgIHByb21wdC50ZXh0Q29udGVudCA9IFwiUGxhY2UgeW91ciBzaGlwcyB0byBjb250aW51ZS4uLlwiO1xuICAgIGlmICh0ZXh0KSBwcm9tcHQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIGRvY3VtZW50LmJvZHkucHJlcGVuZChwcm9tcHQpO1xuICB9O1xuXG4gIGNvbnN0IHNldFByb21wdFRleHQgPSAodGV4dCkgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvbXB0XCIpLnRleHRDb250ZW50ID0gdGV4dDtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVCb2FyZCxcbiAgICByZW5kZXJIaXRTdGF0dXMsXG4gICAgZ2V0RWxlbWVudEJ5Q29vcmQsXG4gICAgYWRkV2luSGVhZGVyLFxuICAgIGNyZWF0ZVdyYXBwZXIsXG4gICAgY3JlYXRlSGVhZGVyLFxuICAgIGdldE9yaWVudGF0aW9uLFxuICAgIHN3aXRjaE9yaWVudGF0aW9uLFxuICAgIGNyZWF0ZU9yaWVudGF0aW9uQnV0dG9uLFxuICAgIGFkZFNlbGVjdGlvbixcbiAgICByZW1vdmVTZWxlY3Rpb25zLFxuICAgIGNyZWF0ZVByb21wdCxcbiAgICBzZXRQcm9tcHRUZXh0LFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgVUk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=