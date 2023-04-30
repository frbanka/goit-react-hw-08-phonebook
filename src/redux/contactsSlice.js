import { createSlice } from '@reduxjs/toolkit';
const STORAGE_KEY = 'myContacts';
const contactsJson = JSON.parse(localStorage.getItem(STORAGE_KEY));

let contactsState = contactsJson;

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsState,
  reducers: {
    createContact(state, action) {
      state.items.push(action.payload);
      setLocalStorage(state);
    },
    removeContact(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
      setLocalStorage(state);
    },
  },
});

export const { createContact, removeContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

const setLocalStorage = state => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};
