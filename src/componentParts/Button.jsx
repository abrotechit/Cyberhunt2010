import React from 'react';
import { Spinner } from 'reactstrap';
import PropTypes from 'prop-types';

const ButtonComponent = ({
  role,
  onClick,
  disabled,
  className,
  children,
  content,
  size,
  loading,
  variant,
  style,
}) => (
  <button
    type="button"
    role={role}
    disabled={disabled}
    onClick={onClick}
    className={className}
    style={style}
  >
    {console.log(loading)}
    {loading ? (
      <Spinner
        as="span"
        animation="border"
        size={size || 'md'}
        role="status"
        aria-hidden="true"
        variant={variant || 'light'}
      />
    ) : (
      content || children
    )}
  </button>
);

ButtonComponent.defaultProps = {
  disabled: false,
  className: 'btn btn-primary',
  content: 'Enter',
  role: 'input',
  variant: 'light',
  size: 'md',
  children: '',
};

ButtonComponent.propTypes = {
  role: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  content: PropTypes.string,
  children: PropTypes.node,
  loading: PropTypes.bool.isRequired,
};

export default ButtonComponent;
