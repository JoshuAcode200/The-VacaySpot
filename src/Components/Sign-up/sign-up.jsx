import React from 'react';
import './sign-up.css';

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-header">
        <h2>Sign Up</h2>
      </div>
      <form className="signup-form">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" placeholder="Enter your username" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" />

        <label htmlFor="confirm-password">Confirm Password</label>
        <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm your password" />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
