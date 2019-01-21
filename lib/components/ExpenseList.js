'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ExpenseList = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _ExpenseListItem = require('./ExpenseListItem');

var _ExpenseListItem2 = _interopRequireDefault(_ExpenseListItem);

var _expenses = require('../selectors/expenses');

var _expenses2 = _interopRequireDefault(_expenses);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ExpenseList = exports.ExpenseList = function ExpenseList(props) {
    return _react2.default.createElement(
        'div',
        null,
        props.expenses.length === 0 ? _react2.default.createElement(
            'p',
            null,
            'No expenses'
        ) : props.expenses.map(function (expense) {

            return _react2.default.createElement(_ExpenseListItem2.default, _extends({ key: expense.id }, expense));
        })
    );
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        expenses: (0, _expenses2.default)(state.expenses, state.filters)
    };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps)(ExpenseList);
/*const ConnectedExpList = connect()(ExpenseList);
export default ConnectedExpList;*/