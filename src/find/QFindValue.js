var QFind = require('./QFind').QFind;

export class QFindValue extends QFind {
    fetch(callback) {
        return this.fetch().then((result) => {
            if (result) {
                return result[this.options.fields[0]];
            }
            return callback ? callback(result) : result;
        });
    }
}
