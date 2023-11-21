import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { Link } from 'react-router-dom';

import { pages, drawerWidth } from '../utils/global_consts'

function ResponsiveDrawer(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box>
      {/* <Toolbar /> */}
      {/* <Divider /> */}
    
      <List>
        {pages.map((page) => {
       /*    if (page.label == 'Resume') { */
           //   return <ListItem key={page.id} disablePadding>
          //     <ListItemButton
          //       component='a'
          //       href={page.route}
          //       sx={{
          //         textAlign: 'center'
          //       }}
          //       target='_blank'
          //     >
          //       {/* <ListItemIcon> */}
          //       {/*   {page.id % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
          //       {/* </ListItemIcon> */}
          //       <ListItemText primary={page.label} />
          //     </ListItemButton>
          //   </ListItem>

          // }
          return <ListItem key={page.id} disablePadding>
            <ListItemButton
              sx={{
                textAlign: 'center'
              }}

              component={Link}
              to={page.route}
              
            >
              {/* <ListItemIcon> */}
              {/*   {page.id % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              {/* </ListItemIcon> */}
              <ListItemText primary={page.label} />
            </ListItemButton>
          </ListItem>
        })}
      </List>
    </Box>
  );


  return (
    <>
      <CssBaseline />
      <Box sx={{ display: 'flex' ,border:'none'}}>
        <AppBar
          position='sticky'
        >
          <Toolbar
            sx={{
              display: { sm: 'none' }
            }}
          >
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            {/* <Typography variant='h6' noWrap component='div'> */}
            {/*   Zishan Siddique */}
            {/* </Typography> */}
          </Toolbar>
        </AppBar>
      
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
          <Drawer
            variant='persistent'
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: `${drawerWidth-100}px` },
            }}
            open
          >
            {drawer}
          </Drawer>
       
      </Box>
    </>
  );
}


export default ResponsiveDrawer;

