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

    get keyPath() {
        return this.manager.VO.keyPath || 'id';
    }

    updateByKey(options) {
        var keyPath = this.keyPath;
        if (!options.key) {
            throw new Error('Missing property key in options');
        }
        options.partialUpdate = options.data !== options.fullData;
        options.criteria = {};
        options.criteria[keyPath] = options.key;
        options.data = Object.assign({}, options.data);
        delete options.data[keyPath];
        this.update(options);
    }

    removeByKey(options) {
        var keyPath = this.keyPath;
        if (!options.key) {
            throw new Error('Missing property key in options');
        }
        options.criteria = {};
        options.criteria[keyPath] = options.key;
        this.remove(options);
    }
}
