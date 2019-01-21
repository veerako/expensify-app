'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
//SET_TEXT_FILTER
var setTextFilter = exports.setTextFilter = function setTextFilter() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return {
        type: 'SET_TEXT_FILTER',
        text: text

    };
};

//SORT_BY_DATE

var sortByDate = exports.sortByDate = function sortByDate(date) {
    return {
        type: 'SORT_BY_DATE',
        date: date

    };
};
//SORT_BY_AMOUNT

var sortByAmount = exports.sortByAmount = function sortByAmount(amount) {
    return {
        type: 'SORT_BY_AMOUNT',
        amount: amount
    };
};
//SET_START_DATE

var setStartDate = exports.setStartDate = function setStartDate(startDate) {
    return {
        type: 'SET_START_DATE',
        startDate: startDate
    };
};

//SET_END_DATE

var setEndDate = exports.setEndDate = function setEndDate(endDate) {
    return {
        type: 'SET_END_DATE',
        endDate: endDate

    };
};