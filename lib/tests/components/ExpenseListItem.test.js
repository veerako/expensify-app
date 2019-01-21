'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _ExpenseListItem = require('../../components/ExpenseListItem');

var _ExpenseListItem2 = _interopRequireDefault(_ExpenseListItem);

var _expenses = require('../fixtures/expenses');

var _expenses2 = _interopRequireDefault(_expenses);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('should render ExpenseListItem correctly', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_ExpenseListItem2.default, _expenses2.default[0]));
    expect(wrapper).toMatchSnapshot();
});