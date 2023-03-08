import React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { appTheme } from '../themes/theme'
import Container from '@mui/material/Container'

export function Layout ({ children }) {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline enableColorScheme />
      <Header />
      <Container maxWidth='xl' style={{ paddingTop: '1rem', paddingBottom: '4.5rem' }}>
        {children}
      </Container>
      <Footer />
    </ThemeProvider>
  )
}
