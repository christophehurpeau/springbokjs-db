"use strict";

var _classProps = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var AbstractStore = (function () {
  var AbstractStore = function AbstractStore(db, manager) {
    this.db = db;
    this.manager = manager;
  };

  _classProps(AbstractStore, null, {
    toVO: {
      writable: true,
      value: function (result) {
        return this.manager.toVO(result);
      }
    },
    toId: {
      writable: true,
      value: function (id) {
        return id;
      }
    },
    keyPath: {
      get: function () {
        return this.manager.VO.keyPath || "id";
      }
    },
    updateByKey: {
      writable: true,
      value: function (options) {
        var keyPath = this.keyPath;
        if (!options.fullData[keyPath]) {
          throw new Error("Missing " + keyPath + " in fullData");
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
})();

exports.AbstractStore = AbstractStore;
//# sourceMappingURL=AbstractStore.js.map