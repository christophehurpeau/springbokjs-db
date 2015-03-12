"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Criteria = exports.Criteria = (function () {
    function Criteria() {
        _classCallCheck(this, Criteria);

        this.criteria = {};
    }

    _prototypeProperties(Criteria, null, {
        fieldEquals: {
            value: function fieldEquals(field, value) {
                this.criteria.field = value;
            },
            writable: true,
            configurable: true
        },
        fieldNotEquals: {
            value: function fieldNotEquals(field, value) {
                this.criteria.field = { $not: value };
            },
            writable: true,
            configurable: true
        },
        fieldInValues: {
            value: function fieldInValues(field, values) {
                this.criteria.field = { $in: values };
            },
            writable: true,
            configurable: true
        },
        or: {
            value: function or(iterable) {
                if (this.criteria.$or) {
                    throw new Error("This criteria already have an or condition");
                }
                this.criteria.$or = iterable.map(function (c) {
                    return c instanceof Criteria ? c.criteria : c;
                });
            },
            writable: true,
            configurable: true
        }
    });

    return Criteria;
})();
Object.defineProperty(exports, "__esModule", {
    value: true
});
//# sourceMappingURL=Criteria.js.map