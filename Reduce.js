Array.prototype.myReduce = function (callback, startValue) {
  let acc = startValue || undefined;
  for (let i = 0; i < this.length; i++) {
    if (acc) {
      acc = callback.call(acc, acc, this[i], i, this);
    } else {
      acc = this[index];
    }
  }
  return acc;
};
