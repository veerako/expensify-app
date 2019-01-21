'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ExpenseList = require('./ExpenseList');

var _ExpenseList2 = _interopRequireDefault(_ExpenseList);

var _ExpenseListFilters = require('./ExpenseListFilters');

var _ExpenseListFilters2 = _interopRequireDefault(_ExpenseListFilters);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ExpenseDash = function ExpenseDash() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_ExpenseListFilters2.default, null),
        _react2.default.createElement(_ExpenseList2.default, null)
    );
};
exports.default = ExpenseDash;