'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header() {
    return _react2.default.createElement(
        'header',
        null,
        _react2.default.createElement(
            'h1',
            null,
            'Expensify'
        ),
        _react2.default.createElement(
            _reactRouterDom.NavLink,
            { to: '/', activeClassName: 'is-active', exact: true },
            ' Dashboard '
        ),
        _react2.default.createElement(
            _reactRouterDom.NavLink,
            { to: '/create', activeClassName: 'is-active' },
            ' Create page '
        ),
        _react2.default.createElement(
            _reactRouterDom.NavLink,
            { to: '/edit', activeClassName: 'is-active' },
            ' Edit page '
        ),
        _react2.default.createElement(
            _reactRouterDom.NavLink,
            { to: '/help', activeClassName: 'is-active' },
            ' Help page '
        )
    );
};
exports.default = Header;