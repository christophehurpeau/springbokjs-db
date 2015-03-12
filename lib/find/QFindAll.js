"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var QFind = require("./QFind").QFind;

var QFindAll = exports.QFindAll = (function (QFind) {
    function QFindAll() {
        _classCallCheck(this, QFindAll);

        if (QFind != null) {
            QFind.apply(this, arguments);
        }
    }

    _inherits(QFindAll, QFind);

    _prototypeProperties(QFindAll, null, {
        exec: {
            value: function exec() {
                return this.cursor();
            },
            writable: true,
            configurable: true
        },
        forEach: {
            value: function forEach(callback) {
                return this.cursor().then(function (cursor) {
                    return cursor.forEach(callback);
                });
            },
            writable: true,
            configurable: true
        },
        fetch: {
            value: function fetch() {
                return this.cursor().then(function (cursor) {
                    return cursor.toArray();
                });
            },
            writable: true,
            configurable: true
        }
    });

    return QFindAll;
})(QFind);
Object.defineProperty(exports, "__esModule", {
    value: true
});
//# sourceMappingURL=../find/QFindAll.js.map