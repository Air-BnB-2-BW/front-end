import React from 'react';
import { Switch, Route, useHistory, NavLink } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import EditListing from './components/EditListing';
import PrivateRoute from './components/PrivateRoute';
import styled from 'styled-components';
import Logout from './styled/Logout';
import Header from './styled/Header';

const StyledNavLink = styled(NavLink)`
  color: white;
  font-size: 1.5rem;
  font-family: 'Roboto Slab', serif;
  text-decoration: none;
  letter-spacing: -1px;
  align-self: center;
  padding: 0.5%;
  &:hover {
    font-weight: bold;
  }
  &:active {
    color: coral;
    text-shadow: 2px 2px 6px black;
  }
`;

const App = () => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('token');
    history.push('/login');
  };

  return (
    <div className='App'>
      <Header>
        {localStorage.getItem('token') ? (
          <>
            <StyledNavLink to='/dashboard' activeClassName='active-link'>
              Dashboard
            </StyledNavLink>
            <Logout onClick={handleLogout}>Logout</Logout>
          </>
        ) : (
          <>
            <StyledNavLink to='/login' activeClassName='active-link'>
              Login
            </StyledNavLink>
            <StyledNavLink to='/register' activeClassName='active-link'>
              Register
            </StyledNavLink>
          </>
        )}
      </Header>

      <Switch>
        <PrivateRoute
          exact
          path='/dashboard'
          component={Dashboard}
        ></PrivateRoute>
        <Route exact path='/listing/:id/edit' component={EditListing} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </div>
  );
};

export default App;