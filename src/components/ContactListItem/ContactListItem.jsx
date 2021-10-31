// package import
import PropTypes from 'prop-types';

// styles import
import './ContactListItem.css';

export function ContactListItem({ id, name, number, deleteOnClick }) {
  return (
    <div className="contact">
      <span>
        <span className="contact__name">{name}: </span>
        <span className="contact__number">{number}</span>
      </span>
      <button
        type="button"
        className="contact__dlt-btn"
        onClick={() => deleteOnClick(id)}
      >
        Delete
      </button>
    </div>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteOnClick: PropTypes.func.isRequired,
};
