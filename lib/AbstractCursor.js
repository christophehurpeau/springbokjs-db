"use strict";
Object.defineProperties(exports, {
  AbstractCursor: {get: function() {
      return AbstractCursor;
    }},
  __esModule: {value: true}
});
var $__Object$defineProperty = Object.defineProperty;
var AbstractCursor = function() {
  "use strict";
  function AbstractCursor() {}
  $__Object$defineProperty(AbstractCursor.prototype, "result", {
    value: function() {
      return this._store.findByKey(this.key, {});
    },
    enumerable: false,
    writable: true
  });
  $__Object$defineProperty(AbstractCursor.prototype, "vo", {
    value: function() {
      return this.result().then(this._store.toModel.bind(this._store));
    },
    enumerable: false,
    writable: true
  });
  $__Object$defineProperty(AbstractCursor.prototype, "remove", {
    value: function() {
      return this._store.deleteByKey(this.primaryKey);
    },
    enumerable: false,
    writable: true
  });
  $__Object$defineProperty(AbstractCursor.prototype, "forEach", {
    value: function(callback) {
      return this.forEachKeys(this.vo.bind(this, callback));
    },
    enumerable: false,
    writable: true
  });
  return AbstractCursor;
}();
;

//# sourceMappingURL=AbstractCursor.js.map