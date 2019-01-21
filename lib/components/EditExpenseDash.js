'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EditExpenseDash = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _ExpenseForm = require('./ExpenseForm');

var _ExpenseForm2 = _interopRequireDefault(_ExpenseForm);

var _expenses = require('../actions/expenses');

var _externalEditor = require('external-editor');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditExpenseDash = exports.EditExpenseDash = function (_React$Component) {
    _inherits(EditExpenseDash, _React$Component);

    function EditExpenseDash() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, EditExpenseDash);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EditExpenseDash.__proto__ || Object.getPrototypeOf(EditExpenseDash)).call.apply(_ref, [this].concat(args))), _this), _this.onSubmit = function (expense) {
            _this.props.editExpense(_this.props.expense.id, expense);
            _this.props.history.push('/');
        }, _this.onRemove = function () {
            _this.props.removeExpense({ id: _this.props.expense.id });
            _this.props.history.push('/');
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(EditExpenseDash, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_ExpenseForm2.default, {
                    expense: this.props.expense,
                    onSubmit: this.onSubmit
                }),
                _react2.default.createElement(
                    'button',
                    { onClick: this.onRemove },
                    'Remove'
                )
            );
        }
    }]);

    return EditExpenseDash;
}(_react2.default.Component);

;

var mapStateToProps = function mapStateToProps(state, props) {
    return {
        expense: state.expenses.find(function (expense) {
            return expense.id === props.match.params.id;
        })
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
    return {
        editExpense: function editExpense(id, expense) {
            return dispatch((0, _expenses.editExpense)(id, expense));
        },
        removeExpense: function removeExpense(data) {
            return dispatch((0, _expenses.removeExpense)(data));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(EditExpenseDash);