import React from 'react';
import {
    Typography,
    Box,
    createTheme,
    ThemeProvider
} from '@mui/material'


import Navbar from './Navbar';
import TimeLine from './TimeLine';
import jobs from '../jobs.js';

const theme = createTheme();



const Resume = () => {
  return (
      <ThemeProvider theme={theme}>
        <Navbar currentPage={'Resume'}/>
        <Box component="header">
            <Typography 
                variant='h4' 
                align='center'
                sx={{
                    color: 'tomato',
                    padding: '3rem 0',
                    textTransform: 'uppercase',
                }}
            >
                working experience
            </Typography>
            <TimeLine jobs={jobs}/>
        </Box>
      </ThemeProvider>
  )
};

export default Resume;
