import React, { useRef, useEffect } from 'react';

const ThreeBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    let cleanup: (() => void) | undefined;
    
    const initThree = async () => {
      try {
        // Dynamically import Three.js to avoid SSR issues
        const THREE = await import('three');
        
        if (!containerRef.current) return;
        
        // Scene setup
        const scene = new THREE.Scene();
        
        // Camera setup
        const camera = new THREE.PerspectiveCamera(
          75,
          window.innerWidth / window.innerHeight,
          0.1,
          1000
        );
        camera.position.z = 5;
        
        // Renderer setup
        const renderer = new THREE.WebGLRenderer({ 
          alpha: true,
          antialias: true
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        containerRef.current.appendChild(renderer.domElement);
        
        // Create particles
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 1000;
        
        const posArray = new Float32Array(particlesCount * 3);
        const colorArray = new Float32Array(particlesCount * 3);
        
        for (let i = 0; i < particlesCount * 3; i++) {
          // Position
          posArray[i] = (Math.random() - 0.5) * 10;
          
          // Color - orange to gold gradient
          if (i % 3 === 0) {
            colorArray[i] = 1.0; // R
            colorArray[i + 1] = Math.random() * 0.5 + 0.2; // G
            colorArray[i + 2] = 0.0; // B
          }
        }
        
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));
        
        // Material
        const particlesMaterial = new THREE.PointsMaterial({
          size: 0.02,
          transparent: true,
          opacity: 0.8,
          vertexColors: true,
          blending: THREE.AdditiveBlending,
          sizeAttenuation: true
        });
        
        // Mesh
        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);
        
        // Mouse interaction
        let mouseX = 0;
        let mouseY = 0;
        
        const handleMouseMove = (event: MouseEvent) => {
          mouseX = (event.clientX / window.innerWidth) * 2 - 1;
          mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        };
        
        window.addEventListener('mousemove', handleMouseMove);
        
        // Handle resize
        const handleResize = () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        };
        
        window.addEventListener('resize', handleResize);
        
        // Animation loop
        const animate = () => {
          requestAnimationFrame(animate);
          
          particlesMesh.rotation.x += 0.0003;
          particlesMesh.rotation.y += 0.0005;
          
          // Follow mouse with subtle movement
          particlesMesh.rotation.x += mouseY * 0.0003;
          particlesMesh.rotation.y += mouseX * 0.0003;
          
          renderer.render(scene, camera);
        };
        
        animate();
        
        // Cleanup function
        cleanup = () => {
          window.removeEventListener('mousemove', handleMouseMove);
          window.removeEventListener('resize', handleResize);
          if (containerRef.current && renderer.domElement) {
            containerRef.current.removeChild(renderer.domElement);
          }
          
          // Dispose resources
          particlesGeometry.dispose();
          particlesMaterial.dispose();
          renderer.dispose();
        };
      } catch (error) {
        console.error("Failed to initialize Three.js:", error);
      }
    };
    
    initThree();
    
    // Return cleanup function
    return () => {
      if (cleanup) cleanup();
    };
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-0 opacity-30 pointer-events-none"
    />
  );
};

export default ThreeBackground;