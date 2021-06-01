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
  ref,
}) => {
  return (
    <Controller
      render={({ field: { onChange, value }, fieldState: { error, ref } }) => (
        <TextField
          label={label}
          value={value}
          onChange={onChange}
          fullWidth
          variant={variant}
          margin={margin}
          error={!!error}
          helperText={error ? error.message : null}
        />
      )}
      id={id}
      name={name}
      className={className}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      ref={ref}
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
