'use client';

import { useState } from 'react';

import Home from '@mui/icons-material/Home'
import SettingsIcon from '@mui/icons-material/Settings';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import Tooltip from '@mui/material/Tooltip';
import Button from '@material-tailwind/react/components/Button';
import ThemeSwitcherComponent from './themeSwitch';

import { signIn, signOut, useSession } from 'next-auth/react';
import { NavItem } from './SideNav/NavItem';

const drawerWidth = 260;

export default function ResponsiveDrawer(
  { children, toggleDarkMode }: 
  { 
    children: React.ReactNode,  
    toggleDarkMode: (check: boolean) => void}) 
  {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
      setAnchorEl(null);
    };
  
  const appName = "Titulo Inicial" 
  const [ mobileOpen, setMobileOpen ] = useState(false);
  const { data: session } = useSession();

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
          SYS
        </Typography>
      </Toolbar>
     

      <List className="text-neutral-400">
        
        <Typography variant='subtitle2' className='ml-4 opacity-60'> Geral </Typography>
      
        <NavItem 
          text='Home' 
          target='/app' 
          icon={<Home/>} 
          handleDrawerToggle={handleDrawerToggle} 
          mobileOpen={mobileOpen}   
        />

         <NavItem 
          text='Dashboard' 
          target='/app/dashboard' 
          icon={<InboxIcon />} 
          handleDrawerToggle={handleDrawerToggle} 
          mobileOpen={mobileOpen}   
        />
        
        <NavItem 
          text='Administração'
          target='/app/administracao'
          icon={<SettingsIcon />}
          handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen} 
        />

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

          <div className='flex justify-center items-center'>

            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <Avatar sx={{ width: 32, height: 32 }}>{session?.user?.name?.charAt(0)}</Avatar>
              </IconButton>
            </Tooltip>

            <Menu
            id="account-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              elevation: 2,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper.ligth',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
            <MenuItem>
              <ThemeSwitcherComponent useDark={true} themeChanger={toggleDarkMode} />
              <Typography>
                Dark Mode
              </Typography>
            </MenuItem>

            <MenuItem sx={{p: 0}}>
              <Button fullWidth variant="text" onClick={() => { signOut({ redirect: true})}}> Logout</Button>
            </MenuItem>

            </Menu>

          </div>

        </Toolbar>


      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer          
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
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
