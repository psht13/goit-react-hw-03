import ContactForm from '../components/ContactForm/ContactForm';
import SearchBox from '../components/SearchBox/SearchBox';
import ContactList from '../components/ContactList/ContactList';

import dataFromServer from '../data/contacts.json';

import { nanoid } from 'nanoid';
import { useState } from 'react';

const App = () => {
  const [contacts, setContacts] = useState(dataFromServer);

  const [searchValue, setSearchValue] = useState('');

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const addContact = ({ name, number }) => {
    setContacts([...contacts, { name: name, number: number, id: nanoid(6) }]);
  };

  const removeContact = (id ) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      <ContactList contacts={visibleContacts} removeContact={removeContact} />
    </div>
  );
};

export default App;
