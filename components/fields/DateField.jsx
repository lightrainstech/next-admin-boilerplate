import { DatePicker } from 'baseui/datepicker'
import { FormControl } from 'baseui/form-control'
import React from 'react'
import { useController } from 'react-hook-form'

const DateField = ({
  control,
  name,
  otherProps = {},

  rules = {},
  defaultValue = ''
}) => {
  const {
    field: { ref, ...inputProps },
    fieldState: { invalid, isTouched, isDirty, error },
    formState: { touchedFields, dirtyFields }
  } = useController({
    name,
    control,
    rules: rules,
    defaultValue: defaultValue
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
        <DatePicker
          {...{
            ...otherInputProps,
            ...otherProps,
            inputRef: ref,
            onChange: ({ date }) =>
              onChange(Array.isArray(date) ? date : [date]),
            error: !!error
          }}
        />
      </FormControl>
    </div>
  )
}

export default DateField
