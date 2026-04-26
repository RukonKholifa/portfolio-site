import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, MeshDistortMaterial, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

/**
 * A premium-feeling 3D scene for the hero:
 * - A slow-rotating torus knot with a soft distort + reflective gold material
 * - Floating gold particles
 * - Soft studio environment for tasteful highlights
 * - Subtle parallax via mouse position
 */

function GoldKnot() {
  const ref = useRef<THREE.Mesh>(null);
  const targetRot = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    if (!ref.current) return;
    // Continuous gentle rotation
    ref.current.rotation.x += delta * 0.08;
    ref.current.rotation.y += delta * 0.12;

    // Subtle parallax using pointer position
    const { x, y } = state.pointer;
    targetRot.current.x = THREE.MathUtils.lerp(targetRot.current.x, y * 0.25, 0.04);
    targetRot.current.y = THREE.MathUtils.lerp(targetRot.current.y, x * 0.35, 0.04);
    ref.current.rotation.x += targetRot.current.x * delta;
    ref.current.rotation.y += targetRot.current.y * delta;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={ref} scale={1.05}>
        <torusKnotGeometry args={[1, 0.32, 220, 32, 2, 3]} />
        {/* MeshDistortMaterial gives a soft organic feel; metallic gold tint */}
        <MeshDistortMaterial
          color="#C9A84C"
          metalness={1}
          roughness={0.2}
          distort={0.18}
          speed={1.4}
          envMapIntensity={1.2}
        />
      </mesh>
    </Float>
  );
}

function GlowRing() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z += delta * 0.05;
  });
  return (
    <mesh ref={ref} position={[0, 0, -2]} rotation={[Math.PI / 2.2, 0, 0]}>
      <ringGeometry args={[2.6, 2.62, 128]} />
      <meshBasicMaterial color="#C9A84C" transparent opacity={0.35} />
    </mesh>
  );
}

function SceneContents() {
  // Soft accent lights
  const lights = useMemo(
    () => (
      <>
        <ambientLight intensity={0.25} />
        <directionalLight position={[4, 5, 3]} intensity={1.2} color="#fff4d6" />
        <pointLight position={[-4, -2, -2]} intensity={0.8} color="#3a6dff" />
        <pointLight position={[3, -3, 2]} intensity={0.6} color="#C9A84C" />
      </>
    ),
    []
  );

  return (
    <>
      {lights}
      <Suspense fallback={null}>
        <Environment preset="studio" />
      </Suspense>
      <GoldKnot />
      <GlowRing />
      <Sparkles
        count={60}
        scale={[8, 5, 4]}
        size={2.5}
        speed={0.4}
        color="#C9A84C"
        opacity={0.7}
      />
    </>
  );
}

export const HeroScene: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={className} aria-hidden="true">
      <Canvas
        dpr={[1, 1.8]}
        camera={{ position: [0, 0, 4.6], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <SceneContents />
      </Canvas>
    </div>
  );
};
