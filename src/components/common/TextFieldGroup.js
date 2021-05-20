import React from "react";
import { TextField } from "@material-ui/core";
import { PropTypes } from "prop-types";
import { Controller } from "react-hook-form";

const TextFieldGroup = ({
  name,
  id,
  className,
  margin,
  variant,
  defaultValue,
  control,
  rules,
  label,
  register,
}) => {
  console.log(register);
  return (
    <Controller
      render={() => (
        <TextField label={label} fullWidth variant={variant} margin={margin} />
      )}
      id={id}
      name={name}
      className={className}
      control={control}
      defaultValue={defaultValue}
      register={register}
      rules={rules}
    />
  );
};

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.string,
  maxLength: PropTypes.string,
  minLength: PropTypes.string,
};

TextFieldGroup.defaultValue = {
  type: "text",
};

export default TextFieldGroup;
