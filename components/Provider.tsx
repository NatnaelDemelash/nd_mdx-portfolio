'use  client'

import { ThemeProvider, useTheme } from 'next-themes'

function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      enableSystem
      attribute='classes'
      defaultTheme='system'
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}

export default Provider
