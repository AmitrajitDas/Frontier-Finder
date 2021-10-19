import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery, Rating } from '@mui/material'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'

import useStyles from './styles'

const Map = ({ coordinates, setCoordinates, setBounds }) => {
  const classes = useStyles()
  const isMobile = useMediaQuery('(min-width: 600px)')

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyC6UZ6F_EJFZFR53j9CW54KlJacc6eE3eQ' }}
        defaultCenter={coordinates}
        ceter={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng })
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
        }}
        onChildClick={''}
      ></GoogleMapReact>
    </div>
  )
}

export default Map
