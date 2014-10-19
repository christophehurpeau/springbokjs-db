"use strict";

var AbstractStore = function() {
  var AbstractStore = function AbstractStore(db, manager) {
      this.db = db;
      this.manager = manager;
  };

  Object.defineProperties(AbstractStore.prototype, {
    toVO: {
      writable: true,

      value: function(result) {
          return this.manager.toVO(result);
      }
    },

    toId: {
      writable: true,

      value: function(id) {
          return id;
      }
    },

    updateByKey: {
      writable: true,

      value: function(key, options) {
          if (!options.data[this.model.keyPath]) {
              throw new Error();
          }
          options.criteria = {};
          options.criteria[this.model.keyPath] = options.data[this.model.keyPath];
          options.data = Object.assign({}, options.data);
          delete options.data[this.model.keyPath];
          this.update(options);
      }
    }
  });

  return AbstractStore;
}();

exports.AbstractStore = AbstractStore;

//# sourceMappingURL=AbstractStore.js.map