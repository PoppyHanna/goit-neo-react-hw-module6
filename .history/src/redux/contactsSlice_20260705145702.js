import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [] },
  reducers: {
    addContact: (state, action) => {
   
       const exists = state.items.some(
    contact =>
      contact.name.toLowerCase() === action.payload.name.toLowerCase() ||
      contact.number === action.payload.number
  );

  if (exists) return;

  state.items.push({
    id: nanoid(),
    ...action.payload,
  });
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
