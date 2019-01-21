'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _ExpenseList = require('../../components/ExpenseList');

var _expenses = require('../fixtures/expenses');

var _expenses2 = _interopRequireDefault(_expenses);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('should render ExpenseList with expenses', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_ExpenseList.ExpenseList, { expenses: _expenses2.default }));
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseList with empty message', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_ExpenseList.ExpenseList, { expenses: [] }));
    expect(wrapper).toMatchSnapshot();
});