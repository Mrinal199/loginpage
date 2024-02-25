import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !password) {
      setErrorMessage('Please fill out all fields.');
      setSuccessMessage('');
    } else if (username === 'user' && password === 'password') {
      setSuccessMessage(`Welcome, ${username}!`);
      setErrorMessage('');
    } else {
      setErrorMessage('Invalid username or password');
      setSuccessMessage('');
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      {errorMessage && <p>{errorMessage}</p>}
      {successMessage && <p>{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <span style={{ color: 'red' }}>
            {!username && errorMessage && 'Please fill out this field.'}
          </span>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span style={{ color: 'red' }}>
            {!password && errorMessage && 'Please fill out this field.'}
          </span>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
