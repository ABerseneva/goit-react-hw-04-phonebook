import React, { Component } from 'react';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { Div, WrapPhonebook, Title, WrapContacts, Contacts } from './AppStyled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContact = JSON.parse(contacts);
    if (parsedContact) {
      this.setState({ contacts: parsedContact });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  formSubmitHandler = contact => {
    const nameMatch = this.state.contacts.some(el => el.name === contact.name);
    if (nameMatch) {
      alert(`${contact.name} is already in contacts!`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(user => user.id !== id),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleUser = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleUser = this.getVisibleUser();
    return (
      <Div>
        <WrapPhonebook>
          <Title>Phonebook</Title>
          <ContactForm onSubmit={this.formSubmitHandler} />
        </WrapPhonebook>
        <WrapContacts>
          <Contacts>Contacts</Contacts>
          <Filter onChange={this.changeFilter} value={filter} />
          <ContactList
            onDelete={this.handleDeleteContact}
            contact={visibleUser}
          />
        </WrapContacts>
      </Div>
    );
  }
}
