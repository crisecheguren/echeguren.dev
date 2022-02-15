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
    maxWidth: 375,
    margin: "5rem auto"
}


const ProjectCard = ({ id, name, img, projectURL, description }) => {
  return (
    
    <>  
        
            <Card sx={{...cardStyle}}>
                <CardActionArea>
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
                    <Button size='small' color='primary'>
                        Share
                    </Button>
                    <Button size='small' color='primary'>
                        Live Demo
                    </Button>
                </CardActions>
            </Card>
        
    </>
  )
}

export default ProjectCard