'use client'

import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere, Ring, Html } from '@react-three/drei'
import * as THREE from 'three'

interface PlanetProps {
  name: string
  size: number
  color: string
  orbitRadius: number
  orbitSpeed: number
  rotationSpeed: number
  hasRings?: boolean
  info: string
  description: string
}

export default function Planet({
  name,
  size,
  color,
  orbitRadius,
  orbitSpeed,
  rotationSpeed,
  hasRings,
  info,
  description,
}: PlanetProps) {
  const planetRef = useRef<THREE.Mesh>(null)
  const orbitRef = useRef<THREE.Group>(null)
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  useFrame((state, delta) => {
    if (orbitRef.current) {
      orbitRef.current.rotation.y += delta * orbitSpeed
    }
    if (planetRef.current) {
      planetRef.current.rotation.y += delta * rotationSpeed
    }
  })

  return (
    <group ref={orbitRef}>
      <group position={[orbitRadius, 0, 0]}>
        <Sphere
          ref={planetRef}
          args={[size, 32, 32]}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => {
            setHovered(false)
            setClicked(false)
          }}
          onClick={() => setClicked(!clicked)}
        >
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={hovered ? 0.3 : 0.05}
            roughness={0.7}
            metalness={0.2}
          />
        </Sphere>

        {/* Atmosphere glow */}
        <Sphere args={[size + 0.3, 32, 32]}>
          <meshBasicMaterial
            color={color}
            transparent
            opacity={hovered ? 0.15 : 0.08}
            side={THREE.BackSide}
          />
        </Sphere>

        {/* Saturn rings */}
        {hasRings && (
          <Ring
            args={[size + 1, size + 2.5, 64]}
            rotation={[Math.PI / 2.5, 0, 0]}
          >
            <meshStandardMaterial
              color={color}
              transparent
              opacity={0.6}
              side={THREE.DoubleSide}
              emissive={color}
              emissiveIntensity={0.1}
            />
          </Ring>
        )}

        {/* Info label */}
        {(hovered || clicked) && (
          <Html
            position={[0, size + 2, 0]}
            center
            distanceFactor={15}
            style={{
              pointerEvents: 'none',
              userSelect: 'none',
            }}
          >
            <div
              style={{
                background: 'rgba(20, 20, 40, 0.9)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(100, 200, 255, 0.4)',
                borderRadius: '8px',
                padding: '12px 16px',
                color: '#ffffff',
                fontSize: '14px',
                fontWeight: '600',
                whiteSpace: 'nowrap',
                textAlign: 'center',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
              }}
            >
              <div style={{ marginBottom: '4px', color: '#64C8FF' }}>{info}</div>
              {clicked && (
                <div style={{ fontSize: '12px', color: '#aaa', marginTop: '4px' }}>
                  {description}
                </div>
              )}
            </div>
          </Html>
        )}
      </group>
    </group>
  )
}
