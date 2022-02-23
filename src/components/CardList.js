import React from 'react';
import { Grid } from '@mui/material'
import ProjectCard from './ProjectCard';

const CardList = ({projects}) => {


    return ( 
        <Grid container justifyContent={'center'}>
            {
                projects.map((user, i) => {
                    return (
                        <React.Fragment key={i}>
                            
                            <Grid item xs={12} sm={8} md={6} >
                                <ProjectCard 
                                    key={i}
                                    id={projects[i].id} 
                                    name={projects[i].name} 
                                    img={projects[i].img}
                                    description={projects[i].description}
                                    projectLink={projects[i].projectLink}
                                />
                                </Grid>
                           
                        </React.Fragment>
                    );
                 })
             }   
        </Grid>    
    );
}

export default CardList;