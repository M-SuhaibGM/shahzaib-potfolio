"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative py-12 lg:py-24 overflow-hidden">
     {/* 🌙 NEW "BLUE MOON" TOP GLOW */}
      <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/40 blur-[150px] rounded-full z-0" />

      <div className="grid grid-cols-1 sm:grid-cols-12 relative z-10 gap-8"/>
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full z-0" />

      <div className="grid grid-cols-1 sm:grid-cols-12 relative z-10 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-6 text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "M SUHIAB",
                1500,
                "Web Developer",
                1500,
                "UI Designer",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-white"
            />
          </h1>

          <p className="text-[#ADB7BE] text-base sm:text-lg mb-8 lg:text-xl max-w-lg leading-relaxed">
            Crafting responsive, user-centric web applications with modern
            tech stacks. Focused on performance and clean aesthetics.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
            <Link href="#contact" className="w-full sm:w-auto">
              <button className="px-8 py-4 w-full rounded-full bg-white text-black font-bold hover:bg-blue-500 hover:text-white hover:border-blue-500 border-2 border-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                HIRE ME
              </button>
            </Link>

            <a href="/Resume.pdf" download className="w-full sm:w-auto">
              <button className="px-8 py-4 w-full rounded-full bg-transparent text-white font-bold border-2 border-white/20 hover:border-white hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2">
                Download CV
              </button>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="col-span-4 place-self-center mt-12 lg:mt-0 relative"
        >
          {/* Glowing Animated Ring */}
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.05, 1],
            }}
            transition={{
              rotate: { duration: 15, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute -inset-4 rounded-full border-2 border-dashed border-cyan-500/40"
          />

          {/* Inner Static Glow */}
          <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-2xl animate-pulse" />

          {/* Profile Image Container */}
          <div className="relative rounded-full p-1 bg-gradient-to-tr from-blue-500 via-cyan-400 to-indigo-500 shadow-[0_0_50px_rgba(6,182,212,0.3)]">
            <div className="bg-[#121212] rounded-full p-1">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="overflow-hidden rounded-full w-[250px] h-[250px] lg:w-[320px] lg:h-[320px] relative"
              >
                <Image
                  src="/images/my pic.jpg"
                  alt="M Suhiab"
                  className="object-cover"
                  fill
                  priority
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;