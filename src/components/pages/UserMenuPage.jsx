import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export const UserMenuPage = () => {
  //   const isAuth = useSelector(state => state.auth.token);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <>
      {isLoggedIn && <UserMenu />}
      {!isLoggedIn && (
        <h2>
          Please <NavLink to="/login">log in</NavLink> to see your profile.
        </h2>
      )}
    </>
  );
};
