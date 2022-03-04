const Ship = function (size) {
  if (typeof size !== "number") throw Error("Incorrect type for hit creation");
  const length = parseInt(size);
  const hits = [];

  const hit = (pos) => {
    if (typeof pos !== "number") throw Error("Incorrect type for hit");
    if (isSunk()) return;
    if (hits.includes(pos)) return;
    hits.push(pos);
  };

  const isSunk = () => {
    return hits.length === length ? true : false;
  };

  return {
    hit,
    isSunk,
  };
};

export default Ship;
