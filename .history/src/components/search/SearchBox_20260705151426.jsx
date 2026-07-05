import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import styles from './SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();
  const value = useSelector(state => state.filters.name);

  return (
    <div className={styles.box}>
      <input
        value={value}
        onChange={e => dispatch(changeFilter(e.target.value))}
        placeholder="Search contacts..."
        className={styles.input}
      />
    </div>
  );
}