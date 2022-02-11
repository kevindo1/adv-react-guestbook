import React from 'react';
import { useEntries } from '../context/EntriesContext';

export default function List() {
  const { entries } = useEntries();

  return (
    <div>
      <ul>
        {entries.map(({ name, message, id }) => (
          <li key={id}>
            <h3>Name: {name}</h3>
            <p>Message: {message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
