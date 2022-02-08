import React from 'react';
import { useEntries } from '../context/EntriesContext';
import { useUser } from '../context/UserContext';
import { useState } from 'react';

export default function Form() {
  const [name, setName] = useState('');
  const [newEntry, setNewEntry] = useState('');
  const { setUser } = useUser();
  const { entries, setEntries } = useEntries();

  const updateGuest = () => {
    if (!newEntry) return setUser(name);
    setEntries([...entries, { name, entry: newEntry }]);
    setNewEntry('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateGuest();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <h4>Name</h4>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </label>
        <label>
          <h4>Message</h4>
          <input
            type="text"
            placeholder="Message"
            value={newEntry}
            onChange={(e) => setNewEntry(e.target.value)}
          ></input>
        </label>
        <button>Sign</button>
      </form>
    </>
  );
}
