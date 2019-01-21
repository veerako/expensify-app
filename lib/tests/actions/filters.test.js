'use strict';

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _filters = require('../../actions/filters');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//1a
test('test case for set text filter', function () {
    var text = 'some text';
    var action = (0, _filters.setTextFilter)(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: text
    });
});
//1b
test('test case for set text filter with default values', function () {
    var action = (0, _filters.setTextFilter)();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});
//2
test('test case for sort by amount', function () {
    var action = (0, _filters.sortByAmount)();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});
//3
test('test case for sort by date', function () {
    var action = (0, _filters.sortByDate)();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});
//4
test('test case for set start date', function () {
    var action = (0, _filters.setStartDate)((0, _moment2.default)(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: (0, _moment2.default)(0)
    });
});
//5
test('test case for set end date', function () {
    var action = (0, _filters.setEndDate)((0, _moment2.default)(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: (0, _moment2.default)(0)
    });
});