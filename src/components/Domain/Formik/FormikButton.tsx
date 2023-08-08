import Button, { ButtonProps, ButtonSizeProps } from '@/UI/Button'
import { useFormikContext } from 'formik'
import React, { memo } from 'react'

export type FormikButtonProps = Omit<ButtonProps, 'onPress' | 'size' | 'height'> & ButtonSizeProps

const FormikButton: React.FC<FormikButtonProps> = ({ disabled, ...rest }): JSX.Element => {
  const { isSubmitting, handleSubmit } = useFormikContext()

  return (
    <Button disabled={disabled || isSubmitting} onPress={handleSubmit as any as ButtonProps['onPress']} {...rest} />
  )
}

export default memo(FormikButton)
