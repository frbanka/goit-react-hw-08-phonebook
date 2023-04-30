import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from '../AddContact/AddContact.module.css';

function AddContact({ inputContact }) {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const changeFormName = e => {
    setName(e.currentTarget.value);
  };
  const changeFormTel = e => {
    setNumber(e.currentTarget.value);
  };

  const formSubmit = e => {
    e.preventDefault();
    addId();
    inputContact({ id, name, number });
    resetForm();
  };
  const addId = e => {
    setId(nanoid(e));
  };
  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <section className={css.phonebook__section}>
      <div>
        <form onSubmit={formSubmit} className={css.phonebook}>
          <label className={css.phonebook__label}>Name</label>
          <input
            className={css.phonebook__input}
            type="text"
            name="name"
            value={name}
            onChange={changeFormName}
            placeholder="contact name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label className={css.phonebook__label}>Number</label>
          <input
            className={css.phonebook__input}
            type="tel"
            name="number"
            placeholder="phone number"
            onChange={changeFormTel}
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button onClick={formSubmit} className={css.phonebook__button}>
            Add Contact
          </button>
        </form>
      </div>
    </section>
  );
}

AddContact.propTypes = {
  inputContact: PropTypes.func.isRequired,
};

export default AddContact;
