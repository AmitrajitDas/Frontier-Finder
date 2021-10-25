import { useState, useEffect, createRef } from 'react'
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from '@mui/material'
import PlaceDetails from '../PlaceDetails/PlaceDetails'

import useStyles from './styles'

const List = ({ places, childClicked, loading }) => {
  const classes = useStyles()

  const [type, setType] = useState('restaurants')
  const [rating, setRating] = useState('')
  const [elRefs, setElRefs] = useState([])

  useEffect(() => {
    setElRefs((refs) =>
      Array(places.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    )
  }, [places])

  console.log({ childClicked })

  return (
    <div className={classes.container}>
      <Typography variant='h4'>
        Food, Dining & other Attractions around you
      </Typography>
      {loading ? (
        <CircularProgress size='5rem' />
      ) : (
        <>
          <FormControl className={classes.formControl}>
            <InputLabel id='type'>Type</InputLabel>
            <Select
              id='type'
              value={type}
              variant='standard'
              onChange={(e) => setType(e.target.value)}
            >
              <MenuItem value='restaurants'>Restaurants</MenuItem>
              <MenuItem value='hotels'>Hotels</MenuItem>
              <MenuItem value='attractions'>Attractions</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id='rating'>Rating</InputLabel>
            <Select
              id='rating'
              value={rating}
              variant='standard'
              onChange={(e) => setRating(e.target.value)}
            >
              <MenuItem value=''>All</MenuItem>
              <MenuItem value='3'>Above 3.0</MenuItem>
              <MenuItem value='4'>Above 4.0</MenuItem>
              <MenuItem value='4.5'>Above 4.5</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={3} className={classes.list}>
            {places?.map((place, i) => (
              <Grid ref={elRefs[i]} key={i} item xs={12}>
                <PlaceDetails
                  place={place}
                  selected={Number(childClicked) === i}
                  refProp={elRefs[i]}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  )
}

export default List
