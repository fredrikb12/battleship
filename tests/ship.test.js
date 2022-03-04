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

test("throws error when created with incorrect type", () => {
  expect(() => {
    Ship("1");
  }).toThrow("Incorrect type");
});

test("throws error when hit is called with wrong type", () => {
  expect(() => {
    const ship1 = Ship(1);
    ship1.hit("1");
  }).toThrow("Incorrect type for hit");
});

test("sinks ship correctly", () => {
  const ship1 = Ship(1);
  ship1.hit(1);
  expect(ship1.isSunk()).toBe(true);
});

test("doesn't always sink ship", () => {
  const ship1 = Ship(2);
  ship1.hit(1);
  expect(ship1.isSunk()).toBe(false);
});
