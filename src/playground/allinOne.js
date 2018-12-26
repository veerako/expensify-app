
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch, NavLink } from 'react-router-dom';

import 'normalize.css/normalize.css';
import './styles/styles.scss';


const ExpenseDash = () =>(
    <div>
    this is from dashboard
    </div>

);
const AddExpenseDash = () =>(
    <div>
    add expense
    
    </div>
);
const EditExpenseDash = () =>(
    <div>
    Edit details
    </div>
);
const HelpExpenseDash = () =>(
    <div>
    Help! 
    </div>
);
const NotFoundPage = () =>(
    <div>
    404 page not found <Link to="/">Go Home</Link>
    </div>
);

const Header = () =>(
    <header>
    <h1> Expensify </h1>
    <p><NavLink to ="/" activeClassName="is-active" exact={true}> Dashboard </NavLink></p>
    <p><NavLink to ="/create" activeClassName="is-active"> Create page </NavLink></p>
    <p><NavLink to ="/edit" activeClassName="is-active"> Edit page </NavLink></p>
    <p><NavLink to ="/help" activeClassName="is-active"> Help page </NavLink></p>
    </header>
);

const routes = (
    <BrowserRouter> 
    <div>
    <Header/>
        <Switch>
        <Route path="/" component={ExpenseDash} exact={true}/>
        <Route path="/create" component={AddExpenseDash} />
        <Route path="/edit" component={EditExpenseDash} />
        <Route path="/help" component={HelpExpenseDash} />
        <Route component={NotFoundPage} />
    </Switch>
    </div>
    </BrowserRouter>
);
ReactDOM.render(routes, document.getElementById('app'));


