'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _ExpenseListFilters = require('../../components/ExpenseListFilters');

var _filters = require('../fixtures/filters');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setTextFilter = void 0,
    sortByDate = void 0,
    sortByAmount = void 0,
    setStartDate = void 0,
    setEndDate = void 0,
    wrapper = void 0;

beforeEach(function () {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_ExpenseListFilters.ExpenseListFilters, {
        filters: _filters.filters,
        setTextFilter: setTextFilter,
        sortByDate: sortByDate,
        sortByAmount: sortByAmount,
        setStartDate: setStartDate,
        setEndDate: setEndDate

    }));
});

test('should render ExpenseListFilters correctly', function () {

    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data correctly', function () {
    wrapper.setProps({
        filters: _filters.altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', function () {
    var value = 'rent';
    wrapper.find('input').simulate('change', {
        target: { value: value }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sort by date', function () {
    var value = 'date';
    wrapper.setProps({
        filters: _filters.altFilters
    });
    wrapper.find('select').simulate('change', {
        target: { value: value }
    });
    expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', function () {
    var value = 'amount';

    wrapper.find('select').simulate('change', {
        target: { value: value }
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes', function () {

    var startDate = (0, _moment2.default)(0).add(4, 'years');
    var endDate = (0, _moment2.default)(0).add(8, 'years');

    wrapper.find('[onDatesChange]').prop('onDatesChange')({ startDate: startDate, endDate: endDate });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});
test('should handle date focus changes', function () {

    var calendarFocused = 'endDate';
    wrapper.find('[onDatesChange]').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});