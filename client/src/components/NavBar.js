import * as React from 'react'

// imports from mui
import { AppBar, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Button, Avatar } from '@mui/material'

// imports from mui-icon package
import MenuIcon from '@mui/icons-material/Menu'

// imports from global_consts
import { pages, drawerWidth } from '../utils/global_consts'

// imports from react router
import { Link } from 'react-router-dom'

function NavBar() {

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>

      <Divider />
      <List>
        {pages.map((item) => {
            {/* conditional assignment of link so that resume button is turned into a anchor tag which directly takes to the pdf in google drive */}
 
          if (item.label == 'Resume') {
            return (
              <ListItem key={item.id} disablePadding>
                <ListItemButton
                  component='a'
                  href={item.route}
                  sx={{ textAlign: 'center' }}
                  target='_blank'
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>)

          }
          return (<ListItem key={item.id} disablePadding>
            <ListItemButton
              sx={{ textAlign: 'center' }}
              component={Link}
              to={item.route}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>)
        })}
      </List>
    </Box>
  );


  return (
    <Box sx={{ display: 'flex' }}>
      {/* Avatar for the top of drawer should be right here       */}
      <CssBaseline />
      <AppBar component='nav' variant='none' sx={{ position: 'sticky' }}>
        <Toolbar sx={{ bgcolor: 'rgb(256,256,256,1)' }}>
          <IconButton
            //color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Box */}
          {/*   variant='h6' */}
          {/*   component='div' */}
          {/*   sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }} */}
          {/* > */}
          {/* <Avatar src={CatPicture} /> */}
          {/* </Box> */}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>

            {/* conditional assignment of link so that resume button is turned into a anchor tag which directly takes to the pdf in google drive */}
            {pages.map((item) => {
              if (item.label == 'Resume') {
                return (<Button
                  key={item.id}
                  component='a'
                  href={item.route}
                  target='_blank'
                >
                  {item.label}
                </Button>)
              }
              return (<Button
                key={item.id}
                component={Link}
                to={item.route}
              >
                {item.label}
              </Button>)
            })}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: `${drawerWidth}px` },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}


export default NavBar;
