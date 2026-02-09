"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  ChevronUpIcon 
} from "@heroicons/react/24/outline";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-20 border-t border-black/5 dark:border-white/10 bg-slate-50 dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand & About Section */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="text-2xl font-black tracking-tighter dark:text-white">
              DEV.<span className="text-blue-500">PORTFOLIO</span>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 max-w-xs leading-relaxed">
              Crafting high-performance web experiences with modern tech stacks. 
              Based in Kanganpur, Pakistan.
            </p>
          </div>

          {/* Quick Links with Hover Effect */}
          <div className="flex flex-col space-y-4">
            <h5 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white">Connect</h5>
            <div className="flex flex-col space-y-2">
              {[
                { name: "GitHub", href: "https://github.com/M-SuhaibGM" },
                { name: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-suhaib-811452326/" },
                { name: "Twitter / X", href: "#" }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors w-fit"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact with Modern Icons */}
          <div className="flex flex-col space-y-4">
            <h5 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white">Contact</h5>
            <div className="space-y-3">
              <a 
                href="mailto:mmsohaib617@gmail.com" 
                className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors"
              >
                <EnvelopeIcon className="w-5 h-5" />
                <span>mmsohaib617@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                <PhoneIcon className="w-5 h-5 text-blue-500" />
                <span>0319-4776162</span>
              </div>
              <div className="flex items-center gap-2 mt-4">
                 <img 
                    src="https://img.icons8.com/ios-filled/50/3b82f6/whatsapp.png" 
                    alt="WhatsApp"
                    className="w-5 h-5"
                  />
                  <span className="text-sm font-medium text-blue-500">Active on WhatsApp</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 dark:text-slate-500">
            &copy; {new Date().getFullYear()} M. Suhaib. Built with Next.js & Tailwind.
          </p>

          {/* Scroll to Top Button */}
          <motion.button
            whileHover={{ y: -5 }}
            onClick={scrollToTop}
            className="p-3 rounded-full bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-sm hover:shadow-md transition-all"
          >
            <ChevronUpIcon className="w-5 h-5 text-slate-900 dark:text-white" />
          </motion.button>
        </div>
      </div>

      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
    </footer>
  );
};

export default Footer;