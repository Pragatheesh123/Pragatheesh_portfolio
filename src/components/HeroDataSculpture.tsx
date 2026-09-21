import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface HeroDataSculptureProps {
  className?: string;
}

export const HeroDataSculpture: React.FC<HeroDataSculptureProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Dimensions
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // Group for the entire sculpture
    const sculptureGroup = new THREE.Group();
    scene.add(sculptureGroup);

    // Lighting (monochrome studio rim & fill)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.6);
    keyLight.position.set(5, 8, 6);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x333333, 2.0);
    rimLight.position.set(-5, -4, -4);
    scene.add(rimLight);

    // 1. Core Polyhedron (Icosahedron Core with matte dark finish)
    const coreGeo = new THREE.IcosahedronGeometry(1.2, 0);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x18181b,
      metalness: 0.85,
      roughness: 0.25,
      flatShading: true,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    sculptureGroup.add(coreMesh);

    // 2. Wireframe Cage around Core
    const wireGeo = new THREE.IcosahedronGeometry(1.4, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x111111,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    sculptureGroup.add(wireMesh);

    // 3. Orbiting Data Rings (Three orthogonal orbital rings)
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0x27272a,
      metalness: 0.9,
      roughness: 0.2,
    });

    const ring1Geo = new THREE.TorusGeometry(2.1, 0.02, 16, 100);
    const ring1 = new THREE.Mesh(ring1Geo, ringMat);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    sculptureGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(2.5, 0.02, 16, 100);
    const ring2 = new THREE.Mesh(ring2Geo, ringMat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.z = Math.PI / 3;
    sculptureGroup.add(ring2);

    const ring3Geo = new THREE.TorusGeometry(2.9, 0.018, 16, 100);
    const ring3 = new THREE.Mesh(ring3Geo, ringMat);
    ring3.rotation.y = Math.PI / 2.5;
    sculptureGroup.add(ring3);

    // 4. Orbiting Data Nodes (Small spherical data points on orbits)
    const nodeGeo = new THREE.SphereGeometry(0.08, 16, 16);
    const nodeMat = new THREE.MeshStandardMaterial({
      color: 0x111111,
      metalness: 0.95,
      roughness: 0.1,
    });

    const nodes: THREE.Mesh[] = [];
    const nodeCount = 8;
    for (let i = 0; i < nodeCount; i++) {
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      sculptureGroup.add(node);
      nodes.push(node);
    }

    // 5. Ambient Data Coordinates Particle Cloud
    const particleCount = 120;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 2.4 + Math.random() * 1.8;

      particlePositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = r * Math.cos(phi);
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x3f3f46,
      size: 0.04,
      transparent: true,
      opacity: 0.6,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    sculptureGroup.add(particles);

    // Mouse Parallax & Interaction Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 1.2;
      targetY = y * 1.2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Scroll Rotation
    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse damping
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      const baseSpeed = prefersReducedMotion ? 0.05 : 0.4;
      const scrollOffset = scrollY * 0.0012;

      // Base rotations
      sculptureGroup.rotation.y = elapsedTime * baseSpeed * 0.5 + mouseX + scrollOffset;
      sculptureGroup.rotation.x = elapsedTime * baseSpeed * 0.3 + mouseY + scrollOffset * 0.5;

      coreMesh.rotation.y = -elapsedTime * baseSpeed * 0.8;
      coreMesh.rotation.z = elapsedTime * baseSpeed * 0.4;
      wireMesh.rotation.y = elapsedTime * baseSpeed * 0.5;
      wireMesh.rotation.x = -elapsedTime * baseSpeed * 0.3;

      ring1.rotation.z = elapsedTime * baseSpeed * 0.4;
      ring2.rotation.x = -elapsedTime * baseSpeed * 0.5;
      ring3.rotation.y = elapsedTime * baseSpeed * 0.3;

      // Orbiting node positions
      nodes.forEach((node, idx) => {
        const angle = elapsedTime * 0.6 + (idx * Math.PI * 2) / nodeCount;
        const radius = 2.1 + Math.sin(elapsedTime + idx) * 0.3;
        const orbitType = idx % 3;

        if (orbitType === 0) {
          node.position.set(
            Math.cos(angle) * radius,
            Math.sin(angle * 1.2) * 0.7,
            Math.sin(angle) * radius
          );
        } else if (orbitType === 1) {
          node.position.set(
            Math.cos(angle) * 0.6,
            Math.sin(angle) * radius,
            Math.cos(angle) * radius
          );
        } else {
          node.position.set(
            Math.sin(angle) * radius,
            Math.cos(angle) * radius,
            Math.sin(angle * 0.8) * 0.8
          );
        }
      });

      particles.rotation.y = -elapsedTime * 0.08;
      particles.rotation.x = elapsedTime * 0.04;

      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);

      if (container && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }

      // Dispose resources
      coreGeo.dispose();
      coreMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      ring1Geo.dispose();
      ring2Geo.dispose();
      ring3Geo.dispose();
      ringMat.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full min-h-[340px] sm:min-h-[420px] lg:min-h-[500px] flex items-center justify-center pointer-events-none select-none ${className}`}
      aria-hidden="true"
    />
  );
};
