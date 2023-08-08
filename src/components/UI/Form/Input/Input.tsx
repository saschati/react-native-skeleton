import colors from '@/config/constants/colors'
import React, { useImperativeHandle, useRef } from 'react'
import { StyleSheet, Text, TextInput, TextInputProps, View, ViewProps } from 'react-native'

export type InputHandle = {
  focus: () => void
}

export type InputProps = TextInputProps & {
  ref?: React.Ref<TextInput> | null
  errorMessage?: string
  containerStyle?: ViewProps['style']
}

const Input = React.forwardRef<InputHandle, InputProps>(
  ({ containerStyle, style, errorMessage, ...rest }, ref): JSX.Element => {
    const inputRef = useRef<TextInput>(null)

    const inputHandler = () => ({
      focus: () => inputRef.current?.focus(),
      blur: () => inputRef.current?.blur(),
      clear: () => inputRef.current?.clear(),
      isFocused: () => inputRef.current?.isFocused(),
    })

    useImperativeHandle(ref, inputHandler, [])

    return (
      <View style={[styles.container, containerStyle]}>
        <TextInput ref={inputRef} style={[styles.input, style]} {...rest} />
        {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
      </View>
    )
  },
)

const styles = StyleSheet.create({
  container: {},
  input: {
    borderBottomWidth: 1,
    overflow: 'hidden',
    padding: 0,
    paddingTop: 10,
    paddingBottom: 10,
  },
  error: {
    marginTop: 4,
    color: colors.READ,
  },
})

export default Input
