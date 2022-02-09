import React from 'react';
import { useEntries } from '../context/EntriesContext';
import { useUser } from '../context/UserContext';
import { useState } from 'react';

export default function Form() {
  const [name, setName] = useState('');
  const [newEntry, setNewEntry] = useState('');
  const { setUsers } = useUser();
  const { setEntries } = useEntries();

  const updateGuest = () => {
    setUsers(name);
    setEntries((prevState) => [
      ...prevState,
      { name, message: newEntry, id: Math.floor(Math.random() * 100) },
    ]);
    setNewEntry('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateGuest();
  };

  const handleNewName = () => {
    setUsers(name);
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
          <button onSubmit={handleNewName}>Change Name</button>
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
