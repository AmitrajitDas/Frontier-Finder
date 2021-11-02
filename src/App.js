import { useState, useEffect } from 'react'
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles'
import { Paper, CssBaseline } from '@mui/material'
import Grid from '@mui/material/Grid'

import { getPlacesData, getWeatherData } from './api/TrippierAPI'

import Navbar from './components/Header/Navbar'
import Map from './components/Map/Map'
import List from './components/List/List'

const App = () => {
  const [dark, setDark] = useState(true)
  const [places, setPlaces] = useState([])
  const [weather, setWeather] = useState([])
  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState({})
  const [childClicked, setChildClicked] = useState(null)
  const [loading, setLoading] = useState(false)
  const [type, setType] = useState('restaurants')
  const [rating, setRating] = useState('')
  const [filteredPlaces, setFilteredPlaces] = useState([])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude })
      }
    )
  }, [])

  useEffect(() => {
    setFilteredPlaces(places.filter((place) => place.rating > rating))
  }, [rating])

  useEffect(() => {
    if (bounds.sw && bounds.ne) {
      setLoading(true)

      getWeatherData(coordinates.lat, coordinates.lng).then((data) => {
        console.log(data)
        setWeather(data)
      })
      getPlacesData(type, bounds && bounds.ne, bounds && bounds.sw).then(
        (data) => {
          console.log(data)
          setPlaces(
            data?.filter((place) => place.name && place.num_reviews > 0)
          )
          setFilteredPlaces([])
          setLoading(false)
        }
      )
    }
  }, [type, bounds])

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
          <Navbar
            dark={dark}
            setDark={setDark}
            setCoordinates={setCoordinates}
          />
          <Grid container spacing={3} style={{ width: '100%', height: '100%' }}>
            <Grid item xs={12} md={4}>
              <List
                places={filteredPlaces.length ? filteredPlaces : places}
                childClicked={childClicked}
                loading={loading}
                type={type}
                setType={setType}
                rating={rating}
                setRating={setRating}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Map
                coordinates={coordinates}
                setCoordinates={setCoordinates}
                setBounds={setBounds}
                places={filteredPlaces.length ? filteredPlaces : places}
                setChildClicked={setChildClicked}
                weather={weather}
                dark={dark}
              />
            </Grid>
          </Grid>
        </Paper>
      </ThemeProvider>
    </div>
  )
}

export default App
