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

  document.body.appendChild(UI.createBoard(player, true));
  document.body.appendChild(UI.createBoard(comp, false));

  const promise = UI.awaitClick();
  promise.then((coord) => {
    console.log(coord);
    comp.gameboard.receiveAttack(coord);
  });
  const promise2 = UI.awaitClick();
  promise2.then((coord) => {
    console.log(coord);
    comp.gameboard.receiveAttack(coord);
  });
})();
