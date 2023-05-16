"use client";

import Home from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import OfflineBolt from "@mui/icons-material/OfflineBolt";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import WorkIcon from "@mui/icons-material/Work";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import ThemeSwitcherComponent from "./themeSwitch";

import Button from "@mui/material/Button";
import { signOut, useSession } from "next-auth/react";
import { GroupedNavItem } from "./SideNav/GroupedNavItem";
import { NavItem } from "./SideNav/NavItem";

const drawerWidth = 260;

export default function ResponsiveDrawer({
  children,
  toggleDarkMode,
}: {
  children: React.ReactNode;
  toggleDarkMode: (check: boolean) => void;
}) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const appName = "Titulo Inicial";
  const [mobileOpen, setMobileOpen] = useState(false);
  const { data: session } = useSession();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
      <Toolbar sx={{ justifyContent: "center" }}>
        <Typography
          variant="h5"
          noWrap
          component="div"
          sx={{ color: "primary.main" }}
        >
          ADA
        </Typography>
        <Typography
          variant="h5"
          noWrap
          component="div"
          className="font-extrabold text-neutral-500"
        >
          SYS
        </Typography>
      </Toolbar>

      <List className="text-neutral-400">
        <Typography variant="subtitle2" className="ml-4 opacity-60">
          {" "}
          Geral{" "}
        </Typography>

        <NavItem
          text="Home"
          target="/app"
          icon={<Home />}
          handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
        />

        <NavItem
          text="Dashboard"
          target="/app/dashboard"
          icon={<InboxIcon />}
          handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
        />

        <NavItem
          text="Contratos"
          target="/app/contracts"
          icon={<WorkIcon />}
          handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
        />

        <GroupedNavItem
          text="Cadastros"
          icon={<SettingsIcon />}
          mobileOpen={mobileOpen}
        >
          <NavItem
            isGroupedItem={true}
            text="Pessoas"
            target="/app/persons"
            icon={<PeopleIcon />}
            handleDrawerToggle={handleDrawerToggle}
            mobileOpen={mobileOpen}
          />

          <NavItem
            isGroupedItem={true}
            text="Departamentos"
            target="/app/settings/offices"
            icon={<OfflineBolt />}
            handleDrawerToggle={handleDrawerToggle}
            mobileOpen={mobileOpen}
          />
        </GroupedNavItem>

        <GroupedNavItem
          text="Administração"
          icon={<SettingsIcon />}
          mobileOpen={mobileOpen}
        >
          <NavItem
            isGroupedItem={true}
            text="Usuarios"
            target="/app/settings/users"
            icon={<PeopleIcon />}
            handleDrawerToggle={handleDrawerToggle}
            mobileOpen={mobileOpen}
          />
        </GroupedNavItem>
      </List>
    </>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar
          sx={(theme) => ({
            backgroundColor: theme.palette.mode.includes("dark")
              ? theme.palette.background.paper
              : "",
            justifyContent: "flex-end",
          })}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={[
              { mr: 2, display: { sm: "none" } },
              (theme) => ({
                backgroundColor: "#fff",
              }),
            ]}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {appName}
          </Typography>

          <Tooltip title="Account settings" sx={{ alignSelf: "end" }}>
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar sx={{ width: 32, height: 32 }}>
                {session?.user?.name?.charAt(0)}
              </Avatar>
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
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper.ligth",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem>
              <ThemeSwitcherComponent
                useDark={true}
                themeChanger={toggleDarkMode}
              />
              <Typography>Dark Mode</Typography>
            </MenuItem>

            <MenuItem sx={{ p: 0 }}>
              <Button
                fullWidth
                variant="text"
                onClick={() => {
                  signOut({ redirect: true });
                }}
              >
                {" "}
                Logout
              </Button>
            </MenuItem>
          </Menu>
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
            display: {
              xs: "block",
              sm: "none",
              backgroundImage: "none",
              border: "none",
            },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block", backgroundImage: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        {children}
      </Box>
    </Box>
  );
}
