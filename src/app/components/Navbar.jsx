"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import { UserIcon, CodeBracketIcon, AcademicCapIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

const navLinks = [
  { title: "About", path: "#about", icon: <UserIcon className="w-4 h-4" /> },
  { title: "Projects", path: "#projects", icon: <CodeBracketIcon className="w-4 h-4" /> },
  { title: "Certificates", path: "#certificates", icon: <AcademicCapIcon className="w-4 h-4" /> },
  { title: "Contact", path: "#contact", icon: <EnvelopeIcon className="w-4 h-4" /> },
];

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Handle background transparency on scroll
      setIsScrolled(currentScrollY > 20);

      // 2. Handle hide/show on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed top-4 left-0 right-0 z-50 mx-auto w-[95%] md:w-[90%] lg:w-[75%]"
    >
      <div
        className={`rounded-full border-4 bg-gray-700 border-cyan-500 transition-all duration-500 ease-in-out px-6 py-2.5 `}
      >
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link href={"/"} className="flex items-center gap-3 group">
            <div className="relative">
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-cyan-400 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000"
              />
              <motion.img
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.7 }}
                src="images/LOGO.png"
                alt="logo"
                className="relative w-9 h-9 rounded-full border border-black/10 dark:border-white/20 object-cover"
              />
            </div>
            <span className="hidden sm:block font-extrabold text-sm tracking-tighter text-slate-900 dark:text-white">
              DEV.<span className="text-violet-600 dark:text-cyan-400">PORTFOLIO</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center">
            <ul className="flex space-x-2">
              {navLinks.map((link, index) => (
                <li key={index} className="relative group">
                  <NavLink href={link.path} title={link.title} icon={link.icon} />
                  {/* Subtle hover underline */}
                  <motion.div
                    className="absolute bottom-0 left-0 w-0 h-[2px] bg-violet-600 dark:bg-cyan-400 transition-all duration-300 group-hover:w-full"
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="flex items-center justify-center p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-slate-800 dark:text-white transition-all"
            >
              {navbarOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {navbarOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 left-0 right-0 p-2"
          >
            <div className="bg-white/95 dark:bg-zinc-900/95 backdrop-blur-2xl border border-black/5 dark:border-white/10 rounded-3xl p-4 shadow-2xl">
              <MenuOverlay links={navLinks} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;