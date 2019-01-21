'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _NotFoundPage = require('../../components/NotFoundPage');

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('Should render NotFoundPagee correctly', function () {

    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_NotFoundPage2.default, null));
    expect(wrapper).toMatchSnapshot();
});