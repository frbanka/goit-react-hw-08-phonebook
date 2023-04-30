import { createSlice } from '@reduxjs/toolkit';

const contactsState = { items: [] };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsState,
  reducers: {
    createContact(state, action) {
      state.items.push(action.payload);
    },
    removeContact(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { createContact, removeContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
