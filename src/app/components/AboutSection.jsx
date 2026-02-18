"use client";
import React, { useTransition, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPinIcon,
  CpuChipIcon,
  CloudArrowUpIcon,
  AcademicCapIcon,
  BriefcaseIcon
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
            school: "Aspire College Deplapur ",
            year: "2020 - 2022",
            desc: "Foundation in Mathematics and Physic Logic."
          }, {
            degree: "Matric",
            school: "Govt. High School Depalpur ",
            year: "2020 - 2022",
            desc: ""
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
    <section className="py-20 bg-slate-950 text-slate-200" id="about">
      <div className="container mx-auto px-4 md:grid md:grid-cols-2 gap-12 items-start xl:gap-24">

        {/* LEFT SIDE: Identity & Status */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative rounded-2xl overflow-hidden border border-orange-500/20 h-[400px] shadow-2xl"
          >
            <img src="/images/bg.jpg" alt="Server Room" className="object-cover w-full h-full transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 flex items-center gap-3 text-white">
              <div className="p-2 bg-orange-600 rounded-lg shadow-[0_0_15px_rgba(234,88,12,0.4)]">
                <MapPinIcon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] opacity-70 uppercase font-mono font-bold tracking-widest">Zone</p>
                <span className="text-sm font-bold font-mono">pk-east-1 (lahore)</span>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-slate-900 border border-orange-500/10 hover:border-orange-500/40 transition-all group">
              <AcademicCapIcon className="w-6 h-6 text-orange-500 mb-3" />
              <p className="text-[10px] font-bold uppercase text-slate-500 mb-1 font-mono">Current Status</p>
              <p className="text-sm font-bold text-white">BSCS Student</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900 border border-orange-500/10 hover:border-orange-500/40 transition-all group">
              <BriefcaseIcon className="w-6 h-6 text-amber-500 mb-3" />
              <p className="text-[10px] font-bold uppercase text-slate-500 mb-1 font-mono">Open For</p>
              <p className="text-sm font-bold text-white">DevOps Internships</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Narrative & Tabs */}
        <div className="mt-8 md:mt-0 flex flex-col h-full">
          <h2 className="text-5xl font-black mb-6 tracking-tighter text-white">
            Root <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400 underline decoration-orange-500/30">History</span>
          </h2>
          <p className="text-base lg:text-lg text-slate-400 leading-relaxed mb-8 font-light">
            I am a junior DevOps Engineer passionate about optimizing the development lifecycle.
            I focus on creating <span className="text-orange-400">self-healing infrastructures</span> and
            robust delivery pipelines that allow teams to ship code faster and with fewer errors.
          </p>

          <div className="flex flex-row gap-8 mb-10 border-b border-white/5">
            {["education"].map((t) => (
              <button
                key={t}
                onClick={() => handleTabChange(t)}
                className={`pb-2 text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300 ${tab === t ? "text-orange-500 border-b-2 border-orange-500" : "text-slate-500 hover:text-slate-300"
                  }`}
              >
                {` ${t} `}
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

      {/* BACKGROUND TECH MARQUEE */}
      <div className="mt-32 overflow-hidden relative">
        <motion.div
          animate={{ x: [0, -2000] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 whitespace-nowrap select-none font-mono"
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16 items-center">
              {["DOCKER", "KUBERNETES", "TERRAFORM", "AWS", "JENKINS", "LINUX", "ANSIBLE", "PROMETHEUS"].map((tech) => (
                <span
                  key={tech}
                  className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-900 via-orange-600 to-amber-400 "
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