Array.prototype.myForEach = function (callback, context) {
  for (let i = 0; i < this.length; i++) {
    if (this.indexOf(this[i]) > -1) {
      callback.call(context, this[i], i, this);
    }
  }
};
