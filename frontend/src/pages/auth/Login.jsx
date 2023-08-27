import React, { useState } from 'react';
import './Auth.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Submitting login form...');
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    
    <div className="container">
        <div className="box form-box">
        <header>Login</header>

            <form action='' method='POST' onSubmit={handleSubmit}>
              <div className="field input">
                <label className="input-label">Username:</label>
                <input
                  type="text"
                  className="input"
                  value={username}
                  onChange={handleUsernameChange}
                />
              </div>
              <div className="field input">
                <label className="input-label">Password:</label>
                <input
                  type="password"
                  className="input"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <div className='field'> <button type="submit" className="btn">
                Login
              </button></div>
             
            </form>
          </div>

    </div>
  );
}

export default LoginPage;
