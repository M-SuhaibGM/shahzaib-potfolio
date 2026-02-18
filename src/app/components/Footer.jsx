"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  EnvelopeIcon,
  PhoneIcon,
  ChevronUpIcon,
  CommandLineIcon
} from "@heroicons/react/24/outline";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-20 border-t border-orange-500/20 bg-amber-950/20 backdrop-blur-md transition-colors duration-300">
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand & About Section */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="text-2xl font-black tracking-tighter text-white">
              CORE.<span className="text-orange-500 text-xl font-mono">OPS</span>
            </Link>
            <p className="text-amber-100/60 max-w-xs leading-relaxed text-[14px]">
              Architecting resilient cloud infrastructures and automated CI/CD pipelines. 
              Based in Lahore, Pakistan.
            </p>
          </div>

          {/* Quick Links with Orange Hover */}
          <div className="flex flex-col space-y-4">
            <h5 className="text-sm font-bold uppercase tracking-widest text-white">Connect</h5>
            <div className="flex flex-col space-y-2">
              {[
                { name: "GitHub", href: "https://github.com/ShahzaibInnovation/" },
                { name: "LinkedIn", href: "https://www.linkedin.com/in/shahzaib-akram-ab01b827b/" },
                // { name: "Twitter / X", href: "#" }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-100/60 hover:text-orange-500 transition-colors w-fit text-[14px]"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact with Orange Icons */}
          <div className="flex flex-col space-y-4">
            <h5 className="text-sm font-bold uppercase tracking-widest text-white">Contact</h5>
            <div className="space-y-3">
              <a
                href="mailto:shahzaib.kp766@gmail.com"
                className="flex items-center gap-3 text-amber-100/60 hover:text-orange-500 transition-colors text-[14px]"
              >
                <EnvelopeIcon className="w-5 h-5 text-orange-500" />
                <span>shahzaib.kp766@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-amber-100/60 text-[14px]">
                <PhoneIcon className="w-5 h-5 text-orange-500" />
                <span>03057311385</span>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium text-orange-500 font-mono tracking-tighter">SIGNAL_OPERATIONAL</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-orange-500/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-amber-100/40">
            &copy; {new Date().getFullYear()} Shahzaib.Akram .
          </p>

          {/* Scroll to Top Button */}
          <motion.button
            whileHover={{ y: -5 }}
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-amber-950/40 border border-orange-500/20 shadow-sm hover:shadow-orange-500/20 transition-all"
          >
            <ChevronUpIcon className="w-5 h-5 text-orange-500" />
          </motion.button>
        </div>
      </div>

      {/* Subtle Background Glow - Shifted to Orange */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
    </footer>
  );
};

export default Footer;