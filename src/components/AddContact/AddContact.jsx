import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/managment';
import { nanoid } from 'nanoid';
import { addedContactNotification } from '../../redux/utils/notifications';

import css from '../AddContact/AddContact.module.css';
const AddContact = () => {
  const dispatch = useDispatch();
  const createNewContact = e => {
    e.preventDefault();

    dispatch(
      addContact({
        id: nanoid(),
        name: e.target.name.value,
        phone: e.target.phone.value,
      })
    );
    addedContactNotification(e.target.name.value);
    e.target.reset();
  };

  return (
    <section className={css.phonebook__section}>
      <div>
        <form onSubmit={createNewContact} className={css.phonebook}>
          <label className={css.phonebook__label}>Name</label>
          <input
            className={css.phonebook__input}
            type="text"
            name="name"
            placeholder="contact name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label className={css.phonebook__label}>Number</label>
          <input
            className={css.phonebook__input}
            type="tel"
            name="phone"
            placeholder="phone number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit" name="submit" className={css.phonebook__button}>
            Add Contact
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddContact;
