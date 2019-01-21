'use strict';

var _expenses = require('../../selectors/expenses');

var _expenses2 = _interopRequireDefault(_expenses);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _expenses3 = require('../fixtures/expenses');

var _expenses4 = _interopRequireDefault(_expenses3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('should filter by text value', function () {
    var filters = {
        text: 'e',
        sorttBy: 'date',
        startDate: undefined,
        endDate: undefined

    };
    var result = (0, _expenses2.default)(_expenses4.default, filters);
    expect(result).toEqual([_expenses4.default[1], _expenses4.default[2]]);
});

test('should filter by startDate', function () {
    var filters = {
        text: '',
        sorttBy: 'date',
        startDate: (0, _moment2.default)(0),
        endDate: undefined

    };
    var result = (0, _expenses2.default)(_expenses4.default, filters);
    expect(result).toEqual([_expenses4.default[0], _expenses4.default[2]]);
});

test('should filter by endDate', function () {
    var filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: (0, _moment2.default)(0).add(2, 'days')
    };
    var result = (0, _expenses2.default)(_expenses4.default, filters);
    expect(result).toEqual([_expenses4.default[0], _expenses4.default[1]]);
});

test('should sort by date', function () {
    var filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    var result = (0, _expenses2.default)(_expenses4.default, filters);
    expect(result).toEqual([_expenses4.default[2], _expenses4.default[0], _expenses4.default[1]]);
});

test('should filter by amount', function () {
    var filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    var result = (0, _expenses2.default)(_expenses4.default, filters);
    expect(result).toEqual([_expenses4.default[2], _expenses4.default[1], _expenses4.default[0]]);
});