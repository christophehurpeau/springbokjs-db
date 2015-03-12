"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var AbstractCursor = exports.AbstractCursor = (function () {
    function AbstractCursor() {
        _classCallCheck(this, AbstractCursor);
    }

    _prototypeProperties(AbstractCursor, null, {
        result: {
            value: function result() {
                return this._store.findByKey(this.key, {});
            },
            writable: true,
            configurable: true
        },
        vo: {
            value: function vo() {
                return this.result().then(this._store.toVO.bind(this._store));
            },
            writable: true,
            configurable: true
        },
        remove: {
            value: function remove() {
                return this._store.deleteByKey(this.primaryKey);
            },
            writable: true,
            configurable: true
        },
        forEach: {
            value: function forEach(callback) {
                var _this = this;
                return this.forEachKeys(function (key) {
                    return _this.vo().then(callback);
                });
            },
            writable: true,
            configurable: true
        }
    });

    return AbstractCursor;
})();
Object.defineProperty(exports, "__esModule", {
    value: true
});
//# sourceMappingURL=AbstractCursor.js.map