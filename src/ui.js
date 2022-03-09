const UI = (() => {
  const createBoard = (player, isPlayerBoard) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    if (!isPlayerBoard) wrapper.setAttribute("id", "computer-board");
    const h1 = document.createElement("h1");
    h1.textContent = player.getName();
    const grid = document.createElement("div");
    //grid.addEventListener("click", handleClick);
    grid.classList.add("grid");
    for (let i = 1; i < 11; i++) {
      const col = document.createElement("div");
      col.classList.add("col");
      for (let j = 1; j < 11; j++) {
        const square = document.createElement("div");
        square.dataset.x = i;
        square.dataset.y = j;
        square.classList.add("square");
        if (player && player.gameboard.coordinateHasShip({ x: i, y: j })) {
          square.classList.add("ship-square");
        }
        col.appendChild(square);
      }
      grid.appendChild(col);
    }
    wrapper.appendChild(h1);
    wrapper.appendChild(grid);
    return wrapper;
  };

  async function awaitClick() {
    const click = await createClickPromise();
    return {
      x: parseInt(click.target.dataset.x),
      y: parseInt(click.target.dataset.y),
    };
  }

  function createClickPromise() {
    return new Promise(function (resolve, reject) {
      document
        .getElementById("computer-board")
        .addEventListener("click", function (e) {
          resolve(e);
        });
    });
  }

  return {
    awaitClick,
    createBoard,
    createClickPromise,
  };
})();

export default UI;
