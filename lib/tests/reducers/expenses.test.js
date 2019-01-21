'use strict';

var _expenses = require('../../reducers/expenses');

var _expenses2 = _interopRequireDefault(_expenses);

var _expenses3 = require('../fixtures/expenses');

var _expenses4 = _interopRequireDefault(_expenses3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

test('Should set default state', function () {
    var state = (0, _expenses2.default)(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expenses by id', function () {
    var action = {
        type: 'REMOVE_EXPENSE',
        id: _expenses4.default[1].id
    };
    var state = (0, _expenses2.default)(_expenses4.default, action);
    expect(state).toEqual([_expenses4.default[0], _expenses4.default[2]]);
});

test('should not remove expenses if id not found', function () {
    var action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    var state = (0, _expenses2.default)(_expenses4.default, action);
    expect(state).toEqual(_expenses4.default);
});

test('should add an expense', function () {
    var expense = {
        id: '12',
        description: 'laptop',
        note: '',
        createdAt: 20000,
        amount: 432

    };
    var action = {
        type: 'ADD_EXPENSE',
        expense: expense

    };
    var state = (0, _expenses2.default)(_expenses4.default, action);
    expect(state).toEqual([].concat(_toConsumableArray(_expenses4.default), [expense]));
});

test('should edit an expense', function () {
    var amount = 120000;
    var action = {
        type: 'EDIT_EXPENSE',
        id: _expenses4.default[1].id,
        updates: {
            amount: amount
        }
    };
    var state = (0, _expenses2.default)(_expenses4.default, action);
    expect(state[1].amount).toBe(amount);
});

test('should not edit expense if expense not found', function () {
    var amount = 120000;
    var action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount: amount
        }
    };
    var state = (0, _expenses2.default)(_expenses4.default, action);
    expect(state).toEqual(_expenses4.default);
});