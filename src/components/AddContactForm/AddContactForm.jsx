// package import
import { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

// styles import
import './AddContactForm.css';

export function AddContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // unique IDs for inputs
  const nameInputId = uuidv4();
  const numberInputId = uuidv4();

  // function to handle changes on input
  const handleInputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value.trim());
        break;
      case 'number':
        setNumber(value.trim());
        break;
      default:
        return;
    }
  };

  // function to send data back to App
  const handleSubmit = e => {
    e.preventDefault();

    const newContactId = uuidv4();
    const newContact = { id: newContactId, name, number };

    onSubmit(newContact);

    clearInput();
  };

  // function to clear  after form submission
  const clearInput = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label className="contact-form__label" htmlFor={nameInputId}>
        Name
      </label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        id={nameInputId}
        value={name}
        onChange={handleInputChange}
        className="contact-form__input"
      />
      <label className="contact-form__label" htmlFor={numberInputId}>
        Number
      </label>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
        id={numberInputId}
        value={number}
        onChange={handleInputChange}
        className="contact-form__input"
      />
      <button type="submit" className="contact-form__btn">
        Add Contact
      </button>
    </form>
  );
}

AddContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
