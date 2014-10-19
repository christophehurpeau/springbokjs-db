"use strict";
var QFind = require('./QFind').QFind;

var QFindList = function(QFind) {
  var QFindList = function QFindList() {
    QFind.apply(this, arguments);
  };

  QFindList.prototype = Object.create(QFind.prototype, {
    constructor: {
      value: QFindList,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  QFindList.__proto__ = QFind;
  return QFindList;
}(QFind);

exports.QFindList = QFindList;

//# sourceMappingURL=../find/QFindList.js.map