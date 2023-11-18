import { Box, Button, TextField, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUp } from 'redux/auth/operations';

export const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };

    dispatch(signUp(newUser))
      .unwrap()
      .then(() => navigate('/login'));
  };
  return (
    <>
      <Box
        sx={{
          border: 1,
          borderColor: 'primary.main',
          padding: '20px',
          textAlign: 'center',
          mb: '20px',
        }}
      >
        <Typography
          variant="h6"
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
          Please, Enter your personal details and start journey with us🤗
        </Typography>
      </Box>
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
          Sign Up
        </Typography>

        <TextField
          label="Name"
          required
          variant="outlined"
          color="secondary"
          type="text"
          sx={{ mb: 3 }}
          fullWidth
          name="name"
        />
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
          fullWidth
          sx={{ mb: 3 }}
          name="password"
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
          Sign Up
        </Button>
      </form>
    </>
  );
};
