import Ship from "./ship";

const Gameboard = function () {
  const starterShips = [5, 4, 3, 3, 2];
  const ships = [];
  const missedHits = [];

  const placeShip = (startCoord, endCoord) => {
    if (startCoord.x !== endCoord.x && startCoord.y !== endCoord.y)
      throw Error("Invalid coordinates, ship is diagonally placed");

    const checkedCoords = [startCoord, endCoord].filter((coord) => {
      return coord.x < 1 || coord.y < 1 || coord.x > 10 || coord.y > 10;
    });
    if (checkedCoords.length > 0) throw Error("Invalid coordinate range");
    if (getShipByCoordinates(ships, startCoord, endCoord)) return;

    if (startCoord.x > endCoord.x || startCoord.y > endCoord.y) {
      const ship = Ship(getLength(endCoord, startCoord));
      ships.push({ ship: ship, start: endCoord, end: startCoord });
    } else {
      const ship = Ship(getLength(startCoord, endCoord));
      ships.push({ ship: ship, start: startCoord, end: endCoord });
    }
    return true;
  };

  const receiveAttack = (coord) => {
    const hitShip = getShipByCoordinates(ships, coord);
    if (!hitShip) {
      missedHits.push(coord);
      return { hit: false, coord: coord };
    }
    hitShip.ship.hit(getHitPosition(hitShip.start, hitShip.end, coord));
    return { hit: true, coord: coord };
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
    const ship = getShipByCoordinates(ships, coord);
    if (ship === null) return false;
    return true;
  };

  const getSuggestedPlacement = (coord, length, orientation) => {
    const coords = [];
    const adjustedCoords = [];
    const returnCoords = [];
    for (let i = 0; i < length; i++) {
      if (orientation === "x") coords.push({ x: coord.x + i, y: coord.y });
      if (orientation === "y") coords.push({ x: coord.x, y: coord.y + i });
    }
    switch (coord[orientation] + length - 1) {
      case 11:
        coords.forEach((coord) => adjustedCoords.push(coord[orientation] - 1));
        break;

      case 12:
        coords.forEach((coord) => adjustedCoords.push(coord[orientation] - 2));
        break;

      case 13:
        coords.forEach((coord) => adjustedCoords.push(coord[orientation] - 3));
        break;

      case 14:
        coords.forEach((coord) => adjustedCoords.push(coord[orientation] - 4));
        break;

      default:
        return coords;
    }
    adjustedCoords.forEach((adjusted) => {
      if (orientation === "x") {
        returnCoords.push({ x: adjusted, y: coord.y });
      } else {
        returnCoords.push({ x: coord.x, y: adjusted });
      }
    });
    return returnCoords;
  };

  const getShipToPlace = () => {
    return starterShips[ships.length];
  };

  function getShipByCoordinates(shipArray, start, end) {
    if (!start) return;
    if (!end) {
      const [foundShip] = shipArray.filter((ship) => {
        return (
          ship.start.x <= start.x &&
          ship.start.y <= start.y &&
          ship.end.x >= start.x &&
          ship.end.y >= start.y
        );
      });
      if (!foundShip) return null;
      return foundShip;
    }
    const coords = getAllCoordinates(start, end);
    const foundShips = coords.map((coord) => coordinateHasShip(coord));

    if (
      foundShips.filter((el) => {
        return el !== false;
      }).length > 0
    ) {
      return true;
    } else {
      return false;
    }
  }

  return {
    placeShip,
    receiveAttack,
    getShipCount,
    getMissedHits,
    areShipsSunk,
    coordinateHasShip,
    getSuggestedPlacement,
    getShipToPlace,
  };
};

function getLength(start, end) {
  return (
    Math.sqrt(
      (start.x - end.x) * (start.x - end.x) +
        (start.y - end.y) * (start.y - end.y)
    ) + 1
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

function getAllCoordinates(start, end) {
  const coords = [];
  if (start.x !== end.x) {
    for (let i = 0; i <= Math.abs(end.x - start.x); i++) {
      coords.push({ x: start.x + i, y: start.y });
    }
  } else {
    for (let i = 0; i <= Math.abs(end.y - start.y); i++) {
      coords.push({ x: start.x, y: start.y + i });
    }
  }
  return coords;
}

export default Gameboard;
