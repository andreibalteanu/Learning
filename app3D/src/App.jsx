import "./App.css";
import { Canvas } from "@react-three/fiber";

import { useGLTFLoader } from "drei";

function Model({ url }) {
  const gltf = useGLTFLoader("/scene.gltf", true);
  return <primitive object={gltf.scene} dispose={null} />;
}

const HTMLContent = () => {
  return (
    <group position={[0, 250, 0]}>
      <mesh ref={ref} position={[0, -35, 0]}>
        <Model url={modelPath} />
      </mesh>
    </group>
  );
};

function App() {
  return (
    <>
      <Canvas colorManagement camera={{ position: [0, 0, 110], fov: 70 }}>
        <HTMLContent />
      </Canvas>
    </>
  );
}

export default App;
