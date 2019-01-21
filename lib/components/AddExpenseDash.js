'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AddExpenseDash = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _ExpenseForm = require('./ExpenseForm');

var _ExpenseForm2 = _interopRequireDefault(_ExpenseForm);

var _expenses = require('../actions/expenses');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddExpenseDash = exports.AddExpenseDash = function (_React$Component) {
    _inherits(AddExpenseDash, _React$Component);

    function AddExpenseDash() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, AddExpenseDash);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AddExpenseDash.__proto__ || Object.getPrototypeOf(AddExpenseDash)).call.apply(_ref, [this].concat(args))), _this), _this.onSubmit = function (expense) {
            _this.props.addExpense(expense);
            _this.props.history.push('/');
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(AddExpenseDash, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h1',
                    null,
                    'add expense'
                ),
                _react2.default.createElement(_ExpenseForm2.default, {
                    onSubmit: this.onSubmit })
            );
        }
    }]);

    return AddExpenseDash;
}(_react2.default.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        addExpense: function addExpense(expense) {
            return dispatch((0, _expenses.addExpense)(expense));
        }
    };
};
exports.default = (0, _reactRedux.connect)(undefined, mapDispatchToProps)(AddExpenseDash);