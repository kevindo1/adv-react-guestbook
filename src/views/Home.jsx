import React from 'react';
import Form from '../components/Form';
import List from '../components/List';
import { EntriesProvider } from '../context/EntriesContext';

export default function Home() {
  return (
    <EntriesProvider>
      <Form />
      <List />
    </EntriesProvider>
  );
}
