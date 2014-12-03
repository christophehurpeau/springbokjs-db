"use strict";

var _classProps = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var databases = new Map();

var Db = (function () {
  var Db = function Db(dbName, Store, options) {
    this.dbName = dbName;
    options.dbName = dbName;
    this.options = options;
    this.Store = Store;
    this.models = [];
  };

  _classProps(Db, null, {
    initialize: {
      writable: true,
      value: function () {
        var _this = this;
        return this.Store.initialize(this).then(function () {
          Object.freeze(_this);
        });
      }
    },
    add: {
      writable: true,
      value: function (vo) {
        this.models.push(vo);
      }
    },
    createStore: {
      writable: true,
      value: function (manager) {
        return new this.Store(this, manager);
      }
    }
  });

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
  get: function (dbKey) {
    return databases.get(dbKey);
  },
  forEach: function (callback) {
    return databases.forEach(callback);
  }
});
//# sourceMappingURL=index.js.map