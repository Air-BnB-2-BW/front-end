import React from 'react';
import './App.css';
import SignupForm from './Components/SignupForm'
import LoginForm from './Components/LoginForm';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <button> Log-In</button>
      <button>Sign-Up</button>
      <LoginForm/>
      <SignupForm/>
    </div>
  );
}

export default App;

