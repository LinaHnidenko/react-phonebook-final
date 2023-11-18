import { Typography } from '@mui/material';

export const Home = () => {
  return (
    <div>
      <Typography
        variant="h3"
        component="h2"
        sx={{
          mr: 2,
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        Hello, Welcome!
      </Typography>
      <img
        src="https://img.freepik.com/free-vector/staying-touch-modern-communication-means-phone-calls-letters-emails-person-contacting-friends-customers-via-email-encouraging-feedback-vector-isolated-concept-metaphor-illustration_335657-2779.jpg?w=1380&t=st=1700263398~exp=1700263998~hmac=65f1ea943264d4a3ac252d4ab699c1e4128c098beb19ea47e9fd14715e115730"
        alt=""
      />
    </div>
  );
};
