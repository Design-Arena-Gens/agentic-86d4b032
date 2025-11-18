'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars, PerspectiveCamera } from '@react-three/drei'
import SolarSystem from './SolarSystem'

export default function Scene() {
  return (
    <Canvas
      gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
      dpr={[1, 2]}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    >
      <PerspectiveCamera makeDefault position={[0, 50, 100]} fov={60} />

      <ambientLight intensity={0.1} />
      <pointLight position={[0, 0, 0]} intensity={2} color="#FDB813" />

      <Stars
        radius={300}
        depth={60}
        count={8000}
        factor={6}
        saturation={0}
        fade
        speed={1}
      />

      <SolarSystem />

      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={20}
        maxDistance={300}
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 6}
      />
    </Canvas>
  )
}
