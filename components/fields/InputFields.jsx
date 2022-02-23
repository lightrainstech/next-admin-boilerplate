import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";
import React from "react";
import { useController } from "react-hook-form";

const InputField = ({
  control,
  name,
  otherProps = {},
  defaultValue = "",
  rules = {},
}) => {
  const {
    field: { ref, ...inputProps },
    fieldState: { invalid, isTouched, isDirty, error },
    formState: { touchedFields, dirtyFields },
  } = useController({
    name,
    control,
    rules: rules,
    defaultValue: defaultValue,
  });

  return (
    <div>
      <FormControl
        label={() => (otherProps.label ? otherProps.label : "")}
        caption={() =>
          error ? (
            <span className="text-red-500 error-message">{error.message}</span>
          ) : otherProps.description ? (
            otherProps.description
          ) : (
            ""
          )
        }
      >
        <Input
          {...{
            ...inputProps,
            ...otherProps,

            error,
            inputRef: ref,
          }}
        />
      </FormControl>
    </div>
  );
};

export default InputField;
