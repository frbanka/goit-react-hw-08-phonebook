import css from '../Contacts/Contacts.module.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/managment';
import { selectIsLoading } from '../../redux/selector';
import Loader from 'components/Loader/Loader.js';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const contacts = useSelector(state => {
    return state.contacts.items.filter(item =>
      item.name.toLowerCase().trim().includes(state.filter.toLowerCase().trim())
    );
  });

  return (
    <section className={css.contacts__section}>
      <div>
        <h4 className={css.contacts__title}>
          You have {contacts.length} contacts
        </h4>
        <ul>
          {!!isLoading && <Loader />}
          {contacts.map(contact => (
            <li key={contact.id}>
              <p>
                <span>{contact.name}: </span>
                <span>{contact.phone}</span>
              </p>
              <button
                type="button"
                onClick={() => dispatch(deleteContact(contact.id))}
              >
                remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Contacts;
