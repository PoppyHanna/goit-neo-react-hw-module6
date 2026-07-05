import ContactForm from "./components/form/ContactForm";
import SearchBox from "./components/search/SearchBox";
import ContactList from "./components/list/ContactList";
import css from "./App.module.css";

export default function App() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
