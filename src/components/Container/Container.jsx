// import packages
import PropTypes from 'prop-types';

// import styles
import './Container.css';

export function Container({ children }) {
  return <div className="container">{children}</div>;
}

Container.propTypes = {
  children: PropTypes.object.isRequired,
};
