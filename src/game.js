import Player from "./player";
import UI from "./ui";
import "./styles.css";

const game = (() => {
  const player = Player("You");
  /*player.gameboard.placeShip({ x: 1, y: 1 }, { x: 5, y: 1 });
  player.gameboard.placeShip({ x: 6, y: 5 }, { x: 8, y: 5 });
  player.gameboard.placeShip({ x: 2, y: 3 }, { x: 2, y: 5 });
  player.gameboard.placeShip({ x: 10, y: 8 }, { x: 10, y: 10 });
  player.gameboard.placeShip({ x: 4, y: 3 }, { x: 4, y: 6 });*/

  const comp = Player("Computer");
  /*comp.gameboard.placeShip({ x: 8, y: 1 }, { x: 4, y: 1 });
  comp.gameboard.placeShip({ x: 10, y: 5 }, { x: 8, y: 5 });
  comp.gameboard.placeShip({ x: 2, y: 8 }, { x: 2, y: 5 });
  comp.gameboard.placeShip({ x: 10, y: 8 }, { x: 10, y: 6 });
  comp.gameboard.placeShip({ x: 4, y: 3 }, { x: 4, y: 6 });*/

  comp.fillPossibleAttack();

  UI.createWrapper();
  UI.createPrompt();
  UI.createHeader();

  document
    .getElementById("main-wrapper")
    .appendChild(UI.createBoard(player, comp, true, false));
  document
    .getElementById("main-wrapper")
    .appendChild(UI.createBoard(comp, player, false, false));

  const playerDOMBoard = document.getElementById("player-board");
  playerDOMBoard.appendChild(UI.createOrientationButton());

  playerDOMBoard.addEventListener("mouseover", (e) => {
    if (player.gameboard.getShipCount() >= 5) return;
    if (!e.target.classList.contains("square")) return;
    UI.removeSelections();
    UI.addSelection(
      player.gameboard.getSuggestedPlacement(
        { x: parseInt(e.target.dataset.x), y: parseInt(e.target.dataset.y) },
        player.gameboard.getShipToPlace(),
        UI.getOrientation()
      )
    );
  });

  playerDOMBoard.addEventListener("mouseout", (e) => {
    if (player.gameboard.getShipCount() >= 5) return;
    if (e.target.classList.contains("square")) return;
    UI.removeSelections();
  });

  playerDOMBoard.addEventListener("mousedown", (e) => {
    if (player.gameboard.getShipCount() >= 5) return;
    if (!e.target.classList.contains("square")) return;
    const placement = player.gameboard.getSuggestedPlacement(
      { x: parseInt(e.target.dataset.x), y: parseInt(e.target.dataset.y) },
      player.gameboard.getShipToPlace(),
      UI.getOrientation()
    );
    const wasPlaced = player.gameboard.placeShip(
      placement[0],
      placement[placement.length - 1]
    );
    UI.addSelection(placement, wasPlaced);
    if (wasPlaced) {
      let compPlaced = false;
      do {
        const returned = comp.getComputerPlacement();
        const coords = comp.gameboard.getSuggestedPlacement(
          returned.placement,
          comp.gameboard.getShipToPlace(),
          returned.orientation
        );
        compPlaced = comp.gameboard.placeShip(
          coords[0],
          coords[coords.length - 1]
        );
      } while (!compPlaced);
    }
    UI.removeSelections();
    if (player.gameboard.getShipCount() >= 5) {
      document.getElementById("orientation-button").remove();
      UI.setPromptText("Fire at your opponent's board to continue!");
      document
        .getElementById("computer-board")
        .addEventListener("click", (e) => {
          if (!e.target.classList.contains("square")) return;

          const clickedCoord = {
            x: parseInt(e.target.dataset.x),
            y: parseInt(e.target.dataset.y),
          };
          if (player.hasAlreadyClicked(clickedCoord)) return;
          player.setIsNext(true);

          const playerHitStatus = player.makeAttack(comp.gameboard, {
            x: parseInt(e.target.dataset.x),
            y: parseInt(e.target.dataset.y),
          });
          UI.setPromptText(
            playerHitStatus.hit === true
              ? "You hit! Fire again to continue..."
              : "You missed! Fire again to continue..."
          );
          UI.renderHitStatus(playerHitStatus, e.target);
          player.setIsNext(false);

          let [winner, loser] = isGameOver(player, comp);
          if (winner && loser) {
            UI.setPromptText("You hit and destroyed the opponent's last ship!");
            gameOver(winner, loser);
          } else {
            comp.setIsNext(true);
            const compHitStatus = comp.makeAttack(player.gameboard);
            const compHitTarget = UI.getElementByCoord(compHitStatus.coord);
            UI.renderHitStatus(compHitStatus, compHitTarget);
            comp.setIsNext(false);
            [winner, loser] = isGameOver(player, comp);
            if (winner && loser) gameOver(winner, loser);
          }
        });
    }
  });
})();

function isGameOver(player1, player2) {
  if (player1.gameboard.areShipsSunk()) return [player2, player1];
  if (player2.gameboard.areShipsSunk()) return [player1, player2];
  return [false, false];
}

function gameOver(winner, loser) {
  const mainWrapper = document.getElementById("main-wrapper");
  const boards = document.querySelectorAll(".wrapper");
  boards.forEach((board) => board.remove());
  const winnerBoard = UI.createBoard(
    winner,
    loser,
    winner.getName() !== "Computer",
    true
  );

  const loserBoard = UI.createBoard(
    loser,
    winner,
    loser.getName() !== "Computer",
    true
  );

  if (winner.getName() === "Computer") {
    mainWrapper.appendChild(loserBoard);
    mainWrapper.appendChild(winnerBoard);
  } else {
    mainWrapper.appendChild(winnerBoard);
    mainWrapper.appendChild(loserBoard);
  }
  UI.addWinHeader(winner);
}
