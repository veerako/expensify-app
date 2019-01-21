'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = require('react-router-dom');

require('normalize.css/normalize.css');

require('./styles/styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ExpenseDash = function ExpenseDash() {
    return _react2.default.createElement(
        'div',
        null,
        'this is from dashboard'
    );
};
var AddExpenseDash = function AddExpenseDash() {
    return _react2.default.createElement(
        'div',
        null,
        'add expense'
    );
};
var EditExpenseDash = function EditExpenseDash() {
    return _react2.default.createElement(
        'div',
        null,
        'Edit details'
    );
};
var HelpExpenseDash = function HelpExpenseDash() {
    return _react2.default.createElement(
        'div',
        null,
        'Help!'
    );
};
var NotFoundPage = function NotFoundPage() {
    return _react2.default.createElement(
        'div',
        null,
        '404 page not found ',
        _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/' },
            'Go Home'
        )
    );
};

var Header = function Header() {
    return _react2.default.createElement(
        'header',
        null,
        _react2.default.createElement(
            'h1',
            null,
            ' Expensify '
        ),
        _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
                _reactRouterDom.NavLink,
                { to: '/', activeClassName: 'is-active', exact: true },
                ' Dashboard '
            )
        ),
        _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
                _reactRouterDom.NavLink,
                { to: '/create', activeClassName: 'is-active' },
                ' Create page '
            )
        ),
        _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
                _reactRouterDom.NavLink,
                { to: '/edit', activeClassName: 'is-active' },
                ' Edit page '
            )
        ),
        _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
                _reactRouterDom.NavLink,
                { to: '/help', activeClassName: 'is-active' },
                ' Help page '
            )
        )
    );
};

var routes = _react2.default.createElement(
    _reactRouterDom.BrowserRouter,
    null,
    _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(Header, null),
        _react2.default.createElement(
            _reactRouterDom.Switch,
            null,
            _react2.default.createElement(_reactRouterDom.Route, { path: '/', component: ExpenseDash, exact: true }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/create', component: AddExpenseDash }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/edit', component: EditExpenseDash }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/help', component: HelpExpenseDash }),
            _react2.default.createElement(_reactRouterDom.Route, { component: NotFoundPage })
        )
    )
);
_reactDom2.default.render(routes, document.getElementById('app'));