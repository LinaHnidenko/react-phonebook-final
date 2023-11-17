import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';

export const UserMenuPage = () => {
  const isAuth = useSelector(state => state.auth.token);

  return <>{isAuth && <UserMenu />}</>;
};
