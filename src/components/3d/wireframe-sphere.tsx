
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function WireSphere() {
  const groupRef = useRef<THREE.Group>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.LineSegments>(null);

  useFrame((state, delta) => {
    const group = groupRef.current;
    if (!group) return;

    const { x, y } = state.pointer;

    // Smoothly follow the cursor with actual 3D rotation.
    group.rotation.y = THREE.MathUtils.damp(
      group.rotation.y,
      x * 0.8 + state.clock.elapsedTime * 0.12,
      3,
      delta,
    );

    group.rotation.x = THREE.MathUtils.damp(
      group.rotation.x,
      -y * 0.55,
      3,
      delta,
    );

    if (sphereRef.current) {
      sphereRef.current.rotation.y += delta * 0.025;
    }

    if (wireRef.current) {
      wireRef.current.rotation.y = group.rotation.y;
      wireRef.current.rotation.x = group.rotation.x;
    }
  });

  const geometry = new THREE.SphereGeometry(1.45, 32, 20);
  const edges = new THREE.EdgesGeometry(geometry, 1);

  return (
    <group ref={groupRef}>
      {/* Subtle transparent sphere to give the wireframe depth */}
      <mesh ref={sphereRef} geometry={geometry}>
        <meshBasicMaterial
          color="#F7931E"
          transparent
          opacity={0.025}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>

      {/* Latitude and longitude lines */}
      <lineSegments ref={wireRef}>
        <primitive object={edges} attach="geometry" />
        <lineBasicMaterial
          color="#F7931E"
          transparent
          opacity={0.8}
        />
      </lineSegments>

      {/* Fine spherical latitude rings */}
      {Array.from({ length: 9 }, (_, index) => {
        const latitude = ((index - 4) / 5) * Math.PI * 0.48;
        const radius = 1.45 * Math.cos(latitude);
        const y = 1.45 * Math.sin(latitude);

        return (
          <mesh
            key={index}
            position={[0, y, 0]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <torusGeometry args={[radius, 0.0025, 4, 96]} />
            <meshBasicMaterial
              color="#C49A52"
              transparent
              opacity={0.55}
            />
          </mesh>
        );
      })}

      {/* Longitude rings */}
      {Array.from({ length: 12 }, (_, index) => (
        <mesh
          key={index}
          rotation={[0, (index / 12) * Math.PI, 0]}
        >
          <torusGeometry args={[1.45, 0.0025, 4, 96]} />
          <meshBasicMaterial
            color="#EDE6DA"
            transparent
            opacity={0.45}
          />
        </mesh>
      ))}

      {/* Center point */}
      <mesh>
        <sphereGeometry args={[0.035, 12, 12]} />
        <meshBasicMaterial color="#F7931E" />
      </mesh>
    </group>
  );
}

export function InteractiveWireframeScene() {
  return (
    <div className="relative isolate min-h-[500px] overflow-hidden border border-[#C49A52]/20 bg-[#2A1E17] sm:min-h-[520px] lg:min-h-[610px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(237,230,218,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(237,230,218,0.07) 1px, transparent 1px)
          `,
          backgroundSize: "38px 38px",
        }}
      />

      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(247,147,30,0.12),transparent_60%)]" />

      <div className="pointer-events-none absolute left-5 top-5 z-10 text-[10px] uppercase tracking-[0.24em] text-[#EDE6DA]/65 sm:left-7 sm:top-7">
        <p>STRIX / Geometry 001</p>
        <p className="mt-2 text-[#F7931E]">Spherical coordinate system</p>
      </div>

      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
        style={{ position: "absolute", inset: 0, zIndex: 1 }}
      >
        <WireSphere />
      </Canvas>

      <div className="pointer-events-none absolute bottom-5 left-5 right-5 z-10 flex items-end justify-between gap-4 text-[10px] uppercase tracking-[0.2em] text-[#EDE6DA]/60 sm:bottom-7 sm:left-7 sm:right-7">
        <div>
          <p>Spatial geometry</p>
          <p className="mt-1 text-[#EDE6DA]/85">Structure in motion</p>
        </div>
        <p className="text-right">X / Y / Z</p>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-4 z-10  sm:inset-6"
      />
    </div>
  );
}
