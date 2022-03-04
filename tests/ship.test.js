import { expect } from "@jest/globals";
import Ship from "../src/ship";

/*
 ---THESE SEEM REDUNDANT NOW---

test("returns object with hit method", () => {
  const ship1 = Ship({ x: 1, y: 2 }, { x: 2, y: 2 });
  expect(typeof ship1.hit).toBe("function");
});

test("returns object with isSunk method", () => {
  const ship1 = Ship({ x: 3, y: 5 }, { x: 3, y: 2 });
  expect(typeof ship1.isSunk).toBe("function");
});
*/

test("returns empty hit array with missed hit", () => {
  const ship1 = Ship({ x: 1, y: 2 }, { x: 2, y: 2 });
  ship1.hit({ x: 1, y: 1 });
  expect(ship1.getHits()).toStrictEqual([]);
});

test("hits ship correctly", () => {
  const ship1 = Ship({ x: 2, y: 2 }, { x: 5, y: 2 });
  ship1.hit({ x: 2, y: 2 });
  expect(ship1.getHits()).toStrictEqual([{ x: 2, y: 2 }]);
});

test("sinks ship correctly", () => {
  const ship1 = Ship({ x: 1, y: 1 }, { x: 1, y: 1 });
  ship1.hit({ x: 1, y: 1 });
  ship1.hit({ x: 1, y: 2 });
  expect(ship1.isSunk()).toBe(true);
});

test("doesn't always sink ship", () => {
  const ship1 = Ship({ x: 1, y: 1 }, { x: 1, y: 2 });
  ship1.hit({ x: 1, y: 1 });
  expect(ship1.isSunk()).toBe(false);
});

test("returns correct coordinates", () => {
  const ship1 = Ship({ x: 1, y: 3 }, { x: 2, y: 3 });
  expect(ship1.getCoordinates()).toStrictEqual([
    { x: 1, y: 3 },
    { x: 2, y: 3 },
  ]);
});
