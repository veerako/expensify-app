'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Header = require('../../components/Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('Should render header correctly', function () {

    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Header2.default, null));
    expect(wrapper).toMatchSnapshot();
});

//expect(wrapper.find('h1').text()).toEqual('Expensify');
//const renderer = new ReactShallowRenderer();
//renderer.render(<Header/>);
//expect(renderer.getRenderOutput()).toMatchSnapshot();
// react-test-renderer
//shallow rendering only renders  given component
//full dom rendering renders child components too
//snapshot allows us to keep a track of changes to data over time