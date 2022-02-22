import React from 'react';
import { useUser } from '../context/UserContext';

export default function Header() {
  const {
    users: { name },
  } = useUser();

  return <div>Welcome {name ? name : 'Guest'}!</div>;
}
