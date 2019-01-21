'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _expenses = require('../reducers/expenses');

var _expenses2 = _interopRequireDefault(_expenses);

var _filters = require('../reducers/filters');

var _filters2 = _interopRequireDefault(_filters);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    var store = (0, _redux.createStore)((0, _redux.combineReducers)({
        expenses: _expenses2.default,
        filters: _filters2.default
    }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    return store;
};

//store creation