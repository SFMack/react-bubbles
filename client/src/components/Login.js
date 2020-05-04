import React, { useState } from "react";

import {axiosWithAuth} from '../utils/axiosWithAuth.js';

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userCredentials, setUserCredentials] = useState({});

  const login = e => {
    e.preventDefault();
    setUserCredentials({ username, password })
    axiosWithAuth().post('/login', userCredentials)
    .then(res => {
      console.log(res);
      // localStorage.setItem("token", res.data.payload);
    })
    .catch(err => {
      console.log(err)
    })
  }



  return (
    <>
      <div className='LoginFormWrapper'>
        <form onSubmit={login} >
          <input 
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input 
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Login;
