"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var QFind = require("./QFind").QFind;

var QFindOne = exports.QFindOne = (function (QFind) {
    function QFindOne() {
        _classCallCheck(this, QFindOne);

        if (QFind != null) {
            QFind.apply(this, arguments);
        }
    }

    _inherits(QFindOne, QFind);

    _prototypeProperties(QFindOne, null, {
        fetch: {
            value: function fetch() {
                var _this = this;
                //console.log('Fetching on ' + this.VO.modelName + ': query=', this._query, ', options=', this.options);

                return this.manager.executeHooks(["beforeFind", "beforeFindOne"], this.options).then(function () {
                    return _this.manager.store.findOne(_this._query, _this.options);
                }).then(function (result) {
                    return result ? _this.manager.toVO(result) : result;
                });
            },
            writable: true,
            configurable: true
        },
        byId: {
            value: function byId(id) {
                this._query = { _id: this.manager.store.toId(id) };
                return this;
            },
            writable: true,
            configurable: true
        },
        notNull: {
            value: function notNull() {
                return this.fetch().then(function (result) {
                    if (result === null) {
                        var error = new Error("Failed to find the object");
                        error.status = 404;
                        return Promise.reject(error);
                    }
                    return result;
                });
            },
            writable: true,
            configurable: true
        }
    });

    return QFindOne;
})(QFind);
Object.defineProperty(exports, "__esModule", {
    value: true
});
//# sourceMappingURL=../find/QFindOne.js.map