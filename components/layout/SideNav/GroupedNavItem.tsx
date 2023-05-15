"use client"

import StarBorder from "@mui/icons-material/StarBorder";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import InboxIcon from "@mui/icons-material/MoveToInbox";

import Collapse from "@mui/material/Collapse/Collapse";
import List from "@mui/material/List/List";
import ListItemButton from "@mui/material/ListItemButton/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon/ListItemIcon";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import { useState } from "react";
import ListItem from "@mui/material/ListItem/ListItem";

interface GroupedNavItemProps {
  mobileOpen: boolean
  text: string
  icon: React.ReactNode
  children?: Array<React.ReactNode> | React.ReactNode
}
export function GroupedNavItem( { children, mobileOpen, text, icon}: GroupedNavItemProps) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <ListItem disablePadding 
      sx={{ 
        display: 'block',  
        // borderRight: pathname === target ? '3px solid' : 'none',
        borderRightColor: 'primary.main',            
      }}
    >
      <ListItemButton 
        onClick={handleClick}
        sx={{
          minHeight: 48,
          justifyContent: mobileOpen ? 'initial' : 'center',
          px: 2.5,
        }}
      >
        <ListItemIcon sx={{minWidth: 48}}>
          {icon}
        </ListItemIcon>
        <ListItemText primary={text} sx={{pl:0}} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children}
         
        </List>
      </Collapse>
    </ListItem>
  )

}