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

var QFindValue = (function (QFind) {
  var QFindValue = function QFindValue() {
    QFind.apply(this, arguments);
  };

  _extends(QFindValue, QFind);

  QFindValue.prototype.fetch = function () {
    var _this = this;
    return this.fetch().then(function (result) {
      if (result) {
        return result[_this.options.fields[0]];
      }
      return result;
    });
  };

  return QFindValue;
})(QFind);

exports.QFindValue = QFindValue;
//# sourceMappingURL=../find/QFindValue.js.map