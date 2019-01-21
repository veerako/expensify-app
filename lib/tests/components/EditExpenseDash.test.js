'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _expenses = require('../fixtures/expenses');

var _expenses2 = _interopRequireDefault(_expenses);

var _EditExpenseDash = require('../../components/EditExpenseDash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var editExpense = void 0,
    removeExpense = void 0,
    history = void 0,
    wrapper = void 0;

beforeEach(function () {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_EditExpenseDash.EditExpenseDash, {
        editExpense: editExpense,
        removeExpense: removeExpense,
        history: history,
        expense: _expenses2.default[2] }));
});

test('should render EditExpenseDash', function () {
    expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', function () {
    wrapper.find('ExpenseForm').prop('onSubmit')(_expenses2.default[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(_expenses2.default[2].id, _expenses2.default[2]);
});

test('should handle removeExpense', function () {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({
        id: _expenses2.default[2].id
    });
});