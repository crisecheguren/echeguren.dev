import React from 'react';
import {
    Box,
    createTheme
} from '@mui/material';
import ResumeItem from './ResumeItem';


const theme = createTheme();


const lineStyle = {
    position: 'relative',
    padding: '1rem',
    margin: '0 auto',
        "&:before": {
        content: "''",
        position: 'absolute',
        height: '100%',
        borderLeft: '1px solid tan',
        right: '40px',
        top: 0, 
    },
    "&:after": {
        content: "''",
        display: 'table',
        clear: 'both',
    },
    [theme.breakpoints.up('md')]: {
        padding: '2rem',
        "&:before": {
            left: 'calc(50% - 1px)',
            right: 'auto',
        }
    }
}

const TimeLine = ({jobs}) => {
  return (
    <Box 
                component="div" 
                sx={{...lineStyle}}>
            {
                jobs.map((user, i) => {
                    return (
                        <React.Fragment key={i}>
                            
                           
                                <ResumeItem 
                                    key={i - 1}
                                    id={jobs[i].id}
                                    year={jobs[i].year} 
                                    title={jobs[i].title} 
                                    company={jobs[i].company}
                                    description={jobs[i].description}
                                />
                            
                           
                        </React.Fragment>
                    );
                 })
             }   
               
                    
                
    </Box>
  )
}

export default TimeLine

