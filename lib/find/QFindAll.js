"use strict";
Object.defineProperties(exports, {
  QFindAll: {get: function() {
      return QFindAll;
    }},
  __esModule: {value: true}
});
var $__Object$defineProperty = Object.defineProperty;
var $__Object$create = Object.create;
var $__Object$getPrototypeOf = Object.getPrototypeOf;
var QFind = require('./QFind').QFind;
var QFindAll = function($__super) {
  "use strict";
  function QFindAll() {
    var $__0 = $__Object$getPrototypeOf(QFindAll.prototype);
    if ($__0 !== null)
      $__0.constructor.apply(this, arguments);
  }
  QFindAll.__proto__ = ($__super !== null ? $__super : Function.prototype);
  QFindAll.prototype = $__Object$create(($__super !== null ? $__super.prototype : null));
  $__Object$defineProperty(QFindAll.prototype, "constructor", {value: QFindAll});
  $__Object$defineProperty(QFindAll.prototype, "exec", {
    value: function() {
      return this.cursor();
    },
    enumerable: false,
    writable: true
  });
  $__Object$defineProperty(QFindAll.prototype, "forEach", {
    value: function(callback) {
      return this.cursor().then(function(cursor) {
        return cursor.forEach(callback);
      });
    },
    enumerable: false,
    writable: true
  });
  $__Object$defineProperty(QFindAll.prototype, "fetch", {
    value: function() {
      return this.cursor().then(function(cursor) {
        return cursor.toArray();
      });
    },
    enumerable: false,
    writable: true
  });
  return QFindAll;
}(QFind);
;

//# sourceMappingURL=../find/QFindAll.js.map