import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import styles from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  return (
    <div className={styles.box}>
      <label htmlFor="searchInput" className={styles.title}>
        Find contact by name
      </label>
      <input
        id="searchInput"
        type="text"
        placeholder="Search contacts..."
        value={filter}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        className={styles.input}
      />
    </div>
  );
}
