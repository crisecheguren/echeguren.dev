import React from 'react';
import {
    Typography,
    Avatar,
    Grid,
    Box
} from '@mui/material';
import avatar from "../avatar.png"
import TypedComponent from './TypedComponent';



const Header = () => {
  return (
    <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100vw',
        textAlign: 'center',
        zIndex: 1
        
    }}>
        <Grid container justifyContent={'center'}>
            <Avatar sx={{width: 120, height: 120, m: 1}} src={avatar} alt="CE avatar" />
        </Grid>
        <Typography 
            variant='h4'
            sx={{
                color: 'tomato',
            }}
        >
            <TypedComponent strings={['Cris Echeguren']} loop={false}/>
         </Typography>
         <br/>
         <Typography 
            variant='h4'
            sx={{
                color: 'tan',
                mb: '3rem'
            }}
        >
            <TypedComponent strings={['Web Design','Web Development','Technical Support Manager','Jazz Musician','Lightweaver']} />
         </Typography>

    </Box>);
};

export default Header;
