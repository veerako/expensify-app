'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = require('react-redux');

var _AppRouter = require('./routers/AppRouter');

var _AppRouter2 = _interopRequireDefault(_AppRouter);

var _configureStore = require('./store/configureStore');

var _configureStore2 = _interopRequireDefault(_configureStore);

var _expenses = require('./actions/expenses');

var _filters = require('./actions/filters');

var _expenses2 = require('./selectors/expenses');

var _expenses3 = _interopRequireDefault(_expenses2);

require('react-dates/lib/css/_datepicker.css');

require('react-dates/initialize');

require('normalize.css/normalize.css');

require('./styles/styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _configureStore2.default)();
var jsx = _react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(_AppRouter2.default, null)
);

_reactDom2.default.render(jsx, document.getElementById('app'));

/*store.dispatch(addExpense({description: 'Water bill', amount: 5000}));
store.dispatch(addExpense({description: 'Gas bill', createdAt: 1000 }));
store.dispatch(addExpense({description: 'rent', amount: 105000}));
store.dispatch(setTextFilter('water'));
setTimeout(() => {
    store.dispatch(setTextFilter('bill'));

}, 3000)

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
console.log(visibleExpenses);*/

//addExpense
//setTextFilter
//getVisibleExpenses