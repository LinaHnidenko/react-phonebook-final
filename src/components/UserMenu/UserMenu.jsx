import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from 'redux/auth/operations';

export const UserMenu = () => {
  const email = useSelector(state => state.auth.user.email);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(logOut());
    navigate('/');
  };
  return (
    <div>
      <p>{email}</p>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  );
};
