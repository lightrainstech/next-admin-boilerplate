import { Button, KIND, SHAPE } from 'baseui/button'

import React from 'react'

const SubmitButton = ({
  submitText,
  isFinal,
  isValid,
  handleStep,

  ...rest
}) => {
  const thisProps = {
    type: 'submit',
    ...rest
  }
  return (
    <Button kind={KIND.secondary} {...thisProps} {...rest}>
      {submitText}
    </Button>
  )
}
export default SubmitButton
