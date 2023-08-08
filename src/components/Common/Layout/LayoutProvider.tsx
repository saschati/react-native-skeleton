import React, { useMemo } from 'react'
import LayoutContext from './LayoutContext'

export type LayoutProviderProps = React.PropsWithChildren

const LayoutProvider: React.FC<LayoutProviderProps> = ({ children }): JSX.Element => {
  const context = useMemo(() => {
    return null
  }, [])

  return <LayoutContext.Provider value={context}>{children}</LayoutContext.Provider>
}

export default LayoutProvider
