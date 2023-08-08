import React, { useMemo } from 'react'
import LayoutProvider from './LayoutProvider'
import { FlexStyle, StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export type LayoutSafeAreaInsetsType = 'all' | 'top' | 'bottom' | 'inline' | 'block' | 'none'

export type LayoutProps = React.PropsWithChildren & {
  safeAreaInsets?: LayoutSafeAreaInsetsType
}

const Layout: React.FC<LayoutProps> = ({ children, safeAreaInsets = 'all' }): JSX.Element => {
  const insets = useSafeAreaInsets()

  const safeAreaStyle = useMemo(() => {
    const padding: Pick<FlexStyle, 'paddingTop' | 'paddingBottom' | 'paddingLeft' | 'paddingRight'> = {}

    if (safeAreaInsets === 'none') {
      return padding
    }

    if (['all', 'top', 'block'].includes(safeAreaInsets)) {
      padding.paddingTop = insets.top
    }

    if (['all', 'bottom', 'block'].includes(safeAreaInsets)) {
      padding.paddingBottom = insets.bottom
    }

    if (['all', 'inline'].includes(safeAreaInsets)) {
      padding.paddingLeft = insets.left
      padding.paddingRight = insets.right
    }

    return padding
  }, [safeAreaInsets, insets])

  return (
    <LayoutProvider>
      <View style={[styles.layout, safeAreaStyle]}>{children}</View>
    </LayoutProvider>
  )
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
})

export default Layout
