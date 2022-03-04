import Ship from "./ship";

const Gameboard = function () {
  const ships = [];
  const missedHits = [];

  const placeShip = (startCoord, endCoord) => {
    if (ships.length > 0) {
      const testShip = findShipByCoordinate(ships, startCoord);
      if (testShip) return;
    }

    const ship = Ship(startCoord, endCoord);
    ships.push(ship);
  };

  const receiveAttack = (coord) => {
    const hitShip = findShipByCoordinate(ships, coord);
    if (!hitShip) {
      missedHits.push(coord);
      return;
    }
    hitShip.hit(coord);
  };

  const getShipCount = () => {
    return ships.length;
  };

  const getMissedHitCount = () => {
    return missedHits.length;
  };

  return {
    placeShip,
    receiveAttack,
    getShipCount,
    getMissedHitCount,
  };
};

function findShipByCoordinate(shipArray, coord) {
  const [ship] = shipArray.filter((ship) => {
    const shipCoords = ship.getCoordinates();
    return shipCoords.find(
      (shipCoord) => shipCoord.x == coord.x && shipCoord.y == coord.y
    );
  });
  return ship;
}

export default Gameboard;
