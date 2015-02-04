"use strict";

var QFind = (function () {
  var QFind = function QFind(manager) {
    this.manager = manager;
    this.VO = manager.VO;
    this.options = {};
  };

  QFind.prototype.toModel = function (result) {
    this.manager.store.toModel(result);
  };

  QFind.prototype.fields = function (value) {
    this.options.fields = value;
    return this;
  };

  QFind.prototype.field = function (value) {
    this.options.fields = [value];
    return this;
  };

  QFind.prototype.query = function (value) {
    this._query = value;
    return this;
  };

  QFind.prototype.sort = function (value) {
    this.options.sort = value;
    return this;
  };

  QFind.prototype.cursor = function () {
    var _this = this;
    return this.manager.executeHooks(["beforeFind", "beforeCursor"], this.options).then(function () {
      return _this.manager.store.cursor(_this._query, _this.options);
    });
  };

  return QFind;
})();

exports.QFind = QFind;
//# sourceMappingURL=../find/QFind.js.map