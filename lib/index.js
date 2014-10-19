"use strict";
var databases = new Map();

var Db = function() {
  var Db = function Db(dbName, options) {
      this.dbName = dbName;
      options.dbName = dbName;
      this.options = options;
      this.Store = require('springbokjs-db-' + (options.type || 'mongo'));
      this.models = [];
  };

  Object.defineProperties(Db.prototype, {
    initialize: {
      writable: true,

      value: function() {
        var _this = this;
        return this.Store.initialize(this).then(function() {
            Object.freeze(_this);
        });
      }
    },

    add: {
      writable: true,

      value: function(vo) {
          this.models.push(vo);
      }
    },

    createStore: {
      writable: true,

      value: function(manager) {
          return new this.Store(this, manager);
      }
    }
  });

  return Db;
}();


module.exports = Object.freeze({
    initialize: function(config) {
        if (!config) {
            return;
        }
        return Promise.all(Object.keys(config).map(function(dbKey) {
            var dbConfig = config[dbKey];
            var db = new Db(dbConfig.dbName, dbConfig);
            databases.set(dbKey, db);
            return db.initialize();
        }));
    },
    get: function(dbKey) {
        return databases.get(dbKey);
    },
    forEach: function(callback) {
        return databases.forEach(callback);
    }
});

//# sourceMappingURL=index.js.map