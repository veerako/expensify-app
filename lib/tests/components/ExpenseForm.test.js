'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _ExpenseForm = require('../../components/ExpenseForm');

var _ExpenseForm2 = _interopRequireDefault(_ExpenseForm);

var _expenses = require('../fixtures/expenses');

var _expenses2 = _interopRequireDefault(_expenses);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('should render ExpenseForm correctly', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_ExpenseForm2.default, null));
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm correctly with expense data', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_ExpenseForm2.default, { expense: _expenses2.default[1] }));
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_ExpenseForm2.default, null));
    wrapper.find('form').simulate('submit', { preventDefault: function preventDefault() {} });

    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', function () {
    var value = 'New description';
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_ExpenseForm2.default, null));
    wrapper.find('input').at(0).simulate('change', {
        target: { value: value }
    });
    expect(wrapper.state('description')).toBe(value);
    //expect(wrapper).toMatchSnapshot();
});

test('should set note on text area change', function () {
    var value = 'New note value';
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_ExpenseForm2.default, null));
    wrapper.find('textarea').simulate('change', {
        target: { value: value }
    });
    expect(wrapper.state('note')).toBe(value);
    //expect(wrapper).toMatchSnapshot();
});

test('should set amount if valid input', function () {
    var value = '23.50';
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_ExpenseForm2.default, null));
    wrapper.find('input').at(1).simulate('change', {
        target: { value: value }
    });
    expect(wrapper.state('amount')).toBe(value);
    //expect(wrapper).toMatchSnapshot();
});

test('should not set amount if invalid input', function () {
    var value = '5.5555';
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_ExpenseForm2.default, null));
    wrapper.find('input').at(1).simulate('change', {
        target: { value: value }
    });
    expect(wrapper.state('amount')).toBe('');
    //expect(wrapper).toMatchSnapshot();
});

test('should call onSubmit prop for valid form submission', function () {
    var onSubmitSpy = jest.fn();
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_ExpenseForm2.default, { expense: _expenses2.default[0], onSubmit: onSubmitSpy }));
    wrapper.find('form').simulate('submit', { preventDefault: function preventDefault() {} });

    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: _expenses2.default[0].description,
        amount: _expenses2.default[0].amount,
        note: _expenses2.default[0].note,
        createdAt: _expenses2.default[0].createdAt
    });
});

test('should set new date on new date chnage', function () {
    var now = (0, _moment2.default)();
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_ExpenseForm2.default, null));
    wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now); //lec 123 help page
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calendar focus on chnage', function () {
    var focused = true;
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_ExpenseForm2.default, null));
    wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({ focused: focused });
    expect(wrapper.state('calendarFocused')).toBe(focused);
});