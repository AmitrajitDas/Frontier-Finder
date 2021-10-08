import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'

import Navbar from './components/Header/Navbar'
import Map from './components/Map/Map'
import List from './components/List/List'

const App = () => {
  const theme = responsiveFontSizes(
    createTheme({
      // typography: {
      //   fontFamily: '"Ubuntu"',
      //   color: {
      //     main: '#fff',
      //     secondary: 'rgba(255, 255, 255, 0.7)',
      //     disabled: 'rgba(255, 255, 255, 0.5)',
      //   },
      // },
      // palette: {
      //   primary: { main: '#032541' },
      //   secondary: { main: '#39A2DB' },
      //   alternate: { main: '#161616' },
      //   error: { main: '#F8485E' },
      //   background: {
      //     default: '#043359',
      //   },
      // },
    })
  )

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Grid container spacing={3} style={{ width: '100%' }}>
          <Grid item xs={12} md={4}>
            <List />
          </Grid>
          <Grid item xs={12} md={4}>
            <Map />
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  )
}

export default App
