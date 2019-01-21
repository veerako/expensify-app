'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _redux = require('redux');

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//ADD_EXPENSE
var addExpense = function addExpense() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$description = _ref.description,
        description = _ref$description === undefined ? '' : _ref$description,
        _ref$note = _ref.note,
        note = _ref$note === undefined ? '' : _ref$note,
        _ref$amount = _ref.amount,
        amount = _ref$amount === undefined ? 0 : _ref$amount,
        _ref$createdAt = _ref.createdAt,
        createdAt = _ref$createdAt === undefined ? 0 : _ref$createdAt;

    return {
        type: 'ADD_EXPENSE',
        expense: {
            id: (0, _uuid2.default)(),
            description: description, note: note, createdAt: createdAt, amount: amount
        }

    };
};

//REMOVE_EXPENSE
var removeExpense = function removeExpense() {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        id = _ref2.id;

    return {
        type: 'REMOVE_EXPENSE',
        expense: {}

    };
};

//EDIT_EXPENSE
var editExpense = function editExpense(id, updates) {
    return {
        type: 'EDIT_EXPENSE',
        id: id,
        updates: updates
    };
};

//SET_TEXT_FILTER
var setTextFilter = function setTextFilter() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return {
        type: 'SET_TEXT_FILTER',
        text: text

    };
};

//SORT_BY_DATE

var sortByDate = function sortByDate() {
    return {
        type: 'SORT_BY_DATE'

    };
};
//SORT_BY_AMOUNT

var sortByAmount = function sortByAmount() {
    return {
        type: 'SORT_BY_AMOUNT'

    };
};
//SET_START_DATE

var setStartDate = function setStartDate(startDate) {
    return {
        type: 'SET_START_DATE',
        startDate: startDate
    };
};

//SET_END_DATE

var setEndDate = function setEndDate(endDate) {
    return {
        type: 'SET_END_DATE',
        endDate: endDate

    };
};

//Expenses reducer
var expensesReducerDefaultState = [];
var expensesReducer = function expensesReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : expensesReducerDefaultState;
    var action = arguments[1];

    switch (action.type) {

        case 'ADD_EXPENSE':
            return [].concat(_toConsumableArray(state), [action.expense]);

        case 'REMOVE_EXPENSE':
            return state.filter(function (_ref3) {
                var id = _ref3.id;
                return id !== action.id;
            });

        case 'EDIT_EXPENSE':
            return state.map(function (expense) {
                if (expense.id === action.id) {
                    return _extends({}, expense, action.updates);
                } else {
                    return expense;
                }
            });

        default:
            return state;

    }
};
//Filters reducer
var filtersReducerDefault = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
var filtersReducer = function filtersReducer() {
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

// Get visible expenses 
var getVisibleExpenses = function getVisibleExpenses(expenses, _ref4) {
    var text = _ref4.text,
        sortBy = _ref4.sortBy,
        startDate = _ref4.startDate,
        endDate = _ref4.endDate;

    return expenses.filter(function (expense) {
        var startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        var endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        var textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort(function (a, b) {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

//store creation
var store = (0, _redux.createStore)((0, _redux.combineReducers)({
    expenses: expensesReducer,
    filters: filtersReducer
})); // combineReducers take argument as obj key value pair


store.subscribe(function () {
    var state = store.getState();
    var visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

var expense1 = store.dispatch(addExpense({ description: 'rent', amount: 50, createdAt: -21000 }));
var expense2 = store.dispatch(addExpense({ description: 'food', amount: 1000, createdAt: -1000 }));
/*
store.dispatch(removeExpense({id : expense1.expense.id}))
store.dispatch(editExpense(expense2.expense.id,{ amount: 11}));
store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter());
store.dispatch(sortByAmount());
store.dispatch(sortByDate());

store.dispatch(setStartDate(125));
store.dispatch(setStartDate());
store.dispatch(setEndDate(1250));
*/
store.dispatch(sortByAmount());

var demoState = {
    expenses: [{
        id: 'kvk',
        description: ' rent',
        note: 'final rent',
        amount: 2751,
        createdAt: 0
    }], //array

    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount 
        startDate: undefined,
        endDate: undefined //object
    } };

var user = {
    name: 'na',
    age: 25
};
console.log(_extends({
    age: 26
}, user, {
    location: 'Sunnyvale'

}));