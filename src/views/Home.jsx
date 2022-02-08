import React from 'react';
import Form from '../components/Form';
import List from '../components/List';
import { UserProvider } from '../context/UserContext';

export default function Home() {
  return (
    <UserProvider>
      <Form />
      <List />
    </UserProvider>
  );
}
