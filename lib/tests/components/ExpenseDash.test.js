'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _ExpenseDash = require('../../components/ExpenseDash');

var _ExpenseDash2 = _interopRequireDefault(_ExpenseDash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('Should render header correctly', function () {

    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_ExpenseDash2.default, null));
    expect(wrapper).toMatchSnapshot();
});