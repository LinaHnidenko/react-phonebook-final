import { Button, TextField } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logIn } from 'redux/auth/operations';

export const Login = () => {
  const isAuth = useSelector(state => state.auth.token);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    isAuth && navigate('/contacts');
  }, [isAuth, navigate]);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      logIn({
        email: e.target.elements.email.value,
        password: e.target.elements.password.value,
      })
    );
    // navigate('/contacts');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Login Form</h2>
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
          name="password"
          //   value={password}
          //   error={passwordError}
          fullWidth
          sx={{ mb: 3 }}
        />
        <Button variant="outlined" color="secondary" type="submit">
          Login
        </Button>
      </form>
      <small>
        Need an account? <NavLink to="/signup">Register here</NavLink>
      </small>
    </>
  );
};
