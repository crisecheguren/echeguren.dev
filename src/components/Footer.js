import React from 'react'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import { GitHub, YouTube, LinkedIn } from '@mui/icons-material'


const bottomNavStyles = {
    p: 0,

    "& .MuiBottomNavigationAction-root": {
        minWidth: 0,
        maxWidth: 250,
    },
    "& .MuiSvgIcon-root": {
        fill: 'tan',
        "&:hover": {
            fill: "tomato",
            fontSize: "1.8rem"
        }
    }
}


const Footer = () => {
  return (
    <BottomNavigation width="auto" sx={{ background: "#222" }}>
        <BottomNavigationAction
            sx={{
                ...bottomNavStyles,
                
            }}
            icon={<GitHub />}
        />
        <BottomNavigationAction
            sx={{
                ...bottomNavStyles,
                
            }}
            icon={<LinkedIn />}
        />
        <BottomNavigationAction
            sx={{
                ...bottomNavStyles,
                
            }}
            icon={<YouTube />}
        />
    </BottomNavigation> 
  )
}

export default Footer