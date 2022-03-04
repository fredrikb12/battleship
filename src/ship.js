const Ship = function (startCoord, endCoord) {
  //let orientation;
  let length;
  const coordinates = [];
  const hits = [];
  if (typeof startCoord !== "object" || typeof endCoord !== "object")
    throw Error("Coordinates are wrong format: ", startCoord, endCoord);
  if (
    !startCoord.hasOwnProperty("x") ||
    !startCoord.hasOwnProperty("y") ||
    !endCoord.hasOwnProperty("x") ||
    !endCoord.hasOwnProperty("y")
  )
    throw Error("Missing coordinate property on object.", startCoord, endCoord);

  if (startCoord.x !== endCoord.x) {
    length = Math.abs(startCoord.x - endCoord.x) + 1;
    for (let i = 0; i < length; i++) {
      coordinates.push({ x: startCoord.x + i, y: startCoord.y });
    }
  } else {
    length = Math.abs(startCoord.y - endCoord.y) + 1;
    for (let i = 0; i < length; i++) {
      coordinates.push({ x: startCoord.x, y: startCoord.y + i });
    }
  }

  const hit = (pos) => {
    const hitCoord = coordinates.find((coord) => {
      return pos.x === coord.x && pos.y === coord.y;
    });
    if (!hitCoord) return;
    hits.push(hitCoord);
  };

  const isSunk = () => {
    return hits.length === length ? true : false;
  };

  const getHits = () => {
    return [...hits];
  };

  const getCoordinates = () => {
    return [...coordinates];
  };

  return {
    hit,
    isSunk,
    getHits,
    getCoordinates,
  };
};

export default Ship;
