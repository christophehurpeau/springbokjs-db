"use strict";
var QFind = require('./QFind').QFind;

var QFindValue = function(QFind) {
  var QFindValue = function QFindValue() {
    QFind.apply(this, arguments);
  };

  QFindValue.prototype = Object.create(QFind.prototype, {
    constructor: {
      value: QFindValue,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  QFindValue.__proto__ = QFind;

  Object.defineProperties(QFindValue.prototype, {
    fetch: {
      writable: true,

      value: function() {
        var _this = this;
        return this.fetch().then(function(result) {
            if (result) {
                return result[_this.options.fields[0]];
            }
            return result;
        });
      }
    }
  });

  return QFindValue;
}(QFind);

exports.QFindValue = QFindValue;

//# sourceMappingURL=../find/QFindValue.js.map