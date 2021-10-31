// import packages
import { useState, useEffect } from 'react';

// import components
import { AddContactForm } from './components';
import { Container } from './components';
import { Section } from './components';
import { ContactList } from './components';
import { Filter } from './components';

// base contact list to test app
const testContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
  // done get contacts from local storage on first load
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem('contacts')) ?? [...testContacts]
    );
  });
  const [filter, setFilter] = useState('');

  // done save contacts to local storage on update
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // done function to save data sent on contact form submit
  const formSubmitHandler = newContact => {
    console.log('new contact', newContact);

    setContacts(contacts => {
      const normalizedContact = newContact.name.toLowerCase();
      // check for duplicated contacts
      if (
        contacts.find(
          contact => contact.name.toLowerCase() === normalizedContact,
        )
      ) {
        return alert(`${newContact.name} already exists!`);
      }
      // setting new contact to existing collection
      return [...contacts, newContact];
    });
  };

  // done function to delete contact
  const onDeleteContact = toDeleteId => {
    console.log(toDeleteId);

    return setContacts(contacts =>
      contacts.filter(contact => {
        return contact.id !== toDeleteId;
      }),
    );
  };

  // done function to track filter input changes
  const onFilterChange = e => {
    setFilter(e.target.value);
    getFilteredContacts();
  };

  // done function to display filtered contacts
  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  return (
    <Container>
      <h1>Your Contacts</h1>
      <Section>
        <AddContactForm onSubmit={formSubmitHandler} />
      </Section>
      <Section title="Contact List">
        <Filter value={filter} onFilterChange={onFilterChange} />
        <ContactList
          contacts={getFilteredContacts()}
          deleteOnClick={onDeleteContact}
        />
      </Section>
    </Container>
  );
}

export default App;
