'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//higher order component
//Reuse code 
//render hijacking
//prop manipulation
//Abstract state

var Info = function Info(props) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h1',
            null,
            ' Info '
        ),
        _react2.default.createElement(
            'p',
            null,
            ' info is: ',
            props.info
        )
    );
};

var withAdminWarning = function withAdminWarning(WrappedComponent) {
    return function (props) {
        return _react2.default.createElement(
            'div',
            null,
            props.isAdmin && _react2.default.createElement(
                'p',
                null,
                ' private info '
            ),
            _react2.default.createElement(WrappedComponent, props)
        );
    };
};
//require authentication

var requireAuth = function requireAuth(WrappedComponent) {
    return function (props) {
        return _react2.default.createElement(
            'div',
            null,
            props.isAuth ? _react2.default.createElement(WrappedComponent, props) : _react2.default.createElement(
                'p',
                null,
                'pls login to view this info'
            )
        );
    };
};

var AdminInfo = withAdminWarning(Info);
var AuthInfo = requireAuth(Info);
//ReactDOM.render(<AdminInfo isAdmin={true} info = "hi"/>, document.getElementById('app'));
_reactDom2.default.render(_react2.default.createElement(AuthInfo, { isAuth: true, info: 'hello' }), document.getElementById('app'));