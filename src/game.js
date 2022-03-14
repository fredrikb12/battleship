import Player from "./player";
import UI from "./ui";
import "./styles.css";

const game = (() => {
  const player = Player("You");
  player.gameboard.placeShip({ x: 1, y: 1 }, { x: 5, y: 1 });
  player.gameboard.placeShip({ x: 6, y: 5 }, { x: 8, y: 5 });
  player.gameboard.placeShip({ x: 2, y: 3 }, { x: 2, y: 5 });
  player.gameboard.placeShip({ x: 10, y: 8 }, { x: 10, y: 10 });
  player.gameboard.placeShip({ x: 4, y: 3 }, { x: 4, y: 6 });

  const comp = Player("Computer");
  comp.gameboard.placeShip({ x: 8, y: 1 }, { x: 4, y: 1 });
  comp.gameboard.placeShip({ x: 10, y: 5 }, { x: 8, y: 5 });
  comp.gameboard.placeShip({ x: 2, y: 8 }, { x: 2, y: 5 });
  comp.gameboard.placeShip({ x: 10, y: 8 }, { x: 10, y: 6 });
  comp.gameboard.placeShip({ x: 4, y: 3 }, { x: 4, y: 6 });

  UI.createWrapper();
  UI.createHeader();

  document
    .getElementById("main-wrapper")
    .appendChild(UI.createBoard(player, comp, true, false));
  document
    .getElementById("main-wrapper")
    .appendChild(UI.createBoard(comp, player, false, false));

  document.getElementById("computer-board").addEventListener("click", (e) => {
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
    UI.renderHitStatus(playerHitStatus, e.target);
    player.setIsNext(false);

    let [winner, loser] = isGameOver(player, comp);
    if (winner && loser) {
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
