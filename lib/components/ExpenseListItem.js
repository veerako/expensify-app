'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//desc amount createdAt exp a stateless 
var ExpenseListItem = function ExpenseListItem(_ref) {
  var id = _ref.id,
      description = _ref.description,
      amount = _ref.amount,
      createdAt = _ref.createdAt;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: '/edit/' + id },
      _react2.default.createElement(
        'h3',
        null,
        ' ',
        description,
        ' '
      )
    ),
    _react2.default.createElement(
      'p',
      null,
      amount,
      ' - ',
      createdAt
    )
  );
};

exports.default = ExpenseListItem;