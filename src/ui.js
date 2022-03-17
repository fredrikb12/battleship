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

export default UI;
