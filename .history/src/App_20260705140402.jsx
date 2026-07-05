import { useState, useEffect } from 'react';
import ContactForm from './components/form/ContactForm';
import SearchBox from './components/search/SearchBox';
import ContactList from './components/list/ContactList';
import { nanoid } from 'nanoid';
import styles from './App.module.css';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem('contacts');

    return storedContacts
      ? JSON.parse(storedContacts)
      : initialContacts;
  });

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addContact = (newContact) => {
    const contactWithId = {
      ...newContact,
      id: nanoid(),
    };

    setContacts((prevContacts) => [...prevContacts, contactWithId]);
  };

  const deleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>PhoneBook!!!</h1>

      <ContactForm addContact={addContact} />

      <SearchBox
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <ContactList
        contacts={filteredContacts}
        onDelete={deleteContact}
      />
    </div>
  );
}

