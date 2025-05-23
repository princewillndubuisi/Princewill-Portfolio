import { ArrowDown } from "lucide-react";
import { FlipWords } from "./FlipWords";
import { Canvas } from "@react-three/fiber";
import { Astronaut } from "./Astronaut";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { HeroText } from "./HeroText";

export const Herosection = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section
      id="hero"
      className="container flex items-start justify-center min-h-screen overflow-hidden md:items-center md:justify-start c-space"
    >
      <HeroText />

      <figure
        className="absolute inset-0 border border-red-400"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 1, 3] }}>
          <Astronaut
            scale={isMobile ? 0.23 : 0.3}
            position={isMobile ? [-0.2, -1.5, 0] : [1.3, -1, 0]}
          />
        </Canvas>
      </figure>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
