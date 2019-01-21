'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _expenses = require('../../actions/expenses');

test('should setup remove expense action object', function () {
    var action = (0, _expenses.removeExpense)({ id: 'kvk' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'kvk'

    });
});

test('should setup edit expense action object', function () {
    var action = (0, _expenses.editExpense)('veera', { note: 'Hi' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'veera',
        updates: {
            note: 'Hi'
        }
    });
});

test('should setup add expense action object', function () {
    var expenseData = {
        description: 'rent',
        note: 'last month',
        amount: 1000,
        createdAt: 1000
    };
    var action = (0, _expenses.addExpense)(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: _extends({}, expenseData, {
            id: expect.any(String)
        })

    });
});

test('should setup add expense action object with default values', function () {

    var action = (0, _expenses.addExpense)();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {

            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }

    });
});

//Objects arrays toEqual, numbers booleans strings toBe