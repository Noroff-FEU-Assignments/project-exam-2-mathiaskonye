import PropTypes from "prop-types";

export default function ValidationError({ children }) {
  return <h5 className="form-error alert-danger mt-2">{children}</h5>;
}

ValidationError.proptTypes = {
  children: PropTypes.node.isRequired,
};