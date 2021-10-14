import { useState } from 'react'
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles'
import { Paper, CssBaseline } from '@mui/material'
import Grid from '@mui/material/Grid'

import Navbar from './components/Header/Navbar'
import Map from './components/Map/Map'
import List from './components/List/List'

const App = () => {
  const [dark, setDark] = useState(true)

  const theme = responsiveFontSizes(
    createTheme({
      typography: {
        fontFamily: '"Open Sans"',
        color: {
          main: '#fff',
          secondary: 'rgba(255, 255, 255, 0.7)',
          disabled: 'rgba(255, 255, 255, 0.5)',
        },
      },
      palette: {
        mode: dark ? 'dark' : 'light',
        // primary: { main: '#032541' },
        // secondary: { main: '#39A2DB' },
        // alternate: { main: '#161616' },
        // error: { main: '#F8485E' },
      },
    })
  )

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Paper>
          <CssBaseline />
          <Navbar dark={dark} setDark={setDark} />
          <Grid
            container
            spacing={3}
            style={{ width: '100%', height: '60rem' }}
          >
            <Grid item xs={12} md={4}>
              <List />
            </Grid>
            <Grid item xs={12} md={8}>
              <Map />
            </Grid>
          </Grid>
        </Paper>
      </ThemeProvider>
    </div>
  )
}

export default App
