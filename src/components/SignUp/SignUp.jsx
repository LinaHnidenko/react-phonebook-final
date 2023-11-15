import { Button, TextField } from '@mui/material';
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

    dispatch(signUp(newUser));
    navigate('/login');
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <TextField
          label="Name"
          //   onChange={}
          required
          variant="outlined"
          color="secondary"
          type="text"
          sx={{ mb: 3 }}
          fullWidth
          name="name"
          // value={email}
          //   error={emailError}
        />
        <TextField
          label="Email"
          //   onChange={}
          required
          variant="outlined"
          color="secondary"
          type="email"
          sx={{ mb: 3 }}
          fullWidth
          name="email"
          //   value={email}
          //   error={emailError}
        />
        <TextField
          label="Password"
          //   onChange={}
          required
          variant="outlined"
          color="secondary"
          type="password"
          //   value={password}
          //   error={passwordError}
          fullWidth
          sx={{ mb: 3 }}
          name="password"
        />
        <Button variant="outlined" color="secondary" type="submit">
          Sign Up
        </Button>
      </form>
    </>
  );
};
