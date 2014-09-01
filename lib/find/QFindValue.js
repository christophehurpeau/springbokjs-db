"use strict";
Object.defineProperties(exports, {
  QFindValue: {get: function() {
      return QFindValue;
    }},
  __esModule: {value: true}
});
var $__Object$defineProperty = Object.defineProperty;
var $__Object$create = Object.create;
var $__Object$getPrototypeOf = Object.getPrototypeOf;
var QFind = require('./QFind').QFind;
var QFindValue = function($__super) {
  "use strict";
  function QFindValue() {
    var $__0 = $__Object$getPrototypeOf(QFindValue.prototype);
    if ($__0 !== null)
      $__0.constructor.apply(this, arguments);
  }
  QFindValue.__proto__ = ($__super !== null ? $__super : Function.prototype);
  QFindValue.prototype = $__Object$create(($__super !== null ? $__super.prototype : null));
  $__Object$defineProperty(QFindValue.prototype, "constructor", {value: QFindValue});
  $__Object$defineProperty(QFindValue.prototype, "fetch", {
    value: function() {
      return this.fetch().then(function(result) {
        if (result) {
          return result[this.options.fields[0]];
        }
        return result;
      }.bind(this));
    },
    enumerable: false,
    writable: true
  });
  return QFindValue;
}(QFind);
;

//# sourceMappingURL=../find/QFindValue.js.map