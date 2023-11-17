import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations';
import { Layout } from './Layout/Layout';
import { Contacts } from './pages/Contacts';
import { Home } from './pages/Home';
import { LoginPage } from './pages/LoginPage';
import { SignUpPage } from './pages/SignUpPage';
import { UserMenuPage } from './pages/UserMenuPage';

export const App = () => {
  // const dispatch = useDispatch();
  // const isRefreshing = useSelector(state => state.auth.isRefreshing);

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

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
