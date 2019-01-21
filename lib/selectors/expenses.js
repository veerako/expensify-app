'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Get visible expenses 
exports.default = function (expenses, _ref) {
    var text = _ref.text,
        sortBy = _ref.sortBy,
        startDate = _ref.startDate,
        endDate = _ref.endDate;

    return expenses.filter(function (expense) {
        var createdAtMoment = (0, _moment2.default)(expense.createdAt);
        var startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        var endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        var textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort(function (a, b) {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};