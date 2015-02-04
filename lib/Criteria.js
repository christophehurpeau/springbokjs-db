"use strict";

var Criteria = (function () {
  var Criteria = function Criteria() {
    this.criteria = {};
  };

  Criteria.prototype.fieldEquals = function (field, value) {
    this.criteria.field = value;
  };

  Criteria.prototype.fieldNotEquals = function (field, value) {
    this.criteria.field = { $not: value };
  };

  Criteria.prototype.fieldInValues = function (field, values) {
    this.criteria.field = { $in: values };
  };

  Criteria.prototype.or = function (iterable) {
    if (this.criteria.$or) {
      throw new Error("This criteria already have an or condition");
    }
    this.criteria.$or = iterable.map(function (c) {
      return c instanceof Criteria ? c.criteria : c;
    });
  };

  return Criteria;
})();

exports.Criteria = Criteria;
//# sourceMappingURL=Criteria.js.map