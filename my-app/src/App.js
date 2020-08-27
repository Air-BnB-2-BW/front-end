import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import './App.css';
import SignupForm from './Components/SignupForm'
import LoginForm from './Components/LoginForm';

function App() {
  return (
<div className="Appmain">
      <header className="App-header">
        <div className="logo-holder">
          <div className ="headimg">
            <img src = "https://promoaffiliates.com/wp-content/uploads/2017/02/Airbnb-Logo.png"/>
          </div>
        <nav>
          <div className="nav-links">
            <Link to="/LoginForm">Log-In</Link>
            <Link to="/SignupForm">Sign-Up</Link>
          </div>
        </nav>
        </div>
        </header>

      <Switch>
        <Route exact path="/LoginForm">
          <LoginForm />
        </Route>
        <Route exact path="/SignupForm">
          <SignupForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;