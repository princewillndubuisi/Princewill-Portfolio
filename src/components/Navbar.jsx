import { cn } from "@/tail/utils";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 10);
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking a link
  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPosition}px`;
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  }, [isMenuOpen, scrollPosition]);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScroll ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
          onClick={handleNavClick}
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground"> Princewill's </span>{" "}
            Portfolio
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
              onClick={handleNavClick}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile nav button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile menu */}
        <motion.div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "md:hidden"
          )}
          initial={{ opacity: 0, y: -20 }}
          animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          style={{ display: isMenuOpen ? "flex" : "none" }}
        >
          <div className="flex flex-col space-y-8 text-xl text-center">
            {navItems.map((item, key) => (
              <motion.a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 py-2 px-4"
                onClick={handleNavClick}
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{ duration: 0.3, delay: 0.1 * key }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
};
