import React from 'react'
import { Autocomplete } from '@react-google-maps/api'
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'

import useStyles from './styles'

const Navbar = ({ dark, setDark }) => {
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
          {dark ? (
            <DarkModeIcon
              style={{
                width: '2rem',
                height: '2rem',
                marginRight: '2rem',
                cursor: 'pointer',
              }}
              onClick={() => setDark(false)}
            />
          ) : (
            <LightModeIcon
              style={{
                width: '2rem',
                height: '2rem',
                marginRight: '2rem',
                cursor: 'pointer',
              }}
              onClick={() => setDark(true)}
            />
          )}

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
