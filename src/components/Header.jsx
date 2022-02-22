import React from 'react';
import { useUser } from '../context/UserContext';

export default function Header() {
  const { users } = useUser();

  return <div>Welcome {users ? users : 'Guest'}!</div>;
}
