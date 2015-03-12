"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var AbstractStore = exports.AbstractStore = (function () {
    function AbstractStore(db, manager) {
        _classCallCheck(this, AbstractStore);

        this.db = db;
        this.manager = manager;
    }

    _prototypeProperties(AbstractStore, null, {
        toVO: {
            value: function toVO(result) {
                return this.manager.toVO(result);
            },
            writable: true,
            configurable: true
        },
        toId: {
            value: function toId(id) {
                return id;
            },
            writable: true,
            configurable: true
        },
        keyPath: {
            get: function () {
                return this.manager.VO.keyPath || "id";
            },
            configurable: true
        },
        updateByKey: {
            value: function updateByKey(options) {
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
            },
            writable: true,
            configurable: true
        },
        removeByKey: {
            value: function removeByKey(options) {
                var keyPath = this.keyPath;
                if (!options.key) {
                    throw new Error("Missing property key in options");
                }
                options.criteria = {};
                options.criteria[keyPath] = options.key;
                this.remove(options);
            },
            writable: true,
            configurable: true
        }
    });

    return AbstractStore;
})();
Object.defineProperty(exports, "__esModule", {
    value: true
});
//# sourceMappingURL=AbstractStore.js.map