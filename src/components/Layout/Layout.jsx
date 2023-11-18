import { Container, createTheme, ThemeProvider } from '@mui/material';
import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
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
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container maxWidth="sm">
        <Outlet />
      </Container>
    </ThemeProvider>
  );
};
