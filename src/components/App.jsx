import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddContact from './AddContact/AddContact';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { fetchContacts } from '../redux/managment';
import { selectIsLoading, selectError } from '../redux/selector';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <section>
      <h1>Phonebook</h1>
      <AddContact />
      <h2>Contacts</h2>
      <Filter />
      <Contacts></Contacts>
      {isLoading && !error && <b>Loading...</b>}
    </section>
  );
};

export default App;
