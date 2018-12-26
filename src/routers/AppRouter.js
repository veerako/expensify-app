import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import ExpenseDash from '../components/ExpenseDash';
import AddExpenseDash from '../components/AddExpenseDash';
import EditExpenseDash from '../components/EditExpenseDash';
import HelpExpenseDash from '../components/HelpExpenseDash';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter> 
    <div>
        <Header/>
        <Switch>
        <Route path="/" component={ExpenseDash} exact={true}/>
        <Route path="/create" component={AddExpenseDash} />
        <Route path="/edit/:id" component={EditExpenseDash} />
        <Route path="/help" component={HelpExpenseDash} />
        <Route component={NotFoundPage} />
    </Switch>
    </div>
    </BrowserRouter>

);
export default AppRouter;
function newFunction() {
    return <Header />;
}

