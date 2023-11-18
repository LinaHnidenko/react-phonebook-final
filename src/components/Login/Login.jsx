import { Button, TextField, Typography } from '@mui/material';

import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logIn, refreshUser } from 'redux/auth/operations';

export const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      logIn({
        email: e.target.elements.email.value,
        password: e.target.elements.password.value,
      })
    )
      .unwrap()
      .then(() => {
        dispatch(refreshUser());
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
          }}
        >
          Log In
        </Typography>
        <TextField
          label="Email"
          required
          variant="outlined"
          color="secondary"
          type="email"
          sx={{ mb: 3 }}
          fullWidth
          name="email"
        />
        <TextField
          label="Password"
          required
          variant="outlined"
          color="secondary"
          type="password"
          name="password"
          fullWidth
          sx={{ mb: 3 }}
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
            '&:hover': {
              boxShadow: '0 6px 10px 4px #002884)',
            },
          }}
          type="submit"
        >
          Login
        </Button>
      </form>
      <small>
        Need an account? <NavLink to="/signup">Register here</NavLink>
      </small>
    </>
  );
};
