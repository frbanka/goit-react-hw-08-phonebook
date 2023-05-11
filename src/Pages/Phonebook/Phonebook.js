import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/managment';
import AddContact from 'components/AddContact/AddContact';
import Filter from 'components/Filter/Filter';
import Contacts from 'components/Contacts/Contacts';
import { selectIsLoading, selectError } from 'redux/selector';
import Loader from 'components/Loader/Loader';
//import css from './Phonebook.module.css';

export default function Phonebook() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <title>Phonebook</title>
      <AddContact />
      <Filter />
      <Contacts />
      {!!isLoading && !error && <Loader />}
    </>
  );
}
