import { Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';

export const UserMenu = () => {
  const { email } = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <div>
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
      >
        Nice to meet you, {email} ⭐
      </Typography>
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
        onClick={handleLogOut}
      >
        Log Out
      </Button>
    </div>
  );
};
