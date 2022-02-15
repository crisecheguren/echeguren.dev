import React, {useState} from 'react';
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box,
    ListItemIcon
} from '@mui/material';
import {
    AssignmentInd,
    Home,
    Apps,
    ContactMail,
    
} from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'
import Footer from './Footer';
import avatar from "../avatar.png"
import MobileRightMenuSlider from '@mui/material/Drawer'

const menuItems = [
    {
        listIcon: <Home/>,
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <AssignmentInd/>,
        listText: "Resume",
        listPath: "/resume"
    },
    {
        listIcon: <Apps/>,
        listText: "Portfolio",
        listPath: "/portfolio"
    },
    {
        listIcon: <ContactMail/>,
        listText: "Contact",
        listPath: "/contact"
    }
]

const Navbar = ( {currentPage} ) => {
    const [state, setState] = useState({
        right: false
    })

    const sliderToggle = ((slider, open) => () => {
        setState({...state, [slider]: open});
    });
 
    const sideList = slider => (
        <Box 

            sx={{
                width: 250,
                background: "#511",
                height: "100%"
            }} 
            component="div"
            onClick={sliderToggle(slider, false)}
        >
                <Avatar 

                    sx={{
                        display: "block",
                        margin: "0.5rem auto",
                        width: 104,
                        height: 104
                    }} 
                    src={avatar} 
                    alt="CE Avatar"
                />
                <Divider />
                <List >
                    {menuItems.map((lsItem, key)=> (
                        <Link to={lsItem.listPath} key={key} >
                            <ListItem button >
                            <ListItemIcon 
                                sx={{color: 'tan'}}
                            >
                                {lsItem.listIcon}
                            </ListItemIcon>
                            <ListItemText 
                                sx={{
                                    color: 'tan',
                                    textDecoration: 'none'
                                }}  
                                primary={lsItem.listText} />
                            </ListItem>
                        </Link>
                    ))}
                </List>
                
            </Box>
    )



    return (
        <>
            
            
            <Box component="nav">
                <AppBar position='static' style={{background: '#222'}}>
                    <Toolbar>
                            <IconButton onClick={sliderToggle("right", true)}>
                                <MenuIcon style={{color: 'tomato'}}/>
                            </IconButton>
                            <Typography variant='h5' style={{color: 'tan'}}>
                                {currentPage}
                            </Typography>
                            <MobileRightMenuSlider 
                                anchor='right' 
                                open={state.right} 
                                onClose={sliderToggle("right", false)}
                            >
                                    {sideList("right")}
                                <Footer />
                            </MobileRightMenuSlider>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
  );
};

export default Navbar;
