import Player from "../src/player";
import Gameboard from "../src/gameboard";

test("returns correct name", () => {
  const player1 = Player("computer");
  const player2 = Player("player");
  expect(player1.getName()).toBe("computer");
  expect(player2.getName()).toBe("player");
});

test("has gameboard object", () => {
  const player1 = Player("player1");
  expect(typeof player1.gameboard).toBe("object");
});

test("name defaults to Player 1", () => {
  const player2 = Player(2);
  expect(player2.getName()).toBe("Player 1");
});

test("throws error if attacking himself", () => {
  const player = Player("player");
  player.setIsNext(true);
  expect(() => {
    player.makeAttack(player.gameboard, { x: 1, y: 2 });
  }).toThrow("Can't attack own gameboard!");
});

test("player can make attack", () => {
  const player = Player("player");
  player.setIsNext(true);
  const enemyBoard = Gameboard();
  enemyBoard.placeShip({ x: 1, y: 1 }, { x: 3, y: 1 });
  player.makeAttack(enemyBoard, { x: 2, y: 1 });
  expect(enemyBoard.getMissedHits().length).toBe(0);
});

test("makes attack without coordinate input if computer", () => {
  const player = Player("computer");
  player.setIsNext(true);
  const enemyBoard = Gameboard();
  player.makeAttack(enemyBoard);
  expect(enemyBoard.getMissedHits().length).toBe(1);
});

test("makes different random attacks", () => {
  const player = Player("computer");
  player.setIsNext(true);
  const enemyBoard = Gameboard();
  player.makeAttack(enemyBoard);
  player.setIsNext(true);
  player.makeAttack(enemyBoard);
  expect(enemyBoard.getMissedHits().length).toBe(2);
  expect(enemyBoard.getMissedHits()[0]).not.toStrictEqual(
    enemyBoard.getMissedHits()[1]
  );
});

test("player needs to be set as next attacker", () => {
  const player = Player("player");
  const board = Gameboard();
  expect(() => {
    player.makeAttack(board, { x: 1, y: 2 });
  }).toThrow(`${player.getName()} is not next!`);
});
