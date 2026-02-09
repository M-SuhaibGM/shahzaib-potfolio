"use client";
import React, { useTransition, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TabButton from "./TabButton";
import {
  CommandLineIcon,
  AcademicCapIcon,
  MapPinIcon,
  SparklesIcon,
  BriefcaseIcon
} from "@heroicons/react/24/outline";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        {/* Category: Frontend with Percentage Sliders */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-4">Frontend Proficiency</h4>
          <div className="space-y-4">
            {[
              { name: "Next.js / React", level: "90%" },
              { name: "Tailwind CSS", level: "95%" },
              { name: "JavaScript / TS", level: "85%" },
            ].map((skill) => (
              <div key={skill.name} className="space-y-1">
                <div className="flex justify-between text-sm font-medium">
                  <span>{skill.name}</span>
                  <span className="text-blue-500">{skill.level}</span>
                </div>
                <div className="h-2 w-full bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: skill.level }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-blue-600 to-cyan-400"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category: Backend with Percentage Sliders */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-purple-500 mb-4">Backend & Database</h4>
          <div className="space-y-4">
            {[
              { name: "Node.js / Express", level: "80%" },
              { name: "Prisma / MySQL", level: "75%" },
              { name: "MongoDB", level: "70%" },
            ].map((skill) => (
              <div key={skill.name} className="space-y-1">
                <div className="flex justify-between text-sm font-medium">
                  <span>{skill.name}</span>
                  <span className="text-purple-500">{skill.level}</span>
                </div>
                <div className="h-2 w-full bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: skill.level }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-purple-600 to-pink-400"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    ),
  },
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
            desc: "Focusing on Software Engineering and Modern Web Tech."
          },
          {
            degree: "ICS (Physics)",
            school: "Concordia College Ellah Abad",
            year: "2020 - 2022",
            desc: "Intermediate in Computer Science."
          },
          {
            degree: "Matriculation",
            school: "Govt. Higher Secondary School Kangan Pur",
            year: "2018 - 2020",
            desc: "Science Stream with Computer Science focus."
          },
        ].map((edu, idx) => (
          <div key={idx} className="relative pl-6 border-l-2 border-blue-500/30 py-1">
            <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7.5px] top-2 shadow-[0_0_12px_#3b82f6]" />
            <h4 className="font-bold text-slate-900 dark:text-white leading-tight">{edu.degree}</h4>
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400">{edu.school}</p>
            <p className="text-xs text-slate-500 mt-1 italic">{edu.desc}</p>
            <p className="text-[10px] font-mono mt-2 uppercase tracking-tighter opacity-70">{edu.year}</p>
          </div>
        ))}
      </motion.div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="py-20 text-slate-900 dark:text-slate-200" id="about">
      <div className="md:grid md:grid-cols-2 gap-12 items-start xl:gap-24">

        {/* LEFT SIDE: Identity & Status */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 h-[400px] shadow-2xl"
          >
            <img src="/images/bg.jpg" alt="Work Setup" className="object-cover w-full h-full" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 flex items-center gap-3 text-white">
              <div className="p-2 bg-blue-500 rounded-lg">
                <MapPinIcon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs opacity-70 uppercase font-bold tracking-tighter">Location</p>
                <span className="text-sm font-semibold">Kanganpur, Pakistan</span>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-5 rounded-3xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-sm hover:border-blue-500/50 transition-colors group">
              <SparklesIcon className="w-6 h-6 text-yellow-500 mb-3 group-hover:scale-110 transition-transform" />
              <p className="text-[10px] font-bold uppercase text-slate-400 mb-1">Learning</p>
              <p className="text-sm font-bold leading-tight">AI & Cloud Architecture</p>
            </div>
            <div className="p-5 rounded-3xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-sm hover:border-blue-500/50 transition-colors group">
              <BriefcaseIcon className="w-6 h-6 text-blue-500 mb-3 group-hover:scale-110 transition-transform" />
              <p className="text-[10px] font-bold uppercase text-slate-400 mb-1">Open For</p>
              <p className="text-sm font-bold leading-tight">Remote Collaboration</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Narrative & Tabs */}
        <div className="mt-8 md:mt-0 flex flex-col h-full">
          <h2 className="text-5xl font-black mb-6 tracking-tighter dark:text-white">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">Me</span>
          </h2>
          <p className="text-base lg:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
            I am a full-stack developer obsessed with performance and sleek design.
            Currently pursuing my BSCS at University of Okara, I turn complex problems into elegant digital solutions.
          </p>

          <div className="flex flex-row gap-8 mb-10 border-b border-black/5 dark:border-white/10">
            {["skills", "education"].map((t) => (
              <TabButton
                key={t}
                selectTab={() => handleTabChange(t)}
                active={tab === t}
              >
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </TabButton>
            ))}
          </div>

          <div className="min-h-[350px]">
            <AnimatePresence mode="wait">
              {TAB_DATA.find((t) => t.id === tab).content}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* BACKGROUND TECH MARQUEE */}
      <div className="mt-32 overflow-hidden relative opacity-40 dark:opacity-100">
        <motion.div
          animate={{ x: [0, -1200] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 whitespace-nowrap select-none"
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16 items-center">
              {["NEXT.JS", "REACT", "TAILWIND", "PRISMA", "MONGODB", "MYSQL", "TYPESCRIPT", "NODE.JS"].map((tech) => (
                <span key={tech} className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-300 to-indigo-500">
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