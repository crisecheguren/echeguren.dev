import React from 'react'
import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,

} from "@mui/material"





const cardStyle = {
    maxWidth: 425,
    margin: "5rem auto",
    
    
}


const ProjectCard = ({ id, name, sourceLink, projectLink, img, description }) => {
    return (
    
    <>  
        
            <Card sx={{...cardStyle}}>
                <CardActionArea 
                    target='_blank'
                    href={projectLink}>
                    <CardMedia 
                        component='img'
                        alt={name}
                        height='140'
                        image={img}
                        
                    />
                    <CardContent>
                    <Typography gutterBottom variant='h5'>
                        {name}
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                    {description}
                </Typography>
                </CardContent>
            </CardActionArea>
                <CardActions>
                    <Button 
                        size='small' 
                        color='primary'
                        target='_blank'
                        href={sourceLink}
                    >
                        Source Code
                    </Button>
                    <Button 
                        size='small' 
                        color='primary'
                        target='_blank'
                        href={projectLink}
                        
                    >
                        Live Demo
                    </Button>
                </CardActions>
            </Card>
        
    </>
  )
}

export default ProjectCard