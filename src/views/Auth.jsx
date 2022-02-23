import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/';
import { useUser } from '../context/UserContext';
import './Auth.css';

export default function Auth() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setUsers } = useUser();
  const history = useHistory();
  const [error, setError] = useState(null);
  const { from } = location.state || { from: { pathname: '/' } };

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      username === process.env.REACT_APP_AUTH_EMAIL &&
      password === process.env.REACT_APP_AUTH_PASSWORD
    ) {
      setUsers({ name: username, password: password });
      setUsername('');
      setPassword('');
      history.replace(from.pathname);
    } else {
      setError('sadboi hours');
    }
  };

  return (
    <div>
      <h3 className="text-4xl font-bold underline">Login</h3>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            placeholder="Email"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <button>Login</button>
      </form>
      {error}
    </div>
  );
}
