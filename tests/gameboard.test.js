import Gameboard from "../src/gameboard";

test("gameboard has placeShip method", () => {
  const gameboard = Gameboard();
  expect(typeof gameboard.placeShip).toBe("function");
});

test("gameboard creates ship correctly", () => {
  const gameboard = Gameboard();
  gameboard.placeShip({ x: 1, y: 2 }, { x: 1, y: 4 });
  expect(gameboard.getShipCount()).toBe(1);
});

test("receives attack", () => {
  const gameboard = Gameboard();
  gameboard.placeShip({ x: 1, y: 3 }, { x: 1, y: 4 });
  gameboard.receiveAttack({ x: 1, y: 3 });
  expect(gameboard.getMissedHitCount()).toBe(0);
});

test("attacks miss correctly", () => {
  const gameboard = Gameboard();
  gameboard.placeShip({ x: 1, y: 7 }, { x: 2, y: 7 });
  gameboard.placeShip({ x: 1, y: 2 }, { x: 2, y: 2 });
  gameboard.placeShip({ x: 3, y: 2 }, { x: 4, y: 2 });
  gameboard.receiveAttack({ x: 5, y: 7 });
  expect(gameboard.getMissedHitCount()).toBe(1);
});

test("places multiple ships", () => {
  const gameboard = Gameboard();
  gameboard.placeShip({ x: 1, y: 7 }, { x: 2, y: 7 });
  gameboard.placeShip({ x: 1, y: 2 }, { x: 2, y: 2 });
  gameboard.placeShip({ x: 3, y: 2 }, { x: 4, y: 2 });
  expect(gameboard.getShipCount()).toBe(3);
});

test("sinks ships", () => {
  const gameboard = Gameboard();
  gameboard.placeShip({ x: 1, y: 7 }, { x: 2, y: 7 });
  gameboard.receiveAttack({ x: 1, y: 7 });
  gameboard.receiveAttack({ x: 2, y: 7 });
  expect(gameboard.areShipsSunk()).toBe(true);
});

test("throws error if coordinate too high", () => {
  expect(() => {
    const gameboard = Gameboard();
    gameboard.placeShip({ x: 1, y: 11 }, { x: 2, y: 11 });
  }).toThrow("Invalid coordinate range");
});

test("throws error if coordinate too low", () => {
  expect(() => {
    const gameboard = Gameboard();
    gameboard.placeShip({ x: 1, y: -10 }, { x: 2, y: -10 });
  }).toThrow("Invalid coordinate range");
});

test("throws error if ship is diagonal", () => {
  expect(() => {
    const gameboard = Gameboard();
    gameboard.placeShip({ x: 1, y: 1 }, { x: 2, y: 2 });
  }).toThrow("Invalid coordinates");
});
