import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

export const HeroText = () => {
  const words = ["Modern", "Secure", "Beautiful"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="z-10 text-center md:text-left rounded-3xl bg-clip-text">
      {/* Desktop */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className=" md:text-4xl font-medium  text-muted-foreground "
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I'm Princewill
        </motion.h1>

        <div className="flex flex-col items-start ">
          <motion.p
            className="text-4xl font-medium text-muted-foreground "
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            A Full Stack Developer <br /> Dedicated To Crafting
          </motion.p>

          <motion.div
            className=""
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-black text-6xl text-muted-foreground "
            />
          </motion.div>

          <motion.p
            className="text-4xl font-medium text-muted-foreground "
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Web Solutions
          </motion.p>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex flex-col space-y-6 md:hidden mt-20">
        <motion.p
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I'm Princewill
        </motion.p>
        <div>
          <motion.p
            className="text-4xl font-medium text-muted-foreground "
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Building
          </motion.p>
          <motion.div>
            <FlipWords
              words={words}
              className="text-muted-foreground font-medium  text-7xl"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.5 }}
            />
          </motion.div>
          <motion.p
            className="text-4xl font-black text-muted-foreground "
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.7 }}
          >
            Web Aplications
          </motion.p>
        </div>
      </div>
    </div>
  );
};
