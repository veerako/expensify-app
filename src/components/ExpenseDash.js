import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
const ExpenseDash = () =>(
    <div>
    <ExpenseListFilters/>
    <ExpenseList/>
    </div>

);
export default ExpenseDash;