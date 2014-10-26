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

      value: function(options) {
          var keyPath = this.manager.VO.keyPath;
          if (!options.fullData[keyPath]) {
              throw new Error('Missing ' + keyPath + ' in fullData');
          }
          options.partialUpdate = options.data !== options.fullData;
          options.criteria = {};
          options.criteria[keyPath] = options.fullData[keyPath];
          options.data = Object.assign({}, options.data);
          delete options.data[keyPath];
          this.update(options);
      }
    }
  });

  return AbstractStore;
}();

exports.AbstractStore = AbstractStore;

//# sourceMappingURL=AbstractStore.js.map