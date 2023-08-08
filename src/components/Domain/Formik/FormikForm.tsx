import { Formik, FormikConfig, FormikHelpers, type FormikValues } from 'formik'
import React, { memo, useCallback } from 'react'
import { View, ViewProps } from 'react-native'

export type FormikFormProps<Values, ExtraProps> = FormikConfig<Values> &
  ExtraProps &
  React.PropsWithChildren & {
    style?: ViewProps['style']
  }

function FormikForm<Values extends FormikValues = FormikValues, ExtraProps = {}>({
  children,
  onSubmit,
  style,
  ...rest
}: FormikFormProps<Values, ExtraProps>): JSX.Element {
  const handleSubmit = useCallback(
    (values: Values, helper: FormikHelpers<Values>) => {
      console.log('FormikForm (onSubmit):', values)

      return onSubmit(values, helper)
    },
    [onSubmit],
  )

  return (
    <Formik {...rest} onSubmit={handleSubmit}>
      <View style={style}>{children}</View>
    </Formik>
  )
}

export default memo(FormikForm)
