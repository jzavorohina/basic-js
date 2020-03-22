module.exports = function countCats(matrix) {
  let countCats = 0;
  for (let values of matrix) {
    for (let value of values) {
      if (value === "^^") countCats++;
    }
  }
  return countCats;
};
