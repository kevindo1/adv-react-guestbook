import React from 'react';
import { useEntries } from '../context/EntriesContext';
import { useUser } from '../context/UserContext';
import { useState } from 'react';

export default function Form() {
  const { user, setUser } = useUser();
  const { entries, setEntries } = useEntries();
  const [name, setName] = useState('');
  const [newEntry, setNewEntry] = useState('');

  const updateGuest = () => {
    if (!newEntry) return;
    setUser(name);
    setEntries([...entries, { name, newEntry }]);
    setNewEntry('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateGuest();
  };

  return (
    <>
      <form>
        <label>
          <h4>Name</h4>
          <input type="text" placeholder="Name"></input>
        </label>
        <label>
          <h4>Message</h4>
          <input type="text" placeholder="Message"></input>
        </label>
        <button>Sign</button>
      </form>
    </>
  );
}
