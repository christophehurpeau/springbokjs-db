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

  AbstractStore.prototype.toVO = function (result) {
    return this.manager.toVO(result);
  };

  AbstractStore.prototype.toId = function (id) {
    return id;
  };

  AbstractStore.prototype.updateByKey = function (options) {
    var keyPath = this.keyPath;
    if (!options.key) {
      throw new Error("Missing property key in options");
    }
    options.partialUpdate = options.data !== options.fullData;
    options.criteria = {};
    options.criteria[keyPath] = options.key;
    options.data = Object.assign({}, options.data);
    delete options.data[keyPath];
    this.update(options);
  };

  AbstractStore.prototype.removeByKey = function (options) {
    var keyPath = this.keyPath;
    if (!options.key) {
      throw new Error("Missing property key in options");
    }
    options.criteria = {};
    options.criteria[keyPath] = options.key;
    this.remove(options);
  };

  _classProps(AbstractStore, null, {
    keyPath: {
      get: function () {
        return this.manager.VO.keyPath || "id";
      }
    }
  });

  return AbstractStore;
})();

exports.AbstractStore = AbstractStore;
//# sourceMappingURL=AbstractStore.js.map