import React from 'react';
import { useUser } from '../context/UserContext';
import './Header.css';

export default function Header() {
  const {
    users: { name },
  } = useUser();

  return <div>Welcome {name ? name : 'Guest'}!</div>;
}
