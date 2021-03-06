// package import
import PropTypes from 'prop-types';

// styles import
import './Container.css';

export function Container({ children }) {
  return <div className="container">{children}</div>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired, //?? node
};
