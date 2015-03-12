"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var QFind = require("./QFind").QFind;

var QFindValue = exports.QFindValue = (function (QFind) {
    function QFindValue() {
        _classCallCheck(this, QFindValue);

        if (QFind != null) {
            QFind.apply(this, arguments);
        }
    }

    _inherits(QFindValue, QFind);

    _prototypeProperties(QFindValue, null, {
        fetch: {
            value: function fetch() {
                var _this = this;
                return this.fetch().then(function (result) {
                    if (result) {
                        return result[_this.options.fields[0]];
                    }
                    return result;
                });
            },
            writable: true,
            configurable: true
        }
    });

    return QFindValue;
})(QFind);
Object.defineProperty(exports, "__esModule", {
    value: true
});
//# sourceMappingURL=../find/QFindValue.js.map