import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';



const initialValue = {
  username: '',
  password: '',
};

const Login = (props) => {
  const [inputValue, setInputValue] = useState(initialValue);

  const onChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .post('/login', inputValue)
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        props.history.push('/dashboard');
      });
  };

  return (
    <div>
      {localStorage.getItem('token') && props.history.push('/dashboard')}
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor='username'>
          Username
        </label>
        <input
          type='text'
          name='username'
          placeholder='name@mail.com'
          value={inputValue.username}
          onChange={onChange}
        />
        <label htmlFor='password'>
          Password
        </label>
        <input
          type='password'
          name='password'
          placeholder='********'
          value={inputValue.password}
          onChange={onChange}
        />

        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;