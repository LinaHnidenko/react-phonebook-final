import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix';
import { selectContacts } from 'redux/selectors';
import { nanoid } from '@reduxjs/toolkit';
import { createContacts } from 'redux/operations/operations';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const nameValue = e.target.name.value;
    const numberValue = e.target.number.value;

    if (nameValue) {
      const existingContact = contacts.find(contact => {
        if (contact.name) {
          return contact.name.toLowerCase() === nameValue.toLowerCase();
        }
        return false;
      });

      if (existingContact) {
        Notify.info(`${nameValue} is already in your contacts`);
        return;
      }
    }
    const newContact = {
      id: nanoid(),
      name: nameValue,
      phone: numberValue,
    };
    dispatch(createContacts(newContact));
    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit} className={css.contactform}>
      <label className={css.label}>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          required
          placeholder="Enter name..."
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        />
      </label>
      <label className={css.label}>
        Number
        <input
          className={css.input}
          type="tel"
          name="number"
          required
          placeholder="Enter number..."
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        />
      </label>
      <button type="submit" className={css.btn}>
        Add contact
      </button>
    </form>
  );
};
