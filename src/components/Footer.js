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
            href='https://github.com/crisecheguren'
            target="_blank"
        />
        <BottomNavigationAction
            sx={{
                ...bottomNavStyles,
                
            }}
            icon={<LinkedIn />}
            href='https://www.linkedin.com/in/crisecheguren/'
            target="_blank"
        />
        <BottomNavigationAction
            sx={{
                ...bottomNavStyles,
                
            }}
            icon={<YouTube />}
            href='https://www.youtube.com/channel/UCbM9B6NScahVeBjXBVe2ZIQ'
            target="_blank"
        />
    </BottomNavigation> 
  )
}

export default Footer