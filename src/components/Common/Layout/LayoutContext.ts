import { createContext } from 'react'

export type LayoutContextValue = null

const LayoutContext = createContext<LayoutContextValue>(null)

export default LayoutContext
