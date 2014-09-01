var QFind = require('./QFind').QFind;

export class QFindValue extends QFind {
    fetch() {
        return this.fetch().then((result) => {
            if (result) {
                return result[this.options.fields[0]];
            }
            return result;
        });
    }
}
