'use client';

// import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import MuiDrawer from '@mui/material/Drawer';
// import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import CssBaseline from '@mui/material/CssBaseline';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
import Home from '@mui/icons-material/Home'
import SettingsIcon from '@mui/icons-material/Settings';
// import MailIcon from '@mui/icons-material/Mail';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname  } from 'next/navigation';


// const drawerWidth = 240;

// const openedMixin = (theme: Theme): CSSObject => ({
//   width: drawerWidth,
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: 'hidden',
// });

// const closedMixin = (theme: Theme): CSSObject => ({
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: 'hidden',
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up('sm')]: {
//     width: `calc(${theme.spacing(8)} + 1px)`,
//   },
// });

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'flex-end',
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
// }));

// interface AppBarProps extends MuiAppBarProps {
//   open?: boolean;
// }

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })<AppBarProps>(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(['width', 'margin'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//     width: drawerWidth,
//     flexShrink: 0,
//     whiteSpace: 'nowrap',
//     boxSizing: 'border-box',
//     ...(open && {
//       ...openedMixin(theme),
//       '& .MuiDrawer-paper': openedMixin(theme),
//     }),
//     ...(!open && {
//       ...closedMixin(theme),
//       '& .MuiDrawer-paper': closedMixin(theme),
//     }),
//   }),
// );

// export default function MiniDrawer({ children }: { children: React.ReactNode}) {

//   const theme = useTheme();  
//   const pathname = usePathname();
  
//   const [open, setOpen] = useState(true);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   const [mobileOpen, setMobileOpen] = useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const drawer = (
//     <div>
//       <Toolbar />
//       <Divider />
//       <List>
//         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {['All mail', 'Trash', 'Spam'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );


//   return (
//    <>
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar position="fixed" open={open}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             sx={{
//               marginRight: 5,
//               ...(open && { display: 'none' }),
//             }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap component="div">
//             ...
//           </Typography>
//         </Toolbar>
//       </AppBar>
      
//       <Drawer variant="permanent" open={open}>
//         <DrawerHeader>
         
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
//           </IconButton>
//         </DrawerHeader>
//         <Divider />
//         <List>
//             <ListItem disablePadding sx={{ display: 'block' }}>
//               <ListItemButton LinkComponent={Link}
//                 href='/'
//                 selected={ pathname === '/'}
//                 sx={{
//                   minHeight: 48,
//                   justifyContent: open ? 'initial' : 'center',
                  
//                   px: 2.5,
//                 }}
//               >
//                 <ListItemIcon
//                   sx={{
//                     minWidth: 0,
//                     mr: open ? 3 : 'auto',
//                     justifyContent: 'center',
//                   }}
//                 >
//                  <Home />
//                 </ListItemIcon>
//                 <ListItemText primary={'Home'} sx={{ opacity: open ? 1 : 0 }} />
//               </ListItemButton>
//             </ListItem>

//             <ListItem disablePadding sx={{ display: 'block' }}>
//               <ListItemButton LinkComponent={Link}
//                 href='/dashboard'
//                 selected={ pathname === '/dashboard'}
//                 sx={{
//                   minHeight: 48,
//                   justifyContent: open ? 'initial' : 'center',
                  
//                   px: 2.5,
//                 }}
//               >
//                 <ListItemIcon
//                   sx={{
//                     minWidth: 0,
//                     mr: open ? 3 : 'auto',
//                     justifyContent: 'center',
//                   }}
//                 >
//                  <InboxIcon />
//                 </ListItemIcon>
//                 <ListItemText primary={'Dashboard'} sx={{ opacity: open ? 1 : 0 }} />
//               </ListItemButton>
//             </ListItem>
//             <ListItem disablePadding sx={{ display: 'block' }}>
//               <ListItemButton LinkComponent={Link}
//                 href='/administracao'
//                 selected={ pathname === '/administracao'}
//                 sx={{
//                   minHeight: 48,
//                   justifyContent: open ? 'initial' : 'center',
                  
//                   px: 2.5,
//                 }}
//               >
//                 <ListItemIcon
//                   sx={{
//                     minWidth: 0,
//                     mr: open ? 3 : 'auto',
//                     justifyContent: 'center',
//                   }}
//                 >
//                  <SettingsIcon />
//                 </ListItemIcon>
//                 <ListItemText primary={'Administração'} sx={{ opacity: open ? 1 : 0 }} />
//               </ListItemButton>
//             </ListItem>
//         </List>
        
//       </Drawer>

//       <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//         <DrawerHeader />
        
//         { children }
        
//       </Box>
//     </Box>
//    </>
//   );
// }


import * as React from 'react';
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
import { useTheme } from '@mui/material';
import ThemeSwitcherComponent from './themeSwitch';

const drawerWidth = 240;



export default function ResponsiveDrawer(
  { children, toggleDarkMode }: 
  { 
    children: React.ReactNode,  
    toggleDarkMode: (check: boolean) => void}) {
  const theme = useTheme();  
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
      <ListItem disablePadding sx={{ display: 'block' }}>
          <ListItemButton LinkComponent={Link}
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
                minWidth: 0,
                mr: mobileOpen ? 3 : 3,
                justifyContent: 'center',
              }}
            >
              <Home />
            </ListItemIcon>
            <ListItemText primary={'Home'} sx={{ opacity: mobileOpen ? 1 : 1 }} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding sx={{ display: 'block' }}>
          <ListItemButton LinkComponent={Link}
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
              }}
            >
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={'Dashboard'} sx={{ opacity: mobileOpen ? 1 : 1 }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ display: 'block' }}>
          <ListItemButton LinkComponent={Link}
            href='/administracao'
            selected={ pathname === '/administracao'}
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
              }}
            >
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary={'Administração'} sx={{ opacity: mobileOpen ? 1 : 1 }} />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
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
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>

        <ThemeSwitcherComponent useOs={true} themeChanger={toggleDarkMode} />

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
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
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
