define(function (require, exports, module) {
  console.log("math executed");
  var add = function (a, b) {
    return a + b;
  };
  exports.add = add;
});
