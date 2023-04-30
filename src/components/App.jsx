import React from 'react';
import { useSelector } from 'react-redux';
import AddContact from './AddContact/AddContact';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

const App = () => {
  const users = useSelector(state => state.contacts.items);
  return (
    <section>
      <h1>Phonebook</h1>
      <AddContact />
      <h2>Contacts</h2>
      {!users.length ? (
        <h3>Your phonebook is empty. Add your first contact</h3>
      ) : (
        <>
          <h3>Your phonebook has {users.length} contacts</h3>
          <Filter />
          <Contacts></Contacts>
        </>
      )}
    </section>
  );
};

export default App;
