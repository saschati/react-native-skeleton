import Input, { InputProps } from '@/UI/Form/Input'
import { useFormikContext } from 'formik'
import React, { memo, useMemo } from 'react'

export type FormikInputProps = InputProps & {
  name: string
}

const FormikInput: React.FC<FormikInputProps> = ({ name, ...rest }): JSX.Element => {
  const { handleChange, handleBlur, getFieldMeta } = useFormikContext()

  const meta = getFieldMeta(name)

  const errorMessage = (meta.touched && meta.error) || undefined
  const value = meta.value as string

  const handlers = useMemo(() => {
    return {
      onChangeText: handleChange(name),
      onBlur: handleBlur(name),
    }
  }, [handleChange, handleBlur, name])

  return <Input errorMessage={errorMessage} value={value} {...handlers} {...rest} />
}

export default memo(FormikInput)
