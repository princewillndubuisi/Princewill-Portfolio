import { Briefcase, Code, User } from "lucide-react";

export const Aboutsection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 ">
            <h3 className="text-2xl font-semibold md:text-3xl">
              Dedicated And Passionate Full Stack Developer
            </h3>

            <p className="text-muted-foreground">
              Developed scalable web applications and ensured seamless
              integration of front-end and back-end systems
            </p>
            <p className="text-muted-foreground">
              I'm passionate about crafting responsive user interfaces and
              collaborating with cross-functional teams to meet project goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and applications with modern
                    frameworks
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {" "}
                    Wordpress development
                  </h4>
                  <p className="text-muted-foreground">
                    Building custom, responsive websites and themes with
                    WordPress for easy content management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
