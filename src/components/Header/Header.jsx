import {
  AppBar,
  Box,
  Button,
  Container,
  createTheme,
  IconButton,
  Menu,
  MenuItem,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';

const pages = ['Home', 'Contacts', 'UserMenu', 'SignUp', 'Login'];

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',

      dark: '#002884',
      contrastText: '#1c54b2',
      main: '#06b1f5',
    },
  },
});

export const Header = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const [anchorElNav, setAnchorElNav] = useState(null);

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" sx={{ mb: 20 }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              //   href="#app-bar-with-responsive-menu"
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
              PhoneBook
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map(page =>
                  isLoggedIn && page.toLowerCase() === 'login' ? (
                    <MenuItem onClick={handleLogOut} key={page}>
                      <Typography textAlign="center">Log Out</Typography>
                    </MenuItem>
                  ) : (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <NavLink
                        to={
                          page.toLocaleLowerCase() === 'home'
                            ? '/'
                            : `/${page.toLocaleLowerCase()}`
                        }
                      >
                        <Typography textAlign="center">{page}</Typography>
                      </NavLink>
                    </MenuItem>
                  )
                )}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              //   href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              PhoneBook
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map(page =>
                isLoggedIn && page.toLowerCase() === 'login' ? (
                  <Button
                    key={page}
                    onClick={handleLogOut}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    Log Out
                  </Button>
                ) : (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    <NavLink
                      to={
                        page.toLocaleLowerCase() === 'home'
                          ? '/'
                          : `/${page.toLocaleLowerCase()}`
                      }
                    >
                      {page}
                    </NavLink>
                  </Button>
                )
              )}
            </Box>

            {/* <Box sx={{ flexGrow: 0 }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <NavLink to="/login">Login</NavLink>
              </Button>
            </Box> */}
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
