"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var Criteria = exports.Criteria = (function () {
    function Criteria() {
        _classCallCheck(this, Criteria);

        this.criteria = {};
    }

    _createClass(Criteria, {
        fieldEquals: {
            value: function fieldEquals(field, value) {
                this.criteria.field = value;
            }
        },
        fieldNotEquals: {
            value: function fieldNotEquals(field, value) {
                this.criteria.field = { $not: value };
            }
        },
        fieldInValues: {
            value: function fieldInValues(field, values) {
                this.criteria.field = { $in: values };
            }
        },
        or: {
            value: function or(iterable) {
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
//# sourceMappingURL=Criteria.js.map