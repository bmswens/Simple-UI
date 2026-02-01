// React 
import React from 'react'

// MUI
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { BrowserRouter } from 'react-router'
import Navigation from './nav/Navigation'
import Content from './content/Content'

function App() {

  const theme = createTheme({
    palette: {
      mode: "dark"
    }
  })

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navigation />
        <Content />
      </ThemeProvider>
    </BrowserRouter>
  )

}

export default App
