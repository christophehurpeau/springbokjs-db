var QFind = require('./QFind').QFind;

export class QFindOne extends QFind {
    fetch() {
        //console.log('Fetching on ' + this.VO.modelName + ': query=', this._query, ', options=', this.options);

        return this.manager.executeHooks(['beforeFind', 'beforeFindOne'], this.options)
            .then(() => {
                return this.manager.store.findOne(this._query, this.options);
            }).then((result) => {
                return result ? this.manager.toVO(result) : result;
            });
    }

    byId(id) {
        this._query = { _id: this.manager.store.toId(id) };
        return this;
    }

    notNull() {
        return this.fetch().then((result) => {
            if (result === null) {
                var error = new Error('Failed to find the object');
                error.status = 404;
                return Promise.reject(error);
            }
            return result;
        });
    }
}
