import React, { useMemo } from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps, View, ViewProps } from 'react-native'
import styles from './Button.style'

type ButtonSize = 'small' | 'medium' | 'large' | 'custom'

export type ButtonSizeProps =
  | {
      size: 'custom'
      height: number
    }
  | {
      size?: Exclude<ButtonSize, 'custom'>
      height?: never
    }

export type ButtonProps = TouchableOpacityProps &
  ButtonSizeProps & {
    title: string
    style?: ViewProps['style']
  }

const Button: React.FC<ButtonProps> = ({ title, size = 'small', height, style, ...rest }): JSX.Element => {
  height = useMemo(() => {
    const SIZE_TO_HEIGHT = {
      small: 40,
      medium: 60,
      large: 80,
      custom: height,
    }

    return SIZE_TO_HEIGHT[size]
  }, [height, size]) as number

  const fontSize = height * 0.4

  return (
    <TouchableOpacity {...rest} style={{ height }}>
      <View style={[styles.button, style]}>
        <Text style={[styles.title, { fontSize }]}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Button
