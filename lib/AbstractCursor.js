"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var AbstractCursor = exports.AbstractCursor = (function () {
    function AbstractCursor() {
        _classCallCheck(this, AbstractCursor);
    }

    _createClass(AbstractCursor, {
        result: {
            value: function result() {
                return this._store.findByKey(this.key, {});
            }
        },
        vo: {
            value: function vo() {
                return this.result().then(this._store.toVO.bind(this._store));
            }
        },
        remove: {
            value: function remove() {
                return this._store.deleteByKey(this.primaryKey);
            }
        },
        forEach: {
            value: function forEach(callback) {
                var _this = this;

                return this.forEachKeys(function (key) {
                    return _this.vo().then(callback);
                });
            }
        }
    });

    return AbstractCursor;
})();
//# sourceMappingURL=AbstractCursor.js.map