"use strict";
var QFind = require('./QFind').QFind;

var QFindOne = function(QFind) {
  var QFindOne = function QFindOne() {
    QFind.apply(this, arguments);
  };

  QFindOne.prototype = Object.create(QFind.prototype, {
    constructor: {
      value: QFindOne,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  QFindOne.__proto__ = QFind;

  Object.defineProperties(QFindOne.prototype, {
    fetch: {
      writable: true,

      value: function() {
        var _this = this;
        //console.log('Fetching on ' + this.VO.modelName + ': query=', this._query, ', options=', this.options);

        return this.manager.executeHooks(['beforeFind', 'beforeFindOne'], this.options)
            .then(function() {
                return _this.manager.store.findOne(_this._query, _this.options);
            }).then(function(result) {
                return result ? _this.manager.toVO(result) : result;
            });
      }
    },

    byId: {
      writable: true,

      value: function(id) {
          this._query = { _id: this.manager.store.toId(id) };
          return this;
      }
    },

    notNull: {
      writable: true,

      value: function() {
          return this.fetch().then(function(result) {
              if (result === null) {
                  var error = new Error('Failed to find the object');
                  error.status = 404;
                  return Promise.reject(error);
              }
              return result;
          });
      }
    }
  });

  return QFindOne;
}(QFind);

exports.QFindOne = QFindOne;

//# sourceMappingURL=../find/QFindOne.js.map