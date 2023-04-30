import css from '../Filter/Filter.module.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { nanoid } from 'nanoid';
const Filter = () => {
  const dispatch = useDispatch();
  const filterId = nanoid();

  const filterChange = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <input
      className={css.filter__input}
      type="text"
      name="filter"
      id={filterId}
      onChange={e => filterChange(e)}
      placeholder="Search contact by name"
    />
  );
};

export default Filter;
