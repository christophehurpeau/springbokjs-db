"use strict";
var QFind = require('./QFind').QFind;

var QFindAll = function(QFind) {
  var QFindAll = function QFindAll() {
    QFind.apply(this, arguments);
  };

  QFindAll.prototype = Object.create(QFind.prototype, {
    constructor: {
      value: QFindAll,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  QFindAll.__proto__ = QFind;

  Object.defineProperties(QFindAll.prototype, {
    exec: {
      writable: true,

      value: function() {
          return this.cursor();
      }
    },

    forEach: {
      writable: true,

      value: function(callback) {
          return this.cursor().then(function(cursor) {
              return cursor.forEach(callback);
          });
      }
    },

    fetch: {
      writable: true,

      value: function() {
          return this.cursor().then(function(cursor) {
              return cursor.toArray();
          });
      }
    }
  });

  return QFindAll;
}(QFind);

exports.QFindAll = QFindAll;

//# sourceMappingURL=../find/QFindAll.js.map