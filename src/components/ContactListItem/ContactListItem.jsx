import { Notify } from 'notiflix';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/operations/operations';
import css from './ContactListItem.module.css';

export const ContactListItem = ({ name, phone, id }) => {
  const dispatch = useDispatch();

  const onRemoveContact = id => {
    dispatch(deleteContacts(id));
    Notify.success('The contact has been successfully removed');
  };

  return (
    <li key={id} className={css.item}>
      {name}: {phone}&nbsp;&nbsp;
      <button className={css.deletebtn} onClick={() => onRemoveContact(id)}>
        Delete
      </button>
    </li>
  );
};
