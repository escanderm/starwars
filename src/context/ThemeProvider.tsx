import React, { createContext, useContext, useState } from 'react'
import { changeCssVars } from '../services/changeCssVars'

const ThemeContext = createContext({
  theme: 'neutral',
  change: {}
})

export const THEME_LIGHT = 'light'
export const THEME_DARK = 'dark'
export const THEME_NEUTRAL = 'neutral'
export interface ITheme {
  theme: string
  change: (x: string) => void
}
type ProviderProps = {
  children: any
  props?: any
}
export const ThemeProvider = ({ children, ...props }: ProviderProps) => {
  const [theme, setTheme] = useState<string>(THEME_LIGHT)

  const change = (name: string) => {
    setTheme(name)
    changeCssVars(name)
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        change
      }}
      {...props}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider

export const useTheme = () => {
  return useContext(ThemeContext)
}
