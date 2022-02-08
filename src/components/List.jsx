import React from 'react';
import { useEntries } from '../context/EntriesContext';

export default function List() {
  const { entries } = useEntries();

  return (
    <div>
      <ul>
        {entries.map((item) => {
          return (
            <li key={`${item.name}`}>
              <h3>Name: {item.name}</h3>
              <p>Message: {item.entry}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
