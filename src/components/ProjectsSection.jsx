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

// <section id="projects" className="py-24 px-4 relative">
//   <div className="container mx-auto max-w-5xl">
//     <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
//       Featured <span className="text-primary">Projects</span>
//     </h2>

//     <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
//       A selection of my recent web development projects, crafted with
//       attention to detail and user experience using modern technologies.
//     </p>

//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
//       {projects.map((project, key) => (
//         <div
//           key={key}
//           className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
//         >
//           <div className="h-54 overflow-hidden">
//             <img
//               src={project.image}
//               alt="project.title"
//               className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//             />
//           </div>

//           <div className="p-6">
//             <div className="flex flex-wrap gap-4 mb-4 items-center justify-center">
//               {project.tags.map((tag) => (
//                 <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
//                   {tag}
//                 </span>
//               ))}
//             </div>

//             <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
//             <p className="text-muted-foreground text-sm mb-4">
//               {project.description}
//             </p>
//             <div className="flex justify-center items-center">
//               <div className="flex space-x-3">
//                 <a
//                   target="_blank"
//                   href={project.demoUrl}
//                   className="text-foreground/80 hover:text-primary transition-colors duration-300"
//                 >
//                   <ExternalLink size={20} />
//                 </a>
//                 <a
//                   className="text-foreground/80 hover:text-primary transition-colors duration-300"
//                   target="_blank"
//                 >
//                   <Github size={20} />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>

//     <div className="text-center mt-12">
//       <a
//         className="cosmic-button w-fit flex items-center mx-auto gap-2"
//         target="_blank"
//         href="https//github.com/princewill107"
//       >
//         Check My Github <ArrowRight size={16} />
//       </a>
//     </div>
//   </div>
// </section>

// const projects = [
//   {
//     id: 1,
//     title: "Tatdaily Home Page",
//     description:
//       "A blog website showcasing varieties of news and career opportunities using Tailwind and Laravel.",
//     image: "/projects/project1.png",
//     tags: ["Tailwind CSS", "Laravel", "Livewire"],
//     demoUrl: "#",
//   },

//   {
//     id: 2,
//     title: "E-commerce Platform",
//     description:
//       "A beautiful landing page of a foot-wear boutique using Bootstrap and Laravel.",
//     image: "/projects/portfolio5.jpg",
//     tags: ["Bootstrap CSS", "Laravel", "Jquery"],
//     demoUrl: "#",
//   },
// ];
