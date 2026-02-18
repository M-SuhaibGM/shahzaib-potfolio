"use client";
import React from "react";
import { motion } from "framer-motion";

const SKILLS_DATA = [
  {
    category: "Cloud & Orchestration",
    skills: [
      { name: "AWS (EKS/EC2/S3)", level: 90 },
      { name: "Kubernetes", level: 85 },
      { name: "Docker", level: 90 },
      { name: "Nginx & DNS", level: 80 },
    ],
  },
  {
    category: "DevOps & GitOps",
    skills: [
      { name: "Terraform (IaC)", level: 85 },
      { name: "GitHub Actions (CI/CD)", level: 95 },
      { name: "ArgoCD", level: 80 },
      { name: "Git & Shell Scripting", level: 85 },
    ],
  },
  {
    category: "Monitoring & Security",
    skills: [
      { name: "Prometheus & Grafana", level: 80 },
      { name: "SonarQube & OWASP", level: 75 },
      { name: "Linux Administration", level: 90 },
      { name: "Computer Networks", level: 85 },
    ],
  },
  {
    category: "Web & Development",
    skills: [
      { name: "Python", level: 80 },
      { name: "HTML & CSS", level: 85 },
      { name: "WordPress", level: 70 },
      { name: "Let's Encrypt / SSL", level: 90 },
    ],
  },
];

const SkillCard = ({ category, skills }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-amber-950/40 border border-orange-500/20 backdrop-blur-xl p-8 rounded-[2rem] shadow-2xl hover:border-orange-500/50 transition-colors group"
  >
    <h3 className="text-orange-400 font-mono text-xs font-bold uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
      <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
      {category}
    </h3>
    <div className="space-y-8">
      {skills.map((skill, index) => (
        <div key={index} className="space-y-3">
          <div className="flex justify-between items-end">
            <span className="text-white font-bold text-lg tracking-tight">{skill.name}</span>
            <span className="text-orange-400 font-mono text-sm">{skill.level}%</span>
          </div>
          <div className="h-2 w-full bg-amber-900/50 rounded-full overflow-hidden border border-white/5">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-orange-600 to-amber-400 shadow-[0_0_15px_rgba(249,115,22,0.4)]"
            />
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/5 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-300">Stack</span>
          </h2>
          <p className="text-amber-100/60 font-mono text-sm uppercase tracking-widest">
            System Capabilities & Proficiency Levels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS_DATA.map((item, idx) => (
            <SkillCard key={idx} {...item} />
          ))}
        </div>
      </div>
      {/* --- ADDITIONAL EXPERTISE SECTION --- */}
      <div className="mt-32">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-4">
            Additional <span className="text-orange-500">Expertise</span>
          </h3>
          <div className="h-1 w-20 bg-gradient-to-r from-orange-600 to-amber-400 mx-auto rounded-full" />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
        >
          {[
            "Agile Methodology", "Nginx", "Prometheus", "Grafana",
            "Redis", "PostgreSQL", "GitOps", "Microservices",
            "Cloud Security", "Helm Charts", "API Gateway", "DNS Management"
          ].map((skill, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(249, 115, 22, 0.2)" }}
              className="px-6 py-3 rounded-2xl bg-amber-950/50 border border-orange-500/20 text-amber-100/80 font-bold text-sm tracking-wide cursor-default transition-all shadow-lg hover:border-orange-500/50"
            >
              {` ${skill}`}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;