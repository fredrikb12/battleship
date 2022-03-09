import Gameboard from "./gameboard";

const Player = function (name) {
  if (typeof name !== "string") name = "Player 1";
  const previousAttacks = [];
  const gameboard = Gameboard();
  let isNext = false;

  const getName = () => name;

  const setIsNext = (bool) => (isNext = bool);

  const makeAttack = (target, coord) => {
    if (!isNext) throw Error(`${getName()} is not next!`);
    if (target === gameboard) throw Error("Can't attack own gameboard!");

    if (name === "computer" || name === "Computer") {
      const attack = getComputerAttack();
      target.receiveAttack(attack);
      previousAttacks.push(attack);
    } else {
      target.receiveAttack(coord);
      previousAttacks.push(coord);
    }
    isNext = false;
  };

  const getComputerAttack = () => {
    if (name !== "computer") return;

    const attemptedAttack = {
      x: Math.floor(Math.random() * 10) + 1,
      y: Math.floor(Math.random() * 10) + 1,
    };

    const matchedAttack = previousAttacks.find((coordinate) => {
      return (
        coordinate.x === attemptedAttack.x && coordinate.y === attemptedAttack.y
      );
    });
    if (matchedAttack !== undefined) return getComputerAttack();

    return attemptedAttack;
  };

  return {
    gameboard,
    getName,
    makeAttack,
    setIsNext,
  };
};

export default Player;
