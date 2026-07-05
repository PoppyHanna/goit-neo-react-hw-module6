import ContactForm from "./components/form/ContactForm";
import SearchBox from "./components/search/SearchBox";
import ContactList from "./components/list/ContactList";
import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
