"use strict";

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});
var QFind = require("./QFind").QFind;

var QFindList = exports.QFindList = (function (_QFind) {
  function QFindList() {
    _classCallCheck(this, QFindList);

    if (_QFind != null) {
      _QFind.apply(this, arguments);
    }
  }

  _inherits(QFindList, _QFind);

  return QFindList;
})(QFind);
//# sourceMappingURL=QFindList.js.map