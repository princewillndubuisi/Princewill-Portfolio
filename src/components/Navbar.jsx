import { cn } from "@/tail/utils";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
  const scrollPositionRef = useRef(0);

  // Track scroll for navbar style
  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Perfect scroll lock solution
  useEffect(() => {
    if (isMenuOpen) {
      // Save current scroll position
      scrollPositionRef.current = window.scrollY;

      // Apply lock styles
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPositionRef.current}px`;
      document.body.style.width = "100%";
    } else {
      // Remove lock styles
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";

      // Restore scroll position
      window.scrollTo(0, scrollPositionRef.current);
    }
  }, [isMenuOpen]);

  const handleNavClick = () => setIsMenuOpen(false);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScroll ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={handleNavClick}
          className="text-xl font-bold text-primary flex items-center"
        >
          <span className="text-glow text-foreground">Princewill's</span>{" "}
          Portfolio
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
              onClick={handleNavClick}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={cn(
            "md:hidden p-2 fixed top-3 right-4 z-[999]",
            isMenuOpen ? "text-white" : "text-foreground"
          )}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? (
            <X size={28} className="text-white " />
          ) : (
            <Menu size={28} />
          )}
        </button>

        {/* Mobile Menu */}
        <motion.div
          className="fixed inset-0 bg-background/95 backdrop-blur-md z-[998] flex flex-col items-center justify-center md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: isMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            pointerEvents: isMenuOpen ? "auto" : "none",
            display: isMenuOpen ? "flex" : "none", // Double protection
          }}
        >
          <div className="flex flex-col space-y-6 text-xl">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 py-3 px-6"
                onClick={handleNavClick}
                initial={{ y: 20 }}
                animate={{ y: isMenuOpen ? 0 : 20 }}
                transition={{ duration: 0.3 }}
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
