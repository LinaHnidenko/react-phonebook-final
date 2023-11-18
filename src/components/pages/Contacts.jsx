import { Container, Typography } from '@mui/material';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export const Contacts = () => {
  return (
    <Container fixed>
      <Typography
        variant="h4"
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
          textAlign: 'center',
        }}
      >
        Phonebook
      </Typography>

      <ContactForm />
      <Typography
        variant="h4"
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
          textAlign: 'center',
        }}
      >
        Contacts
      </Typography>

      <Filter />
      <ContactList />
    </Container>
  );
};
