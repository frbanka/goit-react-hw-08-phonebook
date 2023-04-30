import { createSlice } from '@reduxjs/toolkit';
const STORAGE_KEY = 'myContacts';

const firstState = { items: [] };
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: firstState,
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

export const setLocalStorage = state => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};
