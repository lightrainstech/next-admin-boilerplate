import { FormControl } from 'baseui/form-control'
import React from 'react'
import { Select } from 'baseui/select'
import { useController } from 'react-hook-form'

const SelectField = ({
  control,
  name,
  options = [],
  otherProps = {},
  defaultValue = '',
  rules = {}
}) => {
  const {
    field: { ref, ...inputProps },
    fieldState: { invalid, isTouched, isDirty, error },
    formState: { touchedFields, dirtyFields }
  } = useController({
    name,
    control,
    defaultValue: defaultValue === '' ? [] : defaultValue,
    rules: rules
  })

  const { onChange, ...otherInputProps } = inputProps

  return (
    <div>
      <FormControl
        label={() => (otherProps.label ? otherProps.label : '')}
        caption={() =>
          error ? (
            <span className="text-red-500 error-message">{error.message}</span>
          ) : otherProps.description ? (
            otherProps.description
          ) : (
            ''
          )
        }>
        <Select
          {...{
            ...otherInputProps,
            ...otherProps,
            options,

            controlRef: ref,
            onChange: params => inputProps.onChange(params.value),
            error: !!error
          }}
        />
      </FormControl>
    </div>
  )
}

export default SelectField
