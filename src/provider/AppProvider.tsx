import React, { FC, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/global/theme'

type Props = { children: ReactNode }

export const AppProvider: FC<Props> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
