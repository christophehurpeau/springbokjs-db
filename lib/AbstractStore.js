"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var AbstractStore = exports.AbstractStore = (function () {
    function AbstractStore(db, manager) {
        _classCallCheck(this, AbstractStore);

        this.db = db;
        this.manager = manager;
    }

    _createClass(AbstractStore, {
        toVO: {
            value: function toVO(result) {
                return this.manager.toVO(result);
            }
        },
        toId: {
            value: function toId(id) {
                return id;
            }
        },
        keyPath: {
            get: function () {
                return this.manager.VO.keyPath || "id";
            }
        },
        updateByKey: {
            value: function updateByKey(options) {
                var _this = this;

                var keyPath = this.keyPath;
                if (!options.key) {
                    throw new Error("Missing property key in options");
                }
                options.partialUpdate = options.data !== options.fullData;
                options.criteria = {};
                options.criteria[keyPath] = options.key;
                options.data = Object.assign({}, options.data);
                delete options.data[keyPath];
                return this.update(options).then(function (count) {
                    if (count !== undefined && count !== 1) {
                        throw new Error("Failed to updateByKey " + _this.manager.VO.name + ": " + options.key + " (" + count + ")");
                    }
                });
            }
        },
        removeByKey: {
            value: function removeByKey(options) {
                var _this = this;

                var keyPath = this.keyPath;
                if (!options.key) {
                    throw new Error("Missing property key in options");
                }
                options.criteria = {};
                options.criteria[keyPath] = options.key;
                return this.remove(options).then(function (count) {
                    if (count !== undefined && count !== 1) {
                        throw new Error("Failed to removeByKey " + _this.manager.VO.name + ": " + options.key + " (" + count + ")");
                    }
                });
            }
        }
    });

    return AbstractStore;
})();
//# sourceMappingURL=AbstractStore.js.map