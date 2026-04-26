import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  Environment,
  Float,
  MeshDistortMaterial,
  Sparkles,
  ContactShadows,
} from '@react-three/drei';
import * as THREE from 'three';

/**
 * Premium 3D hero scene — refined and self-contained.
 * - A slow-rotating gold torus knot with subtle distortion
 * - A faint orbital ring + sparkles
 * - Studio HDRI environment for cinematic reflections
 * - Cursor parallax for liveliness without being distracting
 */

function GoldKnot() {
  const ref = useRef<THREE.Mesh>(null);
  const target = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.12;
    ref.current.rotation.y += delta * 0.18;

    const { x, y } = state.pointer;
    target.current.x = THREE.MathUtils.lerp(target.current.x, y * 0.2, 0.05);
    target.current.y = THREE.MathUtils.lerp(target.current.y, x * 0.3, 0.05);
    ref.current.position.x = target.current.y * 0.4;
    ref.current.position.y = target.current.x * 0.4;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.35} floatIntensity={0.9}>
      <mesh ref={ref} scale={0.85}>
        <torusKnotGeometry args={[1, 0.32, 240, 32, 2, 3]} />
        <MeshDistortMaterial
          color="#D4AF63"
          metalness={1}
          roughness={0.18}
          distort={0.22}
          speed={1.4}
          envMapIntensity={1.4}
        />
      </mesh>
    </Float>
  );
}

function OrbitRing() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z += delta * 0.08;
  });
  return (
    <mesh ref={ref} position={[0, 0, -1]} rotation={[Math.PI / 2.4, 0, 0]}>
      <ringGeometry args={[2.2, 2.22, 128]} />
      <meshBasicMaterial color="#D4AF63" transparent opacity={0.45} />
    </mesh>
  );
}

function SceneContents() {
  const lights = useMemo(
    () => (
      <>
        <ambientLight intensity={0.25} />
        <directionalLight position={[4, 5, 3]} intensity={1.4} color="#fff4d6" />
        <pointLight position={[-4, -2, -2]} intensity={0.7} color="#3a6dff" />
        <pointLight position={[3, -3, 2]} intensity={0.5} color="#D4AF63" />
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
      <OrbitRing />
      <Sparkles
        count={50}
        scale={[6, 4, 4]}
        size={2.2}
        speed={0.35}
        color="#D4AF63"
        opacity={0.65}
      />
      <ContactShadows
        position={[0, -1.6, 0]}
        opacity={0.35}
        scale={6}
        blur={2.4}
        far={3}
        color="#000000"
      />
    </>
  );
}

export const HeroScene: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={className} aria-hidden="true">
      <Canvas
        dpr={[1, 1.8]}
        camera={{ position: [0, 0, 4.4], fov: 42 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <SceneContents />
      </Canvas>
    </div>
  );
};
