import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Waterfall() {
  const ref = useRef()
  const count = 4500

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 12
      arr[i * 3 + 1] = Math.random() * 45
      arr[i * 3 + 2] = (Math.random() - 0.5) * 3 - 10
    }
    return arr
  }, [])

  useFrame(() => {
    const pos = ref.current.geometry.attributes.position.array
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 1] -= 0.48
      pos[i * 3] += (Math.random() - 0.5) * 0.03
      if (pos[i * 3 + 1] < -3) {
        pos[i * 3 + 1] = 42 + Math.random() * 4
        pos[i * 3] = (Math.random() - 0.5) * 12
      }
    }
    ref.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.16}
        color="#b8e0ff"
        transparent
        opacity={0.85}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function BaseMist() {
  const ref = useRef()
  const count = 900

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20
      arr[i * 3 + 1] = Math.random() * 6 - 1
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8 - 9
    }
    return arr
  }, [])

  useFrame((state) => {
    const pos = ref.current.geometry.attributes.position.array
    const t = state.clock.elapsedTime
    for (let i = 0; i < count; i++) {
      pos[i * 3] += Math.sin(t * 0.8 + i) * 0.025
      pos[i * 3 + 1] += 0.015
      if (pos[i * 3 + 1] > 7) pos[i * 3 + 1] = -1
    }
    ref.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.35}
        color="#d4e8ff"
        transparent
        opacity={0.4}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

function Rocks() {
  return (
    <group>
      <mesh position={[-9.5, 12, -11]} rotation={[0, 0.4, 0.08]}>
        <boxGeometry args={[7, 40, 5]} />
        <meshStandardMaterial color="#1c2a38" roughness={0.95} />
      </mesh>
      <mesh position={[9.5, 11, -11]} rotation={[0, -0.4, -0.08]}>
        <boxGeometry args={[7, 38, 5]} />
        <meshStandardMaterial color="#1c2a38" roughness={0.95} />
      </mesh>
      <mesh position={[0, 14, -14]}>
        <boxGeometry args={[28, 45, 3]} />
        <meshStandardMaterial color="#15202b" roughness={1} />
      </mesh>
    </group>
  )
}

export default function Background3D() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      pointerEvents: 'none'
    }}>
      <Canvas camera={{ position: [0, 8, 26], fov: 48 }}>
        <color attach="background" args={['#0a121c']} />
        <fog attach="fog" args={['#0a121c', 18, 50]} />
        <ambientLight intensity={0.25} />
        <directionalLight position={[8, 25, 12]} intensity={1.1} color="#9fd0ff" />
        <pointLight position={[0, 3, 2]} intensity={0.7} color="#7ec8ff" />
        <Rocks />
        <Waterfall />
        <BaseMist />
      </Canvas>
    </div>
  )
}