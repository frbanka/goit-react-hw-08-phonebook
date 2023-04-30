import { useState, useEffect } from 'react';
import AddContact from './AddContact/AddContact';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

function App() {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const inputContact = ({ id, name, number }) => {
    const contact = {
      id,
      name,
      number,
    };
    contacts.some(i => i.name === name)
      ? alert(`${name} is already in contacts`)
      : setContacts([contact, ...contacts]);
  };

  const getContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filterChange = e => {
    setFilter(e.currentTarget.value);
  };

  const removeContact = id => {
    setContacts(contacts.filter(i => i.id !== id));
  };

  return (
    <section>
      <h1>Phonebook</h1>
      <AddContact inputContact={inputContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} onChange={filterChange} />
      <Contacts contacts={getContacts()} contactRemove={removeContact} />
    </section>
  );
}

export default App;
