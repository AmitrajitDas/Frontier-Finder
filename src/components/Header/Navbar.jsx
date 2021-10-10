import React from 'react'
import { Autocomplete } from '@react-google-maps/api'
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

import useStyles from './styles.js'

const Navbar = () => {
  const classes = useStyles()

  return (
    <AppBar position='static'>
      <Toolbar className={classes.toolbar}>
        <Typography
          variant='h4'
          className={classes.title}
          style={{ fontWeight: 'bold', textTransform: 'uppercase' }}
        >
          TriPPier
        </Typography>
        <Box display='flex'>
          <Typography variant='h6' className={classes.title}>
            Explore new places
          </Typography>
          {/* <Autocomplete> */}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder='Search…'
              classes={{ root: classes.inputRoot, input: classes.inputInput }}
            />
          </div>
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
