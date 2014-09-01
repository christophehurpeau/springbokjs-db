"use strict";
Object.defineProperties(exports, {
  QFind: {get: function() {
      return QFind;
    }},
  __esModule: {value: true}
});
var $__Object$defineProperty = Object.defineProperty;
var QFind = function() {
  "use strict";
  function QFind(manager) {
    this.manager = manager;
    this.VO = manager.VO;
    this.options = {};
  }
  $__Object$defineProperty(QFind.prototype, "toModel", {
    value: function(result) {
      this.manager.store.toModel(result);
    },
    enumerable: false,
    writable: true
  });
  $__Object$defineProperty(QFind.prototype, "fields", {
    value: function(value) {
      this.options.fields = value;
      return this;
    },
    enumerable: false,
    writable: true
  });
  $__Object$defineProperty(QFind.prototype, "field", {
    value: function(value) {
      this.options.fields = [value];
      return this;
    },
    enumerable: false,
    writable: true
  });
  $__Object$defineProperty(QFind.prototype, "query", {
    value: function(value) {
      this._query = value;
      return this;
    },
    enumerable: false,
    writable: true
  });
  $__Object$defineProperty(QFind.prototype, "cursor", {
    value: function() {
      return this.manager.executeHooks(['beforeFind', 'beforeCursor'], this.options).then(function() {
        return this.manager.store.cursor(this._query, this.options);
      }.bind(this));
    },
    enumerable: false,
    writable: true
  });
  return QFind;
}();
;

//# sourceMappingURL=../find/QFind.js.map