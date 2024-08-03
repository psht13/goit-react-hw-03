import css from './ContactList.module.css';

import Contact from '../Contact/Contact';

const ContactList = ({ contacts }) => {
  return (
    <div className={css.contactList}>
      {contacts.map((contact) => (
        <Contact key={contact.id} name={contact.name} number={contact.number} />
      ))}
    </div>
  );
};

export default ContactList;
