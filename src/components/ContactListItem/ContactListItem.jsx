import { Button, Typography } from '@mui/material';
import { Notify } from 'notiflix';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contacts/operations/operations';

export const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const onRemoveContact = id => {
    dispatch(deleteContacts(id));
    Notify.success('The contact has been successfully removed');
  };

  return (
    <Typography
      variant="subtitle1"
      component="h2"
      sx={{
        mr: 2,
        display: { xs: 'none', md: 'flex' },
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
        mb: '20px',
      }}
      key={id}
    >
      {name}: {number}&nbsp;&nbsp;
      <Button
        variant="contained"
        sx={{
          background: '#de8c8c',
          borderRadius: '3px',
          border: 0,
          color: 'white',
          height: '28px',
          padding: '0 30px',
          boxShadow: '0 3px 5px 2px #002884)',
          transition: 'box-shadow 0.3s ease-in-out',
          '&:hover': {
            boxShadow: '0 6px 10px 4px #002884)',
          },
        }}
        onClick={() => onRemoveContact(id)}
      >
        Delete
      </Button>
    </Typography>
  );
};
