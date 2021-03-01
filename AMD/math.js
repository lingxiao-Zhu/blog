define(function () {
  console.log("math executed");
  var basicNum = 0;
  var add = function (x, y) {
    return x + y;
  };
  return {
    add: add,
    basicNum: basicNum,
  };
});
