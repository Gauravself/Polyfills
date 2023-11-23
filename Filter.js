const isDivisibleByTwo = () => {
  return val % 2;
};

Array.prototype.myFilter = function (callback, context) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback.call(context, this[i], i, this)) {
      result.push(this[index]);
    }
  }
  return result;
};

const arr = [2, 5, 6, 7, 8, 10];
const resultArr = arr.myFilter(isDivisibleByTwo);
console.log(resultArr);
