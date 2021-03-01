define(function (require, exports, module) {
  // 通过 require 引入依赖
  // 通过 require 引入依赖

  if (false) {
    var math = require("./math.js");
    const val = math.add(1, 1);
    console.log(111);
    var $ = require("jquery");
    $("#root").text(val);
  }

  // 通过 exports 对外提供接口
  // exports.doSomething = ...

  // 或者通过 module.exports 提供整个接口
  // module.exports = ...
});
