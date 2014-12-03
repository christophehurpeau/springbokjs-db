"use strict";

var _classProps = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

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

  _classProps(QFindAll, null, {
    exec: {
      writable: true,
      value: function () {
        return this.cursor();
      }
    },
    forEach: {
      writable: true,
      value: function (callback) {
        return this.cursor().then(function (cursor) {
          return cursor.forEach(callback);
        });
      }
    },
    fetch: {
      writable: true,
      value: function () {
        return this.cursor().then(function (cursor) {
          return cursor.toArray();
        });
      }
    }
  });

  return QFindAll;
})(QFind);

exports.QFindAll = QFindAll;
//# sourceMappingURL=../find/QFindAll.js.map