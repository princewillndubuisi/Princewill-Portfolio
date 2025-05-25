import { ArrowDown } from "lucide-react";
import { FlipWords } from "./FlipWords";
import { Canvas, useFrame } from "@react-three/fiber";
import { Astronaut } from "./Astronaut";
import { Float, OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { HeroText } from "./HeroText";
import { easing } from "maath";
import { Suspense } from "react";
import { Loader } from "./Loader";

export const Herosection = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section
      id="hero"
      className="container flex items-start justify-center min-h-screen overflow-hidden md:items-center md:justify-start"
    >
      <HeroText />

      <figure
        className="absolute inset-0 overflow-hidden "
        style={{ width: "100%", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 1, 3] }}>
          <Suspense fallback={<Loader />}>
            <Float>
              <Astronaut
                scale={isMobile && 0.23}
                position={isMobile && [0, -1.5, 0]}
              />
            </Float>
            <Rig />
          </Suspense>
        </Canvas>
      </figure>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}
