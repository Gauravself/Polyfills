const doubleNumber = (val) => {};

Array.prototype.myMap = function (callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result[i] = callback(this[i], i, this);
  }
  return result;
};

const arr = [1, 2, 3];
const resultArr = arr.myMap(doubleNumber);
console.log(resultArr);
