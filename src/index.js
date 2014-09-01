var databases = new Map();

class Db {
    constructor(dbName, options) {
        this.dbName = dbName;
        options.dbName = dbName;
        this.options = options;
        this.Store = require('springbokjs-db-' + (options.type || 'mongo'));
        this.models = [];
    }

    initialize() {
        return this.Store.initialize(this).then(() => {
            Object.freeze(this);
        });
    }

    add(vo) {
        this.models.push(vo);
    }

    createStore(manager) {
        return new this.Store(this, manager);
    }
}


module.exports = Object.freeze({
    initialize(config) {
        if (!config) {
            return;
        }
        return Promise.all(Object.keys(config).map((dbKey) => {
            var dbConfig = config[dbKey];
            var db = new Db(dbConfig.dbName, dbConfig);
            databases.set(dbKey, db);
            return db.initialize();
        }));
    },
    get(dbKey) {
        return databases.get(dbKey);
    },
    forEach(callback) {
        return databases.forEach(callback);
    }
});
