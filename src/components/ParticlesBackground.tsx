import React, { useCallback, useEffect, useState } from 'react';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';

const ParticlesBackground: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: 'transparent',
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'connect',
              parallax: {
                enable: true,
                force: 60,
                smooth: 10
              }
            },
            resize: true,
          },
          modes: {
            connect: {
              distance: 150,
              links: {
                opacity: 0.3,
              },
              radius: 200,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: ["#FF4500", "#FFD700", "#FF6A33"],
          },
          links: {
            color: "#FF4500",
            distance: 150,
            enable: true,
            opacity: 0.12,
            width: 0.8,
            triangles: {
              enable: true,
              opacity: 0.03,
            }
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 0.8,
            straight: false,
            trail: {
              enable: false,
              length: 5,
              fillColor: "#000000",
            },
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200
            }
          },
          number: {
            density: {
              enable: true,
              area: 1000,
            },
            value: 50,
          },
          opacity: {
            value: 0.2,
            animation: {
              enable: true,
              speed: 0.5,
              minimumValue: 0.1,
              sync: false,
            },
          },
          shape: {
            type: ["circle", "triangle", "polygon"],
            options: {
              polygon: {
                sides: 6
              }
            }
          },
          size: {
            value: { min: 1, max: 3 },
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.5,
              sync: false,
            },
          },
          twinkle: {
            lines: {
              enable: true,
              frequency: 0.05,
              opacity: 0.5
            },
            particles: {
              enable: true,
              frequency: 0.05,
              opacity: 0.5
            }
          }
        },
        detectRetina: true,
      }}
      className="absolute inset-0 z-0"
    />
  );
};

export default ParticlesBackground;