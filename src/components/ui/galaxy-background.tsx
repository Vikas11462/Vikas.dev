"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useScroll } from "framer-motion";

// Helper to generate points uniformly in a sphere
function randomInSphere(numPoints: number, radius: number) {
  const points = new Float32Array(numPoints * 3);
  for (let i = 0; i < numPoints; i++) {
    const r = radius * Math.cbrt(Math.random());
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(2 * Math.random() - 1);
    
    points[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    points[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    points[i * 3 + 2] = r * Math.cos(phi);
  }
  return points;
}

const StarField = () => {
  const ref1 = useRef<THREE.Points<any, any>>(null!);
  const ref2 = useRef<THREE.Points<any, any>>(null!);
  
  // Create two separate layers for parallax depth (reduced count for performance)
  const stars1 = useMemo(() => randomInSphere(1200, 1.2), []);
  const stars2 = useMemo(() => randomInSphere(600, 1.5), []);
  
  const { scrollYProgress } = useScroll();
  
  useFrame((_state, delta) => {
    if (ref1.current && ref2.current) {
      // Constant slow ambient drift
      ref1.current.rotation.x -= delta / 20;
      ref1.current.rotation.y -= delta / 30;

      ref2.current.rotation.x -= delta / 15;
      ref2.current.rotation.y -= delta / 25;
      
      // Scroll-based cinematic camera pushing "in"
      const scrollVal = scrollYProgress.get();
      
      ref1.current.position.z = scrollVal * 1.5;
      ref2.current.position.z = scrollVal * 2.0;

      ref1.current.rotation.z = scrollVal * 0.5;
      ref2.current.rotation.z = scrollVal * 0.3;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      {/* Primary Warm Stars */}
      <Points ref={ref1} positions={stars1} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          opacity={0.4}
          color="#e8a838"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
      {/* Secondary Cool/White Stars */}
      <Points ref={ref2} positions={stars2} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          opacity={0.3}
          color="#aaaaaa"
          size={0.004}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
};

export function GalaxyBackground() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Listen for theme changes
    const observer = new MutationObserver(() => {
      const theme = document.documentElement.getAttribute("data-theme");
      setIsDark(theme !== "light");
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    // Initial check
    const theme = document.documentElement.getAttribute("data-theme");
    setIsDark(theme !== "light");

    return () => observer.disconnect();
  }, []);

  const bgColor = isDark ? "#050505" : "#f0ede8";

  return (
    <div
      className="fixed inset-0 z-[-10] w-full h-full pointer-events-none transition-colors duration-500"
      style={{ backgroundColor: bgColor }}
    >
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 1.5]}
        performance={{ min: 0.5 }}
        style={{ opacity: isDark ? 1 : 0.3 }}
      >
        {/* Soft fog to obscure edges and create infinite depth */}
        <fog attach="fog" args={[bgColor, 0.5, 2.0]} />
        <ambientLight intensity={0.1} />
        <StarField />
      </Canvas>
    </div>
  );
}
