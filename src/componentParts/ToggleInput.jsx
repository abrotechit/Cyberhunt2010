import React, { useState } from "react";
import PropTypes from "prop-types";

const InputComponent = ({
  role,
  onChange,
  disabled,
  className,
  placeholder,
  required,
  value,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <input
        role={role}
        type={showPassword ? "text" : "password"}
        disabled={disabled}
        onChange={onChange}
        className={className}
        placeholder={placeholder}
        required={required}
        value={value}
        autoComplete="new-password"
      />
      <i
        aria-hidden="true"
        onClick={() => setShowPassword(!showPassword)}
        className={
          showPassword ? "mdi mdi-eye pass-icon" : "mdi mdi-eye-off pass-icon"
        }
      />
    </>
  );
};

InputComponent.defaultProps = {
  disabled: false,
  className: "",
  placeholder: "Enter Password",
  required: true,
  role: "input",
};

InputComponent.propTypes = {
  role: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string.isRequired,
};

export default InputComponent;
