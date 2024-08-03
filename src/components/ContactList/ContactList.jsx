import css from './ContactList.module.css';

import Contact from '../Contact/Contact';

const ContactList = ({ contacts, removeContact }) => {
  return (
    <div className={css.contactList}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          removeContact={removeContact}
        />
      ))}
    </div>
  );
};

export default ContactList;
