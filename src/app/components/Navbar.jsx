"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bars3Icon,
  XMarkIcon,
  ServerIcon
} from "@heroicons/react/24/outline";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";

// 1. Added "Skills" and removed icons from the array
const navLinks = [
  { title: "About", path: "#about" },
  { title: "Skills", path: "#skills" }, // New Section
  { title: "Projects", path: "#projects" },
  { title: "Achievements", path: "#achievements" },
  { title: "Experience", path: "#experience" },
  { title: "Certifications", path: "#certificates" },
  { title: "Connect", path: "#contact" },
];

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
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
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 mx-auto w-full"
    >
      <div className="bg-slate-950/90 backdrop-blur-lg border-b border-orange-500/20 px-4 md:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* Logo Section */}
          <Link href={"/"} className="flex items-center gap-3 group">
            <div className="relative">
              <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute -inset-1 bg-orange-500 rounded-lg blur-sm"
              />
              <div className="relative bg-slate-900 p-2 rounded border border-orange-500/40 group-hover:border-orange-500 transition-colors">
                <ServerIcon className="w-6 h-6 text-orange-500" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className=" font-bold text-sm tracking-widest text-white">
                Shahzaib <span className="text-orange-500 ">Akram</span>
              </span>
              <span className="hidden xs:block text-[9px] text-slate-500 font-mono -mt-1 uppercase tracking-tighter">
                Status: Operational
              </span>
            </div>
          </Link>

          {/* Desktop Nav - Removed Icon passing to NavLink */}
          <div className="hidden lg:flex items-center">
            <ul className="flex space-x-1 xl:space-x-4">
              {navLinks.map((link, index) => (
                <li key={index} className="relative group px-1">
                  <div className="relative z-10  ">
                    <NavLink href={link.path} title={link.title} />
                  </div>

                  {/* Link Background Hover Effect */}
                  <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/10 rounded-md transition-all duration-300 -z-0" />

                  {/* Bottom Border Glow */}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white  transition-all duration-300 group-hover:w-full shadow-[0_0_10px_#f97316]"
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="p-2 rounded border border-slate-800 text-orange-500 hover:bg-orange-500/10 transition-all"
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-slate-950 border-b border-orange-500/20 overflow-hidden"
          >
            <div className="p-6 bg-gradient-to-b from-slate-950 to-slate-900">
              <MenuOverlay links={navLinks} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;