import React from 'react';
import Form from '../components/Form';
import List from '../components/List';
import Header from '../components/Header';
import { EntriesProvider } from '../context/EntriesContext';

export default function Home() {
  return (
    <EntriesProvider>
      <Header />
      <Form />
      <List />
    </EntriesProvider>
  );
}
