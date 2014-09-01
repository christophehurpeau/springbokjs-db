export class AbstractStore {
    constructor(db, manager) {
        this.db = db;
        this.manager = manager;
    }

    toVO(result) {
        return this.manager.toVO(result);
    }

    toId(id) {
        return id;
    }

    updateByKey(key, options) {
        if (!options.data[this.model.keyPath]) {
            throw new Error();
        }
        options.criteria = {};
        options.criteria[this.model.keyPath] = options.data[this.model.keyPath];
        options.data = Object.assign({}, options.data);
        delete options.data[this.model.keyPath];
        this.update(options);
    }
}
