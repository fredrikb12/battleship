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
          player/*.getName() !== "Computer"*/ &&
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
    console.log(hitStatus);
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
    header.textContent += `: ${winner.getName()} won!`;
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

  return {
    createBoard,
    renderHitStatus,
    getElementByCoord,
    addWinHeader,
    createWrapper,
    createHeader,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0Esc0JBQXNCLFFBQVE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsWUFBWTtBQUMzRDtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsaURBQWlELFlBQVk7QUFDN0QseUNBQXlDLFlBQVk7QUFDckQ7QUFDQTtBQUNBLFlBQVksc0NBQXNDLFlBQVk7QUFDOUQ7QUFDQSxZQUFZLDhDQUE4QyxZQUFZO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0JBQStCLE1BQU07QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBLCtCQUErQixrQkFBa0I7QUFDakQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsRUFBRSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdWkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCBVSSA9ICgoKSA9PiB7XG4gIGNvbnN0IGNyZWF0ZUJvYXJkID0gKHBsYXllciwgb3Bwb25lbnQsIGlzUGxheWVyQm9hcmQsIGdhbWVJc092ZXIpID0+IHtcbiAgICBjb25zdCBib2FyZFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJvYXJkV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwid3JhcHBlclwiKTtcbiAgICBpZiAoIWlzUGxheWVyQm9hcmQpIGJvYXJkV3JhcHBlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbXB1dGVyLWJvYXJkXCIpO1xuICAgIGlmIChpc1BsYXllckJvYXJkKSBib2FyZFdyYXBwZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwbGF5ZXItYm9hcmRcIik7XG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaDEudGV4dENvbnRlbnQgPSBwbGF5ZXIuZ2V0TmFtZSgpO1xuICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcImdyaWRcIik7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMTsgaSsrKSB7XG4gICAgICBjb25zdCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29sLmNsYXNzTGlzdC5hZGQoXCJjb2xcIik7XG4gICAgICBmb3IgKGxldCBqID0gMTsgaiA8IDExOyBqKyspIHtcbiAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc3F1YXJlLmRhdGFzZXQueCA9IGk7XG4gICAgICAgIHNxdWFyZS5kYXRhc2V0LnkgPSBqO1xuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcInNxdWFyZVwiKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHBsYXllci8qLmdldE5hbWUoKSAhPT0gXCJDb21wdXRlclwiKi8gJiZcbiAgICAgICAgICAhZ2FtZUlzT3ZlciAmJlxuICAgICAgICAgIHBsYXllci5nYW1lYm9hcmQuY29vcmRpbmF0ZUhhc1NoaXAoeyB4OiBpLCB5OiBqIH0pXG4gICAgICAgICkge1xuICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic2hpcC1zcXVhcmVcIik7XG4gICAgICAgIH0gZWxzZSBpZiAoZ2FtZUlzT3Zlcikge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHBsYXllci5nYW1lYm9hcmQuY29vcmRpbmF0ZUhhc1NoaXAoeyB4OiBpLCB5OiBqIH0pICYmXG4gICAgICAgICAgICBvcHBvbmVudC5oYXNBbHJlYWR5Q2xpY2tlZCh7IHg6IGksIHk6IGogfSlcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICAgICAgICAgIH0gZWxzZSBpZiAob3Bwb25lbnQuaGFzQWxyZWFkeUNsaWNrZWQoeyB4OiBpLCB5OiBqIH0pKSB7XG4gICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcIm1pc3NcIik7XG4gICAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXIuZ2FtZWJvYXJkLmNvb3JkaW5hdGVIYXNTaGlwKHsgeDogaSwgeTogaiB9KSkge1xuICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJzaGlwLXNxdWFyZVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb2wuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICAgIH1cbiAgICAgIGdyaWQuYXBwZW5kQ2hpbGQoY29sKTtcbiAgICB9XG4gICAgYm9hcmRXcmFwcGVyLmFwcGVuZENoaWxkKGgxKTtcbiAgICBib2FyZFdyYXBwZXIuYXBwZW5kQ2hpbGQoZ3JpZCk7XG4gICAgcmV0dXJuIGJvYXJkV3JhcHBlcjtcbiAgfTtcblxuICBjb25zdCByZW5kZXJIaXRTdGF0dXMgPSAoaGl0U3RhdHVzLCBlbCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGhpdFN0YXR1cyk7XG4gICAgaWYgKGhpdFN0YXR1cy5oaXQpIGVsLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgZWxzZSBlbC5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcbiAgfTtcblxuICBjb25zdCBnZXRFbGVtZW50QnlDb29yZCA9ICh7IHgsIHkgfSkgPT4ge1xuICAgIGxldCBmb3VuZENoaWxkO1xuICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYXllci1ib2FyZFwiKTtcbiAgICBjb25zdCBzcXVhcmVzID0gZ3JpZC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNxdWFyZVwiKTtcbiAgICBzcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBwYXJzZUludChzcXVhcmUuZGF0YXNldC54KSA9PT0geCAmJlxuICAgICAgICBwYXJzZUludChzcXVhcmUuZGF0YXNldC55KSA9PT0geVxuICAgICAgKSB7XG4gICAgICAgIGZvdW5kQ2hpbGQgPSBzcXVhcmU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZvdW5kQ2hpbGQ7XG4gIH07XG5cbiAgY29uc3QgYWRkV2luSGVhZGVyID0gKHdpbm5lcikgPT4ge1xuICAgIC8qY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IHdpbm5lci5nZXROYW1lKCk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJ3aW5uZXJcIik7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJcIikuYWZ0ZXIoaGVhZGVyKTsqL1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyXCIpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCArPSBgOiAke3dpbm5lci5nZXROYW1lKCl9IHdvbiFgO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVdyYXBwZXIgPSAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd3JhcHBlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW4td3JhcHBlclwiKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaGVhZGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGVhZGVyXCIpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiQmF0dGxlc2hpcFwiO1xuICAgIGRvY3VtZW50LmJvZHkucHJlcGVuZChoZWFkZXIpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlQm9hcmQsXG4gICAgcmVuZGVySGl0U3RhdHVzLFxuICAgIGdldEVsZW1lbnRCeUNvb3JkLFxuICAgIGFkZFdpbkhlYWRlcixcbiAgICBjcmVhdGVXcmFwcGVyLFxuICAgIGNyZWF0ZUhlYWRlcixcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFVJO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9