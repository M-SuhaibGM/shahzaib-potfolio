"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import { useTheme } from "next-themes";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Certificates", path: "#certificates" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  if (!mounted) return <div className="h-20" />;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="fixed top-4 left-0 right-0 z-50 mx-auto w-[95%] md:w-[85%] lg:w-[70%]"
    >
      {/* Container: Changed to bg-white/70 for light and dark:bg-black/30 for dark */}
      <div className="rounded-full border border-black/5 dark:border-white/10 bg-white/80 dark:bg-black/40 backdrop-blur-md px-6 py-3 shadow-lg dark:shadow-2xl transition-all duration-300">
        <div className="flex items-center justify-between">
          
          <Link href={"/"} className="flex items-center gap-2 group">
            <motion.img
              whileHover={{ rotate: 10, scale: 1.1 }}
              src="images/LOGO.png"
              alt="logo"
              className="w-10 h-10 rounded-full border border-black/10 dark:border-white/20"
            />
            <span className="hidden sm:block font-bold text-slate-900 dark:text-white transition-colors">
              DEV.<span className="text-violet-600 dark:text-cyan-400">PORTFOLIO</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8 font-medium text-sm tracking-wide text-slate-600 dark:text-slate-300">
              {navLinks.map((link, index) => (
                <li key={index} className="hover:text-violet-600 dark:hover:text-cyan-400 transition-colors">
                  {/* IMPORTANT: Ensure NavLink uses dark:text-white inside its own code */}
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>

            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 transition-all border border-slate-200 dark:border-white/5 shadow-sm"
            >
              {theme === "dark" ? (
                <SunIcon className="h-5 w-5 text-yellow-500" />
              ) : (
                <MoonIcon className="h-5 w-5 text-slate-700" />
              )}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button 
              className="p-2 text-slate-800 dark:text-white transition-colors" 
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {navbarOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="absolute top-16 left-0 right-0 p-4"
          >
            {/* Overlay colors updated */}
            <div className="bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl border border-black/5 dark:border-white/10 rounded-2xl p-6 shadow-xl">
              <MenuOverlay links={navLinks} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;