import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { Div, WrapPhonebook, Title, WrapContacts, Contacts } from './AppStyled';

const initialUsers = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? initialUsers;
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = contact => {
    const nameMatch = contacts.some(el => el.name === contact.name);
    if (nameMatch) {
      alert(`${contact.name} is already in contacts!`);
      return;
    }

    setContacts(prevState => [...prevState, contact]);
    // console.log(contact);
  };

  const handleDeleteContact = id => {
    setContacts(contacts.filter(user => user.id !== id));
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getVisibleUser = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Div>
      <WrapPhonebook>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={formSubmitHandler} />
      </WrapPhonebook>
      <WrapContacts>
        <Contacts>Contacts</Contacts>
        <Filter onChange={changeFilter} value={filter} />
        <ContactList onDelete={handleDeleteContact} contact={getVisibleUser} />
      </WrapContacts>
    </Div>
  );
}
