import React from 'react'
import { Text, View } from 'react-native'

export type ErrorBoundaryProps = Required<React.PropsWithChildren> & {
  message: string
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps> {
  state = {
    hasError: false,
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary error: ', error, errorInfo)
  }

  clearError = () => {
    this.setState({ hasError: false })
  }

  render(): JSX.Element {
    if (this.state.hasError) {
      return (
        <View>
          <Text>{this.props.message}</Text>
        </View>
      )
    }

    return this.props.children as JSX.Element
  }
}

export default ErrorBoundary
