import React from 'react';

export default function Auth() {
  return (
    <div>
      <h3>Login</h3>
      <form>
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <button>Login</button>
      </form>
    </div>
  );
}
