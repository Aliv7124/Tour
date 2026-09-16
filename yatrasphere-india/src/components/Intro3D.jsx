import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function FloatingParticles({ count = 900 }) {
  const points = useRef()
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 25
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15
      pos[i * 3 + 2] = (Math.random() - 0.5) * 25
    }
    return pos
  }, [count])

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.12
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.07}
        color="#ff9933"
        transparent
        opacity={0.85}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

function LogoRing() {
  const mesh = useRef()
  useFrame((state) => {
    mesh.current.rotation.x = state.clock.elapsedTime * 0.5
    mesh.current.rotation.y = state.clock.elapsedTime * 0.7
  })
  return (
    <mesh ref={mesh}>
      <torusGeometry args={[2, 0.12, 16, 100]} />
      <meshStandardMaterial 
        color="#ff9933" 
        emissive="#ff9933" 
        emissiveIntensity={0.5} 
        metalness={0.7} 
        roughness={0.25} 
      />
    </mesh>
  )
}

function CameraMove() {
  useFrame((state) => {
    const t = state.clock.elapsedTime
    state.camera.position.z = 11 - t * 1.1
    state.camera.position.y = Math.sin(t * 0.6) * 0.8
    state.camera.lookAt(0, 0, 0)
  })
  return null
}

export default function Intro3D() {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'linear-gradient(135deg, #f8f1e9 0%, #fff8f0 50%, #e8f4f8 100%)',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Canvas camera={{ position: [0, 0, 11], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <pointLight position={[8, 8, 8]} intensity={1.2} color="#ff9933" />
        <pointLight position={[-6, -4, 4]} intensity={0.6} color="#138808" />
        <FloatingParticles />
        <LogoRing />
        <CameraMove />
      </Canvas>

      <div style={{
        position: 'absolute',
        textAlign: 'center',
        pointerEvents: 'none'
      }}>
        <h1 style={{
          fontSize: 'clamp(2.2rem, 7vw, 4.2rem)',
          fontWeight: 800,
          background: 'linear-gradient(90deg, #ff9933, #e67e22, #138808)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '3px',
          marginBottom: '0.4rem'
        }}>
          SAFFRON HORIZONS
        </h1>
        <p style={{
          fontSize: '1.15rem',
          color: '#555',
          letterSpacing: '4px',
          textTransform: 'uppercase',
          fontWeight: 500
        }}>
          Discover Incredible India
        </p>
      </div>
    </div>
  )
}