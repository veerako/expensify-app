'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Filters reducer

var filtersReducerDefault = {
    text: '',
    sortBy: 'date',
    startDate: (0, _moment2.default)().startOf('month'),
    endDate: (0, _moment2.default)().endOf('month')
};

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : filtersReducerDefault;
    var action = arguments[1];

    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return _extends({}, state, {
                text: action.text
            });
        case 'SORT_BY_AMOUNT':
            return _extends({}, state, {
                sortBy: 'amount'

            });
        case 'SORT_BY_DATE':
            return _extends({}, state, {
                sortBy: 'date'

            });
        case 'SET_START_DATE':
            return _extends({}, state, {
                startDate: action.startDate
            });
        case 'SET_END_DATE':
            return _extends({}, state, {
                endDate: action.endDate
            });
        default:
            return state;
    }
};