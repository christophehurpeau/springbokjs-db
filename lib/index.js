"use strict";

var databases = new Map();

var Db = (function () {
  var Db = function Db(dbName, Store, options) {
    this.dbName = dbName;
    options.dbName = dbName;
    this.options = options;
    this.Store = Store;
    this.models = [];
  };

  Db.prototype.initialize = function () {
    var _this = this;
    return this.Store.initialize(this).then(function () {
      Object.freeze(_this);
    });
  };

  Db.prototype.close = function () {
    return this.Store.close(this);
  };

  Db.prototype.add = function (vo) {
    this.models.push(vo);
  };

  Db.prototype.createStore = function (manager) {
    return new this.Store(this, manager);
  };

  return Db;
})();




module.exports = Object.freeze({
  initialize: function (config, getStore) {
    if (!config) {
      return;
    }
    if (!getStore) {
      getStore = function (type) {
        return require("springbokjs-db-" + (type || "mongo"));
      };
    }
    return Promise.all(Object.keys(config).map(function (dbKey) {
      var dbConfig = config[dbKey];
      var Store = getStore(dbConfig.type);
      var db = new Db(dbConfig.dbName, Store, dbConfig);
      databases.set(dbKey, db);
      return db.initialize();
    }));
  },
  close: function () {
    databases.forEach(function (db) {
      return db.close();
    });
  },
  get: function (dbKey) {
    return databases.get(dbKey);
  },
  forEach: function (callback) {
    return databases.forEach(callback);
  }
});
//# sourceMappingURL=index.js.map