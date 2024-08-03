import ContactForm from '../components/ContactForm/ContactForm';
import SearchBox from '../components/SearchBox/SearchBox';
import ContactList from '../components/ContactList/ContactList';

import dataFromServer from '../data/contacts.json';

import { useState } from 'react';

const App = () => {
  const [contacts, setContacts] = useState(dataFromServer);

  const [searchValue, setSearchValue] = useState('');

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );


  return (
    <div className='container'>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      <ContactList contacts={visibleContacts} />
    </div>
  );
};

export default App;
