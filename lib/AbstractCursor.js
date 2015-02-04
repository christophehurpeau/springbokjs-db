"use strict";

var AbstractCursor = (function () {
  var AbstractCursor = function AbstractCursor() {};

  AbstractCursor.prototype.result = function () {
    return this._store.findByKey(this.key, {});
  };

  AbstractCursor.prototype.vo = function () {
    return this.result().then(this._store.toVO.bind(this._store));
  };

  AbstractCursor.prototype.remove = function () {
    return this._store.deleteByKey(this.primaryKey);
  };

  AbstractCursor.prototype.forEach = function (callback) {
    var _this = this;
    return this.forEachKeys(function (key) {
      return _this.vo().then(callback);
    });
  };

  return AbstractCursor;
})();

exports.AbstractCursor = AbstractCursor;
//# sourceMappingURL=AbstractCursor.js.map