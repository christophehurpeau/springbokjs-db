"use strict";

var _classProps = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var AbstractCursor = (function () {
  var AbstractCursor = function AbstractCursor() {};

  _classProps(AbstractCursor, null, {
    result: {
      writable: true,
      value: function () {
        return this._store.findByKey(this.key, {});
      }
    },
    vo: {
      writable: true,
      value: function () {
        return this.result().then(this._store.toVO.bind(this._store));
      }
    },
    remove: {
      writable: true,
      value: function () {
        return this._store.deleteByKey(this.primaryKey);
      }
    },
    forEach: {
      writable: true,
      value: function (callback) {
        var _this = this;
        return this.forEachKeys(function (key) {
          return _this.vo().then(callback);
        });
      }
    }
  });

  return AbstractCursor;
})();

exports.AbstractCursor = AbstractCursor;
//# sourceMappingURL=AbstractCursor.js.map