'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ExpenseListFilters = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactDates = require('react-dates');

var _filters = require('../actions/filters');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ExpenseListFilters = exports.ExpenseListFilters = function (_React$Component) {
    _inherits(ExpenseListFilters, _React$Component);

    function ExpenseListFilters() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ExpenseListFilters);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ExpenseListFilters.__proto__ || Object.getPrototypeOf(ExpenseListFilters)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            calendarFocused: null

        }, _this.onDatesChange = function (_ref2) {
            var startDate = _ref2.startDate,
                endDate = _ref2.endDate;

            _this.props.setStartDate(startDate);
            _this.props.setEndDate(endDate);
        }, _this.onFocusChange = function (calendarFocused) {
            _this.setState(function () {
                return { calendarFocused: calendarFocused };
            });
        }, _this.onTextChange = function (e) {
            _this.props.setTextFilter(e.target.value);
        }, _this.onSortChange = function (e) {
            if (e.target.value === 'date') {
                _this.props.sortByDate();
            } else if (e.target.value === 'amount') {
                _this.props.sortByAmount();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ExpenseListFilters, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement('input', {
                    type: 'text',
                    value: this.props.filters.text,
                    onChange: this.onTextChange }),
                _react2.default.createElement(
                    'select',
                    {
                        value: this.props.filters.sortBy,
                        onChange: this.onSortChange },
                    _react2.default.createElement(
                        'option',
                        { value: 'date' },
                        ' Amount '
                    ),
                    _react2.default.createElement(
                        'option',
                        { value: 'amount' },
                        ' Date '
                    )
                ),
                _react2.default.createElement(_reactDates.DateRangePicker, {

                    startDate: this.props.filters.startDate,
                    startDateId: 'start_date_input',
                    endDate: this.props.filters.endDate,
                    endDateId: 'end_date_input',
                    onDatesChange: this.onDatesChange,
                    focusedInput: this.state.calendarFocused,
                    onFocusChange: this.onFocusChange,
                    showClearDates: true,
                    numberOfMonths: 1,
                    isOutsideRange: function isOutsideRange() {
                        return false;
                    }
                })
            );
        }
    }]);

    return ExpenseListFilters;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        filters: state.filters
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        setTextFilter: function setTextFilter(text) {
            return dispatch((0, _filters.setTextFilter)(text));
        },
        sortByDate: function sortByDate() {
            return dispatch((0, _filters.sortByDate)());
        },
        sortByAmount: function sortByAmount() {
            return dispatch((0, _filters.sortByAmount)());
        },
        setStartDate: function setStartDate(startDate) {
            return dispatch((0, _filters.setStartDate)(startDate));
        },
        setEndDate: function setEndDate(endDate) {
            return dispatch((0, _filters.setEndDate)(endDate));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);