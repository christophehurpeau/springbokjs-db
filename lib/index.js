"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var databases = global.springbokDatabases = global.springbokDatabases || new Map();

var Db = (function () {
    function Db(dbName, Store, options) {
        _classCallCheck(this, Db);

        this.dbName = dbName;
        options.dbName = dbName;
        this.options = options;
        this.Store = Store;
        this.models = [];
    }

    _prototypeProperties(Db, null, {
        initialize: {
            value: function initialize() {
                var _this = this;
                return this.Store.initialize(this).then(function () {
                    Object.freeze(_this);
                });
            },
            writable: true,
            configurable: true
        },
        close: {
            value: function close() {
                return this.Store.close(this);
            },
            writable: true,
            configurable: true
        },
        add: {
            value: function add(vo) {
                this.models.push(vo);
            },
            writable: true,
            configurable: true
        },
        createStore: {
            value: function createStore(manager) {
                return new this.Store(this, manager);
            },
            writable: true,
            configurable: true
        }
    });

    return Db;
})();

module.exports = Object.freeze({
    initialize: function initialize(config, getStore) {
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
    close: function close() {
        databases.forEach(function (db) {
            return db.close();
        });
    },
    get: function get(dbKey) {
        return databases.get(dbKey);
    },
    forEach: function forEach(callback) {
        return databases.forEach(callback);
    }
});
//# sourceMappingURL=index.js.map