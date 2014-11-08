"use strict";

var Criteria = function() {
  var Criteria = function Criteria() {
      this.criteria = {};
  };

  Object.defineProperties(Criteria.prototype, {
    fieldEquals: {
      writable: true,

      value: function(field, value) {
          this.criteria.field = value;
      }
    },

    fieldNotEquals: {
      writable: true,

      value: function(field, value) {
          this.criteria.field = { $not: value };
      }
    },

    fieldInValues: {
      writable: true,

      value: function(field, values) {
          this.criteria.field = { $in: values };
      }
    },

    or: {
      writable: true,

      value: function(iterable) {
          if (this.criteria.$or) {
              throw new Error('This criteria already have an or condition');
          }
          this.criteria.$or = iterable.map(function(c) {
            return c instanceof Criteria ? c.criteria : c;
          });
      }
    }
  });

  return Criteria;
}();

exports.Criteria = Criteria;

//# sourceMappingURL=Criteria.js.map