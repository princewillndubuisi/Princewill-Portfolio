import { Briefcase, Code, User } from "lucide-react";
import { Card } from "./Card";
import { useRef } from "react";
import { Globe } from "./Globe";
import { CopyEmail } from "./CopyEmail";
import { motion } from "motion/react";
import { Framework } from "./Framework";

export const Aboutsection = () => {
  const grid2Container = useRef();
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12 article">
          {/* grid 1 */}
          <motion.div
            className="flex items-end grid-default-color grid-1"
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.3 }}
          >
            <img
              src="prince.jpg"
              className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale[3] md:left-0 md:top-0 md:inset-y-10 lg:scale-[1]"
            />
            <div className="z-10 text-start">
              <p className="headtext text-sky-200">Hi, I'm Chidi Princewill</p>
              <p className="subtext">
                In the last 2 years, I have developed my front-end and back-end
                skills to a professional level, building responsive, scalable,
                and secure web applications using modern frameworks
              </p>
            </div>
            <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
          </motion.div>

          {/* grid 2 */}
          <motion.div
            ref={grid2Container}
            className="grid-default-color grid-2 flex items-center justify-center w-full h-full"
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.5 }}
          >
            <p className="flex items-end text-4xl text-gray-500">
              CODE IS CRAFT
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="CLARITY"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="STRUCTURE"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="BEAUTIFUL"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="ELEGANCE"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="DESIGN PATTERNS"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="logos/bootstrap.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="logos/laravel.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "5%", left: "10%" }}
              image="logos/react.png"
              containerRef={grid2Container}
            />
          </motion.div>

          {/* grid 3 */}
          <motion.div
            className="grid-black-color grid-3"
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.6 }}
          >
            <div className="z-10 w-[50%] text-start">
              <p className="headtext text-sky-200">Time Zone</p>
              <p className="subtext">
                I'm based in Asaba, and I'm available for remote work
              </p>
            </div>
            <figure className="absolute left-[30%] top-[10%]">
              <Globe />
            </figure>
          </motion.div>

          {/* grid 4 */}
          <motion.div
            className="grid-special-color grid-4"
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.7 }}
          >
            <div className="flex flex-col items-center justify-center gap-4 size-full">
              <p className="headtext text-sky-200 text-center">Get in Touch</p>
              <CopyEmail />
            </div>
          </motion.div>

          {/* grid 5 */}
          <motion.div
            className="grid-default-color grid-5"
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.8 }}
          >
            <div className="z-10 w-[50%] text-start">
              <p className="headtext text-sky-200">Tech Stack</p>
              <p className="subtext">
                I specialise in a variety of languages, frameworks & tools that
                allows me to build beautiful & responsive applications.
              </p>
            </div>
            <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
              <Framework />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
