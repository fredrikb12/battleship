import Gameboard from "./gameboard";

const Player = function (name) {
  if (typeof name !== "string") name = "Player 1";

  const previousAttacks = [];
  const possibleAttacks = [];
  const gameboard = Gameboard();
  let isNext = false;

  const getName = () => name;

  const setIsNext = (bool) => (isNext = bool);

  const makeAttack = (target, coord) => {
    if (!isNext) throw Error(`${getName()} is not next!`);
    if (target === gameboard) throw Error("Can't attack own gameboard!");
    let wasHit;

    if (name === "computer" || name === "Computer") {
      const attack = getComputerAttack();
      wasHit = target.receiveAttack(attack);
      previousAttacks.push(attack);
    } else {
      wasHit = target.receiveAttack(coord);
      previousAttacks.push(coord);
    }
    return wasHit;
  };

  const getComputerAttack = () => {
    const attack =
      possibleAttacks[Math.floor(Math.random() * possibleAttacks.length)];
    possibleAttacks.splice(possibleAttacks.indexOf(attack), 1);
    /*const attemptedAttack = {
      x: Math.floor(Math.random() * 10) + 1,
      y: Math.floor(Math.random() * 10) + 1,
    };

    const matchedAttack = previousAttacks.find((coordinate) => {
      return (
        coordinate.x === attemptedAttack.x && coordinate.y === attemptedAttack.y
      );
    });
    if (matchedAttack !== undefined) return getComputerAttack();*/

    return attack;
  };

  const getComputerPlacement = () => {
    const placement = {
      x: Math.floor(Math.random() * 10) + 1,
      y: Math.floor(Math.random() * 10) + 1,
    };
    const orientation = Math.floor(Math.random() * 2 + 1) === 1 ? "x" : "y";
    return { placement, orientation };
  };

  const fillPossibleAttack = () => {
    for (let i = 1; i < 11; i++) {
      for (let j = 1; j < 11; j++) {
        possibleAttacks.push({ x: i, y: j });
      }
    }
  };

  const hasAlreadyClicked = (coord) => {
    return previousAttacks.find(
      (el) => el.x === coord.x && el.y === coord.y
    ) !== undefined
      ? true
      : false;
  };

  return {
    gameboard,
    getName,
    makeAttack,
    setIsNext,
    fillPossibleAttack,
    hasAlreadyClicked,
    getComputerPlacement,
  };
};

export default Player;
