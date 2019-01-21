'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _reactDates = require('react-dates');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

;

var now = (0, _moment2.default)();
console.log(now.format("MMM Do, YYYY"));

var ExpenseForm = function (_React$Component) {
    _inherits(ExpenseForm, _React$Component);

    function ExpenseForm(props) {
        _classCallCheck(this, ExpenseForm);

        var _this = _possibleConstructorReturn(this, (ExpenseForm.__proto__ || Object.getPrototypeOf(ExpenseForm)).call(this, props));

        _this.onDescriptionChange = function (e) {
            var description = e.target.value;
            _this.setState(function () {
                return { description: description };
            });
        };

        _this.onNoteChange = function (e) {
            var note = e.target.value;
            _this.setState(function () {
                return { note: note };
            });
        };

        _this.onAmountChange = function (e) {
            var amount = e.target.value;
            if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
                _this.setState(function () {
                    return { amount: amount };
                });
            }
        };

        _this.onDateChange = function (createdAt) {
            if (createdAt) {
                _this.setState(function () {
                    return { createdAt: createdAt };
                });
            }
        };

        _this.onFocusChange = function (_ref) {
            var focused = _ref.focused;

            _this.setState(function () {
                return { calendarFocused: focused };
            });
        };

        _this.onSubmit = function (e) {
            e.preventDefault();
            if (!_this.state.description || !_this.state.amount) {
                _this.setState(function () {
                    return { error: 'pls provide desc/amount' };
                });
            } else {
                _this.setState(function () {
                    return { error: '' };
                });
                _this.props.onSubmit({
                    description: _this.state.description,
                    amount: parseFloat(_this.state.amount, 10) * 100,
                    createdAt: _this.state.createdAt.valueOf(),
                    note: _this.state.note
                });
            }
        };

        _this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? (0, _moment2.default)(props.expense.createdAt) : (0, _moment2.default)(),
            calendarFocused: false,
            error: ''

        };
        return _this;
    }
    //handlers


    _createClass(ExpenseForm, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                this.state.error && _react2.default.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                _react2.default.createElement(
                    'form',
                    { onSubmit: this.onSubmit },
                    _react2.default.createElement('input', { type: 'text',
                        placeholder: 'Description',
                        autoFocus: true,
                        value: this.state.description,
                        onChange: this.onDescriptionChange }),
                    _react2.default.createElement('input', { type: 'number',
                        placeholder: 'Amount',
                        value: this.state.amount,
                        onChange: this.onAmountChange
                    }),
                    _react2.default.createElement(_reactDates.SingleDatePicker, {
                        date: this.state.createdAt,
                        onDateChange: this.onDateChange,
                        focused: this.state.calendarFocused,
                        onFocusChange: this.onFocusChange,
                        numberOfMonths: 1,
                        isOutsideRange: function isOutsideRange() {
                            return false;
                        }
                    }),
                    _react2.default.createElement('textarea', {
                        placeholder: 'Add a note(optional)',
                        value: this.state.note,
                        onChange: this.onNoteChange
                    }),
                    _react2.default.createElement(
                        'button',
                        null,
                        'Add Expense'
                    )
                )
            );
        }
    }]);

    return ExpenseForm;
}(_react2.default.Component);

exports.default = ExpenseForm;