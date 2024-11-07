import { useState, useEffect, Suspense } from "react";
import "./App.css";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Scene from "../public/Scene";

function App() {
  const [rotation, setRotation] = useState([0, 0, 0]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "ArrowLeft":
          setRotation((prev) => [prev[0], prev[1] - 0.1, prev[2]]);
          break;
        case "ArrowRight":
          setRotation((prev) => [prev[0], prev[1] + 0.1, prev[2]]);
          break;
        case "ArrowUp":
          setRotation((prev) => [prev[0] - 0.1, prev[1], prev[2]]);
          break;
        case "ArrowDown":
          setRotation((prev) => [prev[0] + 0.1, prev[1], prev[2]]);
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div>
      <Canvas>
        <ambientLight />
        <OrbitControls />
        <Suspense fallback={null}>
          <Scene rotation={rotation} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
