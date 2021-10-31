// import packages
import { useState } from 'react';

// import components
import { AddContactForm } from './components';
import { Container } from './components';

// base contact list to test app
const testContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
  const [contacts, setContacts] = useState([...testContacts]);

  // save contacts to local storage on update
  // get contacts from local storage on first upload

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

  // todo function to delete contact
  const onDeleteContact = () => {};

  // todo function to track filter input changes
  const onFilterChange = () => {};

  // todo function to display filtered contacts
  const getFilteredContacts = () => {};

  return (
    <Container>
      <h1>Yor Contacts</h1>
      <AddContactForm onSubmit={formSubmitHandler} />
    </Container>
  );
}

export default App;
