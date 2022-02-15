import React from 'react';
import {
    Typography,
    Box,
    createTheme
} from '@mui/material';

const theme = createTheme();

const itemStyle = {
    padding: '1rem',
    borderBottom: '2px solid tan',
    position:'relative',
    margin: '1rem 3rem 1rem 1rem',
    clear: 'both',
    "&:after": {
        content: "''",
        position: 'absolute',
    },
    '&:before': {
        content: "''",
        position: 'absolute',
        right: "-0.625rem",
        top: 'calc(50%-5px)',
        borderStyle: 'solid',
        borderColor: 'tomato tomato transparent transparent',
        borderWidth: "0.625rem",
        transform: "rotate(45deg)"
    },
    [theme.breakpoints.up('md')]:{
        width: '44%',
        margin: "1rem",
        "&:nth-of-type(2n)": {
            float: 'right',
            margin: '1rem',
            borderColor: 'tan',
        },
        "&:nth-of-type(2n):before": {
        right: 'auto',
        left: '0.625rem',
        borderColor: 'transparent transparent tomato tomato'
        }
    }
}

const yearStyle = {
    textAlign: 'center',
    maxWidth: '9.375rem',
    margin: '0 3rem 0 auto',
    fontSize: '1.8rem',
    background: 'tomato',
    color: 'white',
    lineHeight: 1,
    padding: '0.5rem 0 1rem',
    '&:before': {
        display: 'none'
    },
    [theme.breakpoints.up('md')]: {
        textAlign: 'center',
        margin: '0 auto',
        "&:nth-of-type(2n)": {
            float: 'none',
            margin: '0 auto'
        },
        "&:nth-of-type(2n):before": {
            display: 'none'
        }
    },
}

const ResumeItem = ({ id, year, title, company, description}) => {
  return (
    <>
        <Typography 
            variant='h2'
            sx={{...itemStyle,...yearStyle}}
        >
            {year}
        </Typography>
        <Box 
            component='div' 
            sx={{...itemStyle}}>
            
            <Typography 
                variant='h5' 
                align='center'
                sx={{
                    color: 'white',
                    padding: 0,
                    textTransform: 'uppercase'
                }}
            >
                {title}
            </Typography>
            <Typography 
                variant='body1' 
                align='center'
                sx={{
                    color: 'tomato'
                }}
            >
                {company}
            </Typography>
            <Typography 
                variant='subtitle1' 
                align='center'
                sx={{
                    color: 'tan'
                }}
            >
                {description}
            </Typography>
        
        </Box>
    </>
  )
}

export default ResumeItem