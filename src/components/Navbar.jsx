import { cn } from "@/tail/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);
  const linksRef = useRef([]);
  const tl = useRef(null);
  const topLineRef = useRef(null);
  const bottomLineRef = useRef(null);

  useGSAP(() => {
    gsap.set(navRef.current, { y: -100, opacity: 0, display: "none" });
    gsap.set(linksRef.current, { autoAlpha: 0 });

    tl.current = gsap.timeline({ paused: true });

    // Show nav panel
    tl.current.set(navRef.current, { display: "block" });
    tl.current.to(navRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.4,
      ease: "power3.out",
    });

    // Fade in links after nav is fully visible
    tl.current.to(
      linksRef.current,
      {
        autoAlpha: 1,
        stagger: 0.1,
        duration: 0.3,
        ease: "power2.out",
      },
      ">" // Wait for panel to finish sliding before fading in
    );

    // Animate hamburger to X
    tl.current.to(
      topLineRef.current,
      {
        rotate: 45,
        y: 4,
        duration: 0.3,
        ease: "power2.inOut",
      },
      "<"
    );
    tl.current.to(
      bottomLineRef.current,
      {
        rotate: -45,
        y: -4,
        duration: 0.3,
        ease: "power2.inOut",
      },
      "<"
    );

    // Fade out links before nav slides up
    tl.current.addPause();
    tl.current.to(
      linksRef.current,
      {
        autoAlpha: 0,
        stagger: {
          each: 0.08,
          from: "end",
        },
        duration: 0.2,
        ease: "power2.in",
      },
      ">"
    );

    // Hide nav panel
    tl.current.to(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 0.4,
      ease: "power3.in",
    });
    tl.current.set(navRef.current, { display: "none" });
  }, []);

  const toggleMenu = () => {
    if (isMenuOpen) {
      tl.current.reverse();
    } else {
      tl.current.play();
    }
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed w-full z-40 transition-all duration-300",
          isScrolled
            ? "py-3 bg-background/95 backdrop-blur-md shadow-xs"
            : "py-3 bg-background/95"
        )}
      >
        <div className="container relative flex items-center justify-between">
          <a
            className="text-xl font-bold text-primary flex items-center"
            href="#hero"
          >
            <span className="relative z-50">
              <span className="text-primary text-2xl">&lt;</span>
              <span className="text-glow text-foreground"> Princewill </span>
              Portfolio
              <span className="text-primary text-2xl"> /&gt;</span>
            </span>
          </a>

          {/* desktop nav */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* mobile nav toggle */}
          <div
            className="md:hidden p-2 cursor-pointer z-50 space-y-1 mt-1.5"
            onClick={toggleMenu}
          >
            <span
              ref={topLineRef}
              className="block w-5.5 h-1 bg-primary rounded-full origin-center"
            ></span>
            <span
              ref={bottomLineRef}
              className="block w-5.5 h-1 bg-primary rounded-full origin-center"
            ></span>
          </div>

          {/* mobile nav panel */}
          <div
            ref={navRef}
            className={cn(
              "absolute top-full left-0 w-full py-12 bg-background/95 backdrop-blur-md flex text-justify z-40",
              "md:hidden"
            )}
            style={{ transform: "translateY(100%)" }}
          >
            <div className="flex flex-col space-y-8 text-xl ps-8">
              {navItems.map((item, key) => (
                <a
                  key={key}
                  ref={(el) => (linksRef.current[key] = el)}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  onClick={() => {
                    toggleMenu();
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <div className="border z-50 fixed bg-gradient-to-r from-transparent via-foreground to-transparent h-1.5 w-full scroll-watcher shadow-[0_0_8px_2px_rgba(96,165,250,0.7)] animate-pulse"></div>
    </>
  );
};
