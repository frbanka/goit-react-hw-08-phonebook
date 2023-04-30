import css from '../Contacts/Contacts.module.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => {
    return state.contacts.items.filter(item =>
      item.name.toLowerCase().trim().includes(state.filter.toLowerCase().trim())
    );
  });
  return (
    <section className={css.contacts__section}>
      <div>
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>
              <p>
                <span>{contact.name}: </span>
                <span>{contact.number}</span>
              </p>
              <button
                type="button"
                onClick={() => dispatch(removeContact(contact.id))}
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
