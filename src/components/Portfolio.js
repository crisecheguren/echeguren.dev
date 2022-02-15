import React from 'react'
import {
    Box,

} from '@mui/material'
import Navbar from './Navbar'
import CardList from './CardList'
import projects from '../projects.js';

const containerStyle = {
    background: "#233",
    height: "100"
}

const Portfolio = () => {
  return (
    <>
        <Box component='div' sx={{...containerStyle}}>
            <Navbar currentPage={'Portfolio'}/>
                <CardList projects={projects}/>
        </Box>
        
    </>
  )
}

export default Portfolio