'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere, Ring } from '@react-three/drei'
import * as THREE from 'three'
import Planet from './Planet'

export default function SolarSystem() {
  const systemRef = useRef<THREE.Group>(null)

  useFrame((state, delta) => {
    if (systemRef.current) {
      systemRef.current.rotation.y += delta * 0.02
    }
  })

  const planets = [
    {
      name: 'Mercury',
      size: 1.2,
      color: '#8C7853',
      orbitRadius: 12,
      orbitSpeed: 0.047,
      rotationSpeed: 0.01,
      info: 'Projects',
      description: 'Explore my latest work',
    },
    {
      name: 'Venus',
      size: 1.8,
      color: '#FFC649',
      orbitRadius: 18,
      orbitSpeed: 0.035,
      rotationSpeed: 0.008,
      info: 'Skills',
      description: 'Technologies I master',
    },
    {
      name: 'Earth',
      size: 2,
      color: '#4A90E2',
      orbitRadius: 25,
      orbitSpeed: 0.029,
      rotationSpeed: 0.015,
      info: 'About',
      description: 'Learn more about me',
    },
    {
      name: 'Mars',
      size: 1.5,
      color: '#E27B58',
      orbitRadius: 32,
      orbitSpeed: 0.024,
      rotationSpeed: 0.013,
      info: 'Experience',
      description: 'My professional journey',
    },
    {
      name: 'Jupiter',
      size: 4,
      color: '#C88B3A',
      orbitRadius: 45,
      orbitSpeed: 0.013,
      rotationSpeed: 0.02,
      info: 'Achievements',
      description: 'Awards and recognition',
    },
    {
      name: 'Saturn',
      size: 3.5,
      color: '#FAD5A5',
      orbitRadius: 58,
      orbitSpeed: 0.009,
      rotationSpeed: 0.018,
      hasRings: true,
      info: 'Contact',
      description: 'Get in touch',
    },
  ]

  return (
    <group ref={systemRef}>
      {/* Sun */}
      <Sphere args={[5, 64, 64]} position={[0, 0, 0]}>
        <meshStandardMaterial
          emissive="#FDB813"
          emissiveIntensity={1.5}
          color="#FDB813"
        />
      </Sphere>

      {/* Glow effect for Sun */}
      <Sphere args={[6.5, 32, 32]} position={[0, 0, 0]}>
        <meshBasicMaterial
          color="#FDB813"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Orbit paths */}
      {planets.map((planet, index) => (
        <Ring
          key={`orbit-${index}`}
          args={[planet.orbitRadius - 0.1, planet.orbitRadius + 0.1, 128]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <meshBasicMaterial
            color="#4A90E2"
            transparent
            opacity={0.1}
            side={THREE.DoubleSide}
          />
        </Ring>
      ))}

      {/* Planets */}
      {planets.map((planet, index) => (
        <Planet key={index} {...planet} />
      ))}
    </group>
  )
}
