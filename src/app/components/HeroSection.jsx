"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative py-12 lg:py-24 overflow-hidden bg-slate-950">
      {/* 🟠 ORANGE ENGINE GLOW */}
      <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-600/20 blur-[180px] rounded-full z-0" />

      {/* Main Grid Container */}
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-12 relative z-10 gap-8">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="col-span-1 sm:col-span-8 flex flex-col items-center sm:items-start text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-6 text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600">
              Deploying{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "SCALABLE INFRA",
                1500,
                "CI/CD PIPELINES",
                1500,
                "CLOUD SOLUTIONS",
                1500,
                "KUBERNETES",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-white font-mono"
            />
          </h1>

          <p className="text-slate-400 text-base sm:text-lg mb-3 lg:text-xl max-w-lg leading-relaxed font-light">
            I am a passionate DevOps Engineer with strong hands-on expertise in DevOps practices, Cloud Computing, and system troubleshooting. I specialize in building reliable, scalable, and automated infrastructure solutions while ensuring performance, security, and efficiency.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start w-full sm:w-auto">
            <Link href="#contact" className="w-full sm:w-auto">
              <button className="px-8 py-4 w-full rounded-lg bg-orange-600 text-white font-bold hover:bg-orange-500 transition-all duration-300 shadow-[0_0_20px_rgba(234,88,12,0.4)] border border-orange-400/50 uppercase tracking-wider">
                Hire Me
              </button>
            </Link>

            <a href="/Resume.pdf" download className="w-full sm:w-auto">
              <button className="px-8 py-4 w-full rounded-lg bg-transparent text-orange-500 font-bold border-2 border-orange-500/20 hover:border-orange-500 hover:bg-orange-500/5 transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-wider">
                Download Resume
              </button>
            </a>
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="col-span-1 sm:col-span-4 flex justify-center items-center mt-12 lg:mt-0 relative"
        >
          <div className="relative">
            {/* Pulsing Hexagon/Circle Glow */}
            <motion.div
              animate={{
                rotate: [0, 90, 180, 270, 360],
                borderWidth: ["2px", "4px", "2px"],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                borderWidth: { duration: 2, repeat: Infinity }
              }}
              className="absolute -inset-6 rounded-2xl border border-orange-500/30 border-dashed"
            />

            {/* Inner Power Glow */}
            <div className="absolute inset-0 rounded-full bg-orange-600/30 blur-3xl animate-pulse" />

            {/* Profile Image Container - Changed to a slightly "Squircle" shape for DevOps feel */}
            <div className="relative rounded-full p-1 bg-gradient-to-tr from-orange-600 via-amber-500 to-orange-400 shadow-[0_0_50px_rgba(234,88,12,0.2)]">
              <div className="bg-slate-900 rounded-full p-1">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="overflow-hidden rounded-full w-[250px] h-[250px] lg:w-[320px] lg:h-[320px] relative"
                >
                  <Image
                    src="/images/mypic.jpeg"
                    alt="DevOps Engineer"
                    className="object-cover  transition-all duration-500"
                    fill
                    priority
                  />
                </motion.div>
              </div>
            </div>

            {/* Mini Status Badge */}
            <div className="absolute -bottom-4 -right-4 bg-slate-900 border border-orange-500 px-3 py-1 rounded-md flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span className="text-[10px] font-mono text-orange-500 uppercase font-bold">System Online</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;