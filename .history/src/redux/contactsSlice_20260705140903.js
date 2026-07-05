import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [] },
  reducers: {
    addContact: (state, action) => {
   
      const newContact = { id: nanoid(), ...action.payload };

      if (state.items.some(contact => contact.id === newContact.id)) {
        console.error('Contact with this ID already exists');
        return;
      }

      state.items.push(newContact);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
