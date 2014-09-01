"use strict";
Object.defineProperties(exports, {
  QFindOne: {get: function() {
      return QFindOne;
    }},
  __esModule: {value: true}
});
var $__Object$defineProperty = Object.defineProperty;
var $__Object$create = Object.create;
var $__Object$getPrototypeOf = Object.getPrototypeOf;
var QFind = require('./QFind').QFind;
var QFindOne = function($__super) {
  "use strict";
  function QFindOne() {
    var $__0 = $__Object$getPrototypeOf(QFindOne.prototype);
    if ($__0 !== null)
      $__0.constructor.apply(this, arguments);
  }
  QFindOne.__proto__ = ($__super !== null ? $__super : Function.prototype);
  QFindOne.prototype = $__Object$create(($__super !== null ? $__super.prototype : null));
  $__Object$defineProperty(QFindOne.prototype, "constructor", {value: QFindOne});
  $__Object$defineProperty(QFindOne.prototype, "fetch", {
    value: function() {
      console.log('Fetching on ' + this.VO.modelName + ': query=', this._query, ', options=', this.options);
      return this.manager.executeHooks(['beforeFind', 'beforeFindOne'], this.options).then(function() {
        return this.manager.store.findOne(this._query, this.options);
      }.bind(this)).then(function(result) {
        return result ? this.manager.toVO(result) : result;
      }.bind(this));
    },
    enumerable: false,
    writable: true
  });
  $__Object$defineProperty(QFindOne.prototype, "byId", {
    value: function(id) {
      this._query = {_id: this.manager.store.toId(id)};
      return this;
    },
    enumerable: false,
    writable: true
  });
  $__Object$defineProperty(QFindOne.prototype, "notNull", {
    value: function() {
      return this.fetch().then(function(result) {
        if (result === null) {
          var error = new Error('Failed to find the object');
          error.status = 404;
          return Promise.reject(error);
        }
        return result;
      });
    },
    enumerable: false,
    writable: true
  });
  return QFindOne;
}(QFind);
;

//# sourceMappingURL=../find/QFindOne.js.map