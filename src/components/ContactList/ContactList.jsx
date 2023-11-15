import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/operations/operations';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
} from 'redux/selectors';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const handleFilterContacts = () => {
    const normalizedFilter = filter ? filter.toLowerCase() : '';
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = handleFilterContacts();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      <ul className={css.list}>
        {filteredContacts.map(({ name, phone, id }) => {
          return <ContactListItem key={id} id={id} name={name} phone={phone} />;
        })}
      </ul>
    </>
  );
};
