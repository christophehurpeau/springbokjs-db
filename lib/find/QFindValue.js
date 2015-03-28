"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

Object.defineProperty(exports, "__esModule", {
    value: true
});
var QFind = require("./QFind").QFind;

var QFindValue = exports.QFindValue = (function (_QFind) {
    function QFindValue() {
        _classCallCheck(this, QFindValue);

        if (_QFind != null) {
            _QFind.apply(this, arguments);
        }
    }

    _inherits(QFindValue, _QFind);

    _createClass(QFindValue, {
        fetch: {
            value: function fetch(callback) {
                var _this = this;

                return this.fetch().then(function (result) {
                    if (result) {
                        return result[_this.options.fields[0]];
                    }
                    return callback ? callback(result) : result;
                });
            }
        }
    });

    return QFindValue;
})(QFind);
//# sourceMappingURL=QFindValue.js.map