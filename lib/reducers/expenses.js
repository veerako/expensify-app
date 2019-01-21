'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//Expenses reducer
var expensesReducerDefaultState = [];

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : expensesReducerDefaultState;
    var action = arguments[1];

    switch (action.type) {

        case 'ADD_EXPENSE':
            return [].concat(_toConsumableArray(state), [action.expense]);

        case 'REMOVE_EXPENSE':
            return state.filter(function (_ref) {
                var id = _ref.id;
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