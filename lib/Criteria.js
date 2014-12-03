"use strict";

var _classProps = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var Criteria = (function () {
  var Criteria = function Criteria() {
    this.criteria = {};
  };

  _classProps(Criteria, null, {
    fieldEquals: {
      writable: true,
      value: function (field, value) {
        this.criteria.field = value;
      }
    },
    fieldNotEquals: {
      writable: true,
      value: function (field, value) {
        this.criteria.field = { $not: value };
      }
    },
    fieldInValues: {
      writable: true,
      value: function (field, values) {
        this.criteria.field = { $in: values };
      }
    },
    or: {
      writable: true,
      value: function (iterable) {
        if (this.criteria.$or) {
          throw new Error("This criteria already have an or condition");
        }
        this.criteria.$or = iterable.map(function (c) {
          return c instanceof Criteria ? c.criteria : c;
        });
      }
    }
  });

  return Criteria;
})();

exports.Criteria = Criteria;
//# sourceMappingURL=Criteria.js.map