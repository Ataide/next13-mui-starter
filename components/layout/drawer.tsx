'use client';

import Home from '@mui/icons-material/Home'
import SettingsIcon from '@mui/icons-material/Settings';
// import MailIcon from '@mui/icons-material/Mail';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname  } from 'next/navigation';
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
import ThemeSwitcherComponent from './themeSwitch';
import { useTimeout } from 'usehooks-ts';
import Search from '../search/Search';
import Example from './example';
import { Grid, Paper, styled } from '@mui/material';

const drawerWidth = 260;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ResponsiveDrawer(
  { children, toggleDarkMode }: 
  { 
    children: React.ReactNode,  
    toggleDarkMode: (check: boolean) => void}) 
  {
  
  const appName = "Titulo Inicial"
  const logo = "Logo"

  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
      <Toolbar className='justify-center border-pink-400'>
        <Typography variant="h5" noWrap component="div" className="font-bold text-amber-500">
          ADA
        </Typography>
        <Typography variant="h5" noWrap component="div" className="font-extrabold text-neutral-500">
          SISTEMAS
        </Typography>
      </Toolbar>
     

      <List className="text-neutral-400">
        <Typography variant='subtitle2' className='ml-4 opacity-60'> Geral </Typography>
      
        <ListItem disablePadding 
          sx={{ 
            display: 'block',  
            borderRight: pathname === '/' ? '3px solid' : 'none',
            borderRightColor: 'primary.main'
          }}
        >
          <ListItemButton LinkComponent={Link}
            onClick={handleDrawerToggle}
            href='/'
            selected={ pathname === '/'}
            sx={{
              minHeight: 48,
              justifyContent: mobileOpen ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 10,
                mr: mobileOpen ? 3 : 3,
                justifyContent: 'center',
                color: pathname === '/' ? 'primary.main' : '',

              }}
            >
              <Home />
            </ListItemIcon>
            <ListItemText primary={'Home'} sx={{ opacity: mobileOpen ? 1 : 1}} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding 
          sx={{ 
            display: 'block', 
            borderRight: pathname === '/dashboard' ? '3px solid' : 'none  ',
            borderRightColor: 'primary.main' 
          }}
          >
          <ListItemButton LinkComponent={Link}
            onClick={handleDrawerToggle}
            href='/dashboard'
            selected={ pathname === '/dashboard'}
            sx={{
              minHeight: 48,
              justifyContent: mobileOpen ? 'initial' : 'center',
              
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: mobileOpen ? 3 : 3,
                justifyContent: 'center',
                color: pathname === '/dashboard' ? 'primary.main' : '',
              }}
            >
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={'Dashboard'} sx={{ opacity: mobileOpen ? 1 : 1 }} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding 
          sx={{ 
            display: 'block', 
            borderRight: pathname === '/administracao' ? '3px solid' : 'none', 
            borderRightColor: 'primary.main' 
          }}>
            
          <ListItemButton LinkComponent={Link}
            onClick={handleDrawerToggle}
            href='/administracao'
            selected={  pathname.includes('/administracao') }
            sx={{
              minHeight: 48,
              justifyContent: mobileOpen ? 'initial' : 'center',
              
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: mobileOpen ? 3 : 3,
                justifyContent: 'center',
                color: pathname.includes('/administracao') ? 'primary.main' : '',
              }}
            >
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary={'Administração'} sx={{ opacity: mobileOpen ? 1 : 1 }} />
          </ListItemButton>
        </ListItem>

      </List>
    </>
  
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar className='justify-between' sx={
            (theme) => ({
              backgroundColor: theme.palette.mode.includes('dark') ? theme.palette.background.paper : ''
            })
          }>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={[
              { mr: 2, display: { sm: 'none' }},
              (theme) => ({
                backgroundColor: '#fff'
              }),
              ]}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            { appName }
          </Typography>

        <ThemeSwitcherComponent useDark={true} themeChanger={toggleDarkMode} />
        </Toolbar>


      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer          
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none', backgroundImage: 'none', border: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block', backgroundImage: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        
        <Toolbar />
        {children}
       
        
      </Box>
    </Box>
  );
}
