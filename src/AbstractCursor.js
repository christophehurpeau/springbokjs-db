export class AbstractCursor {
    result() {
        return this._store.findByKey(this.key, {});
    }

    vo() {
        return this.result().then(this._store.toVO.bind(this._store));
    }

    remove() {
        return this._store.deleteByKey(this.primaryKey);
    }

    forEach(callback) {
        return this.forEachKeys(this.vo.bind(this, callback));
    }
}
