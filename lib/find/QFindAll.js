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

var QFindAll = (function (QFind) {
  var QFindAll = function QFindAll() {
    QFind.apply(this, arguments);
  };

  _extends(QFindAll, QFind);

  QFindAll.prototype.exec = function () {
    return this.cursor();
  };

  QFindAll.prototype.forEach = function (callback) {
    return this.cursor().then(function (cursor) {
      return cursor.forEach(callback);
    });
  };

  QFindAll.prototype.fetch = function () {
    return this.cursor().then(function (cursor) {
      return cursor.toArray();
    });
  };

  return QFindAll;
})(QFind);

exports.QFindAll = QFindAll;
//# sourceMappingURL=../find/QFindAll.js.map