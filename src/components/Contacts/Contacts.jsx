import css from '../Contacts/Contacts.module.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/managment';
import { selectIsLoading } from '../../redux/selector';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => {
    return state.contacts.items.filter(item =>
      item.name.toLowerCase().trim().includes(state.filter.toLowerCase().trim())
    );
  });
  const isLoading = useSelector(selectIsLoading);

  return (
    <section className={css.contacts__section}>
      <div>
        <ul>
          {!!isLoading && <b>Loading...</b>}
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
