'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _ExpenseDash = require('../components/ExpenseDash');

var _ExpenseDash2 = _interopRequireDefault(_ExpenseDash);

var _AddExpenseDash = require('../components/AddExpenseDash');

var _AddExpenseDash2 = _interopRequireDefault(_AddExpenseDash);

var _EditExpenseDash = require('../components/EditExpenseDash');

var _EditExpenseDash2 = _interopRequireDefault(_EditExpenseDash);

var _HelpExpenseDash = require('../components/HelpExpenseDash');

var _HelpExpenseDash2 = _interopRequireDefault(_HelpExpenseDash);

var _NotFoundPage = require('../components/NotFoundPage');

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppRouter = function AppRouter() {
    return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_Header2.default, null),
            _react2.default.createElement(
                _reactRouterDom.Switch,
                null,
                _react2.default.createElement(_reactRouterDom.Route, { path: '/', component: _ExpenseDash2.default, exact: true }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/create', component: _AddExpenseDash2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/edit/:id', component: _EditExpenseDash2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/help', component: _HelpExpenseDash2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { component: _NotFoundPage2.default })
            )
        )
    );
};
exports.default = AppRouter;

function newFunction() {
    return _react2.default.createElement(_Header2.default, null);
}