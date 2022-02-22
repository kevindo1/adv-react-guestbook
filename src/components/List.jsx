import React from 'react';
import { useEntries } from '../context/EntriesContext';

export default function List() {
  const { entries } = useEntries();

  return (
    <div>
      <ul>
        {entries.map(({ message, id }) => (
          <li key={id}>
            <p>Message: {message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
