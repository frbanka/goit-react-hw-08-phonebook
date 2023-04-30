import PropTypes from 'prop-types';
import css from '../Contacts/Contacts.module.css';
const Contacts = ({ contacts, contactRemove, children }) => {
  return (
    <section className={css.contacts__section}>
      <div>
        {children}
        <ul>
          {contacts.length === 0 ? null : (
            <>
              {contacts.map(({ id, name, number }) => {
                return (
                  <li key={id}>
                    <p>
                      <span>{name}: </span>
                      <span id={id}>{number}</span>
                    </p>
                    <button onClick={() => contactRemove(id)}>remove</button>
                  </li>
                );
              })}
            </>
          )}
        </ul>
      </div>
    </section>
  );
};
Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  contactRemove: PropTypes.func.isRequired,
};
export default Contacts;
