import React from 'react';
import './login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-header">
        <h2>Login</h2>
      </div>
      <form className="login-form">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" placeholder="Enter your username" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" />

        <div className="forgot-password">
          <a href="/forgot-password">Forgot password?</a>
        </div>

        <button type="submit" href='http://localhost:3001/'>Login</button>
      </form>
    </div>
  );
}

export default Login;
