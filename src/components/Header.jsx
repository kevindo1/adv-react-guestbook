import React from 'react';
import { useUser } from '../context/UserContext';
import DarkModeToggle from '../DarkMode/DarkModeToggle';
import '../DarkMode/DarkMode.css';

export default function Header() {
  const { users } = useUser();

  return (
    <div>
      <DarkModeToggle />
      Welcome {users ? users : 'Guest'}!
    </div>
  );
}
