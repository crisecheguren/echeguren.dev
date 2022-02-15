import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Particles from "react-tsparticles";
import './index.css';


const Home = () => {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const particlesOptions = {
    fullScreen: { 
      enable: false 
    },
    fpsLimit: 120,
    particles: {
      color: {
        value: "#222",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 2,
      },
      collisions: {
        enable: false,
      },
      move: {
        direction: "none",
        enable: true,
        outMode: "bounce",
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 700,
        },
        value: 60,
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 1,
          sync: true
        }
      },
      shape: {
        type: "circle",
      },
      size: {
        random: true,
        value: 8,
        anim: {
          enable: true,
          speed: 10,
          size_min: 0.1,
          sync: true,
        }
      },
    },
    detectRetina: false,
  }

  return (
    <>
        
        <Navbar currentPage={'Home'}/>
        <Header />
        <Particles 
          canvasClassName='particles'
          className='particles'
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={particlesOptions}
          
        />
    </>
  )
};

export default Home;
