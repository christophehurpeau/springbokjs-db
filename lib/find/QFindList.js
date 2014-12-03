"use strict";

var _extends = function (child, parent) {
  child.prototype = Object.create(parent.prototype, {
    constructor: {
      value: child,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  child.__proto__ = parent;
};

var QFind = require("./QFind").QFind;

var QFindList = (function (QFind) {
  var QFindList = function QFindList() {
    QFind.apply(this, arguments);
  };

  _extends(QFindList, QFind);

  return QFindList;
})(QFind);

exports.QFindList = QFindList;
//# sourceMappingURL=../find/QFindList.js.map