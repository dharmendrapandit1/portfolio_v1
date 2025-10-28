'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, OrbitControls, Sparkles, Float } from '@react-three/drei'
import { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'

// Types
interface Target {
  id: number
  position: [number, number, number]
  velocity: [number, number, number]
  scale: number
  active: boolean
}

interface Particle {
  position: [number, number, number]
  velocity: [number, number, number]
  life: number
}

interface Explosion {
  active: boolean
  position: [number, number, number]
}

interface GameKnotProps {
  onScoreUpdate: (score: number) => void
  gameActive: boolean
}

interface FloatingTargetsProps {
  onTargetHit: (points: number) => void
  gameActive: boolean
}

interface ParticleExplosionProps {
  position: [number, number, number]
  active: boolean
}

interface GameUIProps {
  score: number
  gameActive: boolean
  onStartGame: () => void
  onResetGame: () => void
}

// Game Knot Component
function GameKnot({ onScoreUpdate, gameActive }: GameKnotProps) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const materialRef = useRef<THREE.MeshStandardMaterial>(null!)
  const [hovered, setHovered] = useState(false)
  const [velocity] = useState(() => new THREE.Vector3(0.02, 0.01, 0))
  const [position] = useState(() => new THREE.Vector3(0, 0, 0))
  const [score, setScore] = useState(0)
  const [lastClickTime, setLastClickTime] = useState(0)

  const { size, viewport } = useThree()

  useFrame((state) => {
    if (!gameActive || !meshRef.current) return

    const t = state.clock.getElapsedTime()

    // Basic rotation
    meshRef.current.rotation.x = t * 0.2
    meshRef.current.rotation.y = t * 0.3

    // Movement with boundary checking
    const newPosition = position.clone().add(velocity)

    // Bounce off walls
    const bounds = 2.5
    if (Math.abs(newPosition.x) > bounds) {
      velocity.x = -velocity.x * 1.1
    }
    if (Math.abs(newPosition.y) > bounds) {
      velocity.y = -velocity.y * 1.1
    }

    position.copy(newPosition)
    meshRef.current.position.copy(newPosition)

    // Color animation
    if (materialRef.current) {
      const hue = (t * 0.2) % 1
      materialRef.current.emissive.setHSL(hue, 0.8, 0.4)
    }
  })

  const handleClick = (event: THREE.Event) => {
    event.stopPropagation()
    if (!gameActive || !meshRef.current) return

    const now = Date.now()
    const timeSinceLastClick = now - lastClickTime

    // Score based on click speed
    let points = 10
    if (timeSinceLastClick < 500) {
      points = 25 // Bonus for quick clicks
    } else if (timeSinceLastClick < 1000) {
      points = 15
    }

    const newScore = score + points
    setScore(newScore)
    setLastClickTime(now)

    // Change direction on click
    velocity.set((Math.random() - 0.5) * 0.04, (Math.random() - 0.5) * 0.04, 0)

    // Visual feedback
    meshRef.current.scale.setScalar(1.3)
    setTimeout(() => {
      if (meshRef.current) {
        meshRef.current.scale.setScalar(1)
      }
    }, 150)

    onScoreUpdate(newScore)
  }

  return (
    <>
      <mesh
        ref={meshRef}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={handleClick}
        scale={1}
      >
        <torusKnotGeometry args={[0.8, 0.3, 220, 40]} />
        <meshStandardMaterial
          ref={materialRef}
          metalness={0.8}
          roughness={0.1}
          color={hovered ? '#8b5cf6' : '#6366f1'}
          emissive={'#4f46e5'}
          emissiveIntensity={0.4}
          transparent
          opacity={0.9}
        />
      </mesh>
    </>
  )
}

// Floating Targets Component
function FloatingTargets({ onTargetHit, gameActive }: FloatingTargetsProps) {
  const [targets, setTargets] = useState<Target[]>([])
  const targetRefs = useRef<THREE.Mesh[]>([])

  // Initialize targets
  useEffect(() => {
    const newTargets: Target[] = []
    for (let i = 0; i < 5; i++) {
      newTargets.push({
        id: i,
        position: [
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 2,
        ],
        velocity: [
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.01,
        ],
        scale: 0.5 + Math.random() * 0.5,
        active: true,
      })
    }
    setTargets(newTargets)
  }, [])

  useFrame(() => {
    if (!gameActive) return

    setTargets((currentTargets) =>
      currentTargets.map((target) => {
        if (!target.active) return target

        const [vx, vy, vz] = target.velocity
        let [x, y, z] = target.position

        // Update position
        x += vx
        y += vy
        z += vz

        // Bounce off boundaries
        const bounds = 3
        let newVx = vx
        let newVy = vy
        let newVz = vz

        if (Math.abs(x) > bounds) newVx = -vx
        if (Math.abs(y) > bounds) newVy = -vy
        if (Math.abs(z) > bounds) newVz = -vz

        return {
          ...target,
          position: [x, y, z] as [number, number, number],
          velocity: [newVx, newVy, newVz] as [number, number, number],
        }
      })
    )
  })

  const handleTargetClick = (targetId: number, event: THREE.Event) => {
    event.stopPropagation()
    if (!gameActive) return

    setTargets((currentTargets) =>
      currentTargets.map((target) =>
        target.id === targetId ? { ...target, active: false } : target
      )
    )

    onTargetHit(50) // Points for hitting targets

    // Respawn target after delay
    setTimeout(() => {
      setTargets((currentTargets) =>
        currentTargets.map((target) =>
          target.id === targetId
            ? {
                ...target,
                active: true,
                position: [
                  (Math.random() - 0.5) * 4,
                  (Math.random() - 0.5) * 4,
                  (Math.random() - 0.5) * 2,
                ] as [number, number, number],
                scale: 0.5 + Math.random() * 0.5,
              }
            : target
        )
      )
    }, 2000)
  }

  return (
    <>
      {targets.map((target, index) => (
        <mesh
          key={target.id}
          position={target.position}
          scale={target.scale}
          visible={target.active}
          onClick={(event) => handleTargetClick(target.id, event)}
          ref={(el) => {
            if (el) targetRefs.current[index] = el
          }}
        >
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial
            color="#f59e0b"
            emissive="#f59e0b"
            emissiveIntensity={0.3}
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}
    </>
  )
}

// Particle Explosion Component
function ParticleExplosion({ position, active }: ParticleExplosionProps) {
  const particlesRef = useRef<THREE.Points>(null!)
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    if (active) {
      const newParticles: Particle[] = []
      for (let i = 0; i < 20; i++) {
        newParticles.push({
          position: [0, 0, 0] as [number, number, number],
          velocity: [
            (Math.random() - 0.5) * 0.1,
            (Math.random() - 0.5) * 0.1,
            (Math.random() - 0.5) * 0.1,
          ] as [number, number, number],
          life: 1.0,
        })
      }
      setParticles(newParticles)
    }
  }, [active, position])

  useFrame(() => {
    if (!active) return

    setParticles((currentParticles) =>
      currentParticles
        .map((particle) => ({
          ...particle,
          position: [
            particle.position[0] + particle.velocity[0],
            particle.position[1] + particle.velocity[1],
            particle.position[2] + particle.velocity[2],
          ] as [number, number, number],
          life: particle.life - 0.02,
        }))
        .filter((particle) => particle.life > 0)
    )
  })

  if (!active || particles.length === 0) return null

  const positions = new Float32Array(particles.length * 3)
  particles.forEach((particle, i) => {
    positions[i * 3] = position[0] + particle.position[0]
    positions[i * 3 + 1] = position[1] + particle.position[1]
    positions[i * 3 + 2] = position[2] + particle.position[2]
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#f59e0b"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

// Game UI Component
function GameUI({ score, gameActive, onStartGame, onResetGame }: GameUIProps) {
  return (
    <div className="absolute top-4 left-4 right-4 z-10">
      <div className="glass-card p-4 rounded-2xl border border-white/20 backdrop-blur-xl">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-white font-bold text-lg">3D Click Game</h3>
            <p className="text-white/70 text-sm">
              Score: <span className="text-brand-400 font-bold">{score}</span>
            </p>
          </div>
          <div className="flex gap-2">
            {!gameActive ? (
              <button
                onClick={onStartGame}
                className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg text-white font-semibold transition-colors"
              >
                Start Game
              </button>
            ) : (
              <button
                onClick={onResetGame}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg text-white font-semibold transition-colors"
              >
                Reset
              </button>
            )}
          </div>
        </div>

        {!gameActive && (
          <div className="mt-3 text-white/60 text-sm">
            <p>• Click the blue knot to score points</p>
            <p>• Hit the golden spheres for bonus points</p>
            <p>• Quick consecutive clicks give more points!</p>
          </div>
        )}

        {gameActive && (
          <div className="mt-2 text-green-400 text-sm font-semibold">
            Game Active - Keep clicking!
          </div>
        )}
      </div>
    </div>
  )
}

// Main Game Scene Component
export default function GameScene() {
  const [score, setScore] = useState(0)
  const [gameActive, setGameActive] = useState(false)
  const [explosion, setExplosion] = useState<Explosion>({
    active: false,
    position: [0, 0, 0],
  })

  const handleScoreUpdate = (points: number) => {
    setScore(points)
  }

  const handleTargetHit = (points: number) => {
    setScore((prev) => prev + points)
    // Trigger explosion effect
    setExplosion({
      active: true,
      position: [(Math.random() - 0.5) * 3, (Math.random() - 0.5) * 3, 0] as [
        number,
        number,
        number
      ],
    })
    setTimeout(() => setExplosion({ active: false, position: [0, 0, 0] }), 500)
  }

  const startGame = () => {
    setGameActive(true)
    setScore(0)
  }

  const resetGame = () => {
    setGameActive(false)
    setScore(0)
  }

  return (
    <div className="h-[400px] md:h-[500px] w-full relative">
      <GameUI
        score={score}
        gameActive={gameActive}
        onStartGame={startGame}
        onResetGame={resetGame}
      />

      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 50,
          near: 0.1,
          far: 1000,
        }}
        gl={{ alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-3, -3, 2]} intensity={0.5} />

        <fog attach="fog" args={['#1e1b4b', 5, 15]} />

        {/* Main game knot */}
        <GameKnot onScoreUpdate={handleScoreUpdate} gameActive={gameActive} />

        {/* Floating targets */}
        <FloatingTargets
          onTargetHit={handleTargetHit}
          gameActive={gameActive}
        />

        {/* Particle explosion effect */}
        <ParticleExplosion
          position={explosion.position}
          active={explosion.active}
        />

        {/* Background elements */}
        <Sparkles count={30} scale={[8, 8, 8]} size={1} speed={0.3} />

        <Environment preset="night" />

        <OrbitControls
          enableZoom={true}
          enablePan={false}
          autoRotate={!gameActive}
          autoRotateSpeed={0.5}
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  )
}
