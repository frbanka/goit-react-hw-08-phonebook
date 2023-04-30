import PropTypes from 'prop-types';
import css from '../Filter/Filter.module.css';
const Filter = ({ filter, onChange }) => {
  return (
    <input
      className={css.filter__input}
      type="text"
      name="filter"
      value={filter}
      onChange={onChange}
      placeholder="Search contact by name"
    />
  );
};
Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Filter;
