import { ShoppingCart } from '@mui/icons-material'
import { AppBar, Badge, Box, IconButton, List, Switch, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
interface Props{
    ChangeTheme:()=>void,
    isLight:boolean
}

const navStyles={
  color:'inherit' ,mr:2,typography:'h6',textDecoration:'none',
  '&:hover':{
    color:'grey.400'
  },
  '&.active':{
    color:'text.secondary'
  }
}
const Header = ({ChangeTheme,isLight}:Props) => {
  return (
    <AppBar position='static' sx={{mb:4}}>
        <Toolbar sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
           <Box>
           <Typography variant='h6' component={NavLink} to='/' sx={navStyles}>
                RE-STORE
            </Typography>
            <Switch checked={!isLight}  onChange={ChangeTheme} color="secondary" />
           </Box>
            <Box>
            <List>
              <List sx={navStyles}
               component={NavLink} to='/'>Home</List>
                <List sx={navStyles}
               component={NavLink} to='/catalog'>Catalog</List>
                <List sx={navStyles}
               component={NavLink} to='/about'>About</List>
                <List sx={navStyles}
               component={NavLink} to='/contact'>Contact</List>
            </List>
            </Box>
            <Box sx={{display:'flex',alignItems:'center'}}>
            <IconButton size='large' sx={{color:'inherit'}} >
              <Badge badgeContent={4} color={'secondary'}>
              <ShoppingCart/>
              </Badge>
            </IconButton>
            <List>
              <List sx={navStyles}
               component={NavLink} to='/register'>Register</List>
                 <List sx={navStyles}
               component={NavLink} to='/login'>Login</List>
               </List>
            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Header