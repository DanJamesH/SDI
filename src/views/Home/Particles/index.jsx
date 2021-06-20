import React from 'react';
import Particles from 'react-particles-js';

const ParticlesComponent = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      position: 'fixed',
    }}
  >
    <Particles
      height={window.outerHeight}
      params={{
        background: {
          color: {
            value: '#FFFFFF',
          },
        },
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: '#044022',
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: '#000000',
            },
            polygon: {
              nb_sides: 5,
            },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 0.5,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 0.5,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#044022',
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'attract',
            },
            resize: true,
          },
          modes: {
            attract: {
              distance: 100,
              duration: 1,
              speed: 0.5,
            },
          },
        },
        retina_detect: true,
      }}
    />
  </div>
);

export default ParticlesComponent;
