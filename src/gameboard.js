import Ship from "./ship";

const Gameboard = function () {
  const ships = [];
  const missedHits = [];

  const placeShip = (startCoord, endCoord) => {
    if (startCoord.x !== endCoord.x && startCoord.y !== endCoord.y)
      throw Error("Invalid coordinates, ship is diagonally placed");

    const checkedCoords = [startCoord, endCoord].filter((coord) => {
      return coord.x < 1 || coord.y < 1 || coord.x > 10 || coord.y > 10;
    });
    if (checkedCoords.length > 0) throw Error("Invalid coordinate range");

    if (ships.length > 0) {
      if (getShipByCoordinate(ships, startCoord, endCoord)) return;
    }

    if (startCoord.x > endCoord.x || startCoord.y > endCoord.y) {
      const ship = Ship(getLength(endCoord, startCoord));
      ships.push({ ship: ship, start: endCoord, end: startCoord });
    } else {
      const ship = Ship(getLength(startCoord, endCoord));
      ships.push({ ship: ship, start: startCoord, end: endCoord });
    }
  };

  const receiveAttack = (coord) => {
    const hitShip = getShipByCoordinate(ships, coord);
    if (!hitShip) {
      missedHits.push(coord);
      return false;
    }
    hitShip.ship.hit(getHitPosition(hitShip.start, hitShip.end, coord));
    return true;
  };

  const getShipCount = () => {
    return ships.length;
  };

  const getMissedHits = () => {
    return [...missedHits];
  };

  const areShipsSunk = () => {
    const sunkShips = ships.filter((ship) => {
      return ship.ship.isSunk();
    });
    return sunkShips.length === ships.length ? true : false;
  };

  const coordinateHasShip = (coord) => {
    const ship = getShipByCoordinate(ships, coord);
    if (ship === null) return false;
    return true;
  };

  return {
    placeShip,
    receiveAttack,
    getShipCount,
    getMissedHits,
    areShipsSunk,
    coordinateHasShip,
  };
};

function getShipByCoordinate(shipArray, coord) {
  const [foundShip] = shipArray.filter((ship) => {
    return (
      ship.start.x <= coord.x &&
      ship.start.y <= coord.y &&
      ship.end.x >= coord.x &&
      ship.end.y >= coord.y
    );
  });
  if (!foundShip) return null;
  return foundShip;
}

function getLength(start, end) {
  return Math.sqrt(
    (start.x - end.x) * (start.x - end.x) +
      (start.y - end.y) * (start.y - end.y)
  );
}

function getHitPosition(start, end, hitCoord) {
  if (start.x !== end.x) {
    for (let i = 0; i <= Math.abs(start.x - end.x); i++) {
      if (start.x + i === hitCoord.x && start.y === hitCoord.y) {
        return i;
      }
    }
  } else {
    for (let i = 0; i <= Math.abs(start.y - end.y); i++) {
      if (start.x === hitCoord.x && start.y + i === hitCoord.y) return i;
    }
  }
}

export default Gameboard;
