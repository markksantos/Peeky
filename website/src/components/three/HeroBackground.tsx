"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random";
import type { Points as PointsType } from "three";

function Particles() {
  const ref = useRef<PointsType>(null);
  const sphere = useMemo(() => {
    const positions = new Float32Array(800 * 3);
    random.inSphere(positions, { radius: 1.5 });
    return positions;
  }, []);

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#007AFF"
        size={0.005}
        sizeAttenuation
        depthWrite={false}
        opacity={0.3}
      />
    </Points>
  );
}

export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <Canvas camera={{ position: [0, 0, 1.8], fov: 60 }}>
        <Particles />
      </Canvas>
    </div>
  );
}
