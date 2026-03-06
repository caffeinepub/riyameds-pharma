import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

interface FloatingBottleProps {
  position: [number, number, number];
  color: string;
  accentColor: string;
  rotationSpeed: number;
  floatOffset: number;
  floatSpeed: number;
  shape: "bottle" | "capsule" | "pill";
}

function FloatingBottle({
  position,
  color,
  accentColor,
  rotationSpeed,
  floatOffset,
  floatSpeed,
  shape,
}: FloatingBottleProps) {
  const groupRef = useRef<THREE.Group>(null);
  const time = useRef(floatOffset);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    time.current += delta * floatSpeed;
    groupRef.current.position.y = position[1] + Math.sin(time.current) * 0.3;
    groupRef.current.rotation.y += delta * rotationSpeed;
    groupRef.current.rotation.x = Math.sin(time.current * 0.5) * 0.08;
  });

  if (shape === "bottle") {
    return (
      <group ref={groupRef} position={position}>
        {/* Bottle body */}
        <mesh position={[0, 0, 0]} castShadow>
          <cylinderGeometry args={[0.28, 0.35, 1.2, 24]} />
          <meshStandardMaterial
            color={color}
            metalness={0.3}
            roughness={0.35}
            transparent
            opacity={0.92}
          />
        </mesh>
        {/* Bottle neck */}
        <mesh position={[0, 0.78, 0]}>
          <cylinderGeometry args={[0.16, 0.24, 0.3, 24]} />
          <meshStandardMaterial
            color={color}
            metalness={0.3}
            roughness={0.35}
          />
        </mesh>
        {/* Bottle cap */}
        <mesh position={[0, 1.01, 0]}>
          <cylinderGeometry args={[0.19, 0.19, 0.18, 24]} />
          <meshStandardMaterial
            color={accentColor}
            metalness={0.5}
            roughness={0.2}
          />
        </mesh>
        {/* Label band */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.292, 0.362, 0.7, 24]} />
          <meshStandardMaterial
            color={accentColor}
            metalness={0.1}
            roughness={0.6}
            transparent
            opacity={0.85}
          />
        </mesh>
      </group>
    );
  }

  if (shape === "capsule") {
    return (
      <group ref={groupRef} position={position} rotation={[0.4, 0, 0.3]}>
        {/* Capsule body half 1 */}
        <mesh position={[0, 0.3, 0]}>
          <capsuleGeometry args={[0.22, 0.4, 8, 16]} />
          <meshStandardMaterial
            color={color}
            metalness={0.2}
            roughness={0.4}
            transparent
            opacity={0.95}
          />
        </mesh>
        {/* Capsule body half 2 */}
        <mesh position={[0, -0.3, 0]}>
          <capsuleGeometry args={[0.22, 0.4, 8, 16]} />
          <meshStandardMaterial
            color={accentColor}
            metalness={0.2}
            roughness={0.4}
            transparent
            opacity={0.95}
          />
        </mesh>
        {/* Seam ring */}
        <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.22, 0.025, 8, 32]} />
          <meshStandardMaterial
            color="#ffffff"
            metalness={0.5}
            roughness={0.2}
          />
        </mesh>
      </group>
    );
  }

  // pill / tube shape
  return (
    <group ref={groupRef} position={position}>
      {/* Tube body */}
      <mesh position={[0, 0, 0]}>
        <capsuleGeometry args={[0.2, 1.0, 8, 16]} />
        <meshStandardMaterial
          color={color}
          metalness={0.25}
          roughness={0.4}
          transparent
          opacity={0.92}
        />
      </mesh>
      {/* Cap */}
      <mesh position={[0, 0.65, 0]}>
        <cylinderGeometry args={[0.22, 0.22, 0.2, 20]} />
        <meshStandardMaterial
          color={accentColor}
          metalness={0.4}
          roughness={0.25}
        />
      </mesh>
      {/* Accent stripe */}
      <mesh position={[0, 0.1, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.205, 0.018, 6, 32]} />
        <meshStandardMaterial
          color="#ffffff"
          metalness={0.3}
          roughness={0.3}
          transparent
          opacity={0.7}
        />
      </mesh>
    </group>
  );
}

function Particles() {
  const count = 30;
  const meshRef = useRef<THREE.Points>(null);

  const posArray = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 8;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3));

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.03;
    }
  });

  return (
    <points ref={meshRef} geometry={geometry}>
      <pointsMaterial size={0.04} color="#6dbf3a" transparent opacity={0.6} />
    </points>
  );
}

export default function FloatingMedicines() {
  return (
    <div
      className="w-full h-[420px] md:h-[480px]"
      data-ocid="hero.canvas_target"
    >
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 55 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight
          position={[5, 8, 5]}
          intensity={1.2}
          color="#ffffff"
        />
        <directionalLight
          position={[-4, -2, -3]}
          intensity={0.4}
          color="#4a9c2f"
        />
        <pointLight position={[0, 4, 2]} intensity={0.8} color="#6dbf3a" />
        <pointLight position={[-3, -2, 3]} intensity={0.5} color="#1a2340" />

        {/* Three floating products */}
        <FloatingBottle
          position={[-2.2, 0, 0]}
          color="#4a9c2f"
          accentColor="#1a2340"
          rotationSpeed={0.4}
          floatOffset={0}
          floatSpeed={0.8}
          shape="bottle"
        />
        <FloatingBottle
          position={[0, 0.4, 0.5]}
          color="#1a2340"
          accentColor="#4a9c2f"
          rotationSpeed={0.3}
          floatOffset={2.1}
          floatSpeed={0.65}
          shape="capsule"
        />
        <FloatingBottle
          position={[2.2, -0.2, 0]}
          color="#2d5c1e"
          accentColor="#6dbf3a"
          rotationSpeed={0.5}
          floatOffset={4.2}
          floatSpeed={0.75}
          shape="pill"
        />

        <Particles />
      </Canvas>
    </div>
  );
}
