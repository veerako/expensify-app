
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize'



import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();
const jsx = (
    <Provider store = {store}>
    <AppRouter/>
     </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

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

 



