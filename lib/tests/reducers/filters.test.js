'use strict';

var _filters = require('../../reducers/filters');

var _filters2 = _interopRequireDefault(_filters);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('should setup default filter values', function () {
    var state = (0, _filters2.default)(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: (0, _moment2.default)().startOf('month'),
        endDate: (0, _moment2.default)().endOf('month')

    });
});

test('should set sortBy to amount ', function () {
    var state = (0, _filters2.default)(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date ', function () {
    var currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    var action = { type: 'SORT_BY_DATE' };
    var state = (0, _filters2.default)(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should set text filter', function () {
    var text = 'this is my filter';
    var action = { type: 'SET_TEXT_FILTER', text: text };
    var state = (0, _filters2.default)(undefined, action);
    expect(state.text).toBe(text);
});

test('should set startDate filter', function () {
    var startDate = (0, _moment2.default)();
    var action = { type: 'SET_START_DATE',
        startDate: startDate
    };

    var state = (0, _filters2.default)(undefined, action);
    expect(state.startDate).toEqual(startDate);
});

test('should set endDate filter', function () {
    var endDate = (0, _moment2.default)();
    var action = { type: 'SET_END_DATE',
        endDate: endDate
    };

    var state = (0, _filters2.default)(undefined, action);
    expect(state.endDate).toEqual(endDate);
});