// package import
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

// styles import
import './Filter.css';

export function Filter({ value, onFilterChange }) {
  const filterInputId = uuidv4();

  return (
    <div className="filter">
      <label htmlFor={filterInputId} className="filter__label">
        Search
      </label>
      <input
        type="text"
        className="filter__input"
        id={filterInputId}
        value={value}
        onChange={onFilterChange}
      />
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
