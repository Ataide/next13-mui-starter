
"use client"

import ListItem from "@mui/material/ListItem/ListItem"
import ListItemButton from "@mui/material/ListItemButton/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon/ListItemIcon";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import Link from "next/link"
import { usePathname } from 'next/navigation';

interface NavItemProps {
  target: string
  text: string
  icon: React.ReactNode
  mobileOpen: boolean
  handleDrawerToggle: () => void
  isGroupedItem?: boolean
}

export function NavItem( {target, text, icon, mobileOpen, handleDrawerToggle , isGroupedItem = false}: NavItemProps ) {
  const pathname = usePathname();
  return (
      <ListItem disablePadding 
          sx={{ 
            display: 'block',  
            borderRight: pathname === target ? '3px solid' : 'none',
            borderRightColor: 'primary.main',            
          }}
        >
          <ListItemButton LinkComponent={Link}
            onClick={handleDrawerToggle}
            href={target}
            selected={ pathname === target}
            sx={{
              minHeight: 48,
              justifyContent: mobileOpen ? 'initial' : 'center',
              px: 2.5,
              pl: isGroupedItem ? 5 : 2.5
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 10,
                mr: mobileOpen ? 3 : 3,
                justifyContent: 'center',
                color: pathname === target ? 'primary.main' : '',

              }}
            >
              {icon}
            </ListItemIcon>
            <ListItemText 
              sx={{ 
                opacity: mobileOpen ? 1 : 1,
                color: pathname === target ? 'primary.main' : '',
              }}
              primary={text} 
            />
          </ListItemButton>
      </ListItem>
  )
}