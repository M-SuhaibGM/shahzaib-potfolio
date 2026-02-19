"use client";
import React, { useTransition, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPinIcon,
  CpuChipIcon,
  CloudArrowUpIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  CheckBadgeIcon,
  ServerIcon,
  CommandLineIcon
} from "@heroicons/react/24/outline";

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        {[
          {
            degree: "BS Computer Science",
            school: "University of Okara",
            year: "2022 - 2026",
            desc: "Specializing in Distributed Systems and Network Infrastructure."
          },
          {
            degree: "FSC (Pre-Engineering)",
            school: "Aspire College Depalpur",
            year: "2020 - 2022",
            desc: "Foundation in Mathematics and Physics Logic."
          },
          {
            degree: "Matriculation",
            school: "Govt. High School Depalpur",
            year: "2018 - 2020",
            desc: "Science Group with focus on Computer Science."
          }
        ].map((edu, idx) => (
          <div key={idx} className="relative pl-6 border-l-2 border-orange-500/30 py-1">
            <div className="absolute w-2 h-2 bg-orange-500 rounded-full -left-[5px] top-2 shadow-[0_0_10px_#f97316]" />
            <h4 className="font-bold text-white leading-tight">{edu.degree}</h4>
            <p className="text-sm font-medium text-orange-400">{edu.school}</p>
            <p className="text-xs text-slate-500 mt-1 italic">{edu.desc}</p>
            <p className="text-[10px] font-mono mt-2 uppercase text-orange-500/60">{edu.year}</p>
          </div>
        ))}
      </motion.div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="py-24 bg-slate-950 text-slate-200 overflow-hidden" id="about">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative">
        
        {/* --- LEFT SIDE: SYSTEM DASHBOARD (REPLACES IMAGE) --- */}
        <div className="relative space-y-6">
          {/* Decorative Code Background Element */}
          <div className="absolute -top-10 -left-10 text-orange-500/5 font-mono text-8xl select-none pointer-events-none">
            {"{...}"}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Status Card 1 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-6 rounded-3xl bg-slate-900/50 border border-orange-500/10 backdrop-blur-sm"
            >
              <BriefcaseIcon className="w-8 h-8 text-orange-500 mb-4" />
              <h3 className="text-white font-bold text-lg">Open For Work</h3>
              <p className="text-slate-500 text-xs font-mono uppercase mt-2">DevOps & Cloud Roles</p>
            </motion.div>

            {/* Status Card 2 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-6 rounded-3xl bg-slate-900/50 border border-orange-500/10 backdrop-blur-sm"
            >
              <CpuChipIcon className="w-8 h-8 text-amber-500 mb-4" />
              <h3 className="text-white font-bold text-lg">System Health</h3>
              <p className="text-orange-500/80 text-xs font-mono uppercase mt-2">100% Uptime Mindset</p>
            </motion.div>

            {/* Status Card 3 (Full Width on Mobile) */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="col-span-1 sm:col-span-2 p-6 rounded-3xl bg-gradient-to-br from-slate-900 to-orange-950/20 border border-orange-500/20"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-orange-500/10 rounded-xl">
                  <ServerIcon className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-white font-bold">Infrastucture as Code</h3>
                  <p className="text-slate-400 text-sm italic">"Automate everything, document nothing manual."</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Technical Radar / Mini List */}
          <div className="p-8 rounded-3xl bg-slate-900/30 border border-white/5 space-y-4">
            <h4 className="text-xs font-mono font-bold text-orange-500/60 uppercase tracking-widest">Core Principles</h4>
            <div className="space-y-3">
              {[
                { label: "Automation First", icon: <CommandLineIcon className="w-4 h-4" /> },
                { label: "Scalable Architecture", icon: <CloudArrowUpIcon className="w-4 h-4" /> },
                { label: "Security & Monitoring", icon: <CheckBadgeIcon className="w-4 h-4" /> }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-300">
                  <span className="text-orange-500">{item.icon}</span>
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE: NARRATIVE & TABS --- */}
        <div className="flex flex-col">
          <div className="mb-8">
            <h2 className="text-5xl font-black mb-6 tracking-tighter text-white">
              Root <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400">History</span>
            </h2>
            <div className="h-1 w-20 bg-orange-600 rounded-full mb-8" />
            
            <p className="text-lg text-slate-400 leading-relaxed font-light">
              I am a junior <span className="text-white font-semibold">DevOps Engineer</span> passionate about optimizing the development lifecycle. 
              My expertise lies in bridging the gap between development and operations through 
              <span className="text-orange-400"> self-healing infrastructures</span> and robust delivery pipelines.
            </p>
          </div>

          {/* Tabs Navigation */}
          <div className="flex flex-row gap-8 mb-10 border-b border-white/5">
            {TAB_DATA.map((t) => (
              <button
                key={t.id}
                onClick={() => handleTabChange(t.id)}
                className={`pb-4 text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300 relative ${
                  tab === t.id ? "text-orange-500" : "text-slate-500 hover:text-slate-300"
                }`}
              >
                {t.title}
                {tab === t.id && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500" 
                  />
                )}
              </button>
            ))}
          </div>

          <div className="min-h-[300px]">
            <AnimatePresence mode="wait">
              {TAB_DATA.find((t) => t.id === tab).content}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* BACKGROUND TECH MARQUEE (Increased contrast slightly) */}
      <div className="mt-32 overflow-hidden relative opacity-40">
        <motion.div
          animate={{ x: [0, -2000] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 whitespace-nowrap select-none font-mono"
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16 items-center">
              {["DOCKER", "KUBERNETES", "TERRAFORM", "AWS", "JENKINS", "LINUX", "ANSIBLE", "PROMETHEUS"].map((tech) => (
                <span
                  key={tech}
                  className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-orange-900 to-slate-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;