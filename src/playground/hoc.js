//higher order component
//Reuse code 
//render hijacking
//prop manipulation
//Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info =(props) => (

<div>
<h1> Info </h1>
<p> info is: {props.info}</p>
</div>
);

const withAdminWarning = (WrappedComponent) => {
return (props) => (
    <div>
    {props.isAdmin && <p> private info </p>}
    <WrappedComponent {...props}/>
    </div>
);
};
//require authentication

const requireAuth = (WrappedComponent) => {
    return (props) =>(
        <div>
        {props.isAuth ? (<WrappedComponent {...props} />):(<p>pls login to view this info</p>)}
        
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuth(Info);
//ReactDOM.render(<AdminInfo isAdmin={true} info = "hi"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuth={true} info = "hello"/>, document.getElementById('app'));

