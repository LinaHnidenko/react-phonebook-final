import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export const UserMenuPage = () => {
  const isAuth = useSelector(state => state.auth.token);

  return (
    <>
      {isAuth && <UserMenu />}
      {!isAuth && (
        <h2>
          Please <NavLink to="/login">log in</NavLink> to see your profile.
        </h2>
      )}
    </>
  );
};
