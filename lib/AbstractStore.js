"use strict";
Object.defineProperties(exports, {
  AbstractStore: {get: function() {
      return AbstractStore;
    }},
  __esModule: {value: true}
});
var $__Object$defineProperty = Object.defineProperty;
var AbstractStore = function() {
  "use strict";
  function AbstractStore(db, manager) {
    this.db = db;
    this.manager = manager;
  }
  $__Object$defineProperty(AbstractStore.prototype, "toVO", {
    value: function(result) {
      return this.manager.toVO(result);
    },
    enumerable: false,
    writable: true
  });
  $__Object$defineProperty(AbstractStore.prototype, "toId", {
    value: function(id) {
      return id;
    },
    enumerable: false,
    writable: true
  });
  $__Object$defineProperty(AbstractStore.prototype, "updateByKey", {
    value: function(key, options) {
      if (!options.data[this.model.keyPath]) {
        throw new Error();
      }
      options.criteria = {};
      options.criteria[this.model.keyPath] = options.data[this.model.keyPath];
      options.data = Object.assign({}, options.data);
      delete options.data[this.model.keyPath];
      this.update(options);
    },
    enumerable: false,
    writable: true
  });
  return AbstractStore;
}();
;

//# sourceMappingURL=AbstractStore.js.map