import * as React from 'react'
import { AppBar, Box, CssBaseline, Divider, Drawer,IconButton,List,ListItem,ListItemButton,ListItemText,Toolbar,Button,Avatar} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { pages, drawerWidth } from '../utils/global_consts'

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
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.label} />

            </ListItemButton>
          </ListItem>)
        })}
      </List>
    </Box>
  );


  return (
    <Box sx={{ display: 'flex' }}>
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
            {pages.map((item) => (
              <Button key={item.id}>
                {item.label}
              </Button>
            ))}
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
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}


export default NavBar;
