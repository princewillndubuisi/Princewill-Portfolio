import { useState } from "react";
import { myProjects } from "../constants";
import { Project } from "./Project";
import { motion, useMotionValue, useSpring } from "motion/react";

export const ProjectsSection = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });
  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };
  const [preview, setPreview] = useState(null);
  return (
    <section
      onMouseMove={handleMouseMove}
      id="projects"
      className="py-24 px-4 relative"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <div className="bg-gradient-to-r from transparent via-blue-300 to-transparent mt-12 w-full h-[1px]" />
        {myProjects.map((project) => (
          <Project key={project.id} {...project} setPreview={setPreview} />
        ))}
      </div>
      {preview && (
        <motion.img
          className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg w-80 pointer-events-none"
          src={preview}
          style={{ x: springX, y: springY }}
        />
      )}
    </section>
  );
};
