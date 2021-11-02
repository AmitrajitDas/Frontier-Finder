import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery, Rating } from '@mui/material'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'

import mapStylesDark from './mapStylesDark'
import mapStylesLight from './mapStylesLight'
import useStyles from './styles'

const Map = ({
  coordinates,
  setCoordinates,
  setBounds,
  places,
  setChildClicked,
  weather,
  dark,
}) => {
  const classes = useStyles()
  const isMobile = useMediaQuery('(max-width: 600px)')

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCFlvY2vQdU2nUEIMOTx7LVWPlbjiFeSaA' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          styles: dark ? mapStylesDark : mapStylesLight,
        }}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng })
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places &&
          places.map((place, i) => (
            <div
              className={classes.markerContainer}
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={i}
            >
              {isMobile ? (
                <LocationOnOutlinedIcon color='primary' fontSize='large' />
              ) : (
                <Paper elevation={3} className={classes.paper}>
                  <Typography
                    className={classes.typography}
                    variant='subtitle2'
                    gutterBottom
                  >
                    {' '}
                    {place.name}
                  </Typography>
                  <img
                    className={classes.pointer}
                    src={
                      place.photo
                        ? place.photo.images.large.url
                        : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'
                    }
                    alt={place.name}
                  />
                  <Rating
                    name='read-only'
                    size='small'
                    value={Number(place.rating)}
                    readOnly
                  />
                </Paper>
              )}
            </div>
          ))}
        {weather?.list?.map((data, i) => (
          <div lat={data.coord.lat} lng={data.coord.lon} key={i}>
            <img
              // height={100}
              src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
              alt='weather-icon'
            />
          </div>
        ))}
      </GoogleMapReact>
    </div>
  )
}

export default Map
