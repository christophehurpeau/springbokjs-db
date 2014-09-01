"use strict";
var $__Object$defineProperty = Object.defineProperty;
var databases = new Map();
var Db = function() {
  "use strict";
  function Db(dbName, options) {
    this.dbName = dbName;
    options.dbName = dbName;
    this.options = options;
    this.Store = require('springbokjs-db-' + (options.type || 'mongo'));
    this.models = [];
  }
  $__Object$defineProperty(Db.prototype, "initialize", {
    value: function() {
      return this.Store.initialize(this).then(function() {
        Object.freeze(this);
      }.bind(this));
    },
    enumerable: false,
    writable: true
  });
  $__Object$defineProperty(Db.prototype, "add", {
    value: function(vo) {
      this.models.push(vo);
    },
    enumerable: false,
    writable: true
  });
  $__Object$defineProperty(Db.prototype, "createStore", {
    value: function(manager) {
      return new this.Store(this, manager);
    },
    enumerable: false,
    writable: true
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