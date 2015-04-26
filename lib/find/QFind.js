"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var QFind = exports.QFind = (function () {
    function QFind(manager) {
        _classCallCheck(this, QFind);

        this.manager = manager;
        this.VO = manager.VO;
        this.options = {};
    }

    _createClass(QFind, {
        toModel: {
            value: function toModel(result) {
                this.manager.store.toModel(result);
            }
        },
        fields: {
            value: function fields(value) {
                this.options.fields = value;
                return this;
            }
        },
        field: {
            value: function field(value) {
                this.options.fields = [value];
                return this;
            }
        },
        query: {
            value: function query(value) {
                this._query = value;
                return this;
            }
        },
        sort: {
            value: function sort(value) {
                this.options.sort = value;
                return this;
            }
        },
        limit: {
            value: function limit(value) {
                this.options.limit = value;
                return this;
            }
        },
        notimeout: {
            value: function notimeout() {
                this.options.timeout = false;
                return this;
            }
        },
        cursor: {
            value: function cursor() {
                var _this = this;

                return this.manager.executeHooks(["beforeFind", "beforeCursor"], this.options).then(function () {
                    return _this.manager.store.cursor(_this._query, _this.options);
                });
            }
        }
    });

    return QFind;
})();
//# sourceMappingURL=QFind.js.map