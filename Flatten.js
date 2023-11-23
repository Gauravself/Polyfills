const myFlatten = function (arr, depth = 1) {
  let result = [];
  arr.forEach((arr) => {
    if (Array.isArray(arr) && depth > 0) {
      result.push(...myFlatten(arr, depth - 1));
    } else result.push(arr);
  });

  return result;
};
