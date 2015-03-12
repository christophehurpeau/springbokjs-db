"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var QFind = exports.QFind = (function () {
    function QFind(manager) {
        _classCallCheck(this, QFind);

        this.manager = manager;
        this.VO = manager.VO;
        this.options = {};
    }

    _prototypeProperties(QFind, null, {
        toModel: {
            value: function toModel(result) {
                this.manager.store.toModel(result);
            },
            writable: true,
            configurable: true
        },
        fields: {
            value: function fields(value) {
                this.options.fields = value;
                return this;
            },
            writable: true,
            configurable: true
        },
        field: {
            value: function field(value) {
                this.options.fields = [value];
                return this;
            },
            writable: true,
            configurable: true
        },
        query: {
            value: function query(value) {
                this._query = value;
                return this;
            },
            writable: true,
            configurable: true
        },
        sort: {
            value: function sort(value) {
                this.options.sort = value;
                return this;
            },
            writable: true,
            configurable: true
        },
        cursor: {
            value: function cursor() {
                var _this = this;
                return this.manager.executeHooks(["beforeFind", "beforeCursor"], this.options).then(function () {
                    return _this.manager.store.cursor(_this._query, _this.options);
                });
            },
            writable: true,
            configurable: true
        }
    });

    return QFind;
})();
Object.defineProperty(exports, "__esModule", {
    value: true
});
//# sourceMappingURL=../find/QFind.js.map