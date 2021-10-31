// package import
import PropTypes from 'prop-types';

// styles import
import './ContactList.css';

// component import
import { ContactListItem } from '..';

export function ContactList({ contacts, deleteOnClick }) {
  return (
    <ul className="contacts">
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className="contacts__item">
            <ContactListItem
              name={name}
              number={number}
              id={id}
              deleteOnClick={deleteOnClick}
            />
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
  deleteOnClick: PropTypes.func.isRequired,
};
