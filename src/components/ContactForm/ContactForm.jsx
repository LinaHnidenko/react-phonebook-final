import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix';
import { selectContacts } from 'redux/selectors';

import { createContacts } from 'redux/contacts/operations/operations';
import { Button, TextField } from '@mui/material';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const number = e.target.number.value;

    if (name) {
      const existingContact = contacts.find(contact => {
        if (contact.name) {
          return contact.name.toLowerCase() === name.toLowerCase();
        }
        return false;
      });

      if (existingContact) {
        Notify.info(`${name} is already in your contacts`);
        return;
      }
    }

    dispatch(createContacts({ name, number }));
    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        required
        variant="outlined"
        color="secondary"
        type="text"
        sx={{ mb: 3 }}
        fullWidth
        name="name"
        placeholder="Enter name..."
      />
      <TextField
        label="Number"
        required
        variant="outlined"
        color="secondary"
        type="text"
        sx={{ mb: 3 }}
        fullWidth
        name="number"
        placeholder="Enter number..."
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
      />

      <Button
        variant="contained"
        sx={{
          background: 'linear-gradient(45deg, #06b1f5 30%, #002884 90%)',
          borderRadius: '3px',
          border: 0,
          color: 'white',
          height: '38px',
          padding: '0 30px',
          boxShadow: '0 3px 5px 2px #002884)',
          transition: 'box-shadow 0.3s ease-in-out',
          mb: '30px',
          '&:hover': {
            boxShadow: '0 6px 10px 4px #002884)',
          },
        }}
        type="submit"
      >
        Add contact
      </Button>
    </form>
  );
};
