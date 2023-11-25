const expensiveFunction = () => {
  let count = 0;
  for (let i = 0; i < 100000000000; i++) {
    count += i;
  }
  return count;
};

// Concept - Closure
function myMemoize(fn) {
  let cache = {};
  return function () {
    let context = this,
      args = arguments;

    //   Check if cache obj already has a property of that argument -> yes ->return already stored one
    if (cache[args]) {
      return cache[args];
    }

    //   If not evaluate value
    let evalVal = fn.apply(context, args);

    //   Cache it
    cache[args] = evalVal;

    return evalVal;
  };
}

const sumVal = myMemoize(expensiveFunction);
console.log(sumVal);
