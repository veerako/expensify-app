'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _AddExpenseDash = require('../../components/AddExpenseDash');

var _expenses = require('../fixtures/expenses');

var _expenses2 = _interopRequireDefault(_expenses);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addExpense = void 0,
    history = void 0,
    wrapper = void 0;

beforeEach(function () {
    addExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_AddExpenseDash.AddExpenseDash, { addExpense: addExpense, history: history }));
});

test('should render add expense page correctly', function () {

    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', function () {

    wrapper.find('ExpenseForm').prop('onSubmit')(_expenses2.default[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addExpense).toHaveBeenLastCalledWith(_expenses2.default[1]);
});