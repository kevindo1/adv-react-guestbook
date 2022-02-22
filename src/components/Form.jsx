import React from 'react';
import { useEntries } from '../context/EntriesContext';
import { useUser } from '../context/UserContext';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Form() {
  const [name, setName] = useState('');
  const [newEntry, setNewEntry] = useState('');
  const { users, setUsers } = useUser();
  const { setEntries } = useEntries();
  const history = useHistory();

  const updateGuest = () => {
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

  const handleNewName = (e) => {
    e.preventDefault();
    setUsers('');
    setName('');
  };

  const handleLogOut = (e) => {
    e.preventDefault();
    setUsers({ name: '', password: '' });
    history.push('/login');
  };
  // const nameInput = (
  //   <label>
  //     <h4>Name</h4>
  //     <input
  //       type="text"
  //       placeholder="Name"
  //       value={name}
  //       onChange={(e) => setName(e.target.value)}
  //     ></input>
  //   </label>
  // );

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* {users ? null : nameInput} */}
        <label>
          <input
            type="text"
            placeholder="Message"
            value={newEntry}
            onChange={(e) => setNewEntry(e.target.value)}
          ></input>
        </label>
        <button>Sign</button>
        {users ? <button onClick={handleNewName}>Change Name</button> : null}
        <button onClick={handleLogOut}>Log Out</button>
      </form>
    </>
  );
}
