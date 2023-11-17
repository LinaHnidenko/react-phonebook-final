import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Contacts } from './pages/Contacts';
import { Home } from './pages/Home';
import { LoginPage } from './pages/LoginPage';
import { SignUpPage } from './pages/SignUpPage';
import { UserMenuPage } from './pages/UserMenuPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="usermenu" element={<UserMenuPage />} />
      </Route>
    </Routes>
  );
};
