import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/contactsSlice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    const newFilter = e.target.value;
    dispatch(setFilter(newFilter));
  };

  return (
    <>
      <label className={css.filterlabel}>
        Find contacts by name
        <input
          className={css.filterinput}
          type="text"
          onChange={handleFilterChange}
          placeholder="Filter by name..."
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        ></input>
      </label>
    </>
  );
};
