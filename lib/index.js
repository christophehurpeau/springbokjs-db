"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var databases = new Map();

var Db = (function () {
    function Db(dbName, Store, options) {
        _classCallCheck(this, Db);

        this.dbName = dbName;
        options.dbName = dbName;
        this.options = options;
        this.Store = Store;
        this.models = [];
    }

    _createClass(Db, {
        initialize: {
            value: function initialize() {
                var _this = this;

                return this.Store.initialize(this).then(function () {
                    Object.freeze(_this);
                });
            }
        },
        close: {
            value: function close() {
                return this.Store.close(this);
            }
        },
        add: {
            value: function add(vo) {
                this.models.push(vo);
            }
        },
        createStore: {
            value: function createStore(manager) {
                return new this.Store(this, manager);
            }
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