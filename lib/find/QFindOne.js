"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

Object.defineProperty(exports, "__esModule", {
    value: true
});
var QFind = require("./QFind").QFind;

var QFindOne = exports.QFindOne = (function (_QFind) {
    function QFindOne() {
        _classCallCheck(this, QFindOne);

        if (_QFind != null) {
            _QFind.apply(this, arguments);
        }
    }

    _inherits(QFindOne, _QFind);

    _createClass(QFindOne, {
        fetch: {
            value: function fetch(callback) {
                var _this = this;

                //console.log('Fetching on ' + this.VO.modelName + ': query=', this._query, ', options=', this.options);

                return this.manager.executeHooks(["beforeFind", "beforeFindOne"], this.options).then(function () {
                    return _this.manager.store.findOne(_this._query, _this.options);
                }).then(function (result) {
                    result = result ? _this.manager.toVO(result) : result;
                    return callback ? callback(result) : result;
                });
            }
        },
        byId: {
            value: function byId(id) {
                this._query = { _id: this.manager.store.toId(id) };
                return this;
            }
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
            }
        }
    });

    return QFindOne;
})(QFind);
//# sourceMappingURL=QFindOne.js.map