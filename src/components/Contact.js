import React from 'react'
import { 
  TextField,
  Typography,
  Button,
  Grid,
  Box,
  Stack,

 } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import Navbar from './Navbar'



const textStyles = {
  
  mb: 2,

  width: { sm: 400, md: 600 },

  "& label.Mui-focused": {
    color: 'beige'
  },
  "& label": {
    color: 'tan'
  },
  "& .MuiOutlinedInput-root": {
    color: 'beige',
    "& > fieldset": {
      borderColor: 'tan'
    },
    "&:hover > fieldset": {
      borderColor: "#233"
    },
    "&.Mui-focused fieldset": {
      borderColor: "beige"
    }
  }
}

const stackStyles = {
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  position: 'absolute'
}
const buttonStyles = {
   mt: 1,
   color: 'tomato',
   borderColor: 'tomato'
}


const Contact = () => {
  return (
    <>
        <Navbar currentPage={'Contact'} />
        <Box 
          component='div'
          sx={{
            background: "#233",
            height: "100%"
          }}
        >
          <Grid container justifyContent={'center'}>
            <Stack sx={{...stackStyles}}>
              <Typography 
                variant='h5'
                sx={{
                  color: 'tomato',
                  textAlign: 'center',
                  textTransform: 'uppercase'
                }}
              >
                Hire me!
              </Typography>
              <br />
              <TextField 
                fullWidth={true}
                label="Name"
                variant='outlined'
                sx={{...textStyles}}
                margin="dense"
                size='medium'
                
              />
              
              <TextField 
                fullWidth={true}
                label="Email"
                variant='outlined'
                sx={{...textStyles}}
                
              />
              <TextField 
                fullWidth={true}
                label="Description"
                variant='outlined'
                sx={{...textStyles}}
                
              />

              <Button 
                variant='outlined' 
                fullWidth={true} 
                endIcon={<SendIcon />}
                sx={{...buttonStyles}}
              > 
                  Contact Me 
              </Button>
            </Stack>
          </Grid>
        </Box>
    </>
  )
}

export default Contact