"use strict";

var QFind = function() {
  var QFind = function QFind(manager) {
      this.manager = manager;
      this.VO = manager.VO;
      this.options = {};
  };

  Object.defineProperties(QFind.prototype, {
    toModel: {
      writable: true,

      value: function(result) {
          this.manager.store.toModel(result);
      }
    },

    fields: {
      writable: true,

      value: function(value) {
          this.options.fields = value;
          return this;
      }
    },

    field: {
      writable: true,

      value: function(value) {
          this.options.fields = [ value ];
          return this;
      }
    },

    query: {
      writable: true,

      value: function(value) {
          this._query = value;
          return this;
      }
    },

    cursor: {
      writable: true,

      value: function() {
        var _this = this;
        return this.manager.executeHooks(['beforeFind', 'beforeCursor'], this.options)
            .then(function() {
                return _this.manager.store.cursor(_this._query, _this.options);
            });
      }
    }
  });

  return QFind;
}();

exports.QFind = QFind;

//# sourceMappingURL=../find/QFind.js.map