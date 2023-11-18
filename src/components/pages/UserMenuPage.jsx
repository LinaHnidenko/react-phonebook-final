import { Typography } from '@mui/material';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export const UserMenuPage = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <>
      {isLoggedIn && <UserMenu />}
      {!isLoggedIn && (
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
          Please &nbsp;
          <NavLink
            to="/login"
            style={{ textDecoration: 'none' }}
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
            log in &nbsp;
          </NavLink>{' '}
          to see your profile.
        </Typography>
      )}
    </>
  );
};
