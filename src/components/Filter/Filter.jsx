import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/contactsSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    const newFilter = e.target.value;
    dispatch(setFilter(newFilter));
  };

  return (
    <>
      <TextField
        label="Find contacts by name"
        onChange={handleFilterChange}
        required
        variant="outlined"
        color="secondary"
        type="text"
        sx={{ mb: 3 }}
        fullWidth
        name="name"
        placeholder="Filter by name..."
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      />
    </>
  );
};
